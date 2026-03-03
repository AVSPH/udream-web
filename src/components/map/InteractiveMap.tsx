"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import type { VisitedPlace } from "@/data/visited-places";

// We import leaflet dynamically in the component, but we need the types here
let L: typeof import("leaflet");

interface InteractiveMapProps {
  places: VisitedPlace[];
}

const createCustomIcon = () => {
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(0,0,0,0.4)"/>
        </filter>
      </defs>
      <path
        d="M16 0C7.163 0 0 7.163 0 16c0 10.627 14.234 24.562 15.337 25.625a.94.94 0 0 0 1.326 0C17.766 40.562 32 26.627 32 16 32 7.163 24.837 0 16 0z"
        fill="#9E414C"
        filter="url(#shadow)"
      />
      <circle cx="16" cy="15" r="7" fill="#FFFFFF" opacity="0.95"/>
      <circle cx="16" cy="15" r="4" fill="#9E414C"/>
    </svg>
  `;
  return svgString;
};

export default function InteractiveMap({ places }: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (!mapContainerRef.current || mapRef.current) return;

    const initMap = async () => {
      L = await import("leaflet");

      if (!isMounted || !mapContainerRef.current) return;

      // Handle potential race condition in React Strict Mode
      const container = mapContainerRef.current as any;
      if (container._leaflet_id) {
        container._leaflet_id = null;
      }

      const bounds = L.latLngBounds([-90, -180], [90, 180]);

      const map = L.map(mapContainerRef.current!, {
        center: [20, 10],
        zoom: 2.5,
        minZoom: 2.5,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        zoomControl: false,
        attributionControl: true,
      });

      mapRef.current = map;

      // CartoDB Voyager tiles — a lighter, more balanced style with soft colors
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
          bounds: bounds,
          noWrap: true,
        }
      ).addTo(map);

      // Custom zoom control (top-right)
      L.control.zoom({ position: "topright" }).addTo(map);

      // Custom icon using SVG
      const customIcon = L.divIcon({
        html: createCustomIcon(),
        className: "",
        iconSize: [32, 42],
        iconAnchor: [16, 42],
        popupAnchor: [0, -44],
      });

      // Add markers
      places.forEach((place) => {
        const marker = L.marker(place.coordinates, { icon: customIcon });

        const popupContent = `
          <div class="udream-popup">
            <div class="udream-popup-img-wrapper">
              <img src="${place.thumbnail}" alt="${place.name}" class="udream-popup-img" />
              <div class="udream-popup-country">${place.country}</div>
            </div>
            <div class="udream-popup-body">
              <h3 class="udream-popup-name">${place.name}</h3>
              <p class="udream-popup-date">📅 ${place.dateVisited}</p>
              <p class="udream-popup-desc">${place.description}</p>
              <a href="${place.blogLink}" class="udream-popup-link">Read the story →</a>
            </div>
          </div>
        `;

        marker
          .addTo(map)
          .bindPopup(popupContent, {
            maxWidth: 280,
            className: "udream-popup-container",
          });
      });
    };

    if (typeof window !== "undefined") {
      initMap();
    }

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [places]);

  return (
    <>
      <style>{`
        /* Map container */
        .leaflet-container {
          background: #f9f6f1;
          font-family: 'Inter', sans-serif;
        }

        /* Zoom controls */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
          border-radius: 10px !important;
          overflow: hidden;
          margin-top: 1rem !important;
          margin-right: 1rem !important;
        }
        .leaflet-control-zoom a {
          background-color: #2E261E !important;
          color: #EBE6D9 !important;
          border: none !important;
          width: 36px !important;
          height: 36px !important;
          line-height: 36px !important;
          font-size: 18px !important;
          transition: background-color 0.2s ease;
        }
        .leaflet-control-zoom a:hover {
          background-color: #9E414C !important;
          color: #fff !important;
        }

        /* Attribution */
        .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.5) !important;
          color: #6B5E53 !important;
          font-size: 10px !important;
          backdrop-filter: blur(4px);
          border-top-left-radius: 6px !important;
        }
        .leaflet-control-attribution a {
          color: #9E414C !important;
        }

        /* Popup wrapper */
        .udream-popup-container .leaflet-popup-content-wrapper {
          background: #2E261E;
          border-radius: 14px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6);
          padding: 0;
          overflow: hidden;
          border: 1px solid #3D342C;
        }
        .udream-popup-container .leaflet-popup-content {
          margin: 0;
          width: 280px !important;
        }
        .udream-popup-container .leaflet-popup-tip {
          background: #2E261E;
        }
        .udream-popup-container .leaflet-popup-close-button {
          color: #EBE6D9 !important;
          font-size: 20px !important;
          top: 8px !important;
          right: 10px !important;
          z-index: 10;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .udream-popup-container .leaflet-popup-close-button:hover {
          opacity: 1;
          color: #9E414C !important;
        }

        /* Popup internals */
        .udream-popup { font-family: 'Inter', sans-serif; }
        .udream-popup-img-wrapper {
          position: relative;
          width: 100%;
          height: 150px;
          overflow: hidden;
        }
        .udream-popup-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .udream-popup-country {
          position: absolute;
          bottom: 8px;
          left: 10px;
          background: rgba(158, 65, 76, 0.9);
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 20px;
        }
        .udream-popup-body {
          padding: 14px 16px 16px;
        }
        .udream-popup-name {
          font-family: 'Alfa Slab One', serif;
          font-size: 20px;
          color: #EBE6D9;
          margin: 0 0 4px;
          line-height: 1.2;
        }
        .udream-popup-date {
          font-size: 12px;
          color: #D4A373;
          margin: 0 0 8px;
        }
        .udream-popup-desc {
          font-size: 13px;
          color: #A8917E;
          margin: 0 0 12px;
          line-height: 1.5;
        }
        .udream-popup-link {
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          color: #9E414C;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }
        .udream-popup-link:hover {
          color: #D4A373;
        }
      `}</style>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
    </>
  );
}

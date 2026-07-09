"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { SmartImage } from "./SmartImage";
import type { AccommodationImage } from "@/data/accommodations";

export function AccommodationGallery({ images }: { images: AccommodationImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  if (images.length === 0) return null;

  const [hero, ...rest] = images;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-2 rounded-3xl overflow-hidden">
        <button
          onClick={() => setActive(0)}
          className="relative sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto group"
        >
          <SmartImage
            src={hero.src}
            alt={hero.alt}
            caption={hero.caption}
            className="w-full h-full object-cover min-h-[220px] transition-transform duration-500 group-hover:scale-105"
          />
        </button>
        {rest.slice(0, 4).map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i + 1)}
            className="relative aspect-[4/3] hidden sm:block group overflow-hidden"
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {i === 3 && images.length > 5 && (
              <span className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-sm">
                +{images.length - 5} photos
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Thumbnail strip on mobile */}
      <div className="flex sm:hidden gap-2 mt-2 overflow-x-auto pb-1">
        {rest.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i + 1)}
            className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden"
          >
            <SmartImage src={img.src} alt={img.alt} caption={img.caption} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[6000] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <SmartImage
              src={images[active].src}
              alt={images[active].alt}
              caption={images[active].caption}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            {images[active].caption && (
              <figcaption className="text-center text-white/70 text-sm mt-3">{images[active].caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}

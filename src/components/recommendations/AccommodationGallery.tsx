"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { SmartImage } from "./SmartImage";
import type { AccommodationImage } from "@/data/accommodations";

export function AccommodationGallery({ images }: { images: AccommodationImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );

  // Keyboard navigation + lock body scroll while the lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, prev, next]);

  if (images.length === 0) return null;

  const [hero, ...rest] = images;

  return (
    <>
      {/* Feature grid ~ hero + four, with a "show all" affordance */}
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 rounded-3xl overflow-hidden aspect-[16/9] max-h-[560px]">
        <button
          onClick={() => setActive(0)}
          className="relative col-span-4 row-span-2 sm:col-span-2 group"
          aria-label="Open photo 1"
        >
          <SmartImage
            src={hero.src}
            alt={hero.alt}
            caption={hero.caption}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>
        {rest.slice(0, 4).map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i + 1)}
            className="relative hidden sm:block col-span-1 row-span-1 group overflow-hidden"
            aria-label={`Open photo ${i + 2}`}
          >
            <SmartImage
              src={img.src}
              alt={img.alt}
              caption={img.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
          </button>
        ))}

        {/* Show all photos button */}
        <button
          onClick={() => setActive(0)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur border border-border text-foreground text-sm font-semibold shadow-lg hover:bg-white transition-colors"
        >
          <Images className="w-4 h-4" />
          Show all {images.length} photos
        </button>
      </div>

      {/* Scrollable thumbnail strip (all screens) */}
      <div className="flex gap-2 mt-2 overflow-x-auto pb-1 snap-x">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="relative w-28 h-20 shrink-0 rounded-xl overflow-hidden snap-start ring-offset-2 hover:ring-2 hover:ring-primary/50 transition"
            aria-label={`Open photo ${i + 1}`}
          >
            <SmartImage src={img.src} alt={img.alt} caption={img.caption} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox with prev/next */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[6000] bg-black/92 flex flex-col items-center justify-center p-4"
          onClick={close}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 text-white/80">
            <span className="text-sm tabular-nums">
              {active + 1} / {images.length}
            </span>
            <button onClick={close} className="hover:text-white p-2" aria-label="Close">
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <SmartImage
              src={images[active].src}
              alt={images[active].alt}
              caption={images[active].caption}
              className="w-full max-h-[78vh] object-contain rounded-2xl"
            />
            {images[active].caption && (
              <figcaption className="text-center text-white/70 text-sm mt-3">{images[active].caption}</figcaption>
            )}
          </figure>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}

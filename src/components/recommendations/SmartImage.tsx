"use client";

import { useState, useRef, useEffect } from "react";
import { ImageOff } from "lucide-react";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

// Renders a photo, but falls back to a tasteful placeholder if the file is not
// in the repo yet ~ so the page never shows a broken image while photos are
// still being added. Also catches the case where the image already errored
// before React hydrated (server-rendered img + fast 404).
export function SmartImage({ src, alt, className, caption }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-secondary/15 text-muted-foreground/70 ${className ?? ""}`}
        aria-label={alt}
      >
        <ImageOff className="w-6 h-6 opacity-50" />
        {caption && <span className="text-xs px-4 text-center leading-snug">{caption}</span>}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

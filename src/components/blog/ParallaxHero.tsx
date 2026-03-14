"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ParallaxHeroProps {
    src: string;
    alt: string;
}

export function ParallaxHero({ src, alt }: ParallaxHeroProps) {
    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
            />

            {/* Top gradient for back-button legibility */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />

            <Link
                href="/blog"
                className="absolute top-24 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm font-medium hover:bg-black/50 transition-colors z-10"
            >
                <ArrowLeft className="w-4 h-4" />
                All Posts
            </Link>
        </div>
    );
}

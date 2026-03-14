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
        <div className="relative h-[65vh] min-h-[420px] w-full overflow-hidden">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                priority
            />
            {/* Gradient — top for back button, bottom to bleed into content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

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

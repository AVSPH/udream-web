"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ParallaxHeroProps {
    src: string;
    alt: string;
}

export function ParallaxHero({ src, alt }: ParallaxHeroProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <div ref={ref} className="relative h-[65vh] min-h-[420px] w-full overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Gradient fade into page */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />

            <Link
                href="/blog"
                className="absolute top-24 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm font-medium hover:bg-black/50 transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                All Posts
            </Link>
        </div>
    );
}

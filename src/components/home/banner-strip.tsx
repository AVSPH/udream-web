"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STICKERS = [
  {
    src: "/assets/sticker/sticker-1.png",
    alt: "Sticker 1",
    rotate: -6,
    height: 200,
  },
  {
    src: "/assets/sticker/sticker-2.png",
    alt: "Sticker 2",
    rotate: 4,
    height: 180,
  },
  {
    src: "/assets/sticker/sticker-3.png",
    alt: "Sticker 3",
    rotate: -3,
    height: 195,
  },
  {
    src: "/assets/sticker/sticker-4.png",
    alt: "Sticker 4",
    rotate: 6,
    height: 185,
  },
  {
    src: "/assets/sticker/sticker-5.png",
    alt: "Sticker 5",
    rotate: -5,
    height: 190,
  },
  {
    src: "/assets/sticker/sticker-6.png",
    alt: "Sticker 6",
    rotate: -5,
    height: 190,
  },
  {
    src: "/assets/sticker/sticker-7.png",
    alt: "Sticker 7",
    rotate: -5,
    height: 190,
  },
];

// Duplicate enough times for a seamless loop
const ITEMS = [...STICKERS, ...STICKERS, ...STICKERS];

export function BannerStrip() {
    return (
        <div className="relative w-full py-4">

            <div className="overflow-hidden">
                <motion.div
                    className="flex items-end gap-24"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    style={{ width: "max-content" }}
                >
                    {ITEMS.map((sticker, i) => (
                        <div
                            key={i}
                            style={{ transform: `rotate(${sticker.rotate}deg)` }}
                            className="flex-shrink-0"
                        >
                            <Image
                                src={sticker.src}
                                alt={sticker.alt}
                                width={sticker.height}
                                height={sticker.height}
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Youtube, Play, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

type SocialPost = {
    id: number;
    type: "image" | "video" | "youtube";
    url: string;
    likes?: string;
    comments?: string;
};

const SOCIAL_POSTS: SocialPost[] = [
    {
        id: 1,
        type: "youtube",
        url: "https://www.youtube.com/embed/7yQJpWLr8-8?si=tAhiE9MezrnsmJ_r",
    },
    {
        id: 2,
        type: "youtube",
        url: "https://www.youtube.com/embed/ZO91fVZmufw?si=GPe9iwOUGT35P8ZH",
    },
    {
        id: 3,
        type: "youtube",
        url: "https://www.youtube.com/embed/VeLQMaO9Oek?si=59D3E2q3KJoNUqcb",
    },
        {
        id: 4,
        type: "youtube",
        url: "https://www.youtube.com/embed/PgAHiv259tA?si=6PRIo1d20Z_DYdca",
    },
        {
        id: 5,
        type: "youtube",
        url: "https://www.youtube.com/embed/yu9UMl8hv-8?si=BIngWrLK3y8mXKPY",
    },
        {
        id: 6,
        type: "youtube",
        url: "https://www.youtube.com/embed/otcw4YGZtv0?si=PiK-Rn0QYfCAx4z2",
    },
];

export function SocialWall() {
    return (
        <section id="gallery" className="py-24 px-4 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        <Youtube className="w-4 h-4" />
                        <span>Udream Travels</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Watch Our <span style={{ fontFamily: "var(--font-script)" }} className="text-primary italic">Latest Adventures</span>
                    </motion.h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our latest travel vlogs, destination guides, and cinematic journeys on YouTube.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {SOCIAL_POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group rounded-2xl overflow-hidden break-inside-avoid"
                        >
                            {post.type === "youtube" ? (
                                <div className="video-responsive w-full aspect-video">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={post.url}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full object-cover"
                                    ></iframe>
                                </div>
                            ) : (
                                <Image
                                    src={post.url}
                                    alt={`Social post ${post.id}`}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            )}

                            {/* Overlay */}
                            {post.type !== "youtube" && (
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <div className="flex gap-6 text-white font-semibold">
                                        <div className="flex items-center gap-2">
                                            <Heart className="w-6 h-6 fill-white" />
                                            <span>{post.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="w-6 h-6 fill-white" />
                                            <span>{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Video Icon */}
                            {post.type === "video" && (
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-none">
                                    <Play className="w-4 h-4 fill-white" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.a
                        href="https://www.youtube.com/@UdreamTravels"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-foreground text-background px-8 text-sm font-semibold shadow-xl transition-all hover:bg-foreground/90 gap-2"
                    >
                        <Youtube className="w-5 h-5" />
                        Subscribe Now
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

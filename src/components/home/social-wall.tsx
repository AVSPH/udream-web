"use client";

import { motion } from "framer-motion";
import { Instagram, Play, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const SOCIAL_POSTS = [
    {
        id: 1,
        type: "image",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
        likes: "2.4k",
        comments: "56",
    },
    {
        id: 2,
        type: "video",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
        likes: "5.1k",
        comments: "124",
    },
    {
        id: 3,
        type: "image",
        url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80",
        likes: "1.8k",
        comments: "42",
    },
    {
        id: 4,
        type: "image",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        likes: "3.2k",
        comments: "89",
    },
    {
        id: 5,
        type: "video",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        likes: "4.5k",
        comments: "93",
    },
    {
        id: 6,
        type: "image",
        url: "https://images.unsplash.com/photo-1433086566717-926ff693f567?w=600&q=80",
        likes: "2.9k",
        comments: "67",
    },
];

export function SocialWall() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                    >
                        <Instagram className="w-4 h-4" />
                        <span>@udream_travel</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Follow Our <span className="text-muted-foreground">Journey</span>
                    </motion.h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get daily travel inspiration, behind-the-scenes content, and real-time updates from our adventures.
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
                            className="relative group rounded-2xl overflow-hidden bg-muted break-inside-avoid"
                        >
                            <Image
                                src={post.url}
                                alt={`Social post ${post.id}`}
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

                            {/* Video Icon */}
                            {post.type === "video" && (
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white">
                                    <Play className="w-4 h-4 fill-white" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-foreground text-background px-8 text-sm font-semibold shadow-xl transition-all hover:bg-foreground/90"
                    >
                        Follow on Instagram
                    </motion.a>
                </div>
            </div>
        </section>
    );
}

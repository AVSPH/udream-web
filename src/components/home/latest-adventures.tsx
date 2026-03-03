"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data for the latest blogs
const LATEST_BLOGS = [
    {
        id: 1,
        title: "10 Hidden Gems in Kyoto You Must Visit",
        excerpt: "Discover the quiet temples, bamboo grooves, and authentic matcha tea houses away from the crowds.",
        date: "Oct 12, 2023",
        readTime: "5 min read",
        thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
        slug: "/blog/kyoto-hidden-gems",
        category: "Guide",
    },
    {
        id: 2,
        title: "The Ultimate Iceland Ring Road Itinerary",
        excerpt: "A complete 7-day guide to exploring waterfalls, glaciers, and black sand beaches in Iceland.",
        date: "Sep 28, 2023",
        readTime: "8 min read",
        thumbnail: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&q=80",
        slug: "/blog/iceland-ring-road",
        category: "Itinerary",
    },
    {
        id: 3,
        title: "A Culinary Journey Through Bangkok",
        excerpt: "From street food stalls to Michelin-starred restaurants, exploring the vibrant flavors of Thailand.",
        date: "Aug 15, 2023",
        readTime: "6 min read",
        thumbnail: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&q=80",
        slug: "/blog/bangkok-food",
        category: "Food",
    },
];

const BlogCard = ({ blog, index }: { blog: typeof LATEST_BLOGS[0]; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-background/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-background/10 shadow-sm hover:shadow-md transition-shadow"
        >
            <Link href={blog.slug} className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                    {blog.category}
                </div>
            </Link>

            <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-background/50 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{blog.readTime}</span>
                    </div>
                </div>

                <Link href={blog.slug} className="group-hover:text-primary transition-colors">
                    <h3 className="text-xl font-geist mb-2 line-clamp-2 text-white drop-shadow-sm tracking-tight">{blog.title}</h3>
                </Link>
                <p className="text-background/60 text-sm line-clamp-3 mb-6 flex-1">
                    {blog.excerpt}
                </p>

                <Link
                    href={blog.slug}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
                >
                    Read article
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </motion.article>
    );
};

export function LatestAdventures() {
    return (
        <section className="py-24 px-4 bg-foreground">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-background"
                    >
                        Latest <span className="text-primary">Adventures</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-background/60"
                    >
                        Dive into our travel journals, guides, and tips from recent trips around the world.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LATEST_BLOGS.map((blog, index) => (
                        <BlogCard key={blog.id} blog={blog} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/blog"
                        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                        View all articles
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

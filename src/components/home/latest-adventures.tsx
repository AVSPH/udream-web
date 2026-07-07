"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPublicBlogs } from "@/hooks/useblogs";
import { customStaticBlogs } from "@/data/static-blogs-list";

// Unified card model: merges CMS posts with the static long-form articles.
type FeedItem = {
    id: string;
    title: string;
    image?: string;
    category?: string;
    date: string;
    href: string;
};

const STATIC_ITEMS: FeedItem[] = customStaticBlogs.map((b) => ({
    id: b.id,
    title: b.title,
    image: b.thumbnail,
    category: b.category,
    date: b.date,
    href: b.href,
}));

const latestThree = (items: FeedItem[]) =>
    [...items]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

const BlogCard = ({ blog, index }: { blog: FeedItem; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            <Link href={blog.href} className="relative aspect-[16/10] overflow-hidden">
                {blog.image ? (
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-primary/30" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {blog.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                        {blog.category}
                    </span>
                )}
            </Link>

            <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                        {new Date(blog.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </span>
                </div>

                <Link href={blog.href}>
                    <h3 className="font-bold text-base leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                        {blog.title}
                    </h3>
                </Link>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
                    <Link
                        href={blog.href}
                        className="inline-flex items-center gap-1 text-xs text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                        Read article
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
};

export function LatestAdventures() {
    // Static articles render instantly; CMS posts merge in when they load.
    const [blogs, setBlogs] = useState<FeedItem[]>(latestThree(STATIC_ITEMS));

    useEffect(() => {
        getPublicBlogs({ limit: 6 })
            .then((res) => {
                const apiItems: FeedItem[] = res.data.map((b) => ({
                    id: b._id,
                    title: b.title,
                    image: b.featuredImage,
                    category: b.category,
                    date: b.createdAt,
                    href: `/blog/${b.slug}`,
                }));
                setBlogs(latestThree([...STATIC_ITEMS, ...apiItems]));
            })
            .catch(() => {
                /* keep static articles */
            });
    }, []);

    return (
      <section className="pt-24 pb-10 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
            >
              Latest{" "}
              <span
                style={{ fontFamily: "var(--font-script)" }}
                className="text-primary italic"
              >
                Adventures
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-foreground"
            >
              Dive into our travel journals, guides, and tips from recent trips
              around the world.
            </motion.p>
          </div>

          {/* Blog cards ~ static articles render instantly, CMS posts merge in */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
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
              className="cta-shine group relative overflow-hidden inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              View all articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    );
}

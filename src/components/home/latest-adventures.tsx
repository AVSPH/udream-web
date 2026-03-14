"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, BookOpen, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPublicBlogs, type PublicBlog } from "@/hooks/useblogs";

const BlogCard = ({ blog, index }: { blog: PublicBlog; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            <Link href={`/blog/${blog.slug}`} className="relative aspect-[16/10] overflow-hidden">
                {blog.featuredImage ? (
                    <Image
                        src={blog.featuredImage}
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
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </span>
                </div>

                <Link href={`/blog/${blog.slug}`}>
                    <h3 className="font-bold text-base leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                        {blog.title}
                    </h3>
                </Link>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
                    <Link
                        href={`/blog/${blog.slug}`}
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

// Skeleton card shown while loading
const SkeletonCard = ({ index }: { index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="flex flex-col rounded-2xl overflow-hidden border border-background/10 bg-background/10"
    >
        <div className="aspect-[16/10] bg-background/20 animate-pulse" />
        <div className="p-6 flex flex-col gap-3">
            <div className="h-3 w-24 bg-background/20 rounded animate-pulse" />
            <div className="h-5 w-full bg-background/20 rounded animate-pulse" />
            <div className="h-5 w-3/4 bg-background/20 rounded animate-pulse" />
        </div>
    </motion.div>
);

export function LatestAdventures() {
    const [blogs, setBlogs] = useState<PublicBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getPublicBlogs({ limit: 3 })
          .then((res) => setBlogs(res.data))
          .catch(() => setError(true))
          .finally(() => setLoading(false));
    }, []);

    return (
      <section className="py-24 px-4 bg-white">
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

          {/* Loading skeletons */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[0, 1, 2].map((i) => (
                <SkeletonCard key={i} index={i} />
              ))}
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <p className="text-center text-foreground py-10">
              Could not load latest posts. Check back soon!
            </p>
          )}

          {/* Blog cards */}
          {!loading && !error && blogs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <BlogCard key={blog._id} blog={blog} index={index} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && blogs.length === 0 && (
            <p className="text-center text-background/50 py-10">
              No posts yet — stay tuned!
            </p>
          )}

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

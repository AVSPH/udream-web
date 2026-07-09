"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { visitedPlaces } from "@/data/visited-places";
import { MapPin, Calendar, ArrowUpRight, BookOpen, Loader2, Globe, Search, X } from "lucide-react";
import { getPublicBlogs, type PublicBlog } from "@/hooks/useblogs";
import { VisitedPlace } from "@/data/visited-places";
import { customStaticBlogs, type StaticBlogCard } from "@/data/static-blogs-list";

const continentOrder = ["Asia", "Europe", "Americas", "Africa", "Oceania"] as const;

// ── Shared blog card (API posts) ─────────────────────────────────────────────
function BlogCard({ blog }: { blog: PublicBlog }) {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {blog.featuredImage ? (
                    <Image
                        src={blog.featuredImage}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-muted-foreground/30" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {blog.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                        {blog.category}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                </h3>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                        Read
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

// ── Shared static blog card ──────────────────────────────────────────────────
function CustomStaticBlogCard({ blog }: { blog: StaticBlogCard }) {
    return (
        <Link
            href={blog.href}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {blog.thumbnail ? (
                    <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-muted-foreground/30" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {blog.category && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                        {blog.category}
                    </span>
                )}
            </div>
            <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="font-bold text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/60">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(blog.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                        Read
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

// ── Destination card (static places) ────────────────────────────────────────
function DestinationCard({ place }: { place: VisitedPlace }) {
    const slug = place.blogLink.replace("/blog/", "");
    return (
        <Link
            href={`/blog/${slug}`}
            className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                    src={place.thumbnail}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Country badge */}
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider border border-white/15">
                    <MapPin className="w-3 h-3" />
                    {place.country}
                </span>

            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-2">
                <h4 className="font-bold text-base leading-snug group-hover:text-primary transition-colors">
                    {place.name}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                    {place.description}
                </p>

                <div className="flex items-center justify-end pt-3 border-t border-border/60 mt-1">
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-semibold">
                        Read story
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

// ── Section divider ──────────────────────────────────────────────────────────
function SectionHeader({ icon: Icon, title, sub }: { icon: React.ElementType; title: string; sub?: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <div>
                <h2 className="text-2xl font-bold leading-none">{title}</h2>
                {sub && <p className="text-sm text-muted-foreground mt-0.5">{sub}</p>}
            </div>
            <div className="flex-1 h-px bg-border ml-2" />
        </div>
    );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPage() {
    const [apiBlogs, setApiBlogs] = useState<PublicBlog[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        getPublicBlogs({ limit: 12 })
            .then((res) => setApiBlogs(res.data))
            .catch(() => {
                /* static articles still render */
            })
            .finally(() => setLoading(false));
    }, []);

    // Merge CMS posts with static articles, newest first. The top 8 fill
    // "Latest Posts"; remaining static articles fall to "Featured Guides".
    type FeedEntry =
        | { kind: "api"; date: string; blog: PublicBlog }
        | { kind: "static"; date: string; blog: StaticBlogCard };

    const merged: FeedEntry[] = [
        ...apiBlogs.map((b): FeedEntry => ({ kind: "api", date: b.createdAt, blog: b })),
        ...customStaticBlogs.map((b): FeedEntry => ({ kind: "static", date: b.date, blog: b })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const latestPosts = merged.slice(0, 8);
    const latestStaticIds = new Set(
        latestPosts.filter((e) => e.kind === "static").map((e) => (e.blog as StaticBlogCard).id),
    );
    const featuredGuides = customStaticBlogs.filter((b) => !latestStaticIds.has(b.id));

    const grouped = continentOrder
        .map((continent) => ({
            continent,
            places: visitedPlaces.filter((p) => p.continent === continent),
        }))
        .filter((g) => g.places.length > 0);

    // ── Search across posts, guides and destinations ──
    const q = query.trim().toLowerCase();
    const isSearching = q.length > 0;

    const blogText = (e: FeedEntry) =>
        e.kind === "api"
            ? `${e.blog.title} ${e.blog.category ?? ""}`
            : `${e.blog.title} ${e.blog.excerpt} ${e.blog.category ?? ""}`;

    const blogResults = isSearching
        ? merged.filter((e) => blogText(e).toLowerCase().includes(q))
        : [];
    const placeResults = isSearching
        ? visitedPlaces.filter((p) =>
              `${p.name} ${p.country} ${p.continent} ${p.description}`.toLowerCase().includes(q),
          )
        : [];
    const totalResults = blogResults.length + placeResults.length;

    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <div className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/6 to-transparent pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Adventure Logs
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-none">
                        Every Journey{" "}
                        <span style={{ fontFamily: "var(--font-script)" }} className="text-primary italic">
                            Tells a Story
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        {visitedPlaces.length} destinations across{" "}
                        {new Set(visitedPlaces.map((p) => p.country)).size} countries and counting.
                    </p>

                    {/* Search */}
                    <div className="relative max-w-xl mx-auto mt-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/60 pointer-events-none" />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search destinations, guides, articles…"
                            aria-label="Search the blog"
                            className="w-full pl-12 pr-11 py-3.5 rounded-full bg-card border border-border shadow-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                aria-label="Clear search"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 space-y-20 pb-28">

                {/* ── Search results ── */}
                {isSearching && (
                    <section className="space-y-8">
                        <SectionHeader
                            icon={Search}
                            title="Search results"
                            sub={`${totalResults} match${totalResults === 1 ? "" : "es"} for "${query.trim()}"`}
                        />
                        {totalResults === 0 ? (
                            <div className="text-center py-16 text-muted-foreground">
                                <p className="mb-2">Nothing matched that search.</p>
                                <button onClick={() => setQuery("")} className="text-primary font-semibold hover:underline">
                                    Clear search
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {blogResults.map((item) =>
                                    item.kind === "api" ? (
                                        <BlogCard key={item.blog._id} blog={item.blog} />
                                    ) : (
                                        <CustomStaticBlogCard key={item.blog.id} blog={item.blog} />
                                    ),
                                )}
                                {placeResults.map((place) => (
                                    <DestinationCard key={place.id} place={place} />
                                ))}
                            </div>
                        )}
                    </section>
                )}


                {!isSearching && (
                <>
                {/* ── Latest Posts (CMS posts merged with newest static articles) ── */}
                <section className="space-y-8">
                    <SectionHeader icon={BookOpen} title="Latest Posts" />

                    {loading && (
                        <div className="flex items-center justify-center py-16 text-muted-foreground gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Loading posts…</span>
                        </div>
                    )}
                    {!loading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {latestPosts.map((item) =>
                                item.kind === "api" ? (
                                    <BlogCard key={item.blog._id} blog={item.blog} />
                                ) : (
                                    <CustomStaticBlogCard key={item.blog.id} blog={item.blog} />
                                ),
                            )}
                        </div>
                    )}
                </section>

                {/* ── Featured Guides (remaining static articles) ── */}
                {featuredGuides.length > 0 && (
                    <section className="space-y-8">
                        <SectionHeader icon={BookOpen} title="Featured Guides" sub="Handcrafted travel guides and resources" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {featuredGuides.map((blog) => (
                                <CustomStaticBlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Destinations by Continent ── */}
                <section className="space-y-16">
                    <SectionHeader
                        icon={Globe}
                        title="Destinations on the Map"
                        sub={`${visitedPlaces.length} places across ${grouped.length} continents`}
                    />

                    {grouped.map(({ continent, places }) => (
                        <div key={continent} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg font-semibold">{continent}</h3>
                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                    {places.length} stops
                                </span>
                                <div className="flex-1 h-px bg-border/60" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {places.map((place) => (
                                    <DestinationCard key={place.id} place={place} />
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                </>
                )}

            </div>
        </div>
    );
}

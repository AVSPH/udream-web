import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { visitedPlaces } from "@/data/visited-places";
import { visitedPlaces as allPlaces } from "@/data/visited-places";
import { getBlogBySlug } from "@/hooks/useblogs";
import { MapPin, Calendar, Globe, ExternalLink, Tag } from "lucide-react";
import { ParallaxHero } from "@/components/blog/ParallaxHero";

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate all static paths from visitedPlaces blogLink slugs
export async function generateStaticParams() {
    return visitedPlaces.map((place) => ({
        slug: place.blogLink.replace("/blog/", ""),
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // Try API first
    try {
        const apiBlog = await getBlogBySlug(slug);
        if (apiBlog) {
            return {
                title: `${apiBlog.title} | Udream`,
                description: apiBlog.excerpt ?? apiBlog.title,
            };
        }
    } catch {
        // fall through to static
    }

    const place = allPlaces.find((p) => p.blogLink === `/blog/${slug}`);
    if (!place) return { title: "Post Not Found | Udream" };
    return {
        title: `${place.name}, ${place.country} | Udream`,
        description: place.description,
    };
}

// ─── Fallback content for static places ──────────────────────────────────────
function generateBlogContent(place: (typeof allPlaces)[0]) {
    return [
        `Every journey begins with a single step, and my adventure to ${place.name} was no exception. ${place.description} From the moment I arrived, it was clear this would be a place that would leave a lasting mark on me.`,
        `The local culture of ${place.country} is something that immediately draws you in. The people are warm, the food is extraordinary, and the history is layered in a way that takes days — if not weeks — to truly absorb. I spent my mornings wandering without a fixed itinerary, letting the streets lead me to unexpected encounters, hidden cafés, and moments of real human connection.`,
        `One of the highlights was simply being present — sitting quietly and watching daily life unfold. Markets buzzing with vendors, children playing in narrow alleyways, elders gathered in the shade of ancient buildings. These are the scenes that don't make it into guidebooks but define what travel is really about.`,
        `I'd recommend ${place.name} to any traveler who wants to step off the beaten path and experience something genuinely authentic. Visit during ${place.dateVisited} if you can — the timing makes all the difference. Pack light, stay curious, and never turn down an offer to share a meal with a local.`,
        `As I prepared to leave, I found myself already planning a return. ${place.name} has a way of staying with you long after you've gone — in the flavours you try to recreate at home, in the conversations you replay, and in the quiet moments where you close your eyes and are suddenly transported back.`,
    ];
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;

    // ── Try API blog first ────────────────────────────────────────────────
    let apiBlog: {
        title: string;
        featuredImage?: string;
        category?: string;
        content?: string;
        excerpt?: string;
        createdAt?: string;
        author?: { name?: string };
        tags?: string[];
    } | null = null;

    try {
        const result = await getBlogBySlug(slug);
        if (result) apiBlog = result;
    } catch {
        // ignore — fall through to static
    }

    // ── If API blog found, render it ──────────────────────────────────────
    if (apiBlog) {
        return (
            <article className="min-h-screen bg-white">
                {/* Hero Image */}
                {apiBlog.featuredImage && (
                    <ParallaxHero src={apiBlog.featuredImage} alt={apiBlog.title} />
                )}

                <div className="bg-white">
                <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        {apiBlog.category && (
                            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                                {apiBlog.category}
                            </span>
                        )}
                        {apiBlog.createdAt && (
                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                {new Date(apiBlog.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        )}
                        {apiBlog.author?.name && (
                            <span className="text-sm text-muted-foreground">
                                by <span className="font-medium">{apiBlog.author.name}</span>
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                        {apiBlog.title}
                    </h1>

                    {apiBlog.excerpt && (
                        <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
                            {apiBlog.excerpt}
                        </p>
                    )}

                    {/* Body */}
                    {apiBlog.content && (
                        <>
                            <article
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: apiBlog.content }}
                            />
                            <style>{`
                                .blog-content {
                                    line-height: 1.8;
                                    font-size: 1.125rem;
                                    color: inherit;
                                }
                                .blog-content p {
                                    margin-bottom: 1.5rem;
                                    line-height: 1.8;
                                }
                                .blog-content h1 {
                                    font-size: 2.25rem;
                                    font-weight: bold;
                                    margin-top: 2.5rem;
                                    margin-bottom: 1.25rem;
                                    color: hsl(var(--primary));
                                }
                                .blog-content h2 {
                                    font-size: 1.875rem;
                                    font-weight: bold;
                                    margin-top: 2.5rem;
                                    margin-bottom: 1.25rem;
                                    color: hsl(var(--primary));
                                }
                                .blog-content h3 {
                                    font-size: 1.5rem;
                                    font-weight: bold;
                                    margin-top: 2rem;
                                    margin-bottom: 1rem;
                                    color: hsl(var(--primary));
                                }
                                .blog-content h4 {
                                    font-size: 1.25rem;
                                    font-weight: bold;
                                    margin-top: 1.5rem;
                                    margin-bottom: 0.75rem;
                                    color: hsl(var(--primary));
                                }
                                .blog-content ul {
                                    margin-bottom: 1.5rem;
                                    padding-left: 2rem;
                                    list-style-type: disc;
                                    list-style-position: outside;
                                }
                                .blog-content ol {
                                    margin-bottom: 1.5rem;
                                    padding-left: 2rem;
                                    list-style-type: decimal;
                                    list-style-position: outside;
                                }
                                .blog-content li {
                                    margin-bottom: 0.75rem;
                                    margin-left: 0.5rem;
                                    line-height: 1.8;
                                }
                                .blog-content a {
                                    color: hsl(var(--primary));
                                    text-decoration: underline;
                                    transition: opacity 0.2s;
                                }
                                .blog-content a:hover {
                                    opacity: 0.75;
                                }
                                .blog-content strong {
                                    font-weight: 600;
                                    color: hsl(var(--foreground));
                                }
                                .blog-content em {
                                    font-style: italic;
                                }
                                .blog-content blockquote {
                                    border-left: 4px solid hsl(var(--primary));
                                    padding-left: 1.5rem;
                                    margin: 2rem 0;
                                    font-style: italic;
                                    color: hsl(var(--muted-foreground));
                                }
                                .blog-content code {
                                    background: hsl(var(--muted));
                                    padding: 0.25rem 0.5rem;
                                    border-radius: 0.25rem;
                                    font-size: 0.875rem;
                                    border: 1px solid hsl(var(--border));
                                }
                                .blog-content pre {
                                    background: hsl(var(--muted));
                                    padding: 1.5rem;
                                    border-radius: 0.5rem;
                                    overflow-x: auto;
                                    margin-bottom: 1.5rem;
                                    border: 1px solid hsl(var(--border));
                                }
                                .blog-content pre code {
                                    background: none;
                                    border: none;
                                    padding: 0;
                                    font-size: 0.9rem;
                                }
                                .blog-content img {
                                    border-radius: 0.75rem;
                                    margin: 2rem 0;
                                    max-width: 100%;
                                    height: auto;
                                }
                                .blog-content hr {
                                    border: none;
                                    border-top: 1px solid hsl(var(--border));
                                    margin: 2rem 0;
                                }
                            `}</style>
                        </>
                    )}

                    {/* Tags */}
                    {apiBlog.tags && apiBlog.tags.length > 0 && (
                        <div className="mt-10 flex flex-wrap items-center gap-2">
                            <Tag className="w-4 h-4 text-muted-foreground" />
                            {apiBlog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Map CTA */}
                    <div className="mt-12 p-6 rounded-2xl border border-border bg-muted/30 flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-3">
                            <Globe className="w-8 h-8 text-primary shrink-0" />
                            <div>
                                <p className="font-semibold">See it on the Map</p>
                                <p className="text-sm text-muted-foreground">
                                    View all our destinations across the globe.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/map"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                        >
                            Open Map <ExternalLink className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                </div>
            </article>
        );
    }

    // ── Fall back to static visited places ────────────────────────────────
    const place = allPlaces.find((p) => p.blogLink === `/blog/${slug}`);
    if (!place) notFound();

    const content = generateBlogContent(place);

    const related = allPlaces
        .filter((p) => p.continent === place.continent && p.id !== place.id)
        .slice(0, 3);

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Image */}
            <ParallaxHero src={place.thumbnail} alt={place.name} />

            <div className="bg-white">
            <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                        {place.continent}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {place.country}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {place.dateVisited}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                    {place.name}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
                    {place.description}
                </p>

                {/* Body paragraphs */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {content.map((para, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                            {para}
                        </p>
                    ))}
                </div>

                {/* Map CTA */}
                <div className="mt-12 p-6 rounded-2xl border border-border bg-muted/30 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                        <Globe className="w-8 h-8 text-primary shrink-0" />
                        <div>
                            <p className="font-semibold">See it on the Map</p>
                            <p className="text-sm text-muted-foreground">
                                View {place.name} alongside all my other footprints.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/map"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                        Open Map <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">More from {place.continent}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {related.map((rel) => {
                                const relSlug = rel.blogLink.replace("/blog/", "");
                                return (
                                    <Link
                                        key={rel.id}
                                        href={`/blog/${relSlug}`}
                                        className="group flex flex-col rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all"
                                    >
                                        <div className="relative h-32 overflow-hidden">
                                            <Image
                                                src={rel.thumbnail}
                                                alt={rel.name}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="p-3">
                                            <p className="font-semibold text-sm group-hover:text-primary transition-colors">{rel.name}</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">{rel.country}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
            </div>
        </article>
    );
}

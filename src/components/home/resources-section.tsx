"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Compass, Globe, FileText, CheckSquare, Plane, Map } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const resources = [
    {
        title: "Travel Guides",
        href: "/resources/guide",
        icon: Globe,
        description: "In-depth destination guides, hidden gems, and local secrets to help you explore every corner of the world with confidence.",
        featured: true,
    },
    {
        title: "Visa Guide",
        href: "/resources/visa-guide",
        icon: FileText,
        description: "Entry requirements, visa types, and step-by-step application tips for every destination.",
    },
    {
        title: "Destination Costs",
        href: "/resources/destination-costs",
        icon: CheckSquare,
        description: "Real budget breakdowns — no guesswork, just honest numbers.",
    },
    {
        title: "Travel Tools",
        href: "/resources/travel-tools",
        icon: Plane,
        description: "Apps and gear I actually use to plan, pack, and navigate.",
    },
    {
        title: "Itinerary Planner",
        href: "/resources/itinerary-planner",
        icon: Map,
        description: "Drag & drop trip builder for your perfect itinerary.",
    },
];

export function ResourcesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="pt-24 px-4 bg-transparent relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Compass className="w-4 h-4" />
                            <span>Travel Resources</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Plan Your Next{" "}
                            <span style={{ fontFamily: "var(--font-script)" }} className="text-primary italic">
                                Adventure
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything I use to plan, budget, and navigate my trips. Stop guessing and start traveling smarter.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/resources"
                            className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                        >
                            View all resources
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[220px]">

                    {/* Featured card — Travel Guides, spans 2 rows */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:row-span-2 min-h-[260px] group"
                    >
                        <Link href={resources[0].href} className="block h-full">
                            <div className="h-full rounded-2xl border border-border bg-card to-secondary/10 overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 relative p-8 flex flex-col justify-between">
                                <div className="absolute -right-6 -top-6 text-primary/5 pointer-events-none">
                                    <Globe className="w-52 h-52" strokeWidth={1} />
                                </div>
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                                        <Globe className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        Travel Guides
                                    </h3>
                                    <p className="text-muted-foreground text-base leading-relaxed">
                                        {resources[0].description}
                                    </p>
                                </div>
                                <div className="flex items-center text-primary font-medium text-sm">
                                    <span className="mr-2">Explore guides</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Small cards */}
                    {resources.slice(1).map((resource, i) => (
                        <motion.div
                            key={resource.href}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                            className="min-h-[200px] group"
                        >
                            <Link href={resource.href} className="block h-full">
                                <div className="h-full rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 relative p-6 flex flex-col justify-between">
                                    <div className="absolute -right-4 -top-4 text-primary/5 pointer-events-none">
                                        <resource.icon className="w-28 h-28" strokeWidth={1} />
                                    </div>
                                    <div>
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                            <resource.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {resource.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center text-primary font-medium text-xs mt-2">
                                        <span className="mr-1.5">Explore</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use strict";
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Calendar, Clock, ArrowRight, Compass } from "lucide-react";
import { travelGuides } from "@/data/guides";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export default function GuideListingPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredGuides = useMemo(() => {
        return travelGuides.filter((guide) => {
            const searchLower = searchQuery.toLowerCase();
            return (
                guide.destinationName.toLowerCase().includes(searchLower) ||
                guide.country.toLowerCase().includes(searchLower) ||
                guide.quickDescription.toLowerCase().includes(searchLower)
            );
        });
    }, [searchQuery]);

    return (
        <main className="min-h-screen bg-white text-foreground pb-20">
            <BreadcrumbSchema items={[
                { name: "Home", item: "https://udreamtravels.com" },
                { name: "Resources", item: "https://udreamtravels.com/resources" },
                { name: "Travel Guides", item: "https://udreamtravels.com/resources/guide" }
            ]} />
            {/* Header Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translated-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <Compass className="w-4 h-4" />
                        <span>Curated Travel Guides</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        Explore Your Next <span className="text-primary italic">Adventure</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Comprehensive guides to help you plan your perfect trip, from budget options to luxury experiences.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <div className="bg-card absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search destinations, countries, or experiences..."
                            className="w-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-lg"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    {filteredGuides.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredGuides.map((guide) => (
                                <Link
                                    key={guide.id}
                                    href={`/resources/guide/${guide.id}`}
                                    className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={guide.heroImage}
                                            alt={guide.destinationName}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                                                <MapPin className="w-3 h-3" />
                                                {guide.country}
                                            </div>
                                            <div className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium shadow-lg">
                                                {guide.budgetRange}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl mb-3 group-hover:text-primary transition-colors">
                                            {guide.destinationName}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 leading-relaxed">
                                            {guide.quickDescription}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                                                    <Clock className="w-3 h-3 text-secondary" />
                                                    {guide.lengthOfStay}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground italic">
                                                    <Calendar className="w-3 h-3 text-secondary" />
                                                    Best: {guide.bestTime}
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-muted/30 rounded-3xl border border-dashed border-border">
                            <Compass className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                            <h3 className="text-xl font-medium mb-2">No guides found</h3>
                            <p className="text-muted-foreground">Try adjusting your search query</p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-6 px-6 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

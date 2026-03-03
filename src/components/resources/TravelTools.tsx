"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { travelTools, toolCategories, type TravelTool } from "@/data/resources";

const categoryId = toolCategories.map((c) => c.id);
type CategoryId = (typeof categoryId)[number] | "all";

export function TravelToolsSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

    const filtered: TravelTool[] =
        activeCategory === "all"
            ? travelTools
            : travelTools.filter((t) => t.category === activeCategory);

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        🛠 My Toolkit
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Tools I Actually Use</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Curated apps and websites that make every trip smoother — from finding cheap flights to staying connected abroad.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${activeCategory === "all"
                                ? "bg-foreground text-background border-foreground"
                                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                            }`}
                    >
                        All
                    </button>
                    {toolCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${activeCategory === cat.id
                                    ? "bg-foreground text-background border-foreground"
                                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                                }`}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((tool, i) => (
                        <motion.a
                            key={tool.name}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
                        >
                            {tool.isFavorite && (
                                <span className="absolute top-4 right-4 flex items-center gap-1 text-xs text-primary font-semibold">
                                    <Star className="w-3 h-3 fill-primary" /> Fave
                                </span>
                            )}
                            <div className="text-3xl">{tool.icon}</div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                        {tool.name}
                                    </h3>
                                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{tool.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

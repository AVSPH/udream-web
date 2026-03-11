import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Travel Resources | Udream",
    description:
        "Tools, tips, and real cost breakdowns for every destination I've visited. Plan your adventure smarter.",
};

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header */}
            <div className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Resources
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Travel Smarter, <br />
                        <span className="text-primary">Not Harder</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Everything I use to plan, budget, and navigate my adventures, plus real cost breakdowns from every destination I&apos;ve visited.
                    </p>
                </div>
            </div>

            {/* Featured Resource / Visa Guide Banner */}
            <div className="max-w-6xl mx-auto px-4 mt-8 mb-8">
                <Link href="/resources/visa-guide" className="group block">
                    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 md:p-10 transition-all hover:border-primary/40">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs  uppercase tracking-wider mb-4">
                                    <MapPin className="w-3.5 h-3.5" /> Featured Guide
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">Visa Guide for Philippine Passports</h2>
                                <p className="text-muted-foreground max-w-xl">Complete financial guidelines, daily rates, and requirements for the US, Schengen, Australia, Canada, and more.</p>
                            </div>
                            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Resource Links */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                <Link href="/resources/destination-costs" className="group block">
                    <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-md">
                        <div className="flex flex-col h-full gap-4 relative z-10">
                            <h2 className="text-2xl group-hover:text-primary transition-colors">Destination Costs</h2>
                            <p className="text-muted-foreground flex-grow">Real cost breakdowns from every destination I've visited around the world.</p>
                            <div className="flex items-center gap-2 text-primary font-medium mt-4">
                                <span>View Costs</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/resources/travel-tools" className="group block">
                    <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-md">
                        <div className="flex flex-col h-full gap-4 relative z-10">
                            <h2 className="text-2xl group-hover:text-primary transition-colors">Travel Tools & Gear</h2>
                            <p className="text-muted-foreground flex-grow">Everything I use to plan, budget, and navigate my adventures.</p>
                            <div className="flex items-center gap-2 text-primary font-medium mt-4">
                                <span>View Tools</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/resources/itinerary-planner" className="group block">
                    <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-md">
                        <div className="flex flex-col h-full gap-4 relative z-10">
                            <h2 className="text-2xl group-hover:text-primary transition-colors">Itinerary Planner</h2>
                            <p className="text-muted-foreground flex-grow">Interactive drag-and-drop tool to visualize and export your perfect trip day by day.</p>
                            <div className="flex items-center gap-2 text-primary font-medium mt-4">
                                <span>Build Trip</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

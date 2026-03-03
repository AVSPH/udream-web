import type { Metadata } from "next";
import { TravelToolsSection } from "@/components/resources/TravelTools";
import { DestinationCostsSection } from "@/components/resources/DestinationCosts";

export const metadata: Metadata = {
    title: "Travel Resources | Udream",
    description:
        "Tools, tips, and real cost breakdowns for every destination I've visited. Plan your adventure smarter.",
};

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-background">
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
                        Everything I use to plan, budget, and navigate my adventures — plus real cost breakdowns from every destination I&apos;ve visited.
                    </p>
                </div>
            </div>

            {/* Sections */}
            <DestinationCostsSection />
            <TravelToolsSection />
        </div>
    );
}

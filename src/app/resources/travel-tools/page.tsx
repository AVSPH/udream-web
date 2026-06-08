import type { Metadata } from "next";
import { TravelToolsSection } from "@/components/resources/TravelTools";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "Travel Tools | Udream",
    description: "Everything I use to plan, budget, and navigate my adventures.",
};

export default function TravelToolsPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-16">
            <BreadcrumbSchema items={[
                { name: "Home", item: "https://udreamtravels.com" },
                { name: "Resources", item: "https://udreamtravels.com/resources" },
                { name: "Travel Tools", item: "https://udreamtravels.com/resources/travel-tools" }
            ]} />
            <TravelToolsSection />
        </div>
    );
}

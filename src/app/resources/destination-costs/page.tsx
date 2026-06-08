import type { Metadata } from "next";
import { DestinationCostsSection } from "@/components/resources/DestinationCosts";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "Destination Costs | Udream",
    description: "Real cost breakdowns for every destination I've visited.",
};

export default function DestinationCostsPage() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbSchema items={[
                { name: "Home", item: "https://udreamtravels.com" },
                { name: "Resources", item: "https://udreamtravels.com/resources" },
                { name: "Destination Costs", item: "https://udreamtravels.com/resources/destination-costs" }
            ]} />
            <DestinationCostsSection />
        </div>
    );
}

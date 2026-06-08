import type { Metadata } from "next";
import TravelAssessment from "@/components/resources/TravelAssessment";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
    title: "First-Time Traveler Assessment | Udream",
    description: "Find out how ready you are for your first trip. Answer 15 quick questions and get a personalised checklist of what to prepare.",
};

export default function TravelAssessmentPage() {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbSchema items={[
                { name: "Home", item: "https://udreamtravels.com" },
                { name: "Resources", item: "https://udreamtravels.com/resources" },
                { name: "Traveler Assessment", item: "https://udreamtravels.com/resources/travel-assessment" }
            ]} />
            <TravelAssessment />
        </div>
    );
}

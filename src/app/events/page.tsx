import type { Metadata } from "next";
import { LiveEventLanding } from "@/components/events/LiveEventLanding";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { liveEvent } from "@/data/live-event";

export const metadata: Metadata = {
    title: `${liveEvent.name} — Free Live Event | Udream`,
    description: `${liveEvent.dateLabel} at ${liveEvent.timeLabel}. ${liveEvent.tagline}`,
};

function EventSchema() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: liveEvent.name,
        description: liveEvent.description,
        startDate: liveEvent.startsAt,
        endDate: liveEvent.endsAt,
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        isAccessibleForFree: true,
        location: {
            "@type": "VirtualLocation",
            url: "https://www.udreamtravels.com/events",
        },
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "PHP",
            availability: "https://schema.org/InStock",
            url: "https://www.udreamtravels.com/events",
        },
        organizer: {
            "@type": "Organization",
            name: "Udream",
            url: "https://www.udreamtravels.com",
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default function EventsPage() {
    return (
        <>
            <BreadcrumbSchema items={[
                { name: "Home", item: "https://udreamtravels.com" },
                { name: "Events", item: "https://udreamtravels.com/events" }
            ]} />
            <EventSchema />
            <LiveEventLanding />
        </>
    );
}

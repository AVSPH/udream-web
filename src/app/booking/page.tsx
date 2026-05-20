import type { Metadata } from "next";
import BookingClient from "@/components/booking/BookingClient";

export const metadata: Metadata = {
    title: "Book a Consultation | Udream Travels",
    description: "Schedule a 1-on-1 travel consultation with Meri & Man. Let's plan your itineraries, nomad transition, and visa strategies.",
    keywords: ["travel consultation", "travel advisor", "itinerary planner", "digital nomad advice", "visa guidance", "meri and man"],
    openGraph: {
        title: "Book a Consultation | Udream Travels",
        description: "Schedule a 1-on-1 travel consultation with Meri & Man. Let's plan your itineraries, nomad transition, and visa strategies.",
        url: "https://udreamtravels.com/booking",
        type: "website",
    }
};

export default function BookingPage() {
    return <BookingClient />;
}

import type { Metadata } from "next";
import { visitedPlaces } from "@/data/visited-places";
import InteractiveMap from "@/components/map/MapWrapper";

export const metadata: Metadata = {
    title: "My Footprints | Udream",
    description:
        "An interactive world map of every destination I've explored — click any pin to discover the story behind the journey.",
};

export default function MapPage() {
    return (
        <div className="h-screen w-full" style={{ fontFamily: "'Inter', sans-serif" }}>
            <InteractiveMap places={visitedPlaces} />
        </div>
    );
}


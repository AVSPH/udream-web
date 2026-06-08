import React from 'react';
import ItineraryPlanner from '@/components/itinerary/ItineraryPlanner';
import { BreadcrumbSchema } from '@/components/seo/breadcrumb-schema';

export const metadata = {
  title: 'Itinerary Planner | Udream',
  description: 'Plan your perfect trip itinerary and download as a beautiful PDF',
};

export default function ItineraryPlannerPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <BreadcrumbSchema items={[
          { name: "Home", item: "https://udreamtravels.com" },
          { name: "Resources", item: "https://udreamtravels.com/resources" },
          { name: "Itinerary Planner", item: "https://udreamtravels.com/resources/itinerary-planner" }
      ]} />
      <ItineraryPlanner />
    </main>
  );
}
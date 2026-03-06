import React from 'react';
import ItineraryPlanner from '@/components/itinerary/ItineraryPlanner';

export const metadata = {
  title: 'Itinerary Planner | Udream',
  description: 'Plan your perfect trip itinerary and download as a beautiful PDF',
};

export default function ItineraryPlannerPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16">
      <ItineraryPlanner />
    </main>
  );
}
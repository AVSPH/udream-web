import AnimatedHeroDemo from "@/components/hero-section";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { LatestAdventures } from "@/components/home/latest-adventures";
import { SocialWall } from "@/components/home/social-wall";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedHeroDemo />
      <FeaturedDestinations />
      <LatestAdventures />
      <SocialWall />
    </main>
  );
}

import AnimatedHeroDemo from "@/components/hero-section";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { LatestAdventures } from "@/components/home/latest-adventures";
import { SocialWall } from "@/components/home/social-wall";
import { StripedPattern } from "@/components/magicui/striped-pattern";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <StripedPattern
        className="text-primary/15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,white,transparent)] z-0"
        width={16}
        height={16}
      />
      <AnimatedHeroDemo />
      <FeaturedDestinations />
      <LatestAdventures />
      <SocialWall />
    </main>
  );
}

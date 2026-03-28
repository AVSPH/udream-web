import AnimatedHeroDemo from "@/components/hero-section";
import { BannerStrip } from "@/components/home/banner-strip";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { AffiliatesSection } from "@/components/home/affiliates-section";
import { LatestAdventures } from "@/components/home/latest-adventures";
import { ResourcesSection } from "@/components/home/resources-section";
import { SocialWall } from "@/components/home/social-wall";
import { StickerLayer } from "@/components/home/StickerLayer";
import { StripedPattern } from "@/components/magicui/striped-pattern";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <StripedPattern
        className="text-primary/15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,white,transparent)] z-0"
        width={16}
        height={16}
      />
      <StickerLayer />
      <AnimatedHeroDemo />
      <SocialWall />
      <BannerStrip />
      <FeaturedDestinations />
      <ResourcesSection />
      <AffiliatesSection />
      <LatestAdventures />
    </main>
  );
}

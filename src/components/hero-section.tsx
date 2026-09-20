import { AnimatedMarqueeHero } from "@/components/ui/hero";

// Hero marquee images — served from /public instead of the Cloudinary
// account, since those asset IDs kept coming back broken regardless of
// which ones we pointed at. These ship with the app, so they can't 404.
const HERO_IMAGES = [
  "/assets/our-story.jpg",
  "/assets/blog/digital-ph/DJI_20251022104846_0030_D.jpg",
  "/assets/blog/digital-ph/DJI_20251022163128_0055_D.jpg",
  "/assets/blog/digital-ph/DJI_20251022104944_0034_D.jpg",
  "/assets/blog/uzbekistan/DJI_20251110162301_0044_D.JPG",
  "/assets/blog/uzbekistan/DJI_20251110163501_0064_D.JPG",
  "/assets/blog/uzbekistan/DJI_20251110172557_0072_D.JPG",
  "/assets/blog/how-to-become-digital-nomad/DJI_20260117115313_0852_D.JPG",
  "/assets/blog/how-to-become-digital-nomad/DJI_20260201200738_0054_D.JPG",
  "/assets/blog/how-to-become-digital-nomad/DJI_20251022120056_0045_D.JPG",
  "/assets/blog/travel-and-freelance/DJI_20251215124451_0861_D.JPG",
  "/assets/blog/travel-and-freelance/DJI_20251226185748_0589_D.JPG",
  "/assets/blog/travel-and-freelance/DJI_20251224152539_0476_D.JPG",
  "/assets/blog/southeast-asia-2026/IMG20230606135644.jpg",
  "/assets/blog/southeast-asia-2026/IMG20230920222210.jpg",
  "/assets/blog/southeast-asia-2026/IMG20230920045949.jpg",
  "/assets/blog/southeast-asia-2026/DJI_20251107145916_0060_D.JPG",
];

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Explore the Unexplored with Udream"
      title={
        <>
          Adventure{" "}
          <span style={{ fontFamily: "var(--font-script)" }} className="text-primary italic">
            Awaits
          </span>
          <br />
          at Every Horizon
        </>
      }
      description="Join us as we traverse the globe, sharing hidden gems, vibrant cultures, and the raw beauty of our planet. Your journey into the extraordinary starts here."
      ctaText="View Footprints"
      ctaHref="/map"
      secondaryCtaText="Read the Blog"
      secondaryCtaHref="/blog"
      stats={[
        { value: "31+", label: "Countries" },
        { value: "3", label: "Continents" },
      ]}
      images={HERO_IMAGES}
    />
  );
};

export default AnimatedHeroDemo;
import { AnimatedMarqueeHero } from "@/components/ui/hero";
import { visitedPlaces } from "@/data/visited-places";

// Hero marquee images — reuses the same Cloudinary photos already
// rendered on the visited-places pages, since the old hardcoded set
// pointed at asset IDs that no longer resolve.
const HERO_IMAGES = [
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466190/DJI_20251105154859_0012_D_nvumg4.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466350/DJI_20251207134656_0148_D_dycf1a.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466648/DJI_20251217130735_0014_D_fgoulr.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466821/DJI_20260225172008_0239_D_cqajah.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466830/DJI_20251227151826_0619_D_eimjwd.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466834/DJI_20251229143150_0691_D_jhe4ct.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466913/DJI_20251220161134_0215_D_kl2uik.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467221/DJI_20251123162100_0054_D_eyeyhl.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467246/DJI_20251215093850_0830_D_kchavg.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467476/IMG20241002175756_dlr0xk.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467482/IMG20241005110952_dbcsui.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467512/DSCF2955_c7pd8a.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467666/DJI_20251216131631_0895_D_rmw9sc.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467672/DJI_20251216133307_0915_D_dsurxx.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467835/DSCF3052_q3xt3i.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467962/DJI_20251224152553_0477_D_ayzbrq.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468091/DJI_20251222145209_0434_D_gkcxa3.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468288/DJI_20251119172020_0066_D_smnftk.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468350/DJI_20251211125617_0207_D_iu11yf.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468419/DJI_20251115160517_0039_D_sslu2a.jpg",
];

const AnimatedHeroDemo = () => {
  const countries = new Set(visitedPlaces.map((p) => p.country)).size;
  const continents = new Set(visitedPlaces.map((p) => p.continent)).size;

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
        { value: `${countries}+`, label: "Countries" },
        { value: `${visitedPlaces.length}+`, label: "Destinations" },
        { value: `${continents}`, label: "Continents" },
      ]}
      images={HERO_IMAGES}
    />
  );
};

export default AnimatedHeroDemo;
import { AnimatedMarqueeHero } from "@/components/ui/hero";
import { visitedPlaces } from "@/data/visited-places";

// A list of sample image URLs for the demo
const DEMO_IMAGES = [
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772867618/DJI_20251126105729_0011_D_evagr6.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868611/IMG20241002175722_xilqqu.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868589/DJI_20260225174328_0280_D_apqgit.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868570/IMG20241003182151_pikxl0.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868550/IMG20241005131651_xbriq3.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868525/IMG20241004174133_slctcl.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868502/IMG20241004171430_hdmnes.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868481/DJI_20260225172008_0239_D_dvws8g.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868457/DJI_20260117142145_0933_D_deucgi.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868432/DJI_20260117111634_0844_D_ai5fkc.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868405/DJI_20260112130323_0796_D_nhsp1p.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868383/DJI_20251227162442_0655_D_p28fhd.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868352/DJI_20251220161336_0217_D_cztqk5.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868324/DJI_20251219095809_0157_D_zp27p8.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772868290/DJI_20251202155701_0033_D_mvgk3o.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772867715/DJI_20251127112323_0172_D_vppp4s.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772867663/DJI_20251126135705_0057_D_mzmdzk.jpg",
  "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772867638/DJI_20251126110550_0033_D_s1biq7.jpg"
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
      images={DEMO_IMAGES}
    />
  );
};

export default AnimatedHeroDemo;
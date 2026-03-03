import { AnimatedMarqueeHero } from "@/components/ui/hero";

// A list of sample image URLs for the demo
const DEMO_IMAGES = [
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525949/DJI_20260225172008_0239_D_ntijjg.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525949/DJI_20260225174328_0280_D_a1vido.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525949/DJI_20260117142145_0933_D_zoitgg.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525947/DJI_20251123161916_0052_D_eumaah.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525947/DJI_20251123161916_0052_D_eumaah.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525947/DJI_20251202155020_0026_D_tpqtqv.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525946/DJI_20251215123848_0853_D_q0gdfe.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525946/IMG20241004171430_xx2oax.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525945/DJI_20251126105729_0011_D_qkam8j.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525945/IMG20241002175722_lkl1wy.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525945/DJI_20251219095809_0157_D_imkrjp.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525943/IMG20241004174133_w2vhcl.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525943/DJI_20251126135705_0057_D_kzzvbf.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525943/DJI_20251127112323_0172_D_ocpb0i.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525943/IMG20241005131651_absmbk.jpg",
  "https://res.cloudinary.com/drpxke63n/image/upload/v1772525942/DJI_20251220161336_0217_D_c4wzqy.jpg",
];

const AnimatedHeroDemo = () => {
  return (
    <AnimatedMarqueeHero
      tagline="Explore the Unexplored with Udream"
      title={
        <>
          Adventure Awaits
          <br />
          at Every Horizon
        </>
      }
      description="Join us as we traverse the globe, sharing hidden gems, vibrant cultures, and the raw beauty of our planet. Your journey into the extraordinary starts here."
      ctaText="View Footprints"
      images={DEMO_IMAGES}
    />
  );
};

export default AnimatedHeroDemo;
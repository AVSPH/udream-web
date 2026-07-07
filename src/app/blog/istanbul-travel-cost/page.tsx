import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import { spotImages } from "@/data/attraction-images";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/istanbul-travel-cost";
const HERO = spotImages["hero:istanbul"];
const BAZAAR = spotImages["istanbul:Grand Bazaar"];

export const metadata = {
  title: "Is Istanbul Expensive? What It Really Costs in 2026",
  description:
    "Istanbul travel costs in 2026: the big sights now charge in euros (Hagia Sophia €25, Topkapi €55), but food, ferries and hotels are still great value. Full budget breakdown.",
  keywords: [
    "is istanbul expensive",
    "istanbul travel cost",
    "istanbul budget 2026",
    "hagia sophia ticket price",
    "istanbul daily budget",
    "istanbul prices for tourists",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Is Istanbul Expensive? What It Really Costs in 2026",
    description:
      "The big sights now charge in euros, but food, ferries and hotels are still great value. Full 2026 budget breakdown.",
    images: [{ url: HERO.src, width: 1280, height: 720, alt: "Istanbul skyline across the Bosphorus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Istanbul Expensive? What It Really Costs in 2026",
    description: "Full 2026 Istanbul budget breakdown with verified sight prices.",
    images: [HERO.src],
  },
};

const FAQS = [
  {
    question: "Is Istanbul expensive to visit in 2026?",
    answer:
      "It's two cities in one budget. Sightseeing is now genuinely pricey ~ the headline sights charge tourist rates pegged to the euro, so Hagia Sophia, Topkapi, the Cistern and Galata together run $120 to $150. But daily life remains excellent value: superb meals for $5 to $12, trams and ferries under a dollar, and good double rooms from $50.",
  },
  {
    question: "How much does Hagia Sophia cost in 2026?",
    answer:
      "€25 (about $27) for the tourist ticket, which admits you to the upper gallery ~ the ground floor is reserved for worship. Buy online to skip a long queue. It's free to enter for prayer if you're visiting as a worshipper.",
  },
  {
    question: "How much money do I need per day in Istanbul?",
    answer:
      "Backpackers: $40 to $55 a day. Mid-range travellers: $70 to $100 including a sight per day. The single biggest variable is how many euro-priced monuments you visit ~ front-load them into one or two days and the rest of your trip gets cheap fast.",
  },
  {
    question: "What's free to do in Istanbul?",
    answer:
      "A lot of the best of it: the Blue Mosque, Süleymaniye Mosque, the Grand Bazaar and Spice Bazaar, Balat's coloured houses, the Galata Bridge fishermen at sunset, and simply riding the commuter ferries across the Bosphorus ~ the best $1 'cruise' in Europe.",
  },
  {
    question: "Is the Istanbul Museum Pass worth it?",
    answer:
      "Usually not anymore for short visits ~ the blockbusters (Hagia Sophia, Basilica Cistern, Galata Tower) are excluded from the state pass, and Topkapi alone is most of the pass price. Do the math against the two or three sights you actually plan to enter.",
  },
];

function Credit({ author, license, href }: { author: string; license: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-[11px] text-muted-foreground/70 mt-1.5 text-right hover:text-muted-foreground transition-colors"
    >
      Photo © {author} · {license} · Wikimedia Commons
    </a>
  );
}

export default function IstanbulTravelCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Istanbul Expensive? What It Really Costs in 2026",
    description:
      "Istanbul travel costs in 2026: euro-priced monuments, cheap ferries and food, and a full daily budget breakdown.",
    author: { "@type": "Person", name: "Meri & Man", url: "https://udreamtravels.com/our-story" },
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
    image: HERO.src,
    mainEntityOfPage: CANONICAL,
    publisher: {
      "@type": "Organization",
      name: "Udream Travels",
      logo: { "@type": "ImageObject", url: "https://udreamtravels.com/logo.png" },
    },
  };

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://udreamtravels.com" },
          { name: "Blog", item: "https://udreamtravels.com/blog" },
          { name: "Istanbul Travel Cost", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO.src} alt="Istanbul skyline across the Bosphorus ~ what Istanbul costs in 2026" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Budget
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Istanbul, Turkey
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Is Istanbul Expensive? What It Really Costs in 2026
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand from our Turkey trip</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Everyone told us Istanbul was cheap. Then we paid €25 to enter Hagia Sophia and €55 for Topkapi Palace, and
              wondered who &quot;everyone&quot; was. The truth: Istanbul is now two budgets in one city ~ euro-priced
              monuments and lira-priced life. Plan for both and it&apos;s still a bargain.
            </p>

            <h2>Istanbul Sightseeing Prices in 2026 (Verified)</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Sight</th>
                    <th className="p-3 font-semibold">2026 price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">Hagia Sophia (tourist gallery)</td><td className="p-3 font-semibold">€25 (~$27)</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Topkapi Palace + Harem combo</td><td className="p-3 font-semibold">₺2,750 (~$60)</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Basilica Cistern</td><td className="p-3 font-semibold">₺800 day / ₺1,300 evening</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Galata Tower</td><td className="p-3 font-semibold">≈ €30</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Blue Mosque / Grand Bazaar / Süleymaniye</td><td className="p-3 font-semibold">Free</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Bosphorus commuter ferry</td><td className="p-3 font-semibold">≈ $1</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              All four paid headliners together: <strong>$120–150 per person</strong>. Full list with maps on our{" "}
              <Link href="/resources/attraction-prices/istanbul">Istanbul attraction prices page</Link>.
            </p>

            <h2>Where Istanbul Is Still Cheap</h2>
            <p>
              <strong>Food:</strong> a döner or balık ekmek (fish sandwich) runs $2–4, a proper lokanta lunch $5–8, and a
              memorable meze dinner for two with raki $25–40. <strong>Transport:</strong> the Istanbulkart makes trams,
              metros, funiculars, and ferries roughly $0.50–1 per ride. <strong>Sleeping:</strong> good Sultanahmet or
              Beyoğlu doubles from $50–80; hostels from $15.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image src={BAZAAR.src} alt="Inside the Grand Bazaar, Istanbul ~ free to enter" fill className="object-cover" />
            </div>
            <Credit author={BAZAAR.author} license={BAZAAR.license} href={BAZAAR.sourceUrl} />

            <h2>Our Daily Budget Math</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Style</th>
                    <th className="p-3 font-semibold">Per day</th>
                    <th className="p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">Backpacker</td><td className="p-3 font-semibold">$40–55</td><td className="p-3">Hostel, street food, free mosques + one paid sight total</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Mid-range</td><td className="p-3 font-semibold">$70–100</td><td className="p-3">Boutique double, lokanta meals, one euro-sight per day</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Comfort</td><td className="p-3 font-semibold">$130+</td><td className="p-3">Bosphorus-view hotel, hammam, guided tours</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Five Ways to Cut the Cost</h2>
            <p><strong>1.</strong> Front-load the paid monuments into one Sultanahmet day ~ then the rest of the trip is nearly free.</p>
            <p><strong>2.</strong> Take the commuter ferry to Kadıköy instead of a tourist cruise ~ same water, 95% cheaper.</p>
            <p><strong>3.</strong> Skip Galata Tower; a Karaköy rooftop café gives the same view for the price of a coffee.</p>
            <p><strong>4.</strong> Eat where the menus have no photos and no English ~ reliably half the price, double the flavour.</p>
            <p><strong>5.</strong> Visit the Süleymaniye Mosque ~ many travellers call it more beautiful than the Blue Mosque, and it&apos;s free and quiet.</p>

            <p>
              Comparing destinations? See how Istanbul stacks up against every city we&apos;ve priced on the{" "}
              <Link href="/resources/attraction-prices">attraction prices index</Link>, or read{" "}
              <Link href="/blog/famous-landmarks-entrance-fees">what the world&apos;s famous landmarks cost</Link>.
            </p>

            <CostCallout countryName="Turkey" />
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Istanbul Cost FAQ"
          description="The price questions everyone asks before an Istanbul trip."
        />
      </div>
    </article>
  );
}

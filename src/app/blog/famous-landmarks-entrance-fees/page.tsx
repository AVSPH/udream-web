import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import { spotImages } from "@/data/attraction-images";

const CANONICAL = "https://udreamtravels.com/blog/famous-landmarks-entrance-fees";
const HERO = spotImages["rome:Colosseum"];

export const metadata = {
  title: "What Famous Landmarks Cost to Visit in 2026 (30 Cities)",
  description:
    "Entrance fees for the world's famous landmarks in 2026: Colosseum, Angkor Wat, Hagia Sophia, Petronas Towers and 170+ more ~ compared across 30 cities we've visited.",
  keywords: [
    "famous landmarks entrance fees",
    "tourist attraction prices",
    "how much does the colosseum cost",
    "angkor wat ticket price",
    "cheapest tourist destinations",
    "travel budget attractions",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "What Famous Landmarks Cost to Visit in 2026 (30 Cities)",
    description:
      "Entrance fees for the world's famous landmarks, compared across 30 cities we've visited ~ from free mega-sights to $60 palaces.",
    images: [{ url: HERO.src, width: 1280, height: 757, alt: "Colosseum of Rome, one of the world's most famous paid landmarks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Famous Landmarks Cost to Visit in 2026",
    description: "Entrance fees compared across 30 cities we've visited.",
    images: [HERO.src],
  },
};

const FAQS = [
  {
    question: "What is the most expensive famous landmark to visit?",
    answer:
      "Of the 180+ spots we've priced, the big tickets are Topkapi Palace in Istanbul (about $60 with the Harem), Universal Studios Singapore ($62 to $73), Mount Pilatus in Lucerne (about $90 to $98 for the round trip), and a Ha Long Bay overnight cruise ($100 to $250+). Most world icons cost far less.",
  },
  {
    question: "Which famous landmarks are free to visit?",
    answer:
      "More than you'd think: the Blue Mosque and Grand Bazaar in Istanbul, Tokyo's Senso-ji and Meiji Shrine, Batu Caves in Kuala Lumpur, the Trevi Fountain and St. Peter's Basilica in Rome, Tbilisi's fortress and cathedral, Brunei's golden mosques, and nearly everything in Belgrade and Yerevan.",
  },
  {
    question: "How much should I budget for attractions per city?",
    answer:
      "As a rule of thumb from our 30-city price index: $10 to $30 covers most of Asia and the Balkans, $45 to $75 covers cities with one or two big tickets (Rome, Athens, Hong Kong, Barcelona is a bit more), and only a handful ~ Istanbul's euro-priced sights, Singapore's parks, Swiss mountains ~ push past $100.",
  },
  {
    question: "Are attraction prices going up?",
    answer:
      "Yes, sharply in some places. Istanbul's headline sights now charge tourist rates pegged to the euro, Park Güell jumped 80% in 2026, the Acropolis moved to €30 in summer, and Kok Tobe's cable car nearly doubled. We re-verify our price pages regularly so you're not budgeting on old numbers.",
  },
  {
    question: "Do famous landmarks charge different prices for foreigners?",
    answer:
      "Often, yes. Turkey, Uzbekistan, Cambodia, India-style dual pricing is common: locals pay a fraction of the tourist rate. It's normal and legal ~ budget using the foreigner price, which is what our price pages list.",
  },
];

export default function FamousLandmarksEntranceFeesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What the World's Famous Landmarks Actually Cost to Visit in 2026",
    description:
      "Entrance fees for the world's famous landmarks in 2026, compared across 30 cities we've visited.",
    author: { "@type": "Person", name: "Meri & Man", url: "https://udreamtravels.com/our-story" },
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
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
          { name: "Famous Landmarks Entrance Fees", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO.src} alt="Colosseum of Rome ~ famous landmark entrance fees compared" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Budget
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              30 cities worldwide
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            What the World&apos;s Famous Landmarks Actually Cost to Visit in 2026
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Compiled from our 30-city attraction price index
              </div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              We&apos;ve now priced every famous tourist spot in all 30 cities we&apos;ve visited ~ 180+ landmarks, temples,
              towers, and canyons, in local currency and dollars. Here&apos;s what that data says about what the world
              actually charges at the door.
            </p>

            <h2>The Headliners: What the Icons Cost</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Landmark</th>
                    <th className="p-3 font-semibold">2026 price</th>
                    <th className="p-3 font-semibold">Full city guide</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">Angkor Wat (pass)</td><td className="p-3 font-semibold">$37–62</td><td className="p-3"><Link href="/resources/attraction-prices/siem-reap">Siem Reap</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Colosseum (combo)</td><td className="p-3 font-semibold">$20–26</td><td className="p-3"><Link href="/resources/attraction-prices/rome">Rome</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Hagia Sophia</td><td className="p-3 font-semibold">≈ $27</td><td className="p-3"><Link href="/resources/attraction-prices/istanbul">Istanbul</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Sagrada Família</td><td className="p-3 font-semibold">$28–43</td><td className="p-3"><Link href="/resources/attraction-prices/barcelona">Barcelona</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Acropolis</td><td className="p-3 font-semibold">$22–33</td><td className="p-3"><Link href="/resources/attraction-prices/athens">Athens</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Petronas Towers deck</td><td className="p-3 font-semibold">≈ $22</td><td className="p-3"><Link href="/resources/attraction-prices/kuala-lumpur">Kuala Lumpur</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Tokyo Skytree</td><td className="p-3 font-semibold">$14–23</td><td className="p-3"><Link href="/resources/attraction-prices/tokyo">Tokyo</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Registan, Samarkand</td><td className="p-3 font-semibold">≈ $8</td><td className="p-3"><Link href="/resources/attraction-prices/samarkand">Samarkand</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Grand Palace, Bangkok</td><td className="p-3 font-semibold">≈ $14</td><td className="p-3"><Link href="/resources/attraction-prices/bangkok">Bangkok</Link></td></tr>
                  <tr className="border-t border-border"><td className="p-3">Schönbrunn Palace</td><td className="p-3 font-semibold">$30–41</td><td className="p-3"><Link href="/resources/attraction-prices/vienna">Vienna</Link></td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Most Expensive Cities for Sightseeing</h2>
            <p>
              <strong><Link href="/resources/attraction-prices/istanbul">Istanbul</Link> ($120–150)</strong> tops our index
              since its sights moved to euro-pegged tourist pricing. <strong><Link href="/resources/attraction-prices/lucerne">Lucerne</Link> ($110–160)</strong>{" "}
              follows once you ride a mountain railway, then{" "}
              <strong><Link href="/resources/attraction-prices/singapore">Singapore</Link> ($90–180)</strong> if Universal
              Studios is on your list, and <strong><Link href="/resources/attraction-prices/vienna">Vienna</Link> ($95–120)</strong>{" "}
              with its imperial palaces.
            </p>

            <h2>The Best-Value Cities (Under $25 for Everything)</h2>
            <p>
              <strong><Link href="/resources/attraction-prices/belgrade">Belgrade</Link> ($5–15)</strong> is nearly all free.{" "}
              <strong><Link href="/resources/attraction-prices/yerevan">Yerevan</Link> ($10–20)</strong>,{" "}
              <strong><Link href="/resources/attraction-prices/taichung">Taichung</Link> ($5–15)</strong>,{" "}
              <strong><Link href="/resources/attraction-prices/dushanbe">Dushanbe</Link> ($10–20)</strong>,{" "}
              <strong><Link href="/resources/attraction-prices/sarajevo">Sarajevo</Link> ($15–25)</strong>, and{" "}
              <strong><Link href="/resources/attraction-prices/tbilisi">Tbilisi</Link> ($15–40)</strong> all deliver
              world-class sightseeing for the price of one European museum ~ we broke Tbilisi down in detail in{" "}
              <Link href="/blog/tbilisi-travel-cost">Is Tbilisi Cheap?</Link>
            </p>

            <h2>Five Rules We Learned Pricing 180+ Attractions</h2>
            <p><strong>1. The icon is often free; the view of it costs money.</strong> Petronas from KLCC Park: free. The deck: $22. Same in Rome, Tokyo, and Hong Kong.</p>
            <p><strong>2. Book the big two online, always.</strong> Colosseum and Vatican-class sights sell out days ahead and resellers double the price.</p>
            <p><strong>3. Combo tickets beat singles in Europe.</strong> Athens&apos; €30 multi-site pass and the Colosseum-Forum combo are the two best deals on the continent.</p>
            <p><strong>4. Cable cars are the hidden budget line.</strong> Almaty, Hong Kong, Tirana, Lucerne ~ the ride up often costs more than every museum in town combined.</p>
            <p><strong>5. Free days exist but cost you crowds.</strong> The Vatican&apos;s free Sunday is the busiest day of the month. Sometimes $25 buys you sanity.</p>

            <h2>Browse Every City</h2>
            <p>
              The full index ~ every spot, price, photo, and Google Maps link across{" "}
              <Link href="/resources/attraction-prices">all 30 cities</Link> ~ is organised by region: Southeast Asia, East
              Asia, Central Asia &amp; the Caucasus, and Europe. Pair it with our{" "}
              <Link href="/resources/destination-costs">daily budget tool</Link> to plan the whole trip.
            </p>
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Landmark Prices FAQ"
          description="Quick answers from our 30-city attraction price index."
        />
      </div>
    </article>
  );
}

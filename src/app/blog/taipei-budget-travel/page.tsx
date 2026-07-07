import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import { spotImages } from "@/data/attraction-images";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/taipei-budget-travel";
const HERO = spotImages["hero:taipei"];
const XIANGSHAN = spotImages["taipei:Elephant Mountain (Xiangshan)"];

export const metadata = {
  title: "Taipei on a Budget: East Asia's Best-Value City (2026)",
  description:
    "Is Taipei expensive? No ~ it's East Asia's best-value capital. Real 2026 costs: $35-55/day, NT$40 metro rides, $5 night-market feasts, free temples and hikes.",
  keywords: [
    "taipei on a budget",
    "is taipei expensive",
    "taipei travel cost",
    "taipei daily budget",
    "taiwan budget travel",
    "taipei night market prices",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Taipei on a Budget: East Asia's Best-Value City (2026)",
    description:
      "Real 2026 costs: $35-55/day, NT$40 metro rides, $5 night-market feasts, free temples and hikes.",
    images: [{ url: HERO.src, width: 1280, height: 548, alt: "Taipei skyline panorama with Taipei 101" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taipei on a Budget: East Asia's Best-Value City (2026)",
    description: "Real 2026 daily budgets for Taiwan's capital.",
    images: [HERO.src],
  },
};

const FAQS = [
  {
    question: "Is Taipei expensive for tourists?",
    answer:
      "No ~ compared with Tokyo, Seoul, Hong Kong, or Singapore, Taipei is dramatically cheaper. A comfortable day costs $35 to $55 including a hotel, night-market dinners run $5 to $8, the metro tops out around NT$65 (about $2), and most major sights ~ temples, memorials, hikes, hot-spring towns ~ are free.",
  },
  {
    question: "How much money do I need per day in Taipei?",
    answer:
      "Backpackers: $25 to $35 (hostel, night markets, metro). Mid-range: $50 to $80 with a private hotel room and one paid attraction. The only regular tickets are Taipei 101 (NT$600) and the National Palace Museum (NT$350) ~ everything else on a typical itinerary is free.",
  },
  {
    question: "How much is food at Taipei night markets?",
    answer:
      "A full crawl ~ fried chicken cutlet, gua bao, stinky tofu, papaya milk, dessert ~ costs NT$300 to NT$500 (about $10 to $16), and single dishes run NT$50 to NT$120. A Michelin-listed beef noodle bowl is $5 to $8. Eating is the best-value entertainment in the city.",
  },
  {
    question: "Is the Taipei metro cheap?",
    answer:
      "Yes ~ rides cost NT$20 to NT$65 ($0.65 to $2) with an EasyCard, which also works on buses, YouBikes, and convenience stores. The airport MRT from Taoyuan is NT$150 (about $5) for a 40-minute ride.",
  },
  {
    question: "What are the best free things to do in Taipei?",
    answer:
      "The Elephant Mountain sunset hike (the classic Taipei 101 view), Chiang Kai-shek Memorial and its hourly guard change, Longshan Temple, the CKS and Sun Yat-sen memorial parks, Beitou's public hot-spring town vibes, and every night market. Even day trips like Tamsui's riverside cost only the metro fare.",
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

export default function TaipeiBudgetTravelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Taipei on a Budget: Why It's East Asia's Best-Value City",
    description:
      "Real 2026 Taipei costs: daily budgets, night-market prices, transport, and the two tickets actually worth paying for.",
    author: { "@type": "Person", name: "Meri & Man", url: "https://udreamtravels.com/our-story" },
    datePublished: "2026-07-02",
    dateModified: "2026-07-02",
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
          { name: "Taipei on a Budget", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO.src} alt="Taipei skyline with Taipei 101 ~ budget travel in Taiwan's capital" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Budget
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Taipei, Taiwan
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Taipei on a Budget: Why It&apos;s East Asia&apos;s Best-Value City
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand from our Taiwan trips</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Here&apos;s the quiet secret of East Asia: Taipei gives you Tokyo-level food, transit, and safety at half the
              price ~ sometimes a third. We&apos;ve been back three times, and our daily costs still surprise us on every
              trip.
            </p>

            <h2>Taipei Daily Budget (2026)</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Style</th>
                    <th className="p-3 font-semibold">Per day</th>
                    <th className="p-3 font-semibold">What that looks like</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">Backpacker</td><td className="p-3 font-semibold">$25–35</td><td className="p-3">Hostel pod, night markets, EasyCard everywhere</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Mid-range</td><td className="p-3 font-semibold">$50–80</td><td className="p-3">Business hotel double, beef noodle lunches, one paid sight</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Comfort</td><td className="p-3 font-semibold">$100–140</td><td className="p-3">Design hotel, teahouse afternoons, Din Tai Fung dinners</td></tr>
                </tbody>
              </table>
            </div>

            <h2>The Only Two Tickets Worth Buying</h2>
            <p>
              <strong>Taipei 101 Observatory (NT$600 / ~$19):</strong> the 37-second elevator and the giant wind damper are
              half the fun. <strong>National Palace Museum (NT$350 / ~$11):</strong> the world&apos;s greatest Chinese
              imperial collection ~ find the Jadeite Cabbage. Everything else on a classic itinerary ~ Chiang Kai-shek
              Memorial, Longshan Temple, Elephant Mountain, the markets ~ is free. Full list on our{" "}
              <Link href="/resources/attraction-prices/taipei">Taipei price page</Link>.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image src={XIANGSHAN.src} alt="Taipei 101 night view from the free Elephant Mountain hike" fill className="object-cover" />
            </div>
            <Credit author={XIANGSHAN.author} license={XIANGSHAN.license} href={XIANGSHAN.sourceUrl} />

            <h2>Night Markets: Dinner and a Show for $10</h2>
            <p>
              Shilin is the famous one, Raohe the atmospheric one, Ningxia the food-nerd one. A serious crawl ~ fried
              chicken bigger than your face, gua bao, oyster omelette, papaya milk ~ costs NT$300–500. If you make it to
              Taichung, the birthplace-of-bubble-tea pilgrimage is on our{" "}
              <Link href="/resources/attraction-prices/taichung">Taichung price page</Link>.
            </p>

            <h2>Transport: The EasyCard Runs the City</h2>
            <p>
              Metro rides NT$20–65, buses the same, YouBike shares from NT$10, and the card pays at every 7-Eleven. The
              airport MRT is NT$150. Day trips are metro-cheap too: Tamsui (NT$50), Beitou hot springs (NT$45), and the
              Maokong Gondola tea hills (NT$120).
            </p>

            <h2>Where Taipei Sits in Asia&apos;s Budget League</h2>
            <p>
              Against our price index: pricier than <Link href="/resources/attraction-prices/bangkok">Bangkok</Link>,
              cheaper than <Link href="/resources/attraction-prices/tokyo">Tokyo</Link> and{" "}
              <Link href="/resources/attraction-prices/hong-kong">Hong Kong</Link> by a wide margin, and its sightseeing
              total ($30–40) is among the lowest of any developed city we&apos;ve measured. See the full comparison in{" "}
              <Link href="/blog/famous-landmarks-entrance-fees">what famous landmarks cost</Link>.
            </p>

            <CostCallout countryName="Taiwan" />
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Taipei Budget FAQ"
          description="Quick answers for planning a Taipei trip on any budget."
        />
      </div>
    </article>
  );
}

import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import { spotImages } from "@/data/attraction-images";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/balkans-itinerary";
const HERO = spotImages["hero:sarajevo"];
const SAVA = spotImages["belgrade:Church of Saint Sava"];
const SKANDERBEG = spotImages["tirana:Skanderbeg Square"];

export const metadata = {
  title: "Balkans Itinerary: Sarajevo, Belgrade & Tirana in 2 Weeks",
  description:
    "A 2-week Balkans itinerary by bus: Sarajevo, Belgrade, and Tirana with 2026 costs (~$40-60/day), border tips, and why this is Europe's best-value route.",
  keywords: [
    "balkans itinerary",
    "balkans travel route",
    "sarajevo belgrade tirana",
    "balkans by bus",
    "balkans budget travel",
    "2 weeks in the balkans",
    "is the balkans cheap",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Balkans Itinerary: Sarajevo, Belgrade & Tirana in 2 Weeks",
    description:
      "A 2-week overland Balkans route with 2026 costs (~$40-60/day), border tips, and why it's Europe's best value.",
    images: [{ url: HERO.src, width: 1280, height: 720, alt: "Sarajevo panorama, first stop of a Balkans itinerary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balkans Itinerary: Sarajevo, Belgrade & Tirana in 2 Weeks",
    description: "Europe's best-value route, with real 2026 costs.",
    images: [HERO.src],
  },
};

const FAQS = [
  {
    question: "How many days do you need for the Balkans?",
    answer:
      "Two weeks covers three capitals comfortably: 4 days Sarajevo (with a Mostar day trip), 4 days Belgrade, 4 days Tirana (with a beach or Berat day trip), plus two travel days. With three weeks, add Kotor or Ohrid between them.",
  },
  {
    question: "Is the Balkans cheap to travel?",
    answer:
      "It's the best value in Europe. Our real average was $40 to $60 per day per person mid-range ~ private rooms, restaurant meals, museums, and intercity buses included. Belgrade and Tirana sightseeing is nearly all free; Sarajevo's paid sights cost a few dollars each.",
  },
  {
    question: "How do you get between Sarajevo, Belgrade, and Tirana?",
    answer:
      "Buses are the backbone: Sarajevo to Belgrade is about 7 to 8 hours ($20 to $30), Belgrade to Tirana is a long haul best broken in Podgorica or done as a night bus ($30 to $45). Book a day ahead in summer; carry your passport ~ you'll cross real borders with real stamps.",
  },
  {
    question: "Is the Balkans safe for travellers?",
    answer:
      "Yes ~ all three capitals felt as safe as Western Europe to us, with famously warm hospitality. Take normal city precautions, use registered taxis or apps, and in the countryside of Bosnia stick to marked paths (unexploded-ordnance signs are rare but real in remote areas).",
  },
  {
    question: "Do you need visas for Bosnia, Serbia, and Albania?",
    answer:
      "EU, UK, US, and many other passports enter all three visa-free for 90 days. Philippine passport holders: Albania is visa-free in summer seasons and accessible with valid Schengen/US visas, while Bosnia and Serbia have their own rules ~ check each country's current policy or see our visa guide section before routing.",
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

export default function BalkansItineraryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Balkans Itinerary We'd Repeat: Sarajevo, Belgrade & Tirana in 2 Weeks",
    description:
      "A two-week overland Balkans itinerary with 2026 costs, bus logistics, and the best of three underrated capitals.",
    author: { "@type": "Person", name: "Meri & Man", url: "https://udreamtravels.com/our-story" },
    datePublished: "2026-07-01",
    dateModified: "2026-07-01",
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
          { name: "Balkans Itinerary", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO.src} alt="Sarajevo panorama ~ start of a two-week Balkans itinerary" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Itinerary
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Bosnia · Serbia · Albania
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            The Balkans Itinerary We&apos;d Repeat: Sarajevo, Belgrade &amp; Tirana in 2 Weeks
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand from our Balkans route</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Western Europe charges €25 to look at a church. The Balkans hand you three capitals ~ Ottoman bazaars,
              rebuilt bridges, riverside fortresses, painted communist towers ~ for $40 a day, and throw in the friendliest
              people on the continent. This is the two-week route we&apos;d do again tomorrow.
            </p>

            <h2>The Route at a Glance</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Days</th>
                    <th className="p-3 font-semibold">Stop</th>
                    <th className="p-3 font-semibold">Sightseeing cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">1–4</td><td className="p-3">Sarajevo (+ Mostar day trip)</td><td className="p-3 font-semibold">$15–25</td></tr>
                  <tr className="border-t border-border"><td className="p-3">5</td><td className="p-3">Bus to Belgrade (7–8 h, $20–30)</td><td className="p-3">~</td></tr>
                  <tr className="border-t border-border"><td className="p-3">5–9</td><td className="p-3">Belgrade</td><td className="p-3 font-semibold">$5–15</td></tr>
                  <tr className="border-t border-border"><td className="p-3">10</td><td className="p-3">Night bus / Podgorica split ($30–45)</td><td className="p-3">~</td></tr>
                  <tr className="border-t border-border"><td className="p-3">10–14</td><td className="p-3">Tirana (+ Berat or beach day)</td><td className="p-3 font-semibold">$20–30</td></tr>
                </tbody>
              </table>
            </div>

            <h2>Stop 1: Sarajevo ~ Where East Meets West (Days 1–4)</h2>
            <p>
              Ottoman bazaar lanes, Austro-Hungarian boulevards, and the scars and resilience of the 90s siege in one
              walkable centre. Don&apos;t miss the <strong>Baščaršija bazaar</strong> (free), the rebuilt{" "}
              <strong>City Hall</strong> (~$6), the <strong>Tunnel of Hope</strong> (~$6), and sunset from the free{" "}
              <strong>Yellow Fortress</strong>. Ćevapi dinners run $4–6. Full prices on our{" "}
              <Link href="/resources/attraction-prices/sarajevo">Sarajevo page</Link>; day-trip to Mostar&apos;s famous
              bridge (2.5 h by train, ~$10 return).
            </p>

            <h2>Stop 2: Belgrade ~ The Free Capital (Days 5–9)</h2>
            <p>
              Nearly everything in Belgrade costs nothing: the vast <strong>Kalemegdan fortress</strong> over the meeting
              of two rivers, the gold-blazing <strong>Church of Saint Sava</strong>, bohemian <strong>Skadarlija</strong>,
              and the pedestrian river of Knez Mihailova. Spend your dinars on kafana nights instead ~ live music and a
              feast for two under $30. Prices (what few there are) on our{" "}
              <Link href="/resources/attraction-prices/belgrade">Belgrade page</Link>.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image src={SAVA.src} alt="Church of Saint Sava, Belgrade ~ free to enter" fill className="object-cover" />
            </div>
            <Credit author={SAVA.author} license={SAVA.license} href={SAVA.sourceUrl} />

            <h2>Stop 3: Tirana ~ Europe&apos;s Strangest, Cheapest Capital (Days 10–14)</h2>
            <p>
              Painted tower blocks, 170,000 Cold War bunkers (two now excellent museums, $5–11), a pyramid you can climb
              for free, and the Dajti cable car ($15) up a mountain that overlooks it all. Base at{" "}
              <strong>Skanderbeg Square</strong> and eat fërgesë for $4. Everything priced on our{" "}
              <Link href="/resources/attraction-prices/tirana">Tirana page</Link> ~ then add a Berat &quot;city of a
              thousand windows&quot; day trip ($10 by bus) or the Durrës beach.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image src={SKANDERBEG.src} alt="Skanderbeg Square, Tirana, Albania" fill className="object-cover" />
            </div>
            <Credit author={SKANDERBEG.author} license={SKANDERBEG.license} href={SKANDERBEG.sourceUrl} />

            <h2>What Two Weeks Actually Costs</h2>
            <p>
              Our real numbers, per person, mid-range: <strong>accommodation $25–40/night</strong> (private doubles, split),{" "}
              <strong>food $15–25/day</strong>, <strong>all sightseeing $40–70 total</strong>, and{" "}
              <strong>buses $50–75 total</strong>. Call it <strong>$600–850 for the fortnight</strong> ~ less than four
              days in Switzerland. Compare every city on our{" "}
              <Link href="/resources/attraction-prices">attraction prices index</Link>.
            </p>

            <h2>Practical Notes</h2>
            <p>
              Fly into Sarajevo (SJJ) and out of Tirana (TIA) to avoid backtracking. Carry euros as backup cash but pay in
              local currency (BAM, RSD, ALL). Summer buses fill up ~ book the day before. And bring an appetite: the
              portions are a regional hazard.
            </p>
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Balkans Route FAQ"
          description="Logistics, costs, and safety ~ answered from the road."
        />
      </div>
    </article>
  );
}

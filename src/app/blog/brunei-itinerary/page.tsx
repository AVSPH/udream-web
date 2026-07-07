import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import { spotImages } from "@/data/attraction-images";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/brunei-itinerary";
const HERO = spotImages["hero:bandar-seri-begawan"];
const KAMPONG = spotImages["bandar-seri-begawan:Kampong Ayer Water Village"];

export const metadata = {
  title: "Brunei in 48 Hours: Itinerary, Costs & Is It Worth It?",
  description:
    "A 2-day Brunei itinerary from our trip: golden mosques (free), the world's largest water village, the Royal Regalia Museum, and real 2026 costs (~$20-35 + Temburong).",
  keywords: [
    "brunei itinerary",
    "things to do in brunei",
    "is brunei worth visiting",
    "bandar seri begawan travel",
    "kampong ayer water village",
    "brunei travel cost",
    "2 days in brunei",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Brunei in 48 Hours: Itinerary, Costs & Is It Worth It?",
    description:
      "Golden mosques (free), the world's largest water village, and real 2026 costs from our 2-day Brunei trip.",
    images: [{ url: HERO.src, width: 1280, height: 853, alt: "Bandar Seri Begawan waterfront, Brunei" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunei in 48 Hours: Itinerary, Costs & Is It Worth It?",
    description: "A 2-day itinerary with real 2026 costs.",
    images: [HERO.src],
  },
};

const FAQS = [
  {
    question: "Is Brunei worth visiting?",
    answer:
      "For 48 hours on a Borneo route, absolutely. It's unlike anywhere else in Southeast Asia: immaculate, quiet, alcohol-free, with two of Asia's most beautiful mosques, the world's largest stilt village, and a Sultan's treasury you can walk through free. It's a fascinating, easy stopover ~ just don't expect nightlife.",
  },
  {
    question: "How many days do you need in Brunei?",
    answer:
      "Two days covers the capital properly: mosques, Kampong Ayer, the Royal Regalia Museum, and the markets on day one and a bit of day two; add the Ulu Temburong rainforest day trip and you've seen Brunei's best. Three days only if you want a slower pace.",
  },
  {
    question: "Is Brunei expensive?",
    answer:
      "The sights aren't ~ nearly everything is free, and a water-village boat tour is B$15 to B$30. Budget $20 to $35 for two days of sightseeing and boats. Food is cheap at markets ($2 to $5 a meal). The one big-ticket item is the Ulu Temburong National Park day tour at B$110 to B$150 (about $80 to $110).",
  },
  {
    question: "What currency does Brunei use?",
    answer:
      "The Brunei dollar (BND), fixed 1:1 with the Singapore dollar ~ Singapore notes are accepted everywhere at par. About B$1.34 to the US dollar.",
  },
  {
    question: "How do you get to Brunei?",
    answer:
      "Fly into Brunei International (BWN) ~ Royal Brunei connects KL, Singapore, Manila, and more. Overlanders arrive by bus from Kota Kinabalu (about 8 hours with multiple border stamps, $15 to $20) or by ferry from Labuan.",
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

export default function BruneiItineraryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Brunei in 48 Hours: The Itinerary, the Costs, and Whether It's Worth It",
    description:
      "A two-day Brunei itinerary from our trip: golden mosques, Kampong Ayer water village, Royal Regalia Museum, and real 2026 costs.",
    author: { "@type": "Person", name: "Meri & Man", url: "https://udreamtravels.com/our-story" },
    datePublished: "2026-06-30",
    dateModified: "2026-06-30",
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
          { name: "Brunei in 48 Hours", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO.src} alt="Bandar Seri Begawan waterfront ~ 48 hours in Brunei" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Itinerary
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Bandar Seri Begawan, Brunei
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Brunei in 48 Hours: The Itinerary, the Costs, and Whether It&apos;s Worth It
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand from our Borneo trip</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Brunei is the country everyone skips and nobody can describe. So here&apos;s our description after 48 hours:
              a tiny, immaculate sultanate where the mosques look like Aladdin sets, 13,000 people live on stilts over a
              river, and almost every door you walk through is free.
            </p>

            <h2>Day 1: Mosques, the Water Village, and the Sultan&apos;s Treasury</h2>
            <p>
              <strong>Morning ~ Sultan Omar Ali Saifuddien Mosque (free):</strong> the golden-domed icon floating beside
              its ceremonial stone barge. Visit outside prayer times; robes are lent at the door.
            </p>
            <p>
              <strong>Midday ~ Royal Regalia Museum (free):</strong> the gilded coronation chariot, jewelled crowns, and a
              hall of gifts from every head of state on earth. Genuinely one of the most surreal free museums anywhere.
            </p>
            <p>
              <strong>Afternoon ~ Kampong Ayer:</strong> cross by water taxi for <strong>B$1</strong>, or hire a boatman
              for an hour (<strong>B$15–30</strong>) to weave through the world&apos;s largest stilt village ~ schools,
              mosques, and fire stations all on the water. Ask to continue upriver for proboscis monkeys at dusk.
            </p>
            <p>
              <strong>Evening ~ Gadong Night Market:</strong> grilled chicken wings, ambuyat if you dare, nothing over
              B$5.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image src={KAMPONG.src} alt="Kampong Ayer water village, Bandar Seri Begawan, Brunei" fill className="object-cover" />
            </div>
            <Credit author={KAMPONG.author} license={KAMPONG.license} href={KAMPONG.sourceUrl} />

            <h2>Day 2: The 29-Dome Mosque and the Rainforest (or the Slow Loop)</h2>
            <p>
              <strong>Option A ~ Ulu Temburong National Park (B$110–150):</strong> longboat up a jungle river to a canopy
              walkway 50 m above untouched primary rainforest. It&apos;s Brunei&apos;s one splurge and its best experience
              ~ book a licensed tour the day before.
            </p>
            <p>
              <strong>Option B ~ the slow loop (nearly free):</strong> morning at the vast{" "}
              <strong>Jame&apos; Asr Hassanil Bolkiah Mosque</strong> (29 golden domes, free), the Tamu Kianggeh canal
              market, and a sunset walk along the waterfront esplanade.
            </p>

            <h2>What 48 Hours in Brunei Costs</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Expense</th>
                    <th className="p-3 font-semibold">2026 price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">All mosques + Royal Regalia Museum</td><td className="p-3 font-semibold">Free</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Kampong Ayer boat (crossing + 1 h tour)</td><td className="p-3 font-semibold">$12–23</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Meals (markets + kopitiams), 2 days</td><td className="p-3 font-semibold">$15–25</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Ulu Temburong day tour (optional)</td><td className="p-3 font-semibold">$80–110</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Decent double room, per night</td><td className="p-3 font-semibold">$35–60</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Every spot with maps and details is on our{" "}
              <Link href="/resources/attraction-prices/bandar-seri-begawan">Brunei attraction prices page</Link>.
            </p>

            <h2>Slotting Brunei Into a Borneo Route</h2>
            <p>
              We came overland from <Link href="/resources/attraction-prices/kota-kinabalu">Kota Kinabalu</Link> (8 hours,
              five passport stamps, $15–20) and flew out ~ the classic move. Royal Brunei&apos;s cheap regional fares also
              make BSB a neat stopover between{" "}
              <Link href="/resources/attraction-prices/kuala-lumpur">Kuala Lumpur</Link> and Manila. For the numbers on
              every nearby stop, browse the <Link href="/resources/attraction-prices">full price index</Link>.
            </p>
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Brunei Travel FAQ"
          description="Everything people ask before adding Brunei to a Borneo trip."
        />
      </div>
    </article>
  );
}

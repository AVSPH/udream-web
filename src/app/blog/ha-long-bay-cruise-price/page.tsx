import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/ha-long-bay-cruise-price";
const HERO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/The_lovely_colours_of_sunset_over_Halong_Bay_%2831520161931%29.jpg/1280px-The_lovely_colours_of_sunset_over_Halong_Bay_%2831520161931%29.jpg";

export const metadata = {
  title: "Ha Long Bay Cruise Price 2026: Day vs Overnight (Real Costs)",
  description:
    "How much does a Ha Long Bay cruise cost in 2026? Day cruises from $55, overnight from $100, entrance fees, hidden extras, and the Lan Ha Bay trick that saves you 40%.",
  keywords: [
    "ha long bay cruise price",
    "ha long bay cruise cost",
    "ha long bay day trip vs overnight",
    "ha long bay entrance fee",
    "lan ha bay cruise",
    "halong bay from hanoi",
    "is ha long bay worth it",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Ha Long Bay Cruise Price 2026: Day vs Overnight (Real Costs)",
    description:
      "Day cruises from $55, overnight from $100, entrance fees, hidden extras, and the Lan Ha Bay trick that saves you 40%.",
    images: [{ url: HERO, width: 1280, height: 853, alt: "Sunset over Ha Long Bay limestone karsts, Vietnam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ha Long Bay Cruise Price 2026: Day vs Overnight (Real Costs)",
    description: "Real 2026 cruise prices, entrance fees, and how not to overpay.",
    images: [HERO],
  },
};

const FAQS = [
  {
    question: "How much does a Ha Long Bay cruise cost in 2026?",
    answer:
      "A good day cruise with lunch, a cave visit, and kayaking costs $55 to $120 per person including Hanoi transfers. Overnight cruises run $100 to $250+ per person for mid-range boats, and luxury two-night trips can exceed $400. The mandatory sightseeing fee of 290,000 to 310,000 VND (about $12) is usually included in the price ~ always confirm.",
  },
  {
    question: "Is a Ha Long Bay day trip or overnight cruise better?",
    answer:
      "If you can afford it, overnight wins. Day trippers spend about 5 hours in transit for 4 to 5 hours on the water in the busiest zone. Overnight boats reach quieter areas, and sunset plus sunrise among the karsts is the whole point. On a tight budget or schedule, a well-reviewed day cruise still delivers the postcard views.",
  },
  {
    question: "What is the Ha Long Bay entrance fee?",
    answer:
      "The official sightseeing fee is 290,000 to 310,000 VND (roughly $12) per person depending on the route, which covers stops like Sung Sot Cave and Ti Top Island. Reputable operators fold it into their price; some budget boats add it on the day, so check your inclusions.",
  },
  {
    question: "Is Lan Ha Bay better than Ha Long Bay?",
    answer:
      "Lan Ha Bay, immediately south, has the same limestone scenery with a fraction of the boat traffic, and cruises there often cost 20 to 40% less. If untouched scenery matters more to you than the famous name, base on Cat Ba Island and cruise Lan Ha instead.",
  },
  {
    question: "How do you get to Ha Long Bay from Hanoi?",
    answer:
      "It's about 2.5 hours by expressway. Most cruises include a shared limousine-bus transfer from Hanoi's Old Quarter; booked separately it costs $10 to $15 each way. There's no need to overnight in Ha Long City itself unless you want the Sun World cable car.",
  },
  {
    question: "When is the best time to cruise Ha Long Bay?",
    answer:
      "October to December brings the clearest skies and calm water. March to May is warm and good value. June to September is hot with occasional typhoon cancellations (you're refunded or rebooked), and January to February can be misty ~ atmospheric, but pack layers.",
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

export default function HaLongBayCruisePricePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ha Long Bay Cruise Prices in 2026: Day vs Overnight, and How Not to Overpay",
    description:
      "Real 2026 Ha Long Bay cruise prices: day cruises from $55, overnight from $100, entrance fees, hidden extras, and the Lan Ha Bay alternative.",
    author: { "@type": "Person", name: "Meri & Man", url: "https://udreamtravels.com/our-story" },
    datePublished: "2026-07-04",
    dateModified: "2026-07-04",
    image: HERO,
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
          { name: "Ha Long Bay Cruise Price", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO} alt="Ha Long Bay cruise at sunset among limestone karsts, Vietnam" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Budget
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Ha Long Bay, Vietnam
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Ha Long Bay Cruise Prices in 2026: Day vs Overnight, and How Not to Overpay
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand from our Vietnam trip</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Ha Long Bay pricing is deliberately confusing. The same boat can cost $60 on one site and $140 on another,
              &quot;all-inclusive&quot; can exclude the government entrance fee, and the word &quot;luxury&quot; means
              nothing. Here&apos;s the honest 2026 price map, from our own booking mistakes.
            </p>

            <h2>How Much Does a Ha Long Bay Cruise Actually Cost?</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Cruise type</th>
                    <th className="p-3 font-semibold">2026 price per person</th>
                    <th className="p-3 font-semibold">What you get</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">Budget day cruise</td><td className="p-3 font-semibold">$55–75</td><td className="p-3">Hanoi transfer, lunch, cave + island stop, shared kayaks</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Premium day cruise</td><td className="p-3 font-semibold">$90–120</td><td className="p-3">Limousine bus, buffet, smaller group, sundeck time</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Mid-range overnight (1 night)</td><td className="p-3 font-semibold">$100–180</td><td className="p-3">Cabin with window, 4 meals, kayaking, Ti Top sunrise</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Luxury overnight (1–2 nights)</td><td className="p-3 font-semibold">$220–450+</td><td className="p-3">Balcony suite, pool deck, quieter Lan Ha routes</td></tr>
                </tbody>
              </table>
            </div>

            <p>
              On top of that sits the official <strong>sightseeing fee: ₫290,000–310,000 (~$12)</strong>, which covers the
              route stops like Sung Sot Cave and Ti Top Island. Good operators include it; budget ones sometimes collect it
              in cash on the day. It&apos;s the first thing to check on any &quot;too cheap&quot; listing ~ our{" "}
              <Link href="/resources/attraction-prices/ha-long-bay">Ha Long Bay price page</Link> keeps the current fees.
            </p>

            <h2>Day Cruise vs Overnight: The Honest Answer</h2>
            <p>
              A day trip from Hanoi means roughly five hours on a bus for four to five hours on the water, all of it in the
              busiest corner of the bay. It&apos;s still spectacular ~ but the bay&apos;s magic hours are dawn and dusk, and
              day boats see neither.
            </p>
            <p>
              An overnight cruise costs roughly double and gives you ten times the experience: sunset on the top deck,
              squid fishing at night, tai chi at sunrise, and anchorages the day fleet never reaches. If your budget allows
              one splurge in Vietnam, make it this one.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vietnam_08_-_58_-_Halong_Bay_%283171046046%29.jpg/1280px-Vietnam_08_-_58_-_Halong_Bay_%283171046046%29.jpg"
                alt="Ha Long Bay cruise boats among limestone karsts"
                fill
                className="object-cover"
              />
            </div>
            <Credit
              author="McKay Savage"
              license="CC BY 2.0"
              href="https://commons.wikimedia.org/wiki/File:Vietnam_08_-_58_-_Halong_Bay_(3171046046).jpg"
            />

            <h2>The Lan Ha Bay Trick (Save 20–40%)</h2>
            <p>
              Immediately south of the famous zone, <strong>Lan Ha Bay</strong> has the same jungle-topped karsts, cleaner
              water, and a fraction of the boats ~ because it falls under Cat Ba's administration instead of the Ha Long
              brand. Cruises from Cat Ba Island cost <strong>$25–60</strong> for a full day. If you saw Instagram and want
              the scenery rather than the name, this is the smarter booking.
            </p>

            <h2>Hidden Costs to Watch For</h2>
            <p>
              <strong>Drinks on board</strong> (often 3–4x shore prices), <strong>kayak fees</strong> on budget boats
              (₫100,000–200,000 if not included), <strong>single supplements</strong> for solo travellers on overnight
              cruises, <strong>port shuttle upgrades</strong>, and tips for crew. None are scams ~ they&apos;re just how a
              $55 headline becomes an $85 day. Read the inclusion list line by line.
            </p>

            <h2>What a Cruise Includes at Each Stop</h2>
            <p>
              <strong>Sung Sot (Surprise) Cave:</strong> the bay&apos;s biggest grotto, included on route-2 tickets ~ about
              100 steps up, fully lit. <strong>Ti Top Island:</strong> climb ~400 steps for the definitive karst panorama,
              then swim at the crescent beach. <strong>Kayaking:</strong> the best 45 minutes of the trip, paddling through
              rock arches into hidden lagoons. If you have a spare evening on land, the{" "}
              <Link href="/resources/attraction-prices/ha-long-bay">Sun World cable car</Link> (~$14) gives a bird&apos;s-eye
              encore.
            </p>

            <h2>Getting There from Hanoi</h2>
            <p>
              Fly into <strong>Noi Bai (HAN)</strong>; the bay is 2.5 hours east by expressway. Nearly every cruise includes
              an Old Quarter pickup ~ if yours doesn&apos;t, limousine buses cost $10–15 each way. Pair the trip with our{" "}
              <Link href="/blog/is-southeast-asia-still-worth-it">Southeast Asia budget reality check</Link> and the full{" "}
              <Link href="/resources/attraction-prices">attraction prices index</Link> for the rest of your route.
            </p>

            <CostCallout countryName="Vietnam" />
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Ha Long Bay Cruise FAQ"
          description="Everything people ask before booking, answered with 2026 numbers."
        />
      </div>
    </article>
  );
}

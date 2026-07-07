import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/tbilisi-travel-cost";
const HERO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Parts_of_Old_Tbilisi%2C_historical_center_of_Tbilisi%2C_Georgia._View_from_the_Metekhi_church._July_2023.jpg/1280px-Parts_of_Old_Tbilisi%2C_historical_center_of_Tbilisi%2C_Georgia._View_from_the_Metekhi_church._July_2023.jpg";

export const metadata = {
  title: "Is Tbilisi Cheap? Georgia Travel Costs in 2026 (Real Budget)",
  description:
    "Yes ~ Tbilisi is one of Europe's cheapest capitals. Real 2026 daily budgets: $30-45/day mid-range, $1 metro rides, $6 feasts, sulfur baths, and what actually costs money in Georgia.",
  keywords: [
    "is tbilisi cheap",
    "tbilisi travel cost",
    "georgia travel budget",
    "tbilisi daily budget",
    "cheapest capitals in europe",
    "tbilisi sulfur baths price",
    "georgia country travel cost",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Is Tbilisi Cheap? Georgia Travel Costs in 2026 (Real Budget)",
    description:
      "Real 2026 daily budgets for Tbilisi: $30-45/day mid-range, $1 metro rides, $6 feasts, and what actually costs money in Georgia.",
    images: [{ url: HERO, width: 1280, height: 960, alt: "Old Tbilisi historical centre viewed from Metekhi church" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Tbilisi Cheap? Georgia Travel Costs in 2026",
    description: "Real daily budgets for one of Europe's cheapest capitals.",
    images: [HERO],
  },
};

const FAQS = [
  {
    question: "How much money do I need per day in Tbilisi?",
    answer:
      "Backpackers manage on $20 to $25 a day (hostel bed, bakery breakfasts, khinkali dinners, metro). A comfortable mid-range day ~ private guesthouse room, two restaurant meals, wine, a paid sight or bath ~ runs $30 to $45. Even 'splurging' rarely passes $80 a day outside luxury hotels.",
  },
  {
    question: "Is Georgia (the country) cheap for tourists?",
    answer:
      "Yes ~ Georgia is consistently among the cheapest destinations in wider Europe. A metro ride costs about $0.40, a filling khinkali dinner $4 to $6, excellent local wine $3 to $5 a bottle, and most famous sights (the fortress, cathedral, old town) are completely free.",
  },
  {
    question: "How much do the Tbilisi sulfur baths cost?",
    answer:
      "Public bath halls in Abanotubani cost ₾10 to ₾30 (about $4 to $11). A private room for two at a famous house like Chreli-Abano runs ₾100 to ₾200 per hour (about $37 to $75), and the kisa scrub adds ₾20 to ₾30. The private room is the one worthwhile splurge in the city.",
  },
  {
    question: "Do I need a visa to visit Georgia?",
    answer:
      "Citizens of about 95 countries can enter visa-free for a full year, one of the world's most generous policies. Philippine passport holders currently need a Georgian e-visa or can enter with a valid visa or residence permit from certain countries ~ check the official e-visa portal, and see our visa guide section for the current rules.",
  },
  {
    question: "Is Tbilisi safe for travellers?",
    answer:
      "We found Tbilisi very safe day and night ~ petty crime is low and locals are famously hospitable. Use the Bolt app for taxis to skip fare negotiations, and watch your footing on the old town's uneven lanes. Standard demonstrations sometimes happen on Rustaveli Avenue; simply steer around them.",
  },
  {
    question: "How many days do you need in Tbilisi?",
    answer:
      "Three days covers the city well: one for the old town, fortress, and baths, one for museums and Mtatsminda, and one for a day trip ~ Mtskheta (the ancient capital, 30 minutes away) or the Kazbegi mountains (a spectacular full day).",
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

export default function TbilisiTravelCostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Is Tbilisi Cheap? What Georgia Actually Costs in 2026",
    description:
      "Real 2026 daily budgets for Tbilisi, Georgia: accommodation, food, sulfur baths, and day trips ~ one of Europe's cheapest capitals, itemised.",
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
          { name: "Tbilisi Travel Cost", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO} alt="Old Tbilisi, Georgia ~ one of Europe's cheapest capital cities" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Budget
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Tbilisi, Georgia
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Is Tbilisi Cheap? What Georgia Actually Costs in 2026
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand from our Caucasus trip</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Short answer: yes. Tbilisi is the cheapest capital we&apos;ve visited in wider Europe, and it isn&apos;t
              close. We ate like royalty for $6, crossed the city for 40 cents, and the famous sights ~ the fortress, the
              great cathedral, the whole crooked old town ~ cost exactly nothing.
            </p>

            <h2>Tbilisi Daily Budget at a Glance (2026)</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Travel style</th>
                    <th className="p-3 font-semibold">Per day</th>
                    <th className="p-3 font-semibold">What that looks like</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">Backpacker</td><td className="p-3 font-semibold">$20–25</td><td className="p-3">Hostel bed, bakery + khinkali, metro everywhere</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Mid-range (us)</td><td className="p-3 font-semibold">$30–45</td><td className="p-3">Guesthouse double, restaurant meals, wine, a bath or museum</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Comfort</td><td className="p-3 font-semibold">$60–80</td><td className="p-3">Boutique hotel, private sulfur bath room, Kazbegi day tour</td></tr>
                </tbody>
              </table>
            </div>

            <h2>What&apos;s Free in Tbilisi (Most of It)</h2>
            <p>
              The best of Tbilisi costs nothing: wandering the wooden balconies of the old town, the{" "}
              <strong>Narikala Fortress</strong> walls, the gold-domed <strong>Sameba Cathedral</strong>, the leaning clock
              tower, and the LED-rippling <strong>Bridge of Peace</strong> after dark. The cable car up to the fortress is
              ₾2.5–5 (~$1–2) per ride ~ practically free. Our{" "}
              <Link href="/resources/attraction-prices/tbilisi">Tbilisi attraction price list</Link> has every entry fee
              with Google Maps links.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2014_Tbilisi%2C_%C5%81a%C5%BAnie_siarkowe_w_Abanotubani_%2801%29.jpg/1280px-2014_Tbilisi%2C_%C5%81a%C5%BAnie_siarkowe_w_Abanotubani_%2801%29.jpg"
                alt="Abanotubani sulfur bath domes in old Tbilisi, Georgia"
                fill
                className="object-cover"
              />
            </div>
            <Credit
              author="Marcin Konsek"
              license="CC BY-SA 4.0"
              href="https://commons.wikimedia.org/wiki/File:2014_Tbilisi,_%C5%81a%C5%BAnie_siarkowe_w_Abanotubani_(01).jpg"
            />

            <h2>The One Splurge: Sulfur Baths</h2>
            <p>
              Tbilisi literally means &quot;warm place,&quot; and the brick-domed baths of Abanotubani are the city&apos;s
              signature experience. Public halls cost <strong>₾10–30 (~$4–11)</strong>; a private room for two at a famous
              house like Chreli-Abano runs <strong>₾100–200/hour (~$37–75)</strong>. Add the kisa scrub ~ you&apos;ll emerge
              a new person. It&apos;s the only thing in Tbilisi we&apos;d call expensive, and it&apos;s still worth it.
            </p>

            <h2>Food and Wine: Where Georgia Ruins You Forever</h2>
            <p>
              A plate of twelve <strong>khinkali</strong> (soup dumplings) costs ₾12–18 (~$4.50–7). A cheese-boat{" "}
              <strong>khachapuri</strong> big enough for two: ₾8–15. House wine from the birthplace of winemaking: ₾3–5 a
              glass, and very drinkable bottles from ₾10. Our most expensive dinner for two, with wine, in a proper old-town
              restaurant, came to about $25 total.
            </p>

            <h2>Transport: Cheapest in Europe?</h2>
            <p>
              The metro and city buses cost <strong>₾1 (~$0.40)</strong> flat with a tap card. Bolt taxis cross the whole
              city for $2–4. The 1905 funicular up Mtatsminda ~ the best view in town ~ is ₾10–15 round trip. Marshrutka
              minibuses to Mtskheta cost about ₾2, and full-day Kazbegi mountain tours run $25–50.
            </p>

            <h2>How Tbilisi Compares</h2>
            <p>
              Against our other cheap favourites: Tbilisi undercuts <Link href="/resources/attraction-prices/belgrade">Belgrade</Link>{" "}
              and <Link href="/resources/attraction-prices/tirana">Tirana</Link> on food, matches{" "}
              <Link href="/resources/attraction-prices/yerevan">Yerevan</Link> next door, and makes Western European capitals
              look like a practical joke. Pair it with Armenia for the perfect two-capital Caucasus trip ~ the overnight
              train or a marshrutka connects them for under $20.
            </p>

            <h2>When to Go and Where to Stay</h2>
            <p>
              May–June and September–October are ideal ~ warm days, golden light on the old town, harvest season in the
              wine regions. Base yourself in the Old Town or around Freedom Square; everything central is walkable. Fly into{" "}
              <strong>Tbilisi International (TBS)</strong>; bus 337 reaches the centre for ₾1.
            </p>

            <CostCallout countryName="Georgia" />
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Tbilisi & Georgia Budget FAQ"
          description="The cost questions everyone asks before a Georgia trip, answered with 2026 prices."
        />
      </div>
    </article>
  );
}

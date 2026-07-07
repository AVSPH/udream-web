import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { FAQSection } from "@/components/blog/faq-section";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import Image from "next/image";

const CANONICAL = "https://udreamtravels.com/blog/things-to-do-in-almaty";
const HERO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Sunset_over_the_Almaty_seen_from_Kok_Tobe_mountain%2C_pic_2.jpg/1280px-Sunset_over_the_Almaty_seen_from_Kok_Tobe_mountain%2C_pic_2.jpg";

export const metadata = {
  title: "Things to Do in Almaty: Prices + 4-Day Itinerary (2026)",
  description:
    "The 10 best things to do in Almaty, Kazakhstan with 2026 entry prices, a 4-day itinerary, and real costs from our trip ~ Medeu, Shymbulak, Big Almaty Lake, Charyn Canyon.",
  keywords: [
    "things to do in almaty",
    "almaty travel guide",
    "almaty itinerary",
    "is almaty worth visiting",
    "almaty kazakhstan tourism",
    "big almaty lake",
    "charyn canyon tour",
    "almaty travel cost",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title: "Things to Do in Almaty: Prices + 4-Day Itinerary (2026)",
    description:
      "The 10 best things to do in Almaty with 2026 entry prices and a 4-day itinerary ~ Medeu, Shymbulak, Big Almaty Lake, and Charyn Canyon.",
    images: [{ url: HERO, width: 1280, height: 960, alt: "Sunset over Almaty from Kok Tobe mountain" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Things to Do in Almaty: Prices + 4-Day Itinerary (2026)",
    description:
      "The 10 best things to do in Almaty with 2026 entry prices and a 4-day itinerary.",
    images: [HERO],
  },
};

const FAQS = [
  {
    question: "Is Almaty worth visiting?",
    answer:
      "Yes ~ Almaty is one of the best-value city-plus-mountains destinations anywhere. Within 30 minutes of downtown you can be ice skating at 1,691 m at Medeu or riding a gondola to Shymbulak at 2,200 m, and day trips reach the turquoise Big Almaty Lake and Charyn Canyon. Entry fees are tiny by Western standards: most paid attractions cost $2 to $19.",
  },
  {
    question: "How many days do you need in Almaty?",
    answer:
      "Four days is the sweet spot. Two days cover the city (Panfilov Park, Zenkov Cathedral, Green Bazaar, Kok Tobe) plus the Medeu and Shymbulak mountain loop, and two more days cover the big day trips: Big Almaty Lake and Charyn Canyon. With three days, drop Charyn; with five or more, add the Kolsai Lakes.",
  },
  {
    question: "Is Almaty expensive for tourists?",
    answer:
      "No. Budget $45 to $60 for every major paid attraction in and around the city, $10 to $25 per day for excellent food, and $30 to $60 per night for a good double room. The biggest costs are the two mountain day trips, which run $30 to $50 per person with a shared tour.",
  },
  {
    question: "Do I need a visa to visit Kazakhstan?",
    answer:
      "Dozens of nationalities enter Kazakhstan visa-free for stays of 14 to 30 days, and others can use the e-visa system. Rules change, so check the latest requirements for your passport before booking ~ our visa guide section keeps the details for Philippine passport holders.",
  },
  {
    question: "When is the best time to visit Almaty?",
    answer:
      "June to September for hiking and the brightest turquoise water at Big Almaty Lake, or December to March for skiing at Shymbulak and skating at Medeu. April to May and October are quieter shoulder seasons ~ some high trails may be closed, but city sightseeing is lovely.",
  },
  {
    question: "Is Almaty safe?",
    answer:
      "We found Almaty very safe as a couple, including at night in the centre. Standard city sense applies: use official taxi apps (Yandex Go), agree bazaar prices before buying, and carry your passport for the Big Almaty Lake area, which sits in a border zone.",
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

export default function ThingsToDoInAlmatyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Things to Do in Almaty: Kazakhstan's Mountain City (Prices + 4-Day Itinerary)",
    description:
      "The 10 best things to do in Almaty, Kazakhstan with 2026 entry prices, a 4-day itinerary, and real costs from our trip.",
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
          { name: "Things to Do in Almaty", item: CANONICAL },
        ]}
      />
      <ParallaxHero src={HERO} alt="Things to do in Almaty ~ sunset over the city from Kok Tobe mountain" />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-4 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Guide
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Almaty, Kazakhstan
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              Updated July 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Things to Do in Almaty: Kazakhstan&apos;s Mountain City (Prices + 4-Day Itinerary)
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri &amp; Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">First-hand guide from our Kazakhstan trip</div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Almaty surprised us more than any city in Central Asia. It&apos;s a leafy, easygoing city of 2 million people
              parked directly under 4,000-metre peaks ~ which means you can eat plov at a bazaar in the morning and stand
              on an alpine pass by lunchtime. And almost nothing here costs real money.
            </p>

            <p>
              This guide covers the ten things actually worth doing in and around Almaty, what each one costs in 2026, how
              to string them into four days, and the mistakes we made so you don&apos;t have to. If you just want the raw
              numbers, we keep a full{" "}
              <Link href="/resources/attraction-prices/almaty">Almaty attraction price list</Link> updated separately.
            </p>

            <h2>Is Almaty Worth Visiting?</h2>
            <p>
              Short answer: yes, and go soon. Kazakhstan&apos;s biggest city has the mountains of Switzerland at the prices
              of Southeast Asia, direct flights from more and more of Asia, and a food culture (Korean-Uyghur-Russian-Kazakh)
              that nobody talks about. Tourism is climbing fast but it still feels undiscovered ~ we heard almost no English
              on the trails.
            </p>

            <h2>The 10 Best Things to Do in Almaty (With 2026 Prices)</h2>

            <h3>1. Skate or walk at Medeu, the world&apos;s highest big rink</h3>
            <p>
              Medeu sits at 1,691 m in a mountain gorge 30 minutes from the centre. In winter, skating on the Olympic-size
              outdoor ice costs <strong>KZT 1,800–3,000 (~$4–6)</strong> plus about KZT 1,000 for skate rental. In summer,
              walking the rink perimeter and climbing the anti-mudflow dam stairs for the valley view is free.
            </p>

            <h3>2. Ride the gondola to Shymbulak ski resort</h3>
            <p>
              From Medeu, the gondola glides up to Shymbulak at 2,200 m. A round trip costs about{" "}
              <strong>KZT 8,000–10,000 (~$15–19)</strong> ~ ride it even in summer for the Talgar Pass panorama. Winter ski
              passes start around KZT 18,000 per day, which is absurd value for slopes this good.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Medeu_Skating_Rink_in_Almaty_Kazakhstan.jpg/1280px-Medeu_Skating_Rink_in_Almaty_Kazakhstan.jpg"
                alt="Medeu skating rink in the mountains above Almaty, Kazakhstan"
                fill
                className="object-cover"
              />
            </div>
            <Credit
              author="Ninaras"
              license="CC BY 4.0"
              href="https://commons.wikimedia.org/wiki/File:Medeu_Skating_Rink_in_Almaty_Kazakhstan.jpg"
            />

            <h3>3. Watch sunset from Kok Tobe hill</h3>
            <p>
              The cable car from Dostyk Avenue costs about <strong>KZT 6,000–8,000 (~$12–15)</strong> round trip and drops
              you at a hilltop park with the best golden-hour view of the city grid dissolving into the steppe. Go an hour
              before sunset; the park itself is free once you&apos;re up.
            </p>

            <h3>4. Zenkov Cathedral &amp; Panfilov Park (free)</h3>
            <p>
              A candy-coloured Russian Orthodox cathedral built entirely of wood ~ by legend without a single nail ~ and one
              of the tallest wooden buildings on earth. It sits inside Panfilov Park beside a suitably enormous Soviet war
              memorial. Both are free; the interior gleams after its recent restoration.
            </p>

            <h3>5. Graze your way through the Green Bazaar (free entry)</h3>
            <p>
              Almaty&apos;s central market is the best free attraction in the city: pyramids of dried apricots, horse-milk
              kumis, Korean salads, and vendors who will feed you samples until you surrender. Bring small tenge notes and
              haggle gently.
            </p>

            <h3>6. Day trip to Big Almaty Lake</h3>
            <p>
              The turquoise reservoir at 2,511 m is the photo that sells Kazakhstan. Entry is a small eco-fee of{" "}
              <strong>KZT 200–1,000 (~$2)</strong>; the real cost is transport ~ a taxi or shared tour runs{" "}
              <strong>$30–50</strong>. Two warnings from experience: bring your passport (it&apos;s a border zone), and
              don&apos;t plan to swim ~ it&apos;s the city&apos;s drinking water.
            </p>

            <h3>7. Day trip to Charyn Canyon</h3>
            <p>
              Three hours east of the city, the Valley of Castles is Kazakhstan&apos;s Grand Canyon in miniature. Park entry
              is <strong>KZT 730–1,500 (~$1.50–3)</strong> and shared day tours cost <strong>$30–50</strong>. The rim-to-river
              walk is an easy 2–3 km; sunset light on the red rock is worth planning around.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Charyn_Canyon%2C_Kazakhstan_02.jpg/1280px-Charyn_Canyon%2C_Kazakhstan_02.jpg"
                alt="Charyn Canyon Valley of Castles day trip from Almaty"
                fill
                className="object-cover"
              />
            </div>
            <Credit
              author="Bgag"
              license="CC0"
              href="https://commons.wikimedia.org/wiki/File:Charyn_Canyon,_Kazakhstan_02.jpg"
            />

            <h3>8. Sweat it out at the Arasan Baths</h3>
            <p>
              A brutalist Soviet bathhouse palace with Russian, Finnish, and Turkish sections. Two to three hours costs
              roughly <strong>KZT 6,000–12,000 (~$12–23)</strong> depending on day and section. Go like a local: alternate
              the hot rooms with the cold plunge and finish with tea.
            </p>

            <h3>9. Central State Museum (KZT 500–1,000)</h3>
            <p>
              The quickest crash course in Kazakh history for about a dollar or two ~ Saka gold, nomad yurts, and a replica
              of the famous Golden Man armour.
            </p>

            <h3>10. Ride the world&apos;s prettiest metro (KZT 120)</h3>
            <p>
              Almaty&apos;s small metro is a gallery of chandeliers and mosaic ~ Moscow-style grandeur without the crowds.
              One ride costs about KZT 120 (~$0.25). Get off at Auezov Theatre and Baikonur just to look.
            </p>

            <h2>How Much Does Almaty Cost? (Quick Budget Table)</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-muted/60 text-left">
                    <th className="p-3 font-semibold">Expense</th>
                    <th className="p-3 font-semibold">2026 price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border"><td className="p-3">All city entry fees (rink, cable cars, museum, baths)</td><td className="p-3 font-semibold">$45–60 total</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Big Almaty Lake day trip (shared)</td><td className="p-3 font-semibold">$30–50</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Charyn Canyon day trip (shared)</td><td className="p-3 font-semibold">$30–50</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Food per day (bazaar + restaurants)</td><td className="p-3 font-semibold">$10–25</td></tr>
                  <tr className="border-t border-border"><td className="p-3">Good double room per night</td><td className="p-3 font-semibold">$30–60</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The full itemised list ~ every spot, in tenge and dollars, with Google Maps links ~ lives on our{" "}
              <Link href="/resources/attraction-prices/almaty">Almaty attraction prices page</Link>.
            </p>

            <CostCallout countryName="Kazakhstan" />

            <h2>A 4-Day Almaty Itinerary That Actually Works</h2>
            <p><strong>Day 1 ~ the city:</strong> Green Bazaar in the morning, Panfilov Park and Zenkov Cathedral, Arasan Baths in the afternoon, Kok Tobe cable car for sunset.</p>
            <p><strong>Day 2 ~ the mountain loop:</strong> Bus 12 to Medeu, walk the dam, gondola to Shymbulak, lunch at altitude, back down for plov in the city.</p>
            <p><strong>Day 3 ~ Big Almaty Lake:</strong> half-day trip (passport!), Central State Museum or the metro tour in the late afternoon.</p>
            <p><strong>Day 4 ~ Charyn Canyon:</strong> full-day tour east; most include the Valley of Castles walk and lunch.</p>

            <h2>Where to Stay and How to Get Around</h2>
            <p>
              Fly into <strong>Almaty International Airport (ALA)</strong> and base yourself around the Zhibek Zholy /
              Panfilov Park area ~ walkable, leafy, and near the bazaar. Use the Yandex Go app for taxis (most rides in the
              centre cost $1–3), and bus 12 runs straight to Medeu. Our{" "}
              <Link href="/resources/attraction-prices/almaty">Almaty price guide</Link> lists the gateway details, and the{" "}
              <Link href="/resources/destination-costs">destination costs tool</Link> covers daily budgets.
            </p>

            <h2>Planning the Rest of Central Asia?</h2>
            <p>
              Almaty pairs perfectly with the Silk Road cities next door ~ read our{" "}
              <Link href="/blog/uzbekistan-travel-guide">Uzbekistan travel guide</Link> and the{" "}
              <Link href="/resources/attraction-prices/samarkand">Samarkand price list</Link>, or see every city we&apos;ve
              priced on the <Link href="/resources/attraction-prices">attraction prices index</Link>.
            </p>
          </div>
        </div>

        <FAQSection
          faqs={FAQS}
          title="Almaty Travel FAQ"
          description="The questions we get asked most about visiting Almaty, answered from experience."
        />
      </div>
    </article>
  );
}

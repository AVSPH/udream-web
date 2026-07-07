import Link from "next/link";
import { Calendar, Globe, ExternalLink, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import Image from "next/image";

export const metadata = {
  title: "How Much Does It Cost to Travel Japan for 10 Days? Real Budget Breakdown | Udream",
  description: "A real budget breakdown for a 10-day trip to Japan. Costs for accommodation, food, transport, and activities.",
  keywords: ["japan travel budget 10 days", "cost of japan trip", "how much does japan cost"],
};

export default function JapanTravelBudgetPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does It Cost to Travel Japan for 10 Days? Real Budget Breakdown",
    description: "A real budget breakdown for a 10-day trip to Japan. Costs for accommodation, food, transport, and activities.",
    author: {
      "@type": "Person",
      name: "Meri & Man",
      url: "https://udreamtravels.com/our-story",
    },
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
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
          { name: "Japan Travel Budget", item: "https://udreamtravels.com/blog/japan-travel-budget-10-days" },
        ]}
      />
      <ParallaxHero
        src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"
        alt="Japan Travel Budget"
      />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Guide
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Japan
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            How Much Does It Cost to Travel Japan for 10 Days? Real Budget Breakdown
          </h1>

          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border/50">
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">
                By <Link href="/our-story" className="text-primary hover:underline transition-colors">Meri & Man</Link>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </div>
            </div>
          </div>

          <div className="blog-content">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 border-primary pl-5">
              Japan has a reputation for being expensive. It's not entirely wrong, but it's not the whole story either. A backpacker sleeping in hostels and eating convenience store onigiri can do Japan comfortably for under $70 a day. A couple staying in mid-range hotels and dining at sit-down restaurants will spend closer to $200–250 combined. And if you're doing ryokans, Michelin-starred kaiseki, and business class Shinkansen, the ceiling is genuinely unlimited.
            </p>

            <p>
              The real cost of a Japan trip comes down to three things: where you sleep, what you eat, and how far you travel. Get those three variables right for your style, and the budget falls into place.
            </p>

            <p>
              This breakdown uses real per-day figures across three budget tiers, a sample 10-day itinerary with running totals, and city-by-city cost comparisons. See Udream's full destination cost data at <Link href="/resources/destination-costs">udream.com/resources/destination-costs</Link> and our Japan travel guide at <Link href="/blog/japan">udream.com/blog/japan</Link> for deeper planning.
            </p>

            <h2>The Short Answer: What Does a Japan Trip Cost?</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Budget Tier</th>
                    <th className="border border-border p-3 text-left">Daily Spend (per person)</th>
                    <th className="border border-border p-3 text-left">10-Day Total (per person)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Budget</td>
                    <td className="border border-border p-3">$55–75</td>
                    <td className="border border-border p-3">$550–750</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Mid-Range</td>
                    <td className="border border-border p-3">$110–130</td>
                    <td className="border border-border p-3">$1,100–1,300</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Luxury</td>
                    <td className="border border-border p-3">$250–400+</td>
                    <td className="border border-border p-3">$2,500–4,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>These figures cover accommodation, meals, local transport, and paid activities. International flights and the Japan Rail Pass are covered separately below.</p>

            <h2>Cost Breakdown by Category</h2>

            <h3>Accommodation</h3>
            <p>This is the biggest lever in your budget.</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Tier</th>
                    <th className="border border-border p-3 text-left">What You Get</th>
                    <th className="border border-border p-3 text-left">Nightly Cost (per room)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Budget</td>
                    <td className="border border-border p-3">Capsule hotel, hostel dorm, guesthouse</td>
                    <td className="border border-border p-3">$25–45</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Mid-Range</td>
                    <td className="border border-border p-3">3-star business hotel, clean private room</td>
                    <td className="border border-border p-3">$80–130</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Luxury</td>
                    <td className="border border-border p-3">4–5 star hotel, boutique ryokan</td>
                    <td className="border border-border p-3">$200–600+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>A mid-range hotel in Tokyo (Shinjuku or Shibuya area) typically runs $90–120 per room, per night. The same quality in Kyoto or Osaka is 10–20% cheaper. Ryokans (traditional inns with dinner included) start around $150 per person and can easily reach $400+.</p>

            <h3>Food</h3>
            <p>Japan is one of the world's great food destinations, and you don't need to spend much to eat brilliantly.</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Meal Type</th>
                    <th className="border border-border p-3 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Convenience store meal (7-Eleven, FamilyMart)</td>
                    <td className="border border-border p-3">$3–6</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Ramen or soba restaurant</td>
                    <td className="border border-border p-3">$8–14</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Sushi conveyor belt (kaitenzushi)</td>
                    <td className="border border-border p-3">$15–25</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Sit-down izakaya dinner with drinks</td>
                    <td className="border border-border p-3">$30–50</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Omakase or kaiseki dinner</td>
                    <td className="border border-border p-3">$80–300+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>A realistic daily food budget at mid-range: $40–55 per person. That's a convenience store breakfast, a ramen or curry lunch, and a proper sit-down dinner. Budget travelers eating primarily from convenience stores and standing noodle bars can cut this to $20–30 per day.</p>

            <h3>Transport (Within Japan)</h3>
            <p>The Japan Rail Pass is the most discussed transport cost, but it's worth doing the math before buying.</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Option</th>
                    <th className="border border-border p-3 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">7-day JR Pass</td>
                    <td className="border border-border p-3">~$290 USD</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">14-day JR Pass</td>
                    <td className="border border-border p-3">~$465 USD</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Tokyo–Kyoto Shinkansen (one way)</td>
                    <td className="border border-border p-3">~$140 USD</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">IC Card top-ups (local metro, daily)</td>
                    <td className="border border-border p-3">$5–10</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Day trip (e.g., Nara from Osaka)</td>
                    <td className="border border-border p-3">$10–20 round trip</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote>
              <p><strong>ℹ️ Tip:</strong> For a 10-day trip covering Tokyo, Kyoto, Osaka, and one or two day trips, the 7-day JR Pass usually pays for itself if you're making two Shinkansen journeys. Run your specific route through a JR Pass calculator before committing.</p>
            </blockquote>

            <h3>Activities & Entrance Fees</h3>
            <p>Most temples, shrines, and parks in Japan are free or very cheap. Paid attractions are the exception, not the rule.</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Activity</th>
                    <th className="border border-border p-3 text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Most shrines and outdoor temples</td>
                    <td className="border border-border p-3">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Major temples (Fushimi Inari, Senso-ji)</td>
                    <td className="border border-border p-3">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Hiroshima Peace Memorial Museum</td>
                    <td className="border border-border p-3">~$3</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">teamLab Planets, Tokyo</td>
                    <td className="border border-border p-3">~$30</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Universal Studios Japan</td>
                    <td className="border border-border p-3">~$80–100</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Nara deer park</td>
                    <td className="border border-border p-3">Free</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Tea ceremony experience</td>
                    <td className="border border-border p-3">$20–40</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>Budget $15–25 per day for activities at mid-range, and you'll have plenty of room for paid museums and experiences.</p>

            <h2>Sample 10-Day Itinerary with Running Cost Total</h2>
            <p>Solo traveler, mid-range budget, classic Tokyo–Kyoto–Osaka route.</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Day</th>
                    <th className="border border-border p-3 text-left">Location</th>
                    <th className="border border-border p-3 text-left">Key Costs</th>
                    <th className="border border-border p-3 text-left">Daily Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">1</td>
                    <td className="border border-border p-3">Arrive Tokyo, Shinjuku</td>
                    <td className="border border-border p-3">Hotel $110, dinner $30, transport $10</td>
                    <td className="border border-border p-3">$150</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">2</td>
                    <td className="border border-border p-3">Tokyo (Shibuya, Harajuku)</td>
                    <td className="border border-border p-3">Hotel $110, food $50, teamLab $30</td>
                    <td className="border border-border p-3">$190</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">3</td>
                    <td className="border border-border p-3">Tokyo (Asakusa, Ueno)</td>
                    <td className="border border-border p-3">Hotel $110, food $45, Ueno Museum $10</td>
                    <td className="border border-border p-3">$165</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">4</td>
                    <td className="border border-border p-3">Day trip: Nikko or Kamakura</td>
                    <td className="border border-border p-3">Hotel $110, food $40, transport $25</td>
                    <td className="border border-border p-3">$175</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">5</td>
                    <td className="border border-border p-3">Shinkansen to Kyoto</td>
                    <td className="border border-border p-3">Hotel $100, food $45, JR Pass covers Shinkansen</td>
                    <td className="border border-border p-3">$145</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">6</td>
                    <td className="border border-border p-3">Kyoto (Arashiyama, Fushimi Inari)</td>
                    <td className="border border-border p-3">Hotel $100, food $50, activity $20</td>
                    <td className="border border-border p-3">$170</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">7</td>
                    <td className="border border-border p-3">Kyoto (Nishiki Market, Gion)</td>
                    <td className="border border-border p-3">Hotel $100, food $55, tea ceremony $35</td>
                    <td className="border border-border p-3">$190</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">8</td>
                    <td className="border border-border p-3">Day trip: Nara</td>
                    <td className="border border-border p-3">Hotel $100, food $45, transport $15</td>
                    <td className="border border-border p-3">$160</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">9</td>
                    <td className="border border-border p-3">Osaka (Dotonbori, street food day)</td>
                    <td className="border border-border p-3">Hotel $90, food $60, activity $15</td>
                    <td className="border border-border p-3">$165</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">10</td>
                    <td className="border border-border p-3">Osaka, depart</td>
                    <td className="border border-border p-3">Hotel $90, food $40, airport transfer $15</td>
                    <td className="border border-border p-3">$145</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <blockquote>
              <p>💰 <strong>Total:</strong> 10-day subtotal (accommodation, food, local transport, activities): ~$1,655</p>
              <p>Add the 7-day JR Pass (~$290). All-in mid-range estimate for 10 days: <strong>$1,900–2,200</strong> per person (excluding international flights).</p>
            </blockquote>

            <h2>Tokyo vs Osaka vs Kyoto: Cost Comparison</h2>
            <p>Mid-range travelers can expect slightly different daily costs depending on which city they're in:</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">City</th>
                    <th className="border border-border p-3 text-left">Daily Cost Estimate (mid-range, per person)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Tokyo</td>
                    <td className="border border-border p-3">$110–130</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Kyoto</td>
                    <td className="border border-border p-3">$100–120</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Osaka</td>
                    <td className="border border-border p-3">$90–110</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Tokyo</h3>
            <p>The most expensive of the three. Hotels in central neighborhoods (Shinjuku, Shibuya, Ginza) carry a premium, and the sheer density of paid attractions adds up. That said, free experiences (parks, markets, neighborhoods) are everywhere.</p>

            <h3>Kyoto</h3>
            <p>Slightly cheaper for accommodation and has an enormous number of free temples and walking routes. Where costs spike: some high-demand ryokans and organised experience activities (tea ceremony, kimono rental, cooking classes).</p>

            <h3>Osaka</h3>
            <p>Consistently the cheapest of the three. Hotels are less expensive, and the city has a culture of eating well for very little. A full night of street food in Dotonbori can cost $15–25 and feel like a feast.</p>

            <h2>8 Money-Saving Tips Specific to Japan</h2>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li><strong>Get an IC card on day one.</strong> Suica (Tokyo) or ICOCA (Osaka/Kyoto) works on virtually all local transit. No fumbling with tickets, and the taps are cheaper than single-fare purchases.</li>
              <li><strong>Eat at convenience stores.</strong> Japanese convenience store food is genuinely good. Onigiri, hot soba, sandwiches, and prepared meals are fresh and cost $3–7. Breakfast and lunch from a combini is a legitimate strategy, not a fallback.</li>
              <li><strong>Visit shrines and temples early.</strong> Fushimi Inari and Senso-ji are free, always. Arriving at 6:30–7am means experiencing them without the crowds.</li>
              <li><strong>Standing noodle bars and ramen counters.</strong> Lunch at a standing soba or ramen shop costs $6–10 and is often the best meal of the day. Look for the plastic food models in the window or the vending machine ordering systems.</li>
              <li><strong>Don't buy bottled water constantly.</strong> Tap water in Japan is safe and excellent. Carry a refillable bottle. Convenience store vending machines cost around $1.20 when you do need a cold drink.</li>
              <li><strong>Run the JR Pass math before buying.</strong> The pass is worth it for certain routes but not all. If your itinerary is concentrated in one region, calculate point-to-point fares first.</li>
              <li><strong>Book accommodation early in Kyoto.</strong> Kyoto has a real shortage of mid-range accommodation during peak season (cherry blossom in late March/April, autumn leaves in November). Book 3–4 months out or expect to pay a significant premium.</li>
              <li><strong>Look for 100-yen shops and supermarket discounts.</strong> Daiso and similar chains are everywhere. Supermarkets mark down prepared food significantly after 7–8pm.</li>
            </ol>

            <h2>Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="faq-item group">
                <summary>Is Japan expensive to travel?</summary>
                <p>It depends heavily on travel style. Budget travelers can manage $55–75 per day. Mid-range travelers, which covers most visitors staying in private hotel rooms and eating a mix of restaurants and convenience stores, should plan on $110–130 per day. The popular perception of Japan as very expensive often comes from comparing luxury hotel prices or exchange rate swings. At current rates, Japan is excellent value compared to Western Europe.</p>
              </details>

              <details className="faq-item group">
                <summary>How much spending money do I need for 10 days in Japan?</summary>
                <p>Beyond accommodation (budget separately), allow $500–700 for food and activities at a comfortable mid-range level over 10 days. Add $50–100 for local transport (IC card top-ups) and any shopping. That works out to around $70 per day for meals, paid attractions, and occasional splurges without stress.</p>
              </details>

              <details className="faq-item group">
                <summary>Is cash still necessary in Japan?</summary>
                <p>Yes, more than most countries. Japan is still significantly cash-based in many restaurants, temples, markets, and smaller establishments. Major train stations and convenience stores have 7-Eleven ATMs that reliably accept foreign cards. Arrive with some Japanese yen and keep $100–200 equivalent in cash at all times. Card acceptance is growing, especially in cities, but don't rely on it exclusively.</p>
              </details>

              <details className="faq-item group">
                <summary>What's the cheapest time to visit Japan?</summary>
                <p>Late January through February (excluding the New Year period) and June through mid-July (rainy season) are the cheapest months. Cherry blossom season (late March to early April) and autumn leaf season (November) are peak, with accommodation prices 20–40% higher in popular destinations like Kyoto.</p>
              </details>

              <details className="faq-item group">
                <summary>Does a Japan Rail Pass save money for 10 days?</summary>
                <p>For a 10-day Tokyo–Kyoto–Osaka itinerary, a 7-day JR Pass (~$290) usually pays for itself if you make two Shinkansen round trips or one round trip plus several regional train journeys. If your itinerary is concentrated in one region, calculate the point-to-point fares first.</p>
              </details>

              <details className="faq-item group">
                <summary>Is Japan cheaper than expected post-COVID?</summary>
                <p>For many international visitors, yes. The yen weakened significantly against the US dollar and Euro from 2022 onward, making Japan notably more affordable in foreign currency terms than it was a decade ago. This has also driven a tourism surge, which has pushed some Kyoto accommodation prices back up. The bottom line: Japan is cheaper than many Western travelers expect, especially for food, transport, and local experiences.</p>
              </details>
            </div>

            <h2>Plan Your Full Japan Budget</h2>
            <p>Ready to put real numbers to your trip? Udream's destination cost tool at <Link href="/resources/destination-costs">udream.com/resources/destination-costs</Link> lets you build a per-day budget across accommodation, food, transport, and activities at multiple tiers. For a full breakdown of where to go, what to see, and how to build the route, head to our Japan travel guide at <Link href="/blog/japan">udream.com/blog/japan</Link>. Visa requirements vary by nationality. Once our Japan visa guide is live at <Link href="/resources/visa-guide/japan">udream.com/resources/visa-guide/japan</Link>, you'll find everything you need there.</p>

            <p className="text-sm italic text-muted-foreground mt-12">
              Last updated: June 2026. Costs shown in USD. Exchange rates fluctuate; always verify current rates before traveling.
            </p>

            <style>{`
              .blog-content {
                line-height: 1.8;
                font-size: 1.125rem;
                color: inherit;
              }
              .blog-content p {
                margin-bottom: 1.5rem;
                line-height: 1.8;
              }
              .blog-content h1 {
                font-size: 2.25rem;
                font-weight: bold;
                margin-top: 2.5rem;
                margin-bottom: 1.25rem;
                color: hsl(var(--primary));
              }
              .blog-content h2 {
                font-size: 1.875rem;
                font-weight: bold;
                margin-top: 2.5rem;
                margin-bottom: 1.25rem;
                color: hsl(var(--primary));
              }
              .blog-content h3 {
                font-size: 1.5rem;
                font-weight: bold;
                margin-top: 2rem;
                margin-bottom: 1rem;
                color: hsl(var(--primary));
              }
              .blog-content ul {
                margin-bottom: 1.5rem;
                padding-left: 2rem;
                list-style-type: disc;
                list-style-position: outside;
              }
              .blog-content li {
                margin-bottom: 0.75rem;
                margin-left: 0.5rem;
                line-height: 1.8;
              }
              .blog-content a {
                color: hsl(var(--primary));
                text-decoration: underline;
                transition: opacity 0.2s;
              }
              .blog-content a:hover {
                opacity: 0.75;
              }
              .blog-content strong {
                font-weight: 600;
                color: hsl(var(--foreground));
              }
              .blog-content blockquote {
                border-left: 4px solid hsl(var(--primary));
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: hsl(var(--muted-foreground));
                background-color: hsl(var(--muted)/0.3);
                border-radius: 0.5rem;
                padding: 1.5rem;
                padding-left: 2rem;
              }
              .blog-content hr {
                border: none;
                border-top: 1px solid hsl(var(--border));
                margin: 2rem 0;
              }
              .faq-item {
                border: 1px solid hsl(var(--border));
                border-radius: 0.75rem;
                padding: 1.25rem;
                background-color: hsl(var(--card) / 0.3);
                box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05);
                transition: all 0.2s ease-in-out;
              }
              .faq-item:hover {
                background-color: hsl(var(--card));
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
                border-color: hsl(var(--primary) / 0.3);
              }
              .faq-item[open] {
                background-color: hsl(var(--card));
                border-color: hsl(var(--primary) / 0.5);
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
              }
              .faq-item summary {
                font-size: 1.25rem;
                font-weight: 600;
                color: hsl(var(--foreground));
                cursor: pointer;
                list-style: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .faq-item summary::-webkit-details-marker {
                display: none;
              }
              .faq-item summary::after {
                content: "+";
                font-size: 1.75rem;
                font-weight: 400;
                color: hsl(var(--primary));
                transition: transform 0.2s ease-in-out;
              }
              .faq-item[open] summary::after {
                transform: rotate(45deg);
              }
              .faq-item p {
                margin-top: 1rem;
                margin-bottom: 0;
                color: hsl(var(--muted-foreground));
                line-height: 1.8;
              }
            `}</style>
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-border bg-muted/30 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold">See it on the Map</p>
                <p className="text-sm text-muted-foreground">
                  View all our destinations across the globe.
                </p>
              </div>
            </div>
            <Link
              href="/map"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Open Map <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <CostCallout countryName="Japan" />

        </div>
      </div>
    </article>
  );
}

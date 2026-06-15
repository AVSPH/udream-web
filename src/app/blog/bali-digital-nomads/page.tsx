import Link from "next/link";
import { Calendar, Globe, ExternalLink, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { ParallaxHero } from "@/components/blog/ParallaxHero";

export const metadata = {
  title: "Bali for Digital Nomads: Where to Stay, Work, and Live on a Budget | Udream",
  description: "Bali digital nomad guide 2026. Real costs, tips, and first-hand advice from Meri & Man on living and working in Bali.",
  keywords: ["bali digital nomad", "bali remote work", "bali for digital nomads 2026"],
};

export default function BaliDigitalNomadPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Bali for Digital Nomads: Where to Stay, Work, and Live on a Budget",
    description: "Bali digital nomad guide 2026. Real costs, tips, and first-hand advice from Meri & Man on living and working in Bali.",
    author: {
      "@type": "Person",
      name: "Meri & Man",
      url: "https://udreamtravels.com/our-story",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
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
          { name: "Bali for Digital Nomads", item: "https://udreamtravels.com/blog/bali-digital-nomads" },
        ]}
      />
      <ParallaxHero
        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
        alt="Bali Digital Nomad Guide"
      />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Asia
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Indonesia
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Bali for Digital Nomads: Where to Stay, Work, and Live on a Budget
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
              Every nomad has an opinion on Bali. The Bali-is-overcrowded camp and the Bali-is-still-incredible camp have been arguing since approximately 2018 and neither of them is entirely wrong. What's true is that Bali became the default digital nomad destination for a reason, that reason is still valid, and the experience you get depends enormously on which part of the island you base yourself in and how much you're willing to move away from the Instagram version of it.
            </p>

            <p>
              We've spent significant time in Bali over the past two years. We've stayed in Canggu when it was at its most chaotic, in Ubud when we needed to actually focus, and in quieter corners when we needed both. This is the version of the Bali nomad guide we wish we'd had before the first trip.
            </p>

            <p>
              For a broader look at Indonesia as a destination, see our <Link href="/blog/indonesia">Indonesia travel guide</Link>. For daily cost data across budget tiers, the <Link href="/resources/destination-costs">Udream destination costs resource</Link> has the full breakdown.
            </p>

            <hr />

            <h2>Why Bali Is Still the Default (and Whether It Deserves to Be)</h2>

            <p>
              Bali's dominance as a nomad destination isn't an accident. The combination of good infrastructure, a huge existing nomad community, excellent food, genuinely beautiful natural environment, a culture that's hospitable to long-stay visitors, and a cost-of-living that's still well below Western countries adds up to something that's hard to replicate elsewhere.
            </p>

            <p>
              What's changed since 2019: the price floor has risen. The cheapest accommodation tiers have disappeared in the popular neighborhoods. Co-working spaces have doubled in price. The density of tourists in Canggu during peak season is genuinely overwhelming. And the Bali tourist tax (USD 10 per international arrival, introduced in February 2024) signals that the era of Bali as an almost-free destination is definitively over.
            </p>

            <p>
              What hasn't changed: you can still rent a clean private villa with a pool in a quiet part of the island for less than USD 800/month. The food is still extraordinary. The surf is still there. The temples are still free. The community of interesting people working on interesting things is larger than it's ever been.
            </p>

            <p>
              Bali deserves to be a serious nomad base. It just needs to be approached more carefully than it did five years ago.
            </p>

            <hr />

            <h2>Neighborhood Breakdown: Canggu vs Ubud vs Seminyak</h2>

            <p>
              The neighborhood you choose is the single biggest factor in your Bali experience. These three are where most nomads end up, and they're genuinely different places.
            </p>

            <h3>Canggu</h3>

            <p><strong>The vibe:</strong> Bali's nomad epicenter and its most controversial neighborhood. Heavy surf culture, wall-to-wall co-working cafes, more Australians than you'll find in most Australian cities, excellent restaurants, constant noise during peak season. It's also the most connected, the most social, and the most professionally networked part of the island.</p>

            <p><strong>Best for:</strong> First-time nomads who want to meet people quickly, surfers, people who need to be on calls during European or Australian business hours (the timezone alignment is convenient), anyone who thrives on density and stimulation.</p>

            <p><strong>Worst for:</strong> Focus, budget travelers, people who want to feel like they're in Bali rather than an international nomad bubble, anyone easily overwhelmed by traffic and noise.</p>

            <p><strong>Cost in 2026:</strong></p>
            <ul>
              <li>Monthly villa rental: USD 800–1,800 (anything under USD 1,000 is now genuinely hard to find in the Canggu core)</li>
              <li>Co-working: USD 150–350/month</li>
              <li>Daily meal average at local warungs nearby: USD 3–7</li>
              <li>Daily meal average at Canggu tourist restaurants: USD 10–20+</li>
            </ul>

            <p><strong>Our honest take:</strong> Canggu is the best place to arrive and the worst place to stay too long. Come for two to four weeks to connect, take the opportunities that come from being where the community is, then move somewhere cheaper and quieter to actually work.</p>

            <h3>Ubud</h3>

            <p><strong>The vibe:</strong> The cultural heart of Bali: terraced rice paddies, traditional arts and dance, a slower pace, a different crowd. Ubud attracts a slightly older, more wellness-oriented nomad than Canggu. The co-working infrastructure has developed significantly over the past three years and is now genuinely good.</p>

            <p><strong>Best for:</strong> Focus work, longer stays, people who care about the cultural side of Bali, yoga practitioners, anyone burned out by Canggu's social intensity, people on a tighter budget.</p>

            <p><strong>Worst for:</strong> Nightlife, surfing, anyone who needs to feel plugged into a professional community in real time.</p>

            <p><strong>Cost in 2026:</strong></p>
            <ul>
              <li>Monthly villa rental: USD 400–900 (you can still get genuinely beautiful accommodation here at the lower end of this range)</li>
              <li>Co-working: USD 80–200/month</li>
              <li>Daily meal average at local warungs: USD 2–5</li>
              <li>Daily meal average at Ubud tourist restaurants: USD 8–15</li>
            </ul>

            <p><strong>Our honest take:</strong> Ubud is where we get the most work done. The combination of natural beauty, lower density, and genuine cultural richness makes it a much more sustainable long-term base than Canggu. The tradeoff is that it's 45 minutes from the surf and the social energy is quieter.</p>

            <h3>Seminyak</h3>

            <p><strong>The vibe:</strong> Bali's luxury end. Boutique hotels, high-end restaurants, beach clubs, fewer backpackers and more couples and design-industry types. Seminyak has a co-working scene but it's smaller than Canggu.</p>

            <p><strong>Best for:</strong> People who want the Bali lifestyle at a higher tier, couples, anyone whose work requires presenting a polished image (there are better cafe meeting options here), digital nomads who are also into nightlife and dining.</p>

            <p><strong>Worst for:</strong> Budget travelers, anyone prioritizing work infrastructure over lifestyle, people who want to feel immersed in Balinese culture.</p>

            <p><strong>Cost in 2026:</strong></p>
            <ul>
              <li>Monthly villa rental: USD 1,200–3,000+</li>
              <li>Co-working: USD 150–250/month (fewer options)</li>
              <li>Daily meal average: USD 15–30 (primarily tourist-priced restaurants)</li>
            </ul>

            <p><strong>Our honest take:</strong> Seminyak is expensive for what it is. If you're going to spend USD 1,500+ on accommodation, there are better value options in Canggu or Ubud. Seminyak makes more sense as a week-long stay than a month-long base.</p>

            <hr />

            <h2>Co-Working Spaces Worth Knowing</h2>

            <p>
              Bali has more co-working spaces than almost any other nomad destination in the world. The ones below have consistent WiFi, proper desk setups, and communities worth being part of.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Space</th>
                    <th className="border border-border p-3 text-left">Neighborhood</th>
                    <th className="border border-border p-3 text-left">Monthly rate</th>
                    <th className="border border-border p-3 text-left">Day rate</th>
                    <th className="border border-border p-3 text-left">What it's known for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Dojo Bali</td>
                    <td className="border border-border p-3">Canggu</td>
                    <td className="border border-border p-3">USD 180–220</td>
                    <td className="border border-border p-3">USD 20</td>
                    <td className="border border-border p-3">The OG Canggu co-work. Reliable, social, good events program</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Outpost</td>
                    <td className="border border-border p-3">Canggu & Ubud</td>
                    <td className="border border-border p-3">USD 150–250</td>
                    <td className="border border-border p-3">USD 18</td>
                    <td className="border border-border p-3">Two locations, solid community, popular with longer stays</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Hubud</td>
                    <td className="border border-border p-3">Ubud</td>
                    <td className="border border-border p-3">USD 195/month</td>
                    <td className="border border-border p-3">USD 22</td>
                    <td className="border border-border p-3">Iconic bamboo structure, strong community, excellent for focus</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Tribal</td>
                    <td className="border border-border p-3">Canggu</td>
                    <td className="border border-border p-3">USD 200–280</td>
                    <td className="border border-border p-3">USD 25</td>
                    <td className="border border-border p-3">Higher-end fit-out, good for client calls, fast fiber</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Serenity</td>
                    <td className="border border-border p-3">Ubud</td>
                    <td className="border border-border p-3">USD 90–130</td>
                    <td className="border border-border p-3">USD 12</td>
                    <td className="border border-border p-3">Best value in Ubud, quiet, good garden space</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">DESA</td>
                    <td className="border border-border p-3">Canggu</td>
                    <td className="border border-border p-3">USD 160–200</td>
                    <td className="border border-border p-3">USD 18</td>
                    <td className="border border-border p-3">Newer, less crowded than Dojo, rooftop area</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>WiFi reality check:</strong> Bali's internet infrastructure is good in the main co-working spaces and unreliable everywhere else. Do not plan to work from cafes without testing the connection first. Always have a local SIM with data as a backup. Telkomsel is the most reliable provider island-wide (SIM card and 30GB data package: approximately IDR 120,000, around USD 7–8).</p>

            <hr />

            <h2>Bali Cost of Living for Nomads (2026)</h2>

            <p>Here's what a realistic monthly budget looks like across three levels:</p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Category</th>
                    <th className="border border-border p-3 text-left">Budget</th>
                    <th className="border border-border p-3 text-left">Mid-range</th>
                    <th className="border border-border p-3 text-left">Comfortable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Accommodation (monthly)</td>
                    <td className="border border-border p-3">USD 350–600 (shared or outer area)</td>
                    <td className="border border-border p-3">USD 700–1,200 (private villa, Ubud/Canggu)</td>
                    <td className="border border-border p-3">USD 1,500–3,000+ (premium villa)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Co-working</td>
                    <td className="border border-border p-3">USD 80–130</td>
                    <td className="border border-border p-3">USD 150–220</td>
                    <td className="border border-border p-3">USD 250–350</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Food</td>
                    <td className="border border-border p-3">USD 250–400</td>
                    <td className="border border-border p-3">USD 450–700</td>
                    <td className="border border-border p-3">USD 800–1,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Transport (scooter rental + fuel)</td>
                    <td className="border border-border p-3">USD 80–100</td>
                    <td className="border border-border p-3">USD 80–100</td>
                    <td className="border border-border p-3">USD 80–150 (car rental)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">SIM card + data</td>
                    <td className="border border-border p-3">USD 8–15</td>
                    <td className="border border-border p-3">USD 8–15</td>
                    <td className="border border-border p-3">USD 8–15</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Activities / social</td>
                    <td className="border border-border p-3">USD 50–100</td>
                    <td className="border border-border p-3">USD 150–300</td>
                    <td className="border border-border p-3">USD 300–600</td>
                  </tr>
                  <tr className="bg-muted/20 font-bold">
                    <td className="border border-border p-3">Monthly total</td>
                    <td className="border border-border p-3">USD 820–1,345</td>
                    <td className="border border-border p-3">USD 1,538–2,535</td>
                    <td className="border border-border p-3">USD 2,958–5,615</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>A few things this table doesn't show: the tourist levy (USD 10 per arrival, one-time), visa fees if applicable, and flights in. The mid-range band is what most nomads who've been to Bali before operate in. The budget band is achievable but requires discipline and a willingness to stay outside the main Canggu strip.</p>

            <p>For deeper cost comparisons across Southeast Asia, including how Bali stacks up against Thailand and Vietnam, check the <Link href="/resources/destination-costs">Udream destination costs resource</Link>.</p>

            <hr />

            <h2>Visa Situation for Filipinos in Bali</h2>

            <p>Indonesia is visa-free for Philippine passport holders for 30 days. That's the starting point.</p>

            <p>For longer stays, here are the main options:</p>

            <p><strong>Visa on Arrival (VOA):</strong> Available at the airport for USD 35, gives you 30 days extendable once for another 30 days at a local immigration office (additional fee, approximately USD 35). Total: 60 days without leaving.</p>

            <p><strong>Social/Tourist Visa (B211A):</strong> Applied for at an Indonesian embassy before arrival. Gives you 60 days initially with multiple 30-day extensions possible, up to 180 days total. More paperwork but the best option for a serious long stay.</p>

            <p><strong>Second Home Visa:</strong> 5–10 year visa requiring proof of at least USD 130,000 in assets. Not relevant for most nomads.</p>

            <p><strong>E33G Digital Nomad Visa:</strong> Indonesia launched this in 2023. As of mid-2026, implementation has been uneven — many people report difficulty actually obtaining it at embassies and confusion about the process. The standard VOA or B211A remains the more reliable path for most nomads.</p>

            <p>For full current requirements and the application process for Filipinos, see the <Link href="/resources/visa-guide">Udream visa guide</Link>.</p>

            <hr />

            <h2>What Surprised Us (The Good and The Bad)</h2>

            <h3>The good surprises</h3>

            <p><strong>The community is real.</strong> We'd heard that Bali had a strong nomad community but expected it to be more surface-level networking-event types. The depth of collaboration, genuine friendships, and professional relationships we've built in Bali surprised us. If you show up consistently at co-working spaces and community events, the connections happen faster than almost anywhere else.</p>

            <p><strong>The food diversity is extraordinary.</strong> Bali's restaurant scene in 2026 covers traditional Balinese, broader Indonesian regional cooking, Japanese (remarkably good), Middle Eastern, Indian, vegan/health food, and every conceivable fusion direction. All of it is available at price points that don't exist in most Western cities. A full dinner at a genuinely excellent local restaurant runs USD 5–10.</p>

            <p><strong>The scooter changes everything.</strong> Renting a scooter (around USD 80–100/month) opens up the whole island in a way that taxis and Grab don't. Day trips to quiet beaches, temple visits before the tour buses arrive, rice paddy routes that aren't in any guidebook — all of this becomes spontaneous and cheap. If you can ride a scooter, Bali becomes a fundamentally different experience.</p>

            <h3>The bad surprises</h3>

            <p><strong>Canggu traffic is genuinely bad.</strong> We knew it would be bad. It's worse. During the peak morning and evening hours on the main Canggu roads, what should be a 10-minute scooter trip takes 40 minutes. It's one of the main reasons we now base in Ubud for longer stretches.</p>

            <p><strong>The price gap between warung and tourist restaurant is enormous.</strong> A full nasi goreng at a local warung costs IDR 20,000–30,000 (USD 1.25–1.90). The same meal in a Canggu-facing restaurant costs IDR 80,000–150,000 (USD 5–9.50). Structurally similar food, totally different experience and price. The issue isn't that tourist restaurants exist — it's that if you stop paying attention, it's very easy to spend a month eating exclusively at them without noticing.</p>

            <p><strong>The rainy season is rainier than most guides suggest.</strong> The wet season runs from approximately November to March. In Ubud especially, afternoon and evening rain is near-daily from December through February. This isn't a reason not to go, but if you're planning outdoor activities or beach time, the shoulder months (April–May, September–October) are meaningfully better.</p>

            <blockquote>
              <p><strong>Meri & Man's take:</strong> If you're doing your first month in Bali, spend two weeks in Canggu and two weeks in Ubud. You'll understand within the first fortnight which kind of base works better for how you actually work, not how you imagine you'll work. Most people are surprised by which way they go.</p>
            </blockquote>

            <hr />

            <h2>Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="faq-item group">
                <summary>Is Bali good for digital nomads in 2026?</summary>
                <p>Yes, with the right expectations. Bali remains one of the best nomad destinations in the world for its combination of community, infrastructure, natural environment, and cost of living. It's more expensive than it was in 2019, particularly in Canggu, but it still offers strong value compared to most Western cities. Choose your neighborhood based on your working style rather than Instagram popularity.</p>
              </details>

              <details className="faq-item group">
                <summary>How much does it cost to live in Bali as a digital nomad per month?</summary>
                <p>A realistic budget for a mid-range nomad in Bali in 2026 is USD 1,500–2,500 per month, covering a private accommodation, co-working access, food, and transport. Budget travelers staying in Ubud or outside the main tourist areas can manage USD 800–1,300. Canggu at the current price level is difficult to do well under USD 1,800/month.</p>
              </details>

              <details className="faq-item group">
                <summary>Which area is best for digital nomads in Bali?</summary>
                <p>Canggu for social connections and surf culture. Ubud for focus, culture, and lower cost. For most nomads doing a first extended stay, Canggu is the better starting point (the community density makes it easier to establish yourself quickly) and Ubud is the better long-term base once you know what you need.</p>
              </details>

              <details className="faq-item group">
                <summary>Do I need a special visa to work remotely from Bali?</summary>
                <p>Remote work from Bali exists in a legal grey area for most nationalities. Indonesia's digital nomad visa (E33G) was announced in 2023 but has had uneven implementation. Most nomads use a Visa on Arrival (30 days, extendable to 60) or a B211A Social/Tourist Visa (up to 180 days). For Filipinos specifically, the VOA is available on arrival for USD 35. See the <Link href="/resources/visa-guide">full visa guide</Link> for current requirements and the most up-to-date information on the digital nomad visa status.</p>
              </details>

              <details className="faq-item group">
                <summary>Is the WiFi reliable enough to work from Bali?</summary>
                <p>At dedicated co-working spaces: yes, reliably. Fiber connections at the main co-working spaces run 50–200 Mbps and are sufficient for video calls and large file transfers. At cafes and villas: variable. Always test before committing to a villa rental and always carry a Telkomsel SIM with a data package as backup. The areas with the least reliable internet are the more rural parts of Ubud and any location more than a few kilometers from the main roads.</p>
              </details>
            </div>

            <hr />

            <h2>Ready to Plan Your Bali Base?</h2>

            <p>The <Link href="/nomad">Udream nomad hub</Link> has the full framework for structuring your first extended nomadic stay, including how to approach visa planning, banking, and building a sustainable remote income before you go.</p>

            <p>For the complete Indonesia picture beyond Bali, the <Link href="/blog/indonesia">Indonesia travel guide</Link> covers the broader archipelago, including Lombok, the Gili Islands, and Flores for when you're ready to move on from the island.</p>

            <p className="text-sm italic text-muted-foreground mt-12">
              Last updated: June 2026. Prices are in USD unless otherwise noted and reflect current market rates. Currency fluctuations and seasonal pricing mean figures are directional, not exact. Always verify current visa requirements before travel.
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

          <CostCallout countryName="Indonesia" />

        </div>
      </div>
    </article>
  );
}

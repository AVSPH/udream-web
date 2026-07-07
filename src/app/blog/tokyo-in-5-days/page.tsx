import Link from "next/link";
import { Calendar, Globe, ExternalLink, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { ParallaxHero } from "@/components/blog/ParallaxHero";

export const metadata = {
  title: "Tokyo in 5 Days: The Only Itinerary You Need (With Real Costs) | Udream",
  description: "The most essential experiences on day one through to the neighbourhoods most first-timers miss entirely by day five.",
  keywords: ["tokyo 5 day itinerary", "tokyo itinerary first time", "5 days in tokyo what to do"],
};

export default function TokyoIn5DaysPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tokyo in 5 Days: The Only Itinerary You Need (With Real Costs)",
    description: "The most essential experiences on day one through to the neighbourhoods most first-timers miss entirely by day five.",
    author: {
      "@type": "Person",
      name: "Meri & Man",
      url: "https://udreamtravels.com/our-story",
    },
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80",
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
          { name: "Tokyo 5 Day Itinerary", item: "https://udreamtravels.com/blog/tokyo-in-5-days" },
        ]}
      />
      <ParallaxHero
        src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200&q=80"
        alt="Tokyo 5 Day Itinerary"
      />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Itinerary
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Tokyo
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Tokyo in 5 Days: The Only Itinerary You Need (With Real Costs)
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
              Five days in Tokyo is enough to feel like you understand why people come back. It's not enough to see everything, and that's fine. This itinerary doesn't try to. It builds from the most essential experiences on day one through to the neighbourhoods most first-timers miss entirely by day five, with real transport directions, honest time estimates, and costs that reflect what you'll actually pay in 2026.
            </p>

            <p>
              We've done Tokyo a lot. This is the version we'd give a friend flying in for the first time.
            </p>

            <h2>Quick Facts</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Detail</th>
                    <th className="border border-border p-3 text-left">Info</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Best time to visit</td>
                    <td className="border border-border p-3">Late March (cherry blossoms), October–November (cooler, less crowded)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Currency</td>
                    <td className="border border-border p-3">Japanese Yen (JPY). Mostly cash-based — carry ¥10,000–20,000 at all times</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Language</td>
                    <td className="border border-border p-3">Japanese. English signage at major stations and tourist areas</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Visa</td>
                    <td className="border border-border p-3">Required for Philippine passport holders. <Link href="/resources/visa-guide/japan">See the Japan visa guide.</Link></td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Daily budget (mid-range)</td>
                    <td className="border border-border p-3">¥15,000–20,000/day (~USD 100–130). <Link href="/resources/destination-costs">Full cost breakdown at Udream.</Link></td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Transport card</td>
                    <td className="border border-border p-3">Get a Suica or Pasmo IC card at the airport on arrival — you'll use it every day</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Time zone</td>
                    <td className="border border-border p-3">JST (UTC+9) — 1 hour ahead of Philippines</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Day 1: Arrive, Orient, Asakusa and Ueno</h2>

            <h3>Morning: Arrival and Shinjuku check-in</h3>
            <p>
              Land at Narita or Haneda, clear immigration, and head straight to your accommodation. Don't try to do too much on arrival day. If you land at Narita, take the Narita Express (N'EX) to Shinjuku Station — about 90 minutes, ¥3,070, and the IC card works for this.
            </p>
            <p>
              Check in, dump your bags, and walk. Shinjuku is overwhelming in the best possible way and walking it without an agenda is the right introduction to Tokyo.
            </p>

            <h3>Afternoon: Asakusa</h3>
            <p>
              Take the Tokyo Metro Ginza Line from Shinjuku-sanchome to Asakusa (about 35 minutes, ¥210). Sensoji Temple and the Nakamise shopping street in front of it are genuinely worth the tourist crowds. Arrive between 2–4pm when morning crowds have thinned.
            </p>
            <p>
              Walk the street stalls. Try ningyo-yaki (small cakes filled with red bean paste, ¥500 for a pack) and matcha soft serve from any of the nearby shops (¥400–600). Skip the souvenir shops selling things that are definitely made in China and focus on the snack stalls.
            </p>
            <p>
              After Sensoji, walk 10 minutes to Kappabashi Kitchenware Street — the strip of shops selling professional cooking equipment, knives, and the famous plastic food displays. It closes around 5pm but it's a genuinely interesting walk even window shopping.
            </p>

            <h3>Evening: Shinjuku dinner and Golden Gai</h3>
            <p>
              Back to Shinjuku for dinner. Omoide Yokocho (Memory Lane) — the narrow alley of tiny yakitori bars just outside the west exit of Shinjuku Station — is touristy but worth doing once. Yakitori sets with a beer run ¥1,500–2,500.
            </p>
            <p>
              After dinner, walk to Kabukicho and find Golden Gai: about 200 tiny bars, each holding maybe eight people. Pick one that looks interesting, walk in, sit down. Drinks run ¥700–1,200. This is Tokyo at its best.
            </p>

            <p><strong>Day 1 estimated costs:</strong> Transport ¥3,500–4,000 / Food ¥2,500–3,500 / Activities free <strong>= ¥6,000–7,500</strong></p>

            <blockquote>
              <p><strong>Meri & Man's take:</strong> The best ramen in the Shinjuku area is at Fuunji, a 10-minute walk from the east exit — tsukemen style (dipping ramen), usually a short queue, worth every minute. Get there before 12pm or after 2pm to avoid the worst of the wait.</p>
            </blockquote>

            <h2>Day 2: Harajuku, Shibuya, and the Crossing</h2>

            <h3>Morning: Meiji Jingu Shrine</h3>
            <p>
              Start at Harajuku Station (JR Yamanote Line, one stop from Shinjuku, ¥150). Walk through the forested path to Meiji Jingu Shrine — one of Tokyo's most peaceful spots and free to enter. Allow 45–60 minutes.
            </p>
            <p>
              After the shrine, walk back through the Omotesando gate area and up Takeshita Street, Harajuku's famously wild teen fashion street. It's fascinating even if it's not your scene. The crepe stalls are excellent (¥600–900).
            </p>

            <h3>Afternoon: Omotesando and Shibuya</h3>
            <p>
              Walk down Omotesando, Tokyo's most design-forward boulevard. This is where the flagship architecture lives — the Prada building, the Omotesando Hills complex. Window shopping is free. Coffee at any of the cafes on the side streets runs ¥500–800.
            </p>
            <p>
              Shibuya is a 10-minute walk south or one stop on the Den-en-toshi Line. The Crossing is best done twice: once at street level (just join the flow, it takes about 30 seconds) and once from above. The Starbucks on the second floor of the QFront building has a window seat directly above the crossing. It's touristy and the coffee is fine. The view is worth the ¥600.
            </p>

            <h3>Evening: Shibuya dinner and Daikanyama</h3>
            <p>
              Shibuya has every type of restaurant in the world and most of them are good. For something specifically Tokyo: Ichiran Ramen has a branch near Shibuya Station — solo dining booths, intensely personal ramen, ¥1,000–1,500.
            </p>
            <p>
              After dinner, walk 15 minutes east to Daikanyama. Tokyo's quietest, most design-conscious neighbourhood. Tsutaya Books is worth visiting even if you can't read Japanese — it's one of the most beautiful bookshops in the world. Walk the side streets. There are bars and cafes at every corner. This is where Tokyo feels like a village.
            </p>

            <p><strong>Day 2 estimated costs:</strong> Transport ¥400–600 / Food ¥2,500–3,500 / Shibuya Sky or optional viewpoint ¥2,000 <strong>= ¥5,000–6,100</strong> (add ¥2,000 for Shibuya Sky)</p>

            <blockquote>
              <p><strong>Meri & Man's take:</strong> Skip the Shibuya Sky observation deck on a cloudy day — the view is all the point. Check the forecast the night before. If it's clear, go just before sunset. If it's not, spend the time in Daikanyama instead and come back another morning.</p>
            </blockquote>

            <h2>Day 3: Tsukiji, Ginza, and Akihabara</h2>

            <h3>Morning: Tsukiji Outer Market</h3>
            <p>
              The inner wholesale market has moved to Toyosu, but the Tsukiji Outer Market still operates and is still the best place in Tokyo for a breakfast of fresh seafood. Take the Tokyo Metro Hibiya Line to Tsukiji Station (from Shinjuku, ¥200–300, about 25 minutes).
            </p>
            <p>
              Arrive by 9am. The stalls start winding down by 11. Breakfast: a bowl of tamagoyaki on a stick (¥400), fresh uni on rice (¥1,500–2,000 at the market stalls), and a coffee from one of the small cafes on the interior streets. Budget ¥2,000–3,000 for a proper Tsukiji breakfast.
            </p>

            <h3>Afternoon: Ginza and TeamLab Planets</h3>
            <p>
              Ginza is a 10-minute walk from Tsukiji. It's Tokyo's answer to Champs-Élysées and expensive to actually buy anything. Good for window shopping, people-watching, and finding the basement food halls in the department stores (Mitsukoshi and Matsuya both have excellent food floors — a full lunch from the basement counters runs ¥1,000–1,500).
            </p>
            <p>
              If you've booked in advance: TeamLab Planets in Toyosu is about 20 minutes from Ginza by Metro (¥3,200 per person, ¥30 discount with advance booking). It's the one immersive art experience in Tokyo that is actually as good as the photos suggest. Book at least a week ahead.
            </p>

            <h3>Evening: Akihabara</h3>
            <p>
              Take the JR Yamanote or Keihin-Tohoku line to Akihabara (¥170 from Ginza area). Electric Town in the evening is Tokyo's most chaotic sensory experience: eight floors of anime merchandise, the smell of takoyaki, UFO catcher machines, and maid cafes offering tea service to passersby. You don't need to buy anything. Walk Chuo-dori and the alley behind it.
            </p>
            <p>
              For dinner: Akihabara has dozens of curry houses that cater to the gaming crowd. Quick, cheap, and excellent. Curry sets run ¥800–1,200.
            </p>

            <p><strong>Day 3 estimated costs:</strong> Transport ¥700–900 / Tsukiji breakfast ¥2,500 / TeamLab ¥3,200 / Food ¥2,500–3,000 <strong>= ¥8,900–9,600</strong> (TeamLab day is your most expensive)</p>

            <blockquote>
              <p><strong>Meri & Man's take:</strong> TeamLab Planets is better than TeamLab Borderless on a per-experience basis. It's smaller, more immersive, and the installations feel more designed. If you can only do one, do Planets. Wear socks — you go barefoot and the floors can be cold.</p>
            </blockquote>

            <h2>Day 4: Day Trip to Nikko or Kamakura (Your Choice)</h2>

            <p>Day 4 is for one of Tokyo's two classic day trips. They're different enough that the choice comes down to what you want:</p>

            <h3>Option A: Kamakura</h3>
            <p>
              (for the Giant Buddha and coastal feel)
              <br />
              Take the JR Yokosuka Line from Shinjuku to Kamakura (about 60 minutes, ¥940 each way). The Great Buddha (Kotoku-in) is a 30-minute bus ride from Kamakura Station (¥200 + ¥300 entry). Hasedera Temple is nearby and worth the ¥400 entry. Walk back along Yuigahama Beach to Kamakura Station.
            </p>

            <h3>Option B: Nikko</h3>
            <p>
              (for the ornate shrine complex)
              <br />
              Take the Tobu Nikko Line from Asakusa Station (about 2 hours, ¥1,400 each way, or covered by the Tobu Nikko Pass at ¥2,800 round trip). Toshogu Shrine is the centrepiece — the most elaborately decorated shrine in Japan. Entry ¥1,300. Budget the full day.
            </p>

            <h3>Back in Tokyo: evening in Ueno</h3>
            <p>
              Either way, return to Tokyo by late afternoon. Ueno Park as the sun drops is one of the most pleasant free things in Tokyo. Walk through to Ameyoko Market, a covered street market just outside Ueno Station, for a cheap dinner of grilled skewers and fried seafood (¥1,000–1,500 for a full meal standing at the stalls).
            </p>

            <p><strong>Day 4 estimated costs:</strong> Transport ¥2,000–3,000 / Entry fees ¥1,700–2,000 / Food ¥1,500–2,000 <strong>= ¥5,200–7,000</strong></p>

            <blockquote>
              <p><strong>Meri & Man's take:</strong> If your trip falls in cherry blossom season (late March to early April), skip both options and spend day 4 at Shinjuku Gyoen National Garden (¥500 entry). The blossom there is the best in the city. Outside cherry blossom season, Kamakura is the better call for first-timers — it's quicker, cheaper, and hits multiple different experiences in one day.</p>
            </blockquote>

            <h2>Day 5: Yanaka, Nakameguro, and a Proper Goodbye Dinner</h2>

            <h3>Morning: Yanaka</h3>
            <p>
              Yanaka is the neighbourhood Tokyo forgot to modernise, and it's the most charming thing in the city. Take the JR Yamanote Line to Nippori Station. Yanaka Ginza is a shopping street that hasn't changed much since the 1970s: local butchers, tofu shops, old ladies selling handmade pickles, cats sleeping on every second doorstep.
            </p>
            <p>
              Walk slowly. Get a coffee from one of the small standing cafes. This is the Tokyo that feels nothing like the city you've spent four days in and everything like the city residents actually love.
            </p>

            <h3>Afternoon: Nakameguro</h3>
            <p>
              Walk or take the Metro to Nakameguro. The canal-side streets here are Tokyo's most photographed in cherry blossom season and genuinely beautiful the rest of the year. The stretch of independent shops, cafes, and restaurants on both sides of the Meguro River is a good two-hour wander. The vintage clothing shops here are excellent if you're looking for something to bring home.
            </p>

            <h3>Evening: Proper dinner</h3>
            <p>Your last night deserves a proper meal. Three options by budget:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Budget (¥2,000–3,500):</strong> Gyoza no Ohsho anywhere in the city — a chain but genuinely excellent, a full gyoza and fried rice set is ¥900.</li>
              <li><strong>Mid-range (¥4,000–8,000):</strong> Any ramen shop in the Nakameguro area does their best work at dinner. Afuri Ramen (yuzu shio style) has a branch here and is worth the ¥1,200–1,500.</li>
              <li><strong>Splurge (¥10,000–30,000+):</strong> Book an omakase sushi counter in advance. Sushi Saito is the famous one but impossible to book. For something more accessible, search "omakase counter Tokyo" on Tableall or Pocket Concierge — anything in the ¥10,000–15,000 range will be extraordinary.</li>
            </ul>

            <p><strong>Day 5 estimated costs:</strong> Transport ¥400–600 / Food ¥2,000–8,000 / Shopping variable <strong>= ¥2,400–8,600</strong></p>

            <blockquote>
              <p><strong>Meri & Man's take:</strong> Yanaka is the neighbourhood we take everyone who asks where the "real Tokyo" is. It's not hidden exactly but it's not on most first-timer itineraries. Morning is when it's best — the locals are doing their grocery shopping and the neighbourhood is entirely itself.</p>
            </blockquote>

            <h2>5-Day Cost Summary</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Category</th>
                    <th className="border border-border p-3 text-left">Budget estimate</th>
                    <th className="border border-border p-3 text-left">Mid-range estimate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Accommodation (5 nights)</td>
                    <td className="border border-border p-3">¥25,000–35,000</td>
                    <td className="border border-border p-3">¥50,000–75,000</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Food (all 5 days)</td>
                    <td className="border border-border p-3">¥12,000–18,000</td>
                    <td className="border border-border p-3">¥25,000–40,000</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Transport (local, 5 days)</td>
                    <td className="border border-border p-3">¥5,000–6,000</td>
                    <td className="border border-border p-3">¥5,000–6,000</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Activities and entry fees</td>
                    <td className="border border-border p-3">¥8,000–10,000</td>
                    <td className="border border-border p-3">¥12,000–18,000</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">Total (excluding flights)</td>
                    <td className="border border-border p-3 font-semibold">¥50,000–69,000</td>
                    <td className="border border-border p-3 font-semibold">¥92,000–139,000</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-semibold">In USD (approx)</td>
                    <td className="border border-border p-3 font-semibold">USD 330–460</td>
                    <td className="border border-border p-3 font-semibold">USD 615–930</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>For a full breakdown of Japan daily costs by tier, see <Link href="/resources/destination-costs">Udream's destination cost guide</Link>.</p>

            <h2>Getting Around Tokyo</h2>

            <p>
              <strong>Get an IC card on arrival.</strong> Suica (JR East) or Pasmo (Tokyo Metro) work on every train, subway, and most buses in the city. Load ¥3,000–5,000 at the machine in the airport arrivals hall. You'll top it up as you go. It's significantly cheaper than buying single-journey tickets and works for contactless payments at convenience stores too.
            </p>

            <p>
              <strong>The JR Pass is not worth it for Tokyo-only trips.</strong> If you're staying in Tokyo the whole time, the JR Pass doesn't pay for itself. It's only worth buying if you're taking the Shinkansen to Kyoto, Osaka, or Hiroshima. For this five-day itinerary, a Suica card and single JR tickets for the day trips are cheaper.
            </p>

            <p>
              <strong>Taxis are for emergencies only.</strong> Tokyo taxis are excellent and expensive. A short trip across town easily runs ¥1,500–3,000. Use Grab or the standard taxi app (Japan Taxi) only when the trains have stopped (midnight–5am) or you're heavily loaded with luggage.
            </p>

            <p>
              <strong>Navigating the subway.</strong> Google Maps works perfectly for Tokyo transit, including the subway. Set your transport mode to "transit" and it will give you platform numbers, transfer instructions, and fare estimates. The Tokyo Metro map looks intimidating and is actually easy to read after the first day.
            </p>

            <h2>Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="faq-item group">
                <summary>Is 5 days enough for Tokyo?</summary>
                <p>Five days is enough for a first visit that feels complete. You'll cover the main neighbourhoods, get comfortable with the transit system, and do at least one day trip. What you won't do: Shibuya Sky AND TeamLab AND all the major shrine and temple visits in one trip. The good news is that Tokyo rewards repeat visits more than almost any other city, and knowing you'll come back makes the curation feel right rather than limiting.</p>
              </details>

              <details className="faq-item group">
                <summary>What is the best area to stay in Tokyo for first-timers?</summary>
                <p>Shinjuku is the most practical base: it's the main transport hub, has accommodation at every price point, and puts you within 30 minutes of every destination in this itinerary. Shibuya is the trendier alternative at a slightly higher price. Asakusa is best if you want the traditional aesthetic but adds 15–20 minutes to most journeys west.</p>
              </details>

              <details className="faq-item group">
                <summary>How much cash do I need for 5 days in Tokyo?</summary>
                <p>Carry at least ¥20,000–30,000 in cash at all times. Tokyo is more cash-reliant than you'd expect from a modern city. Many small restaurants, traditional shops, and some temples don't accept cards. ATMs at 7-Eleven, Japan Post, and Lawson accept international cards reliably. AEON and major bank ATMs are less reliable for foreign cards.</p>
              </details>

              <details className="faq-item group">
                <summary>Do I need to book things in advance for Tokyo?</summary>
                <p>A few things require advance booking: TeamLab Planets (at least a week ahead, often sells out), omakase dinner counters (2–4 weeks), and some popular ramen shops that require reservations. Everything else in this itinerary is walk-in. Shibuya Sky and Tokyo Skytree are technically walk-in but shorter queues with advance tickets.</p>
              </details>

              <details className="faq-item group">
                <summary>What should I know about Tokyo etiquette?</summary>
                <p>A few things that matter: don't eat or drink while walking (it's considered rude in most contexts). Finish your food at the stall or take it somewhere to sit. Don't talk on your phone on trains. Queues are sacred — stand behind the painted line on subway platforms and board in order. Tip nothing: tipping is not part of Japanese culture and can cause confusion or mild offence. And carry your rubbish — public bins are rare because Japan decided everyone should carry their own.</p>
              </details>
            </div>

            <h2>Plan Your Japan Trip</h2>
            <p>This itinerary focuses on Tokyo. For the broader Japan context, including the Shinkansen route to Kyoto and Osaka, the practical information on the Japan Rail Pass, and a full cost breakdown by city, head to our <Link href="/blog/japan">Japan overview</Link>.</p>
            <p>Philippine passport holders need a visa for Japan. Full application requirements, what to prepare, and approval tips are in the <Link href="/resources/visa-guide/japan">Udream Japan visa guide</Link>.</p>

            <p className="text-sm italic text-muted-foreground mt-12">
              Last updated: June 2026. Entry fees and transport costs change. Always verify current prices at official sources before travel.
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

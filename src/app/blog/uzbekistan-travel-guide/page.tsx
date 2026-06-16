import Link from "next/link";
import { Calendar, Globe, ExternalLink, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import Image from "next/image";

export const metadata = {
  title: "Uzbekistan Travel Guide: The Silk Road Destination | Udream",
  description: "Uzbekistan is one of the most visually stunning and culturally layered places we've ever been. A complete first-time visitor guide.",
  keywords: ["uzbekistan travel guide", "samarkand travel", "uzbekistan first time visitor"],
};

export default function UzbekistanTravelGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Uzbekistan Travel Guide: The Silk Road Destination Nobody Is Talking About (Yet)",
    description: "Uzbekistan is one of the most visually stunning and culturally layered places we've ever been. A complete first-time visitor guide.",
    author: {
      "@type": "Person",
      name: "Meri & Man",
      url: "https://udreamtravels.com/our-story",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    image: "https://udreamtravels.com/assets/blog/uzbekistan/DJI_20251110162301_0044_D.JPG",
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
          { name: "Uzbekistan Travel Guide", item: "https://udreamtravels.com/blog/uzbekistan-travel-guide" },
        ]}
      />
      <ParallaxHero
        src="/assets/blog/uzbekistan/DJI_20251110162301_0044_D.JPG"
        alt="Uzbekistan Travel Guide"
      />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Travel Guide
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Uzbekistan
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Uzbekistan Travel Guide: The Silk Road Destination Nobody Is Talking About (Yet)
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
              We'll be straight with you: before we went to Uzbekistan, we thought Central Asia was hard to get to, hard to get around, and probably not worth the effort compared to Southeast Asia or Europe. We were wrong on all three counts.
            </p>

            <p>
              Uzbekistan is one of the most visually stunning and culturally layered places we've ever been. The architecture alone in Samarkand stopped us mid-step. And it's still, somehow, flying completely under the radar. Most travelers we met there were European or Japanese. Very few Southeast Asians. Almost no Filipinos.
            </p>
            
            <p>
              That's changing. Search volume for "uzbekistan travel" has been quietly climbing for two years. Airlines from Southeast Asia are adding connections. The government has been aggressively upgrading tourism infrastructure. If you're going to go, go now while it still feels like a secret.
            </p>
            
            <p>
              Here's everything you need to plan your first trip.
            </p>

            <h2>Why Uzbekistan Is Having a Moment</h2>
            
            <p>
              Uzbekistan sits at the heart of the ancient Silk Road, the trade route that connected China, Persia, and Europe for over a thousand years. Cities like Samarkand, Bukhara, and Khiva were once among the most important in the world. They grew wealthy on spices, silk, and ideas. The mosques and madrasas they built are UNESCO-listed and genuinely jaw-dropping.
            </p>
            
            <p>
              For decades, the country was Soviet, then post-Soviet, then cautiously opening. Since 2017, under President Mirziyoyev, Uzbekistan has made a deliberate push to attract tourists: simplified visas, upgraded airports, new hotels, and restored monuments. The result is a destination that's ready for visitors in a way it simply wasn't ten years ago.
            </p>
            
            <p>
              For Filipino travelers especially, the combination of low cost, easy visa access (more on that below), and total novelty makes this one of the most compelling trips you can take right now.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
                <Image src="/assets/blog/uzbekistan/DJI_20251110163501_0064_D.JPG" alt="Uzbekistan Silk Road" fill className="object-cover" />
            </div>

            <h2>The Silk Road Highlights: Samarkand, Bukhara, Khiva</h2>
            
            <p>
              Most Uzbekistan itineraries hit three main cities. Here's how we'd rank them for a first-time visitor.
            </p>
            
            <h3>1. Samarkand (Don't Skip This)</h3>
            <p>
              Samarkand is the reason to come. The Registan, a square flanked by three towering madrasas covered in turquoise tilework, is one of those places that genuinely exceeds expectations. We've seen hundreds of photos of it. Nothing prepares you for standing in front of it at golden hour.
            </p>
            <p>
              Beyond the Registan, Gur-e-Amir (the tomb of Timur, the ruler who built much of what you'll see) and Shah-i-Zinda, a necropolis of mosques that stretches along a ridge, are both extraordinary. Give Samarkand at least two full days.
            </p>
            
            <h3>2. Bukhara (The Most Intact Silk Road City)</h3>
            <p>
              If Samarkand is the showpiece, Bukhara is the immersive experience. The old city is largely preserved and you can walk through narrow lanes between medieval buildings for hours. The Ark fortress, the Kalon Minaret, and the Lyabi-Hauz square with its old mulberry trees are highlights, but the real draw is the atmosphere. Bukhara feels genuinely ancient in a way that's hard to manufacture.
            </p>
            <p>
              Two nights here is comfortable. Three if you want to slow down.
            </p>
            
            <h3>3. Khiva (Best Kept Secret)</h3>
            <p>
              Khiva is the most remote of the three, a four-hour drive from Bukhara. The old city (Ichan Kala) is entirely walled and so well-preserved it looks like a living open-air museum. It's smaller and less crowded than the other two, which gives it a quiet, almost surreal quality.
            </p>
            <p>
              Worth an overnight if your itinerary allows it. Skip it only if you're very short on time.
            </p>
            
            <blockquote>
              <p><strong>Meri & Man's Take:</strong> If we had to choose just one city, it's Samarkand. But if we're being real, the three-city route from Samarkand to Bukhara to Khiva is one of the great overland journeys in Asia. The high-speed train between Samarkand and Bukhara costs about USD 10 and takes 1.5 hours. Do the full route if you can.</p>
            </blockquote>

            <h2>Getting There and Getting Around</h2>
            
            <p><strong>Getting to Uzbekistan</strong></p>
            <p>
              There are no direct flights from Manila to Uzbekistan, but connections are manageable. Flydubai via Dubai is one of the most common routes for Southeast Asian travelers. Air Arabia and Gulf Air also connect through the Gulf. Expect 10 to 14 hours of total travel time including layover.
            </p>
            <p>
              Tashkent is the main international gateway. From there, domestic flights and trains reach Samarkand and other cities quickly.
            </p>
            
            <p><strong>Getting Around Inside Uzbekistan</strong></p>
            <p>
              The Afrosiyob high-speed train connects Tashkent, Samarkand, and Karshi. It's comfortable, punctual, and cheap. Tickets sell out on busy weekends, so book a few days ahead on the uzrailpass.uz website or through your accommodation.
            </p>
            <p>
              For Bukhara to Khiva, shared taxis (around USD 10 per person) are the most practical option. The road is good and the drive passes through desert landscape that's striking in its own right.
            </p>
            <p>
              Taxis within cities are cheap. Yandex Go (the Uber equivalent in Central Asia) works well in Samarkand, Bukhara, and Tashkent.
            </p>

            <h2>Best Time to Visit</h2>
            
            <p>
              Spring (April to June) and autumn (September to November) are the best windows. Temperatures are mild and the light is beautiful for photography.
            </p>
            <p>
              Summer (July to August) is genuinely brutal. Temperatures in the Fergana Valley and desert regions regularly hit 40C+. If you go in summer, build long midday breaks into your itinerary.
            </p>
            <p>
              Winter is cold (Samarkand gets snow) but crowds are minimal and accommodation is much cheaper.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
                <Image src="/assets/blog/uzbekistan/DJI_20251110172557_0072_D.JPG" alt="Uzbekistan Architecture" fill className="object-cover" />
            </div>

            <h2>Cost Breakdown: What to Budget</h2>
            
            <p>
              Uzbekistan is one of the most affordable destinations we've visited anywhere. The Uzbekistani som is weak against the dollar and the local economy keeps prices low for foreign visitors.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Category</th>
                    <th className="border border-border p-3 text-left">Budget Traveler</th>
                    <th className="border border-border p-3 text-left">Mid-Range</th>
                    <th className="border border-border p-3 text-left">Comfortable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Accommodation (per night)</td>
                    <td className="border border-border p-3">USD 15-25 (guesthouses)</td>
                    <td className="border border-border p-3">USD 35-60 (boutique hotels)</td>
                    <td className="border border-border p-3">USD 80-120 (top hotels)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Meals (per day)</td>
                    <td className="border border-border p-3">USD 8-12</td>
                    <td className="border border-border p-3">USD 15-25</td>
                    <td className="border border-border p-3">USD 30-50</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Local transport (per day)</td>
                    <td className="border border-border p-3">USD 3-5</td>
                    <td className="border border-border p-3">USD 5-10</td>
                    <td className="border border-border p-3">USD 10-20</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Entrance fees (per day avg)</td>
                    <td className="border border-border p-3">USD 5-10</td>
                    <td className="border border-border p-3">USD 10-15</td>
                    <td className="border border-border p-3">USD 10-15</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-semibold">Daily total</td>
                    <td className="border border-border p-3 font-semibold">USD 31-52</td>
                    <td className="border border-border p-3 font-semibold">USD 65-110</td>
                    <td className="border border-border p-3 font-semibold">USD 130-205</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Budget travelers in Uzbekistan can comfortably get by on USD 40-55/day including accommodation, meals, local transport, and entrance fees. Mid-range travelers should budget USD 70-100/day. Costs in Tashkent run slightly higher than in Samarkand or Bukhara.
            </p>
            <p>
              The plov (Uzbek rice dish cooked in oil with meat and carrots) at a local chaikhana (teahouse) will run you about USD 2-3. A full dinner for two at a good restaurant in Samarkand: USD 15-20. Entrance to the Registan complex: USD 15 per person.
            </p>
            <p>
              For a full rundown of how Uzbekistan fits into your wider travel budget, see our <Link href="/resources/destination-costs">destination cost comparison guide</Link>.
            </p>

            <h2>What Surprised Us: Food, Hospitality, and Infrastructure</h2>
            
            <p>
              <strong>The food is exceptional.</strong> We didn't expect this. Uzbek cuisine is distinct from anything else in the region: slow-cooked lamb, flaky samsa pastries from clay tandoor ovens, smoky shashlik, mountains of plov. At Besh Qozon restaurant in Samarkand we had the best rice dish of our lives. The bread (non) is baked fresh and sold on every corner. Don't skip the cherries and apricots if you're visiting in spring.
            </p>
            
            <p>
              <strong>The hospitality is real.</strong> Uzbeks are genuinely warm with visitors. We were invited to share tea three times in two days in Bukhara by strangers who asked nothing in return. Hotel and guesthouse owners went out of their way to help us navigate train tickets and onward transport.
            </p>
            
            <p>
              <strong>The infrastructure surprised us.</strong> Roads are good, trains run on time, ATMs work, and 4G coverage was reliable in all three main cities. The upgraded tourist infrastructure means this isn't the rough-around-the-edges Central Asia backpacker experience. It's genuinely comfortable travel.
            </p>
            
            <p>
              <strong>English is limited.</strong> Outside of hotels, English is rare. Download Google Translate and the Cyrillic-to-Latin transliteration for Uzbek before you go. A few words of Russian (which older Uzbeks still speak) goes a long way.
            </p>

            <h2>Visa for Filipinos: The Good News</h2>
            
            <p>
              Filipino passport holders qualify for an e-Visa for Uzbekistan. You apply online at e-visa.gov.uz, pay USD 20, and typically receive approval within 3 business days. The visa allows a 30-day stay and covers all the main tourist destinations.
            </p>
            
            <p>
              There's no interview required, no agency needed, and no embassy visit. You get a PDF confirmation, print it or show it on your phone at arrival, and that's it.
            </p>
            
            <p>
              The application asks for your hotel name for your first night. Just put the name of your first accommodation. You're not locked into staying there.
            </p>
            
            <p>
              For a step-by-step walkthrough of the application and what to expect at Tashkent Airport, see our <Link href="/resources/visa-guide">full visa guide for Filipino travelers</Link>.
            </p>
            
            <blockquote>
              <p><strong>Meri & Man's Take:</strong> The Uzbekistan e-Visa is one of the smoothest we've processed as Filipino passport holders. USD 20, three days, done. No stress. It removes one of the biggest barriers that used to make Central Asia complicated for us to visit.</p>
            </blockquote>

            <h2>Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="faq-item group">
                <summary>Is Uzbekistan safe for tourists?</summary>
                <p>Yes. Uzbekistan has a low crime rate and tourists are generally well-treated. The main practical concern is petty theft in crowded bazaars, the same as anywhere. Solo female travelers we met on the road had no issues, though conservative dress (covering shoulders and knees) is respectful in religious sites and smaller towns.</p>
              </details>

              <details className="faq-item group">
                <summary>How many days do you need in Uzbekistan?</summary>
                <p>A minimum of 7 days covers Samarkand (2 nights), Bukhara (2 nights), and Khiva (1 night) with a day of travel between each. Ten to twelve days is the sweet spot if you want to include Tashkent and move at a relaxed pace.</p>
              </details>

              <details className="faq-item group">
                <summary>What currency should I bring to Uzbekistan?</summary>
                <p>US dollars are the most practical foreign currency to bring. Exchange desks and bank ATMs in all major cities convert USD to Uzbekistani som at good rates. Most guesthouses and hotels in tourist areas accept cards, but carry cash for markets, local restaurants, and taxis.</p>
              </details>

              <details className="faq-item group">
                <summary>How do you get from Tashkent to Samarkand?</summary>
                <p>The Afrosiyob high-speed train runs multiple times daily and takes about 2 hours 10 minutes. Tickets cost USD 8-15 depending on class. Book online at uzrailpass.uz a few days ahead, especially for weekend travel.</p>
              </details>

              <details className="faq-item group">
                <summary>Is Uzbekistan good for vegetarians?</summary>
                <p>It's manageable but not ideal. Meat (especially lamb) is central to Uzbek cuisine. Vegetable samsa, egg dishes, salads, and bread are available everywhere. In larger restaurants in Samarkand and Bukhara, vegetarian options are usually on the menu. In smaller towns and local chaikhanas, you may have fewer choices.</p>
              </details>

              <details className="faq-item group">
                <summary>What's the best base for exploring Uzbekistan?</summary>
                <p>Samarkand. It sits between Tashkent (2 hours by train) and Bukhara (1.5 hours by high-speed train), has the strongest concentration of major sights, and has the widest range of accommodation at all price points.</p>
              </details>
            </div>

            <h2>Final Word</h2>
            <p>
              Uzbekistan is the kind of destination that makes you wonder why it took so long to get here. The history is deep, the food is great, the people are warm, and it's genuinely affordable. For Filipino travelers, the easy e-Visa and growing air connections make it more accessible than it's ever been.
            </p>
            <p>
              It won't stay this quiet forever. Search volumes are rising, new hotels are opening, and travelers who've been to Bali and Bangkok twenty times are starting to look further.
            </p>
            <p>
              Go before everyone else figures it out.
            </p>
            <p>
              Check our <Link href="/resources/destination-costs">destination cost guide</Link> for full budget planning, and our <Link href="/resources/visa-guide">visa resource page</Link> for step-by-step application instructions.
            </p>

            <p className="text-sm italic text-muted-foreground mt-12">
              Last updated: June 2025. Visa fees, entry requirements, and train fares are subject to change. Always verify the latest information at e-visa.gov.uz and the official Uzbekistan Tourism portal before booking.
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

          <CostCallout countryName="Uzbekistan" />

        </div>
      </div>
    </article>
  );
}

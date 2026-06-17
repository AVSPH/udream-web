import Link from "next/link";
import { Calendar, Globe, ExternalLink, MapPin } from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CostCallout } from "@/components/blog/cost-callout";
import { ParallaxHero } from "@/components/blog/ParallaxHero";
import Image from "next/image";

export const metadata = {
  title: "How to Freelance and Travel: The Filipino Couple's Guide | Udream",
  description: "We didn't quit our jobs on a whim. We built income first, then left. The real guide to location freedom.",
  keywords: ["how to work remotely and travel", "freelancing and traveling", "how to freelance while traveling"],
};

export default function HowToFreelanceAndTravelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Freelance and Travel: The Filipino Couple's Guide to Location Freedom",
    description: "We didn't quit our jobs on a whim. We built income first, then left. The real guide to location freedom.",
    author: {
      "@type": "Person",
      name: "Meri & Man",
      url: "https://udreamtravels.com/our-story",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    image: "https://udreamtravels.com/assets/blog/travel-and-freelance/DJI_20251226185748_0589_D.JPG",
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
          { name: "Freelance & Travel", item: "https://udreamtravels.com/blog/how-to-freelance-and-travel" },
        ]}
      />
      <ParallaxHero
        src="/assets/blog/travel-and-freelance/DJI_20251226185748_0589_D.JPG"
        alt="How to Freelance and Travel"
      />

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-20 pt-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              Nomad Life
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              Location Independent
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            How to Freelance and Travel: The Filipino Couple's Guide to Location Freedom
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
              We didn't quit our jobs on a whim. We built income first, then left. That distinction matters more than anything else in this guide.
            </p>

            <p>
              By the time we bought our one-way tickets, we already had two retainer clients, a third on a project contract, and enough savings to cover three months of expenses without touching freelance income at all. We weren't brave. We were just prepared.
            </p>
            
            <p>
              That's the version of this story you don't always see. The overnight-success posts about "how we left everything and traveled the world" skip the 14 months before departure when we were freelancing on weekends after work, taking discovery calls at 9pm, and turning down social plans to hit a client deadline. We're not complaining about any of that. We're telling you it existed so you go in with the right expectations.
            </p>
            
            <p>
              This is the real guide. What we actually do, what we charge, what broke in year one, and how to start building this before you hand in your notice.
            </p>
            
            <p>
              If you want the full step-by-step system, it's all inside our <Link href="/nomad">Nomad Playbook</Link>. But if you want to understand the framework first, read on.
            </p>

            <h2>The Income Side: What We Do and How We Find Clients</h2>
            
            <p>
              When people ask "what do we do," the honest answer is: we sell skills that businesses need but don't want to hire full-time for. That's the freelance sweet spot. Not jobs. Skills with a clear business outcome.
            </p>
            
            <p>
              For us, that means content strategy, copywriting, and social media management. Man handles the strategy and client relationships. Meri handles execution and delivery. We're a two-person operation that operates like a small agency.
            </p>
            
            <p>
              <strong>What we charge:</strong> We work on monthly retainers ranging from USD 800 to USD 2,500 depending on scope. We don't take hourly work anymore. Hourly rates on platforms like Upwork cap your income and create unpredictable cash flow. Retainers give you a number you can plan around.
            </p>
            
            <p>
              <strong>Where we find clients:</strong> In the early days, it was Upwork and referrals from the first two clients. Once we had three or four case studies to show, we shifted to direct outreach and LinkedIn. We now get most new inquiries from content we've published and from past client referrals. The platform dependency goes down over time if you're intentional about building a reputation outside of it.
            </p>
            
            <p>
              <strong>Who our clients are:</strong> Mostly small and mid-size businesses in English-speaking markets (US, UK, Australia, Canada). They don't care where we're based. They care that we deliver on time and communicate clearly. That's genuinely it. Filipino freelancers sometimes assume geography is a barrier. In our experience, the main barrier is positioning, not location.
            </p>
            
            <blockquote>
              <p><strong>Meri & Man's Take:</strong> Raise your rates earlier than feels comfortable. We undercharged for the first eight months and it cost us significantly in lost income. The clients who've been hardest to work with were almost always the lowest-paying ones. Price is a filter, not just a number.</p>
            </blockquote>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
                <Image src="/assets/blog/travel-and-freelance/DJI_20251224152539_0476_D.JPG" alt="Working from anywhere" fill className="object-cover" />
            </div>

            <h2>The Logistics Side: Making It Actually Work</h2>
            
            <p>
              People romanticize the lifestyle and underestimate the infrastructure. Here's what the operational side looks like in practice.
            </p>
            
            <h3>Time zones</h3>
            
            <p>
              Most of our clients are in the US (EST/PST) and Australia (AEDT). From Southeast Asia, US clients mean late evenings for live calls. From Eastern Europe (we spent three months in Georgia), US timezones were brutal: 6pm to 2am overlap. From Central Asia (Uzbekistan, Kyrgyzstan), it was worse.
            </p>
            
            <p>
              Our fix: we default to async communication. Most client relationships don't need live calls more than twice a month. We use Loom videos for updates, Notion for shared documentation, and Slack for day-to-day messaging. When we do have calls, we schedule them in advance and block those windows as non-travel days.
            </p>
            
            <h3>Internet</h3>
            
            <p>
              This is the one logistics issue that can genuinely sink you. Our rule: we never rely on accommodation wifi for deadline work. Always verify before booking. We use a dual SIM setup (one local SIM, one international eSIM as backup), and we carry a pocket router for hotels with good building wifi but weak room signal.
            </p>
            
            <p>
              For coworking, we're not daily coworking people, but we know where the spaces are in every city we work from. In Bali, we used Outpost in Canggu and Dojo in Seminyak. <Link href="/blog/bali-digital-nomads">Bali has excellent infrastructure for remote workers</Link> and remains one of the easiest places to set up a productive working environment.
            </p>
            
            <h3>Tools we actually use:</h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Tool</th>
                    <th className="border border-border p-3 text-left">What we use it for</th>
                    <th className="border border-border p-3 text-left">Monthly cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Notion</td>
                    <td className="border border-border p-3">Client docs, project tracking, SOPs</td>
                    <td className="border border-border p-3">USD 16</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Slack</td>
                    <td className="border border-border p-3">Client communication</td>
                    <td className="border border-border p-3">Free (client accounts)</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Loom</td>
                    <td className="border border-border p-3">Async video updates</td>
                    <td className="border border-border p-3">USD 15</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Canva</td>
                    <td className="border border-border p-3">Content creation and client deliverables</td>
                    <td className="border border-border p-3">USD 15</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Google Workspace</td>
                    <td className="border border-border p-3">Email, Drive, Docs</td>
                    <td className="border border-border p-3">USD 12</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Wise</td>
                    <td className="border border-border p-3">Receiving international payments</td>
                    <td className="border border-border p-3">Transaction fee only</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Calendly</td>
                    <td className="border border-border p-3">Scheduling calls across time zones</td>
                    <td className="border border-border p-3">USD 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Total monthly overhead: roughly USD 68 plus transaction fees. Keep your overhead low in the early months.
            </p>
            
            <h3>Getting paid as a Filipino freelancer</h3>
            
            <p>
              This was one of the first practical problems we had to solve. Our setup: Wise business account for receiving USD, GBP, and AUD. Payoneer as a backup. We don't use PayPal for large transfers due to fees. For clients who prefer bank transfer, Wise gives you local account details in multiple currencies, which removes the "international wire" friction that sometimes spooks smaller clients.
            </p>

            <h2>The Mindset Shift: From Employee to Business Owner</h2>
            
            <p>
              Nobody talks enough about how disorienting this part is.
            </p>
            
            <p>
              When you're employed, someone else manages your workload, your schedule, and the consequences of mistakes. When you freelance and travel, every dropped ball lands on you. A late deliverable doesn't get you a note from your manager. It gets you a lost client. A bad month with slow client payments doesn't mean a difficult conversation with HR. It means you cover rent from savings.
            </p>
            
            <p>
              The shift isn't just about skills. It's about identity. You stop being "someone who works for a company" and start being "someone who runs a business." That sounds like a small thing until you're sitting in a cafe in <Link href="/blog/georgia-travel-guide">Tbilisi at 11pm finishing a client deck</Link> because you spent the afternoon at a monastery and miscalculated your timeline. At that point it's either your problem to solve or it's not done. There's no one else.
            </p>
            
            <p>What helped us:</p>
            
            <p>
              <strong>Setting non-negotiable work hours.</strong> We work from 8am to 1pm most days. Those five hours are sacred. We don't book tours, airport transfers, or anything else in that window. Travel happens in the afternoon.
            </p>
            
            <p>
              <strong>Treating cash flow like a business metric.</strong> We track income and expenses weekly, not monthly. This gives us early warning if a month is running short before it becomes a crisis.
            </p>
            
            <p>
              <strong>Separating work and travel psychologically.</strong> When we're working, we're working. We don't half-work from a beach with music on and then wonder why the output is mediocre. Good work needs focus. Focus needs a real setup: good chair, reliable connection, headphones, door closed or cafe with background noise at the right level.
            </p>
            
            <blockquote>
              <p><strong>Meri & Man's Take:</strong> The hardest part of this lifestyle isn't the travel. It's learning to manage yourself without a structure somebody else built for you. That's a skill. It takes months to develop. Be patient with the process.</p>
            </blockquote>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
                <Image src="/assets/blog/travel-and-freelance/DJI_20251215124451_0861_D.JPG" alt="Digital Nomad Lifestyle" fill className="object-cover" />
            </div>

            <h2>The Mistakes We Made in Year One</h2>
            
            <p>
              <strong>We took any client who'd pay.</strong> Urgently-phrased emails from clients who needed everything yesterday should have been a red flag. They weren't in year one because we needed the money. We now decline clients who exhibit those patterns in the first message.
            </p>
            
            <p>
              <strong>We didn't have a system for client onboarding.</strong> Every new engagement started the same chaotic way: informal email threads, no signed scope document, unclear deliverables. This led to scope creep on two separate projects that cost us both time and the relationship. Now every client gets a contract and a Notion onboarding doc before we start a single piece of work.
            </p>
            
            <p>
              <strong>We over-traveled in the first four months.</strong> Moving cities every five to seven days sounds exciting. It destroys productivity. Every move costs you half a day at minimum (packing, transit, checking in, figuring out where to work). We now aim for a minimum of three weeks per city. One month is better. Two months is ideal for a productive working base.
            </p>
            
            <p>
              <strong>We didn't save enough before leaving.</strong> We had three months of savings and assumed freelance income would ramp up quickly. It didn't. Month one was USD 1,200. Month two was USD 900. Month three was USD 2,400. The curve isn't linear. Have six months of expenses saved before you leave employment, not three.
            </p>
            
            <p>
              <strong>We ignored the visa side until it became urgent.</strong> Staying legal across multiple countries as a freelancer is more complex than it looks. Most tourist visas prohibit "work," and while enforcement is rare, it's not zero. We now plan our movements around visa rules, not the other way around. Our <Link href="/resources/visa-guide">visa resource page</Link> covers this in detail.
            </p>

            <h2>How to Start Before You Quit</h2>
            
            <p>
              This is the section most people skip because it's not as exciting as the destination content. Read it anyway.
            </p>
            
            <p>
              The goal is to arrive at your last day of employment with: (a) at least two paying clients, (b) six months of expenses saved, and (c) a tested system for delivering work remotely. If you don't have all three, you're not ready. Not because we're gatekeeping, but because missing any one of those things makes the first year significantly harder.
            </p>
            
            <p>
              <strong>Step 1: Identify your sellable skill.</strong> What do you know how to do that a business would pay for? Content writing, graphic design, social media management, video editing, web development, bookkeeping, virtual assistance. If you're employed in a skilled role right now, you probably already have something. The question is whether you can package it for a freelance context.
            </p>
            
            <p>
              <strong>Step 2: Build a small portfolio.</strong> Three to five pieces of work. If you have no paid work yet, do one project for free or at a deep discount for someone you know. You need something to show. An empty portfolio is the single biggest blocker for new freelancers.
            </p>
            
            <p>
              <strong>Step 3: Find your first client.</strong> Tell everyone in your existing network what you're now offering. Post on LinkedIn. Send five cold emails a week. Apply to relevant jobs on Upwork or OnlineJobs.ph. One client is all you need to start.
            </p>
            
            <p>
              <strong>Step 4: Deliver exceptionally well.</strong> One great client leads to a referral. Two clients become a system. The first year of freelancing is almost entirely about reputation, not marketing. Do what you say you'll do, on time, every time.
            </p>
            
            <p>
              <strong>Step 5: Build savings aggressively while you're still employed.</strong> Your employment income is your runway. Use it. The months between "I've decided to do this" and "I've quit" should be the most savings-intensive of your life.
            </p>
            
            <p>
              For the full framework, templates, client scripts, and the systems we use to run our freelance business from anywhere, everything is in the <Link href="/nomad">Nomad Playbook</Link>. It's the resource we wish had existed when we started.
            </p>

            <h2>Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="faq-item group">
                <summary>Do you need a work visa to freelance while traveling?</summary>
                <p>This depends on your nationality and where you're based. As Filipino passport holders on tourist visas, we work for clients outside the country we're physically in. Most countries allow this under tourist status, though it varies. Some countries now offer specific digital nomad visas (Portugal, Costa Rica, Indonesia, Georgia) that provide legal clarity. Always research the rules for each country you plan to stay in for longer than a month. Our <Link href="/resources/visa-guide">visa resource page</Link> covers the most popular destinations for Filipino nomads.</p>
              </details>

              <details className="faq-item group">
                <summary>How much do you need to earn to sustain this lifestyle?</summary>
                <p>Our minimum comfortable number is USD 3,000/month for two people. That covers accommodation, food, transport, tools, and a reasonable travel experience in most of Southeast Asia and Central Asia. In Western Europe or Japan, budget USD 4,500 to USD 5,500/month for the same standard of living. The <Link href="/resources/destination-costs">destination cost breakdown</Link> on our resources page shows what specific destinations actually cost.</p>
              </details>

              <details className="faq-item group">
                <summary>What's the best platform to find remote clients as a Filipino freelancer?</summary>
                <p>Start with Upwork or OnlineJobs.ph while you're building your portfolio. Both have active hiring for Filipino talent. OnlineJobs.ph is specifically designed for the Philippines market and has less competition per role. Once you have 3 to 5 strong client relationships and case studies, move toward direct outreach and referrals. Platform dependency is a risk: if Upwork changes its algorithm or terms, your income shouldn't be at risk.</p>
              </details>

              <details className="faq-item group">
                <summary>How do you handle taxes as a freelance traveler from the Philippines?</summary>
                <p>We're not accountants and this isn't tax advice, but here's what we do: we remain registered taxpayers in the Philippines, file BIR returns annually, and track all income in a simple spreadsheet. Filipino freelancers earning from foreign clients are generally subject to Philippine income tax on those earnings. Consult a CPA familiar with digital nomad and freelance income before making any decisions.</p>
              </details>

              <details className="faq-item group">
                <summary>Is it realistic to build a freelance income while still employed?</summary>
                <p>Yes, and it's the right way to do it. Expect to put in 10 to 15 hours per week on freelance work outside your job hours for 12 to 18 months before your income is stable enough to go full-time. It's not a fast process. But it's a safe one.</p>
              </details>

              <details className="faq-item group">
                <summary>How do you manage client relationships across different time zones?</summary>
                <p>Async-first communication is the answer. Set expectations with clients upfront: you're in a different time zone, you respond within 24 hours on business days, and live calls are scheduled in advance. Most clients adapt quickly. The ones who expect instant responses regardless of timezone are usually not the right fit for a remote working arrangement.</p>
              </details>
            </div>

            <h2>What's Next</h2>
            <p>We've covered the income side, the logistics, the mindset, the mistakes, and the starting steps. If you want to go deeper on any of it, or if you want the actual templates, scripts, and frameworks we use in our business today, head to the <Link href="/nomad">Nomad Playbook</Link>.</p>
            <p>And if you want to see what this lifestyle actually looks like in practice, start with <Link href="/our-story">our story</Link>. It's the unfiltered version of how two people from the Philippines ended up building a business they run from anywhere.</p>
            <p>The freedom is real. So is the work it takes to get there.</p>

            <p className="text-sm italic text-muted-foreground mt-12">
              Last updated: June 2025. Freelance platform terms, visa regulations, and tax rules change. Verify current requirements with official sources and consult a licensed professional for financial and legal decisions.
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

        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import CuratorQuiz from "@/components/curator/CuratorQuiz";
import { Sparkles } from "lucide-react";
import { StripedPattern } from "@/components/magicui/striped-pattern";

export const metadata: Metadata = {
  title: "Travel Curator Quiz | Udream Travels",
  description: "Get a personalized travel plan. Tell us your experience, budget, vibes, and duration, and let Meri & Man design your ideal itinerary.",
  keywords: ["travel curator", "itinerary planner", "travel advice", "digital nomad planning", "custom travel plan", "meri and man"],
  openGraph: {
    title: "Travel Curator Quiz | Udream Travels",
    description: "Get a personalized travel plan. Tell us your experience, budget, vibes, and duration, and let Meri & Man design your ideal itinerary.",
    url: "https://udreamtravels.com/curator",
    type: "website",
  }
};

export default function CuratorPage() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-primary/20 overflow-x-hidden pt-28 pb-20 px-4">
      <StripedPattern
        className="text-primary/15 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,white,transparent)] z-0"
        width={16}
        height={16}
      />
      {/* ── Header Section ─────────────────────────────────────────── */}
      <section className="relative max-w-3xl mx-auto text-center mb-10 flex flex-col items-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          Custom Itinerary Planning
        </span>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight text-foreground">
          Curate Your Next Move <br />
          <span className="text-primary italic font-normal font-script text-5xl md:text-7xl block mt-2">
            Tailored by Meri &amp; Man
          </span>
        </h1>

        <p className="text-md md:text-lg text-muted-foreground leading-relaxed max-w-xl">
          Answer a few questions about your travel experience, budget, and vibes. We'll build and send you a fully customized travel blueprint.
        </p>
      </section>

      {/* ── Quiz Section ───────────────────────────────────────────── */}
      <section className="relative max-w-3xl mx-auto">
        <CuratorQuiz />
      </section>
    </div>
  );
}

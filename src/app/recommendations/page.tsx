import type { Metadata } from "next";
import Link from "next/link";
import { BedDouble, ArrowUpRight } from "lucide-react";
import { accommodations, SITE_URL } from "@/data/accommodations";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const url = `${SITE_URL}/recommendations`;

export const metadata: Metadata = {
  title: "Recommendations ~ Stays & Travel Picks We Trust | Udream",
  description:
    "Our hand-picked travel recommendations ~ starting with accommodation we would happily book again. Honest picks from a couple who travels full-time.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Udream",
    title: "Recommendations ~ Stays & Travel Picks We Trust | Udream",
    description:
      "Our hand-picked travel recommendations ~ starting with accommodation we would happily book again.",
  },
};

const categories = [
  {
    name: "Accommodation",
    href: "/recommendations/accommodation",
    icon: BedDouble,
    description: "Apartments and stays we rate ~ central, fast Wi-Fi, remote-work ready.",
    count: `${accommodations.length} place${accommodations.length === 1 ? "" : "s"}`,
  },
];

export default function RecommendationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: SITE_URL },
          { name: "Recommendations", item: url },
        ]}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20">
        <header className="max-w-2xl mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            Recommendations
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
            Things we actually recommend
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No fluff, no paid placements we do not believe in ~ just the stays and travel picks we would use ourselves.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="group rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(46,38,30,0.4)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="w-6 h-6" />
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{c.name}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{c.description}</p>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{c.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

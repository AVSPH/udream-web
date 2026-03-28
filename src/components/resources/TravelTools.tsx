"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Star,
  Wrench,
  Gift,
  Plane,
  PlaneTakeoff,
  Route,
  Hotel,
  Luggage,
  House,
  Map,
  Train,
  Car,
  Smartphone,
  CreditCard,
  ShieldCheck,
  Mountain,
  FileText,
  ListChecks,
  ArrowLeftRight,
  Calendar,
} from "lucide-react";
import { travelTools, toolCategories, type TravelTool } from "@/data/resources";

type AffiliateDeal = {
  name: string;
  offer: string;
  href?: string;
  promoCode?: string;
  logoUrls: string[];
};

const AFFILIATE_DEALS: AffiliateDeal[] = [
  {
    name: "Airbnb",
    offer: "Get PHP 600 off your first stay.",
    href: "https://www.airbnb.com/c/vt4UybWY6tGUQ75r?unique_share_id=72da1af2-f9aa-4a96-88df-aa446a03d252",
    logoUrls: [
      "https://logo.clearbit.com/airbnb.com",
      "https://www.google.com/s2/favicons?sz=128&domain=airbnb.com",
    ],
  },
  {
    name: "SafetyWing",
    offer: "Get 20% off nomad insurance.",
    href: "https://safetywing.com/signup?product=nomad-insurance&callbackUrl=%2Fdashboard%2Fnomad-insurance%2Fpurchase&referralToken=29bb1793-07d9-439d-aeac-d1b6723dc0a0",
    logoUrls: [
      "https://www.google.com/s2/favicons?sz=128&domain=safetywing.com",
      "https://logo.clearbit.com/safetywing.com",
    ],
  },
  {
    name: "Wise",
    offer: "Get a free card or zero transfer fees up to PHP 31,500.",
    href: "https://wise.com/invite/drhc/maryg1464",
    logoUrls: [
      "https://logo.clearbit.com/wise.com",
      "https://www.google.com/s2/favicons?sz=128&domain=wise.com",
    ],
  },
  {
    name: "Airalo",
    offer: "Get USD 3.00 off your first purchase.",
    promoCode: "MARYKR7865",
    logoUrls: [
      "https://logo.clearbit.com/airalo.com",
      "https://www.google.com/s2/favicons?sz=128&domain=airalo.com",
    ],
  },
];

// ── Icon map ───────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
  plane: Plane,
  "plane-takeoff": PlaneTakeoff,
  route: Route,
  hotel: Hotel,
  luggage: Luggage,
  house: House,
  map: Map,
  train: Train,
  car: Car,
  smartphone: Smartphone,
  "credit-card": CreditCard,
  "shield-check": ShieldCheck,
  mountain: Mountain,
  "file-text": FileText,
  "list-checks": ListChecks,
  "arrow-left-right": ArrowLeftRight,
  calendar: Calendar,
};

function ToolIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? Wrench;
  return <Icon className={className} />;
}

function AffiliateLogo({
  name,
  logoUrls,
}: {
  name: string;
  logoUrls: string[];
}) {
  const [hasError, setHasError] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const currentLogoUrl = logoUrls[logoIndex];

  if (hasError) {
    return (
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-xl bg-white border border-border/80 flex items-center justify-center overflow-hidden">
      <img
        src={currentLogoUrl}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => {
          if (logoIndex < logoUrls.length - 1) {
            setLogoIndex((prev) => prev + 1);
            return;
          }
          setHasError(true);
        }}
        className="w-6 h-6 object-contain"
      />
    </div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────

const categoryId = toolCategories.map((c) => c.id);
type CategoryId = (typeof categoryId)[number] | "all";

export function TravelToolsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const filtered: TravelTool[] =
    activeCategory === "all"
      ? travelTools
      : travelTools.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Wrench className="w-4 h-4" /> My Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tools I Actually Use
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Curated apps and websites that make every trip smoother, from
            finding cheap flights to staying connected abroad.
          </p>
        </div>

        {/* Featured Affiliate Deals */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Gift className="w-4 h-4" /> Featured Affiliate Deals
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AFFILIATE_DEALS.map((deal, i) => (
              <motion.article
                key={deal.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="mb-4">
                  <AffiliateLogo name={deal.name} logoUrls={deal.logoUrls} />
                </div>
                <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                  {deal.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed min-h-[64px]">
                  {deal.offer}
                </p>
                {deal.promoCode && (
                  <p className="mt-3 text-xs font-semibold text-primary">
                    Promo code: {deal.promoCode}
                  </p>
                )}
                <div className="mt-4">
                  {deal.href ? (
                    <a
                      href={deal.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Claim deal
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <p className="text-sm text-foreground/70">
                      Use code at checkout.
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === "all"
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {toolCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                activeCategory === cat.id
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              <ToolIcon name={cat.icon} className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              {tool.isFavorite && (
                <span className="absolute top-4 right-4 flex items-center gap-1 text-xs text-primary font-semibold">
                  <Star className="w-3 h-3 fill-primary" /> Fave
                </span>
              )}
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                <ToolIcon name={tool.icon} className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

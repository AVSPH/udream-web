"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Camera,
  Clock,
  Info,
  Landmark,
  Leaf,
  Lightbulb,
  Palette,
  ShoppingBag,
  Sparkles,
  Ticket,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type {
  CitySpotPricing,
  SpotCategory,
  SpotImage,
  TouristSpot,
} from "@/data/attraction-prices";

const CATEGORY_META: Record<
  SpotCategory,
  { label: string; icon: React.ReactNode; cls: string }
> = {
  nature: {
    label: "Nature",
    icon: <Leaf className="w-3 h-3" />,
    cls: "bg-emerald-500/90",
  },
  culture: {
    label: "Culture",
    icon: <Landmark className="w-3 h-3" />,
    cls: "bg-violet-500/90",
  },
  landmark: {
    label: "Landmark",
    icon: <Camera className="w-3 h-3" />,
    cls: "bg-sky-500/90",
  },
  museum: {
    label: "Museum",
    icon: <Palette className="w-3 h-3" />,
    cls: "bg-amber-500/90",
  },
  market: {
    label: "Market",
    icon: <ShoppingBag className="w-3 h-3" />,
    cls: "bg-rose-500/90",
  },
  experience: {
    label: "Experience",
    icon: <Sparkles className="w-3 h-3" />,
    cls: "bg-primary/90",
  },
};

function ImageCredit({ image }: { image: SpotImage }) {
  if (!image.src || !image.author) return null;
  return (
    <a
      href={image.sourceUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-black/45 backdrop-blur-sm text-[10px] text-white/75 hover:text-white transition-colors"
    >
      © {image.author} · {image.license}
    </a>
  );
}

function SpotCard({ spot, index }: { spot: TouristSpot; index: number }) {
  const cat = CATEGORY_META[spot.category];
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="group flex flex-col rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {spot.image.src && (
          <Image
            src={spot.image.src}
            alt={spot.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[11px] font-semibold uppercase tracking-wider ${cat.cls}`}
        >
          {cat.icon}
          {cat.label}
        </span>

        {/* Price badge */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full backdrop-blur-md border text-xs font-bold ${
            spot.isFree
              ? "bg-emerald-500/90 border-emerald-300/40 text-white"
              : "bg-black/50 border-white/20 text-white"
          }`}
        >
          {spot.isFree ? "FREE" : spot.priceUSD}
        </span>

        <ImageCredit image={spot.image} />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-bold text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
          {spot.name}
        </h3>

        {/* Price row */}
        <div className="flex items-start gap-2.5 rounded-xl bg-muted/60 px-3.5 py-2.5">
          <Ticket className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground leading-snug">
              {spot.priceLocal}
            </p>
            {!spot.isFree && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {spot.priceUSD} USD
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {spot.duration}
        </div>

        <p className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed mt-auto pt-2 border-t border-border/60">
          <Lightbulb className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
          {spot.tip}
        </p>
      </div>
    </motion.article>
  );
}

export function SpotPricesCity({ city }: { city: CitySpotPricing }) {
  const freeSpots = city.spots.filter((s) => s.isFree).length;
  const paidSpots = city.spots.length - freeSpots;

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative h-[420px] md:h-[480px] overflow-hidden">
        {city.heroImage.src && (
          <Image
            src={city.heroImage.src}
            alt={`${city.city}, ${city.country}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/30" />
        <ImageCredit image={city.heroImage} />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto w-full px-4 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/resources/attraction-prices"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-5"
              >
                <ArrowLeft className="w-4 h-4" />
                All cities
              </Link>
              <p className="text-white/70 text-sm font-medium uppercase tracking-[0.2em] mb-2">
                {city.country} · Attraction Prices
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {city.city}
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30">
                  <Wallet className="w-4 h-4" />
                  {city.estTotal} for the classics
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                  {paidSpots} paid · {freeSpots} free
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                  {city.currencyNote}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* ── Intro + budget note ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 mb-12 grid md:grid-cols-[1fr_auto] gap-6 items-start"
        >
          <p className="text-lg text-muted-foreground max-w-2xl">
            {city.intro}
          </p>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 md:max-w-xs">
            <p className="flex items-center gap-2 text-sm font-bold text-primary mb-1">
              <Wallet className="w-4 h-4" />
              Bring {city.estTotal}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              This {city.estTotalNote}.
            </p>
          </div>
        </motion.div>

        {/* ── Spot cards ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {city.spots.map((spot, i) => (
            <SpotCard key={spot.name} spot={spot} index={i} />
          ))}
        </div>

        {/* ── Disclaimer + credits ─────────────────────────────────── */}
        <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-5 flex items-start gap-3">
          <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
            <p>
              Prices are approximate (as of 2026), based on our visits and
              official rates, and can change with seasons and exchange rates.
              Always double-check official websites before you go.
            </p>
            <p>
              Photos are free-license images from{" "}
              <a
                href="https://commons.wikimedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Wikimedia Commons
              </a>{" "}
              — tap the credit on any photo for its author and license.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

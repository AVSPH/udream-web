"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Plane,
  Ticket,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  citySpotPricing,
  REGION_ORDER,
  type CitySpotPricing,
} from "@/data/attraction-prices";

function CityCard({ city }: { city: CitySpotPricing }) {
  const freeCount = city.spots.filter((s) => s.isFree).length;
  return (
    <Link
      href={`/resources/attraction-prices/${city.slug}`}
      className="group block relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {city.heroImage.src ? (
          <Image
            src={city.heroImage.src}
            alt={`${city.city}, ${city.country}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-primary/10" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
          <div>
            <p className="inline-flex items-center gap-1.5 text-white/70 text-xs font-medium mb-1">
              <MapPin className="w-3 h-3" />
              {city.country}
            </p>
            <h3 className="text-2xl font-bold text-white leading-none">
              {city.city}
            </h3>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
            <Wallet className="w-3.5 h-3.5" />
            {city.estTotal}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {city.intro}
        </p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground min-w-0">
            <span className="px-2.5 py-1 rounded-full bg-muted font-medium shrink-0">
              {city.spots.length} spots
            </span>
            {freeCount > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium shrink-0">
                {freeCount} free
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted font-medium shrink-0">
              <Plane className="w-3 h-3" />
              {city.gateway.code}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary shrink-0">
            See prices
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function SpotPricesIndex() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Ticket className="w-4 h-4" /> Attraction Prices
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What the Famous Spots{" "}
              <span className="text-primary">Actually Cost</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Entry fees for the must-see sights in the cities we&apos;ve
              visited ~ so you know exactly how much to bring before you go.
              Real prices, in local currency and US dollars.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── City cards, grouped by region ────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 mt-12 space-y-14">
        {REGION_ORDER.map((region) => {
          const cities = citySpotPricing.filter((c) => c.region === region);
          if (cities.length === 0) return null;
          return (
            <section key={region}>
              {/* Region heading */}
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  {region}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {cities.length} {cities.length === 1 ? "city" : "cities"}
                </span>
                <span className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cities.map((city, i) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  >
                    <CityCard city={city} />
                  </motion.div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Coming soon */}
        <div className="rounded-3xl border-2 border-dashed border-border bg-muted/30 p-8 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">
              More cities on the way
            </p>
            <p className="text-sm text-muted-foreground">
              We&apos;re adding price guides for every city we&apos;ve visited
              ~ Kota Kinabalu, Taichung, Dushanbe, and the last few coming soon.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto">
          Prices are approximate, based on our visits and official rates as of
          2026, and can change with seasons and exchange rates. Always
          double-check the official website before you go.
        </p>
      </div>
    </div>
  );
}

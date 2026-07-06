"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Radio, CalendarDays, ArrowRight } from "lucide-react";
import { liveEvent, eventHasEnded } from "@/data/live-event";

export function LiveEventBanner() {
  // Render on the server too (SEO + no layout shift), then hide client-side
  // once the event is over.
  const [ended, setEnded] = useState(false);
  useEffect(() => {
    setEnded(eventHasEnded());
  }, []);

  if (ended) return null;

  return (
    <section className="relative z-10 px-6 -mt-4 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <Link href="/events" className="group block">
          <div className="relative overflow-hidden rounded-3xl bg-foreground text-white px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center gap-4 shadow-[0_20px_60px_-24px_rgba(46,38,30,0.5)] transition-transform duration-300 hover:-translate-y-0.5">
            <div aria-hidden className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-primary/25 blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold uppercase tracking-widest w-fit shrink-0">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Free live event
            </span>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base md:text-lg leading-snug">
                {liveEvent.name}
              </p>
              <p className="text-white/60 text-sm flex items-center gap-1.5 mt-0.5">
                <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                {liveEvent.dateLabel} · {liveEvent.timeLabel}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground bg-primary px-5 py-2.5 rounded-full shrink-0 group-hover:bg-primary/90 transition-colors">
              Save your free seat
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

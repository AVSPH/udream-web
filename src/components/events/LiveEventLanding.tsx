"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Ticket,
  CalendarPlus,
  Send,
  Check,
  Radio,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { liveEvent, googleCalendarUrl } from "@/data/live-event";

type Countdown = { days: number; hours: number; minutes: number; seconds: number };

function getCountdown(): Countdown | null {
  const diff = new Date(liveEvent.startsAt).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

function CountdownTimer() {
  // null until mounted so server and first client render match
  const [countdown, setCountdown] = useState<Countdown | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCountdown(getCountdown());
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  if (mounted && countdown === null) {
    return (
      <div className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white font-semibold">
        <Radio className="w-4 h-4 animate-pulse" />
        We&apos;re live! Check your email for the stream link.
      </div>
    );
  }

  const units: { label: string; value: number | null }[] = [
    { label: "Days", value: countdown?.days ?? null },
    { label: "Hours", value: countdown?.hours ?? null },
    { label: "Mins", value: countdown?.minutes ?? null },
    { label: "Secs", value: countdown?.seconds ?? null },
  ];

  return (
    <div className="flex items-center gap-3" aria-label="Countdown to event start">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center w-18 h-20 min-w-[4.5rem] rounded-2xl bg-white border border-border shadow-sm"
        >
          <span className="font-display text-2xl md:text-3xl font-bold text-primary tabular-nums">
            {value === null ? "–" : String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName: "",
          email,
          tags: [liveEvent.registrationTag],
          hp,
        }),
      });
      const data = await res.json();
      if (!res.ok && data.error !== "duplicate") {
        setStatus("error");
        return;
      }
    } catch {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setFirstName("");
  };

  return (
    <div
      id="register"
      className="bg-white border border-border rounded-3xl p-8 shadow-[0_20px_60px_-24px_rgba(46,38,30,0.25)] scroll-mt-28"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-6"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mx-auto mb-4">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <p className="font-bold text-xl mb-1">Your seat is saved! 🎉</p>
            <p className="text-muted-foreground text-sm mb-6">
              We&apos;ll email you the stream link before the event. See you Saturday!
            </p>
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-sm font-semibold hover:bg-muted transition-colors"
            >
              <CalendarPlus className="w-4 h-4 text-primary" />
              Add to Google Calendar
            </a>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="font-semibold text-lg mb-1">Save your free seat</p>
            <p className="text-muted-foreground text-sm mb-6">
              Register with your email and we&apos;ll send you the stream link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={status === "loading"}
                className="w-full h-12 px-5 rounded-xl bg-muted/50 border border-border text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/25 transition-all disabled:opacity-50"
              />
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full h-12 px-5 rounded-xl bg-muted/50 border border-border text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/25 transition-all disabled:opacity-50"
              />
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="cta-shine relative overflow-hidden w-full h-12 rounded-xl bg-primary text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {status === "loading" ? (
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                ) : (
                  <> Reserve my spot — it&apos;s free <Send className="w-3.5 h-3.5" /> </>
                )}
              </button>
              {status === "error" && (
                <p className="text-sm text-primary text-center">
                  Something went wrong — please try again.
                </p>
              )}
            </form>

            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              Add to Google Calendar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FACTS = [
  { icon: CalendarDays, label: liveEvent.dateLabel },
  { icon: Clock, label: liveEvent.timeLabel },
  { icon: MapPin, label: liveEvent.locationLabel },
  { icon: Ticket, label: liveEvent.priceLabel },
];

export function LiveEventLanding() {
  return (
    <main className="min-h-screen bg-[#FAF8F2]">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              <Radio className="w-3.5 h-3.5" />
              Free Live Event
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-5">
              {liveEvent.name.split(":")[0]}: <br />
              <span className="text-primary">{liveEvent.name.split(":")[1]?.trim()}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              {liveEvent.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10"
          >
            {FACTS.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-sm text-foreground/80">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </span>
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <CountdownTimer />
            <a
              href="#register"
              className="cta-shine relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Save my free seat
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Details + Registration ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: what to expect + agenda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl font-bold mb-4">What to expect</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{liveEvent.description}</p>

            <ul className="space-y-3 mb-10">
              {liveEvent.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-xl font-bold mb-4">The rundown</h3>
            <ol className="relative border-l border-border ml-3 space-y-6">
              {liveEvent.agenda.map((slot) => (
                <li key={slot.time} className="pl-6 relative">
                  <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-primary" />
                  <p className="text-xs font-mono text-primary uppercase tracking-widest">{slot.time}</p>
                  <p className="text-sm font-medium text-foreground/90 mt-0.5">{slot.title}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Right: registration card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:sticky lg:top-28"
          >
            <RegistrationForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { Send, MapPin, Compass, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PERKS = [
  { icon: MapPin,   text: "Hidden gem destinations" },
  { icon: Compass,  text: "Honest travel guides" },
  { icon: Globe,    text: "Nomad & budget tips" },
];

export function NewsletterCTA() {
  const [email, setEmail]   = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: "", lastName: "", email, tags: ["Newsletter"] }),
      });
      const data = await res.json();
      if (!res.ok && data.error !== "duplicate") { setStatus("idle"); return; }
    } catch {
      setStatus("idle"); return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <section id="contact" className="relative bg-foreground overflow-hidden">
      {/* Ambient glows */}
      <div aria-hidden className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
              Join the community
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Never miss the{" "}
              <em className="text-primary not-italic">next adventure</em>
            </h2>
            <p className="text-background/55 text-base leading-relaxed mb-8 max-w-md">
              Real travel stories, honest guides, and nomad insights delivered straight to your inbox, no fluff, no spam.
            </p>

            {/* Perks */}
            <ul className="space-y-3 mb-10 lg:mb-0">
              {PERKS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-background/70 text-sm">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/15 shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right card ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="bg-background/5 border border-background/10 rounded-3xl p-8 backdrop-blur-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-6"
                  >
                    <div className="text-4xl mb-3">🎉</div>
                    <p className="text-white font-bold text-xl mb-1">You&apos;re in!</p>
                    <p className="text-background/55 text-sm">Welcome to the community. First email coming soon.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <p className="text-white font-semibold text-lg mb-1">Get the newsletter</p>
                    <p className="text-background/45 text-sm mb-6">Insider travel hacks you won&apos;t find on Google.</p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading"}
                        className="w-full h-12 px-5 rounded-xl bg-background/8 border border-background/15 text-background placeholder:text-background/35 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/25 transition-all disabled:opacity-50"
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
                          <> Subscribe <Send className="w-3.5 h-3.5" /> </>
                        )}
                      </button>
                    </form>

                    <p className="text-background/30 text-xs text-center mt-4">
                      No spam. Unsubscribe any time.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

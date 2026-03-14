'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
  CheckCircle2, Heart, Package, RefreshCw, type LucideIcon,
} from 'lucide-react';
import type { Phase, InspirationQuote } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
};

interface PhaseSidebarProps {
  phases: Phase[];
  activePhase: string;
  onSwitchPhase: (id: string) => void;
  checkedTasks: Set<string>;
  packedItems: Set<string>;
  favoritedDests: Set<string>;
  connectedPlatforms: Set<string>;
  quotes: InspirationQuote[];
}

export default function PhaseSidebar({
  phases,
  activePhase,
  onSwitchPhase,
  checkedTasks,
  packedItems,
  favoritedDests,
  connectedPlatforms,
  quotes,
}: PhaseSidebarProps) {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);

  // Auto-rotate quotes every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteVisible(false);
      setTimeout(() => {
        setQuoteIndex((i) => (i + 1) % quotes.length);
        setQuoteVisible(true);
      }, 300);
    }, 8000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleRefreshQuote = () => {
    setQuoteVisible(false);
    setTimeout(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
      setQuoteVisible(true);
    }, 200);
  };

  const totalTasks = phases.reduce((acc, p) => acc + p.sections.flatMap((s) => s.tasks).length, 0);
  const totalDone = phases.reduce((acc, p) => {
    return acc + p.sections.flatMap((s) => s.tasks).filter((t) => checkedTasks.has(t.id)).length;
  }, 0);
  const phasesStarted = phases.filter((p) =>
    p.sections.flatMap((s) => s.tasks).some((t) => checkedTasks.has(t.id))
  ).length;

  return (
    <div className="sticky top-24 space-y-5">
      {/* Daily inspiration */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Daily Inspiration
        </p>
        <div className="min-h-[80px]">
          <AnimatePresence mode="wait">
            {quoteVisible && (
              <motion.div
                key={quoteIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm text-foreground leading-relaxed italic">
                  &ldquo;{quotes[quoteIndex].text}&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-2">— {quotes[quoteIndex].author}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={handleRefreshQuote}
          className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          New quote
        </button>
      </div>

      {/* Quick stats */}
      <div className="bg-card rounded-2xl border border-border p-5">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Quick Stats
        </p>
        <div className="space-y-2.5">
          {[
            { icon: <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />, label: 'Tasks completed', value: totalDone },
            { icon: <Compass className="w-3.5 h-3.5 text-primary" />, label: 'Phases started', value: phasesStarted },
            { icon: <Heart className="w-3.5 h-3.5 text-rose-500" />, label: 'Destinations saved', value: favoritedDests.size },
            { icon: <Package className="w-3.5 h-3.5 text-amber-600" />, label: 'Items packed', value: packedItems.size },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                {s.icon}
                {s.label}
              </div>
              <span className="font-semibold text-foreground tabular-nums">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

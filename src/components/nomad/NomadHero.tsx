'use client';

import { motion } from 'framer-motion';
import {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
  Layers, ListChecks, Luggage, Wrench, type LucideIcon,
} from 'lucide-react';
import type { Phase } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
};

interface NomadHeroProps {
  phases: Phase[];
  checkedCount: number;
  totalTasks: number;
  packingTotal: number;
  toolCount: number;
  activePhase: string;
  onSwitchPhase: (id: string) => void;
}

export default function NomadHero({
  phases,
  checkedCount,
  totalTasks,
  packingTotal,
  toolCount,
  activePhase,
  onSwitchPhase,
}: NomadHeroProps) {
  const progressPct = totalTasks > 0 ? (checkedCount / totalTasks) * 100 : 0;

  const stats: { icon: LucideIcon; value: string; label: string }[] = [
    { icon: Layers, value: phases.length.toString(), label: 'Phases' },
    { icon: ListChecks, value: totalTasks.toString(), label: 'Tasks' },
    { icon: Luggage, value: packingTotal.toString(), label: 'Pack Items' },
    { icon: Wrench, value: toolCount.toString(), label: 'Tools' },
  ];

  return (
    <section className="relative bg-[#2E261E] pt-28 md:pt-32 pb-12 md:pb-14 px-4 sm:px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[90%] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-[35%] h-[60%] rounded-full bg-secondary/10 blur-3xl" />
      </div>
      {/* Bottom hairline */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-secondary/30 text-[10px] font-mono text-secondary uppercase tracking-widest mb-5">
              <Compass className="w-3.5 h-3.5" />
              UDream Nomad Playbook
            </span>

            <h1 className="font-display text-[#EBE6D9] text-4xl sm:text-5xl font-bold leading-tight mb-4">
              6 Phases to{' '}
              <span style={{ fontFamily: 'var(--font-script)' }} className="text-secondary">Freedom</span>
            </h1>

            <p className="text-[#EBE6D9]/65 text-base leading-relaxed max-w-lg mb-6">
              The complete system for becoming a digital nomad ~ from mindset and income to landing in your first destination and scaling long-term.
            </p>

            {/* Phase pills */}
            <div className="flex flex-wrap gap-2">
              {phases.map((phase, i) => {
                const Icon = ICON_MAP[phase.iconName] ?? Compass;
                const isActive = activePhase === phase.id;
                return (
                  <button
                    key={phase.id}
                    onClick={() => onSwitchPhase(phase.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs transition-all duration-200 font-medium
                      ${isActive
                        ? 'border-secondary/70 text-[#2E261E] bg-secondary shadow-[0_4px_16px_-4px_rgba(212,163,115,0.5)]'
                        : 'border-white/15 text-white/55 hover:border-secondary/50 hover:text-secondary/90 hover:bg-white/5'
                      }`}
                  >
                    <span className={`text-[10px] font-mono ${isActive ? 'text-[#2E261E]/60' : 'text-white/30'}`}>{i + 1}</span>
                    <Icon className="w-3 h-3" />
                    {phase.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Overall progress bar */}
            <div className="mt-7 max-w-md">
              <div className="flex justify-between items-baseline text-xs font-mono mb-2">
                <span className="text-white/40 uppercase tracking-wider">Overall Progress</span>
                <span className="text-[#EBE6D9]/70">
                  <span className="text-secondary font-bold">{checkedCount}</span> / {totalTasks} tasks · {Math.round(progressPct)}%
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Right: stats cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full lg:w-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4 lg:min-w-[136px] backdrop-blur-sm hover:bg-white/[0.08] hover:border-secondary/30 transition-colors duration-300"
              >
                <s.icon className="w-4 h-4 text-secondary/70 mb-2.5" />
                <p className="font-display text-[#E8B558] text-2xl sm:text-3xl font-bold leading-none">{s.value}</p>
                <p className="text-white/45 text-[11px] uppercase tracking-wider mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

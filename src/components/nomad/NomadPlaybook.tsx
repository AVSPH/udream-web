'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
  type LucideIcon,
} from 'lucide-react';
import NomadHero from './NomadHero';
import PhaseTabBar from './PhaseTabBar';
import PhasePanel from './PhasePanel';
import PhaseSidebar from './PhaseSidebar';
import {
  PHASES,
  DESTINATIONS,
  PACKING_CATEGORIES,
  INCOME_STREAMS,
  NETWORK_PLATFORMS,
  INSPIRATION_QUOTES,
  TOTAL_TASK_COUNT,
  TOTAL_PACKING_COUNT,
} from './data';
import type { ExpenseEntry } from './types';
import PlaybookGate from './PlaybookGate';
import { AIChatbot } from './AIChatbot';

const PHASE_ICONS: Record<string, LucideIcon> = {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
};

export default function NomadPlaybook() {
  const [unlocked, setUnlocked] = useState(false);
  const [activePhase, setActivePhase] = useState('mindset');
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set());
  const [packedItems, setPackedItems] = useState<Set<string>>(new Set());
  const [favoritedDests, setFavoritedDests] = useState<Set<string>>(new Set());
  const [expenses, setExpenses] = useState<ExpenseEntry[]>([]);
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('nomad-playbook-user');
      if (savedUser) setUnlocked(true);
      const savedTasks = localStorage.getItem('nomad-playbook-tasks');
      if (savedTasks) setCheckedTasks(new Set(JSON.parse(savedTasks)));
      const savedPacked = localStorage.getItem('nomad-playbook-packed');
      if (savedPacked) setPackedItems(new Set(JSON.parse(savedPacked)));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (!unlocked) return;
    localStorage.setItem('nomad-playbook-tasks', JSON.stringify([...checkedTasks]));
  }, [checkedTasks, unlocked]);

  useEffect(() => {
    if (!unlocked) return;
    localStorage.setItem('nomad-playbook-packed', JSON.stringify([...packedItems]));
  }, [packedItems, unlocked]);

  const handleUnlock = useCallback((name: string, email: string) => {
    localStorage.setItem('nomad-playbook-user', JSON.stringify({ name, email }));
    setUnlocked(true);
  }, []);

  const toggleTask     = useCallback((id: string) => setCheckedTasks((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; }), []);
  const togglePacked   = useCallback((id: string) => setPackedItems((p)  => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; }), []);
  const toggleFav      = useCallback((id: string) => setFavoritedDests((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; }), []);
  const togglePlatform = useCallback((id: string) => setConnectedPlatforms((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; }), []);

  const addExpense    = useCallback((entry: Omit<ExpenseEntry, 'id'>) => setExpenses((p) => [...p, { ...entry, id: crypto.randomUUID() }]), []);
  const deleteExpense = useCallback((id: string) => setExpenses((p) => p.filter((e) => e.id !== id)), []);

  const handleSwitchPhase = (id: string) => {
    setActivePhase(id);
    setTimeout(() => {
      document.getElementById('phase-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const currentPhase = PHASES.find((p) => p.id === activePhase) ?? PHASES[0];

  if (!unlocked) return <PlaybookGate onUnlock={handleUnlock} />;

  return (
    <div className="min-h-screen bg-background">
      <AIChatbot />
      <NomadHero
        phases={PHASES}
        checkedCount={checkedTasks.size}
        totalTasks={TOTAL_TASK_COUNT}
        packingTotal={TOTAL_PACKING_COUNT}
        activePhase={activePhase}
        onSwitchPhase={handleSwitchPhase}
      />

      {/* Mobile-only tab bar */}
      <PhaseTabBar
        phases={PHASES}
        activePhase={activePhase}
        onSwitch={handleSwitchPhase}
        checkedTasks={checkedTasks}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-[196px_1fr] xl:grid-cols-[196px_1fr_240px] gap-6 xl:gap-8">

          {/* ── Left: sticky phase navigation (desktop only) ────────────── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest px-3 mb-3">
                Phases
              </p>
              <nav className="space-y-0.5">
                {PHASES.map((phase) => {
                  const Icon = PHASE_ICONS[phase.iconName] ?? Compass;
                  const tasks = phase.sections.flatMap((s) => s.tasks);
                  const done  = tasks.filter((t) => checkedTasks.has(t.id)).length;
                  const total = tasks.length;
                  const pct   = total > 0 ? (done / total) * 100 : 0;
                  const isActive = activePhase === phase.id;

                  return (
                    <button
                      key={phase.id}
                      onClick={() => handleSwitchPhase(phase.id)}
                      className={`w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all duration-200 border
                        ${isActive
                          ? 'bg-primary/8 border-primary/15 text-primary'
                          : 'border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold leading-snug truncate">{phase.tabLabel}</p>
                        <div className="mt-1.5 h-0.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                          />
                        </div>
                        <p className="text-[10px] text-muted-foreground/60 mt-0.5 font-mono">{done}/{total}</p>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ── Center: phase content ───────────────────────────────────── */}
          <main id="phase-content" className="flex-1 min-w-0 scroll-mt-24">
            <AnimatePresence mode="wait">
              <PhasePanel
                key={activePhase}
                phase={currentPhase}
                checkedTasks={checkedTasks}
                onToggleTask={toggleTask}
                packedItems={packedItems}
                onTogglePacked={togglePacked}
                favoritedDests={favoritedDests}
                onToggleFav={toggleFav}
                expenses={expenses}
                onAddExpense={addExpense}
                onDeleteExpense={deleteExpense}
                connectedPlatforms={connectedPlatforms}
                onTogglePlatform={togglePlatform}
                destinations={DESTINATIONS}
                packingCategories={PACKING_CATEGORIES}
                incomeStreams={INCOME_STREAMS}
                networkPlatforms={NETWORK_PLATFORMS}
              />
            </AnimatePresence>
          </main>

          {/* ── Right: stats + quote sidebar ────────────────────────────── */}
          <aside className="hidden xl:block">
            <PhaseSidebar
              phases={PHASES}
              activePhase={activePhase}
              onSwitchPhase={handleSwitchPhase}
              checkedTasks={checkedTasks}
              packedItems={packedItems}
              favoritedDests={favoritedDests}
              connectedPlatforms={connectedPlatforms}
              quotes={INSPIRATION_QUOTES}
            />
          </aside>

        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
  Target, Search, Map, Handshake, Landmark, Shield, FileText, Globe,
  BarChart3, Zap, Building2, ClipboardCheck, Clock,
  type LucideIcon,
} from 'lucide-react';
import TaskCard from './TaskCard';
import TipBox from './TipBox';
import type { Phase, ExpenseEntry } from './types';
import DestinationRanker from './DestinationRanker';
import RunwayCalculator from './RunwayCalculator';
import PackingList from './PackingList';
import ExpenseTracker from './ExpenseTracker';
import IncomeStackBars from './IncomeStackBars';
import NetworkCards from './NetworkCards';
import type { Destination, PackingCategory, IncomeStream, NetworkPlatform } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
  Target, Search, Map, Handshake, Landmark, Shield, FileText, Globe,
  BarChart3, Zap, Building2, ClipboardCheck, Clock,
};

function getIcon(name: string, className?: string) {
  const Icon = ICON_MAP[name] ?? Compass;
  return <Icon className={className ?? 'w-4 h-4'} />;
}

interface PhasePanelProps {
  phase: Phase;
  checkedTasks: Set<string>;
  onToggleTask: (id: string) => void;
  packedItems: Set<string>;
  onTogglePacked: (id: string) => void;
  favoritedDests: Set<string>;
  onToggleFav: (id: string) => void;
  expenses: ExpenseEntry[];
  onAddExpense: (entry: Omit<ExpenseEntry, 'id'>) => void;
  onDeleteExpense: (id: string) => void;
  connectedPlatforms: Set<string>;
  onTogglePlatform: (id: string) => void;
  destinations: Destination[];
  packingCategories: PackingCategory[];
  incomeStreams: IncomeStream[];
  networkPlatforms: NetworkPlatform[];
}

export default function PhasePanel({
  phase,
  checkedTasks,
  onToggleTask,
  packedItems,
  onTogglePacked,
  favoritedDests,
  onToggleFav,
  expenses,
  onAddExpense,
  onDeleteExpense,
  connectedPlatforms,
  onTogglePlatform,
  destinations,
  packingCategories,
  incomeStreams,
  networkPlatforms,
}: PhasePanelProps) {
  const phaseTasks = phase.sections.flatMap((s) => s.tasks);
  const doneCount = phaseTasks.filter((t) => checkedTasks.has(t.id)).length;
  const total = phaseTasks.length;
  const progressPct = total > 0 ? (doneCount / total) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      {/* Phase Header */}
      <div className="relative bg-card rounded-2xl border border-border p-6 mb-6 overflow-hidden">
        {/* Big ghost number */}
        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[7rem] font-bold leading-none text-foreground/[0.03] select-none pointer-events-none font-display">
          {String(phase.index).padStart(2, '0')}
        </span>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-primary">{getIcon(phase.iconName, 'w-6 h-6')}</span>
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Phase {String(phase.index).padStart(2, '0')} of 06
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{phase.timing}</p>
              </div>
            </div>
          </div>

          <h2 className="font-display text-3xl font-bold leading-tight mb-2">
            {phase.title}{' '}
            <em className="text-primary not-italic">{phase.titleEmphasis}</em>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{phase.description}</p>

          {/* Section pills — quick jump */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {phase.sections.map((s) => (
              <a
                key={s.id}
                href={`#section-${s.id}`}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                {getIcon(s.icon, 'w-3 h-3')}
                {s.title}
              </a>
            ))}
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mt-4">
            <div className="flex-1 max-w-xs h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              <span className="text-primary font-bold">{doneCount}</span> / {total} {phase.itemLabel ?? 'tasks'}
            </span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {phase.sections.map((section) => (
          <div key={section.id} id={`section-${section.id}`} className="bg-card rounded-2xl border border-border p-5 scroll-mt-24">
            {/* Section header */}
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
              <span className="text-primary">{getIcon(section.icon, 'w-4 h-4')}</span>
              <h3 className="font-display text-base font-bold">{section.title}</h3>
              <span className="ml-auto text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {section.tasks.filter((t) => checkedTasks.has(t.id)).length}/{section.tasks.length}
              </span>
            </div>

            {/* Tasks */}
            <div className="space-y-2">
              {section.tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  checked={checkedTasks.has(task.id)}
                  onToggle={onToggleTask}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Tip box */}
        {phase.tip && <TipBox tip={phase.tip} />}

        {/* Interactive tools */}
        {phase.tool === 'destination-ranker' && (
          <DestinationRanker
            destinations={destinations}
            favorites={favoritedDests}
            onToggleFav={onToggleFav}
          />
        )}
        {phase.tool === 'runway-calculator' && <RunwayCalculator />}
        {phase.tool === 'packing-list' && (
          <PackingList
            categories={packingCategories}
            packedItems={packedItems}
            onToggle={onTogglePacked}
          />
        )}
        {phase.tool === 'expense-tracker' && (
          <ExpenseTracker
            expenses={expenses}
            onAdd={onAddExpense}
            onDelete={onDeleteExpense}
          />
        )}
        {phase.tool === 'income-stack' && (
          <IncomeStackBars streams={incomeStreams} />
        )}
        {phase.tool === 'network-cards' && (
          <NetworkCards
            platforms={networkPlatforms}
            connected={connectedPlatforms}
            onToggle={onTogglePlatform}
          />
        )}
      </div>
    </motion.div>
  );
}

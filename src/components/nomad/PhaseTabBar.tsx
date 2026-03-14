'use client';

import {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
  type LucideIcon,
} from 'lucide-react';
import type { Phase } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Compass, Briefcase, ClipboardList, Backpack, PlaneLanding, Rocket,
};

interface PhaseTabBarProps {
  phases: Phase[];
  activePhase: string;
  onSwitch: (id: string) => void;
  checkedTasks: Set<string>;
}

export default function PhaseTabBar({ phases, activePhase, onSwitch, checkedTasks }: PhaseTabBarProps) {
  return (
    <div className="lg:hidden sticky top-16 z-[100] bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto scrollbar-none">
        {phases.map((phase) => {
          const Icon = ICON_MAP[phase.iconName] ?? Compass;
          const isActive = activePhase === phase.id;

          // Count completed tasks for this phase
          const phaseTasks = phase.sections.flatMap((s) => s.tasks);
          const doneCount = phaseTasks.filter((t) => checkedTasks.has(t.id)).length;
          const total = phaseTasks.length;
          const allDone = total > 0 && doneCount === total;

          return (
            <button
              key={phase.id}
              onClick={() => onSwitch(phase.id)}
              className={`relative flex items-center gap-2 px-4 py-4 whitespace-nowrap text-sm font-medium transition-colors border-b-2 shrink-0
                ${isActive
                  ? 'text-primary border-primary'
                  : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'
                }`}
            >
              <Icon className="w-4 h-4" />
              <span>{phase.tabLabel}</span>
              <span className={`inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-xs font-semibold
                ${allDone
                  ? 'bg-green-500 text-white'
                  : isActive
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {doneCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import {
  Laptop, Shirt, HeartPulse, FileText, CheckSquare, type LucideIcon,
} from 'lucide-react';
import type { PackingCategory } from './types';

const ICON_MAP: Record<string, LucideIcon> = {
  Laptop, Shirt, HeartPulse, FileText,
};

interface PackingListProps {
  categories: PackingCategory[];
  packedItems: Set<string>;
  onToggle: (id: string) => void;
}

export default function PackingList({ categories, packedItems, onToggle }: PackingListProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <CheckSquare className="w-4 h-4 text-primary" />
        <h3 className="font-display text-base font-bold">Interactive Packing Tracker</h3>
        <span className="ml-auto text-xs text-muted-foreground">
          {packedItems.size} packed
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        Aim for a 40L backpack maximum ~ if it doesn&apos;t fit, you don&apos;t need it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] ?? Laptop;
          const catDone = cat.items.filter((i) => packedItems.has(i.id)).length;

          return (
            <div key={cat.id} className="bg-background rounded-xl border border-border p-4">
              {/* Category header */}
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-border">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold">{cat.title}</span>
                <span className="ml-auto text-xs font-mono text-muted-foreground">{catDone}/{cat.items.length}</span>
              </div>

              {/* Items */}
              <div className="space-y-1.5">
                {cat.items.map((item) => {
                  const isPacked = packedItems.has(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => onToggle(item.id)}
                      className="w-full flex items-center gap-2 text-left py-1 transition-colors"
                    >
                      <div className={`w-4 h-4 rounded-sm border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-150
                        ${isPacked ? 'bg-green-500 border-green-500' : 'border-border bg-background'}`}
                      >
                        {isPacked && (
                          <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white fill-none stroke-current stroke-2">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-xs transition-colors ${isPacked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Category progress bar */}
              <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-green-400"
                  animate={{ width: `${(catDone / cat.items.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

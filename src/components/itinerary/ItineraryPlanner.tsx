"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Calendar, MapPin, Clock, GripVertical, FileDown, ChevronDown, ChevronUp } from 'lucide-react';
import dynamic from 'next/dynamic';
import ItineraryPDFDocument from './ItineraryPDFDocument';
import { DatePickerWithRange } from '../ui/date-range-picker';
import { format } from 'date-fns';

import {
  DragDropProvider,
  DragDropEvents,
} from '@dnd-kit/react';
import { useSortable } from '@dnd-kit/react/sortable';
// The new dnd-kit natively handles sorting layouts and collisions within DOM.
// We define a simple arrayMove util here since it's no longer exported centrally.
function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const newArray = array.slice();
  newArray.splice(to < 0 ? newArray.length + to : to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}


// Dynamic import for PDF download to prevent SSR issues
const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false, loading: () => <div className="text-sm font-medium text-white/80 animate-pulse">Loading PDF engine...</div> }
);

export type Activity = {
  id: string;
  time: string;
  title: string;
  location: string;
  notes: string;
};

export type DayPlan = {
  id: string;
  date: string;
  theme: string;
  activities: Activity[];
};

export type ItineraryData = {
  tripTitle: string;
  destination: string;
  startDate: string;
  endDate: string;
  days: DayPlan[];
};

// --- Sortable Item Component ---
function SortableActivityItem({
  activity,
  dayId,
  index,
  updateActivity,
  removeActivity,
}: {
  activity: Activity;
  dayId: string;
  index: number;
  updateActivity: (dayId: string, activityId: string, field: keyof Activity, value: string) => void;
  removeActivity: (dayId: string, activityId: string) => void;
}) {
  const {
    ref,
    handleRef,
    isDragging,
  } = useSortable({ id: activity.id, index, group: dayId });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      className={`group flex gap-4 p-5 rounded-2xl border ${isDragging ? 'border-primary shadow-xl bg-primary/5 opacity-80' : 'border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'} transition-colors relative`}
    >
      <div 
        ref={handleRef}
        className="flex-shrink-0 pt-3 text-muted-foreground cursor-grab hover:text-foreground transition-colors active:cursor-grabbing outline-none"
      >
        <GripVertical className="w-5 h-5" />
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-5 pointer-events-auto">
        <div className="md:col-span-3">
          <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Time</span>
          </div>
          <input
            type="time"
            value={activity.time}
            onChange={(e) => updateActivity(dayId, activity.id, 'time', e.target.value)}
            className="w-full px-3 py-2.5 bg-background border border-input rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary text-sm font-medium outline-none transition-all"
          />
        </div>
        <div className="md:col-span-9 space-y-3">
          <input
            type="text"
            placeholder="Activity Title (e.g. Visit Louvre)"
            value={activity.title}
            onChange={(e) => updateActivity(dayId, activity.id, 'title', e.target.value)}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary font-semibold text-foreground outline-none transition-all placeholder-muted-foreground"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Location"
              value={activity.location}
              onChange={(e) => updateActivity(dayId, activity.id, 'location', e.target.value)}
              className="w-full px-4 py-2.5 bg-background border border-input rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary text-sm font-medium outline-none transition-all placeholder-muted-foreground"
            />
            <input
              type="text"
              placeholder="Notes / Expense"
              value={activity.notes}
              onChange={(e) => updateActivity(dayId, activity.id, 'notes', e.target.value)}
              className="w-full px-4 py-2.5 bg-background border border-input rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary text-sm font-medium outline-none transition-all placeholder-muted-foreground"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => removeActivity(dayId, activity.id)}
        className="absolute right-4 top-4 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-colors opacity-0 group-hover:opacity-100"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
// ------------------------------

export default function ItineraryPlanner() {
  const [data, setData] = useState<ItineraryData>({
    tripTitle: '',
    destination: '',
    startDate: '',
    endDate: '',
    days: [
      {
        id: crypto.randomUUID(),
        date: 'Day 1',
        theme: 'Arrival & Exploration',
        activities: [
          {
            id: crypto.randomUUID(),
            time: '14:00',
            title: 'Check-in at Hotel',
            location: 'City Center',
            notes: 'Rest and unpack',
          }
        ],
      }
    ],
  });

  const [expandedDays, setExpandedDays] = useState<string[]>([data.days[0].id]);

  const handleDragEnd = (event: Parameters<DragDropEvents['dragend']>[0], dayId: string) => {
    const { operation, canceled } = event;
    if (canceled || !operation?.source || !operation?.target) return;

    const active = operation.source;
    const over = operation.target;

    if (active.id !== over.id) {
      setData((prev) => {
        const dayIndex = prev.days.findIndex(d => d.id === dayId);
        if (dayIndex === -1) return prev;

        const day = prev.days[dayIndex];
        const oldIndex = day.activities.findIndex(a => a.id === active.id);
        const newIndex = day.activities.findIndex(a => a.id === over.id);

        if (oldIndex === -1 || newIndex === -1) return prev;

        const newActivities = arrayMove(day.activities, oldIndex, newIndex);
        const newDays = [...prev.days];
        newDays[dayIndex] = { ...day, activities: newActivities };

        return { ...prev, days: newDays };
      });
    }
  };

  const updateMetaData = (field: keyof Omit<ItineraryData, 'days'>, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const addDay = () => {
    const newDayId = crypto.randomUUID();
    setData((prev) => ({
      ...prev,
      days: [
        ...prev.days,
        {
          id: newDayId,
          date: `Day ${prev.days.length + 1}`,
          theme: '',
          activities: [],
        },
      ],
    }));
    setExpandedDays(prev => [...prev, newDayId]);
  };

  const removeDay = (id: string) => {
    setData((prev) => ({ ...prev, days: prev.days.filter((d) => d.id !== id) }));
  };

  const updateDay = (dayId: string, field: keyof Omit<DayPlan, 'id' | 'activities'>, value: string) => {
    setData((prev) => ({
      ...prev,
      days: prev.days.map((d) => (d.id === dayId ? { ...d, [field]: value } : d)),
    }));
  };

  const addActivity = (dayId: string) => {
    setData((prev) => ({
      ...prev,
      days: prev.days.map((d) => {
        if (d.id === dayId) {
          return {
            ...d,
            activities: [
              ...d.activities,
              {
                id: crypto.randomUUID(),
                time: '',
                title: '',
                location: '',
                notes: '',
              },
            ],
          };
        }
        return d;
      }),
    }));
  };

  const removeActivity = (dayId: string, activityId: string) => {
    setData((prev) => ({
      ...prev,
      days: prev.days.map((d) => {
        if (d.id === dayId) {
          return {
            ...d,
            activities: d.activities.filter((a) => a.id !== activityId),
          };
        }
        return d;
      }),
    }));
  };

  const updateActivity = (dayId: string, activityId: string, field: keyof Activity, value: string) => {
    setData((prev) => ({
      ...prev,
      days: prev.days.map((d) => {
        if (d.id === dayId) {
          return {
            ...d,
            activities: d.activities.map((a) => (a.id === activityId ? { ...a, [field]: value } : a)),
          };
        }
        return d;
      }),
    }));
  };

  const toggleDayExpansion = (dayId: string) => {
    setExpandedDays(prev => 
      prev.includes(dayId) ? prev.filter(id => id !== dayId) : [...prev, dayId]
    );
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-medium text-foreground tracking-tight mb-2">Itinerary Planner</h1>
          <p className="text-lg text-muted-foreground font-body">Design your perfect trip and generate a beautiful interactive PDF.</p>
        </div>
        
        {/* PDF Download Action */}
        <div className="flex-shrink-0 bg-foreground hover:bg-foreground/90 text-background rounded-xl shadow-xl shadow-foreground/10 transition-all duration-200 transform hover:-translate-y-1">
          <PDFDownloadLink
            document={<ItineraryPDFDocument data={data} />}
            fileName={`${data.tripTitle ? data.tripTitle.replace(/\s+/g, '_') : 'My_Trip'}_Itinerary.pdf`}
            className="flex items-center gap-2 px-6 py-3.5 font-semibold"
          >
            {({ loading }) => (
              <>
                <FileDown className={`w-5 h-5 ${loading ? 'animate-bounce' : ''}`} />
                {loading ? 'Preparing Document...' : 'Download PDF'}
              </>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Trip Meta */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-card rounded-3xl shadow-sm border border-border p-8 sticky top-8">
            <h2 className="font-display text-2xl font-medium text-foreground mb-6 flex items-center gap-3">
              <span className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <MapPin className="w-5 h-5" />
              </span>
              Trip Details
            </h2>
            <div className="space-y-6 font-body">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Trip Title</label>
                <input
                  type="text"
                  placeholder="e.g. Summer in Paris"
                  value={data.tripTitle}
                  onChange={(e) => updateMetaData('tripTitle', e.target.value)}
                  className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-medium placeholder-muted-foreground text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Destination</label>
                <input
                  type="text"
                  placeholder="e.g. Paris, France"
                  value={data.destination}
                  onChange={(e) => updateMetaData('destination', e.target.value)}
                  className="w-full px-4 py-3.5 bg-background border border-input rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none font-medium placeholder-muted-foreground text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Travel Dates</label>
                <DatePickerWithRange 
                  className="w-full"
                  date={{
                    from: data.startDate ? new Date(data.startDate + 'T00:00:00') : undefined,
                    to: data.endDate ? new Date(data.endDate + 'T00:00:00') : undefined,
                  }}
                  setDate={(newDate) => {
                    setData((prev) => ({
                      ...prev,
                      startDate: newDate?.from ? format(newDate.from, 'yyyy-MM-dd') : '',
                      endDate: newDate?.to ? format(newDate.to, 'yyyy-MM-dd') : '',
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Daily Builder */}
        <div className="lg:col-span-8 space-y-6">
          <AnimatePresence mode="popLayout">
            {data.days.map((day) => {
              const isExpanded = expandedDays.includes(day.id);
              return (
                <motion.div
                  key={day.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="bg-card rounded-3xl shadow-sm border border-border overflow-hidden"
                >
                  {/* Day Header */}
                  <div className="bg-muted/30 px-6 py-5 flex items-center justify-between border-b border-border">
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 mr-4">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => toggleDayExpansion(day.id)}
                          className="p-1.5 hover:bg-muted/50 rounded-lg transition-colors text-muted-foreground"
                        >
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5"/>}
                        </button>
                        <input
                          type="text"
                          value={day.date}
                          onChange={(e) => updateDay(day.id, 'date', e.target.value)}
                          placeholder="Day 1"
                          className="font-display font-medium text-2xl bg-transparent border-none focus:ring-0 p-0 text-foreground placeholder-muted-foreground w-full outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        value={day.theme}
                        onChange={(e) => updateDay(day.id, 'theme', e.target.value)}
                        placeholder="Theme (e.g. Exploring Old Town)"
                        className="text-base font-body text-muted-foreground bg-transparent border-none focus:ring-0 p-0 placeholder-muted-foreground w-full outline-none pt-0.5"
                      />
                    </div>
                    <button
                      onClick={() => removeDay(day.id)}
                      className="p-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-colors flex-shrink-0"
                      title="Remove Day"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Day Content (Activities) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 space-y-4">
                          {day.activities.length === 0 ? (
                            <div className="text-center py-10 bg-background text-muted-foreground border-2 border-dashed border-border rounded-2xl font-medium">
                              No activities planned yet. Enhance your trip by adding some above!
                            </div>
                          ) : (
                            <DragDropProvider
                              onDragEnd={(event) => handleDragEnd(event, day.id)}
                            >
                              <div className="space-y-4">
                                {day.activities.map((activity, index) => (
                                  <SortableActivityItem 
                                    key={activity.id}
                                    activity={activity}
                                    dayId={day.id}
                                    index={index}
                                    updateActivity={updateActivity}
                                    removeActivity={removeActivity}
                                  />
                                ))}
                              </div>
                            </DragDropProvider>
                          )}
                          
                          <button
                            onClick={() => addActivity(day.id)}
                            className="w-full py-4 mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-primary bg-primary/5 hover:bg-primary/10 rounded-2xl transition-colors border-2 border-dashed border-primary/20 hover:border-primary/40"
                          >
                            <Plus className="w-5 h-5" />
                            Add New Activity
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>

          <motion.button
            layout
            onClick={addDay}
            className="w-full py-5 flex items-center justify-center gap-2 font-semibold text-foreground bg-card hover:bg-card/80 border-2 border-dashed border-border hover:border-primary/40 focus:ring-4 focus:ring-primary/10 rounded-3xl transition-all shadow-sm outline-none"
          >
            <Calendar className="w-6 h-6 text-primary" />
            Add Another Day
          </motion.button>
        </div>
      </div>
    </div>
  );
}

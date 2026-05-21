"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Phone, Globe, Compass, Laptop,
  Calculator, Clock, Heart, Home as HomeIcon, CheckCircle2,
  ArrowRight, ArrowLeft, Loader2, Sparkles
} from "lucide-react";

type QuizData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  currentloc: string;
  travel_exp: string;
  work: string;
  budget: string;
  duration: string;
  vibefocus: string;
  accomodation: string;
};

const initialQuizData: QuizData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  currentloc: "",
  travel_exp: "",
  work: "",
  budget: "",
  duration: "",
  vibefocus: "",
  accomodation: "",
};

export default function CuratorQuiz() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuizData>(initialQuizData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionSelect = (field: keyof QuizData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (): boolean => {
    setError(null);
    if (step === 1) {
      if (!formData.name.trim()) {
        setError("Name is required");
        return false;
      }
      if (!formData.email.trim()) {
        setError("Email is required");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        return false;
      }
      if (!formData.phone.trim()) {
        setError("Contact number is required");
        return false;
      }
      if (!formData.country.trim()) {
        setError("Home country is required");
        return false;
      }
    } else if (step === 2) {
      if (!formData.travel_exp) {
        setError("Please select your travel experience level");
        return false;
      }
      if (!formData.work) {
        setError("Please select your remote work preference");
        return false;
      }
    } else if (step === 3) {
      if (!formData.currentloc.trim()) {
        setError("Current location is required");
        return false;
      }
      if (!formData.duration) {
        setError("Please select your duration of stay");
        return false;
      }
      if (!formData.budget) {
        setError("Please select your daily budget");
        return false;
      }
    } else if (step === 4) {
      if (!formData.vibefocus) {
        setError("Please select your preferred travel vibe");
        return false;
      }
      if (!formData.accomodation) {
        setError("Please select your accommodation style");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/curator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to submit request");
      }

      setSuccess(true);
      setStep(5);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const progressPercent = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* ── Progress Indicator ─────────────────────────────────────── */}
      {step <= 4 && (
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs text-[#6B5E53] font-bold tracking-wider mb-2">
            <span>STEP {step} OF 4</span>
            <span>{Math.round(progressPercent)}% COMPLETE</span>
          </div>
          <div className="w-full h-2 bg-[#DED9C9] rounded-full overflow-hidden shadow-inner border border-[#D1CEC4]/30">
            <motion.div
              className="h-full bg-gradient-to-r from-[#9E414C] to-[#D4A373]"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-[#D1CEC4] shadow-[0_20px_50px_rgba(46,38,30,0.06)] relative overflow-hidden">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* ── STEP 1: Personal Information ─────────────────────── */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Tell us about yourself</h2>
                  <p className="text-muted-foreground text-sm mt-1">Let's start with your basic contact information.</p>
                </div>

                <div className="space-y-4">
                  <div className="relative group">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block mb-1.5 pl-1 transition-colors group-focus-within:text-primary">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary group-focus-within:scale-105 transition-all duration-200" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-[#FDFDFB] border border-[#D1CEC4] rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/45 focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block mb-1.5 pl-1 transition-colors group-focus-within:text-primary">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary group-focus-within:scale-105 transition-all duration-200" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-[#FDFDFB] border border-[#D1CEC4] rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/45 focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block mb-1.5 pl-1 transition-colors group-focus-within:text-primary">Contact Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary group-focus-within:scale-105 transition-all duration-200" />
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 234 567 890"
                          className="w-full bg-[#FDFDFB] border border-[#D1CEC4] rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/45 focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block mb-1.5 pl-1 transition-colors group-focus-within:text-primary">Home Country</label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary group-focus-within:scale-105 transition-all duration-200" />
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="United States"
                          className="w-full bg-[#FDFDFB] border border-[#D1CEC4] rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/45 focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: Travel Style ─────────────────────────────── */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Your Travel Style</h2>
                  <p className="text-muted-foreground text-sm mt-1">Help us understand how comfortable you are with travel and work.</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-3">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block pl-1">Travel Experience Level</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { key: "Newbie", label: "Newbie", desc: "First-time traveler. Needs structure, clear guidelines & hand-holding." },
                        { key: "Veteran", label: "Veteran", desc: "Experienced traveler. Comfortable planning and exploring on my own." },
                        { key: "Nomad", label: "Digital Nomad", desc: "Life on the road. Focuses on hubs, community, and visa longevity." }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleOptionSelect("travel_exp", item.key)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-start gap-4 ${
                            formData.travel_exp === item.key
                              ? "bg-gradient-to-r from-primary to-[#8A3540] border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-[#FDFDFB] border-[#D1CEC4]/60 text-foreground hover:bg-[#F4F1E8] hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            formData.travel_exp === item.key ? "border-white" : "border-muted-foreground/30"
                          }`}>
                            {formData.travel_exp === item.key && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className={`font-bold text-sm block leading-tight ${formData.travel_exp === item.key ? "text-white" : "text-foreground"}`}>{item.label}</span>
                            <span className={`text-xs mt-1 block leading-relaxed ${formData.travel_exp === item.key ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block pl-1 font-sans">Remote Work &amp; WiFi Need</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { key: "Yes, critical", label: "Yes, critical", desc: "Working full-time. Need steady internet, power backups & coworking vibes." },
                        { key: "Nice to have", label: "Nice to have", desc: "Semi-working. Checking in a few hours a week; standard hotel WiFi is fine." },
                        { key: "Not needed", label: "Not needed", desc: "Fully vacationing. Ready to unplug completely and log off." }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleOptionSelect("work", item.key)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-start gap-4 ${
                            formData.work === item.key
                              ? "bg-gradient-to-r from-primary to-[#8A3540] border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-[#FDFDFB] border-[#D1CEC4]/60 text-foreground hover:bg-[#F4F1E8] hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            formData.work === item.key ? "border-white" : "border-muted-foreground/30"
                          }`}>
                            {formData.work === item.key && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className={`font-bold text-sm block leading-tight ${formData.work === item.key ? "text-white" : "text-foreground"}`}>{item.label}</span>
                            <span className={`text-xs mt-1 block leading-relaxed ${formData.work === item.key ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STEP 3: Trip Details ─────────────────────────────── */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Trip Basics</h2>
                  <p className="text-muted-foreground text-sm mt-1">Tell us where you are, how long you plan to stay, and your budget.</p>
                </div>

                <div className="space-y-5">
                  <div className="relative group">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block mb-1.5 pl-1 transition-colors group-focus-within:text-primary">Where are you currently located?</label>
                    <div className="relative">
                      <Compass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 group-focus-within:text-primary group-focus-within:scale-105 transition-all duration-200" />
                      <input
                        type="text"
                        name="currentloc"
                        value={formData.currentloc}
                        onChange={handleInputChange}
                        placeholder="e.g. Bangkok, Thailand"
                        className="w-full bg-[#FDFDFB] border border-[#D1CEC4] rounded-2xl py-3.5 pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground/45 focus:bg-white focus:outline-hidden focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block pl-1">Duration of Stay</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "Short (<2 weeks)", label: "Short Trip", desc: "Under 2 weeks" },
                        { key: "Medium (2-4 weeks)", label: "Medium Stay", desc: "2 to 4 weeks" },
                        { key: "Long (1-3 months)", label: "Long Stay", desc: "1 to 3 months" },
                        { key: "Extended (3+ months)", label: "Extended Nomad", desc: "3+ months" }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleOptionSelect("duration", item.key)}
                          className={`text-left p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-start gap-4 ${
                            formData.duration === item.key
                              ? "bg-gradient-to-r from-primary to-[#8A3540] border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-[#FDFDFB] border-[#D1CEC4]/60 text-foreground hover:bg-[#F4F1E8] hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            formData.duration === item.key ? "border-white" : "border-muted-foreground/30"
                          }`}>
                            {formData.duration === item.key && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className={`font-bold text-sm block leading-tight ${formData.duration === item.key ? "text-white" : "text-foreground"}`}>{item.label}</span>
                            <span className={`text-xs mt-1 block leading-relaxed ${formData.duration === item.key ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block pl-1">Daily Budget Tier</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { key: "Low (<€50/day)", label: "Budget", desc: "<€50/day" },
                        { key: "Mid (€50-150/day)", label: "Comfort", desc: "€50-150/day" },
                        { key: "High (€150+/day)", label: "Premium", desc: "€150+/day" }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleOptionSelect("budget", item.key)}
                          className={`text-center p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex flex-col items-center justify-center gap-2 ${
                            formData.budget === item.key
                              ? "bg-gradient-to-r from-primary to-[#8A3540] border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-[#FDFDFB] border-[#D1CEC4]/60 text-foreground hover:bg-[#F4F1E8] hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            formData.budget === item.key ? "border-white" : "border-muted-foreground/30"
                          }`}>
                            {formData.budget === item.key && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div className="text-center">
                            <span className={`font-bold text-sm block leading-tight ${formData.budget === item.key ? "text-white" : "text-foreground"}`}>{item.label}</span>
                            <span className={`text-[10px] mt-0.5 block leading-normal ${formData.budget === item.key ? "text-white/85" : "text-muted-foreground"}`}>{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STEP 4: Vibe & Accommodation ────────────────────── */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 15, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.99 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Vibe &amp; Stays</h2>
                  <p className="text-muted-foreground text-sm mt-1">Let us know what kind of activities and accommodation suits you.</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-3">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block pl-1">Preferred Vibe / Focus</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: "Nature & Adventure", label: "Nature & Adventure", desc: "Hiking, trails, outdoor activities." },
                        { key: "Food & Culture", label: "Food & Culture", desc: "Local markets, museums, historical spots." },
                        { key: "Beach & Relax", label: "Beach & Relax", desc: "Chill coastal vibes, sunset points." },
                        { key: "City & Nightlife", label: "City & Nightlife", desc: "Cafes, malls, local pubs, food districts." }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleOptionSelect("vibefocus", item.key)}
                          className={`text-left p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-start gap-4 ${
                            formData.vibefocus === item.key
                              ? "bg-gradient-to-r from-primary to-[#8A3540] border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-[#FDFDFB] border-[#D1CEC4]/60 text-foreground hover:bg-[#F4F1E8] hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            formData.vibefocus === item.key ? "border-white" : "border-muted-foreground/30"
                          }`}>
                            {formData.vibefocus === item.key && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className={`font-bold text-sm block leading-tight ${formData.vibefocus === item.key ? "text-white" : "text-foreground"}`}>{item.label}</span>
                            <span className={`text-xs mt-1 block leading-relaxed ${formData.vibefocus === item.key ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs text-[#6B5E53] font-bold uppercase tracking-wider block pl-1">Accommodation Style</label>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { key: "Hostel / Social", label: "Hostel / Social Stay", desc: "Shared dorms, co-living hostels, community-driven." },
                        { key: "Boutique / Local", label: "Boutique / Local Guesthouse", desc: "Private rooms in homestays, local design Airbnbs." },
                        { key: "Resort / Full Service", label: "Resort / Premium Hotel", desc: "Concierge, private pool, gym, full breakfast included." }
                      ].map((item) => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleOptionSelect("accomodation", item.key)}
                          className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-start gap-4 ${
                            formData.accomodation === item.key
                              ? "bg-gradient-to-r from-primary to-[#8A3540] border-primary text-white shadow-lg shadow-primary/20"
                              : "bg-[#FDFDFB] border-[#D1CEC4]/60 text-foreground hover:bg-[#F4F1E8] hover:border-primary/30"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            formData.accomodation === item.key ? "border-white" : "border-muted-foreground/30"
                          }`}>
                            {formData.accomodation === item.key && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <span className={`font-bold text-sm block leading-tight ${formData.accomodation === item.key ? "text-white" : "text-foreground"}`}>{item.label}</span>
                            <span className={`text-xs mt-1 block leading-relaxed ${formData.accomodation === item.key ? "text-white/80" : "text-muted-foreground"}`}>{item.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STEP 5: Success State ────────────────────────────── */}
            {success && step === 5 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <Sparkles className="w-3 h-3" /> Custom Plan Initialized
                </span>

                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                  All Set, <br />
                  <span className="text-primary italic font-normal font-script text-4xl md:text-5xl block mt-2">
                    {formData.name.split(" ")[0]}!
                  </span>
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-8">
                  We've received your travel curation request. Our team will review your choices and send a tailored digital itinerary &amp; nomad strategy to <strong className="text-foreground">{formData.email}</strong>.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialQuizData);
                    setStep(1);
                    setSuccess(false);
                  }}
                  className="px-6 py-2.5 rounded-full border border-primary text-primary text-xs font-bold hover:bg-primary/5 transition-colors"
                >
                  Submit Another Plan
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Form Actions Footer ─────────────────────────────────── */}
          {step <= 4 && (
            <div className="mt-8 pt-6 border-t border-[#D1CEC4] flex justify-between items-center">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D1CEC4] text-[#6B5E53] hover:bg-[#F4F1E8] hover:text-primary text-xs font-bold transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#8A3540] text-white hover:shadow-lg hover:shadow-primary/20 text-xs font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-[#8A3540] text-white hover:shadow-lg hover:shadow-primary/20 text-xs font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar, MapPin, Compass, FileText, Calculator,
    HelpCircle, ChevronDown, Clock, Laptop, Sparkles, CheckCircle2
} from "lucide-react";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQS: FAQItem[] = [
    {
        question: "How much does the consultation cost and when do I pay?",
        answer: "The consultation rate is €45 per hour. You do not need to pay anything upfront to reserve your session. A secure payment link will be sent via email after we complete our call."
    },
    {
        question: "How does the travel consultation call work?",
        answer: "Once you pick a date and time on the calendar, you'll receive a confirmation email with a Google Meet link. On the call, we will discuss your travel style, destinations, budget, remote work setup, or visas, and build a tailored action plan for you."
    },
    {
        question: "What do I need to prepare before the call?",
        answer: "You don't need a final plan! Just think about your travel goals, your rough budget, potential destinations, and any specific questions you have about remote work, accommodation, or visas. We'll handle the rest."
    },
    {
        question: "Can you help with digital nomad visas?",
        answer: "Yes! Having transitioned to digital nomad life ourselves from the Philippines, we can guide you through the process of applying for popular digital nomad visas, visa runs, required documentation, and establishing tax residency."
    },
    {
        question: "What if I need to reschedule?",
        answer: "No problem at all. You can easily reschedule or cancel your consultation using the link provided in your confirmation email, up to 24 hours before our scheduled session."
    }
];

export default function BookingClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [iframeLoading, setIframeLoading] = useState(true);

    useEffect(() => {
        // Dynamically load the GHL iframe resizer script to enable automatic height adjustment
        const script = document.createElement("script");
        script.src = "https://links.talentmucho.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up script on unmount
            const existingScript = document.querySelector(`script[src="https://links.talentmucho.com/js/form_embed.js"]`);
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white selection:bg-primary/20 overflow-x-hidden pt-24 pb-16">
            
            {/* ── Hero Header Section ────────────────────────────────────── */}
            <section className="relative px-4 py-8 md:py-12 max-w-7xl mx-auto z-10">
                <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
                    <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        1-on-1 Travel Consulting
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-foreground"
                    >
                        Plan Your Next Move <br />
                        <span className="text-primary italic font-normal font-script text-5xl md:text-7xl block mt-2">With Meri &amp; Man</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                    >
                        Get expert, practical guidance on itinerary planning, visa requirements, budget structuring, and transitioning to a digital nomad lifestyle.
                    </motion.p>
                </div>
            </section>

            {/* ── Main content grid ───────────────────────────────────────── */}
            <section className="px-4 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Details, Features, & FAQ (5 Columns) */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    
                    {/* Consultation Focus Cards */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-lg flex flex-col gap-6">
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">How We Help You</h2>
                        <p className="text-muted-foreground text-sm">We take the guesswork out of travel. Schedule a call to tackle these topics together:</p>
                        
                        <div className="flex flex-col gap-4">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Itinerary & Route Optimization",
                                    desc: "Coordinating travel legs, finding hidden local stays, and optimizing logistics."
                                },
                                {
                                    icon: FileText,
                                    title: "Visa & Entry Guidance",
                                    desc: "Real-world experience navigating visa runs, documentation, and extension processes."
                                },
                                {
                                    icon: Laptop,
                                    title: "Digital Nomad Transition",
                                    desc: "Earning online, reliable internet checks, nomad hubs, and travel-friendly banking."
                                },
                                {
                                    icon: Calculator,
                                    title: "Cost & Budget Breakdown",
                                    desc: "Creating realistic travel budgets tailored to your travel style and destinations."
                                }
                            ].map((focus, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex gap-4 items-start p-3 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                                        <focus.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-foreground">{focus.title}</h3>
                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{focus.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* What to Expect Strip */}
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-6 md:p-8 border border-primary/10 flex flex-col gap-4 relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <Image 
                                src="/assets/sticker/sticker-3.png"
                                alt="Travel Sticker Decor"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            Session &amp; Pricing
                        </h3>
                        <ul className="space-y-3 text-sm text-foreground">
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>€45 Per Hour:</strong> Flat hourly rate, billing processed after the session.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Book Now, Pay Later:</strong> No upfront payment or card details required to schedule.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span><strong>Custom Deliverables:</strong> Summary notes, checklist guides, and resources.</span>
                            </li>
                        </ul>
                    </div>

                    {/* FAQs Accordion */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 border border-border shadow-lg flex flex-col gap-4">
                        <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-primary" />
                            Frequently Asked Questions
                        </h2>
                        <div className="divide-y divide-border/60">
                            {FAQS.map((faq, idx) => (
                                <div key={idx} className="py-4 first:pt-2 last:pb-2">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex justify-between items-center text-left gap-4 font-bold text-sm text-foreground hover:text-primary transition-colors"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown 
                                            className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-primary" : "text-muted-foreground"}`} 
                                        />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: IFrame Calendar Embed (7 Columns) */}
                <div className="lg:col-span-7 w-full flex flex-col gap-4">
                    
                    {/* Header for Calendar on smaller screens */}
                    <div className="flex items-center justify-between px-4 lg:px-0">
                        <div className="flex items-center gap-2 text-foreground font-semibold">
                            <Calendar className="w-5 h-5 text-primary" />
                            <span>Select Date &amp; Time</span>
                        </div>
                        <span className="text-xs text-muted-foreground">Times shown in your timezone</span>
                    </div>

                    {/* IFrame Responsive Wrapper - Transparent with Loader */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full relative min-h-[720px] md:min-h-[820px]"
                    >
                        {iframeLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-xs rounded-2xl z-20">
                                <div className="w-10 h-10 border-3 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
                                <p className="text-xs text-muted-foreground tracking-wide font-medium">Loading calendar...</p>
                            </div>
                        )}
                        {/* Embed Code */}
                        <iframe 
                            src="https://links.talentmucho.com/widget/booking/ulb7B9MUaS3Q10i5ja02" 
                            style={{ width: "100%", border: "none", overflow: "hidden" }} 
                            scrolling="no" 
                            id="ulb7B9MUaS3Q10i5ja02_1779279742529"
                            className="min-h-[720px] md:min-h-[820px] w-full"
                            onLoad={() => setIframeLoading(false)}
                        />
                    </motion.div>
                    
                    {/* Security & Support Note */}
                    <p className="text-center text-[11px] text-muted-foreground px-4 leading-relaxed">
                        Booking secured via links.talentmucho.com. For support or custom consultations, feel free to reach out directly.
                    </p>
                </div>
            </section>
        </div>
    );
}

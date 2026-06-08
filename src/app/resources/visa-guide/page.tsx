"use client";

import { motion } from "framer-motion";
import {
    Landmark, MapPin, Compass, Mountain, Building2, Coffee, Sun,
    DollarSign, FileText, Briefcase, Calendar, AlertCircle, ArrowLeft,
    CheckCircle2, Info, ShieldCheck, TrendingUp, Clock, Wallet
} from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const universalTips = [
    {
        icon: <Clock className="w-5 h-5" />,
        title: "3–6 Month History",
        desc: "Prepare at least 3 months of bank statements showing consistent, regular activity.",
    },
    {
        icon: <TrendingUp className="w-5 h-5" />,
        title: "No Sudden Deposits",
        desc: "Large one-time deposits right before applying are a major red flag at all embassies.",
    },
    {
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Prove Home Ties",
        desc: "Employment, property, and family ties in the Philippines often matter more than cash.",
    },
    {
        icon: <Wallet className="w-5 h-5" />,
        title: "Show a 25–30% Buffer",
        desc: "Always show funds 25–30% above the stated minimum to demonstrate stability.",
    },
];

const detailedGuides = [
    {
        id: "usa",
        country: "United States",
        visaType: "B1/B2 Tourist Visa",
        icon: <Landmark className="w-5 h-5" />,
        color: "from-blue-500/15 to-blue-500/5",
        iconColor: "text-blue-600",
        iconBg: "bg-blue-500/15",
        borderColor: "border-blue-500/20 hover:border-blue-500/50",
        keyFact: "Interview-based",
        keyFactNote: "No fixed show money",
        difficulty: "Hard",
        difficultyColor: "bg-red-100 text-red-700",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Show Money", value: "No fixed show money required." },
            { icon: <FileText className="w-4 h-4" />, label: "Requirement", value: "No bank certificate required; the B1/B2 is interview-based." },
            { icon: <Briefcase className="w-4 h-4" />, label: "Financial Profile", value: "Officers assess income, property, family ties, and intent to return." },
            { icon: <AlertCircle className="w-4 h-4" />, label: "Practical Guideline", value: "Show funds covering your full trip plus a 25–30% buffer, visible across 3–6 months of statements." },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Key Asset", value: "Strong employment and ties to the Philippines carry more weight than any single bank balance." },
        ],
    },
    {
        id: "schengen",
        country: "Schengen Area",
        visaType: "Short-Stay Visa",
        icon: <MapPin className="w-5 h-5" />,
        color: "from-indigo-500/15 to-indigo-500/5",
        iconColor: "text-indigo-600",
        iconBg: "bg-indigo-500/15",
        borderColor: "border-indigo-500/20 hover:border-indigo-500/50",
        keyFact: "€45 – €120 / day",
        keyFactNote: "Varies by country",
        difficulty: "Hard",
        difficultyColor: "bg-red-100 text-red-700",
        description: "The golden rule: Daily rate × number of days = your minimum. Always show 30% above the minimum. Sudden deposits are a red flag.",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Switzerland", value: "CHF 100/day (≈ ₱7,515). High daily rate." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Netherlands", value: "€100 – €120/day (≈ ₱6,859 – ₱8,231)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Spain", value: "€108/day (≈ ₱7,408) min total €900 (≈ ₱61,731)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "France", value: "€65 – €120/day (≈ ₱4,458 – ₱8,231)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Germany", value: "€45 – €120/day (≈ ₱3,087 – ₱8,231)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Norway", value: "NOK 505/day (≈ €48 / ≈ ₱3,065)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Sweden", value: "450 SEK/day (≈ €49 / ≈ ₱2,907)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Italy", value: "1–5 days: €269.60. 6–10 days: €44.93/day. 11–20 days: €51.64 + €36.67/day." },
        ],
        strategy: [
            { label: "Where to Apply", value: "Apply through the country where you spend the most days—or the first port of entry." },
            { label: "Statements", value: "3–6 months of bank statements showing a consistent balance." },
            { label: "Timing", value: "Apply at least 3 months before travel during peak seasons." },
        ],
    },
    {
        id: "australia",
        country: "Australia",
        visaType: "Visitor Visa Subclass 600",
        icon: <Compass className="w-5 h-5" />,
        color: "from-amber-500/15 to-amber-500/5",
        iconColor: "text-amber-600",
        iconBg: "bg-amber-500/15",
        borderColor: "border-amber-500/20 hover:border-amber-500/50",
        keyFact: "AUD 5k – 10k",
        keyFactNote: "≈ ₱204k – ₱410k",
        difficulty: "Hard",
        difficultyColor: "bg-red-100 text-red-700",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Recommended Total", value: "AUD 5k – 10k (≈ ₱204,850 – ₱409,700)." },
            { icon: <Calendar className="w-4 h-4" />, label: "Daily Benchmark", value: "AUD 100 – 150/day (≈ ₱4,097 – ₱6,146)." },
            { icon: <FileText className="w-4 h-4" />, label: "Financial Docs", value: "3–6 months of certified bank statements." },
            { icon: <Briefcase className="w-4 h-4" />, label: "Supporting Docs", value: "Include payslips, tax returns, and employment letters." },
            { icon: <AlertCircle className="w-4 h-4" />, label: "2025 Update", value: "Financial verification has tightened. Explain any large deposits clearly." },
        ],
    },
    {
        id: "canada",
        country: "Canada",
        visaType: "Visitor / Tourist Visa TRV",
        icon: <Mountain className="w-5 h-5" />,
        color: "from-red-500/15 to-red-500/5",
        iconColor: "text-red-600",
        iconBg: "bg-red-500/15",
        borderColor: "border-red-500/20 hover:border-red-500/50",
        keyFact: "CAD 5k – 10k",
        keyFactNote: "≈ ₱212k – ₱424k",
        difficulty: "Hard",
        difficultyColor: "bg-red-100 text-red-700",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Recommended Minimum", value: "CAD 5k – 10k (≈ ₱212,200 – ₱424,400)." },
            { icon: <FileText className="w-4 h-4" />, label: "Requirement", value: "6 months of bank statements showing consistent balance and regular salary credits." },
            { icon: <Info className="w-4 h-4" />, label: "Review Process", value: "High-scrutiny countries (including the Philippines) face stricter reviews." },
            { icon: <AlertCircle className="w-4 h-4" />, label: "Warning", value: "IRCC flags sudden deposits right before applying; avoid 'parking' a lump sum." },
        ],
    },
    {
        id: "uae",
        country: "United Arab Emirates",
        visaType: "Dubai / Abu Dhabi eVisa",
        icon: <Building2 className="w-5 h-5" />,
        color: "from-emerald-500/15 to-emerald-500/5",
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-500/15",
        borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
        keyFact: "Sponsor Required",
        keyFactNote: "No show money needed",
        difficulty: "Moderate",
        difficultyColor: "bg-amber-100 text-amber-700",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Show Money", value: "No show money or bank certificate required." },
            { icon: <FileText className="w-4 h-4" />, label: "Mandatory Requirement", value: "A UAE sponsor is required (national, licensed company, or travel agency)." },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Easy Route", value: "Book through a licensed Dubai travel agency or hotel; they act as your sponsor automatically." },
            { icon: <MapPin className="w-4 h-4" />, label: "Option", value: "A 48–96 hour Dubai stopover visa is also available." },
        ],
    },
    {
        id: "south-korea",
        country: "South Korea",
        visaType: "Tourist / Short-Stay Visa",
        icon: <Coffee className="w-5 h-5" />,
        color: "from-pink-500/15 to-pink-500/5",
        iconColor: "text-pink-600",
        iconBg: "bg-pink-500/15",
        borderColor: "border-pink-500/20 hover:border-pink-500/50",
        keyFact: "COE + ITR",
        keyFactNote: "Employment-focused",
        difficulty: "Moderate",
        difficultyColor: "bg-amber-100 text-amber-700",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Requirement", value: "No bank certificate or formal show money required." },
            { icon: <Briefcase className="w-4 h-4" />, label: "Evaluation", value: "Based on employment status, consistent income, and ties to the Philippines." },
            { icon: <FileText className="w-4 h-4" />, label: "Key Docs", value: "Certificate of Employment (COE) and ITR carry more weight than deposit amounts." },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Boosters", value: "A clean travel record and proof of return (property, family, job) significantly boost chances." },
        ],
    },
    {
        id: "egypt",
        country: "Egypt",
        visaType: "Tourist Visa – Consular Manila",
        icon: <Sun className="w-5 h-5" />,
        color: "from-orange-500/15 to-orange-500/5",
        iconColor: "text-orange-600",
        iconBg: "bg-orange-500/15",
        borderColor: "border-orange-500/20 hover:border-orange-500/50",
        keyFact: "~$100 / day",
        keyFactNote: "≈ ₱5,789 per day",
        difficulty: "Moderate",
        difficultyColor: "bg-amber-100 text-amber-700",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Practical Target", value: "Use ~$100/day (≈ ₱5,789) as a benchmark. For 7 days, aim for $700 (≈ ₱40,500)." },
            { icon: <FileText className="w-4 h-4" />, label: "Requirement", value: "Bank certificate or statement showing funds for full stay (no official peso floor published)." },
            { icon: <Info className="w-4 h-4" />, label: "Other Docs", value: "COE or business registration, detailed itinerary, travel insurance, and accommodation proof." },
            { icon: <Calendar className="w-4 h-4" />, label: "Processing", value: "Approximately 15 working days; submit at least 4 weeks before travel." },
        ],
    },
];

const cheatSheet = [
    { destination: "USA", rate: "No fixed amount; interview-based", php: "Based on trip duration", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "Canada", rate: "CAD 5,000 – 10,000", php: "₱212,000 – ₱424,000", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "Australia", rate: "AUD 5,000 – 10,000", php: "₱204,000 – ₱409,000", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "UK", rate: "£1,500 – £2,500", php: "₱117,000 – ₱196,000", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "Schengen", rate: "€45 – €120 per day (varies)", php: "₱3,087 – ₱8,231 per day", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "Japan", rate: "₱100,000 – ₱170,000 ADB", php: "6-month average daily balance", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "South Korea", rate: "No specific deposit", php: "Focus on COE and ITR", difficulty: "Moderate", diffColor: "bg-amber-100 text-amber-700" },
    { destination: "UAE", rate: "No bank certificate required", php: "Must have a sponsor", difficulty: "Moderate", diffColor: "bg-amber-100 text-amber-700" },
    { destination: "China", rate: "₱70,000 – ₱100,000", php: "Bank cert + 6-month ADB", difficulty: "Hard", diffColor: "bg-red-100 text-red-700" },
    { destination: "Egypt", rate: "~$100 per day guide", php: "~₱5,789 per day", difficulty: "Moderate", diffColor: "bg-amber-100 text-amber-700" },
    { destination: "Turkey", rate: "$50 per day", php: "~₱2,894 per day", difficulty: "Easy", diffColor: "bg-emerald-100 text-emerald-700" },
    { destination: "New Zealand", rate: "NZD 400 – 1,000 per month", php: "~₱14,000 – ₱35,000 per month", difficulty: "Moderate", diffColor: "bg-amber-100 text-amber-700" },
    { destination: "South Africa", rate: "ZAR 3,000+", php: "~₱10,860 minimum floor", difficulty: "Easy", diffColor: "bg-emerald-100 text-emerald-700" },
];

export default function VisaGuidePage() {
    return (
        <div className="min-h-screen bg-white pb-24">
            <BreadcrumbSchema items={[
                { name: "Home", item: "https://udreamtravels.com" },
                { name: "Resources", item: "https://udreamtravels.com/resources" },
                { name: "Visa Guides", item: "https://udreamtravels.com/resources/visa-guide" }
            ]} />

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <div className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-5xl mx-auto relative">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Resources
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            <MapPin className="w-4 h-4" /> Visa Guidelines
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Visa Guides for{" "}
                            <span className="text-primary">Philippine Passport Holders</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Practical financial guidelines and document requirements for top destinations. Exchange rates as of Feb 2026.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-10">

                {/* ── Universal Tips ───────────────────────────────────────── */}
                <motion.section
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mb-12"
                >
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Universal Rules
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {universalTips.map((tip, i) => (
                            <div
                                key={i}
                                className="flex gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10"
                            >
                                <div className="text-primary shrink-0 mt-0.5">{tip.icon}</div>
                                <div>
                                    <div className="text-sm font-semibold mb-0.5">{tip.title}</div>
                                    <div className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Two-column layout: sidebar + content ─────────────────── */}
                <div className="lg:grid lg:grid-cols-[176px_1fr] lg:gap-10">

                    {/* Sticky sidebar (desktop only) */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24">
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                Countries
                            </p>
                            <nav className="space-y-0.5">
                                {detailedGuides.map((guide) => (
                                    <a
                                        key={guide.id}
                                        href={`#${guide.id}`}
                                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
                                    >
                                        <span className={`shrink-0 ${guide.iconColor}`}>{guide.icon}</span>
                                        <span className="truncate">{guide.country}</span>
                                    </a>
                                ))}
                            </nav>
                            <div className="mt-4 pt-4 border-t border-border">
                                <a
                                    href="#cheat-sheet"
                                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all"
                                >
                                    <TableIcon className="w-4 h-4 shrink-0 text-primary" />
                                    <span>Cheat Sheet</span>
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main content */}
                    <main className="min-w-0">

                        {/* Mobile: horizontal scrollable country pills */}
                        <div
                            className="lg:hidden flex gap-2 overflow-x-auto pb-3 mb-8 -mx-4 px-4"
                            style={{ scrollbarWidth: "none" }}
                        >
                            {detailedGuides.map((guide) => (
                                <a
                                    key={guide.id}
                                    href={`#${guide.id}`}
                                    className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${guide.iconColor} ${guide.borderColor}`}
                                >
                                    {guide.icon}
                                    {guide.country}
                                </a>
                            ))}
                        </div>

                        {/* ── Country Cards ─────────────────────────────────── */}
                        <section>
                            <div className="flex items-baseline gap-3 mb-6">
                                <h2 className="text-2xl font-bold">Country-Specific Guidelines</h2>
                                <span className="text-sm text-muted-foreground">{detailedGuides.length} destinations</span>
                            </div>

                            <div className="space-y-5">
                                {detailedGuides.map((guide, idx) => (
                                    <motion.div
                                        key={guide.id}
                                        id={guide.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.04 }}
                                        className={`rounded-2xl border bg-card overflow-hidden transition-colors duration-300 ${guide.borderColor}`}
                                    >
                                        {/* Coloured header */}
                                        <div className={`px-5 pt-5 pb-4 bg-gradient-to-br ${guide.color}`}>
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className={`p-2.5 rounded-xl ${guide.iconBg} ${guide.iconColor}`}>
                                                        {guide.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-lg leading-tight">{guide.country}</h3>
                                                        <p className="text-xs text-muted-foreground">{guide.visaType}</p>
                                                    </div>
                                                </div>
                                                <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${guide.difficultyColor}`}>
                                                    {guide.difficulty}
                                                </span>
                                            </div>
                                            {/* Key requirement — the number that matters */}
                                            <div className="mt-4 flex items-baseline gap-2">
                                                <span className="text-2xl font-bold tracking-tight">{guide.keyFact}</span>
                                                <span className="text-sm text-muted-foreground">{guide.keyFactNote}</span>
                                            </div>
                                        </div>

                                        {/* Card body */}
                                        <div className="px-5 py-4">
                                            {/* Rule-of-thumb note (Schengen only) */}
                                            {"description" in guide && guide.description && (
                                                <div className="mb-4 flex gap-2.5 p-3.5 rounded-xl bg-muted/50 border border-border/50">
                                                    <Info className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                                        {guide.description as string}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Detail grid */}
                                            <div className="grid sm:grid-cols-2 gap-1">
                                                {guide.details.map((detail, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex gap-3 px-3 py-2.5 rounded-xl hover:bg-muted/40 transition-colors"
                                                    >
                                                        <div className={`mt-0.5 shrink-0 ${guide.iconColor}`}>{detail.icon}</div>
                                                        <div>
                                                            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60 mb-0.5">
                                                                {detail.label}
                                                            </div>
                                                            <div className="text-sm text-muted-foreground leading-relaxed">
                                                                {detail.value}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Application strategy (Schengen only) */}
                                            {"strategy" in guide && guide.strategy && (
                                                <div className="mt-4 pt-4 border-t border-border/50">
                                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                                                        <Compass className="w-3.5 h-3.5" /> Application Strategy
                                                    </h4>
                                                    <div className="grid sm:grid-cols-3 gap-3">
                                                        {(guide.strategy as { label: string; value: string }[]).map((strat, i) => (
                                                            <div key={i} className="p-3 rounded-xl bg-muted/30 border border-border/30">
                                                                <div className="text-xs font-bold mb-1">{strat.label}</div>
                                                                <div className="text-xs text-muted-foreground leading-relaxed">{strat.value}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* ── Cheat Sheet ───────────────────────────────────── */}
                        <section id="cheat-sheet" className="mt-16 scroll-mt-24">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-5"
                            >
                                <div className="flex items-center gap-3 mb-1">
                                    <TableIcon className="w-6 h-6 text-primary" />
                                    <h2 className="text-2xl font-bold">The Complete Cheat Sheet</h2>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Quick reference for financial guidelines. Exchange rates as of Feb 2026.
                                </p>
                            </motion.div>

                            {/* Difficulty legend */}
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                                <span className="text-xs text-muted-foreground font-medium">Difficulty:</span>
                                {[
                                    { label: "Hard", cls: "bg-red-100 text-red-700" },
                                    { label: "Moderate", cls: "bg-amber-100 text-amber-700" },
                                    { label: "Easy", cls: "bg-emerald-100 text-emerald-700" },
                                ].map((d) => (
                                    <span key={d.label} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${d.cls}`}>
                                        {d.label}
                                    </span>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
                            >
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-muted/50 text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                                            <tr>
                                                <th className="px-5 py-3.5 border-b border-border">Destination</th>
                                                <th className="px-5 py-3.5 border-b border-border">Recommended Minimum / Rate</th>
                                                <th className="px-5 py-3.5 border-b border-border">PHP Equivalent</th>
                                                <th className="px-5 py-3.5 border-b border-border">Difficulty</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {cheatSheet.map((row) => (
                                                <tr key={row.destination} className="hover:bg-muted/40 transition-colors">
                                                    <td className="px-5 py-3.5 font-semibold text-foreground whitespace-nowrap">
                                                        {row.destination}
                                                    </td>
                                                    <td className="px-5 py-3.5 text-muted-foreground">{row.rate}</td>
                                                    <td className="px-5 py-3.5">
                                                        <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                                                            {row.php}
                                                        </span>
                                                    </td>
                                                    <td className="px-5 py-3.5">
                                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${row.diffColor}`}>
                                                            {row.difficulty}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </section>

                    </main>
                </div>
            </div>
        </div>
    );
}

function TableIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
        </svg>
    );
}

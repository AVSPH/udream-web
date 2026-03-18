import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { getStats } from "@/data/visited-places";
import {
    MapPin, ExternalLink, ArrowRight, Camera, Compass,
    Globe, Users, BookOpen, Calculator, Quote, CheckCircle2, X
} from "lucide-react";

export const metadata: Metadata = {
    title: "About | Udream Travels",
    description: "Our Story - Two persons. One shared dream. No looking back.",
};

const SOCIAL_LINKS = [
    {
        name: "YouTube",
        handle: "@udreamtravels",
        description: "Cinematic travel vlogs and drone footage from every destination.",
        href: "https://youtube.com/@udreamtravels",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        hoverCls: "hover:bg-red-600 hover:border-red-600 hover:text-white",
        label: "Subscribe",
    },
    {
        name: "Instagram",
        handle: "@udream_travel",
        description: "Daily travel photos, reels, and behind-the-scenes Stories.",
        href: "https://instagram.com/udream_travel",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
        hoverCls: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500  hover:text-white",
        label: "Follow",
    },
    {
        name: "TikTok",
        handle: "@meriandayman",
        description: "Short-form travel clips, quick tips, and destination highlights.",
        href: "https://tiktok.com/@meriandayman",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
        ),
        hoverCls: "hover:bg-black hover:border-black hover:text-white",
        label: "Follow",
    },
    {
        name: "Facebook",
        handle: "udreamtravels",
        description: "Travel updates, trip recaps, and community discussions.",
        href: "https://facebook.com/udreamtravels",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
        ),
        hoverCls: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
        label: "Like Page",
    },
];

const JOURNEY_STEPS = [
    {
        title: "The beginning",
        subtitle: "We were already online. But tied to one place.",
        body: "We met in the Philippines, fell in love, and were both already earning online. We had the skills, we had the income, but we were still sitting in the same spot every day. Working online from home is freedom, yes. But we kept asking: why stop there?",
    },
    {
        title: "The decision",
        subtitle: "We always dreamed it. We finally did it.",
        body: "It wasn't a crisis that pushed us. It was clarity. We looked at what we had, two laptops, a shared vision, and an internet connection, and realized we already had everything we needed to go anywhere. So we stopped making excuses and started making plans.",
    },
    {
        title: "The build",
        subtitle: "Two Filipinos. Two laptops. Built from scratch.",
        body: "We took what we were already doing individually and built something bigger together. Our digital marketing business grew from hustle and heart, no office, no boss, no ceiling. Coming from the Philippines, people don't always expect you to build something that travels with you. We built it anyway.",
    },
    {
        title: "Now",
        subtitle: "Digital nomads in the making.",
        body: "The business is running. The passports are ready. We're stepping into the next chapter, taking our work on the road and living the nomad life we once only talked about over coffee. We're just getting started, and we're doing it side by side.",
    },
];

const CTA_LINKS = [
    {
        href: "/map",
        icon: MapPin,
        label: "Explore the Map",
        sub: "See every destination I've visited",
        primary: true,
    },
    {
        href: "/blog",
        icon: BookOpen,
        label: "Read the Blog",
        sub: "Stories from every journey",
        primary: false,
    },
    {
        href: "/resources/destination-costs",
        icon: Calculator,
        label: "Budget Planner",
        sub: "Real costs with currency conversion",
        primary: false,
    },
    {
        href: "/resources/travel-assessment",
        icon: Compass,
        label: "Travel Assessment",
        sub: "Find out if you're ready to go",
        primary: false,
    },
];

export default function AboutPage() {
    const stats = getStats();

    const timelineData = JOURNEY_STEPS.map((step) => ({
        title: step.title,
        content: (
            <div>
                <p className="font-script text-3xl md:text-4xl text-primary mb-6 leading-relaxed">
                    {step.subtitle}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.body}
                </p>
            </div>
        ),
    }));

    return (
        <div className="min-h-screen bg-white selection:bg-primary/20">

            {/* ── Hero / The Story Begins ─────────────────────────────────── */}
            <section className="relative pt-20 pb-8 px-4 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                />

                <div className="max-w-7xl mx-auto relative z-10 mt-4 mb-4 px-4 md:px-8">
                    <div className="flex justify-center mb-10 w-full mt-20">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
                            <BookOpen className="w-3.5 h-3.5" />
                            Our Story
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left: Image Feature */}
                        <div className="relative order-2 lg:order-1">
                            <div className="group relative w-full aspect-video md:aspect-[4/3] lg:aspect-[5/4] xl:aspect-[4/3] rounded-[2.5rem] overflow-hidden ring-1 ring-border shadow-2xl bg-white mx-auto">
                                {/* Realistic photo behind */}
                                <Image
                                    src="/assets/our-story.jpg"
                                    alt="Udream — Real Profile"
                                    fill
                                    className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out z-10"
                                    priority
                                />
                                {/* Sticker / Default ahead */}
                                <Image
                                    src="/assets/sticker/sticker-5.png"
                                    alt="Udream — Profile Sticker"
                                    fill
                                    className="object-contain p-4 md:p-8 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out z-20 scale-95 group-hover:scale-100"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Text Feature */}
                        <div className="order-1 lg:order-2 text-center flex flex-col justify-center items-center">
                            <div className="mb-6">
                                <h1 className="font-display text-4xl md:text-5xl xl:text-5xl font-bold tracking-tight mb-6 leading-tight text-foreground">
                                    Two persons.<br className="hidden lg:block"/> One shared dream. <br />
                                    <span className="text-primary italic font-normal">No looking back.</span>
                                </h1>
                            </div>
                            
                            <div className="bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/10 relative text-center max-w-lg mx-auto">
                                <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-6 h-6 text-primary/20 hidden md:block" />
                                <h2 className="font-script text-2xl md:text-3xl text-primary leading-snug mt-2 mb-3 relative z-10">
                                    &quot;We didn&apos;t wait for the perfect moment. We built it.&quot;
                                </h2>
                                <span className="font-display font-bold text-foreground/80 tracking-widest uppercase text-xs md:text-sm">
                                    — Meri &amp; Man
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Strip ─────────────────────────────────────────────── */}
            {/* <section className="py-12 px-4 border-y border-border/50 bg-white/40">
                <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-8 text-center divide-x-0 md:divide-x divide-border/50">
                    {[
                        { value: "2", label: "Filipinos who made it work" },
                        { value: "1", label: "Business built together" },
                        { value: "0", label: "Plan B" },
                        { value: "∞", label: "Countries on the list" },
                    ].map((s, i) => (
                        <div key={i} className="px-6 flex flex-col items-center justify-center w-[40%] md:w-auto">
                            <span className="font-display text-5xl md:text-6xl text-primary font-bold">{s.value}</span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-muted-foreground mt-3 max-w-[140px] leading-relaxed">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* ── The Journey ─────────────────────────────────────────────── */}
            <section className="py-16 relative overflow-hidden">
                <div className="text-center mb-16 relative z-10 max-w-2xl mx-auto px-4">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">The Journey</h2>
                    <div className="w-16 h-1 bg-primary/20 mx-auto rounded-full mb-8" />
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            We are Meri and Man, a couple from the Philippines who were already living the online life but knew deep down it could be so much more.
                        </p>
                        <p>
                            We built a freelancing business together, unlocked location freedom, and the rest, as they say, is history.
                        </p>
                    </div>
                </div>

                <div className="relative z-10">
                    <Timeline data={timelineData} />
                </div>
            </section>

            {/* ── Before & Now ─────────────────────────────────────────────── */}
            <section className="py-24 px-4 bg-muted/30 border-t border-border/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Before &amp; Now</h2>
                        <p className="text-muted-foreground tracking-widest uppercase text-sm font-semibold">The Shift That Changed Everything</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-stretch bg-white rounded-3xl overflow-hidden shadow-2xl border border-border group/card">
                        {/* Before Side */}
                        <div className="flex-1 p-10 md:p-14 bg-muted/20 relative transition-colors duration-500 group-hover/card:bg-muted/10">
                            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                                <div className="w-10 h-px bg-border hidden sm:block" />
                                <h3 className="font-script text-4xl text-muted-foreground/60">Before</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Working online, one location",
                                    "Freelancing solo",
                                    "Dreaming of more",
                                    "Home base in the PH"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-muted-foreground text-lg opacity-80">
                                        <X className="w-5 h-5 mt-1 shrink-0 text-muted-foreground/40" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:flex w-px bg-gradient-to-b from-transparent via-border to-transparent relative items-center justify-center">
                            <div className="absolute w-12 h-12 bg-white border border-border shadow-sm rounded-full flex items-center justify-center text-primary z-10 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:shadow-md">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Now Side */}
                        <div className="flex-1 p-10 md:p-14 bg-gradient-to-br from-primary/5 to-primary/10 relative transition-colors duration-500 group-hover/card:to-primary/15">
                            <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                                <h3 className="font-script text-4xl text-primary font-bold">Now</h3>
                                <div className="w-10 h-px bg-primary/20 hidden sm:block" />
                            </div>
                            <ul className="space-y-6">
                                {[
                                    "Business built together",
                                    "Work from anywhere",
                                    "Living the dream",
                                    "Nomad life, together"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-foreground font-semibold text-lg">
                                        <CheckCircle2 className="w-6 h-6 mt-0.5 shrink-0 text-primary drop-shadow-sm" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Final Word */}
                    <div className="mt-32 text-center max-w-3xl mx-auto flex flex-col items-center">
                        <p className="font-display text-3xl md:text-4xl text-foreground leading-snug">
                            &quot;Freedom isn&apos;t a privilege. <br className="hidden md:block"/>
                            <span className="italic text-primary">It&apos;s a decision.</span> <br className="hidden md:block"/>
                            We made ours, and we haven&apos;t looked back.&quot;
                        </p>
                        <div className="mt-8 flex flex-col items-center">
                            <span className="font-script text-4xl text-muted-foreground mb-1">Meri &amp; Man</span>
                            <div className="w-12 h-px bg-border" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* ── CTA / Next Steps ─────────────────────────────────────────── */}
            <section className="py-24 px-4 relative">
                <div className="max-w-5xl mx-auto">
                    <div className=" px-6 py-16 md:py-24    text-center ">
                        {/* Background Deco Orbs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h3 className="font-script text-3xl md:text-5xl text-primary mb-6">What's your next move?</h3>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Start Your Own Journey
                            </h2>
                            <p className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto leading-relaxed">
                                The hardest part is deciding to go. Use the resources below to map out your adventure and make it happen.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0 text-left">
                                {CTA_LINKS.map(({ href, icon: Icon, label, sub, primary }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={`group relative flex flex-col gap-4 p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl ${
                                            primary
                                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                                                : "bg-white border-border text-foreground hover:border-primary/30"
                                        }`}
                                    >
                                        {/* Hover glare effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-150%] skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none" />

                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                                            primary 
                                                ? "bg-white/20 text-white" 
                                                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                                        }`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="mt-2">
                                            <p className="font-bold text-lg tracking-wide">{label}</p>
                                            <p className={`text-sm mt-2 leading-relaxed ${primary ? "text-white/80" : "text-muted-foreground"}`}>{sub}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

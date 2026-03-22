import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    MapPin, Calendar, Clock, Banknote, Plane, Bus,
    FileText, Hotel, Building2, Crown, Map,
    Utensils, CheckSquare, Wallet, Backpack,
    AlertTriangle, Camera, Compass, Coffee, Sun, Moon,
    ArrowRight, CalendarDays,
} from 'lucide-react';
import { travelGuides } from '@/data/guides';

export async function generateStaticParams() {
    return travelGuides.map((guide) => ({
        id: guide.id,
    }));
}

export default async function TravelGuidePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Find the guide by matching id/slug
    const guide = travelGuides.find((g) => g.id === id);

    if (!guide) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-24 font-sans selection:bg-rose-200">
            {/* 📸 Hero Header */}
            <div className="relative h-[65vh] min-h-[500px] w-full bg-neutral-900 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 duration-700 hover:scale-105 transition-transform"
                    style={{ backgroundImage: `url('${guide.heroImage}')` }}
                ></div>


                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:px-16 pb-16 md:pb-24">
                    <div className="max-w-7xl mx-auto flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 shadow-xl">
                                <MapPin className="w-4 h-4" /> {guide.country}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
                            {guide.destinationName}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-200 max-w-2xl font-medium leading-relaxed drop-shadow-md">
                            {guide.quickDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* 🗺️ Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

                    {/* LEFT CONTENT (8 columns) */}
                    <div className="col-span-1 lg:col-span-8 space-y-8 md:space-y-12">

                        {/* 📍 Destination Overview (Mobile Top / Desktop Left) */}
                        <section className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border/60 ring-1 ring-black/5">
                            <h2 className="text-2xl text-foreground flex items-center gap-3 mb-6">
                                <Compass className="w-6 h-6 text-primary" />
                                Destination Overview
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                <div className="flex flex-col gap-1 p-4 bg-muted/50 rounded-2xl border border-border/50">
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                        <Calendar className="w-4 h-4" /> Best Time
                                    </div>
                                    <span className="text-foreground font-semibold mt-1">{guide.bestTime}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-4 bg-muted/50 rounded-2xl border border-border/50">
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                        <Clock className="w-4 h-4" /> Length of Stay
                                    </div>
                                    <span className="text-foreground font-semibold mt-1">{guide.lengthOfStay}</span>
                                </div>
                                <div className="flex flex-col gap-1 p-4 bg-muted/50 rounded-2xl border border-border/50">
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                                        <Banknote className="w-4 h-4" /> Budget Range
                                    </div>
                                    <span className="text-foreground font-semibold mt-1">{guide.budgetRange}</span>
                                </div>
                            </div>
                        </section>

                        {/* 🗺️ Top Things to Do */}
                        <section>
                            <h2 className="text-3xl text-foreground flex items-center gap-3 mb-6">
                                <Map className="w-7 h-7 text-secondary" />
                                Top Things to Do
                            </h2>
                            <div className="space-y-5">
                                {guide.thingsToDo.map((item, idx) => (
                                    <div key={idx} className="group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row">
                                        <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                                            <h3 className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                                {item.why}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-auto border-t border-border pt-4">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                                    <Banknote className="w-4 h-4 text-primary shrink-0" /> <span className="truncate">{item.fee}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                                    <Clock className="w-4 h-4 text-secondary shrink-0" /> <span className="truncate">{item.bestTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 🏨 Where to Stay */}
                        <section>
                            <h2 className="text-3xl text-foreground flex items-center gap-3 mb-8">
                                <Hotel className="w-7 h-7 text-primary" />
                                Where to Stay
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-card p-6 rounded-3xl shadow-sm border border-border flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-muted rounded-bl-full -z-0"></div>
                                    <Building2 className="w-8 h-8 text-secondary mb-4" />
                                    <span className="text-xs text-secondary tracking-wider uppercase mb-1 z-10">Budget</span>
                                    <h3 className="text-l text-foreground mb-2 z-10">{guide.whereToStay.budget.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed z-10">{guide.whereToStay.budget.why}</p>
                                </div>

                                <div className="bg-card p-6 rounded-3xl shadow-sm border border-border ring-2 ring-primary/5 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-0"></div>
                                    <Hotel className="w-8 h-8 text-primary mb-4" />
                                    <span className="text-xs text-primary tracking-wider uppercase mb-1 z-10">Mid-Range</span>
                                    <h3 className="text-lg text-foreground mb-2 z-10">{guide.whereToStay.midRange.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed z-10">{guide.whereToStay.midRange.why}</p>
                                </div>

                                <div className="bg-card p-6 rounded-3xl shadow-sm border border-border flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -z-0"></div>
                                    <Crown className="w-8 h-8 text-accent-foreground mb-4" />
                                    <span className="text-xs text-accent-foreground tracking-wider uppercase mb-1 z-10">Luxury</span>
                                    <h3 className="text-lg text-foreground mb-2 z-10">{guide.whereToStay.luxury.name}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed z-10">{guide.whereToStay.luxury.why}</p>
                                </div>
                            </div>
                        </section>

                        {/* 📝 Sample 3-Day Itinerary */}
                        {guide.itinerary && guide.itinerary.length > 0 && (
                            <section className="bg-card/60 p-8 rounded-[2.5rem] border border-border shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                                <h2 className="text-3xl text-foreground flex items-center gap-3 mb-8">
                                    <Calendar className="w-7 h-7 text-primary" />
                                    Sample {guide.itinerary.length}-Day Itinerary
                                </h2>

                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/20 before:via-border/50 before:to-transparent">
                                    {guide.itinerary.map((dayItem, idx) => {
                                        return (
                                            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                                    {dayItem.day}
                                                </div>
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-3xl shadow-sm border border-border hover:border-primary/50 transition-all">
                                                    <h3 className="text-xl text-foreground mb-4">{dayItem.focus}</h3>
                                                    <ul className="space-y-4">
                                                        <li className="flex gap-3 text-sm">
                                                            <Coffee className="w-5 h-5 text-secondary shrink-0" />
                                                            <div><strong className="text-foreground block sm:inline">Morning:</strong> <span className="text-muted-foreground">{dayItem.morning}</span></div>
                                                        </li>
                                                        <li className="flex gap-3 text-sm">
                                                            <Sun className="w-5 h-5 text-primary shrink-0" />
                                                            <div><strong className="text-foreground block sm:inline">Afternoon:</strong> <span className="text-muted-foreground">{dayItem.afternoon}</span></div>
                                                        </li>
                                                        <li className="flex gap-3 text-sm">
                                                            <Moon className="w-5 h-5 text-accent-foreground shrink-0" />
                                                            <div><strong className="text-foreground block sm:inline">Evening:</strong> <span className="text-muted-foreground">{dayItem.evening}</span></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* CTA → Itinerary Planner */}
                                <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-primary/5 border border-primary/20 px-6 py-5">
                                    <div className="flex items-start gap-3">
                                        <CalendarDays className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-semibold text-foreground">Want to plan your own itinerary?</p>
                                            <p className="text-xs text-muted-foreground mt-0.5">Use the itinerary planner to build a custom day-by-day trip around your schedule.</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/resources/itinerary-planner"
                                        className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                                    >
                                        Plan my trip <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* RIGHT SIDEBAR (4 columns) */}
                    <div className="col-span-1 lg:col-span-4 space-y-6 lg:mt-0">

                        {/* ✈️ How to Get There */}
                        <div className="bg-card p-6 rounded-3xl shadow-sm border border-border">
                            <h3 className="text-lg text-foreground flex items-center gap-2 mb-4">
                                <Plane className="w-5 h-5 text-primary" /> How to Get There
                            </h3>
                            <ul className="space-y-4 text-sm divide-y divide-border">
                                <li className="pt-2 first:pt-0">
                                    <span className="text-muted-foreground block text-xs font-semibold uppercase mb-1">Nearest Airport</span>
                                    <span className="font-medium text-foreground">{guide.howToGetThere.nearestAirport}</span>
                                </li>
                                <li className="pt-3">
                                    <span className="text-muted-foreground block text-xs font-semibold uppercase mb-1">Transportation from Airport</span>
                                    <span className="font-medium text-foreground">{guide.howToGetThere.transportation}</span>
                                </li>
                                <li className="pt-3">
                                    <span className="text-muted-foreground block text-xs font-semibold uppercase mb-1">Visa Requirements</span>
                                    <span className="font-medium text-foreground flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-secondary shrink-0" /> {guide.howToGetThere.visa}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* 🚗 Getting Around */}
                        <div className="bg-card p-6 rounded-3xl shadow-sm border border-border">
                            <h3 className="text-lg text-foreground flex items-center gap-2 mb-4">
                                <Bus className="w-5 h-5 text-secondary" /> Getting Around
                            </h3>
                            <ul className="space-y-4 text-sm divide-y divide-border">
                                <li className="pt-2 first:pt-0">
                                    <span className="text-muted-foreground block text-xs font-semibold uppercase mb-1">Public Transport</span>
                                    <span className="font-medium text-foreground">{guide.gettingAround.publicTransport}</span>
                                </li>
                                <li className="pt-3">
                                    <span className="text-muted-foreground block text-xs font-semibold uppercase mb-1">Transportation Apps</span>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {guide.gettingAround.apps.map((app, idx) => (
                                            <span key={idx} className="bg-muted text-foreground px-2 py-1 rounded text-xs ring-1 ring-border/50">{app}</span>
                                        ))}
                                    </div>
                                </li>
                                <li className="pt-3">
                                    <span className="text-muted-foreground block text-xs font-semibold uppercase mb-1">Daily Transport Budget</span>
                                    <span className="font-medium text-foreground">{guide.gettingAround.dailyBudget}</span>
                                </li>
                            </ul>
                        </div>

                        {/* 💰 Estimated Daily Budget */}
                        <div className="bg-foreground text-background p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden">
                            <div className="absolute -right-6 -top-6 w-32 h-32 bg-background/10 rounded-full blur-2xl"></div>
                            <h3 className="text-xl flex items-center gap-2 mb-6 text-background">
                                <Wallet className="w-6 h-6 text-secondary" /> Daily Budget
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between items-center bg-background/5 border border-background/10 p-3 rounded-xl">
                                    <span className="text-background/80 font-medium">Accommodation</span>
                                    <span className=" text-background">{guide.dailyBudget.accommodation}</span>
                                </div>
                                <div className="flex justify-between items-center bg-background/5 border border-background/10 p-3 rounded-xl">
                                    <span className="text-background/80 font-medium">Food</span>
                                    <span className=" text-background">{guide.dailyBudget.food}</span>
                                </div>
                                <div className="flex justify-between items-center bg-background/5 border border-background/10 p-3 rounded-xl">
                                    <span className="text-background/80 font-medium">Transportation</span>
                                    <span className=" text-background">{guide.dailyBudget.transportation}</span>
                                </div>
                                <div className="flex justify-between items-center bg-background/5 border border-background/10 p-3 rounded-xl">
                                    <span className="text-background/80 font-medium">Activities</span>
                                    <span className=" text-background">{guide.dailyBudget.activities}</span>
                                </div>
                                <div className="pt-4 mt-4 border-t border-background/20 flex justify-between items-center">
                                    <span className="text-background/90 uppercase tracking-wider text-xs">Total Per Day</span>
                                    <span className="text-2xl font-black text-secondary">~{guide.dailyBudget.total}</span>
                                </div>
                            </div>
                        </div>

                        {/* 🍽️ Where to Eat */}
                        <div className="bg-card p-6 rounded-3xl shadow-sm border border-border">
                            <h3 className="text-lg text-foreground flex items-center gap-2 mb-4">
                                <Utensils className="w-5 h-5 text-primary" /> Where to Eat
                            </h3>
                            <div className="space-y-4">
                                {guide.whereToEat.restaurants.map((rest, idx) => (
                                    <div key={idx} className="p-3 bg-muted/50 rounded-xl border border-border">
                                        <h4 className="font-semibold text-foreground text-sm">{rest.name}</h4>
                                        <p className="text-muted-foreground text-xs mt-1">{rest.typeAndPrice}</p>
                                    </div>
                                ))}
                                <div className="mt-4 pt-4 border-t border-border">
                                    <span className="text-xs uppercase text-muted-foreground tracking-wider mb-2 block">Must Try Dish</span>
                                    <div className="font-semibold text-primary text-sm flex items-center gap-2">
                                        {guide.whereToEat.mustTryDish}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 🎒 What to Pack */}
                        <div className="bg-card p-6 rounded-3xl border border-border shadow-inner">
                            <h3 className="text-lg text-foreground flex items-center gap-2 mb-4">
                                <Backpack className="w-5 h-5 text-secondary" /> What to Pack
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3">
                                    <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div><strong className="text-foreground block">Clothing:</strong> <span className="text-muted-foreground text-xs">{guide.whatToPack.clothing}</span></div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div><strong className="text-foreground block">Documents:</strong> <span className="text-muted-foreground text-xs">{guide.whatToPack.documents}</span></div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div><strong className="text-foreground block">Gadgets:</strong> <span className="text-muted-foreground text-xs">{guide.whatToPack.gadgets}</span></div>
                                </li>
                            </ul>
                        </div>

                        {/* ⚠️ Travel Tips */}
                        <div className="bg-primary/5 p-6 rounded-3xl border border-primary/20">
                            <h3 className="text-lg text-foreground flex items-center gap-2 mb-4">
                                <AlertTriangle className="w-5 h-5 text-primary" /> Essential Tips
                            </h3>
                            <div className="space-y-3 text-sm text-foreground/80 font-medium">
                                <p>🛡️ <span className=" text-foreground">Safety:</span> {guide.travelTips.safety}</p>
                                <p>💡 <span className=" text-foreground">Money:</span> {guide.travelTips.money}</p>
                                <p>🤝 <span className=" text-foreground">Etiquette:</span> {guide.travelTips.etiquette}</p>
                                <p className="mt-4 pt-3 border-t border-primary/10">
                                    <strong className="text-primary text-xs uppercase block mb-1">Important Reminder</strong>
                                    {guide.travelTips.reminder}
                                </p>
                            </div>
                        </div>

                        {/* 📸 Photo Spots */}
                        {guide.photoSpots && guide.photoSpots.length > 0 && (
                            <div className="bg-card p-6 rounded-3xl shadow-sm border border-border">
                                <h3 className="text-lg text-foreground flex items-center gap-2 mb-4">
                                    <Camera className="w-5 h-5 text-secondary" /> Top Photo Spots
                                </h3>
                                <ul className="space-y-3 text-sm font-medium text-foreground">
                                    {guide.photoSpots.map((spot, idx) => (
                                        <li key={idx} className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-secondary before:rounded-full">{spot}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

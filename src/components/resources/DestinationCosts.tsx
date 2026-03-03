"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, DollarSign, Plane, Info, Clock } from "lucide-react";
import { destinationCosts, type DestinationCost } from "@/data/resources";

function BudgetBar({ label, amount, max }: { label: string; amount: number; max: number }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-14 shrink-0">{label}</span>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(amount / max) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            </div>
            <span className="text-xs font-semibold text-foreground w-16 text-right">${amount}/day</span>
        </div>
    );
}

function CostCard({ dest }: { dest: DestinationCost }) {
    const [open, setOpen] = useState(false);
    const maxBudget = dest.budgetPerDay.luxury;

    const visaColor =
        dest.visa.forMalaysians === "Home country"
            ? "text-blue-500"
            : dest.visa.fee === "Free" || dest.visa.fee.includes("Free")
                ? "text-emerald-500"
                : "text-amber-500";

    return (
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 hover:bg-muted/50 transition-colors text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h3 className=" text-foreground">{dest.name}</h3>
                        <p className="text-sm text-muted-foreground">{dest.country} · {dest.currency}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-3 text-sm font-medium">
                        <span className="text-emerald-600">${dest.budgetPerDay.budget}</span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-amber-600">${dest.budgetPerDay.mid}</span>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-rose-600">${dest.budgetPerDay.luxury}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
                </div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-6 border-t border-border pt-5 space-y-6">
                            {/* Budget bars */}
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Daily Budget</p>
                                <div className="space-y-2">
                                    <BudgetBar label="Budget" amount={dest.budgetPerDay.budget} max={maxBudget} />
                                    <BudgetBar label="Mid" amount={dest.budgetPerDay.mid} max={maxBudget} />
                                    <BudgetBar label="Luxury" amount={dest.budgetPerDay.luxury} max={maxBudget} />
                                </div>
                            </div>

                            {/* Typical costs */}
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Typical Costs</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { label: "Hostel", value: dest.typicalCosts.hostel },
                                        { label: "Mid Hotel", value: dest.typicalCosts.midHotel },
                                        { label: "Street Food", value: dest.typicalCosts.streetFood },
                                        { label: "Restaurant", value: dest.typicalCosts.restaurant },
                                        { label: "Local Transport", value: dest.typicalCosts.localTransport },
                                        { label: "City Transfer", value: dest.typicalCosts.cityTransfer },
                                    ].map((item) => (
                                        <div key={item.label} className="bg-muted/50 rounded-xl p-3">
                                            <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                                            <p className="text-sm font-semibold text-foreground">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visa + Best Time */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                                    <Plane className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">Visa (Malaysian passport)</p>
                                        <p className={`text-sm font-semibold ${visaColor}`}>{dest.visa.forMalaysians}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Fee: {dest.visa.fee}</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-start gap-3 bg-muted/50 rounded-xl p-4">
                                    <Clock className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">Best Time to Visit</p>
                                        <p className="text-sm font-semibold text-foreground">{dest.bestTimeToVisit}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tips */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="w-4 h-4 text-primary" />
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Pro Tips</p>
                                </div>
                                <ul className="space-y-2">
                                    {dest.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary mt-0.5 shrink-0">→</span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function DestinationCostsSection() {
    const [search, setSearch] = useState("");

    const filtered = destinationCosts.filter(
        (d) =>
            d.name.toLowerCase().includes(search.toLowerCase()) ||
            d.country.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        💰 Cost Breakdown
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">How Much Does It Really Cost?</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Real numbers from my trips. Budget tier = backpacker hostels + street food. Mid = comfortable hotel + restaurant meals. Visa info is for <strong>Malaysian passport</strong> holders.
                    </p>
                </div>

                {/* Legend */}
                <div className="flex gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-muted-foreground">Budget (backpacker)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                        <span className="text-muted-foreground">Mid-range</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500" />
                        <span className="text-muted-foreground">Luxury</span>
                    </div>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search destination or country..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full sm:w-80 h-10 px-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 mb-6"
                />

                <div className="space-y-3">
                    {filtered.length > 0 ? (
                        filtered.map((dest) => <CostCard key={dest.placeId} dest={dest} />)
                    ) : (
                        <p className="text-muted-foreground py-8 text-center">No destinations found for "{search}".</p>
                    )}
                </div>
            </div>
        </section>
    );
}

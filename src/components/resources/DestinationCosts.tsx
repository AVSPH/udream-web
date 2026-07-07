"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  DollarSign,
  Plane,
  Info,
  Clock,
  Search,
  ArrowLeft,
  ArrowUpDown,
  Bed,
  Utensils,
  Bus,
  MapPin,
  Check,
  Calculator,
  RefreshCw,
  Home,
} from "lucide-react";
import { destinationCosts, type DestinationCost } from "@/data/resources";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// ── Currencies ─────────────────────────────────────────────────────────────────

const CURRENCIES: {
  code: string;
  label: string;
  symbol: string;
  rate: number;
}[] = [
  { code: "USD", label: "US Dollar", symbol: "$", rate: 1 },
  { code: "MYR", label: "Malaysian Ringgit", symbol: "RM", rate: 4.7 },
  { code: "EUR", label: "Euro", symbol: "€", rate: 0.92 },
  { code: "GBP", label: "British Pound", symbol: "£", rate: 0.79 },
  { code: "SGD", label: "Singapore Dollar", symbol: "S$", rate: 1.34 },
  { code: "AUD", label: "Australian Dollar", symbol: "A$", rate: 1.52 },
  { code: "CAD", label: "Canadian Dollar", symbol: "C$", rate: 1.36 },
  { code: "JPY", label: "Japanese Yen", symbol: "¥", rate: 149.5 },
  { code: "KRW", label: "South Korean Won", symbol: "₩", rate: 1330 },
  { code: "THB", label: "Thai Baht", symbol: "฿", rate: 35.5 },
  { code: "IDR", label: "Indonesian Rupiah", symbol: "Rp", rate: 15500 },
  { code: "PHP", label: "Philippine Peso", symbol: "₱", rate: 56.5 },
  { code: "INR", label: "Indian Rupee", symbol: "₹", rate: 83.5 },
  { code: "AED", label: "UAE Dirham", symbol: "AED", rate: 3.67 },
  { code: "CNY", label: "Chinese Yuan", symbol: "¥", rate: 7.2 },
  { code: "VND", label: "Vietnamese Dong", symbol: "₫", rate: 25000 },
  { code: "HKD", label: "Hong Kong Dollar", symbol: "HK$", rate: 7.83 },
  { code: "SAR", label: "Saudi Riyal", symbol: "SAR", rate: 3.75 },
  { code: "QAR", label: "Qatari Riyal", symbol: "QAR", rate: 3.64 },
  { code: "TWD", label: "New Taiwan Dollar", symbol: "NT$", rate: 31 },
  { code: "BHD", label: "Bahraini Dinar", symbol: "BHD", rate: 0.376 },
  { code: "KWD", label: "Kuwaiti Dinar", symbol: "KWD", rate: 0.307 },
  { code: "BND", label: "Brunei Dollar", symbol: "B$", rate: 1.34 },
  { code: "CHF", label: "Swiss Franc", symbol: "CHF", rate: 0.8 },
  { code: "TRY", label: "Turkish Lira", symbol: "₺", rate: 41 },
  { code: "KZT", label: "Kazakhstani Tenge", symbol: "₸", rate: 520 },
  { code: "UZS", label: "Uzbekistani So'm", symbol: "so'm", rate: 12600 },
  { code: "TJS", label: "Tajikistani Somoni", symbol: "SM", rate: 10.6 },
  { code: "GEL", label: "Georgian Lari", symbol: "₾", rate: 2.7 },
  { code: "AMD", label: "Armenian Dram", symbol: "֏", rate: 385 },
  { code: "RSD", label: "Serbian Dinar", symbol: "din", rate: 108 },
  { code: "BAM", label: "Bosnian Mark", symbol: "KM", rate: 1.8 },
  { code: "ALL", label: "Albanian Lek", symbol: "L", rate: 92 },
];

// ── Home cities ────────────────────────────────────────────────────────────────
// Maps origin city → currency code + estimated daily living cost (USD, mid-range)

const HOME_CITIES: {
  city: string;
  country: string;
  currency: string;
  avgDailyUSD: number;
}[] = [
  // Philippines
  {
    city: "Philippines",
    country: "Philippines",
    currency: "PHP",
    avgDailyUSD: 32,
  },
  { city: "Cebu", country: "Philippines", currency: "PHP", avgDailyUSD: 28 },
  { city: "Davao", country: "Philippines", currency: "PHP", avgDailyUSD: 25 },
  // Malaysia
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    currency: "MYR",
    avgDailyUSD: 35,
  },
  { city: "Penang", country: "Malaysia", currency: "MYR", avgDailyUSD: 28 },
  {
    city: "Johor Bahru",
    country: "Malaysia",
    currency: "MYR",
    avgDailyUSD: 25,
  },
  {
    city: "Kota Kinabalu",
    country: "Malaysia",
    currency: "MYR",
    avgDailyUSD: 25,
  },
  { city: "Kuching", country: "Malaysia", currency: "MYR", avgDailyUSD: 24 },
  { city: "Ipoh", country: "Malaysia", currency: "MYR", avgDailyUSD: 22 },
  // Southeast Asia
  {
    city: "Singapore",
    country: "Singapore",
    currency: "SGD",
    avgDailyUSD: 120,
  },
  {
    city: "Bandar Seri Begawan",
    country: "Brunei",
    currency: "BND",
    avgDailyUSD: 55,
  },
  { city: "Jakarta", country: "Indonesia", currency: "IDR", avgDailyUSD: 30 },
  { city: "Bali", country: "Indonesia", currency: "IDR", avgDailyUSD: 35 },
  { city: "Bangkok", country: "Thailand", currency: "THB", avgDailyUSD: 45 },
  { city: "Phuket", country: "Thailand", currency: "THB", avgDailyUSD: 45 },
  {
    city: "Ho Chi Minh City",
    country: "Vietnam",
    currency: "VND",
    avgDailyUSD: 35,
  },
  { city: "Hanoi", country: "Vietnam", currency: "VND", avgDailyUSD: 32 },
  {
    city: "Phnom Penh",
    country: "Cambodia",
    currency: "USD",
    avgDailyUSD: 30,
  },
  // East Asia
  { city: "Tokyo", country: "Japan", currency: "JPY", avgDailyUSD: 100 },
  { city: "Osaka", country: "Japan", currency: "JPY", avgDailyUSD: 85 },
  { city: "Seoul", country: "South Korea", currency: "KRW", avgDailyUSD: 80 },
  { city: "Busan", country: "South Korea", currency: "KRW", avgDailyUSD: 65 },
  { city: "Taipei", country: "Taiwan", currency: "TWD", avgDailyUSD: 60 },
  { city: "Taichung", country: "Taiwan", currency: "TWD", avgDailyUSD: 50 },
  {
    city: "Hong Kong",
    country: "Hong Kong",
    currency: "HKD",
    avgDailyUSD: 110,
  },
  { city: "Macau", country: "Macau", currency: "HKD", avgDailyUSD: 90 },
  { city: "Beijing", country: "China", currency: "CNY", avgDailyUSD: 60 },
  { city: "Shanghai", country: "China", currency: "CNY", avgDailyUSD: 65 },
  // Central Asia & the Caucasus
  { city: "Almaty", country: "Kazakhstan", currency: "KZT", avgDailyUSD: 40 },
  {
    city: "Tashkent",
    country: "Uzbekistan",
    currency: "UZS",
    avgDailyUSD: 30,
  },
  {
    city: "Dushanbe",
    country: "Tajikistan",
    currency: "TJS",
    avgDailyUSD: 28,
  },
  { city: "Tbilisi", country: "Georgia", currency: "GEL", avgDailyUSD: 35 },
  { city: "Yerevan", country: "Armenia", currency: "AMD", avgDailyUSD: 32 },
  // South Asia
  { city: "Mumbai", country: "India", currency: "INR", avgDailyUSD: 30 },
  { city: "Delhi", country: "India", currency: "INR", avgDailyUSD: 28 },
  // Middle East (popular OFW destinations)
  { city: "Dubai", country: "UAE", currency: "AED", avgDailyUSD: 100 },
  { city: "Abu Dhabi", country: "UAE", currency: "AED", avgDailyUSD: 95 },
  { city: "Riyadh", country: "Saudi Arabia", currency: "SAR", avgDailyUSD: 80 },
  { city: "Jeddah", country: "Saudi Arabia", currency: "SAR", avgDailyUSD: 75 },
  { city: "Doha", country: "Qatar", currency: "QAR", avgDailyUSD: 90 },
  { city: "Kuwait City", country: "Kuwait", currency: "KWD", avgDailyUSD: 85 },
  { city: "Manama", country: "Bahrain", currency: "BHD", avgDailyUSD: 70 },
  // Oceania
  { city: "Sydney", country: "Australia", currency: "AUD", avgDailyUSD: 120 },
  {
    city: "Melbourne",
    country: "Australia",
    currency: "AUD",
    avgDailyUSD: 110,
  },
  // Europe
  { city: "London", country: "UK", currency: "GBP", avgDailyUSD: 130 },
  { city: "Paris", country: "France", currency: "EUR", avgDailyUSD: 120 },
  { city: "Istanbul", country: "Turkey", currency: "TRY", avgDailyUSD: 60 },
  { city: "Athens", country: "Greece", currency: "EUR", avgDailyUSD: 80 },
  { city: "Rome", country: "Italy", currency: "EUR", avgDailyUSD: 100 },
  { city: "Barcelona", country: "Spain", currency: "EUR", avgDailyUSD: 100 },
  { city: "Madrid", country: "Spain", currency: "EUR", avgDailyUSD: 95 },
  { city: "Vienna", country: "Austria", currency: "EUR", avgDailyUSD: 105 },
  { city: "Brussels", country: "Belgium", currency: "EUR", avgDailyUSD: 105 },
  { city: "Berlin", country: "Germany", currency: "EUR", avgDailyUSD: 100 },
  {
    city: "Amsterdam",
    country: "Netherlands",
    currency: "EUR",
    avgDailyUSD: 120,
  },
  {
    city: "Zurich",
    country: "Switzerland",
    currency: "CHF",
    avgDailyUSD: 150,
  },
  { city: "Belgrade", country: "Serbia", currency: "RSD", avgDailyUSD: 40 },
  {
    city: "Sarajevo",
    country: "Bosnia and Herzegovina",
    currency: "BAM",
    avgDailyUSD: 35,
  },
  { city: "Tirana", country: "Albania", currency: "ALL", avgDailyUSD: 32 },
  // Americas
  { city: "New York", country: "USA", currency: "USD", avgDailyUSD: 150 },
  { city: "Los Angeles", country: "USA", currency: "USD", avgDailyUSD: 130 },
  { city: "Chicago", country: "USA", currency: "USD", avgDailyUSD: 115 },
  { city: "Toronto", country: "Canada", currency: "CAD", avgDailyUSD: 100 },
  {
    city: "Vancouver",
    country: "Canada",
    currency: "CAD",
    avgDailyUSD: 105,
  },
];

// ── Budget Planner ─────────────────────────────────────────────────────────────

const TIER_BREAKDOWN = {
  budget: { accom: 0.35, food: 0.35, transport: 0.3 },
  mid: { accom: 0.45, food: 0.3, transport: 0.25 },
  luxury: { accom: 0.55, food: 0.25, transport: 0.2 },
} as const;

function formatAmount(value: number, symbol: string, rate: number): string {
  const converted = value * rate;
  if (rate >= 1000) return `${symbol}${Math.round(converted).toLocaleString()}`;
  if (rate >= 100) return `${symbol}${Math.round(converted).toLocaleString()}`;
  if (rate >= 10) return `${symbol}${converted.toFixed(0)}`;
  return `${symbol}${converted.toFixed(2)}`;
}

function BudgetPlanner() {
  const [destId, setDestId] = useState<number | "">("");
  const [days, setDays] = useState(7);
  const [tier, setTier] = useState<"budget" | "mid" | "luxury">("mid");
  const [homeCity, setHomeCity] = useState("Kuala Lumpur");
  const [result, setResult] = useState<null | {
    dailyUSD: number;
    totalUSD: number;
    accomUSD: number;
    foodUSD: number;
    transportUSD: number;
  }>(null);

  const selectedDest = destinationCosts.find((d) => d.placeId === destId);
  const selectedHome =
    HOME_CITIES.find((h) => h.city === homeCity) ?? HOME_CITIES[0];
  const selectedCur =
    CURRENCIES.find((c) => c.code === selectedHome.currency) ?? CURRENCIES[0];

  function calculate() {
    if (!selectedDest || days < 1) return;
    const dailyUSD = selectedDest.budgetPerDay[tier];
    const breakdown = TIER_BREAKDOWN[tier];
    const totalUSD = dailyUSD * days;
    const accomUSD = dailyUSD * breakdown.accom;
    const foodUSD = dailyUSD * breakdown.food;
    const transportUSD = dailyUSD * breakdown.transport;
    setResult({ dailyUSD, totalUSD, accomUSD, foodUSD, transportUSD });
  }

  // Cost savings vs staying at home for the same number of days
  const homeTotalUSD = selectedHome.avgDailyUSD * days;
  const savingsPct =
    result && homeTotalUSD > 0
      ? Math.round(((homeTotalUSD - result.totalUSD) / homeTotalUSD) * 100)
      : null;

  // Show flight estimate when origin is Malaysian city
  const isMalaysianOrigin = selectedHome.country === "Malaysia";
  const showFlight = isMalaysianOrigin && !!selectedDest?.flightFromKL;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Calculator className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h2 className="font-semibold text-foreground text-base">
            Budget Planner
          </h2>
          <p className="text-xs text-muted-foreground">
            Estimate your trip cost — costs shown in your home currency
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {/* Where are you from */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            <span className="inline-flex items-center gap-1">
              <Home className="w-3 h-3" /> Where are you from?
            </span>
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between h-10 pl-3 pr-3 rounded-xl border border-border bg-card text-sm hover:bg-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30">
              <span className="text-foreground truncate">
                {selectedHome.city !== selectedHome.country
                  ? `${selectedHome.city}, ${selectedHome.country}`
                  : selectedHome.city}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              data-lenis-prevent
              className="max-h-60 overflow-y-auto w-[--radix-dropdown-menu-trigger-width]"
            >
              {HOME_CITIES.map((h) => (
                <DropdownMenuItem
                  key={h.city}
                  onClick={() => {
                    setHomeCity(h.city);
                    setResult(null);
                  }}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex flex-col">
                    <span>{h.city}</span>
                    <span className="text-[10px] text-muted-foreground">
                      {h.city !== h.country ? `${h.country} · ` : ""}
                      {h.currency}
                    </span>
                  </div>
                  {homeCity === h.city && (
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Destination */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Destination
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full flex items-center justify-between h-10 pl-3 pr-3 rounded-xl border border-border bg-card text-sm hover:bg-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30">
              <span
                className={
                  selectedDest ? "text-foreground" : "text-muted-foreground"
                }
              >
                {selectedDest
                  ? `${selectedDest.name}, ${selectedDest.country}`
                  : "Select a destination…"}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0 ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              data-lenis-prevent
              className="max-h-60 overflow-y-auto w-[--radix-dropdown-menu-trigger-width]"
            >
              {destinationCosts.map((d) => (
                <DropdownMenuItem
                  key={d.placeId}
                  onClick={() => {
                    setDestId(d.placeId);
                    setResult(null);
                  }}
                  className="flex items-center justify-between gap-4"
                >
                  {d.name}, {d.country}
                  {destId === d.placeId && (
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Trip Duration (days)
          </label>
          <input
            type="number"
            min={1}
            max={365}
            value={days}
            onChange={(e) => {
              setDays(Math.max(1, Number(e.target.value)));
              setResult(null);
            }}
            className="w-full h-10 px-3 rounded-xl border border-border bg-card text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Travel style */}
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Travel Style
          </label>
          <div className="flex h-10 rounded-xl border border-border overflow-hidden">
            {(["budget", "mid", "luxury"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTier(t);
                  setResult(null);
                }}
                className={`flex-1 text-xs font-medium transition-colors ${
                  tier === t
                    ? t === "budget"
                      ? "bg-emerald-500 text-white"
                      : t === "mid"
                        ? "bg-amber-500 text-white"
                        : "bg-rose-500 text-white"
                    : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        disabled={!selectedDest}
        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Calculator className="w-4 h-4" /> Calculate Budget
      </button>

      {/* Results */}
      <AnimatePresence>
        {result && selectedDest && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 20 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="rounded-xl bg-muted/40 border border-border p-4 sm:p-5">
              {/* Total */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5 pb-5 border-b border-border">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    {days}-day {tier} trip to {selectedDest.name}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold text-foreground break-words">
                    {formatAmount(
                      result.totalUSD,
                      selectedCur.symbol,
                      selectedCur.rate,
                    )}
                    <span className="text-base font-normal text-muted-foreground ml-1">
                      {selectedCur.code}
                    </span>
                  </p>
                  {selectedCur.code !== "USD" && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      ≈ ${result.totalUSD.toFixed(0)} USD total
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start sm:items-end gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-sm">
                    <span className="text-muted-foreground">Per day:</span>
                    <span className="font-semibold text-foreground">
                      {formatAmount(
                        result.dailyUSD,
                        selectedCur.symbol,
                        selectedCur.rate,
                      )}
                    </span>
                    <span className="text-muted-foreground">
                      {selectedCur.code}
                    </span>
                  </div>

                  {/* Savings vs home */}
                  {savingsPct !== null && savingsPct !== 0 && (
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full max-w-full break-words ${
                        savingsPct > 0
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {savingsPct > 0
                        ? `${savingsPct}% cheaper than staying in ${selectedHome.city}`
                        : `${Math.abs(savingsPct)}% pricier than staying in ${selectedHome.city}`}
                    </span>
                  )}
                </div>
              </div>

              {/* Daily breakdown */}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Daily Cost Breakdown (estimated)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    label: "Accommodation",
                    icon: <Bed className="w-3.5 h-3.5" />,
                    amountUSD: result.accomUSD,
                    color: "text-blue-600",
                  },
                  {
                    label: "Food & Drinks",
                    icon: <Utensils className="w-3.5 h-3.5" />,
                    amountUSD: result.foodUSD,
                    color: "text-emerald-600",
                  },
                  {
                    label: "Transport & Activities",
                    icon: <Bus className="w-3.5 h-3.5" />,
                    amountUSD: result.transportUSD,
                    color: "text-violet-600",
                  },
                ].map(({ label, icon, amountUSD, color }) => (
                  <div
                    key={label}
                    className="bg-card rounded-xl p-3 border border-border"
                  >
                    <div className={`flex items-center gap-1.5 mb-2 ${color}`}>
                      {icon}
                      <span className="text-xs font-medium leading-snug">
                        {label}
                      </span>
                    </div>
                    <p className="text-base font-bold text-foreground">
                      {formatAmount(
                        amountUSD,
                        selectedCur.symbol,
                        selectedCur.rate,
                      )}
                    </p>
                    <p className="text-[10px] text-muted-foreground">/day</p>
                  </div>
                ))}
              </div>

              {/* Flight estimate (Malaysian origin only) */}
              {showFlight && (
                <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-card border border-border px-4 py-3">
                  <Plane className="w-3.5 h-3.5 text-primary shrink-0" />
                  <p className="text-xs text-foreground">
                    Est. return flight from{" "}
                    <span className="font-semibold">{selectedHome.city}</span>:{" "}
                    <span className="font-semibold text-primary">
                      {selectedDest.flightFromKL}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      (based on budget airlines)
                    </span>
                  </p>
                </div>
              )}

              <p className="flex items-center gap-1.5 mt-4 text-[10px] text-muted-foreground">
                <RefreshCw className="w-3 h-3" />
                Exchange rates are approximate. Verify with your bank before
                travelling.
                {selectedDest.currency !== "USD" &&
                  ` Local currency: ${selectedDest.currency}.`}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function getTier(mid: number) {
  if (mid < 60)
    return { label: "Budget-friendly", borderCls: "border-l-emerald-500" };
  if (mid < 150) return { label: "Mid-range", borderCls: "border-l-amber-500" };
  return { label: "Premium", borderCls: "border-l-rose-500" };
}

function getVisaBadge(forMalaysians: string, fee: string) {
  if (forMalaysians === "Home country")
    return {
      label: "Home Country",
      badgeCls: "bg-blue-100 text-blue-700",
      textCls: "text-blue-600",
    };
  if (fee === "Free" || fee.includes("Free"))
    return {
      label: "Visa-free",
      badgeCls: "bg-emerald-100 text-emerald-700",
      textCls: "text-emerald-600",
    };
  if (forMalaysians.toLowerCase().includes("on arrival"))
    return {
      label: "Visa on Arrival",
      badgeCls: "bg-amber-100 text-amber-700",
      textCls: "text-amber-600",
    };
  return {
    label: "Visa Required",
    badgeCls: "bg-red-100 text-red-700",
    textCls: "text-red-600",
  };
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function BudgetBar({
  label,
  amount,
  max,
  colorCls,
}: {
  label: string;
  amount: number;
  max: number;
  colorCls: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted-foreground w-14 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${colorCls}`}
          initial={{ width: 0 }}
          animate={{ width: `${(amount / max) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
      <span className="text-xs font-semibold text-foreground w-16 text-right">
        ${amount}/day
      </span>
    </div>
  );
}

const COST_ITEMS: {
  key: keyof DestinationCost["typicalCosts"];
  label: string;
  icon: React.ReactNode;
}[] = [
  { key: "hostel", label: "Hostel", icon: <Bed className="w-3.5 h-3.5" /> },
  {
    key: "midHotel",
    label: "Mid Hotel",
    icon: <Bed className="w-3.5 h-3.5" />,
  },
  {
    key: "streetFood",
    label: "Street Food",
    icon: <Utensils className="w-3.5 h-3.5" />,
  },
  {
    key: "restaurant",
    label: "Restaurant",
    icon: <Utensils className="w-3.5 h-3.5" />,
  },
  {
    key: "localTransport",
    label: "Local Transport",
    icon: <Bus className="w-3.5 h-3.5" />,
  },
  {
    key: "cityTransfer",
    label: "City Transfer",
    icon: <MapPin className="w-3.5 h-3.5" />,
  },
];

function CostCard({ dest }: { dest: DestinationCost }) {
  const [open, setOpen] = useState(false);
  const tier = getTier(dest.budgetPerDay.mid);
  const visa = getVisaBadge(dest.visa.forMalaysians, dest.visa.fee);

  return (
    <div
      className={`rounded-2xl border border-border bg-card overflow-hidden border-l-[3px] ${tier.borderCls}`}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/40 transition-colors text-left gap-4"
      >
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-foreground">{dest.name}</span>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${visa.badgeCls}`}
            >
              {visa.label}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {dest.country} · {dest.currency}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:flex items-center gap-1 text-sm font-semibold">
            <span className="text-emerald-600">
              ${dest.budgetPerDay.budget}
            </span>
            <span className="text-border px-0.5">·</span>
            <span className="text-amber-600">${dest.budgetPerDay.mid}</span>
            <span className="text-border px-0.5">·</span>
            <span className="text-rose-600">${dest.budgetPerDay.luxury}</span>
            <span className="text-xs text-muted-foreground font-normal ml-1">
              /day
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Expanded panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 border-t border-border space-y-5">
              {/* Daily budget bars */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Daily Budget Range
                </p>
                <div className="space-y-2">
                  <BudgetBar
                    label="Budget"
                    amount={dest.budgetPerDay.budget}
                    max={dest.budgetPerDay.luxury}
                    colorCls="bg-emerald-500"
                  />
                  <BudgetBar
                    label="Mid"
                    amount={dest.budgetPerDay.mid}
                    max={dest.budgetPerDay.luxury}
                    colorCls="bg-amber-500"
                  />
                  <BudgetBar
                    label="Luxury"
                    amount={dest.budgetPerDay.luxury}
                    max={dest.budgetPerDay.luxury}
                    colorCls="bg-rose-500"
                  />
                </div>
              </div>

              {/* Typical costs */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Typical Costs
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {COST_ITEMS.map(({ key, label, icon }) => (
                    <div
                      key={key}
                      className="bg-muted/50 rounded-xl p-3 flex items-start gap-2"
                    >
                      <span className="text-muted-foreground mt-0.5 shrink-0">
                        {icon}
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {dest.typicalCosts[key]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visa + Best time + Flight */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-3.5">
                  <Plane className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Visa (Malaysian passport)
                    </p>
                    <p className={`text-sm font-semibold ${visa.textCls}`}>
                      {dest.visa.forMalaysians}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Fee: {dest.visa.fee}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-3.5">
                  <Clock className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Best Time to Visit
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {dest.bestTimeToVisit}
                    </p>
                    {dest.flightFromKL && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Flight from KL:{" "}
                        <span className="font-medium text-foreground">
                          {dest.flightFromKL}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Pro tips */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-3.5 h-3.5 text-primary" />
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Pro Tips
                  </p>
                </div>
                <ul className="space-y-1.5">
                  {dest.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary font-bold mt-0.5 shrink-0">
                        →
                      </span>
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

// ── Filters ────────────────────────────────────────────────────────────────────

const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Cheapest first", value: "cheapest" },
  { label: "Most expensive first", value: "expensive" },
];

const BUDGET_FILTERS = [
  { label: "All", value: "all" },
  { label: "Under $50/day", value: "budget" },
  { label: "$50–$150/day", value: "mid" },
  { label: "$150+/day", value: "premium" },
];

// ── Main export ────────────────────────────────────────────────────────────────

export function DestinationCostsSection() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [budgetFilter, setBudgetFilter] = useState("all");

  const filtered = useMemo(() => {
    let list = destinationCosts.filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.country.toLowerCase().includes(search.toLowerCase()),
    );

    if (budgetFilter === "budget")
      list = list.filter((d) => d.budgetPerDay.mid < 50);
    if (budgetFilter === "mid")
      list = list.filter(
        (d) => d.budgetPerDay.mid >= 50 && d.budgetPerDay.mid < 150,
      );
    if (budgetFilter === "premium")
      list = list.filter((d) => d.budgetPerDay.mid >= 150);

    if (sort === "cheapest")
      list = [...list].sort((a, b) => a.budgetPerDay.mid - b.budgetPerDay.mid);
    if (sort === "expensive")
      list = [...list].sort((a, b) => b.budgetPerDay.mid - a.budgetPerDay.mid);

    return list;
  }, [search, sort, budgetFilter]);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
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
              <DollarSign className="w-4 h-4" /> Cost Breakdown
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              How Much Does It{" "}
              <span className="text-primary">Really Cost?</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Real numbers from my trips. Budget = backpacker hostels + street
              food. Mid = comfortable hotel + restaurant meals. Visa info is for{" "}
              <strong>Malaysian passport</strong> holders.
            </p>

            {/* Disclaimer */}
            <div className="mt-6 max-w-2xl flex items-start gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 px-4 py-3.5">
              <Info className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Heads up:</strong> these figures are estimates from our
                own trips and ongoing research ~ actual costs change with
                seasons, exchange rates, and travel style. Treat them as
                planning guides, not exact quotes, and double-check big-ticket
                items (flights, tours, visas) before booking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-10">
        {/* ── Budget Planner ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <BudgetPlanner />
        </motion.div>

        {/* ── Legend ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-5 mb-8 text-sm"
        >
          {[
            { color: "bg-emerald-500", label: "Budget (backpacker)" },
            { color: "bg-amber-500", label: "Mid-range" },
            { color: "bg-rose-500", label: "Luxury" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
              <span className="text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── Search + Sort ────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search destination or country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 h-10 pl-4 pr-3 rounded-full border border-border bg-card text-sm hover:bg-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30">
              <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
              <span>{SORT_OPTIONS.find((o) => o.value === sort)?.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {SORT_OPTIONS.map((o) => (
                <DropdownMenuItem
                  key={o.value}
                  onClick={() => setSort(o.value)}
                  className="flex items-center justify-between gap-6"
                >
                  {o.label}
                  {sort === o.value && (
                    <Check className="w-3.5 h-3.5 text-primary" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* ── Budget filter tabs ───────────────────────────────────── */}
        <div className="flex items-center gap-2 flex-wrap mb-6">
          {BUDGET_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setBudgetFilter(f.value)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                budgetFilter === f.value
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-sm text-muted-foreground">
            {filtered.length} destination{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── Cards ───────────────────────────────────────────────── */}
        <div className="space-y-2.5">
          {filtered.length > 0 ? (
            filtered.map((dest, i) => (
              <motion.div
                key={dest.placeId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <CostCard dest={dest} />
              </motion.div>
            ))
          ) : (
            <p className="text-muted-foreground py-12 text-center">
              No destinations found{search ? ` for "${search}"` : ""}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

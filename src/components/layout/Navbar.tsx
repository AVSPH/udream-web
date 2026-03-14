"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu, X, Globe, Map as MapIcon, BookOpen, User,
    Home, Backpack, ChevronDown, FileText, CheckSquare, Plane
} from "lucide-react";

type NavItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
    dropdown?: {
        name: string;
        href: string;
        icon: React.ReactNode;
        description?: string;
    }[];
};

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Blog", href: "/blog", icon: <BookOpen size={18} /> },
  { name: "Map", href: "/map", icon: <MapIcon size={18} /> },
  {
    name: "Resources",
    href: "/resources",
    icon: <Backpack size={18} />,
    dropdown: [
      {
        name: "Travel Guides",
        href: "/resources/guide",
        icon: <Globe size={18} />,
        description: "Detailed itineraries",
      },
      {
        name: "Visa Guide",
        href: "/resources/visa-guide",
        icon: <FileText size={18} />,
        description: "Entry requirements",
      },
      {
        name: "Destination Costs",
        href: "/resources/destination-costs",
        icon: <CheckSquare size={18} />,
        description: "Real budget breakdowns",
      },
      {
        name: "Travel Tools",
        href: "/resources/travel-tools",
        icon: <Plane size={18} />,
        description: "Gear & planning apps",
      },
      {
        name: "Itinerary Planner",
        href: "/resources/itinerary-planner",
        icon: <MapIcon size={18} />,
        description: "Drag & drop builder",
      },
    ],
  },
  { name: "About", href: "/about", icon: <User size={18} /> },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setMobileDropdownOpen(null);
    }, [pathname]);

    const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[5000] border-b border-border/40 transition-all duration-300 bg-white backdrop-blur-lg py-2"
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2 relative z-10">
                    <div className="relative w-20 h-8 md:w-28 md:h-10 lg:h-10 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/assets/logo.png"
                            alt="Udream Logo"
                            fill
                            className="object-contain object-left md:object-center"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation + Guide CTA */}
                <div className="hidden lg:flex items-center gap-2 ml-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(d => pathname === d.href));
                        const hasDropdown = !!item.dropdown;

                        return (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-full flex items-center gap-1.5 text-sm font-medium tracking-wide transition-all duration-200 
                                        ${isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                                        }`}
                                >
                                    {item.name}
                                    {hasDropdown && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}

                                    {isActive && !hasDropdown && (
                                        <motion.div
                                            layoutId="desktop-nav-indicator"
                                            className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-primary rounded-t-full"
                                        />
                                    )}
                                </Link>

                                {/* Desktop Dropdown Menu */}
                                {hasDropdown && (
                                    <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[320px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 pt-4">
                                        <div className="bg-white backdrop-blur-xl border border-border overflow-hidden rounded-2xl shadow-xl p-3 grid gap-1">
                                            {item.dropdown!.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted transition-colors group/sub"
                                                >
                                                    <div className="mt-0.5 p-2 bg-primary/10 text-primary rounded-lg group-hover/sub:bg-primary group-hover/sub:text-primary-foreground transition-colors">
                                                        {sub.icon}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-foreground group-hover/sub:text-primary transition-colors">
                                                            {sub.name}
                                                        </div>
                                                        {sub.description && (
                                                            <div className="text-xs text-muted-foreground mt-0.5">
                                                                {sub.description}
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <Link
                        href="/nomad"
                        className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Free Guide
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 lg:hidden relative z-10">
                    <Link
                        href="/nomad"
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary text-white text-xs font-semibold"
                    >
                        Free Guide
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-2 text-foreground hover:bg-muted rounded-full transition-colors flex items-center justify-center h-10 w-10"
                        aria-label="Toggle Menu"
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, rotate: 90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: -90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 right-0 bg-white backdrop-blur-xl border-b border-border shadow-2xl lg:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 max-h-[80vh] overflow-y-auto gap-2">
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.href;
                                const hasDropdown = !!item.dropdown;
                                const isDropdownOpen = mobileDropdownOpen === item.name;

                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 + 0.1 }}
                                        className="flex flex-col"
                                    >
                                        <div className="flex items-center">
                                            <Link
                                                href={item.href}
                                                onClick={hasDropdown ? (e) => toggleMobileDropdown(item.name, e) : undefined}
                                                className={`flex-1 flex items-center justify-between p-3 rounded-xl transition-all ${isActive && !hasDropdown
                                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className={isActive && !hasDropdown ? "text-white" : "text-primary"}>
                                                        {item.icon}
                                                    </span>
                                                    <span className="font-semibold text-base">{item.name}</span>
                                                </div>

                                                {hasDropdown && (
                                                    <ChevronDown
                                                        size={18}
                                                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'}`}
                                                    />
                                                )}
                                            </Link>
                                        </div>

                                        {/* Mobile Submenu */}
                                        <AnimatePresence>
                                            {hasDropdown && isDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                    className="overflow-hidden flex flex-col gap-1 pl-12 pr-4"
                                                >
                                                    {item.dropdown!.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${pathname === sub.href
                                                                ? "bg-primary/10 text-primary font-medium"
                                                                : "text-foreground/70 hover:bg-muted hover:text-foreground"
                                                                }`}
                                                        >
                                                            <span className="text-primary/70">{sub.icon}</span>
                                                            <span className="text-sm">{sub.name}</span>
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

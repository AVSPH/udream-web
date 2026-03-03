"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Map as MapIcon, BookOpen, User, Home, Backpack } from "lucide-react";

const navItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Destinations", href: "/destinations", icon: <Globe size={18} /> },
    { name: "Blog", href: "/blog", icon: <BookOpen size={18} /> },
    { name: "Map", href: "/map", icon: <MapIcon size={18} /> },
    { name: "Resources", href: "/resources", icon: <Backpack size={18} /> },
    { name: "About", href: "/about", icon: <User size={18} /> },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 ${scrolled
                ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50"
                : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="relative w-32 h-16 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/assets/logo.png"
                            alt="Udream Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative px-1 py-2 text-sm font-medium tracking-wide transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
                                    }`}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-foreground hover:bg-muted rounded-full transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-4 p-3 rounded-xl transition-all ${isActive
                                                ? "bg-primary text-white shadow-md shadow-primary/20"
                                                : "text-foreground/70 hover:bg-muted hover:text-primary"
                                                }`}
                                        >
                                            <span className={isActive ? "text-white" : "text-primary"}>
                                                {item.icon}
                                            </span>
                                            <span className="font-semibold text-base">{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Footer Decor */}
                        <div className="px-9 pb-8 text-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                                Udream — Adventure Awaits
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

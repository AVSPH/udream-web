"use client";

import { motion } from "framer-motion";
import { Send, Mail, Instagram, Twitter, Facebook, Youtube, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
    {
        title: "Explore",
        links: [
            { name: "Destinations", href: "/destinations" },
            { name: "Travel Map", href: "/map" },
            { name: "Photography", href: "/gallery" },
            { name: "Adventure Logs", href: "/blog" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Our Story", href: "/story" },
            { name: "Contact", href: "/contact" },
            { name: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms-of-service" },
        ],
    },
];

const SOCIAL_LINKS = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Youtube", icon: <Youtube className="w-5 h-5" />, href: "#" },
];

export function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Newsletter / CTA Section at the Top */}
                {/* <div className="relative mb-24 rounded-3xl overflow-hidden border border-background/10 bg-background/5 p-8 md:p-16 text-center backdrop-blur-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40 rotate-12"
                        >
                            <Mail className="w-8 h-8 text-white" />
                        </motion.div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Don&apos;t Miss the <span className="text-primary">Next Adventure</span>
                        </h2>
                        <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
                            Join our community of explorers. Subscribe to get the latest itineraries and secret travel tips.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                required
                                placeholder="Your travel email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 h-12 px-6 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                            <button
                                disabled={status !== "idle"}
                                className="h-12 px-8 rounded-full bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 disabled:opacity-50 transition-all shadow-lg shadow-primary/20 active:scale-95 whitespace-nowrap"
                            >
                                {status === "loading" ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : status === "success" ? (
                                    "Subscribed!"
                                ) : (
                                    <>
                                        Join Now
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div> */}

                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 ">
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105">
                            <div className="relative w-32 h-16 overflow-hidden">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Udream Logo"
                                    fill
                                    className="object-contain "
                                />
                            </div>
                        </Link>
                        <p className="text-background/60 text-base leading-relaxed max-w-xs mb-8">
                            Documenting the raw beauty of our planet, one journey at a time. Join us in exploring the world&apos;s most extraordinary places.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center text-background/60 hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {FOOTER_LINKS.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{group.title}</h3>
                            <ul className="space-y-4">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-background/60 hover:text-primary transition-colors text-base"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Copyright */}
                <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-background/40 text-sm">
                        © {new Date().getFullYear()} Udream Travels. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-background/40 hover:text-white text-sm flex items-center gap-1 transition-colors">
                            Support <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

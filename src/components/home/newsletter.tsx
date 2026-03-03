"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="py-24 px-4 bg-foreground text-background">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative p-12 md:p-16 border border-background/10 bg-background/5 backdrop-blur-sm text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40 rotate-12"
                    >
                        <Mail className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Join the <span className="text-primary">Adventure</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-background/70 mb-10 max-w-xl mx-auto"
                    >
                        Subscribe to our newsletter and get the latest travel stories, photography tips, and exclusive itineraries straight to your inbox.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                    >
                        <div className="flex-1 relative">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 px-6 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
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
                                    Subscribe
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </motion.form>

                    {status === "success" && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 text-emerald-400 text-sm font-medium"
                        >
                            Check your inbox! You've successfully joined Udream.
                        </motion.p>
                    )}

                    <p className="mt-8 text-xs text-background/30 px-6">
                        We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our Terms and Privacy Policy.
                    </p>
                </div>
            </div>
        </section>
    );
}

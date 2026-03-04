"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Plane, Wallet, Compass, Wrench } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const ResourceCard = ({
    title,
    description,
    icon: Icon,
    delay,
    href,
}: {
    title: string;
    description: string;
    icon: React.ElementType;
    delay: number;
    href: string;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="group relative"
        >
            <Link href={href} className="block h-full">
                <div className="h-full rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:bg-card hover:border-primary/30 transition-all duration-300">
                    <div className="p-8 flex flex-col h-full relative">
                        {/* Background Icon */}
                        <div className="absolute -right-8 -top-8 text-primary/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                            <Icon className="w-48 h-48" strokeWidth={1} />
                        </div>

                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                            <Icon className="w-7 h-7 text-primary" />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-3 relative z-10 group-hover:text-primary transition-colors">
                            {title}
                        </h3>

                        <p className="text-muted-foreground mb-8 flex-grow relative z-10 text-lg leading-relaxed">
                            {description}
                        </p>

                        <div className="flex items-center text-primary font-medium text-sm mt-auto relative z-10">
                            <span className="mr-2">Explore {title.toLowerCase()}</span>
                            <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export function ResourcesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-24 px-4 bg-muted/20 relative overflow-hidden">
            {/* Decorative background elements can stay quite subtle */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Compass className="w-4 h-4" />
                            <span>Travel Resources</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Plan Your Next <span className="text-primary">Adventure</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Everything I use to plan, budget, and navigate my trips. Stop guessing and start traveling smarter.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/resources"
                            className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                        >
                            View all resources
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <ResourceCard
                        title="Destination Costs"
                        description="Real cost breakdowns from every destination I've visited. Discover the true expenses for budget, mid-range, and luxury travel, complete with visa info and pro tips."
                        icon={Wallet}
                        delay={0.2}
                        href="/resources" // Points to /resources where destination costs are
                    />
                    <ResourceCard
                        title="My Toolkit"
                        description="Curated apps and websites that make every trip smoother. Explore the exact tools I use for finding cheap flights, scoring the best stays, and navigating like a local."
                        icon={Wrench} // Updated: use Wrench as a generic tools icon
                        delay={0.4}
                        href="/resources" // Points to /resources where travel tools are
                    />
                </div>
            </div>
        </section>
    );
}

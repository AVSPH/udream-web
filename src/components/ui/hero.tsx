"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Props interface for the component
interface HeroStat {
  value: string;
  label: string;
}

interface AnimatedMarqueeHeroProps {
  tagline: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  stats?: HeroStat[];
  images: string[];
  className?: string;
}

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  ctaHref = "/map",
  secondaryCtaText,
  secondaryCtaHref = "/blog",
  stats,
  images,
  className,
}) => {
  // Animation variants for the text content
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Duplicate images for a seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full h-screen overflow-hidden flex flex-col items-center justify-start pt-40 text-center px-4 md:justify-center md:pt-24",
        className,
      )}
    >
      {/* Warm ambient glow behind the headline */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/3 right-[12%] w-72 h-72 rounded-full bg-secondary/20 blur-3xl pointer-events-none animate-float-slow"
      />

      <div className="z-10 flex flex-col items-center">
        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm font-body shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          {tagline}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-none"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={FADE_IN_ANIMATION_VARIANTS}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground font-body"
        >
          {description}
        </motion.p>

        {/* Calls to Action */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href={ctaHref}
            className="cta-shine group relative overflow-hidden inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          {secondaryCtaText && (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-foreground/15 bg-card/60 backdrop-blur-sm text-foreground font-semibold hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              {secondaryCtaText}
            </Link>
          )}
        </motion.div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <motion.dl
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.75 }}
            className="mt-10 flex items-center justify-center gap-8 sm:gap-12 rounded-2xl border border-border/60 bg-background/75 backdrop-blur-md px-7 sm:px-10 py-4 shadow-lg shadow-black/5"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-none">
                  {stat.value}
                </dd>
                <span className="mt-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.dl>
        )}
      </div>

      {/* Animated Image Marquee — pauses on hover */}
      <div className="group/marquee absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="animate-marquee flex w-max gap-4 group-hover/marquee:[animation-play-state:paused]">
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-64 md:h-80 flex-shrink-0 transition-transform duration-500 hover:!rotate-0 hover:scale-[1.04] hover:z-10"
              style={{
                rotate: `${index % 2 === 0 ? -2 : 5}deg`,
              }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl shadow-md border border-border/50 transition-shadow duration-500 hover:shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

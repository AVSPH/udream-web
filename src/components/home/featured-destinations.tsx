"use client";

import { VisitedPlace, visitedPlaces } from "@/data/visited-places";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const FeaturedDestinationCard = ({ place, index }: { place: VisitedPlace; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Odd-index cards shift down for a staggered look
  const offsetClass = index % 2 === 1 ? "lg:translate-y-10" : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500 ${offsetClass}`}
    >
      <Link href={place.blogLink} className="block">
        {/* Image */}
        <div className="aspect-[3/4] w-full overflow-hidden">
          <Image
            src={place.thumbnail}
            alt={place.name}
            width={400}
            height={533}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Top: country badge + index number */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-medium border border-white/15">
            <MapPin className="w-3 h-3" />
            {place.country}
          </span>
          <span className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/60 text-xs font-medium">
            0{index + 1}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-white/45 text-[11px] tracking-[0.2em] uppercase font-medium mb-1.5">
            {place.dateVisited}
          </p>
          <h3 className="text-xl font-bold text-white leading-snug mb-3">
            {place.name}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-4">
            {place.description}
          </p>

          {/* Explore link */}
          <div className="flex items-center gap-1.5 text-white/70 group-hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium">Explore</span>
            <ArrowUpRight className="w-4 h-4 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export function FeaturedDestinations() {
  const featuredIds = [2, 6, 23, 27, 6, 10, 18, ,24, 25];
  const featured = visitedPlaces.filter((p) => featuredIds.includes(p.id));

  return (
    <section id="destinations" className="py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured{" "}
              <span style={{ fontFamily: "var(--font-script)" }} className="text-primary italic">
                Destinations
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A curated selection of our most memorable journeys across the globe. From serene landscapes to bustling cities.
            </p>
          </div>
          <Link
            href="/map"
            className="group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Explore all destinations
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Cards — extra bottom padding to accommodate the stagger offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
          {featured.map((place, index) => (
            <FeaturedDestinationCard key={place.id} place={place} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import { VisitedPlace, visitedPlaces } from "@/data/visited-places";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const FeaturedDestinationCard = ({ place, index }: { place: VisitedPlace; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-transparent group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <Link href={place.blogLink}>
        <div className="aspect-[4/5] w-full overflow-hidden">
          <Image
            src={place.thumbnail}
            alt={place.name}
            width={400}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">{place.country}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{place.name}</h3>
          <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {place.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export function FeaturedDestinations() {
  // Let's pick some visually distinct featured places
  const featuredIds = [7, 6, 23, 27]; // Bali, Ha Long Bay, Lucerne, Sarajevo
  const featured = visitedPlaces.filter((p) => featuredIds.includes(p.id));

  return (
    <section className="py-24 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-muted-foreground">Destinations</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A curated selection of our most memorable journeys across the globe. From serene landscapes to bustling cities.
            </p>
          </div>
          <Link 
            href="/destinations" 
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Explore all destinations
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((place, index) => (
            <FeaturedDestinationCard key={place.id} place={place} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

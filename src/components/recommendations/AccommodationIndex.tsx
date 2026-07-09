import Link from "next/link";
import { Star, MapPin, Monitor, Wifi, Car, ArrowUpRight, BedDouble, Users } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { accommodations } from "@/data/accommodations";

export function AccommodationIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20">
      {/* Hero */}
      <header className="max-w-3xl mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
          Recommendations
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
          Places we would stay again
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A hand-picked list of the apartments and stays we actually rate ~ real places with fast Wi-Fi, honest locations and hosts who care. We only add a stay here if we would book it ourselves.
        </p>
      </header>

      {/* Listings */}
      <div className="grid md:grid-cols-2 gap-6">
        {accommodations.map((a) => (
          <Link
            key={a.slug}
            href={`/recommendations/accommodation/${a.slug}`}
            className="group rounded-3xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(46,38,30,0.4)] transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <SmartImage
                src={a.heroImage}
                alt={a.name}
                caption={a.tagline}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {a.guestFavorite && (
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-foreground text-[11px] font-semibold inline-flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Guest favourite
                  </span>
                )}
                {a.goodForRemoteWork && (
                  <span className="px-2.5 py-1 rounded-full bg-primary/90 text-white text-[11px] font-semibold inline-flex items-center gap-1">
                    <Monitor className="w-3 h-3" /> Remote-work ready
                  </span>
                )}
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" /> {a.city}, {a.country}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {a.rating.toFixed(2)}
                  <span className="font-normal text-muted-foreground">({a.reviewCount})</span>
                </span>
              </div>

              <h2 className="font-display text-xl font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                {a.name}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{a.tagline}</p>

              <div className="flex items-center flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {a.capacity.guests} guests</span>
                <span className="inline-flex items-center gap-1.5"><BedDouble className="w-3.5 h-3.5" /> {a.capacity.beds} beds</span>
                {a.wifiMbps && <span className="inline-flex items-center gap-1.5"><Wifi className="w-3.5 h-3.5" /> ~{a.wifiMbps} Mbps</span>}
                <span className="inline-flex items-center gap-1.5"><Car className="w-3.5 h-3.5" /> Free parking</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">
                  <span className="font-display font-bold text-foreground">{a.priceDisplay}</span>
                  {a.priceApprox && <span className="text-muted-foreground"> · {a.priceApprox}</span>}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO copy */}
      <section className="max-w-3xl mt-16 text-muted-foreground leading-relaxed space-y-4">
        <h2 className="text-2xl font-display font-bold text-foreground">How we pick our accommodation recommendations</h2>
        <p>
          Finding the right place to stay can make or break a trip. We look for accommodation that gets the fundamentals right ~ a central, walkable <strong className="font-medium text-foreground">location</strong>, genuinely fast Wi-Fi for anyone working remotely, a comfortable bed, and a host with a strong track record of reviews. For digital nomads and long-stay travellers, a <strong className="font-medium text-foreground">dedicated workspace</strong> and reliable internet matter just as much as the view.
        </p>
        <p>
          Every stay on this page is one we would happily book again. We link straight to the official booking page so you get the host&apos;s real prices and availability, and we tell you honestly what each place is best for ~ whether that is a quick city break or settling in for a month of remote work.
        </p>
      </section>
    </div>
  );
}

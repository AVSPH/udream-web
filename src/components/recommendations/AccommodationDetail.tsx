import Link from "next/link";
import {
  Star, MapPin, Wifi, Car, Users, BedDouble, Bath, Home,
  Check, ExternalLink, Sparkles, Monitor, ArrowLeft, Quote, ShieldCheck,
  HeartHandshake, Navigation,
} from "lucide-react";
import { AccommodationGallery } from "./AccommodationGallery";
import { SmartImage } from "./SmartImage";
import type { AccommodationListing } from "@/data/accommodations";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </span>
  );
}

export function AccommodationDetail({ listing }: { listing: AccommodationListing }) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(listing.location.mapQuery)}&z=15&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.location.mapQuery)}`;

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-20">
      {/* Back link */}
      <Link
        href="/recommendations/accommodation"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-5"
      >
        <ArrowLeft className="w-4 h-4" />
        All accommodation
      </Link>

      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {listing.guestFavorite && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Guest favourite
            </span>
          )}
          {listing.goodForRemoteWork && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-foreground/80 text-xs font-semibold">
              <Monitor className="w-3.5 h-3.5" /> Remote-work ready
            </span>
          )}
        </div>
        <div className="flex items-start gap-3 mb-3">
          <h1 className="flex-1 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {listing.name}
          </h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/sticker/sticker-10.png"
            alt="Meri & Man arriving with luggage"
            className="hidden sm:block w-20 lg:w-24 shrink-0 -mt-1 -rotate-6 drop-shadow-sm select-none pointer-events-none"
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-semibold text-foreground">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {listing.rating.toFixed(2)}
            <span className="font-normal text-muted-foreground">({listing.reviewCount} reviews)</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {listing.city}, {listing.country}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Home className="w-4 h-4" />
            {listing.propertyType}
          </span>
        </div>
      </header>

      {/* Gallery */}
      <div className="mb-10">
        <AccommodationGallery images={listing.images} />
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-10">
        {/* Main column */}
        <div className="min-w-0">
          {/* Quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {[
              { icon: Users, label: "Guests", value: listing.capacity.guests },
              { icon: BedDouble, label: "Beds", value: listing.capacity.beds },
              { icon: Home, label: "Bedroom", value: listing.capacity.bedrooms },
              { icon: Bath, label: "Bath", value: listing.capacity.baths },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl border border-border bg-card p-4 text-center">
                <f.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-display text-xl font-bold leading-none">{f.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">About this place</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {listing.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Why we love it */}
          <section className="mb-8 rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 md:p-7">
            <h2 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Why we recommend it
            </h2>
            <ul className="space-y-3">
              {listing.whyWeLove.map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* A small ask */}
          <section className="mb-8 rounded-3xl border border-secondary/40 bg-secondary/10 p-6 md:p-7">
            <div className="flex items-start gap-4">
              <span className="p-2.5 rounded-2xl bg-secondary/25 text-foreground shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-xl font-display font-bold mb-2">A small ask</h2>
                <p className="text-foreground/80 leading-relaxed">
                  When you book, please send our regards to {listing.host.name} and let {listing.host.name} know you found this place through <strong className="font-semibold text-foreground">Udream</strong>. It costs you nothing, it makes a lovely host&apos;s day, and it helps us keep recommending gems like this one. Thank you ~ it means a lot to us.
                </p>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">What this place offers</h2>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {listing.amenities.map((a) => (
                <div key={a} className="flex items-center gap-3 text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {listing.amenitiesTotal} amenities in total
              {listing.wifiMbps ? ` · Wi-Fi measured around ${listing.wifiMbps} Mbps` : ""}.
            </p>
          </section>

          {/* Location */}
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-4">Where you will be</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">{listing.location.summary}</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {listing.location.nearby.map((n) => (
                <div key={n.place} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <span className="text-sm text-foreground/80 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" /> {n.place}
                  </span>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap">{n.time}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                title={`Map of ${listing.city}`}
                src={mapSrc}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-3"
            >
              Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {(listing.location.gettingAround || (listing.location.routeImages && listing.location.routeImages.length > 0)) && (
              <div className="mt-8">
                <h3 className="text-lg font-display font-bold mb-3 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-primary" /> Getting around
                </h3>
                {listing.location.gettingAround && (
                  <p className="text-muted-foreground leading-relaxed mb-4">{listing.location.gettingAround}</p>
                )}
              </div>
            )}

            {listing.location.routeImages && listing.location.routeImages.length > 0 && (
              <div className="mt-2">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {listing.location.routeImages.map((img) => (
                    <figure key={img.src} className="rounded-2xl overflow-hidden border border-border bg-card">
                      <SmartImage
                        src={img.src}
                        alt={img.alt}
                        caption={img.caption}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      {img.caption && (
                        <figcaption className="text-xs text-muted-foreground px-3 py-2 leading-snug">{img.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Reviews */}
          <section className="mb-4">
            <h2 className="text-2xl font-display font-bold mb-5 flex items-center gap-2">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              {listing.rating.toFixed(2)} · {listing.reviewCount} reviews
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {listing.reviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-border bg-card p-5">
                  <Quote className="w-5 h-5 text-primary/30 mb-2" />
                  <blockquote className="text-sm text-foreground/80 leading-relaxed mb-4">{r.text}</blockquote>
                  <figcaption className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.author}</p>
                      {r.location && <p className="text-xs text-muted-foreground">{r.location}</p>}
                    </div>
                    <div className="text-right">
                      <Stars rating={r.rating} />
                      <p className="text-xs text-muted-foreground mt-1">{r.date}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky booking card */}
        <aside className="lg:sticky lg:top-28 h-fit">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_50px_-24px_rgba(46,38,30,0.35)]">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-2xl font-bold text-foreground">{listing.priceDisplay}</span>
              {listing.priceApprox && (
                <span className="text-sm text-muted-foreground">{listing.priceApprox}</span>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-foreground">{listing.rating.toFixed(2)}</span>
              <span>· {listing.reviewCount} reviews</span>
            </div>

            <a
              href={listing.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-shine relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Check availability on Airbnb
              <ExternalLink className="w-4 h-4" />
            </a>
            {listing.priceNote && (
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{listing.priceNote}</p>
            )}

            {/* Highlights */}
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              {listing.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Host + facts */}
            <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
              <div className="flex items-center gap-2 text-foreground/80">
                <Users className="w-4 h-4 text-primary" /> Hosted by {listing.host.name}
              </div>
              <p className="text-xs text-muted-foreground">{listing.host.note}</p>
              {listing.wifiMbps && (
                <div className="flex items-center gap-2 text-foreground/80">
                  <Wifi className="w-4 h-4 text-primary" /> ~{listing.wifiMbps} Mbps Wi-Fi
                </div>
              )}
              <div className="flex items-center gap-2 text-foreground/80">
                <Car className="w-4 h-4 text-primary" /> Free parking on premises
              </div>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground/70 text-center mt-3 leading-relaxed">
            We are not the host. Booking happens on Airbnb, where the host sets prices and availability.
          </p>
        </aside>
      </div>
    </article>
  );
}

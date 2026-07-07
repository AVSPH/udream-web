import { Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { visitedPlaces } from "@/data/visited-places";

const FOOTER_LINKS = [
    {
        title: "Explore",
        links: [
            { name: "Travel Map", href: "/map" },
            { name: "Adventure Logs", href: "/blog" },
            { name: "Destinations", href: "/#destinations" },
            { name: "Our Story", href: "/our-story" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Attraction Prices", href: "/resources/attraction-prices" },
            { name: "Destination Costs", href: "/resources/destination-costs" },
            { name: "Visa Guide", href: "/resources/visa-guide" },
            { name: "Travel Guides", href: "/resources/guide" },
            { name: "Itinerary Planner", href: "/resources/itinerary-planner" },
        ],
    },
    {
        title: "Work with us",
        links: [
            { name: "Travel Consultation", href: "/booking" },
            { name: "Travel Curator", href: "/curator" },
            { name: "Free Nomad Guide", href: "/nomad" },
            { name: "Contact", href: "/#contact" },
        ],
    },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    href: "https://instagram.com/udreamtravels.official",
  },
  {
    name: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
      </svg>
    ),
    href: "https://tiktok.com/@meriandayman",
  },
  {
    name: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
    href: "https://facebook.com/udreamtravels",
  },
  {
    name: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    href: "https://youtube.com/@udreamtravels",
  },
];

const FOOTER_STATS = [
    { value: `${new Set(visitedPlaces.map((p) => p.country)).size}+`, label: "Countries" },
    { value: `${visitedPlaces.length}+`, label: "Destinations" },
    { value: `${new Set(visitedPlaces.map((p) => p.continent)).size}`, label: "Continents" },
];

export function Footer() {
    return (
        <footer className="relative bg-foreground text-background overflow-hidden">
            {/* Gradient hairline */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Decorative glow + watermark */}
            <div aria-hidden className="absolute -top-32 right-[10%] w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div
                aria-hidden
                style={{ fontFamily: "var(--font-script)" }}
                className="absolute -bottom-10 right-4 text-[7rem] md:text-[11rem] leading-none text-background/[0.04] select-none pointer-events-none whitespace-nowrap"
            >
                keep exploring
            </div>

            <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-6">
                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-5 transition-transform hover:scale-105">
                            <div className="relative w-32 h-16 overflow-hidden">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Udream Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-background/60 text-base leading-relaxed max-w-xs mb-7">
                            Documenting the raw beauty of our planet, one journey at a time. Join us in exploring the world&apos;s most extraordinary places.
                        </p>

                        {/* Travel stats */}
                        <div className="flex items-center gap-6 mb-8">
                            {FOOTER_STATS.map((stat) => (
                                <div key={stat.label}>
                                    <p className="font-display text-2xl font-bold text-white leading-none">{stat.value}</p>
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-background/40 mt-1.5">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center text-background/60 hover:text-white hover:border-primary hover:bg-primary/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
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
                            <ul className="space-y-3.5">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-center gap-1 text-background/60 hover:text-white transition-colors text-[15px]"
                                        >
                                            <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-14 pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-background/40 text-sm">
                        © {new Date().getFullYear()} Udream Travels. All rights reserved.
                    </p>
                    <p className="text-background/40 text-sm flex items-center gap-1.5">
                        Made with
                        <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
                        somewhere on the road
                    </p>
                    <div className="flex items-center gap-5 text-sm">
                        <Link href="/privacy-policy" className="text-background/40 hover:text-white transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms-of-service" className="text-background/40 hover:text-white transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

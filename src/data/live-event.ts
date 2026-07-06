// Single source of truth for the upcoming free live event.
// Edit the details here — the /events page, homepage banner,
// calendar link, and SEO schema all read from this object.

export const liveEvent = {
  // Set to true to make the event public again: the /events page,
  // homepage banner, navbar link, and sitemap entry all key off this.
  published: false,

  name: "UDream Live: Travel & Nomad Q&A",
  tagline:
    "A free live hangout with the UDream community — real travel stories, honest budget talk, and your questions answered live.",
  description:
    "Join us for a free 90-minute live session. We'll share what's new at UDream, walk through our favorite destinations and real cost breakdowns, then open the floor for a live Q&A on destinations, budgets, visas, and starting the digital-nomad life.",

  // Friday, September 4, 2026 · 7:00 PM Philippine Time (GMT+8)
  startsAt: "2026-09-04T19:00:00+08:00",
  endsAt: "2026-09-04T20:30:00+08:00",
  dateLabel: "Friday, September 4, 2026",
  timeLabel: "7:00 PM PHT (GMT+8)",
  locationLabel: "Online · stream link sent to your email",
  priceLabel: "100% Free",

  // Tag attached to registrations so they're distinguishable
  // from newsletter subscribers in the leads backend.
  registrationTag: "Live Event - Sep 4 2026",

  agenda: [
    { time: "7:00 PM", title: "Welcome & what's new at UDream" },
    { time: "7:10 PM", title: "Travel stories & destination highlights" },
    { time: "7:35 PM", title: "Live Q&A — destinations, budgets, visas, nomad life" },
    { time: "8:20 PM", title: "Wrap-up & what's coming next" },
  ],

  perks: [
    "Completely free — no ticket, no catch",
    "Live Q&A: bring any travel or nomad question",
    "Real cost breakdowns from recent trips",
    "Can't make it? Register anyway and we'll email you the recap",
  ],
} as const;

function toCalendarStamp(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function googleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: liveEvent.name,
    dates: `${toCalendarStamp(liveEvent.startsAt)}/${toCalendarStamp(liveEvent.endsAt)}`,
    details: `${liveEvent.description}\n\nRegister free: https://www.udreamtravels.com/events`,
    location: "Online",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function eventHasEnded(now: Date = new Date()): boolean {
  return now.getTime() > new Date(liveEvent.endsAt).getTime();
}

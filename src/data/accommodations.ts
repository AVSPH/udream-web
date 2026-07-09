// Curated accommodation recommendations ~ real places we would stay again.
// Each listing links out to its booking page; we only add places we rate.

export interface AccommodationImage {
  src: string; // /accommodations/<slug>/<file>
  alt: string;
  caption?: string;
}

export interface AccommodationReview {
  author: string;
  location?: string;
  date: string;
  rating: number;
  text: string;
}

export interface NearbyPlace {
  place: string;
  time: string;
}

export interface AccommodationListing {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  country: string;
  region: string;
  propertyType: string;
  airbnbUrl: string;
  priceDisplay: string; // headline nightly price
  priceApprox?: string; // approx in another currency
  priceNote?: string;
  rating: number;
  reviewCount: number;
  guestFavorite: boolean;
  host: { name: string; superhost: boolean; note: string };
  capacity: { guests: number; bedrooms: number; beds: number; baths: number };
  sleeping: string[];
  highlights: string[];
  description: string[];
  whyWeLove: string[];
  amenities: string[];
  amenitiesTotal: number;
  wifiMbps?: number;
  goodForRemoteWork: boolean;
  location: {
    summary: string;
    nearby: NearbyPlace[];
    mapQuery: string; // Google Maps query for the embed + link
    routeImages?: AccommodationImage[]; // walking-route map screenshots
  };
  houseRules: string[];
  reviews: AccommodationReview[];
  images: AccommodationImage[];
  heroImage: string;
  featured: boolean;
}

export const accommodations: AccommodationListing[] = [
  {
    slug: "mostar-workspace-city-center",
    name: "Workspace w/ Monitor | City Center + Parking, AC",
    tagline:
      "A remote-work-ready apartment in the heart of Mostar ~ real desk, big monitor, fast Wi-Fi and a huge terrace, 15 minutes on foot from the Old Bridge.",
    city: "Mostar",
    country: "Bosnia & Herzegovina",
    region: "Europe",
    propertyType: "Entire rental unit",
    airbnbUrl: "https://www.airbnb.com/rooms/1186129818004474239",
    priceDisplay: "₱4,588 / night",
    priceApprox: "≈ $80 / night",
    priceNote: "About ₱18,353 total for 4 nights, before any taxes or fees. Prices set by the host and vary by season.",
    rating: 4.94,
    reviewCount: 48,
    guestFavorite: true,
    host: { name: "Mirza", superhost: true, note: "Superhost · 2 years hosting · 100% response rate" },
    capacity: { guests: 4, bedrooms: 1, beds: 2, baths: 1 },
    sleeping: ["Bedroom with 1 king bed", "Living room with 1 sofa bed"],
    highlights: [
      "Self check-in with a lockbox",
      "Free parking on premises (genuinely rare in this area)",
      "Superhost with a 4.94 rating",
      "Dedicated workstation with an external monitor",
    ],
    description: [
      "Located in the heart of Mostar, this apartment is an ideal base for exploring the city. All the major sights are within a 15-minute walk, so you can drop your bags and start wandering straight away.",
      "It offers a spacious terrace, a king-size bed, two AC units, a comfy lounge, a proper workstation and fast Wi-Fi ~ a rare combination that makes it work equally well for a weekend of sightseeing or a longer remote-work stay.",
      "You are 2 minutes from the main bus lines and the city park, 7 minutes from Mepas Mall, 12 minutes from the gym and city pool, and about 15 minutes on foot from the iconic Old Bridge.",
    ],
    whyWeLove: [
      "The workstation is the real deal ~ a full-size desk and a large external monitor, not a laptop perched on a dining table. If you work remotely, this is the difference between a stay you tolerate and one you extend.",
      "Free on-site parking is almost unheard of this close to the centre, which makes it perfect if you are road-tripping the Balkans.",
      "The terrace with proper outdoor seating and a mountain view is where you will end up every evening.",
    ],
    amenities: [
      "Fast Wi-Fi",
      "Dedicated workspace + monitor",
      "Full kitchen",
      "Free parking on premises",
      "Air conditioning (2 units)",
      "Washer",
      "TV",
      "Bathtub",
      "Spacious terrace",
      "Self check-in (lockbox)",
    ],
    amenitiesTotal: 42,
    wifiMbps: 42,
    goodForRemoteWork: true,
    location: {
      summary:
        "Central Mostar, on Kneza Domagoja ~ a quiet residential pocket that is still a short walk from both the old town and the everyday local spots (bakeries, coffee, ćevapi, supermarkets).",
      nearby: [
        { place: "Main bus lines & city park", time: "2 min walk" },
        { place: "Mepas Mall", time: "7 min walk" },
        { place: "Gym & city pool", time: "12 min walk" },
        { place: "Old Bridge (Stari Most)", time: "15 min walk" },
        { place: "Main Bus Station", time: "14 min walk" },
        { place: "West Bus Station (Mostar Zapad)", time: "17 min walk" },
      ],
      mapQuery: "Kneza Domagoja, Mostar, Bosnia and Herzegovina",
      routeImages: [
        { src: "/accommodations/mostar-workspace/route-old-bridge.jpg", alt: "Walking route from the apartment to the Old Bridge, about 15 minutes", caption: "Walk to the Old Bridge ~ about 15 min" },
        { src: "/accommodations/mostar-workspace/route-main-bus-station.jpg", alt: "Walking route from the apartment to Mostar's Main Bus Station, about 14 minutes", caption: "Walk to the Main Bus Station ~ about 14 min" },
        { src: "/accommodations/mostar-workspace/route-west-bus-station.jpg", alt: "Walking route from the apartment to the West Bus Station (Mostar Zapad), about 17 minutes", caption: "Walk to the West Bus Station ~ about 17 min" },
        { src: "/accommodations/mostar-workspace/location-satellite.jpg", alt: "Satellite view marking the apartment location on Kneza Domagoja", caption: "The apartment location on Kneza Domagoja" },
      ],
    },
    houseRules: ["Check-in after 2:00 PM", "Checkout before 11:00 AM", "4 guests maximum"],
    reviews: [
      {
        author: "Sam",
        location: "Crested Butte, Colorado",
        date: "1 week ago",
        rating: 5,
        text: "This was probably the best Airbnb I've ever stayed in. It was so incredibly comfortable, roomy, and well furnished. The couch and the bed were amazing, and it was such a treat to have a proper workspace with such an awesome monitor. The balcony was also such a bonus, with even more comfortable seating outside, plus a great view. I instantly felt at home here. If I'm ever back in Mostar, I am 100% staying here.",
      },
      {
        author: "Kirill",
        location: "Almaty, Kazakhstan",
        date: "May 2026",
        rating: 5,
        text: "The apartment was excellent - very spacious, with a large living room, a perfect location, and everything was exceptionally clean. The huge balcony with outdoor furniture was amazing for spending time outside on warm days. What we appreciated the most was the fantastic workspace, which made the apartment ideal for longer stays and remote work. Communication with Mirza was outstanding from start to finish. Highly recommended!",
      },
      {
        author: "Rachel",
        date: "March 2026",
        rating: 5,
        text: "This was a great stay. Apartment was super clean and very well equipped with everything you could need. Couch was great, internet good, great view from balcony. Location was also great: a short walk from the old town but so close to local areas with great burek, coffee, cevapi, and shopping. Mirza was very accommodating letting us leave our bags before check in. Definitely recommend!",
      },
      {
        author: "Gunkut",
        date: "February 2026",
        rating: 5,
        text: "We had a great stay. The place is cosy, clean, and very well located, making it easy to get around. The host was very helpful and responsive. We had a small issue during our stay, and it was handled quickly and professionally. Everything went smoothly and we felt very comfortable. We would gladly stay again!",
      },
      {
        author: "Gabrielle",
        date: "3 weeks ago",
        rating: 5,
        text: "We had a really comfortable stay here. Well furnished and equipped with everything we needed. Great terrace, kitchen and living room. The workstation was a plus for my husband who was working remotely. Location was good, close to a good burger joint, buregdzinica and supermarket, and a short walk from the tourist area.",
      },
    ],
    images: [
      { src: "/accommodations/mostar-workspace/workspace.jpg", alt: "Dedicated workspace with a large external monitor and ergonomic chair", caption: "The workstation ~ full desk and a big external monitor" },
      { src: "/accommodations/mostar-workspace/living-room.jpg", alt: "Bright living room with a large sectional sofa and plants", caption: "Living room with a huge sectional sofa" },
      { src: "/accommodations/mostar-workspace/balcony.jpg", alt: "Spacious private terrace with outdoor sofas and a table", caption: "The terrace ~ your evening spot" },
      { src: "/accommodations/mostar-workspace/bedroom.jpg", alt: "Bedroom with a king-size bed and bedside lamp", caption: "Bedroom with a king bed" },
      { src: "/accommodations/mostar-workspace/workspace-detail.jpg", alt: "Close-up of the desk with an external monitor and monitor arm", caption: "The monitor up close ~ ready to plug in and work" },
      { src: "/accommodations/mostar-workspace/lounge-corner.jpg", alt: "Cosy lounge corner with plants, a TV and lots of natural light", caption: "The bright lounge corner" },
      { src: "/accommodations/mostar-workspace/kitchen.jpg", alt: "Fully equipped kitchen with fridge, oven and cooktop", caption: "Full kitchen" },
      { src: "/accommodations/mostar-workspace/dining.jpg", alt: "Dining nook with table and chairs beside the balcony door", caption: "Dining nook by the terrace" },
      { src: "/accommodations/mostar-workspace/bedroom-detail.jpg", alt: "Bedroom detail with the king bed, nightstand and warm lamp", caption: "Bedroom detail" },
      { src: "/accommodations/mostar-workspace/balcony-2.jpg", alt: "Terrace from another angle with outdoor sofas and a mountain view", caption: "The terrace from another angle" },
      { src: "/accommodations/mostar-workspace/bathroom.jpg", alt: "Bathroom with a bathtub and washer", caption: "Bathroom with tub and washer" },
      { src: "/accommodations/mostar-workspace/entrance.jpg", alt: "Entry hallway with wardrobe and a welcome sign", caption: "Welcoming entry hallway" },
      { src: "/accommodations/mostar-workspace/hallway.jpg", alt: "Hallway leading to the rooms with a woven runner rug", caption: "Hallway through to the rooms" },
      { src: "/accommodations/mostar-workspace/living-room-2.jpg", alt: "Living room from another angle showing the sofa and workspace together", caption: "Living room and workspace together" },
    ],
    heroImage: "/accommodations/mostar-workspace/workspace.jpg",
    featured: true,
  },
];

export function getAccommodation(slug: string): AccommodationListing | undefined {
  return accommodations.find((a) => a.slug === slug);
}

export const SITE_URL = "https://udreamtravels.com";

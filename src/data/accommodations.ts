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
      "Let yourself in anytime with the lockbox",
      "Your own free parking spot, almost unheard of this central",
      "A Superhost who actually replies (4.94 across 48 stays)",
      "A real desk and external monitor, not a laptop on the table",
    ],
    description: [
      "Mostar rewards staying central, and this apartment drops you right in the thick of it. Leave your bags, step out the door, and you are wandering the old stone streets within about a quarter of an hour ~ no taxis, no logistics, just go.",
      "What makes it stand out is that it handles two very different trips at once. There is a proper desk with a real monitor for anyone logging on, genuinely quick Wi-Fi, and two AC units for the summer heat ~ but also a king bed, a soft lounge and a wide terrace that quietly becomes your favourite room the moment the sun drops.",
      "Day to day, everything sits close: a couple of minutes to the main bus lines and the city park, seven to Mepas Mall, a dozen to the gym and city pool, and roughly fifteen on foot to the Old Bridge itself.",
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
  {
    slug: "belgrade-lela-zvezdara",
    name: "Lela | Stylish Open-Plan Apartment, Zvezdara",
    tagline:
      "A stylish, modern open-space apartment in Belgrade's quiet, well-connected Zvezdara ~ one direct bus to the centre, a big balcony, fast Wi-Fi and a pet-friendly host.",
    city: "Belgrade",
    country: "Serbia",
    region: "Europe",
    propertyType: "Entire rental unit",
    airbnbUrl: "https://www.airbnb.com/rooms/1482754431354867201",
    priceDisplay: "₱4,009 / night",
    priceApprox: "≈ $70 / night",
    priceNote: "Prices vary by season and dates ~ add your check-in and checkout on Airbnb to see the exact total for your stay.",
    rating: 5.0,
    reviewCount: 14,
    guestFavorite: true,
    host: { name: "Danijela", superhost: true, note: "Superhost · 100% response rate · replies within an hour" },
    capacity: { guests: 2, bedrooms: 1, beds: 1, baths: 1 },
    sleeping: ["Bedroom with 1 double bed"],
    highlights: [
      "A perfect 5.0 across 14 stays so far",
      "Sits in the top 5% of homes for reliability",
      "Guests keep singling out how smooth the arrival is",
      "Free parking right at the building",
    ],
    description: [
      "This is an apartment that feels designed rather than just furnished. A bar-height island anchors the kitchen, the living room flows straight off it, and a generous balcony runs along the front ~ the kind of open-plan space where you unpack once and actually settle in.",
      "Zvezdara is Belgrade's quiet secret: leafy, residential and properly local, yet a single bus from the stop right outside the door carries you into the centre. It suits couples, solo travellers and anyone working a few days from the road, and there is a comfy corner for a pet ~ ours would approve.",
    ],
    whyWeLove: [
      "The open-plan design is genuinely stylish ~ a bar-height island, statement art and a warm, put-together feel that photos barely capture.",
      "It is quietly practical for longer stays: a dedicated workspace, blackout curtains and a big balcony that guests keep mentioning in reviews.",
      "It is properly pet-friendly (there is a resident sausage dog), and the host, Danijela, is the kind of Superhost who helps with the white-card police registration and early check-in.",
    ],
    amenities: [
      "High-speed Wi-Fi",
      "Dedicated workspace",
      "Full kitchen with bar",
      "Free parking on premises",
      "Air conditioning",
      "Washer",
      "Large flat-screen TV",
      "Spacious balcony",
      "Blackout curtains",
      "Pet-friendly",
    ],
    amenitiesTotal: 10,
    goodForRemoteWork: true,
    location: {
      summary:
        "Zvezdara, a quiet and well-connected residential district of Belgrade. A bus stop sits right in front of the building with one direct bus to the city centre, and there are shops and bakeries within a couple of minutes' walk.",
      nearby: [
        { place: "Bus stop (direct to centre)", time: "In front" },
        { place: "Shops & bakeries", time: "2 min walk" },
        { place: "Belgrade city centre", time: "~1 direct bus" },
      ],
      mapQuery: "Zvezdara, Belgrade, Serbia",
      routeImages: [
        { src: "/accommodations/belgrade-lela/route-center.jpg", alt: "Transit route from the apartment into central Belgrade", caption: "One direct bus into the centre" },
        { src: "/accommodations/belgrade-lela/location-map.jpg", alt: "Map marking the apartment's location in Zvezdara", caption: "The apartment in Zvezdara" },
      ],
    },
    houseRules: ["2 guests maximum", "Self check-in", "Pet-friendly"],
    reviews: [
      {
        author: "Michael",
        location: "Belgrade, Serbia",
        date: "June 2026",
        rating: 5,
        text: "A stylish, clean and well-equipped apartment in a convenient location near the city centre with good public transport. A quiet space with a comfortable bed, and a helpful, responsive host who even assisted with registration.",
      },
      {
        author: "Musabey",
        location: "Munich, Germany",
        date: "April 2026",
        rating: 5,
        text: "A cosy place in the city centre, easy to reach by one bus with a stop right in front. The host is responsible and replied within 2-3 minutes, and there are shops and bakeries nearby.",
      },
      {
        author: "Thayna",
        date: "April 2026",
        rating: 5,
        text: "A beautiful, spacious and well-decorated apartment ~ warm, stylish and comfortable. A great location with easy access to the city, an amazing host and easy communication.",
      },
      {
        author: "Aleksei",
        date: "May 2026",
        rating: 5,
        text: "A spacious apartment with a fully equipped kitchen, comfortable workspaces, blackout curtains and a large balcony. The host allowed early check-in and helped with obtaining a white card at the police station.",
      },
      {
        author: "Hannah",
        location: "Toronto, Canada",
        date: "April 2026",
        rating: 5,
        text: "An accommodating, polite and genuinely helpful host who handled our concerns professionally and went above and beyond.",
      },
      {
        author: "Darius",
        date: "May 2026",
        rating: 5,
        text: "Very good communication with the host, an impeccable and cosy place, clear instructions and a flawless self check-in.",
      },
    ],
    images: [
      { src: "/accommodations/belgrade-lela/open-plan.jpg", alt: "Stylish open-plan living space with a bar-height kitchen island, dining area and living room", caption: "The open-plan living space" },
      { src: "/accommodations/belgrade-lela/living-room.jpg", alt: "Cosy living room with a grey sectional sofa, statement artwork and a balcony", caption: "The cosy living room" },
      { src: "/accommodations/belgrade-lela/kitchen.jpg", alt: "Modern white kitchen with a black granite island and bar", caption: "The kitchen with its bar island" },
      { src: "/accommodations/belgrade-lela/bedroom.jpg", alt: "Bedroom with a double bed and mirrored wardrobe", caption: "The bedroom" },
      { src: "/accommodations/belgrade-lela/dining.jpg", alt: "Dining table with grey velvet chairs and statement art", caption: "The dining area" },
      { src: "/accommodations/belgrade-lela/kitchen-island.jpg", alt: "Kitchen island and sink with the living room beyond", caption: "The kitchen island" },
      { src: "/accommodations/belgrade-lela/workspace.jpg", alt: "Compact workspace and dressing desk with a large mirror", caption: "The workspace / dressing desk" },
      { src: "/accommodations/belgrade-lela/tv-area.jpg", alt: "Living area with a large flat-screen TV, media unit and statement art", caption: "The TV and media wall" },
      { src: "/accommodations/belgrade-lela/living-room-2.jpg", alt: "Living room from another angle with the sofa and balcony doors", caption: "The living room from another angle" },
      { src: "/accommodations/belgrade-lela/open-plan-2.jpg", alt: "Open-plan kitchen and hallway with the resident dog", caption: "Open-plan kitchen and hallway" },
      { src: "/accommodations/belgrade-lela/balcony.jpg", alt: "The spacious balcony with outdoor seating and a street view", caption: "The spacious balcony" },
      { src: "/accommodations/belgrade-lela/bathroom.jpg", alt: "Clean modern bathroom with a vanity and mirror", caption: "The bathroom" },
    ],
    heroImage: "/accommodations/belgrade-lela/open-plan.jpg",
    featured: true,
  },
  {
    slug: "sarajevo-glorija-lukavica",
    name: "Apartment Glorija | Lukavica, near Sarajevo Airport",
    tagline:
      "A comfortable, budget-friendly apartment minutes from Sarajevo Airport ~ free parking at the door, fast Wi-Fi and a warm family welcome, with the old town and the Olympic mountains both within easy reach.",
    city: "Sarajevo",
    country: "Bosnia & Herzegovina",
    region: "Europe",
    propertyType: "Entire rental unit",
    airbnbUrl: "https://www.airbnb.com/rooms/826777067717034955",
    priceDisplay: "₱2,128 / night",
    priceApprox: "≈ $37 / night",
    priceNote: "Prices vary by season and dates ~ add your check-in and checkout on Airbnb to see the exact total for your stay.",
    rating: 4.95,
    reviewCount: 21,
    guestFavorite: true,
    host: { name: "Aleksandar", superhost: true, note: "Superhost · co-hosted by Slavica · 4 years hosting · 100% response rate" },
    capacity: { guests: 3, bedrooms: 1, beds: 1, baths: 1 },
    sleeping: ["Bedroom with 1 double bed", "Living room with a sofa"],
    highlights: [
      "A short hop from Sarajevo Airport",
      "Free parking right in front of the apartment",
      "Guests love how smooth the check-in is",
      "A genuinely quiet, peaceful neighbourhood",
    ],
    description: [
      "Glorija is one of those easy, unfussy places that just works ~ a modern, comfortable apartment only a few minutes from Sarajevo Airport, which makes it a stress-free first or last night in Bosnia. You park right in front, walk in, and you are sorted.",
      "Inside you get the essentials done properly: fast Wi-Fi that guests have happily worked from for weeks, air conditioning, a flat-screen TV, and a kitchen stocked with the dishes and towels you actually need. It is quiet, spotless and looked after by a warm family.",
      "The location quietly punches above its weight. The centre of Sarajevo and Baščaršija old town are a short ride away, the big malls (SCC, Alta, BBI) are close, and in winter the Olympic mountains ~ Jahorina, Bjelašnica, Trebević and Igman ~ are all within reach for skiing.",
    ],
    whyWeLove: [
      "For an airport-adjacent stay this is remarkable value ~ around $37 a night for a clean, private apartment beats any airport hotel.",
      "Aleksandar and Slavica are the reason the reviews glow: guests describe month-long stays that felt like staying with family, with help arriving the moment it is needed.",
      "It is a genuinely handy base for both the city and the ski mountains, and the free parking at the door makes it effortless if you are driving.",
    ],
    amenities: [
      "Fast Wi-Fi",
      "Full kitchen (dishes provided)",
      "Free parking on premises",
      "Air conditioning",
      "Flat-screen TV",
      "Free washer in the building",
      "Towels provided",
      "Quiet neighbourhood",
    ],
    amenitiesTotal: 35,
    goodForRemoteWork: true,
    location: {
      summary:
        "Lukavica, a quiet residential area of East Sarajevo, just minutes from Sarajevo Airport and within walking distance of the East Sarajevo bus station, shops and supermarkets. The centre of Sarajevo and Baščaršija are a short ride away, as are the Olympic mountains for winter skiing.",
      nearby: [
        { place: "Sarajevo Airport", time: "A few minutes" },
        { place: "Shops & supermarkets", time: "Walking distance" },
        { place: "East Sarajevo bus station", time: "Walkable" },
        { place: "Baščaršija & city centre", time: "Short ride" },
        { place: "Jahorina / Bjelašnica ski slopes", time: "Day trip" },
      ],
      mapQuery: "Lukavica, Istočno Sarajevo, Bosnia and Herzegovina",
    },
    houseRules: ["Check-in 2:00 PM to 8:00 PM", "Checkout before 10:00 AM", "3 guests maximum"],
    reviews: [
      {
        author: "Ayman",
        date: "June 2026",
        rating: 5,
        text: "Took the initiative to help us find the place when we took a taxi ride, and helped us with our laundry. Greets you with a warm smile. Lots of walkable areas, especially near the sports park. A quiet neighbourhood.",
      },
      {
        author: "Gavn",
        date: "April 2026",
        rating: 5,
        text: "Stayed for a week before getting a bus. A great location for the bus station, with supermarkets and some shops within easy walking distance. A very peaceful area, and fast internet for working too. The host was very friendly and always available to help.",
      },
      {
        author: "Emrullah",
        date: "August 2025",
        rating: 5,
        text: "It's a great place and I met nice people. The house was better than I expected ~ clean and with a great view. Aleksandar and Slavica are very nice people who help you right away. Slavica is a very sweet mother who did her best for us; it's a great family house. My wife and I had a wonderful 25 days.",
      },
      {
        author: "Aliff",
        date: "August 2025",
        rating: 5,
        text: "The house is very comfortable and fully equipped with everything you need. The location is great, close to shops and daily necessities. Slavica is very understanding and easy to communicate with. If you are travelling on a budget, this is definitely the perfect place to stay!",
      },
      {
        author: "Richard",
        date: "March 2026",
        rating: 5,
        text: "I spent a month here. The accommodation matches the description, with no issues or shortcomings. Getting there was easy thanks to the clear directions, and communication was excellent and quick. Parking is right in front of the living room.",
      },
    ],
    images: [
      { src: "/accommodations/sarajevo-glorija/living-room.jpg", alt: "Cosy living room with a sofa, patterned rug and radiator", caption: "The cosy living room" },
      { src: "/accommodations/sarajevo-glorija/kitchen.jpg", alt: "Compact fully-equipped kitchen with an oven, hob and breakfast bar", caption: "The fully-equipped kitchen" },
      { src: "/accommodations/sarajevo-glorija/bedroom.jpg", alt: "Bedroom with a double bed and framed artwork", caption: "The bedroom" },
      { src: "/accommodations/sarajevo-glorija/dining.jpg", alt: "Breakfast bar with two stools and a bottle of wine", caption: "The breakfast bar" },
      { src: "/accommodations/sarajevo-glorija/bedroom-2.jpg", alt: "The double bed seen straight on with artwork above", caption: "The double bed" },
      { src: "/accommodations/sarajevo-glorija/bathroom.jpg", alt: "Bathroom with a corner shower, toilet and basin", caption: "The bathroom" },
    ],
    heroImage: "/accommodations/sarajevo-glorija/living-room.jpg",
    featured: true,
  },
];

export function getAccommodation(slug: string): AccommodationListing | undefined {
  return accommodations.find((a) => a.slug === slug);
}

export const SITE_URL = "https://udreamtravels.com";

// Entry fees and typical prices for famous tourist spots, per city.
// All photos are free-license images from Wikimedia Commons (CC0 / CC BY /
// CC BY-SA) — keep the author + license fields so attribution stays visible.

import { spotImages } from "./attraction-images";

export interface SpotImage {
  src: string; // upload.wikimedia.org thumb URL (~1280px wide)
  author: string;
  license: string; // e.g. "CC BY-SA 4.0", "CC0"
  licenseUrl: string; // empty for CC0 / public domain
  sourceUrl: string; // commons.wikimedia.org file page
}

export type SpotCategory =
  | "nature"
  | "culture"
  | "landmark"
  | "museum"
  | "market"
  | "experience";

export interface TouristSpot {
  name: string;
  category: SpotCategory;
  priceLocal: string; // e.g. "KZT 1,800–3,000"
  priceUSD: string; // e.g. "≈ $4–6"
  isFree?: boolean;
  duration: string; // suggested visit time
  tip: string;
  image: SpotImage;
}

export interface CitySpotPricing {
  slug: string;
  city: string;
  country: string;
  currency: string;
  currencyNote: string; // e.g. "1 USD ≈ 520 KZT"
  intro: string;
  estTotal: string; // headline "budget for everything" figure
  estTotalNote: string;
  heroImage: SpotImage;
  spots: TouristSpot[];
}

function img(key: string): SpotImage {
  const found = spotImages[key];
  if (!found) throw new Error(`Missing spot image: ${key}`);
  return found;
}

export const citySpotPricing: CitySpotPricing[] = [
  // ── Almaty ─────────────────────────────────────────────────────────────
  {
    slug: "almaty",
    city: "Almaty",
    country: "Kazakhstan",
    currency: "KZT",
    currencyNote: "1 USD ≈ 520 KZT (Kazakhstani tenge)",
    intro:
      "Kazakhstan's biggest city sits right under the Tian Shan mountains, so half of its best sights are alpine day-outs. Entry fees are refreshingly cheap — the cable cars and day trips are where the money goes.",
    estTotal: "$45–60",
    estTotalNote:
      "covers every paid entry below; add $30–50 per person for a Big Almaty Lake or Charyn Canyon day tour",
    heroImage: img("hero:almaty"),
    spots: [
      {
        name: "Medeu Skating Rink",
        category: "experience",
        priceLocal: "KZT 1,800–3,000 + KZT 1,000 skate rental",
        priceUSD: "≈ $4–6",
        duration: "2–3 hours",
        tip: "The world's highest Olympic-size rink (1,691 m). Walking around the rink and the mudflow dam viewpoint is free — you only pay to skate.",
        image: img("almaty:Medeu Skating Rink"),
      },
      {
        name: "Shymbulak Ski Resort",
        category: "nature",
        priceLocal: "KZT 8,000–10,000 gondola round trip",
        priceUSD: "≈ $15–19",
        duration: "Half day",
        tip: "Ride the gondola up from Medeu even in summer — the Talgar Pass views are worth it. Winter ski passes start around KZT 18,000/day.",
        image: img("almaty:Shymbulak Ski Resort"),
      },
      {
        name: "Kok Tobe Hill",
        category: "landmark",
        priceLocal: "KZT 6,000–8,000 cable car round trip",
        priceUSD: "≈ $12–15",
        duration: "2–3 hours",
        tip: "Go 1 hour before sunset for golden city views. Park entry itself is free once you're up; rides and the mini-zoo cost extra.",
        image: img("almaty:Kok Tobe Hill"),
      },
      {
        name: "Ascension (Zenkov) Cathedral",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30–60 min",
        tip: "One of the world's tallest wooden buildings, built without a single nail (so the legend goes). It sits in Panfilov Park — combine both in one walk.",
        image: img("almaty:Ascension (Zenkov) Cathedral"),
      },
      {
        name: "Big Almaty Lake",
        category: "nature",
        priceLocal: "KZT 200–1,000 eco-fee · tour/taxi KZT 15,000–25,000",
        priceUSD: "≈ $2 entry · $30–50 transport",
        duration: "Half day",
        tip: "The turquoise color peaks June–September. It's a border-zone area — bring your passport, and note swimming is prohibited (it's a drinking-water reservoir).",
        image: img("almaty:Big Almaty Lake"),
      },
      {
        name: "Charyn Canyon",
        category: "nature",
        priceLocal: "KZT 730–1,500 entry · day tour KZT 15,000–25,000",
        priceUSD: "≈ $1.50–3 entry · $30–50 tour",
        duration: "Full day (200 km from Almaty)",
        tip: "Kazakhstan's 'Grand Canyon'. The Valley of Castles walk is an easy 2–3 km. Shared day tours are the cheapest way out here — book a day ahead.",
        image: img("almaty:Charyn Canyon"),
      },
      {
        name: "Green Bazaar (Zelyony Bazaar)",
        category: "market",
        priceLocal: "Free entry",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "Try kurt (salty cheese balls), fresh horse-milk kumis, and mountains of dried fruit. Bring small cash — cards are rare and haggling is expected.",
        image: img("almaty:Green Bazaar (Zelyony Bazaar)"),
      },
      {
        name: "Central State Museum",
        category: "museum",
        priceLocal: "KZT 500–1,000",
        priceUSD: "≈ $1–2",
        duration: "1–2 hours",
        tip: "The quickest crash course in Kazakh history — from Saka gold to the Soviet era. A replica of the famous Golden Man armor lives here.",
        image: img("almaty:Central State Museum"),
      },
    ],
  },

  // ── Kuala Lumpur ───────────────────────────────────────────────────────
  {
    slug: "kuala-lumpur",
    city: "Kuala Lumpur",
    country: "Malaysia",
    currency: "MYR",
    currencyNote: "1 USD ≈ RM 4.40 (Malaysian ringgit)",
    intro:
      "KL is one of the cheapest world-class cities to sightsee — most icons are free or under RM 100, and the train gets you everywhere for pocket change.",
    estTotal: "$30–55",
    estTotalNote:
      "covers every paid entry below — the Petronas observation deck is the single biggest ticket",
    heroImage: img("hero:kuala-lumpur"),
    spots: [
      {
        name: "Petronas Twin Towers (Observation Deck)",
        category: "landmark",
        priceLocal: "RM 98 adult (international)",
        priceUSD: "≈ $22",
        duration: "1–1.5 hours",
        tip: "Tickets sell out — book online days ahead for the sunset slot. Seeing the towers from KLCC Park and the fountain show is completely free.",
        image: img("kuala-lumpur:Petronas Twin Towers (Observation Deck)"),
      },
      {
        name: "Batu Caves",
        category: "culture",
        priceLocal: "Free (KTM train ≈ RM 3 each way)",
        priceUSD: "Free",
        isFree: true,
        duration: "2–3 hours",
        tip: "272 rainbow steps up to the temple cave. Go early morning to beat heat and crowds, dress modestly, and guard your snacks from the macaques.",
        image: img("kuala-lumpur:Batu Caves"),
      },
      {
        name: "KL Tower (Menara KL)",
        category: "landmark",
        priceLocal: "RM 49–60 observation · RM 105–110 Sky Deck",
        priceUSD: "≈ $11–25",
        duration: "1–2 hours",
        tip: "Locals argue this beats Petronas — because from here your photos include the Petronas towers. The open-air Sky Deck glass box is the money shot.",
        image: img("kuala-lumpur:KL Tower (Menara KL)"),
      },
      {
        name: "Islamic Arts Museum Malaysia",
        category: "museum",
        priceLocal: "RM 20 adult",
        priceUSD: "≈ $4.50",
        duration: "2 hours",
        tip: "Southeast Asia's largest Islamic art collection, and blissfully air-conditioned — the perfect midday-heat escape near the National Mosque.",
        image: img("kuala-lumpur:Islamic Arts Museum Malaysia"),
      },
      {
        name: "Thean Hou Temple",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "1 hour",
        tip: "Six tiers of red lanterns with a skyline backdrop. Spectacular around Chinese New Year; grab a Grab (car) — it's awkward to reach by transit.",
        image: img("kuala-lumpur:Thean Hou Temple"),
      },
      {
        name: "Merdeka Square & Sultan Abdul Samad",
        category: "landmark",
        priceLocal: "Free (KL City Gallery ≈ RM 10)",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "Where Malaysia declared independence in 1957. Come at dusk when the Sultan Abdul Samad Building lights up, then walk the river of life boardwalk.",
        image: img("kuala-lumpur:Merdeka Square & Sultan Abdul Samad"),
      },
    ],
  },

  // ── Singapore ──────────────────────────────────────────────────────────
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    currency: "SGD",
    currencyNote: "1 USD ≈ S$1.34 (Singapore dollar)",
    intro:
      "Singapore's headline attractions are pricey, but the city balances them with world-class free sights — the light shows, Merlion, and Supertree Grove cost nothing.",
    estTotal: "$90–180",
    estTotalNote:
      "depends heavily on your picks — Universal Studios alone is $60+, while the light shows are free",
    heroImage: img("hero:singapore"),
    spots: [
      {
        name: "Gardens by the Bay (Supertree Grove)",
        category: "nature",
        priceLocal: "Grove free · OCBC Skyway S$14",
        priceUSD: "Free–$10",
        duration: "2–3 hours",
        tip: "The Garden Rhapsody light show (7:45 & 8:45 pm nightly) is free — lie on the grass under the Supertrees. The Skyway walk is worth the S$14 at dusk.",
        image: img("singapore:Gardens by the Bay (Supertree Grove)"),
      },
      {
        name: "Cloud Forest + Flower Dome",
        category: "nature",
        priceLocal: "S$32–53 (both conservatories)",
        priceUSD: "≈ $24–40",
        duration: "2–3 hours",
        tip: "The 35 m indoor waterfall is the star. Buy the bundled two-conservatory ticket online — it's cheaper than at the gate, and mornings are quietest.",
        image: img("singapore:Cloud Forest + Flower Dome"),
      },
      {
        name: "Marina Bay Sands SkyPark",
        category: "landmark",
        priceLocal: "S$32–36 observation deck",
        priceUSD: "≈ $24–27",
        duration: "1 hour",
        tip: "Budget hack: skip the deck and order a drink at the rooftop bar instead — similar view, and the money goes into your glass.",
        image: img("singapore:Marina Bay Sands SkyPark"),
      },
      {
        name: "Merlion Park",
        category: "landmark",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30–60 min",
        tip: "Come at blue hour for the classic skyline shot, then stay for Spectra — the free water-and-light show across the bay at 8 & 9 pm.",
        image: img("singapore:Merlion Park"),
      },
      {
        name: "Singapore Flyer",
        category: "experience",
        priceLocal: "S$40 adult",
        priceUSD: "≈ $30",
        duration: "1 hour (30-min rotation)",
        tip: "One of the world's largest observation wheels. Ride at night for the F1 street-circuit lights — and it's fully air-conditioned.",
        image: img("singapore:Singapore Flyer"),
      },
      {
        name: "Universal Studios Singapore",
        category: "experience",
        priceLocal: "S$83–98 one-day pass",
        priceUSD: "≈ $62–73",
        duration: "Full day",
        tip: "Weekday visits mean half the queues. Buy dated tickets online — walk-up prices are higher and it can sell out on holidays.",
        image: img("singapore:Universal Studios Singapore"),
      },
    ],
  },

  // ── Bangkok ────────────────────────────────────────────────────────────
  {
    slug: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    currency: "THB",
    currencyNote: "1 USD ≈ ฿36 (Thai baht)",
    intro:
      "Bangkok's temple circuit is astonishing value — the three biggest sights together cost about the price of one Singapore ticket. Dress codes apply everywhere: cover shoulders and knees.",
    estTotal: "$35–45",
    estTotalNote:
      "covers all the paid entries below plus a day of river boats — street food budget not included",
    heroImage: img("hero:bangkok"),
    spots: [
      {
        name: "The Grand Palace & Wat Phra Kaew",
        category: "culture",
        priceLocal: "฿500",
        priceUSD: "≈ $14",
        duration: "2–3 hours",
        tip: "Bangkok's most expensive ticket and still unmissable — home of the Emerald Buddha. Go at 8:30 am opening; ignore anyone outside saying it's 'closed'. It isn't.",
        image: img("bangkok:The Grand Palace & Wat Phra Kaew"),
      },
      {
        name: "Wat Pho (Reclining Buddha)",
        category: "culture",
        priceLocal: "฿300 (includes bottled water)",
        priceUSD: "≈ $8",
        duration: "1–2 hours",
        tip: "The 46 m golden Reclining Buddha is a 10-minute walk from the Grand Palace. This is also the birthplace of Thai massage — treat yourself on-site (from ฿320).",
        image: img("bangkok:Wat Pho (Reclining Buddha)"),
      },
      {
        name: "Wat Arun (Temple of Dawn)",
        category: "culture",
        priceLocal: "฿200",
        priceUSD: "≈ $6",
        duration: "1 hour",
        tip: "Cross the river from Wat Pho on the ฿5 ferry. Despite the name, it's most photogenic at sunset — shoot it from the opposite bank with a riverside drink.",
        image: img("bangkok:Wat Arun (Temple of Dawn)"),
      },
      {
        name: "Chatuchak Weekend Market",
        category: "market",
        priceLocal: "Free entry",
        priceUSD: "Free",
        isFree: true,
        duration: "Half day (weekends only)",
        tip: "15,000+ stalls — screenshot section numbers or you will get lost. Go before 11 am, haggle with a smile, and budget for the coconut ice cream.",
        image: img("bangkok:Chatuchak Weekend Market"),
      },
      {
        name: "Jim Thompson House",
        category: "museum",
        priceLocal: "฿200",
        priceUSD: "≈ $6",
        duration: "1–1.5 hours",
        tip: "The teakwood home of the American who revived Thai silk — then vanished mysteriously in 1967. Entry is by guided tour, included in the ticket.",
        image: img("bangkok:Jim Thompson House"),
      },
      {
        name: "Chao Phraya River by Boat",
        category: "experience",
        priceLocal: "฿16–33 orange flag · ฿150–200 tourist day pass",
        priceUSD: "≈ $0.50–6",
        duration: "Flexible",
        tip: "The orange-flag express boat is the local way to hit the riverside temples for pocket change — same river, tiny fraction of a cruise price.",
        image: img("bangkok:Chao Phraya River by Boat"),
      },
    ],
  },

  // ── Tokyo ──────────────────────────────────────────────────────────────
  {
    slug: "tokyo",
    city: "Tokyo",
    country: "Japan",
    currency: "JPY",
    currencyNote: "1 USD ≈ ¥150 (Japanese yen)",
    intro:
      "Tokyo's best sights split neatly in two: shrines, crossings, and markets that cost nothing, and observation decks that charge for the skyline. Pick one tower and spend the rest on food.",
    estTotal: "$40–80",
    estTotalNote:
      "assumes one or two paid decks plus the free classics — add ¥2,000–4,000 if you graze through Tsukiji properly",
    heroImage: img("hero:tokyo"),
    spots: [
      {
        name: "Senso-ji Temple (Asakusa)",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "Tokyo's oldest temple. Arrive before 9 am for near-empty photos of the Kaminarimon gate, then snack your way down Nakamise shopping street.",
        image: img("tokyo:Senso-ji Temple (Asakusa)"),
      },
      {
        name: "Tokyo Skytree",
        category: "landmark",
        priceLocal: "¥2,100–3,400 (deck / combo, advance)",
        priceUSD: "≈ $14–23",
        duration: "1.5–2 hours",
        tip: "At 634 m it's the world's tallest tower. Advance online tickets are ~¥300 cheaper, and on clear winter mornings you can spot Mt. Fuji.",
        image: img("tokyo:Tokyo Skytree"),
      },
      {
        name: "Shibuya Crossing & Shibuya Sky",
        category: "experience",
        priceLocal: "Crossing free · Shibuya Sky ¥2,200–2,700",
        priceUSD: "Free–$18",
        duration: "1–2 hours",
        tip: "The crossing itself costs nothing — watch a few cycles from the Starbucks window. Shibuya Sky's open-air rooftop sells out; book the sunset slot a week ahead.",
        image: img("tokyo:Shibuya Crossing & Shibuya Sky"),
      },
      {
        name: "Meiji Shrine (Meiji Jingu)",
        category: "culture",
        priceLocal: "Free (Inner Garden ¥500)",
        priceUSD: "Free",
        isFree: true,
        duration: "1–1.5 hours",
        tip: "A genuine forest in the middle of the city, two minutes from Harajuku station. On weekend mornings you'll often catch a traditional wedding procession.",
        image: img("tokyo:Meiji Shrine (Meiji Jingu)"),
      },
      {
        name: "Tokyo Tower",
        category: "landmark",
        priceLocal: "¥1,500 main deck · ¥3,300 top deck tour",
        priceUSD: "≈ $10–22",
        duration: "1–1.5 hours",
        tip: "The retro red icon. Cheaper than Skytree and — bonus — your skyline photos include Skytree. Beautifully lit after dark.",
        image: img("tokyo:Tokyo Tower"),
      },
      {
        name: "Tsukiji Outer Market",
        category: "market",
        priceLocal: "Free entry · ¥2,000–4,000 to eat well",
        priceUSD: "Free entry · ≈ $13–27 food",
        duration: "2–3 hours",
        tip: "The inner wholesale market moved to Toyosu, but the outer market still has the tamagoyaki, tuna bowls, and knife shops. Go hungry, before 10 am.",
        image: img("tokyo:Tsukiji Outer Market"),
      },
    ],
  },
];

export function getCitySpotPricing(slug: string): CitySpotPricing | undefined {
  return citySpotPricing.find((c) => c.slug === slug);
}

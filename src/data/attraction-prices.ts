// Entry fees and typical prices for famous tourist spots, per city.
// All photos are free-license images from Wikimedia Commons (CC0 / CC BY /
// CC BY-SA) ~ keep the author + license fields so attribution stays visible.

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
  mapQuery?: string; // Google Maps search override; defaults to "<name>, <city>"
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

// Falls back to an empty image (components render a plain placeholder) so a
// city can ship before its photos are collected.
function img(key: string): SpotImage {
  return (
    spotImages[key] ?? {
      src: "",
      author: "",
      license: "",
      licenseUrl: "",
      sourceUrl: "",
    }
  );
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
      "Kazakhstan's biggest city sits right under the Tian Shan mountains, so half of its best sights are alpine day-outs. Entry fees are refreshingly cheap ~ the cable cars and day trips are where the money goes.",
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
        tip: "The world's highest Olympic-size rink (1,691 m). Walking around the rink and the mudflow dam viewpoint is free ~ you only pay to skate.",
        image: img("almaty:Medeu Skating Rink"),
      },
      {
        name: "Shymbulak Ski Resort",
        category: "nature",
        priceLocal: "KZT 8,000–10,000 gondola round trip",
        priceUSD: "≈ $15–19",
        duration: "Half day",
        tip: "Ride the gondola up from Medeu even in summer ~ the Talgar Pass views are worth it. Winter ski passes start around KZT 18,000/day.",
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
        tip: "One of the world's tallest wooden buildings, built without a single nail (so the legend goes). It sits in Panfilov Park ~ combine both in one walk.",
        image: img("almaty:Ascension (Zenkov) Cathedral"),
      },
      {
        name: "Big Almaty Lake",
        category: "nature",
        priceLocal: "KZT 200–1,000 eco-fee · tour/taxi KZT 15,000–25,000",
        priceUSD: "≈ $2 entry · $30–50 transport",
        duration: "Half day",
        tip: "The turquoise color peaks June–September. It's a border-zone area ~ bring your passport, and note swimming is prohibited (it's a drinking-water reservoir).",
        image: img("almaty:Big Almaty Lake"),
      },
      {
        name: "Charyn Canyon",
        category: "nature",
        priceLocal: "KZT 730–1,500 entry · day tour KZT 15,000–25,000",
        priceUSD: "≈ $1.50–3 entry · $30–50 tour",
        duration: "Full day (200 km from Almaty)",
        tip: "Kazakhstan's 'Grand Canyon'. The Valley of Castles walk is an easy 2–3 km. Shared day tours are the cheapest way out here ~ book a day ahead.",
        image: img("almaty:Charyn Canyon"),
      },
      {
        name: "Green Bazaar (Zelyony Bazaar)",
        category: "market",
        priceLocal: "Free entry",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "Try kurt (salty cheese balls), fresh horse-milk kumis, and mountains of dried fruit. Bring small cash ~ cards are rare and haggling is expected.",
        image: img("almaty:Green Bazaar (Zelyony Bazaar)"),
      },
      {
        name: "Central State Museum",
        category: "museum",
        priceLocal: "KZT 500–1,000",
        priceUSD: "≈ $1–2",
        duration: "1–2 hours",
        tip: "The quickest crash course in Kazakh history ~ from Saka gold to the Soviet era. A replica of the famous Golden Man armor lives here.",
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
      "KL is one of the cheapest world-class cities to sightsee ~ most icons are free or under RM 100, and the train gets you everywhere for pocket change.",
    estTotal: "$30–55",
    estTotalNote:
      "covers every paid entry below ~ the Petronas observation deck is the single biggest ticket",
    heroImage: img("hero:kuala-lumpur"),
    spots: [
      {
        name: "Petronas Twin Towers (Observation Deck)",
        category: "landmark",
        priceLocal: "RM 98 adult (international)",
        priceUSD: "≈ $22",
        duration: "1–1.5 hours",
        tip: "Tickets sell out ~ book online days ahead for the sunset slot. Seeing the towers from KLCC Park and the fountain show is completely free.",
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
        tip: "Locals argue this beats Petronas ~ because from here your photos include the Petronas towers. The open-air Sky Deck glass box is the money shot.",
        image: img("kuala-lumpur:KL Tower (Menara KL)"),
      },
      {
        name: "Islamic Arts Museum Malaysia",
        category: "museum",
        priceLocal: "RM 20 adult",
        priceUSD: "≈ $4.50",
        duration: "2 hours",
        tip: "Southeast Asia's largest Islamic art collection, and blissfully air-conditioned ~ the perfect midday-heat escape near the National Mosque.",
        image: img("kuala-lumpur:Islamic Arts Museum Malaysia"),
      },
      {
        name: "Thean Hou Temple",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "1 hour",
        tip: "Six tiers of red lanterns with a skyline backdrop. Spectacular around Chinese New Year; grab a Grab (car) ~ it's awkward to reach by transit.",
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
      "Singapore's headline attractions are pricey, but the city balances them with world-class free sights ~ the light shows, Merlion, and Supertree Grove cost nothing.",
    estTotal: "$90–180",
    estTotalNote:
      "depends heavily on your picks ~ Universal Studios alone is $60+, while the light shows are free",
    heroImage: img("hero:singapore"),
    spots: [
      {
        name: "Gardens by the Bay (Supertree Grove)",
        category: "nature",
        priceLocal: "Grove free · OCBC Skyway S$14",
        priceUSD: "Free–$10",
        duration: "2–3 hours",
        tip: "The Garden Rhapsody light show (7:45 & 8:45 pm nightly) is free ~ lie on the grass under the Supertrees. The Skyway walk is worth the S$14 at dusk.",
        image: img("singapore:Gardens by the Bay (Supertree Grove)"),
      },
      {
        name: "Cloud Forest + Flower Dome",
        category: "nature",
        priceLocal: "S$32–53 (both conservatories)",
        priceUSD: "≈ $24–40",
        duration: "2–3 hours",
        tip: "The 35 m indoor waterfall is the star. Buy the bundled two-conservatory ticket online ~ it's cheaper than at the gate, and mornings are quietest.",
        image: img("singapore:Cloud Forest + Flower Dome"),
      },
      {
        name: "Marina Bay Sands SkyPark",
        category: "landmark",
        priceLocal: "S$32–36 observation deck",
        priceUSD: "≈ $24–27",
        duration: "1 hour",
        tip: "Budget hack: skip the deck and order a drink at the rooftop bar instead ~ similar view, and the money goes into your glass.",
        image: img("singapore:Marina Bay Sands SkyPark"),
      },
      {
        name: "Merlion Park",
        category: "landmark",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30–60 min",
        tip: "Come at blue hour for the classic skyline shot, then stay for Spectra ~ the free water-and-light show across the bay at 8 & 9 pm.",
        image: img("singapore:Merlion Park"),
      },
      {
        name: "Singapore Flyer",
        category: "experience",
        priceLocal: "S$40 adult",
        priceUSD: "≈ $30",
        duration: "1 hour (30-min rotation)",
        tip: "One of the world's largest observation wheels. Ride at night for the F1 street-circuit lights ~ and it's fully air-conditioned.",
        image: img("singapore:Singapore Flyer"),
      },
      {
        name: "Universal Studios Singapore",
        category: "experience",
        priceLocal: "S$83–98 one-day pass",
        priceUSD: "≈ $62–73",
        duration: "Full day",
        tip: "Weekday visits mean half the queues. Buy dated tickets online ~ walk-up prices are higher and it can sell out on holidays.",
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
      "Bangkok's temple circuit is astonishing value ~ the three biggest sights together cost about the price of one Singapore ticket. Dress codes apply everywhere: cover shoulders and knees.",
    estTotal: "$35–45",
    estTotalNote:
      "covers all the paid entries below plus a day of river boats ~ street food budget not included",
    heroImage: img("hero:bangkok"),
    spots: [
      {
        name: "The Grand Palace & Wat Phra Kaew",
        category: "culture",
        priceLocal: "฿500",
        priceUSD: "≈ $14",
        duration: "2–3 hours",
        tip: "Bangkok's most expensive ticket and still unmissable ~ home of the Emerald Buddha. Go at 8:30 am opening; ignore anyone outside saying it's 'closed'. It isn't.",
        image: img("bangkok:The Grand Palace & Wat Phra Kaew"),
      },
      {
        name: "Wat Pho (Reclining Buddha)",
        category: "culture",
        priceLocal: "฿300 (includes bottled water)",
        priceUSD: "≈ $8",
        duration: "1–2 hours",
        tip: "The 46 m golden Reclining Buddha is a 10-minute walk from the Grand Palace. This is also the birthplace of Thai massage ~ treat yourself on-site (from ฿320).",
        image: img("bangkok:Wat Pho (Reclining Buddha)"),
      },
      {
        name: "Wat Arun (Temple of Dawn)",
        category: "culture",
        priceLocal: "฿200",
        priceUSD: "≈ $6",
        duration: "1 hour",
        tip: "Cross the river from Wat Pho on the ฿5 ferry. Despite the name, it's most photogenic at sunset ~ shoot it from the opposite bank with a riverside drink.",
        image: img("bangkok:Wat Arun (Temple of Dawn)"),
      },
      {
        name: "Chatuchak Weekend Market",
        category: "market",
        priceLocal: "Free entry",
        priceUSD: "Free",
        isFree: true,
        duration: "Half day (weekends only)",
        tip: "15,000+ stalls ~ screenshot section numbers or you will get lost. Go before 11 am, haggle with a smile, and budget for the coconut ice cream.",
        image: img("bangkok:Chatuchak Weekend Market"),
      },
      {
        name: "Jim Thompson House",
        category: "museum",
        priceLocal: "฿200",
        priceUSD: "≈ $6",
        duration: "1–1.5 hours",
        tip: "The teakwood home of the American who revived Thai silk ~ then vanished mysteriously in 1967. Entry is by guided tour, included in the ticket.",
        image: img("bangkok:Jim Thompson House"),
      },
      {
        name: "Chao Phraya River by Boat",
        category: "experience",
        priceLocal: "฿16–33 orange flag · ฿150–200 tourist day pass",
        priceUSD: "≈ $0.50–6",
        duration: "Flexible",
        tip: "The orange-flag express boat is the local way to hit the riverside temples for pocket change ~ same river, tiny fraction of a cruise price.",
        mapQuery: "Sathorn Pier, Bangkok",
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
      "assumes one or two paid decks plus the free classics ~ add ¥2,000–4,000 if you graze through Tsukiji properly",
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
        tip: "The crossing itself costs nothing ~ watch a few cycles from the Starbucks window. Shibuya Sky's open-air rooftop sells out; book the sunset slot a week ahead.",
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
        tip: "The retro red icon. Cheaper than Skytree and ~ bonus ~ your skyline photos include Skytree. Beautifully lit after dark.",
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

  // ── Istanbul ───────────────────────────────────────────────────────────
  {
    slug: "istanbul",
    city: "Istanbul",
    country: "Turkey",
    currency: "TRY",
    currencyNote: "1 USD ≈ ₺41 · big sights charge in euros",
    intro:
      "Istanbul's legendary sights now charge tourist rates pegged to the euro, so the Sultanahmet circuit adds up fast ~ but the mosques, bazaars, and ferry rides that define the city are still free or nearly free.",
    estTotal: "$120–150",
    estTotalNote:
      "covers the big paid entries (Hagia Sophia, Topkapi, Cistern, Galata) ~ the mosques and bazaars cost nothing",
    heroImage: img("hero:istanbul"),
    spots: [
      {
        name: "Hagia Sophia",
        category: "culture",
        priceLocal: "€25 (tourist gallery ticket)",
        priceUSD: "≈ $27",
        duration: "1–1.5 hours",
        tip: "Since 2024 tourists visit the upper gallery on a paid ticket while the ground floor is reserved for prayer. Buy online to skip a chunky queue.",
        image: img("istanbul:Hagia Sophia"),
      },
      {
        name: "Topkapi Palace",
        category: "museum",
        priceLocal: "₺2,750 (≈ €55) combo with Harem & Hagia Irene",
        priceUSD: "≈ $60",
        duration: "3–4 hours",
        tip: "The Harem section is the highlight ~ don't buy the cheaper palace-only ticket and regret it inside. Go at 9 am opening; tour groups arrive by 10.",
        image: img("istanbul:Topkapi Palace"),
      },
      {
        name: "Basilica Cistern",
        category: "landmark",
        priceLocal: "₺800 day · ₺1,300 evening",
        priceUSD: "≈ $25–40",
        duration: "45–60 min",
        tip: "The moody underground column forest with the upside-down Medusa heads. Evening 'shift' tickets cost more but come with light shows and no crowds.",
        image: img("istanbul:Basilica Cistern"),
      },
      {
        name: "Blue Mosque (Sultan Ahmed)",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30–60 min",
        tip: "Closed to visitors during the five daily prayers ~ check times before you go. Modest dress required; scarves are lent at the door.",
        image: img("istanbul:Blue Mosque (Sultan Ahmed)"),
      },
      {
        name: "Galata Tower",
        category: "landmark",
        priceLocal: "≈ €30 / ₺1,200",
        priceUSD: "≈ $32",
        duration: "1 hour",
        tip: "The 360° balcony view over the Golden Horn is superb but pricey ~ a rooftop café in Karaköy gives you 80% of the view for the cost of a coffee.",
        image: img("istanbul:Galata Tower"),
      },
      {
        name: "Grand Bazaar",
        category: "market",
        priceLocal: "Free entry",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "4,000 shops across 60 covered streets. Haggling is the sport ~ start around half the first price. Closed Sundays.",
        image: img("istanbul:Grand Bazaar"),
      },
    ],
  },

  // ── Taipei ─────────────────────────────────────────────────────────────
  {
    slug: "taipei",
    city: "Taipei",
    country: "Taiwan",
    currency: "TWD",
    currencyNote: "1 USD ≈ NT$31 (New Taiwan dollar)",
    intro:
      "Taipei might be the best sightseeing value in East Asia ~ temples, memorials, hot-spring hikes, and night markets are free, so your budget really only needs to cover one tower and a museum.",
    estTotal: "$30–40",
    estTotalNote:
      "covers Taipei 101, the National Palace Museum, and the gondola ~ everything else on this list is free",
    heroImage: img("hero:taipei"),
    spots: [
      {
        name: "Taipei 101 Observatory",
        category: "landmark",
        priceLocal: "NT$600 adult",
        priceUSD: "≈ $19",
        duration: "1–1.5 hours",
        tip: "Ride the 37-second elevator up 89 floors, then find the giant wind damper ball. Clear-day sunset slots sell out ~ book online for a small discount.",
        image: img("taipei:Taipei 101 Observatory"),
      },
      {
        name: "National Palace Museum",
        category: "museum",
        priceLocal: "NT$350 adult",
        priceUSD: "≈ $11",
        duration: "2–3 hours",
        tip: "Home to the world's greatest Chinese imperial collection ~ hunt down the Jadeite Cabbage and the Meat-Shaped Stone, the museum's two celebrity exhibits.",
        image: img("taipei:National Palace Museum"),
      },
      {
        name: "Chiang Kai-shek Memorial Hall",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "1–1.5 hours",
        tip: "Catch the changing of the guard on the hour. The white-and-blue main hall plus the gardens make an easy, photogenic half-morning.",
        image: img("taipei:Chiang Kai-shek Memorial Hall"),
      },
      {
        name: "Longshan Temple",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30–60 min",
        tip: "Taipei's oldest and busiest temple (1738). Evening visits are magical ~ incense, chanting, and lanterns ~ and the Huaxi night market is next door.",
        image: img("taipei:Longshan Temple"),
      },
      {
        name: "Maokong Gondola",
        category: "experience",
        priceLocal: "NT$120 one way",
        priceUSD: "≈ $4",
        duration: "Half day",
        tip: "Take the glass-floor 'Eyes' cabin (same price) up to the tea plantations, then spend the afternoon in a hillside teahouse overlooking the city.",
        image: img("taipei:Maokong Gondola"),
      },
      {
        name: "Elephant Mountain (Xiangshan)",
        category: "nature",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "A 20-minute stair climb to THE Taipei 101 skyline shot. Go an hour before sunset and stay for the city lights ~ bring water, it's steep.",
        image: img("taipei:Elephant Mountain (Xiangshan)"),
      },
    ],
  },

  // ── Bali ───────────────────────────────────────────────────────────────
  {
    slug: "bali",
    city: "Bali",
    country: "Indonesia",
    currency: "IDR",
    currencyNote: "1 USD ≈ Rp 16,000 (Indonesian rupiah)",
    intro:
      "Bali's temples and terraces charge tiny entry fees ~ it's the guided sunrise trek and the one-off tourist levy (Rp 150,000 on arrival) that form the real 'tickets' here. Sarongs are required at temples and usually included.",
    estTotal: "$45–65",
    estTotalNote:
      "covers every entry below including a guided Mount Batur sunrise trek ~ skip the trek and it drops under $25",
    heroImage: img("hero:bali"),
    spots: [
      {
        name: "Uluwatu Temple",
        category: "culture",
        priceLocal: "Rp 50,000 · Kecak dance Rp 150,000",
        priceUSD: "≈ $3 · dance ≈ $9",
        duration: "2–3 hours",
        tip: "Come for the clifftop sunset and stay for the Kecak fire dance at 6 pm ~ buy dance tickets as soon as you arrive. Watch the monkeys; they steal sunglasses.",
        image: img("bali:Uluwatu Temple"),
      },
      {
        name: "Tanah Lot",
        category: "culture",
        priceLocal: "Rp 75,000",
        priceUSD: "≈ $4.50",
        duration: "1–2 hours",
        tip: "The sea temple on its own rock ~ unbeatable at sunset, mobbed by 5 pm. At low tide you can walk right up to the base for a blessing.",
        image: img("bali:Tanah Lot"),
      },
      {
        name: "Sacred Monkey Forest (Ubud)",
        category: "nature",
        priceLocal: "Rp 80,000–100,000",
        priceUSD: "≈ $5–6",
        duration: "1–2 hours",
        tip: "700+ long-tailed macaques in a jungle temple complex. Don't carry food, don't smile with teeth, and hold your phone tight ~ they're professionals.",
        image: img("bali:Sacred Monkey Forest (Ubud)"),
      },
      {
        name: "Tegallalang Rice Terraces",
        category: "nature",
        priceLocal: "Rp 25,000–50,000 (+ swings extra)",
        priceUSD: "≈ $1.50–3",
        duration: "1–2 hours",
        tip: "Go at 7–8 am for empty terraces and soft light. Farmers along the path appreciate small donations ~ the giant swings are separate operators (Rp 150k+).",
        image: img("bali:Tegallalang Rice Terraces"),
      },
      {
        name: "Ulun Danu Beratan Temple",
        category: "culture",
        priceLocal: "Rp 75,000",
        priceUSD: "≈ $4.50",
        duration: "1–2 hours",
        tip: "The lake temple on the 50,000-rupiah banknote. It sits at 1,200 m in the cool highlands ~ pair it with the Jatiluwih terraces on a north-Bali day loop.",
        image: img("bali:Ulun Danu Beratan Temple"),
      },
      {
        name: "Mount Batur Sunrise Trek",
        category: "experience",
        priceLocal: "Rp 400,000–600,000 with guide",
        priceUSD: "≈ $25–38",
        duration: "Half day (2 am pickup)",
        tip: "A 2-hour pre-dawn climb to watch sunrise over Lake Batur and Mount Agung. Book a guided package with hotel pickup ~ solo hiking is discouraged by local guides.",
        image: img("bali:Mount Batur Sunrise Trek"),
      },
    ],
  },

  // ── Rome ───────────────────────────────────────────────────────────────
  {
    slug: "rome",
    city: "Rome",
    country: "Italy",
    currency: "EUR",
    currencyNote: "1 USD ≈ €0.92 (euro)",
    intro:
      "Rome splits neatly into two budgets: the Colosseum and Vatican eat most of your ticket money, while the Pantheon, Trevi, and half the city's masterpieces cost a few euros or nothing at all. Book the big two online, always.",
    estTotal: "$55–75",
    estTotalNote:
      "covers the Colosseum combo, Vatican Museums, and Pantheon ~ add €10–15 if you climb St. Peter's dome",
    heroImage: img("hero:rome"),
    spots: [
      {
        name: "Colosseum",
        category: "landmark",
        priceLocal: "€18–24 combo (with Forum & Palatine)",
        priceUSD: "≈ $20–26",
        duration: "2–3 hours",
        tip: "Tickets are timed and sell out days ahead ~ book only on the official site (colosseo.it); resellers charge double. The combo covers the Forum next door.",
        image: img("rome:Colosseum"),
      },
      {
        name: "Vatican Museums & Sistine Chapel",
        category: "museum",
        priceLocal: "€20–25 (+€5 online booking)",
        priceUSD: "≈ $22–33",
        duration: "3–4 hours",
        tip: "The €5 online booking fee is the best money you'll spend in Rome ~ walk-up queues run 2+ hours. Free on the last Sunday monthly, but the crowds are brutal.",
        image: img("rome:Vatican Museums & Sistine Chapel"),
      },
      {
        name: "St. Peter's Basilica",
        category: "culture",
        priceLocal: "Free · dome climb €10–15",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "Entry is free but the security line is real ~ go at 7 am opening. The dome climb (551 steps, or elevator partway) is the best view in Rome.",
        image: img("rome:St. Peter's Basilica"),
      },
      {
        name: "Pantheon",
        category: "culture",
        priceLocal: "€5",
        priceUSD: "≈ $5.50",
        duration: "30–60 min",
        tip: "2,000 years old and still the world's largest unreinforced concrete dome. The €5 ticket (introduced 2023) keeps queues short ~ Raphael is buried inside.",
        image: img("rome:Pantheon"),
      },
      {
        name: "Trevi Fountain",
        category: "landmark",
        priceLocal: "Free (bring a coin)",
        priceUSD: "Free",
        isFree: true,
        duration: "15–30 min",
        tip: "One coin over your left shoulder means you'll return to Rome. Visit before 7 am or after 11 pm ~ midday it's shoulder-to-shoulder selfie sticks.",
        image: img("rome:Trevi Fountain"),
      },
      {
        name: "Roman Forum & Palatine Hill",
        category: "culture",
        priceLocal: "Included in Colosseum combo",
        priceUSD: "Included",
        duration: "2–3 hours",
        tip: "The same ticket as the Colosseum ~ don't skip it. Enter via Palatine Hill (Via di San Gregorio) where the queue is a fraction of the Forum gate.",
        image: img("rome:Roman Forum & Palatine Hill"),
      },
    ],
  },

  // ── Athens ─────────────────────────────────────────────────────────────
  {
    slug: "athens",
    city: "Athens",
    country: "Greece",
    currency: "EUR",
    currencyNote: "1 USD ≈ €0.92 (euro)",
    intro:
      "Athens is the Acropolis plus a city of nearly-free wonders. In winter (Nov–Mar) most archaeological sites drop to half price, and the €30 combo ticket covers seven ancient sites in one go.",
    estTotal: "$50–70",
    estTotalNote:
      "covers the Acropolis, its museum, and the Ancient Agora ~ the combo ticket is the smart buy if you'll see 3+ sites",
    heroImage: img("hero:athens"),
    spots: [
      {
        name: "Acropolis & Parthenon",
        category: "landmark",
        priceLocal: "€20–30 (seasonal)",
        priceUSD: "≈ $22–33",
        duration: "2–3 hours",
        tip: "Timed entry slots are mandatory now ~ book the 8 am slot online and walk up before the heat and the cruise groups. Half price November to March.",
        image: img("athens:Acropolis & Parthenon"),
      },
      {
        name: "Acropolis Museum",
        category: "museum",
        priceLocal: "€15–20 (seasonal)",
        priceUSD: "≈ $16–22",
        duration: "2 hours",
        tip: "See it after the hill ~ the top-floor Parthenon gallery lines up the original marbles with a direct view of the temple through the glass wall.",
        image: img("athens:Acropolis Museum"),
      },
      {
        name: "Ancient Agora",
        category: "culture",
        priceLocal: "€10–15 · or €30 multi-site combo",
        priceUSD: "≈ $11–16",
        duration: "1–2 hours",
        tip: "The best-preserved Greek temple anywhere (the Hephaisteion) hides here, and it's a calm green escape from the Plaka crowds.",
        image: img("athens:Ancient Agora"),
      },
      {
        name: "Plaka Old Town",
        category: "experience",
        priceLocal: "Free to wander",
        priceUSD: "Free",
        isFree: true,
        duration: "1–2 hours",
        tip: "The 'neighborhood of the gods' under the Acropolis. Climb into Anafiotika, the tiny whitewashed island-style quarter ~ it feels like a Cycladic village.",
        image: img("athens:Plaka Old Town"),
      },
      {
        name: "Mount Lycabettus",
        category: "nature",
        priceLocal: "Free hike · funicular €10–12 round trip",
        priceUSD: "Free–$13",
        duration: "1–2 hours",
        tip: "The highest point in Athens ~ sunset here beats any rooftop bar, with the Acropolis glowing below. The pine-shaded footpath takes about 30 minutes.",
        image: img("athens:Mount Lycabettus"),
      },
      {
        name: "Changing of the Guard (Syntagma)",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30 min",
        tip: "The pom-pom-shoed Evzones change every hour on the hour ~ but Sunday 11 am is the full ceremonial parade with the marching band.",
        image: img("athens:Changing of the Guard (Syntagma)"),
      },
    ],
  },

  // ── Tbilisi ────────────────────────────────────────────────────────────
  {
    slug: "tbilisi",
    city: "Tbilisi",
    country: "Georgia",
    currency: "GEL",
    currencyNote: "1 USD ≈ ₾2.70 (Georgian lari)",
    intro:
      "Tbilisi is one of the cheapest capitals you'll ever sightsee ~ the fortress, cathedral, and old town cost nothing, transport is pocket change, and the only real splurge is a private sulfur bath room.",
    estTotal: "$15–40",
    estTotalNote:
      "under $15 for every ride and entry below ~ the top end assumes a private sulfur-bath room for two",
    heroImage: img("hero:tbilisi"),
    spots: [
      {
        name: "Narikala Fortress & Cable Car",
        category: "landmark",
        priceLocal: "Fortress free · cable car ₾2.5–5 per ride",
        priceUSD: "≈ $1–2",
        duration: "1–2 hours",
        tip: "Ride the cable car up from Rike Park (pay with a metro card), walk the 4th-century walls, then descend on foot past the Mother of Georgia statue.",
        image: img("tbilisi:Narikala Fortress & Cable Car"),
      },
      {
        name: "Abanotubani Sulfur Baths",
        category: "experience",
        priceLocal: "Public ₾10–30 · private room ₾100–200/hr",
        priceUSD: "≈ $4–75",
        duration: "1–2 hours",
        tip: "The brick-domed baths that gave Tbilisi its name ('warm place'). Book a private room at Chreli-Abano and add the kisa scrub ~ you'll emerge reborn.",
        image: img("tbilisi:Abanotubani Sulfur Baths"),
      },
      {
        name: "Holy Trinity Cathedral (Sameba)",
        category: "culture",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "1 hour",
        tip: "One of the tallest Orthodox cathedrals in the world, gleaming gold over the whole city. Sunset light on the facade is spectacular from the Avlabari side.",
        image: img("tbilisi:Holy Trinity Cathedral (Sameba)"),
      },
      {
        name: "Old Town & Leaning Clock Tower",
        category: "culture",
        priceLocal: "Free · puppet show ₾10–30",
        priceUSD: "Free",
        isFree: true,
        duration: "2–3 hours",
        tip: "Gabriadze's crooked clock tower puts on a tiny angel show at noon and 7 pm. Wander the carved wooden balconies of Sololaki before they're all renovated.",
        image: img("tbilisi:Old Town & Leaning Clock Tower"),
      },
      {
        name: "Mtatsminda Park & Funicular",
        category: "nature",
        priceLocal: "Funicular ₾10–15 round trip",
        priceUSD: "≈ $4–6",
        duration: "2–3 hours",
        tip: "The 1905 funicular climbs to a hilltop amusement park with the best city panorama. Try the legendary warm ponchiki (custard doughnuts) at the top.",
        image: img("tbilisi:Mtatsminda Park & Funicular"),
      },
      {
        name: "Bridge of Peace",
        category: "landmark",
        priceLocal: "Free",
        priceUSD: "Free",
        isFree: true,
        duration: "30 min",
        tip: "The glass-and-steel wave over the Mtkvari River. Come after dark when its 30,000 LEDs ripple ~ it links Rike Park to the old town in one photogenic stroll.",
        image: img("tbilisi:Bridge of Peace"),
      },
    ],
  },
];

export function getCitySpotPricing(slug: string): CitySpotPricing | undefined {
  return citySpotPricing.find((c) => c.slug === slug);
}

export function spotMapsUrl(spot: TouristSpot, city: CitySpotPricing): string {
  const query = spot.mapQuery ?? `${spot.name}, ${city.city}, ${city.country}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function cityMapsUrl(city: CitySpotPricing): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${city.city}, ${city.country}`,
  )}`;
}

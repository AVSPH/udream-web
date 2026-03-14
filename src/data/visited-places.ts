export interface VisitedPlace {
  id: number;
  name: string;
  country: string;
  continent: "Asia" | "Europe" | "Americas" | "Africa" | "Oceania";
  dateVisited: string;
  coordinates: [number, number]; // [latitude, longitude]
  thumbnail: string;
  blogLink: string;
  description: string;
}

export const visitedPlaces: VisitedPlace[] = [
  // --- Asia ---
  {
    id: 1,
    name: "Kuala Lumpur",
    country: "Malaysia",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [3.139, 101.6869],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467512/DSCF2955_c7pd8a.jpg",
    blogLink: "/blog/malaysia",
    description: "The iconic Petronas Towers and vibrant street food culture.",
  },
  {
    id: 2,
    name: "Singapore City",
    country: "Singapore",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [1.3521, 103.8198],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467835/DSCF3052_q3xt3i.jpg",
    blogLink: "/blog/singapore",
    description:
      "A garden city with futuristic architecture and Hawker centers.",
  },
  {
    id: 3,
    name: "Bandar Seri Begawan",
    country: "Brunei",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [4.8903, 114.9401],
    thumbnail:
      "https://images.unsplash.com/photo-1503254332200-a5170d473456?w=400&q=80",
    blogLink: "/blog/brunei",
    description: "Golden-domed mosques and the water village of Kampong Ayer.",
  },
  {
    id: 4,
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [13.7563, 100.5018],
    thumbnail:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579367?w=400&q=80",
    blogLink: "/blog/thailand",
    description: "Ornate shrines and a bustling street life.",
  },
  {
    id: 5,
    name: "Siem Reap",
    country: "Cambodia",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [13.3671, 103.8448],
    thumbnail:
      "https://images.unsplash.com/photo-1500049222538-2ef428420ef2?w=400&q=80",
    blogLink: "/blog/cambodia",
    description: "Gateway to the majestic Angkor Wat temple complex.",
  },
  {
    id: 6,
    name: "Ha Long Bay",
    country: "Vietnam",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [20.9101, 107.1839],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468512/IMG_20230917_195820_ma5aqt.jpg",
    blogLink: "/blog/vietnam",
    description: "Emerald waters and thousands of towering limestone islands.",
  },
  {
    id: 7,
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    dateVisited: "2022",
    coordinates: [-8.3405, 115.092],
    thumbnail:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    blogLink: "/blog/indonesia",
    description: "Lush rice terraces, Hindu temples, and world-class surf.",
  },
  {
    id: 8,
    name: "Taipei",
    country: "Taiwan",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [25.033, 121.5654],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468158/IMG20230604155339_l0hjv0.jpg",
    blogLink: "/blog/taiwan",
    description: "The Taiwan 101 skyscraper and bustling night markets.",
  },
  {
    id: 9,
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [35.6762, 139.6503],
    thumbnail:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80",
    blogLink: "/blog/japan",
    description: "A neon-lit metropolis where tradition meets future.",
  },
  {
    id: 10,
    name: "Victoria Peak",
    country: "Hong Kong",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [22.276, 114.15],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467482/IMG20241005110952_dbcsui.jpg",
    blogLink: "/blog/hong-kong",
    description: "Skyline views and a unique blend of East and West.",
  },
  {
    id: 11,
    name: "Ruins of St. Paul's",
    country: "Macau",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [22.1977, 113.5439],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467476/IMG20241002175756_dlr0xk.jpg",
    blogLink: "/blog/macau",
    description: "Portuguese colonial legacy and world-class entertainment.",
  },
  {
    id: 12,
    name: "Almaty",
    country: "Kazakhstan",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [43.222, 76.8512],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466190/DJI_20251105154859_0012_D_nvumg4.jpg",
    blogLink: "/blog/kazakhstan",
    description:
      "The Trans-Ili Alatau mountains and modern Central Asian life.",
  },
  {
    id: 13,
    name: "Samarkand",
    country: "Uzbekistan",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [39.627, 66.9749],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468419/DJI_20251115160517_0039_D_sslu2a.jpg",
    blogLink: "/blog/uzbekistan",
    description: "Silk Road history, blue tiles, and Registan Square.",
  },
  {
    id: 14,
    name: "Dushanbe",
    country: "Tajikistan",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [38.5358, 68.7791],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468288/DJI_20251119172020_0066_D_smnftk.jpg",
    blogLink: "/blog/tajikistan",
    description: "The rugged Pamir Mountains and Persian heritage.",
  },
  {
    id: 15,
    name: "Tbilisi",
    country: "Georgia",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [41.7151, 44.8271],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467221/DJI_20251123162100_0054_D_eyeyhl.jpg",
    blogLink: "/blog/georgia",
    description: "Sulfur baths, dramatic cliffs, and legendary hospitality.",
  },
  {
    id: 16,
    name: "Yerevan",
    country: "Armenia",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [40.1792, 44.4991],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466350/DJI_20251207134656_0148_D_dycf1a.jpg",
    blogLink: "/blog/armenia",
    description: "Mount Ararat views and some of the world's oldest churches.",
  },
  {
    id: 17,
    name: "Istanbul",
    country: "Turkey",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [41.0082, 28.9784],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468350/DJI_20251211125617_0207_D_iu11yf.jpg",
    blogLink: "/blog/turkey",
    description: "A transcontinental bridge between Europe and Asia.",
  },
  {
    id: 29,
    name: "Taichung",
    country: "Taiwan",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [24.1477, 120.6736],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468142/IMG20230606181001_co1vxt.jpg",
    blogLink: "/blog/taichung",
    description:
      "A relaxed and creative city known for colorful art villages and scenic wetlands.",
  },
  {
    id: 30,
    name: "Kota Kinabalu",
    country: "Malaysia",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [5.9804, 116.0735],
    thumbnail:
      "https://images.unsplash.com/photo-1543888514-94f4a3861218?q=80&w=2000&auto=format&fit=crop",
    blogLink: "/blog/kota-kinabalu",
    description:
      "Perfect for beach lovers and nature enthusiasts with island hopping and beautiful sunsets.",
  },
  {
    id: 31,
    name: "Phuket",
    country: "Thailand",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [7.8804, 98.3923],
    thumbnail:
      "https://images.unsplash.com/photo-1589394815804-964ce0fa58d4?q=80&w=2000&auto=format&fit=crop",
    blogLink: "/blog/phuket",
    description:
      "Thailand's largest island, known for stunning beaches and vibrant nightlife.",
  },
  {
    id: 32,
    name: "Phnom Penh",
    country: "Cambodia",
    continent: "Asia",
    dateVisited: "2023",
    coordinates: [11.5564, 104.9282],
    thumbnail:
      "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2000&auto=format&fit=crop",
    blogLink: "/blog/phnom-penh",
    description:
      "The bustling capital of Cambodia sitting at the junction of the Mekong and Tonlé Sap rivers.",
  },

  // --- Europe ---
  {
    id: 18,
    name: "Athens",
    country: "Greece",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [37.9838, 23.7275],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467246/DJI_20251215093850_0830_D_kchavg.jpg",
    blogLink: "/blog/greece",
    description: "The Acropolis and the cradle of Western civilization.",
  },
  {
    id: 19,
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [41.9028, 12.4964],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467666/DJI_20251216131631_0895_D_rmw9sc.jpg",
    blogLink: "/blog/italy",
    description: "The Colosseum, fountains, and ancient history at every turn.",
  },
  {
    id: 20,
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [41.3851, 2.1734],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467962/DJI_20251224152553_0477_D_ayzbrq.jpg",
    blogLink: "/blog/spain",
    description: "Gaudí architecture and the vibrant Sagrada Família.",
  },
  {
    id: 21,
    name: "St. Peter's Basilica",
    country: "Vatican City",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [41.9029, 12.4534],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467672/DJI_20251216133307_0915_D_dsurxx.jpg",
    blogLink: "/blog/vatican",
    description: "The spiritual heart of the Catholic world.",
  },
  {
    id: 22,
    name: "Vienna",
    country: "Austria",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [48.2082, 16.3738],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466648/DJI_20251217130735_0014_D_fgoulr.jpg",
    blogLink: "/blog/austria",
    description: "Imperial palaces, classical music, and coffee house culture.",
  },
  {
    id: 23,
    name: "Lucerne",
    country: "Switzerland",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [47.0502, 8.3093],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468091/DJI_20251222145209_0434_D_gkcxa3.jpg",
    blogLink: "/blog/switzerland",
    description: "Alpine peaks and the crystal-clear Lake Lucerne.",
  },
  {
    id: 24,
    name: "Brussels",
    country: "Belgium",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [50.8503, 4.3517],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466913/DJI_20251220161134_0215_D_kl2uik.jpg",
    blogLink: "/blog/belgium",
    description: "Medieval Grand Place and world-famous waffles.",
  },
  {
    id: 25,
    name: "Tirana",
    country: "Albania",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [41.3275, 19.8187],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466821/DJI_20260225172008_0239_D_cqajah.jpg",
    blogLink: "/blog/albania",
    description: "Colorful Ottoman-era architecture and wild coastlines.",
  },
  {
    id: 26,
    name: "Kotor",
    country: "Montenegro",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [42.4247, 18.7712],
    thumbnail:
      "https://images.unsplash.com/photo-1533031046755-9002598380eb?w=400&q=80",
    blogLink: "/blog/montenegro",
    description: "A dramatic bay with medieval old towns.",
  },
  {
    id: 27,
    name: "Sarajevo",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [43.8563, 18.4131],
    thumbnail:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466834/DJI_20251229143150_0691_D_jhe4ct.jpg",
    blogLink: "/blog/bosnia",
    description: "Where East meets West in the heart of the Balkans.",
  },
  {
    id: 28,
    name: "Belgrade",
    country: "Serbia",
    continent: "Europe",
    dateVisited: "2022",
    coordinates: [44.7866, 20.4489],
    thumbnail:
      "https://images.unsplash.com/photo-1552227465-38cc5ce44955?w=400&q=80",
    blogLink: "/blog/serbia",
    description: "The confluence of the Sava and Danube rivers.",
  },
];

export const getStats = () => {
  const countries = new Set(visitedPlaces.map((p) => p.country)).size;
  const continents = new Set(visitedPlaces.map((p) => p.continent)).size;
  return {
    placesVisited: visitedPlaces.length,
    countriesVisited: countries,
    continentsVisited: continents,
  };
};

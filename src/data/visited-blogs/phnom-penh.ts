import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "phnom-penh",
  title: "Phnom Penh Cambodia Travel Guide",
  metaTitle: "Phnom Penh travel guide",
  metaDescription:
    "Discover Phnom Penh, the capital of Cambodia, with the Royal Palace, riverside walks, and key museums. Local food tips.",
  intro:
    "Phnom Penh is the capital of Cambodia and sits where the Mekong and Tonle Sap rivers meet. The city mixes royal sites with a growing cafe scene.",
  quickFacts: [
    { label: "Country", value: "Cambodia" },
    { label: "Region", value: "Mekong basin" },
    { label: "Known for", value: "Royal Palace, Silver Pagoda, Riverside" },
    { label: "Getting around", value: "Tuk tuk and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Phnom Penh",
      paragraphs: [
        "The Royal Palace and the Silver Pagoda are central highlights, with Wat Phnom nearby. The National Museum offers Khmer art, and the riverside promenade is ideal for evening walks.",
      ],
    },
    {
      heading: "Food and culture in Phnom Penh",
      paragraphs: [
        "Try Khmer dishes like fish amok and lok lak at local restaurants and markets. Riverside cafes and street stalls make it easy to explore by taste as you move through the city.",
      ],
    },
    {
      heading: "Best time to visit Phnom Penh and practical tips",
      paragraphs: [
        "The dry season from November to March is cooler for sightseeing. Use tuk tuks for short hops between major sights and carry small cash for markets.",
      ],
    },
  ],
  keywords: [
    "Phnom Penh travel guide",
    "things to do in Phnom Penh",
    "Royal Palace Phnom Penh",
    "Cambodia capital",
    "Phnom Penh riverside",
  ],
  quickFactsTable: {
    country: "Cambodia",
    region: "Mekong basin",
    language: "Local",
    currency: "Local",
    bestTimeToVisit: "Spring or Autumn",
    dailyBudget: { budget: "$50", mid: "$150", luxury: "$300+" },
    visaStatus: "Check online",
    gettingAround: "Public transit"
  },
  faqs: [
    { question: "Is Cambodia expensive?", answer: "Depends on your travel style, but budget options exist." },
    { question: "How many days do I need in Cambodia?", answer: "Generally 1-2 weeks is recommended to see the highlights." }
  ]
};
export default blog;

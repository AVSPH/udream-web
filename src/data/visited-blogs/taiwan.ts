import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "taiwan",
  title: "Taipei Taiwan Travel Guide",
  metaTitle: "Taipei travel guide",
  metaDescription:
    "Visit Taipei with Taipei 101, night markets, and museums. Easy metro access and day trips to hot springs make planning simple.",
  intro:
    "Taipei is the seat of government in Taiwan and a dynamic city of temples, markets, and mountain views. Its metro system makes sightseeing simple and efficient.",
  quickFacts: [
    { label: "Country", value: "Taiwan" },
    { label: "Region", value: "Northern Taiwan" },
    { label: "Known for", value: "Taipei 101, night markets, museums" },
    { label: "Getting around", value: "Taipei Metro, buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Taipei",
      paragraphs: [
        "Taipei 101 is the classic skyline stop, while the National Palace Museum holds a vast collection of Chinese art. Longshan Temple, Ximending, and the Chiang Kai shek Memorial Hall add history and modern city energy.",
      ],
    },
    {
      heading: "Food and culture in Taipei",
      paragraphs: [
        "Night markets like Shilin and Raohe are essential for street snacks, including pepper buns and beef noodle soup. Teahouses and small cafes across the city are perfect for a slower afternoon break.",
      ],
    },
    {
      heading: "Best time to visit Taipei and practical tips",
      paragraphs: [
        "Spring and autumn bring mild weather, especially from March to May and October to November. Plan a day trip to Beitou for hot springs or take the gondola to Maokong for tea views.",
      ],
    },
  ],
  keywords: [
    "Taipei travel guide",
    "things to do in Taipei",
    "Taipei 101",
    "Taipei night markets",
    "Taiwan travel",
  ],
  quickFactsTable: {
    country: "Taiwan",
    region: "Northern Taiwan",
    language: "Local",
    currency: "Local",
    bestTimeToVisit: "Spring or Autumn",
    dailyBudget: { budget: "$50", mid: "$150", luxury: "$300+" },
    visaStatus: "Check online",
    gettingAround: "Public transit"
  },
  faqs: [
    { question: "Is Taiwan expensive?", answer: "Depends on your travel style, but budget options exist." },
    { question: "How many days do I need in Taiwan?", answer: "Generally 1-2 weeks is recommended to see the highlights." }
  ]
};
export default blog;

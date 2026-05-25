import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "indonesia",
  title: "Bali Indonesia Travel Guide",
  metaTitle: "Bali travel guide",
  metaDescription:
    "Experience Bali, Indonesia with temples, rice terraces, surf beaches, and wellness. Where to stay and what to see.",
  intro:
    "Bali is an Indonesian island known for Hindu temples, artistic villages, and warm beaches. The island offers everything from surf towns to quiet rice terraces.",
  quickFacts: [
    { label: "Country", value: "Indonesia" },
    { label: "Region", value: "Bali Province" },
    { label: "Known for", value: "Ubud, Tanah Lot, beach culture" },
    { label: "Getting around", value: "Drivers, scooters, and ride hailing" },
  ],
  sections: [
    {
      heading: "Top things to do in Bali",
      paragraphs: [
        "Explore Ubud for temples and galleries, then visit the Tegalalang rice terraces for classic island scenery. Tanah Lot and Uluwatu Temple deliver dramatic coastal views, while Mount Batur is a popular sunrise hike.",
      ],
    },
    {
      heading: "Food and culture in Bali",
      paragraphs: [
        "Local warung meals are affordable and flavorful, with nasi goreng, satay, and fresh fruit everywhere. Daily offerings at temples and village ceremonies give the island a strong cultural rhythm.",
      ],
    },
    {
      heading: "Best time to visit Bali and practical tips",
      paragraphs: [
        "The dry season from April to October is the easiest time for beaches and hikes. Traffic can be heavy, so plan short day trips and book a driver if you want to cover several areas in one day.",
      ],
    },
  ],
  keywords: [
    "Bali travel guide",
    "things to do in Bali",
    "Ubud",
    "Tanah Lot",
    "Bali beaches",
  ],
  quickFactsTable: {
    country: "Indonesia",
    region: "Bali Province",
    language: "Local",
    currency: "Local",
    bestTimeToVisit: "Spring or Autumn",
    dailyBudget: { budget: "$50", mid: "$150", luxury: "$300+" },
    visaStatus: "Check online",
    gettingAround: "Public transit"
  },
  faqs: [
    { question: "Is Indonesia expensive?", answer: "Depends on your travel style, but budget options exist." },
    { question: "How many days do I need in Indonesia?", answer: "Generally 1-2 weeks is recommended to see the highlights." }
  ]
};
export default blog;

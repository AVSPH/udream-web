import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "turkey",
  title: "Istanbul Turkey Travel Guide",
  metaTitle: "Istanbul travel guide",
  metaDescription:
    "Plan your Istanbul visit with Hagia Sophia, Blue Mosque, the Grand Bazaar, and Bosporus views. Transport and food tips.",
  intro:
    "Istanbul is Turkey largest city and sits on both Europe and Asia across the Bosporus. It offers imperial landmarks, lively markets, and waterfront streets.",
  quickFacts: [
    { label: "Country", value: "Turkey" },
    { label: "Region", value: "Bosporus" },
    { label: "Known for", value: "Hagia Sophia, Blue Mosque, Grand Bazaar" },
    { label: "Getting around", value: "Trams, metro, ferries, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Istanbul",
      paragraphs: [
        "Start in Sultanahmet for Hagia Sophia, the Blue Mosque, and Topkapi Palace. The Grand Bazaar, Galata Tower, and a Bosporus ferry ride add variety to a first visit.",
      ],
    },
    {
      heading: "Food and culture in Istanbul",
      paragraphs: [
        "Street snacks like simit and roasted chestnuts are common, while meze plates and grilled fish are classic sit down meals. Turkish tea and coffee are part of daily life and easy to enjoy along the waterfront.",
      ],
    },
    {
      heading: "Best time to visit Istanbul and practical tips",
      paragraphs: [
        "Spring and autumn bring comfortable weather for walking and ferry rides. Use transit cards for trams and metro lines, and plan early starts to avoid queues at major sites.",
      ],
    },
  ],
  keywords: [
    "Istanbul travel guide",
    "things to do in Istanbul",
    "Hagia Sophia",
    "Blue Mosque",
    "Grand Bazaar",
  ],
  quickFactsTable: {
    country: "Turkey",
    region: "Bosporus",
    language: "Local",
    currency: "Local",
    bestTimeToVisit: "Spring or Autumn",
    dailyBudget: { budget: "$50", mid: "$150", luxury: "$300+" },
    visaStatus: "Check online",
    gettingAround: "Public transit"
  },
  faqs: [
    { question: "Is Turkey expensive?", answer: "Depends on your travel style, but budget options exist." },
    { question: "How many days do I need in Turkey?", answer: "Generally 1-2 weeks is recommended to see the highlights." }
  ]
};
export default blog;

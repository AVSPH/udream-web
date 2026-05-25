import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "georgia",
  title: "Tbilisi Georgia Travel Guide",
  metaTitle: "Tbilisi travel guide",
  metaDescription:
    "Experience Tbilisi, Georgia with sulfur baths, the old town, and hilltop fortresses. Wine and food tips included.",
  intro:
    "Tbilisi is the capital of Georgia and lies along the Kura River. The city is known for its old town, sulfur bathhouses, and a strong wine tradition.",
  quickFacts: [
    { label: "Country", value: "Georgia" },
    { label: "Region", value: "Caucasus" },
    { label: "Known for", value: "Old Town, Narikala Fortress, sulfur baths" },
    { label: "Getting around", value: "Metro, buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Tbilisi",
      paragraphs: [
        "Explore the Old Town, ride the cable car to Narikala Fortress, and walk across the Peace Bridge. The Holy Trinity Cathedral and Mtatsminda Park add great viewpoints and a local feel.",
      ],
    },
    {
      heading: "Food and culture in Tbilisi",
      paragraphs: [
        "Georgian cuisine is a highlight, with khachapuri, khinkali, and fresh salads everywhere. Wine bars are common in the center, reflecting a tradition that goes back thousands of years.",
      ],
    },
    {
      heading: "Best time to visit Tbilisi and practical tips",
      paragraphs: [
        "Spring and autumn are the most pleasant seasons for walking, especially April to June and September to October. The city center is compact, so combine walking with short metro rides to cover more ground.",
      ],
    },
  ],
  keywords: [
    "Tbilisi travel guide",
    "things to do in Tbilisi",
    "Georgia travel",
    "Narikala Fortress",
    "Tbilisi sulfur baths",
  ],
  quickFactsTable: {
    country: "Georgia",
    region: "Caucasus",
    language: "Local",
    currency: "Local",
    bestTimeToVisit: "Spring or Autumn",
    dailyBudget: { budget: "$50", mid: "$150", luxury: "$300+" },
    visaStatus: "Check online",
    gettingAround: "Public transit"
  },
  faqs: [
    { question: "Is Georgia expensive?", answer: "Depends on your travel style, but budget options exist." },
    { question: "How many days do I need in Georgia?", answer: "Generally 1-2 weeks is recommended to see the highlights." }
  ]
};
export default blog;

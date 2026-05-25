import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "bosnia",
  title: "Sarajevo Bosnia and Herzegovina Travel Guide",
  metaTitle: "Sarajevo travel guide",
  metaDescription:
    "Discover Sarajevo with its old bazaar, riverside views, and layered history. Tips for food, culture, and transport.",
  intro:
    "Sarajevo is the capital of Bosnia and Herzegovina and lies along the Miljacka River. The city blends Ottoman, Austro Hungarian, and modern influences.",
  quickFacts: [
    { label: "Country", value: "Bosnia and Herzegovina" },
    { label: "Region", value: "Balkans" },
    { label: "Known for", value: "Bascarsija, Latin Bridge, Ottoman heritage" },
    { label: "Getting around", value: "Walking and trams" },
  ],
  sections: [
    {
      heading: "Top things to do in Sarajevo",
      paragraphs: [
        "Begin in Bascarsija for the old bazaar streets, then walk to Latin Bridge and the riverside promenade. Gazi Husrev beg Mosque and the City Hall add key cultural landmarks.",
      ],
    },
    {
      heading: "Food and culture in Sarajevo",
      paragraphs: [
        "Cevapi and burek are local favorites, often paired with strong Bosnian coffee. Small cafes and craft shops in the old town are perfect for a slower afternoon.",
      ],
    },
    {
      heading: "Best time to visit Sarajevo and practical tips",
      paragraphs: [
        "Spring and early autumn are pleasant for walking tours. The tram line helps cover longer distances, while most historic sites are within easy walking range.",
      ],
    },
  ],
  keywords: [
    "Sarajevo travel guide",
    "things to do in Sarajevo",
    "Bascarsija",
    "Bosnia and Herzegovina travel",
    "Sarajevo history",
  ],
  quickFactsTable: {
    country: "Bosnia and Herzegovina",
    region: "Balkans",
    language: "Local",
    currency: "Local",
    bestTimeToVisit: "Spring or Autumn",
    dailyBudget: { budget: "$50", mid: "$150", luxury: "$300+" },
    visaStatus: "Check online",
    gettingAround: "Public transit"
  },
  faqs: [
    { question: "Is Bosnia and Herzegovina expensive?", answer: "Depends on your travel style, but budget options exist." },
    { question: "How many days do I need in Bosnia and Herzegovina?", answer: "Generally 1-2 weeks is recommended to see the highlights." }
  ]
};
export default blog;

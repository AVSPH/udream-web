import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "phuket",
  title: "Phuket Thailand Travel Guide",
  metaTitle: "Phuket travel guide",
  metaDescription:
    "Plan a trip to Phuket, Thailand largest island, with beaches, island day trips, and Old Phuket Town. Transport tips included.",
  intro:
    "Phuket is Thailand largest island and a major beach destination. It offers lively resort areas, quiet coves, and a historic old town.",
  quickFacts: [
    { label: "Country", value: "Thailand" },
    { label: "Region", value: "Andaman Sea" },
    { label: "Known for", value: "Patong Beach, Old Phuket Town, island tours" },
    { label: "Getting around", value: "Taxis, songthaew buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Phuket",
      paragraphs: [
        "Patong, Kata, and Karon beaches cover the main beach choices, while Old Phuket Town offers colorful streets and cafes. Day trips to Phi Phi islands or nearby bays add classic island scenery.",
      ],
    },
    {
      heading: "Food and culture in Phuket",
      paragraphs: [
        "Local markets are a great place to try southern Thai dishes and fresh seafood. Look for noodles, curries, and tropical fruit that reflect the island coastal flavors.",
      ],
    },
    {
      heading: "Best time to visit Phuket and practical tips",
      paragraphs: [
        "The dry season from November to April is the calmest for beach time and boat tours. Stay near the beach that fits your style and use taxis or shared rides to explore different areas.",
      ],
    },
  ],
  keywords: [
    "Phuket travel guide",
    "things to do in Phuket",
    "Phuket beaches",
    "Old Phuket Town",
    "Thailand island travel",
  ],
};

export default blog;

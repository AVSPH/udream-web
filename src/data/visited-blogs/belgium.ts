import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "belgium",
  title: "Brussels Belgium Travel Guide",
  metaTitle: "Brussels travel guide",
  metaDescription:
    "Visit Brussels, Belgium with the Grand Place, Art Nouveau streets, and famous food. Tips for neighborhoods and transport.",
  intro:
    "Brussels is the capital of Belgium and a hub for European institutions. It mixes ornate guild halls with modern museums and cafes.",
  quickFacts: [
    { label: "Country", value: "Belgium" },
    { label: "Region", value: "Brussels Capital Region" },
    { label: "Known for", value: "Grand Place, Manneken Pis, Art Nouveau" },
    { label: "Getting around", value: "Metro, trams, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Brussels",
      paragraphs: [
        "Grand Place is the city centerpiece, with the nearby Galeries Royales Saint Hubert for elegant shopping. The Atomium and the Royal Palace add variety, while the comic art route shows the city playful side.",
      ],
    },
    {
      heading: "Food and culture in Brussels",
      paragraphs: [
        "Belgian waffles, chocolate, and frites are essential tastes. Many cafes serve local beer styles, and food markets provide a casual way to sample regional specialties.",
      ],
    },
    {
      heading: "Best time to visit Brussels and practical tips",
      paragraphs: [
        "Spring and early autumn are comfortable for walking and outdoor terraces. Use transit for longer distances and stay central to reach most sights on foot.",
      ],
    },
  ],
  keywords: [
    "Brussels travel guide",
    "things to do in Brussels",
    "Grand Place",
    "Brussels food",
    "Belgium travel",
  ],
};

export default blog;

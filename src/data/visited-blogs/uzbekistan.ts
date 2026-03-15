import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "uzbekistan",
  title: "Samarkand Uzbekistan Travel Guide",
  metaTitle: "Samarkand travel guide",
  metaDescription:
    "Discover Samarkand, Uzbekistan with Registan Square, Gur e Amir, and Silk Road history. Tips for a memorable visit.",
  intro:
    "Samarkand is one of the great Silk Road cities of Central Asia. Its blue tiled madrasas and mausoleums are a highlight of Uzbekistan.",
  quickFacts: [
    { label: "Country", value: "Uzbekistan" },
    { label: "Region", value: "Central Asia" },
    { label: "Known for", value: "Registan Square, Gur e Amir, Shah i Zinda" },
    { label: "Getting around", value: "Walking and taxis" },
  ],
  sections: [
    {
      heading: "Top things to do in Samarkand",
      paragraphs: [
        "Registan Square is the signature sight, surrounded by ornate madrasas. Bibi Khanum Mosque, Shah i Zinda, and the Gur e Amir mausoleum complete a classic city route.",
      ],
    },
    {
      heading: "Food and culture in Samarkand",
      paragraphs: [
        "Try Uzbek plov, samsa, and local bread from neighborhood bakeries. The Siab Bazaar is a lively place to experience daily life and sample seasonal produce.",
      ],
    },
    {
      heading: "Best time to visit Samarkand and practical tips",
      paragraphs: [
        "Spring and autumn bring pleasant temperatures, especially April to May and September to October. Many major sights are close together, so plan a compact walking route and break for tea.",
      ],
    },
  ],
  keywords: [
    "Samarkand travel guide",
    "Registan Square",
    "Uzbekistan travel",
    "Silk Road city",
    "things to do in Samarkand",
  ],
};

export default blog;

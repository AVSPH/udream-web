import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "armenia",
  title: "Yerevan Armenia Travel Guide",
  metaTitle: "Yerevan travel guide",
  metaDescription:
    "Discover Yerevan, the capital of Armenia, with Republic Square, the Cascade, and views of Mount Ararat. Local food tips.",
  intro:
    "Yerevan is the capital of Armenia and a city with a long history. Its pink tuff stone buildings give the center a warm glow.",
  quickFacts: [
    { label: "Country", value: "Armenia" },
    { label: "Region", value: "Caucasus" },
    { label: "Known for", value: "Republic Square, Cascade Complex, Mount Ararat views" },
    { label: "Getting around", value: "Walking and taxis" },
  ],
  sections: [
    {
      heading: "Top things to do in Yerevan",
      paragraphs: [
        "Republic Square is the natural starting point, followed by the Cascade Complex for art and city views. The Matenadaran museum and the Vernissage Market add culture and local crafts to the day.",
      ],
    },
    {
      heading: "Food and culture in Yerevan",
      paragraphs: [
        "Local menus feature lavash, dolma, and grilled meats, often paired with Armenian brandy. The cafe scene is strong, making it easy to pause between museums and market stops.",
      ],
    },
    {
      heading: "Best time to visit Yerevan and practical tips",
      paragraphs: [
        "Late spring and early autumn offer warm days and cooler evenings. The central area is easy to explore on foot, and short taxi rides help reach neighborhoods beyond the main square.",
      ],
    },
  ],
  keywords: [
    "Yerevan travel guide",
    "things to do in Yerevan",
    "Republic Square",
    "Cascade Complex",
    "Armenia travel",
  ],
};

export default blog;

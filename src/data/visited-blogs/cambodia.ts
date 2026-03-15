import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "cambodia",
  title: "Siem Reap Cambodia Travel Guide",
  metaTitle: "Siem Reap travel guide",
  metaDescription:
    "Plan a visit to Siem Reap, Cambodia with Angkor Wat, Angkor Thom, and local markets. Sunrise tips and transport advice.",
  intro:
    "Siem Reap is the gateway to the Angkor Archaeological Park in Cambodia. It combines world famous temples with a relaxed town center.",
  quickFacts: [
    { label: "Country", value: "Cambodia" },
    { label: "Region", value: "Northwest Cambodia" },
    { label: "Known for", value: "Angkor Wat, Angkor Thom, night markets" },
    { label: "Getting around", value: "Tuk tuk, bicycles, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Siem Reap",
      paragraphs: [
        "Angkor Wat is the highlight, with Angkor Thom and the Bayon close by. Ta Prohm and Banteay Srei add unique temple architecture and detailed carvings that are worth the extra time.",
      ],
    },
    {
      heading: "Food and culture in Siem Reap",
      paragraphs: [
        "Try classic Khmer dishes like fish amok and fresh spring rolls at local markets. The riverside and the Old Market area provide a lively evening scene with cafes and street stalls.",
      ],
    },
    {
      heading: "Best time to visit Siem Reap and practical tips",
      paragraphs: [
        "The dry season from November to March is the most comfortable for temple visits. Start early for sunrise, carry water, and follow temple dress guidelines with covered shoulders and knees.",
      ],
    },
  ],
  keywords: [
    "Siem Reap travel guide",
    "Angkor Wat",
    "things to do in Siem Reap",
    "Cambodia temples",
    "Angkor Archaeological Park",
  ],
};

export default blog;

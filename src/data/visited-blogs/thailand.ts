import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "thailand",
  title: "Bangkok Thailand Travel Guide",
  metaTitle: "Bangkok travel guide",
  metaDescription:
    "Visit Bangkok, the capital of Thailand, with the Grand Palace, Wat Arun, and vibrant markets. Transit tips and must try Thai food.",
  intro:
    "Bangkok is the capital of Thailand and a city of temples, canals, and street food. The Chao Phraya River ties together historic palaces and modern neighborhoods.",
  quickFacts: [
    { label: "Country", value: "Thailand" },
    { label: "Region", value: "Southeast Asia" },
    { label: "Known for", value: "Grand Palace, Wat Arun, street food" },
    { label: "Getting around", value: "BTS Skytrain, MRT, river boats" },
  ],
  sections: [
    {
      heading: "Top things to do in Bangkok",
      paragraphs: [
        "Start at the Grand Palace and Wat Phra Kaew, then cross the river to Wat Arun and visit Wat Pho. Chinatown on Yaowarat Road is a classic evening stop for food and atmosphere.",
      ],
    },
    {
      heading: "Food and culture in Bangkok",
      paragraphs: [
        "Street food is a core part of daily life, from pad thai and boat noodles to mango sticky rice. Night markets and floating markets offer a mix of snacks, crafts, and lively street scenes.",
      ],
    },
    {
      heading: "Best time to visit Bangkok and practical tips",
      paragraphs: [
        "The cooler dry season from November to February is the easiest time for sightseeing. Use rail lines and river boats to avoid traffic, and plan temple visits in the morning.",
      ],
    },
  ],
  keywords: [
    "Bangkok travel guide",
    "things to do in Bangkok",
    "Grand Palace",
    "Wat Arun",
    "Bangkok street food",
  ],
};

export default blog;

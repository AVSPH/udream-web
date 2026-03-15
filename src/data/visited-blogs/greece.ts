import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "greece",
  title: "Athens Greece Travel Guide",
  metaTitle: "Athens travel guide",
  metaDescription:
    "Explore Athens, Greece with the Acropolis, ancient ruins, and lively neighborhoods. Best times to visit and transit tips.",
  intro:
    "Athens is the capital of Greece and the historic heart of classical civilization. The Acropolis rises above a city full of cafes and markets.",
  quickFacts: [
    { label: "Country", value: "Greece" },
    { label: "Region", value: "Attica" },
    { label: "Known for", value: "Acropolis, Parthenon, Ancient Agora" },
    { label: "Getting around", value: "Metro, buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Athens",
      paragraphs: [
        "Visit the Acropolis and the Parthenon early in the day, then explore the Acropolis Museum. The Ancient Agora, Plaka, and Monastiraki round out a full day of history and street life.",
      ],
    },
    {
      heading: "Food and culture in Athens",
      paragraphs: [
        "Souvlaki, mezze plates, and fresh seafood are easy to find in neighborhood tavernas. The city cafe culture is strong, so linger over coffee between sites.",
      ],
    },
    {
      heading: "Best time to visit Athens and practical tips",
      paragraphs: [
        "Spring and autumn offer mild temperatures, especially April to May and September to October. Use the metro for longer distances and plan evening walks when the heat drops.",
      ],
    },
  ],
  keywords: [
    "Athens travel guide",
    "things to do in Athens",
    "Acropolis",
    "Parthenon",
    "Athens neighborhoods",
  ],
};

export default blog;

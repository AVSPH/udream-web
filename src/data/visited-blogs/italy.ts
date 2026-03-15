import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "italy",
  title: "Rome Italy Travel Guide",
  metaTitle: "Rome travel guide",
  metaDescription:
    "Plan a visit to Rome with the Colosseum, Roman Forum, Vatican City, and classic food. Tips for crowds and transit.",
  intro:
    "Rome is the capital of Italy and a city of ancient monuments and lively piazzas. It is easy to spend days exploring layers of history.",
  quickFacts: [
    { label: "Country", value: "Italy" },
    { label: "Region", value: "Lazio" },
    { label: "Known for", value: "Colosseum, Roman Forum, Vatican City" },
    { label: "Getting around", value: "Metro, buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Rome",
      paragraphs: [
        "The Colosseum and Roman Forum are essential for ancient history, while the Pantheon and Trevi Fountain show the city artistry. Plan time for Vatican City, including St Peter's Basilica and the Vatican Museums.",
      ],
    },
    {
      heading: "Food and culture in Rome",
      paragraphs: [
        "Try Roman classics like carbonara, cacio e pepe, and suppli in neighborhood trattorias. Evening walks across piazzas and river bridges are part of the local rhythm.",
      ],
    },
    {
      heading: "Best time to visit Rome and practical tips",
      paragraphs: [
        "Spring and autumn are the most comfortable seasons, with fewer crowds than summer. Book major attractions in advance and rely on walking for the historic center.",
      ],
    },
  ],
  keywords: [
    "Rome travel guide",
    "things to do in Rome",
    "Colosseum",
    "Vatican City",
    "Rome food",
  ],
};

export default blog;

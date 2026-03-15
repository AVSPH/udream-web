import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "vatican",
  title: "St Peter's Basilica Vatican City Travel Guide",
  metaTitle: "St Peter's Basilica travel guide",
  metaDescription:
    "Explore St Peter's Basilica in Vatican City with its grand dome, art, and St Peter's Square. Tips for visits and dress code.",
  intro:
    "St Peter's Basilica is the main church of Vatican City and a monumental church. Its dome and square are highlights of any Rome visit.",
  quickFacts: [
    { label: "Country", value: "Vatican City" },
    { label: "Region", value: "Vatican City" },
    { label: "Known for", value: "Basilica dome, St Peter's Square, Renaissance art" },
    { label: "Getting around", value: "Walking from Rome" },
  ],
  sections: [
    {
      heading: "Top things to do at St Peter's Basilica",
      paragraphs: [
        "See the basilica interior, then visit Michelangelo's Pieta and the grand nave. Climbing the dome provides sweeping views over St Peter's Square and the city beyond.",
      ],
    },
    {
      heading: "History and art in St Peter's Basilica",
      paragraphs: [
        "The basilica was built in the 16th and 17th centuries and features work by leading Renaissance artists. Its scale and detail make it a landmark church.",
      ],
    },
    {
      heading: "Best time to visit St Peter's Basilica and practical tips",
      paragraphs: [
        "Arrive early in the morning to reduce wait times, especially in peak season. Dress modestly with covered shoulders and knees, and plan extra time if you want to climb the dome.",
      ],
    },
  ],
  keywords: [
    "St Peter's Basilica travel guide",
    "Vatican City",
    "things to do in Vatican",
    "St Peter's Square",
    "Rome Vatican visit",
  ],
};

export default blog;

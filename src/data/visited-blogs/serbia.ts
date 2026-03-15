import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "serbia",
  title: "Belgrade Serbia Travel Guide",
  metaTitle: "Belgrade travel guide",
  metaDescription:
    "Plan a visit to Belgrade, Serbia with the Kalemegdan Fortress, river confluence, and lively streets. Tips for transport.",
  intro:
    "Belgrade is the capital of Serbia and sits where the Sava meets the Danube. The city is known for its fort, riverside promenades, and nightlife.",
  quickFacts: [
    { label: "Country", value: "Serbia" },
    { label: "Region", value: "Balkans" },
    { label: "Known for", value: "Kalemegdan Fortress, Skadarlija, river confluence" },
    { label: "Getting around", value: "Buses and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Belgrade",
      paragraphs: [
        "Kalemegdan Fortress and the park offer views of the rivers, while Knez Mihailova Street is the main pedestrian promenade. Skadarlija and the Temple of Saint Sava add cultural and historic depth.",
      ],
    },
    {
      heading: "Food and culture in Belgrade",
      paragraphs: [
        "Local meals focus on grilled meats, fresh salads, and hearty breads. The cafe culture is strong, so plan time to sit and watch daily life in the central districts.",
      ],
    },
    {
      heading: "Best time to visit Belgrade and practical tips",
      paragraphs: [
        "Spring and early autumn are ideal for outdoor walks and riverfront areas. The center is compact, so walking works well with short bus rides for longer distances.",
      ],
    },
  ],
  keywords: [
    "Belgrade travel guide",
    "things to do in Belgrade",
    "Kalemegdan Fortress",
    "Serbia capital",
    "Belgrade rivers",
  ],
};

export default blog;

import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "montenegro",
  title: "Kotor Montenegro Travel Guide",
  metaTitle: "Kotor travel guide",
  metaDescription:
    "Visit Kotor, Montenegro with its medieval old town, Bay of Kotor views, and fortress climb. Tips for a smooth visit.",
  intro:
    "Kotor is a historic town on the Bay of Kotor in Montenegro. Its walled old town is a UNESCO World Heritage site.",
  quickFacts: [
    { label: "Country", value: "Montenegro" },
    { label: "Region", value: "Bay of Kotor" },
    { label: "Known for", value: "Old town, city walls, bay views" },
    { label: "Getting around", value: "Walking and local buses" },
  ],
  sections: [
    {
      heading: "Top things to do in Kotor",
      paragraphs: [
        "Explore the narrow lanes of the old town and visit St Tryphon Cathedral. The climb to the Fortress of San Giovanni rewards you with wide views across the bay.",
      ],
    },
    {
      heading: "Food and culture in Kotor",
      paragraphs: [
        "Seafood and local wine are common on menus, especially along the waterfront. The town stays lively in the evening, with cafes and small squares filling with locals and visitors.",
      ],
    },
    {
      heading: "Best time to visit Kotor and practical tips",
      paragraphs: [
        "Late spring and early autumn bring warm days without peak summer crowds. Start the fortress climb early, carry water, and wear sturdy shoes for the stone steps.",
      ],
    },
  ],
  keywords: [
    "Kotor travel guide",
    "things to do in Kotor",
    "Bay of Kotor",
    "Kotor old town",
    "Montenegro travel",
  ],
};

export default blog;

import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "switzerland",
  title: "Lucerne Switzerland Travel Guide",
  metaTitle: "Lucerne travel guide",
  metaDescription:
    "Discover Lucerne, Switzerland on Lake Lucerne with the Chapel Bridge, old town, and mountain day trips. Practical tips.",
  intro:
    "Lucerne sits on Lake Lucerne in central Switzerland and is known for its preserved old town. It is a popular base for mountain excursions.",
  quickFacts: [
    { label: "Country", value: "Switzerland" },
    { label: "Region", value: "Central Switzerland" },
    { label: "Known for", value: "Chapel Bridge, Lake Lucerne, Mount Pilatus" },
    { label: "Getting around", value: "Walking, boats, and trains" },
  ],
  sections: [
    {
      heading: "Top things to do in Lucerne",
      paragraphs: [
        "Walk across the Chapel Bridge and visit the Lion Monument, then explore the lakeside promenades. A boat trip on the lake or a day visit to Mount Pilatus or Mount Rigi adds classic alpine scenery.",
      ],
    },
    {
      heading: "Food and culture in Lucerne",
      paragraphs: [
        "Swiss chocolate and cheese are easy to sample in the old town. Cozy cafes and lakeside restaurants offer a relaxed way to end the day.",
      ],
    },
    {
      heading: "Best time to visit Lucerne and practical tips",
      paragraphs: [
        "Summer is ideal for lake cruises and mountain views, while winter brings snow to the surrounding peaks. The city is compact and walkable, so plan a central hotel for easy access.",
      ],
    },
  ],
  keywords: [
    "Lucerne travel guide",
    "things to do in Lucerne",
    "Chapel Bridge",
    "Lake Lucerne",
    "Switzerland travel",
  ],
};

export default blog;

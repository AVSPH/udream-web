import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "kota-kinabalu",
  title: "Kota Kinabalu Sabah Travel Guide",
  metaTitle: "Kota Kinabalu travel guide",
  metaDescription:
    "Explore Kota Kinabalu, the capital of Sabah in Malaysia, with island hopping, sunsets, and Mount Kinabalu day trips.",
  intro:
    "Kota Kinabalu is the capital of Sabah on the island of Borneo. It is a gateway to island parks and the highlands around Mount Kinabalu.",
  quickFacts: [
    { label: "Country", value: "Malaysia" },
    { label: "Region", value: "Sabah, Borneo" },
    {
      label: "Known for",
      value: "Tunku Abdul Rahman Marine Park, sunsets, Mount Kinabalu",
    },
    { label: "Getting around", value: "Taxis, ride hailing, and boats" },
  ],
  sections: [
    {
      heading: "Top things to do in Kota Kinabalu",
      paragraphs: [
        "Island hop in Tunku Abdul Rahman Marine Park for snorkeling and beach time. The waterfront area is ideal for sunsets, and a day trip to Mount Kinabalu offers cooler air and mountain scenery.",
      ],
    },
    {
      heading: "Food and culture in Kota Kinabalu",
      paragraphs: [
        "Seafood is a major highlight, with night markets offering grilled fish and local produce. The city has a relaxed coastal feel that pairs well with evening walks and harbor views.",
      ],
    },
    {
      heading: "Best time to visit Kota Kinabalu and practical tips",
      paragraphs: [
        "The drier months from February to September are popular for island trips. Plan boat departures early in the day and keep cash on hand for market stalls and small vendors.",
      ],
    },
  ],
  keywords: [
    "Kota Kinabalu travel guide",
    "things to do in Kota Kinabalu",
    "Sabah travel",
    "Tunku Abdul Rahman Marine Park",
    "Mount Kinabalu day trip",
  ],
};

export default blog;

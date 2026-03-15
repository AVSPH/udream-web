import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "taichung",
  title: "Taichung Taiwan Travel Guide",
  metaTitle: "Taichung travel guide",
  metaDescription:
    "Visit Taichung in central Taiwan with the National Taichung Theater, colorful art villages, and Gaomei Wetlands. Easy transit tips.",
  intro:
    "Taichung is a major city in central Taiwan known for creative spaces and a relaxed pace. It sits between the coast and the central mountains.",
  quickFacts: [
    { label: "Country", value: "Taiwan" },
    { label: "Region", value: "Central Taiwan" },
    {
      label: "Known for",
      value: "National Taichung Theater, Rainbow Village, Gaomei Wetlands",
    },
    { label: "Getting around", value: "Buses, taxis, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Taichung",
      paragraphs: [
        "The National Taichung Theater is an architectural landmark, while Rainbow Village adds a colorful stop for photos. Gaomei Wetlands is a popular sunset location, and Taichung Park provides a calm city escape.",
      ],
    },
    {
      heading: "Food and culture in Taichung",
      paragraphs: [
        "Taichung is known for night markets and local desserts, and the city is often linked to the rise of bubble tea. Explore the old Miyahara area for sweets and a historic building setting.",
      ],
    },
    {
      heading: "Best time to visit Taichung and practical tips",
      paragraphs: [
        "Spring and autumn bring pleasant temperatures for outdoor spots like the wetlands. Use the city bus network for most neighborhoods and plan a short day trip if you want nearby mountain views.",
      ],
    },
  ],
  keywords: [
    "Taichung travel guide",
    "things to do in Taichung",
    "National Taichung Theater",
    "Gaomei Wetlands",
    "Taichung night markets",
  ],
};

export default blog;

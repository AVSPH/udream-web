import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "japan",
  title: "Tokyo Japan Travel Guide",
  metaTitle: "Tokyo travel guide",
  metaDescription:
    "Explore Tokyo, Japan with Shibuya, Asakusa, Meiji Shrine, and food markets. Practical tips for trains and neighborhoods.",
  intro:
    "Tokyo is the capital of Japan and one of the most exciting cities in the world. It blends historic shrines with cutting edge design and endless food options.",
  quickFacts: [
    { label: "Country", value: "Japan" },
    { label: "Region", value: "Kanto" },
    { label: "Known for", value: "Shibuya, Asakusa, Meiji Shrine" },
    { label: "Getting around", value: "JR and metro trains, walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Tokyo",
      paragraphs: [
        "Shibuya Crossing and Shinjuku show the city modern pace, while Asakusa and Senso ji reveal its historic side. Meiji Shrine, Tokyo Skytree, and the Tsukiji Outer Market round out a balanced first visit.",
      ],
    },
    {
      heading: "Food and culture in Tokyo",
      paragraphs: [
        "From ramen shops to sushi counters, Tokyo is built for food lovers. Explore small izakaya alleys in Shinjuku or try fresh seafood around the markets for a classic local meal.",
      ],
    },
    {
      heading: "Best time to visit Tokyo and practical tips",
      paragraphs: [
        "Spring and autumn are the most comfortable seasons, especially late March to April and October to November. Use an IC card for transit and plan neighborhoods by day to minimize long rail transfers.",
      ],
    },
  ],
  keywords: [
    "Tokyo travel guide",
    "things to do in Tokyo",
    "Shibuya",
    "Asakusa",
    "Tokyo food",
  ],
};

export default blog;

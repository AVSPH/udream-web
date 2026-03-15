import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "singapore",
  title: "Singapore City Travel Guide",
  metaTitle: "Singapore City travel guide",
  metaDescription:
    "Plan a trip to Singapore City with Marina Bay, Gardens by the Bay, hawker centers, and smart transit. Useful tips for first time visitors.",
  intro:
    "Singapore City is the heart of the island nation and a showcase of modern design and green planning. It blends world class dining with heritage districts that are easy to explore.",
  quickFacts: [
    { label: "Country", value: "Singapore" },
    { label: "Region", value: "Southeast Asia" },
    {
      label: "Known for",
      value: "Marina Bay, Gardens by the Bay, hawker centers",
    },
    { label: "Getting around", value: "MRT trains, buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Singapore City",
      paragraphs: [
        "Spend time around Marina Bay for the skyline, then walk to Gardens by the Bay and the Merlion. The Singapore Botanic Gardens and the nearby National Orchid Garden add a peaceful break from the downtown pace.",
      ],
    },
    {
      heading: "Food and culture in Singapore City",
      paragraphs: [
        "Hawker centers are essential, with Maxwell Food Centre and Lau Pa Sat among the favorites. Explore Chinatown, Little India, and Kampong Glam to see how the city cultures shape its food, art, and temples.",
      ],
    },
    {
      heading: "Best time to visit Singapore City and practical tips",
      paragraphs: [
        "The city is warm year round, with slightly drier months from February to April. Carry a light rain layer, and use an EZ Link card or contactless payment for trains and buses.",
      ],
    },
  ],
  keywords: [
    "Singapore City travel guide",
    "things to do in Singapore",
    "Marina Bay",
    "Gardens by the Bay",
    "Singapore hawker centers",
  ],
};

export default blog;

import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "malaysia",
  title: "Kuala Lumpur Malaysia Travel Guide",
  metaTitle: "Kuala Lumpur travel guide",
  metaDescription:
    "Discover Kuala Lumpur, the capital of Malaysia, with Petronas Twin Towers, Batu Caves, and vibrant street food. Practical tips for a first visit.",
  intro:
    "Kuala Lumpur is the capital of Malaysia and a lively mix of Malay, Chinese, and Indian heritage. The city is known for its skyline, temples, and food markets that stay busy from morning to late night.",
  quickFacts: [
    { label: "Country", value: "Malaysia" },
    { label: "Region", value: "Southeast Asia" },
    {
      label: "Known for",
      value: "Petronas Twin Towers, Batu Caves, street food",
    },
    { label: "Getting around", value: "LRT and MRT trains, taxis, ride hailing" },
  ],
  sections: [
    {
      heading: "Top things to do in Kuala Lumpur",
      paragraphs: [
        "Start with the Petronas Twin Towers and KLCC Park for iconic city views. Take a short trip to Batu Caves, then return to Merdeka Square and Central Market to see the historic core of the city.",
      ],
    },
    {
      heading: "Food and culture in Kuala Lumpur",
      paragraphs: [
        "Jalan Alor is a must for evening street food, while Chinatown and Little India in Brickfields show the city multicultural roots. Masjid Jamek and the old railway station add important architectural landmarks to a food focused day.",
      ],
    },
    {
      heading: "Best time to visit Kuala Lumpur and practical tips",
      paragraphs: [
        "The weather is warm all year, with slightly drier conditions from May to September. Carry light rain protection, use a transit card for trains, and plan indoor stops during afternoon showers.",
      ],
    },
  ],
  keywords: [
    "Kuala Lumpur travel guide",
    "things to do in Kuala Lumpur",
    "Malaysia capital city",
    "Petronas Twin Towers",
    "Batu Caves",
  ],
};

export default blog;

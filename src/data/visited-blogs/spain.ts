import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "spain",
  title: "Barcelona Spain Travel Guide",
  metaTitle: "Barcelona travel guide",
  metaDescription:
    "Visit Barcelona, Spain with Gaudi architecture, the Sagrada Familia, beaches, and tapas. Helpful tips for neighborhoods.",
  intro:
    "Barcelona is a Mediterranean city in Spain known for Gaudi architecture and lively street life. It blends historic quarters with seaside promenades.",
  quickFacts: [
    { label: "Country", value: "Spain" },
    { label: "Region", value: "Catalonia" },
    { label: "Known for", value: "Sagrada Familia, Park Guell, Las Ramblas" },
    { label: "Getting around", value: "Metro, buses, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Barcelona",
      paragraphs: [
        "Sagrada Familia and Park Guell are the two Gaudi highlights, while the Gothic Quarter and Casa Batllo show different sides of the city architecture. Barceloneta Beach offers a seaside break close to the center.",
      ],
    },
    {
      heading: "Food and culture in Barcelona",
      paragraphs: [
        "Tapas bars and markets like La Boqueria are ideal for sampling local flavors. Look for paella, grilled seafood, and fresh produce from the stalls.",
      ],
    },
    {
      heading: "Best time to visit Barcelona and practical tips",
      paragraphs: [
        "Late spring and early autumn are comfortable for sightseeing and beach time. Use the metro for longer distances and plan early visits to popular landmarks to avoid lines.",
      ],
    },
  ],
  keywords: [
    "Barcelona travel guide",
    "things to do in Barcelona",
    "Sagrada Familia",
    "Park Guell",
    "Barcelona beaches",
  ],
};

export default blog;

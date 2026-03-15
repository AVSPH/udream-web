import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "austria",
  title: "Vienna Austria Travel Guide",
  metaTitle: "Vienna travel guide",
  metaDescription:
    "Experience Vienna, Austria with imperial palaces, classical music, and cafe culture. Tips for museums and transport.",
  intro:
    "Vienna is the capital of Austria and a center of Habsburg history and classical music. Grand palaces and elegant streets define the city center.",
  quickFacts: [
    { label: "Country", value: "Austria" },
    { label: "Region", value: "Central Europe" },
    { label: "Known for", value: "Schonbrunn Palace, Hofburg, coffee houses" },
    { label: "Getting around", value: "U Bahn, trams, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Vienna",
      paragraphs: [
        "Schonbrunn Palace and the Hofburg complex reveal the imperial past, while St Stephens Cathedral anchors the historic center. The Belvedere and Vienna State Opera add art and music highlights.",
      ],
    },
    {
      heading: "Food and culture in Vienna",
      paragraphs: [
        "Coffee houses are part of daily life, and a slice of Sachertorte is a classic choice. Wiener schnitzel and local pastries make a good introduction to the city cuisine.",
      ],
    },
    {
      heading: "Best time to visit Vienna and practical tips",
      paragraphs: [
        "Spring and early autumn offer mild weather for walking and park visits. The transit system is efficient, so a day pass makes it easy to move between palaces and museums.",
      ],
    },
  ],
  keywords: [
    "Vienna travel guide",
    "things to do in Vienna",
    "Schonbrunn Palace",
    "Hofburg",
    "Vienna coffee houses",
  ],
};

export default blog;

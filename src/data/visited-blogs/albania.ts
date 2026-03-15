import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "albania",
  title: "Tirana Albania Travel Guide",
  metaTitle: "Tirana travel guide",
  metaDescription:
    "Explore Tirana, the capital of Albania, with Skanderbeg Square, museums, and nearby mountains. Local tips and food ideas.",
  intro:
    "Tirana is the capital of Albania and has transformed into a colorful, youthful city. Squares, museums, and cafes anchor the center.",
  quickFacts: [
    { label: "Country", value: "Albania" },
    { label: "Region", value: "Central Albania" },
    { label: "Known for", value: "Skanderbeg Square, BunkArt, Dajti Mountain" },
    { label: "Getting around", value: "Walking and taxis" },
  ],
  sections: [
    {
      heading: "Top things to do in Tirana",
      paragraphs: [
        "Skanderbeg Square is the city core, with the National History Museum and Et'hem Bey Mosque nearby. BunkArt and the Dajti Mountain cable car add a deeper look at recent history and scenic views.",
      ],
    },
    {
      heading: "Food and culture in Tirana",
      paragraphs: [
        "Local meals include byrek, grilled meats, and fresh salads, often served in casual cafes. The cafe culture is lively, making it easy to pause between museums and markets.",
      ],
    },
    {
      heading: "Best time to visit Tirana and practical tips",
      paragraphs: [
        "Spring and autumn are the most comfortable seasons for city walks. The center is compact, so a central hotel helps you explore most sights on foot.",
      ],
    },
  ],
  keywords: [
    "Tirana travel guide",
    "things to do in Tirana",
    "Skanderbeg Square",
    "BunkArt",
    "Albania capital",
  ],
};

export default blog;

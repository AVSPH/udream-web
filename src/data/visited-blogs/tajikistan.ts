import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "tajikistan",
  title: "Dushanbe Tajikistan Travel Guide",
  metaTitle: "Dushanbe travel guide",
  metaDescription:
    "Visit Dushanbe, the capital of Tajikistan, with parks, museums, and gateway trips to the Pamir region. Practical travel tips.",
  intro:
    "Dushanbe is the capital of Tajikistan and sits in the Hissar Valley. The city has broad avenues, leafy parks, and a calm pace compared to larger capitals.",
  quickFacts: [
    { label: "Country", value: "Tajikistan" },
    { label: "Region", value: "Central Asia" },
    { label: "Known for", value: "Rudaki Park, museums, bazaars" },
    { label: "Getting around", value: "Taxis and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Dushanbe",
      paragraphs: [
        "Start at Rudaki Park and the central square, then visit the National Museum of Tajikistan for history and art. A short trip to the Hissar Fortress adds a nearby cultural stop.",
      ],
    },
    {
      heading: "Food and culture in Dushanbe",
      paragraphs: [
        "Local meals often include plov, shashlik, and fresh flatbread. Bazaars are a great place to see daily life and pick up dried fruit and spices.",
      ],
    },
    {
      heading: "Best time to visit Dushanbe and practical tips",
      paragraphs: [
        "Spring and autumn provide comfortable temperatures for walking and day trips. The city center is easy to explore on foot, while taxis are inexpensive for longer distances.",
      ],
    },
  ],
  keywords: [
    "Dushanbe travel guide",
    "Tajikistan capital",
    "things to do in Dushanbe",
    "Rudaki Park",
    "Hissar Fortress",
  ],
};

export default blog;

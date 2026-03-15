import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "vietnam",
  title: "Ha Long Bay Vietnam Travel Guide",
  metaTitle: "Ha Long Bay travel guide",
  metaDescription:
    "Discover Ha Long Bay, Vietnam with limestone islands, caves, and cruises in the Gulf of Tonkin. Best routes and travel tips.",
  intro:
    "Ha Long Bay in northern Vietnam is famous for limestone karsts rising from emerald water. It is a UNESCO World Heritage site and a classic cruise destination.",
  quickFacts: [
    { label: "Country", value: "Vietnam" },
    { label: "Region", value: "Northern Vietnam" },
    { label: "Known for", value: "Limestone karsts, cruises, caves" },
    { label: "Getting around", value: "Cruise boats and day tours" },
  ],
  sections: [
    {
      heading: "Top things to do in Ha Long Bay",
      paragraphs: [
        "An overnight cruise is the best way to see the bay, with stops for kayaking and viewpoints like Ti Top Island. Sung Sot Cave is a popular stop, and nearby Bai Tu Long Bay offers a quieter route.",
      ],
    },
    {
      heading: "Food and culture around Ha Long Bay",
      paragraphs: [
        "Seafood is the main attraction, from grilled squid to fresh crab served on boats or in the harbor area. Local fishing communities add a cultural layer that helps explain life on the water.",
      ],
    },
    {
      heading: "Best time to visit Ha Long Bay and practical tips",
      paragraphs: [
        "Spring and autumn often bring clearer skies and calmer seas, especially from March to May and September to November. Pack a light jacket for evening breezes and check weather conditions before sailing.",
      ],
    },
  ],
  keywords: [
    "Ha Long Bay travel guide",
    "Vietnam cruises",
    "things to do in Ha Long Bay",
    "UNESCO World Heritage site",
    "Gulf of Tonkin",
  ],
};

export default blog;

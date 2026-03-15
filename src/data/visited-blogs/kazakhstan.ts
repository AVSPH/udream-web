import type { StaticBlog } from "./types";

const blog: StaticBlog = {
  slug: "kazakhstan",
  title: "Almaty Kazakhstan Travel Guide",
  metaTitle: "Almaty travel guide",
  metaDescription:
    "Explore Almaty, the largest city in Kazakhstan, with mountain views, markets, and parks. Day trips and transport tips.",
  intro:
    "Almaty is the largest city in Kazakhstan and sits at the base of the Trans Ili Alatau mountains. It blends Soviet era architecture with modern cafes and wide boulevards.",
  quickFacts: [
    { label: "Country", value: "Kazakhstan" },
    { label: "Region", value: "Central Asia" },
    { label: "Known for", value: "Mountain views, Medeu, Green Bazaar" },
    { label: "Getting around", value: "Metro, taxis, and walking" },
  ],
  sections: [
    {
      heading: "Top things to do in Almaty",
      paragraphs: [
        "Ride the cable car to Kok Tobe for city views, then visit Panfilov Park and the Ascension Cathedral. Day trips to Medeu and Shymbulak offer easy access to alpine scenery.",
      ],
    },
    {
      heading: "Food and culture in Almaty",
      paragraphs: [
        "Green Bazaar is a great place to sample local fruits, nuts, and dried goods. Traditional dishes like beshbarmak and lagman are common on local menus and showcase regional flavors.",
      ],
    },
    {
      heading: "Best time to visit Almaty and practical tips",
      paragraphs: [
        "Late spring through early autumn is ideal for hikes, while winter brings snow sports in the nearby mountains. The metro is clean and efficient, and taxis are widely available.",
      ],
    },
  ],
  keywords: [
    "Almaty travel guide",
    "things to do in Almaty",
    "Kazakhstan travel",
    "Medeu",
    "Kok Tobe",
  ],
};

export default blog;

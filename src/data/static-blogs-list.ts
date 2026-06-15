export interface StaticBlogCard {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  href: string;
  date: string;
  category?: string;
}

export const customStaticBlogs: StaticBlogCard[] = [
  {
    id: "bali-digital-nomads",
    title: "Bali for Digital Nomads: Where to Stay, Work, and Live on a Budget",
    excerpt: "Bali digital nomad guide 2026. Real costs, tips, and first-hand advice from Meri & Man on living and working in Bali.",
    thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80",
    href: "/blog/bali-digital-nomads",
    date: "2026-06-15",
    category: "Digital Nomad",
  },
  {
    id: "digital-nomad-visa-philippines",
    title: "Digital Nomad Visa Guide for Philippine Passport Holders (2026)",
    excerpt: "Traveling on a Philippine passport takes more planning. A complete guide on visa-free, VOA, and digital nomad visas for Filipinos.",
    thumbnail: "/assets/blog/digital-ph/DJI_20251022104846_0030_D.jpg",
    href: "/blog/digital-nomad-visa-philippines",
    date: "2026-06-15",
    category: "Visa Guide",
  },
  {
    id: "how-to-become-digital-nomad",
    title: "How to Become a Digital Nomad as a Filipino (The Real Roadmap)",
    excerpt: "Let's skip the part where we tell you it's easy. This is the practical how-to, broken into the steps that actually matter.",
    thumbnail: "/assets/blog/how-to-become-digital-nomad/DJI_20251022120056_0045_D.JPG",
    href: "/blog/how-to-become-digital-nomad",
    date: "2026-06-15",
    category: "Digital Nomad",
  }
];

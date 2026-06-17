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
    thumbnail: "/assets/blog/how-to-become-digital-nomad/DJI_20260117115313_0852_D.JPG",
    href: "/blog/how-to-become-digital-nomad",
    date: "2026-06-15",
    category: "Digital Nomad",
  },
  {
    id: "japan-travel-budget-10-days",
    title: "How Much Does It Cost to Travel Japan for 10 Days? Real Budget Breakdown",
    excerpt: "Japan has a reputation for being expensive. It's not entirely wrong, but it's not the whole story either. A realistic daily breakdown.",
    thumbnail: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80",
    href: "/blog/japan-travel-budget-10-days",
    date: "2026-06-16",
    category: "Travel Guide",
  },
  {
    id: "is-southeast-asia-still-worth-it",
    title: "Is Southeast Asia Still Worth It for Budget Travelers in 2026?",
    excerpt: "The question comes up constantly: Is SEA still affordable? Here is the direct answer with real numbers.",
    thumbnail: "/assets/blog/southeast-asia-2026/DJI_20251107145916_0060_D.JPG",
    href: "/blog/is-southeast-asia-still-worth-it",
    date: "2026-06-16",
    category: "Travel Budget",
  },
  {
    id: "tokyo-in-5-days",
    title: "Tokyo in 5 Days: The Only Itinerary You Need (With Real Costs)",
    excerpt: "Five days in Tokyo is enough to feel like you understand why people come back. The ultimate first-timer itinerary.",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=80",
    href: "/blog/tokyo-in-5-days",
    date: "2026-06-16",
    category: "Itinerary",
  },
  {
    id: "how-to-freelance-and-travel",
    title: "How to Freelance and Travel: The Filipino Couple's Guide to Location Freedom",
    excerpt: "We didn't quit our jobs on a whim. We built income first, then left. The real guide to location freedom.",
    thumbnail: "/assets/blog/travel-and-freelance/DJI_20251226185748_0589_D.JPG",
    href: "/blog/how-to-freelance-and-travel",
    date: "2026-06-16",
    category: "Nomad Life",
  },
  {
    id: "uzbekistan-travel-guide",
    title: "Uzbekistan Travel Guide: The Silk Road Destination Nobody Is Talking About (Yet)",
    excerpt: "Uzbekistan is one of the most visually stunning and culturally layered places we've ever been. A complete first-time visitor guide.",
    thumbnail: "/assets/blog/uzbekistan/DJI_20251110162301_0044_D.JPG",
    href: "/blog/uzbekistan-travel-guide",
    date: "2026-06-16",
    category: "Travel Guide",
  }
];

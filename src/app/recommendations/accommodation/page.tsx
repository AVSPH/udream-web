import type { Metadata } from "next";
import { accommodations, SITE_URL } from "@/data/accommodations";
import { AccommodationIndex } from "@/components/recommendations/AccommodationIndex";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

const url = `${SITE_URL}/recommendations/accommodation`;

export const metadata: Metadata = {
  title: "Where to Stay ~ Accommodation We Recommend | Udream",
  description:
    "Hand-picked apartments and stays we would book again ~ central locations, fast Wi-Fi and dedicated workspaces for remote work. Honest accommodation recommendations from a couple who travels full-time.",
  keywords: [
    "accommodation recommendations",
    "where to stay",
    "best Airbnb",
    "remote work apartment",
    "digital nomad accommodation",
    "travel stays",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    siteName: "Udream",
    title: "Where to Stay ~ Accommodation We Recommend | Udream",
    description:
      "Hand-picked apartments and stays we would book again ~ central locations, fast Wi-Fi and dedicated workspaces for remote work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Stay ~ Accommodation We Recommend | Udream",
    description:
      "Hand-picked apartments and stays we would book again ~ central, fast Wi-Fi, remote-work ready.",
  },
};

export default function AccommodationPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accommodation We Recommend",
    itemListElement: accommodations.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/recommendations/accommodation/${a.slug}`,
      name: a.name,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: SITE_URL },
          { name: "Recommendations", item: `${SITE_URL}/recommendations` },
          { name: "Accommodation", item: url },
        ]}
      />
      <AccommodationIndex />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { accommodations, getAccommodation, SITE_URL } from "@/data/accommodations";
import { AccommodationDetail } from "@/components/recommendations/AccommodationDetail";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { FAQSection, type FAQ } from "@/components/blog/faq-section";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return accommodations.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const listing = getAccommodation(slug);
  if (!listing) return { title: "Accommodation not found | Udream" };

  const url = `${SITE_URL}/recommendations/accommodation/${listing.slug}`;
  const title = `${listing.name} ~ ${listing.city} | Udream Recommends`;
  const description = `${listing.tagline} Rated ${listing.rating.toFixed(2)} from ${listing.reviewCount} reviews. See why we recommend this ${listing.city} stay and book it on Airbnb.`;
  const ogImage = `${SITE_URL}${listing.heroImage}`;

  return {
    title,
    description,
    keywords: [
      `${listing.city} accommodation`,
      `where to stay in ${listing.city}`,
      `${listing.city} Airbnb`,
      `${listing.city} apartment`,
      `${listing.city} remote work apartment`,
      `${listing.city} digital nomad`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "Udream",
      images: [{ url: ogImage, width: 1200, height: 800, alt: listing.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function buildFaqs(listing: ReturnType<typeof getAccommodation>): FAQ[] {
  if (!listing) return [];
  const nearestSight = listing.location.nearby.find((n) => /old bridge|stari most/i.test(n.place));
  return [
    {
      question: `Is this ${listing.city} apartment good for remote work?`,
      answer: `Yes. It has a dedicated workstation with a full-size desk and an external monitor, plus fast Wi-Fi measured at around ${listing.wifiMbps} Mbps. Several guests specifically booked it for longer remote-work stays and rated the workspace as a highlight.`,
    },
    {
      question: `How far is the apartment from the Old Bridge and the old town?`,
      answer: `It is about ${nearestSight ? nearestSight.time : "a 15 minute walk"} from the Old Bridge (Stari Most). All the major sights in Mostar are within a 15-minute walk, and you are 2 minutes from the main bus lines and the city park.`,
    },
    {
      question: `Is there parking at the apartment?`,
      answer: `Yes, there is free parking on the premises, which is genuinely rare this close to the centre of Mostar. That makes it a strong choice if you are road-tripping around Bosnia and the Balkans.`,
    },
    {
      question: `How many people can stay, and what are the beds?`,
      answer: `It sleeps up to ${listing.capacity.guests} guests: a bedroom with 1 king bed and a living room with 1 sofa bed. There is ${listing.capacity.baths} bathroom with a bathtub, and two AC units for the summer heat.`,
    },
    {
      question: `How do I check in, and what are the check-in times?`,
      answer: `Check-in is self check-in with a lockbox, so you can arrive on your own schedule after 2:00 PM. Checkout is before 11:00 AM. The host, ${listing.host.name}, is a Superhost with a 100% response rate if you need anything.`,
    },
    {
      question: `How much does it cost to stay here?`,
      answer: `The headline price is ${listing.priceDisplay} (${listing.priceApprox}), set by the host and varying by season. Check the live dates and total price on the Airbnb listing before you book.`,
    },
  ];
}

export default async function AccommodationListingPage({ params }: Props) {
  const { slug } = await params;
  const listing = getAccommodation(slug);
  if (!listing) notFound();

  const url = `${SITE_URL}/recommendations/accommodation/${listing.slug}`;
  const images = listing.images.map((i) => `${SITE_URL}${i.src}`);
  const faqs = buildFaqs(listing);

  // schema.org LodgingBusiness with aggregate rating + individual reviews
  const lodgingLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: listing.name,
    description: listing.description.join(" "),
    url,
    image: images,
    address: {
      "@type": "PostalAddress",
      addressLocality: listing.city,
      addressCountry: "BA",
    },
    amenityFeature: listing.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: listing.rating,
      reviewCount: listing.reviewCount,
      bestRating: 5,
    },
    review: listing.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingLd) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: SITE_URL },
          { name: "Recommendations", item: `${SITE_URL}/recommendations` },
          { name: "Accommodation", item: `${SITE_URL}/recommendations/accommodation` },
          { name: listing.city, item: url },
        ]}
      />
      <AccommodationDetail listing={listing} />
      <div className="max-w-3xl mx-auto">
        <FAQSection
          faqs={faqs}
          title={`${listing.city} stay ~ common questions`}
          description="Everything travellers ask before booking this apartment."
        />
      </div>
    </>
  );
}

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

  const wifiLine = listing.wifiMbps
    ? ` and fast Wi-Fi measured at around ${listing.wifiMbps} Mbps`
    : " and high-speed Wi-Fi";
  const hasParking = listing.amenities.some((a) => /parking/i.test(a));
  const sleeping = listing.sleeping.join(" and ").toLowerCase();
  const checkInRule = listing.houseRules.find((r) => /after/i.test(r));
  const checkOutRule = listing.houseRules.find((r) => /before/i.test(r));
  const priceLine =
    listing.priceApprox
      ? `The headline price is ${listing.priceDisplay} (${listing.priceApprox}), set by the host and varying by season. Check the live dates and total price on the Airbnb listing before you book.`
      : `The host prices this stay by date ~ add your check-in and checkout on the Airbnb listing to see the exact total. It varies by season.`;

  const faqs: FAQ[] = [];

  if (listing.goodForRemoteWork) {
    const hasWorkspace = listing.amenities.some((a) => /workspace|desk/i.test(a));
    faqs.push({
      question: `Is this ${listing.city} apartment good for remote work?`,
      answer: hasWorkspace
        ? `Yes. It has a dedicated workspace${wifiLine}. Several guests booked it for longer remote-work stays and rated the workspace as a highlight.`
        : `Yes. It has${wifiLine}, and guests have happily worked from here on longer stays.`,
    });
  }

  faqs.push({
    question: `Where is the apartment and how is the location?`,
    answer: listing.location.summary,
  });

  if (hasParking) {
    faqs.push({
      question: `Is there parking at the apartment?`,
      answer: `Yes, there is free parking on the premises${/mostar/i.test(listing.city) ? ", which is genuinely rare this close to the centre" : ""}.`,
    });
  }

  faqs.push({
    question: `How many people can stay, and what are the beds?`,
    answer: `It sleeps up to ${listing.capacity.guests} guests: ${sleeping}. There ${listing.capacity.baths === 1 ? "is" : "are"} ${listing.capacity.baths} bathroom${listing.capacity.baths === 1 ? "" : "s"}.`,
  });

  faqs.push({
    question: `How do I check in?`,
    answer: `Check-in is self check-in${checkInRule ? `, ${checkInRule.toLowerCase()}` : ""}${checkOutRule ? `, and ${checkOutRule.toLowerCase()}` : ""}. The host, ${listing.host.name}, is a Superhost with a 100% response rate if you need anything.`,
  });

  faqs.push({
    question: `How much does it cost to stay here?`,
    answer: priceLine,
  });

  return faqs;
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

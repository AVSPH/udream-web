import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpotPricesCity } from "@/components/resources/SpotPricesCity";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { citySpotPricing, getCitySpotPricing } from "@/data/attraction-prices";

export function generateStaticParams() {
  return citySpotPricing.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = getCitySpotPricing(city);
  if (!data) return { title: "Attraction Prices | Udream" };
  return {
    title: `${data.city} Attraction Prices — What the Famous Spots Cost | Udream`,
    description: `Entry fees for ${data.city}'s must-see tourist spots: ${data.spots
      .slice(0, 4)
      .map((s) => s.name)
      .join(", ")} and more. Budget ${data.estTotal} for the classics.`,
  };
}

export default async function CityAttractionPricesPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const data = getCitySpotPricing(city);
  if (!data) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://udreamtravels.com" },
          { name: "Resources", item: "https://udreamtravels.com/resources" },
          {
            name: "Attraction Prices",
            item: "https://udreamtravels.com/resources/attraction-prices",
          },
          {
            name: data.city,
            item: `https://udreamtravels.com/resources/attraction-prices/${data.slug}`,
          },
        ]}
      />
      <SpotPricesCity city={data} />
    </>
  );
}

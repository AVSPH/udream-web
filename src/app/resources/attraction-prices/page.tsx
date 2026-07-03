import type { Metadata } from "next";
import { SpotPricesIndex } from "@/components/resources/SpotPricesIndex";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "Tourist Attraction Prices | Udream",
  description:
    "Entry fees for the famous tourist spots in the cities we've visited — Almaty, Kuala Lumpur, Singapore, Bangkok, Tokyo and more. Know how much to bring before you go.",
};

export default function AttractionPricesPage() {
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
        ]}
      />
      <SpotPricesIndex />
    </>
  );
}

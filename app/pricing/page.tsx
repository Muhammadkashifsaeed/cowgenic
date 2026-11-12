import type { Metadata } from "next";
import { PricingPackagesSection } from "@/components/sections/pricing-packages-section";
import { buildPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing & Farm Hardware Packages",
  description:
    "Cowgenic PKR pricing: Rs. 36,000 smart cow neck collars, 2G/4G & 5G base stations, plus Starter, Growth & Enterprise dairy packages across Pakistan.",
  canonical: "/pricing",
  keywords: [
    ...siteConfig.keywords,
    "smart cow collar price Pakistan",
    "Cowgenic pricing packages",
  ],
});

export default function PricingPage() {
  return (
    <main className="flex w-full flex-col">
      <PricingPackagesSection />
    </main>
  );
}

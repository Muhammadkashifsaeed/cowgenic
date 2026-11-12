import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { CoreMonitoringFeaturesSection } from "@/components/sections/core-monitoring-features-section";
import { DeepInsightsSection } from "@/components/sections/deep-insights-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingPackagesSection } from "@/components/sections/pricing-packages-section";
import { SmartCollarSection } from "@/components/sections/smart-collar-section";
import { buildPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: `${siteConfig.name} — Smart Cow Neck Collar System in Pakistan`,
    description: siteConfig.description,
    canonical: "/",
  }),
};

const baseUrl = siteConfig.url.replace(/\/+$/, "");

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cowgenic Smart Neck Collar",
  description: siteConfig.description,
  image: `${baseUrl}/images/neck-icon.webp`,
  brand: {
    "@type": "Brand",
    name: siteConfig.legalName,
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "PKR",
    price: "36000",
    availability: "https://schema.org/InStock",
    url: `${baseUrl}/#pricing`,
  },
};

export default function HomePage() {
  return (
    <main className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <SmartCollarSection />
      <CoreMonitoringFeaturesSection />
      <DeepInsightsSection />
      <PricingPackagesSection />
      <ContactSection />
    </main>
  );
}

import type { Metadata } from "next";
import { publicEnv } from "@/lib/env";
import type { NavItem } from "@/types";

const sanitizedWhatsappNumber = publicEnv.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(
  /[^\d]/g,
  "",
);

export const siteConfig = {
  name: publicEnv.NEXT_PUBLIC_APP_NAME,
  legalName: "Cowgenic",
  tagline: "Pakistan's First & Only Native AI Smart Cow Neck Collar System",
  // 151 chars — ideal SEO snippet length (<= 160 chars)
  description:
    "Pakistan's first native AI smart cow neck collar for 24/7 eating, rumination, activity tracking, estrus heat detection, breeding timing & theft alerts.",
  keywords: [
    "Cowgenic",
    "smart cow neck collar Pakistan",
    "dairy farm monitoring system",
    "cattle health monitoring collar",
    "heat detection cow collar",
    "cow rumination tracking",
    "eating time monitoring cattle",
    "exact insemination timing dairy",
    "cow theft boundary alert",
    "DFMS dairy farm management Pakistan",
    "cow neck collar Lahore",
  ],
  url: publicEnv.NEXT_PUBLIC_APP_URL,
  whatsappUrl: `https://wa.me/${sanitizedWhatsappNumber}?text=${encodeURIComponent(
    "Assalam-o-Alaikum, I would like to learn more about Cowgenic smart neck collars.",
  )}`,
  contact: {
    phoneDisplay: "+92 321 1044549",
    phoneHref: "tel:+923211044549",
    email: "cowgenic@gmail.com",
    supportEmail: "cowgenic.ai@gmail.com",
    streetAddress: "2nd Floor, 12-K, Block A, Gulberg III",
    city: "Lahore",
    region: "Punjab",
    country: "PK",
    countryName: "Pakistan",
  },
  navItems: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavItem[],
};

export function buildPageMetadata({
  title,
  description,
  canonical,
  keywords,
  images,
}: {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
  images?: NonNullable<Metadata["openGraph"]>["images"];
}): Metadata {
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_PK",
      alternateLocale: ["ur_PK"],
      siteName: siteConfig.name,
      url: canonical,
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}

import type { MetadataRoute } from "next";
import { FEATURE_PAGE_SLUGS } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/+$/, "");
  const lastModified = new Date("2026-01-15");

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/order`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const featureRoutes: MetadataRoute.Sitemap = FEATURE_PAGE_SLUGS.map(
    (slug) => ({
      url: `${baseUrl}/features/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    }),
  );

  return [...staticRoutes, ...featureRoutes];
}


import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeatureSubpageView } from "@/components/sections/feature-subpage-view";
import { featurePagesData } from "@/lib/feature-pages";
import { FEATURE_PAGE_SLUGS, type FeaturePageSlug } from "@/lib/i18n";
import { buildPageMetadata, siteConfig } from "@/lib/site";

export const dynamicParams = false;

function isFeaturePageSlug(value: string): value is FeaturePageSlug {
  return (FEATURE_PAGE_SLUGS as readonly string[]).includes(value);
}

export function generateStaticParams() {
  return FEATURE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/features/[slug]">): Promise<Metadata> {
  const { slug } = await params;

  if (!isFeaturePageSlug(slug)) {
    return {};
  }

  const feature = featurePagesData.en[slug];

  return buildPageMetadata({
    title: feature.title,
    description: feature.heroSubtitle,
    canonical: `/features/${slug}`,
    keywords: [feature.title, ...feature.keyPoints, ...siteConfig.keywords],
    images: [
      {
        url: feature.image,
        width: 720,
        height: 720,
        alt: feature.imageAlt,
      },
    ],
  });
}

export default async function FeatureSubPage({
  params,
}: PageProps<"/features/[slug]">) {
  const { slug } = await params;

  if (!isFeaturePageSlug(slug)) {
    notFound();
  }

  return <FeatureSubpageView slug={slug} />;
}

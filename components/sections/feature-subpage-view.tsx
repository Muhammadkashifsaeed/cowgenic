"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import {
  FadeIn,
  RevealDivider,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";
import { FeatureIconBadge } from "@/components/ui/feature-icon-badge";
import { featurePagesData, featurePageUiCopy } from "@/lib/feature-pages";
import type { FeaturePageSlug } from "@/lib/i18n";
import { cn } from "@/utils/cn";

export function FeatureSubpageView({ slug }: { slug: FeaturePageSlug }) {
  const { isRtl, locale, t } = useLanguage();
  const data = featurePagesData[locale][slug];
  const ui = featurePageUiCopy[locale];

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="flex w-full flex-col">
      {/* Band 1: Feature Hero Showcase (matches Homepage DeepInsights layout) */}
      <section className="w-full bg-gradient-to-b from-slate-50/75 via-white to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <FadeIn inView={false}>
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
            >
              <Link href="/" className="transition-colors hover:text-[#24A176]">
                {ui.homeLabel}
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/features"
                className="transition-colors hover:text-[#24A176]"
              >
                {ui.featuresLabel}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[#24A176]">{data.title}</span>
            </nav>
          </FadeIn>

          {/* 2-Column Showcase */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
            {/* Left Content Column */}
            <FadeIn
              inView={false}
              className="order-2 lg:order-1 lg:col-span-6 xl:col-span-5"
            >
              {/* Unboxed Icon + Module Label */}
              <div className="inline-flex items-center gap-3">
                <FeatureIconBadge slug={slug} size="md" />
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-900 sm:text-sm">
                    {data.badge}
                  </span>
                  <span
                    className="h-px w-8 bg-[#24A176]/50"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#24A176] sm:text-4xl lg:text-[42px]">
                {data.title}
              </h1>

              {/* Short Accent Divider */}
              <RevealDivider className="mt-4 h-1 w-16 rounded-full bg-[#24A176]" />

              <p className="mt-5 text-base font-medium leading-relaxed text-gray-900 sm:text-lg">
                {data.heroSubtitle}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {data.overview}
              </p>

              {/* 2x2 Key Capabilities Grid (Homepage Core Module Points) */}
              <div className="mt-7">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {ui.keyCapabilitiesLabel}
                </p>
                <ul className="mt-3.5 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
                  {data.keyPoints.map((point, idx) => (
                    <li
                      key={`${slug}-pt-${idx}`}
                      className="flex items-start gap-2.5"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/25">
                        <CheckCircle2
                          className="size-3.5 stroke-[2.4]"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm font-semibold leading-snug text-gray-800 sm:text-[15px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Row */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/order"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#24A176] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1D8762]"
                >
                  {ui.orderCollarCta}
                </Link>

                <Link
                  href="/#contact"
                  className="group/cta relative inline-flex items-center gap-2 pb-1 text-base font-bold tracking-tight text-[#24A176] transition-colors duration-200 hover:text-[#15694B]"
                >
                  <span>{ui.contactSalesCta}</span>
                  <ArrowRight
                    className={
                      isRtl
                        ? "size-4 rotate-180 transition-transform duration-200 group-hover/cta:-translate-x-1.5"
                        : "size-4 transition-transform duration-200 group-hover/cta:translate-x-1.5"
                    }
                    aria-hidden="true"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-[#24A176]/35 transition-colors duration-200 group-hover/cta:bg-[#15694B]"
                  />
                </Link>
              </div>
            </FadeIn>

            {/* Right Visual Showcase Column */}
            <FadeIn
              inView={false}
              delay={0.08}
              className="order-1 lg:order-2 lg:col-span-6 xl:col-span-7"
            >
              <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  width={720}
                  height={720}
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 48vw, 680px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Band 2: Telemetry Highlights Strip */}
      <section className="w-full border-t border-slate-200/75 bg-slate-50/75 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs">
              <Sparkles className="size-3.5" aria-hidden="true" />
              <span>{ui.telemetryEyebrow}</span>
            </span>
          </div>

          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {data.metrics.map((metric, idx) => (
              <StaggerItem key={`${slug}-metric-${idx}`}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#24A176]/45 hover:shadow-md">
                  <div>
                    <span className="inline-flex rounded-full bg-[#24A176] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      {metric.label}
                    </span>
                    <p className="mt-4 text-3xl font-extrabold tracking-tight text-gray-950">
                      {metric.value}
                    </p>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {metric.detail}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Band 3: How This Module Works */}
      <section className="w-full border-t border-slate-200/75 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
              {ui.workflowEyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#24A176] sm:text-4xl">
              {ui.workflowHeading}
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#24A176]"
            />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {ui.workflowSubheading}
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {data.workflowSteps.map((step) => (
              <StaggerItem key={`${slug}-step-${step.step}`}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#24A176]/55 hover:shadow-xl hover:shadow-[#24A176]/8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-emerald-50 font-mono text-sm font-extrabold text-[#24A176] ring-1 ring-[#24A176]/25">
                    {step.step}
                  </span>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Band 4: Why It Matters for Your Farm */}
      <section className="w-full border-t border-slate-200/75 bg-slate-50/75 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
              {ui.benefitsEyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#24A176] sm:text-4xl">
              {ui.benefitsHeading}
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#24A176]"
            />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {ui.benefitsSubheading}
            </p>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {data.benefits.map((benefit, idx) => (
              <StaggerItem key={`${slug}-benefit-${idx}`}>
                <article className="flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#24A176]/45 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/25">
                      <CheckCircle2
                        className="size-4 stroke-[2.3]"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-gray-950">
                        {benefit.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Band 5: Switch Between All 6 AI Modules + Conversion CTA */}
      <section className="w-full border-t border-slate-200/75 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[#24A176] sm:text-3xl">
              {ui.exploreOthersHeading}
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#24A176]"
            />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {ui.exploreOthersDescription}
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.header.featureItems.map((item) => {
              const isCurrent = item.id === slug;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "group flex items-start gap-3.5 rounded-2xl border p-4 transition-all duration-200",
                    isCurrent
                      ? "border-[#24A176] bg-emerald-50/70 shadow-sm"
                      : "border-slate-200/90 bg-white hover:-translate-y-0.5 hover:border-[#24A176]/50 hover:shadow-md",
                  )}
                >
                  <FeatureIconBadge
                    slug={item.id}
                    size="md"
                    className="mt-0.5"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {item.badge}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-sm font-bold transition-colors sm:text-[15px]",
                        isCurrent
                          ? "text-[#24A176]"
                          : "text-gray-900 group-hover:text-[#24A176]",
                      )}
                    >
                      {item.label}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-slate-600">
                      {item.summary}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom Conversion Banner */}
          <FadeIn delay={0.05} className="mt-14">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#24A176]/25 bg-gradient-to-br from-emerald-50/60 via-white to-slate-50/80 p-7 shadow-sm sm:flex-row sm:items-center sm:p-10">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                  {ui.bannerHeading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {ui.bannerDescription}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/#pricing"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#24A176] px-6 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D8762]"
                >
                  {ui.bannerPricingCta}
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-gray-900 transition-colors hover:border-[#24A176] hover:text-[#24A176]"
                >
                  {ui.bannerWhatsappCta}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

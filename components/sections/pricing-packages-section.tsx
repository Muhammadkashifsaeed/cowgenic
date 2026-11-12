"use client";

import Image from "next/image";
import { Check, Cpu, Package, Radio } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import {
  FadeIn,
  RevealDivider,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";
import { cn } from "@/utils/cn";

export function PricingPackagesSection() {
  const { isRtl, t } = useLanguage();
  const pricing = t.pricingSection;

  return (
    <section
      id="pricing"
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full scroll-mt-32 border-t border-slate-200/75 bg-slate-50/75 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header with Button-Green Heading & Short Divider */}
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
            {pricing.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#24A176] sm:text-4xl lg:text-[42px]">
            {pricing.heading}
          </h2>
          {/* Short Centered Divider Below Heading */}
          <RevealDivider />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
            {pricing.description}
          </p>
        </FadeIn>

        {/* Left-Aligned Sub-Header: Individual Components */}
        <FadeIn delay={0.05} className="mt-14 sm:mt-16">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/90 bg-white text-[#24A176] shadow-xs">
              <Cpu className="size-6 stroke-[2]" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                {pricing.componentsHeading}
              </h3>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                {pricing.componentsDescription}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 2 Compact Horizontal Cards (Image Left / Text & Prices Right) */}
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Card 1: Collar Device */}
          <StaggerItem>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#24A176]/55 hover:shadow-xl hover:shadow-[#24A176]/8 sm:p-6">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
              />

              <div className="grid h-full grid-cols-1 items-center gap-5 sm:grid-cols-12">
                {/* Left: Compact Hardware Preview */}
                <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50/90 to-white p-4 sm:col-span-5 sm:h-full sm:min-h-[210px]">
                  <Image
                    src="/images/neck-icon.webp"
                    alt={pricing.collarDevice.imageAlt}
                    width={600}
                    height={600}
                    quality={95}
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="h-36 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-40"
                  />
                </div>

                {/* Right: Title, Price & Specs */}
                <div className="flex flex-col justify-center sm:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
                      {pricing.collarDevice.title}
                    </h4>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-3 py-0.5 text-[11px] font-extrabold tracking-wide text-[#1B7E5C] ring-1 ring-[#24A176]/30">
                      {pricing.collarDevice.discount}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-baseline gap-2.5 border-b border-slate-100 pb-3.5">
                    <span className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-[28px]">
                      {pricing.collarDevice.price}
                    </span>
                    <span className="text-sm font-semibold text-slate-400 line-through">
                      {pricing.collarDevice.originalPrice}
                    </span>
                  </div>

                  <ul className="mt-3.5 space-y-2">
                    {pricing.collarDevice.features.map((feature, idx) => (
                      <li
                        key={`collar-${idx}`}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/25">
                          <Check
                            className="size-3 stroke-[2.6]"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-xs font-medium text-gray-800 sm:text-[13.5px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </StaggerItem>

          {/* Card 2: Base Stations */}
          <StaggerItem>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#24A176]/55 hover:shadow-xl hover:shadow-[#24A176]/8 sm:p-6">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
              />

              <div className="grid h-full grid-cols-1 items-center gap-5 sm:grid-cols-12">
                {/* Left: Compact Hardware Preview */}
                <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50/90 to-white p-4 sm:col-span-5 sm:h-full sm:min-h-[210px]">
                  <Image
                    src="/images/BaseStation.webp"
                    alt={pricing.baseStations.imageAlt}
                    width={600}
                    height={600}
                    quality={95}
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="h-36 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-40"
                  />
                </div>

                {/* Right: Title, 2G/4G & 5G Tiers & Specs */}
                <div className="flex flex-col justify-center sm:col-span-7">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
                      {pricing.baseStations.title}
                    </h4>
                    <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-3 py-0.5 text-[11px] font-extrabold tracking-wide text-[#1B7E5C] ring-1 ring-[#24A176]/30">
                      {pricing.baseStations.discount}
                    </span>
                  </div>

                  {/* Dual 2G/4G & 5G Pricing Grid */}
                  <div className="mt-3 grid grid-cols-1 gap-2.5 border-b border-slate-100 pb-3.5 min-[420px]:grid-cols-2">
                    {pricing.baseStations.tiers.map((tier) => (
                      <div
                        key={tier.label}
                        className="rounded-xl border border-slate-200/80 bg-slate-50/75 px-3 py-2 transition-colors group-hover:border-emerald-200/80 group-hover:bg-emerald-50/35"
                      >
                        <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#1B7E5C]">
                          <Radio className="size-3" aria-hidden="true" />
                          <span>{tier.label}</span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                          <span className="whitespace-nowrap text-base font-extrabold tracking-tight text-gray-950 sm:text-lg">
                            {tier.price}
                          </span>
                          <span className="whitespace-nowrap text-[11px] font-semibold text-slate-400 line-through">
                            {tier.originalPrice}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-3.5 space-y-2">
                    {pricing.baseStations.features.map((feature, idx) => (
                      <li
                        key={`base-${idx}`}
                        className="flex items-center gap-2.5"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/25">
                          <Check
                            className="size-3 stroke-[2.6]"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-xs font-medium text-gray-800 sm:text-[13.5px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </StaggerItem>
        </StaggerContainer>

        {/* Left-Aligned Sub-Header: Recommended Package Deals */}
        <FadeIn delay={0.06} className="mt-16 sm:mt-20">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-200/90 bg-white text-[#24A176] shadow-xs">
              <Package className="size-6 stroke-[2]" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                {pricing.dealsHeading}
              </h3>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">
                {pricing.dealsDescription}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3 Curated Package Deal Boxes in One Row */}
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {pricing.packages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <article
                className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7",
                  pkg.featured
                    ? "border-[#24A176]/75 shadow-lg shadow-[#24A176]/10"
                    : "border-slate-200/90 shadow-sm hover:border-[#24A176]/55 hover:shadow-[#24A176]/8",
                )}
              >
                {/* Top Accent Bar */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300",
                    pkg.featured
                      ? "scale-x-100"
                      : "origin-center scale-x-0 group-hover:scale-x-100",
                  )}
                />

                <div>
                  <h4 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                    {pkg.title}
                  </h4>

                  {/* Hardware Included Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pkg.hardware.map((hw) => (
                      <span
                        key={hw}
                        className="inline-flex items-center rounded-xl border border-slate-200/85 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-gray-800 sm:text-[13px]"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>

                  {/* Total Investment Highlight Panel */}
                  <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/75 px-4 py-3.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {pricing.totalInvestmentLabel}
                    </p>
                    <p className="mt-1 text-3xl font-extrabold tracking-tight text-gray-950">
                      {pkg.price}
                    </p>
                  </div>

                  {/* Package Benefits List */}
                  <ul className="mt-5 space-y-3">
                    {pkg.benefits.map((benefit, idx) => (
                      <li
                        key={`${pkg.id}-${idx}`}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/25">
                          <Check
                            className="size-3 stroke-[2.6]"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="text-sm font-medium leading-relaxed text-gray-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Package Select CTA */}
                <div className="mt-7">
                  <a
                    href={pkg.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#24A176] px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D8762] hover:shadow-md"
                  >
                    {pkg.ctaLabel}
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom Tax & Custom Packages Note */}
        <FadeIn delay={0.08} className="mt-10 text-center">
          <p className="mx-auto max-w-3xl text-xs font-medium leading-relaxed text-slate-500 sm:text-sm">
            {pricing.taxNote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

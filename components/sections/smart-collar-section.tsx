"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import {
  FadeIn,
  RevealDivider,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";

export function SmartCollarSection() {
  const { isRtl, t } = useLanguage();

  return (
    <section
      id="smart-collar"
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#24A176] sm:text-4xl lg:text-[42px]">
            {t.collarSection.heading}
          </h2>
          <RevealDivider />
          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-lg">
            {t.collarSection.description}
          </p>
        </FadeIn>

        {/* Centered Feature Diagram Image */}
        <FadeIn delay={0.08} className="mx-auto mt-9 max-w-4xl sm:mt-12">
          <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5 transition-shadow duration-300 hover:shadow-xl">
            <Image
              src="/images/feature.webp"
              alt={t.collarSection.imageAlt}
              width={800}
              height={533}
              quality={95}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </FadeIn>

        {/* 4 Highlight Stat Boxes */}
        <StaggerContainer className="mt-9 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:mt-12 lg:grid-cols-4 lg:gap-5">
          {t.collarSection.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#24A176]/60 hover:shadow-lg hover:shadow-[#24A176]/10 sm:px-5 sm:py-7">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
                />
                <span className="inline-flex items-center justify-center rounded-full bg-[#24A176] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-xs transition-transform duration-200 group-hover:scale-105">
                  {stat.label}
                </span>
                <p className="mt-4 text-2xl font-extrabold tracking-tight text-gray-950 sm:text-[32px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold text-gray-700 sm:mt-2 sm:text-sm">
                  {stat.sublabel}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { FadeIn } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  const { isRtl, t } = useLanguage();
  const prefersReducedMotion = Boolean(useReducedMotion());

  const handlePricingScroll = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("pricing");
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#pricing");
    }
  };

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className="relative isolate flex min-h-[520px] w-full items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[600px] sm:px-6 sm:py-24 lg:min-h-[660px] lg:px-8"
    >
      {/* Clear, bright background image with subtle entrance scale settle */}
      <motion.div
        aria-hidden="true"
        initial={prefersReducedMotion ? false : { scale: 1.05, opacity: 0.92 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 1.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/HeroImg.webp"
          alt="Dairy cows wearing Cowgenic smart neck collars inside a barn"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center brightness-[1.06] contrast-[1.08] saturate-[1.08]"
        />
      </motion.div>

      {/* Transparent content container directly over the image */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div className="flex flex-col items-center">
          {/* Eyebrow / Tagline */}
          <FadeIn inView={false} delay={0.08} yOffset={12}>
            <span className="inline-flex items-center rounded-full border border-white/60 bg-black/40 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm sm:px-4 sm:text-sm">
              {t.hero.badge}
            </span>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn inView={false} delay={0.18} yOffset={16}>
            <h1 className="mt-5 text-[28px] font-bold leading-tight tracking-tight text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.82)] sm:mt-6 sm:text-5xl lg:text-[54px] lg:leading-[1.14]">
              {t.hero.heading}
            </h1>
          </FadeIn>

          {/* Supporting Text */}
          <FadeIn inView={false} delay={0.28} yOffset={14}>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] sm:mt-5 sm:text-lg">
              {t.hero.description}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn
            inView={false}
            delay={0.36}
            yOffset={14}
            className="mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
          >
            <Link
              href="/#pricing"
              onClick={handlePricingScroll}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#24A176] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D8762] hover:shadow-xl sm:w-auto sm:text-base"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight
                className={
                  isRtl
                    ? "size-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-0.5"
                    : "size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                }
                aria-hidden="true"
              />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/85 bg-white/15 px-7 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#15694B] hover:shadow-xl sm:w-auto sm:text-base"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowRight
                className={
                  isRtl
                    ? "size-4 rotate-180 opacity-85 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:opacity-100"
                    : "size-4 opacity-85 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                }
                aria-hidden="true"
              />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

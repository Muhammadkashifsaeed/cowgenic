"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  HeartPulse,
  ShieldAlert,
  Target,
  Utensils,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { FadeIn, RevealDivider } from "@/components/ui";

function ModuleHeaderIcon({
  id,
  prefersReducedMotion,
}: {
  id: string;
  prefersReducedMotion: boolean;
}) {
  switch (id) {
    case "module-eating-time":
      return (
        <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-[#24A176] shadow-xs">
          <motion.span
            className="inline-flex"
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: [0, -6, 6, 0] }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Utensils className="size-5 stroke-[2.1]" aria-hidden="true" />
          </motion.span>
        </span>
      );

    case "module-rumination-time":
      return (
        <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-teal-600 shadow-xs">
          <motion.span
            className="inline-flex"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock className="size-5 stroke-[2.1]" aria-hidden="true" />
          </motion.span>
        </span>
      );

    case "module-body-activity":
      return (
        <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-sky-600 shadow-xs">
          <motion.span
            className="inline-flex"
            animate={prefersReducedMotion ? undefined : { y: [0, -1.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Activity className="size-5 stroke-[2.1]" aria-hidden="true" />
          </motion.span>
        </span>
      );

    case "module-heat-detection":
      return (
        <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-rose-600 shadow-xs">
          <motion.span
            className="inline-flex"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.14, 1, 1.08, 1] }
            }
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeartPulse className="size-5 stroke-[2.1]" aria-hidden="true" />
          </motion.span>
        </span>
      );

    case "module-exact-insemination-time":
      return (
        <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-amber-600 shadow-xs">
          <motion.span
            className="inline-flex"
            animate={prefersReducedMotion ? undefined : { scale: [1, 1.09, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target className="size-5 stroke-[2.1]" aria-hidden="true" />
          </motion.span>
        </span>
      );

    case "module-theft-alert":
    default:
      return (
        <span className="flex size-10 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-red-600 shadow-xs">
          <motion.span
            className="inline-flex"
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: [0, -7, 7, -4, 4, 0] }
            }
            transition={{
              duration: 0.75,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeInOut",
            }}
          >
            <ShieldAlert className="size-5 stroke-[2.1]" aria-hidden="true" />
          </motion.span>
        </span>
      );
  }
}

export function DeepInsightsSection() {
  const { isRtl, t } = useLanguage();
  const prefersReducedMotion = Boolean(useReducedMotion());

  const handleContactScroll = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("contact");
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#contact");
    }
  };

  return (
    <section
      id="deep-insights"
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full border-t border-slate-200/75 bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
            {t.deepInsights.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#24A176] sm:text-4xl lg:text-[42px]">
            {t.deepInsights.heading}
          </h2>
          <RevealDivider />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-lg">
            {t.deepInsights.description}
          </p>
        </FadeIn>

        {/* Alternating 6 AI Module Showcase Rows */}
        <div className="mt-12 space-y-14 sm:mt-20 sm:space-y-24 lg:space-y-28">
          {t.deepInsights.modules.map((mod) => {
            const isImageRight = mod.imagePosition === "right";

            return (
              <FadeIn key={mod.id} delay={0.04} yOffset={22}>
                <article id={mod.id} className="group scroll-mt-32">
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
                    {/* Module Content Column */}
                    <div
                      className={
                        isImageRight
                          ? "order-2 lg:order-1 lg:col-span-6 xl:col-span-5"
                          : "order-2 lg:order-2 lg:col-span-6 xl:col-span-5"
                      }
                    >
                      <div className="inline-flex items-center gap-3">
                        <ModuleHeaderIcon
                          id={mod.id}
                          prefersReducedMotion={prefersReducedMotion}
                        />
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-900 sm:text-sm">
                            {mod.badge}
                          </span>
                          <span
                            className="h-px w-8 bg-[#24A176]/50"
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl lg:text-[34px]">
                        {mod.title}
                      </h3>

                      <p className="mt-3.5 text-base leading-relaxed text-slate-600 sm:text-[17px]">
                        {mod.description}
                      </p>

                      {/* 2x2 Grid Bullet Points (2 per row on sm+) */}
                      <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                        {mod.points.map((point, idx) => (
                          <li
                            key={`${mod.id}-pt-${idx}`}
                            className="flex items-start gap-3"
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

                      <div className="mt-8">
                        <Link
                          href="/#contact"
                          onClick={handleContactScroll}
                          className="group/cta relative inline-flex items-center gap-2 pb-1 text-base font-bold tracking-tight text-[#24A176] transition-colors duration-200 hover:text-[#15694B]"
                        >
                          <span>{t.deepInsights.ctaLabel}</span>
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
                    </div>

                    {/* Enlarged Module Visual Column */}
                    <div
                      className={
                        isImageRight
                          ? "order-1 lg:order-2 lg:col-span-6 xl:col-span-7"
                          : "order-1 lg:order-1 lg:col-span-6 xl:col-span-7"
                      }
                    >
                      <div className="w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">
                        <Image
                          src={mod.image}
                          alt={mod.imageAlt}
                          width={720}
                          height={720}
                          quality={95}
                          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 46vw, 680px"
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

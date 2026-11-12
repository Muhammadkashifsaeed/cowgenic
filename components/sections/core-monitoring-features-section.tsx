"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Clock,
  HeartPulse,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  Target,
  Utensils,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import {
  FadeIn,
  RevealDivider,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";
import type { SiteDictionary } from "@/lib/i18n";

type FeatureId = SiteDictionary["coreFeatures"]["items"][number]["id"];

function FeatureAnimatedIcon({ id }: { id: FeatureId }) {
  const prefersReducedMotion = Boolean(useReducedMotion());

  switch (id) {
    case "eating-time":
      return (
        <div className="relative flex size-16 items-center justify-center rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/70 text-[#24A176] shadow-sm transition-transform duration-300 group-hover:scale-105">
          {/* Soft rotating orbital dashed halo */}
          <motion.svg
            viewBox="0 0 80 80"
            className="pointer-events-none absolute inset-0 size-full text-[#24A176]/30"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
            <circle
              cx="40"
              cy="40"
              r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </motion.svg>

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: [0, -7, 7, 0], y: [0, -1.5, 0] }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Utensils className="size-7 stroke-[2.1]" aria-hidden="true" />
          </motion.div>

          {/* Live intake pulse dot */}
          <motion.span
            className="absolute right-2 top-2 size-2 rounded-full bg-[#24A176]"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.4, 1], opacity: [0.9, 0.45, 0.9] }
            }
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>
      );

    case "rumination":
      return (
        <div className="relative flex size-16 items-center justify-center rounded-2xl border border-teal-200/90 bg-gradient-to-br from-teal-50 via-white to-teal-100/70 text-teal-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
          {/* Continuous chewing cycle ring */}
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center text-teal-500/35"
            animate={prefersReducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
            <RefreshCw className="size-12 stroke-[1.4]" />
          </motion.div>

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.08, 1] }
            }
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clock className="size-7 stroke-[2.1]" aria-hidden="true" />
          </motion.div>
        </div>
      );

    case "activity-level":
      return (
        <div className="relative flex size-16 flex-col items-center justify-center gap-1 rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50 via-white to-sky-100/70 text-sky-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -2, 0] }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Activity className="size-7 stroke-[2.2]" aria-hidden="true" />
          </motion.div>

          {/* Animated activity telemetry bars */}
          <div className="flex h-2.5 items-end gap-1" aria-hidden="true">
            {[0, 0.18, 0.36, 0.54].map((delay, idx) => (
              <motion.span
                key={idx}
                className="w-1 rounded-full bg-sky-500/80"
                initial={{ height: 4 }}
                animate={
                  prefersReducedMotion
                    ? { height: idx % 2 === 0 ? 8 : 5 }
                    : { height: [4, 9, 4] }
                }
                transition={{
                  duration: 1.1,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      );

    case "heat-detection":
      return (
        <div className="relative flex size-16 items-center justify-center rounded-2xl border border-rose-200/90 bg-gradient-to-br from-rose-50 via-white to-rose-100/70 text-rose-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
          {/* Expanding heat alert pulse rings */}
          {!prefersReducedMotion ? (
            <>
              <motion.span
                className="pointer-events-none absolute inset-1.5 rounded-xl border border-rose-400/60"
                animate={{ scale: [1, 1.32], opacity: [0.65, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                aria-hidden="true"
              />
              <motion.span
                className="pointer-events-none absolute inset-1.5 rounded-xl border border-rose-400/45"
                animate={{ scale: [1, 1.32], opacity: [0.55, 0] }}
                transition={{
                  duration: 2,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                aria-hidden="true"
              />
            </>
          ) : null}

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.14, 1, 1.09, 1] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HeartPulse className="size-7 stroke-[2.1]" aria-hidden="true" />
          </motion.div>
        </div>
      );

    case "exact-insemination-time":
      return (
        <div className="relative flex size-16 items-center justify-center rounded-2xl border border-amber-200/90 bg-gradient-to-br from-amber-50 via-white to-amber-100/70 text-amber-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [1, 1.09, 1], rotate: [0, 6, 0] }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target className="size-7 stroke-[2.1]" aria-hidden="true" />
          </motion.div>

          {/* Optimal window sparkle cue */}
          <motion.div
            className="pointer-events-none absolute right-1.5 top-1.5 text-amber-500"
            animate={
              prefersReducedMotion
                ? undefined
                : { scale: [0.85, 1.2, 0.85], rotate: [0, 18, -18, 0] }
            }
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <Sparkles className="size-3.5" />
          </motion.div>
        </div>
      );

    case "theft-alert":
      return (
        <div className="relative flex size-16 items-center justify-center rounded-2xl border border-red-200/90 bg-gradient-to-br from-red-50 via-white to-orange-100/70 text-red-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
          {/* Geofence beacon wave */}
          {!prefersReducedMotion ? (
            <motion.span
              className="pointer-events-none absolute inset-1.5 rounded-xl border border-red-400/60"
              animate={{ scale: [1, 1.34], opacity: [0.6, 0] }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeOut",
              }}
              aria-hidden="true"
            />
          ) : null}

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: [0, -8, 8, -5, 5, 0] }
            }
            transition={{
              duration: 0.75,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeInOut",
            }}
          >
            <ShieldAlert className="size-7 stroke-[2.1]" aria-hidden="true" />
          </motion.div>
        </div>
      );
  }
}

export function CoreMonitoringFeaturesSection() {
  const { isRtl, t } = useLanguage();

  return (
    <section
      id="core-features"
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full border-t border-slate-200/75 bg-slate-50/80 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header: At a Glance / Core Monitoring Features */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
            {t.coreFeatures.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#24A176] sm:text-4xl lg:text-[42px]">
            {t.coreFeatures.heading}
          </h2>
          <RevealDivider />
        </FadeIn>

        {/* 6 Animated Feature Cards in a single desktop row */}
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:mt-12 md:grid-cols-3 lg:grid-cols-6">
          {t.coreFeatures.items.map((item) => (
            <StaggerItem key={item.id}>
              <Link
                href={item.href}
                className="group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white px-3.5 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#24A176]/60 hover:shadow-xl hover:shadow-[#24A176]/10 focus-visible:ring-2 focus-visible:ring-[#24A176] xl:px-4 xl:py-7"
              >
                {/* Top animated accent line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
                />

                <div className="flex flex-col items-center">
                  <FeatureAnimatedIcon id={item.id} />

                  <h3 className="mt-4 text-[15px] font-bold leading-snug tracking-tight text-gray-950 transition-colors group-hover:text-[#1B7E5C]">
                    {item.title}
                  </h3>
                </div>

                <span className="mt-5 inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#24A176]/30 bg-emerald-50/75 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1B7E5C] transition-all duration-200 group-hover:border-[#24A176] group-hover:bg-[#24A176] group-hover:text-white">
                  <span>{t.coreFeatures.viewDetails}</span>
                  <ArrowRight
                    className={
                      isRtl
                        ? "size-3 rotate-180 transition-transform duration-200 group-hover:-translate-x-0.5"
                        : "size-3 transition-transform duration-200 group-hover:translate-x-0.5"
                    }
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}


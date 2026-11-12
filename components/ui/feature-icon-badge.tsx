"use client";

import {
  Activity,
  Clock,
  HeartPulse,
  ShieldAlert,
  Target,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import type { FeaturePageSlug } from "@/lib/i18n";
import { cn } from "@/utils/cn";

const FEATURE_VISUALS: Record<
  FeaturePageSlug,
  { Icon: LucideIcon; className: string }
> = {
  "eating-time-monitoring": {
    Icon: Utensils,
    className: "border-emerald-200/80 bg-emerald-50 text-[#24A176]",
  },
  "rumination-time-monitoring": {
    Icon: Clock,
    className: "border-teal-200/80 bg-teal-50 text-teal-600",
  },
  "activity-level-monitoring": {
    Icon: Activity,
    className: "border-sky-200/80 bg-sky-50 text-sky-600",
  },
  "heat-detection-for-insemination": {
    Icon: HeartPulse,
    className: "border-rose-200/80 bg-rose-50 text-rose-600",
  },
  "exact-insemination-time": {
    Icon: Target,
    className: "border-amber-200/80 bg-amber-50 text-amber-600",
  },
  "theft-and-boundary-alert": {
    Icon: ShieldAlert,
    className: "border-red-200/80 bg-red-50 text-red-600",
  },
};

export function FeatureIconBadge({
  slug,
  size = "md",
  className,
}: {
  slug: FeaturePageSlug;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { Icon, className: toneClass } = FEATURE_VISUALS[slug];

  const boxSizeClass =
    size === "sm"
      ? "size-7 rounded-lg"
      : size === "lg"
        ? "size-14 rounded-2xl shadow-xs"
        : "size-9 rounded-xl";

  const iconSizeClass =
    size === "sm" ? "size-3.5" : size === "lg" ? "size-7" : "size-4";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center border",
        toneClass,
        boxSizeClass,
        className,
      )}
    >
      <Icon className={cn(iconSizeClass, "stroke-[2.1]")} aria-hidden="true" />
    </span>
  );
}


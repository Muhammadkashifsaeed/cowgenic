"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export function SiteIntroOverlay() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "done">("visible");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const holdMs = prefersReducedMotion ? 260 : 1020;
    const exitMs = prefersReducedMotion ? 180 : 580;

    let doneTimer: ReturnType<typeof setTimeout> | undefined;
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
      doneTimer = setTimeout(() => {
        setPhase("done");
      }, exitMs);
    }, holdMs);

    return () => {
      clearTimeout(exitTimer);
      if (doneTimer) {
        clearTimeout(doneTimer);
      }
    };
  }, []);

  if (phase === "done") {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden",
        phase === "exiting" ? "pointer-events-none" : "pointer-events-auto",
      )}
    >
      {/* Top Curtain Panel */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-[calc(50%+1px)] bg-white transition-transform duration-[560ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-opacity motion-reduce:duration-200",
          phase === "exiting"
            ? "-translate-y-full motion-reduce:translate-y-0 motion-reduce:opacity-0"
            : "translate-y-0 opacity-100",
        )}
      />

      {/* Bottom Curtain Panel */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 h-[calc(50%+1px)] bg-white transition-transform duration-[560ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-opacity motion-reduce:duration-200",
          phase === "exiting"
            ? "translate-y-full motion-reduce:translate-y-0 motion-reduce:opacity-0"
            : "translate-y-0 opacity-100",
        )}
      />

      {/* Center Logo & Animated Divider */}
      <div
        className={cn(
          "relative z-10 flex flex-col items-center px-6 text-center transition-all duration-300 ease-out",
          phase === "exiting" ? "scale-95 opacity-0" : "scale-100 opacity-100",
        )}
      >
        {/* Subtle ambient emerald halo */}
        <span
          aria-hidden="true"
          className="splash-glow pointer-events-none absolute -inset-x-10 -inset-y-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(36,161,118,0.12),transparent_68%)]"
        />

        {/* Compact Brand Logo */}
        <div className="splash-wordmark relative">
          <Image
            src="/images/LOGO1.webp"
            alt="Cowgenic"
            width={1200}
            height={235}
            priority
            quality={95}
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
            className="h-8 w-auto object-contain sm:h-10 lg:h-12"
          />
        </div>

        {/* Animated Emerald Loading Divider with Luminous Shimmer */}
        <div className="relative mt-4 h-1 w-28 overflow-hidden rounded-full bg-emerald-100/95 sm:w-36">
          <div className="splash-divider relative h-full w-full origin-center overflow-hidden rounded-full bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176]">
            <span className="splash-divider-shimmer absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/75 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

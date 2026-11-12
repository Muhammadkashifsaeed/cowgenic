"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/providers/language-provider";
import { siteConfig } from "@/lib/site";

export function FloatingWhatsappButton() {
  const { isRtl, t } = useLanguage();
  const prefersReducedMotion = Boolean(useReducedMotion());
  const label = t.footer.whatsappCta;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.75, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.45,
        delay: prefersReducedMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="pointer-events-none fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
    >
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        style={{ backgroundColor: "#25D366" }}
        className="group pointer-events-auto relative flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white ring-2 ring-white/90 shadow-[0_10px_28px_-6px_rgba(37,211,102,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-[#1EBE5D] hover:shadow-[0_14px_34px_-6px_rgba(37,211,102,0.8)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 active:scale-95 sm:size-14"
      >
        {/* Subtle pulsing ring */}
        {!prefersReducedMotion ? (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#25D366]"
            animate={{ scale: [1, 1.38], opacity: [0.55, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              repeatDelay: 1.6,
              ease: "easeOut",
            }}
          />
        ) : null}

        <FaWhatsapp className="size-7 shrink-0 sm:size-8" aria-hidden="true" />

        {/* Subtle desktop hover tooltip — non-blocking at rest */}
        <span
          dir={isRtl ? "rtl" : "ltr"}
          aria-hidden="true"
          className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-gray-900/90 px-3.5 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md backdrop-blur-xs transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
        >
          {label}
        </span>
      </a>
    </motion.div>
  );
}

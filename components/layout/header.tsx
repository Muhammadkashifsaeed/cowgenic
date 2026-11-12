"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { FeatureIconBadge } from "@/components/ui/feature-icon-badge";
import { cn } from "@/utils/cn";

export function Header() {
  const { isRtl, t, toggleLocale } = useLanguage();
  const pathname = usePathname();
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isFeaturesSectionActive = pathname.startsWith("/features");

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeaturesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFeaturesOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const updateScrollState = () => {
      const y = window.scrollY;
      setIsScrolled((prev) => {
        if (y > 28) return true;
        if (y < 10) return false;
        return prev;
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const closeAllMenus = () => {
    setFeaturesOpen(false);
    setMobileMenuOpen(false);
    setMobileFeaturesOpen(false);
  };

  const handleSectionNav = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    sectionId: "pricing" | "contact",
  ) => {
    closeAllMenus();
    if (pathname === "/") {
      const target = document.getElementById(sectionId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/#${sectionId}`);
      }
    }
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="pointer-events-none sticky top-0 z-50 w-full"
    >
      {/* Full-width Top Announcement Strip above Header (#FF7A00) — stays full width */}
      <div
        style={{ backgroundColor: "#FF7A00" }}
        className="pointer-events-auto w-full border-b border-black/10 bg-[#FF7A00] text-white"
      >
        <div className="mx-auto flex min-h-9 max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-1.5 text-center text-xs font-semibold tracking-wide sm:text-[13px]">
          <span className="inline-flex items-center gap-2">
            <span
              className="size-2 shrink-0 animate-pulse rounded-full bg-white shadow-2xs"
              aria-hidden="true"
            />
            <span className="font-bold">{t.header.announcementText}</span>
          </span>
          <span
            className="hidden h-3.5 w-px bg-white/45 sm:inline-block"
            aria-hidden="true"
          />
          <span className="hidden text-white/95 sm:inline">
            {t.header.announcementHighlight}
          </span>
        </div>
      </div>

      {/* Header Navbar: Full-width at top, smoothly closes inward from left & right on scroll */}
      <header
        className={cn(
          "pointer-events-none w-full transition-[padding] duration-300 ease-out",
          isScrolled ? "px-3 pt-2.5 sm:px-6 sm:pt-3 lg:px-12" : "px-0 pt-0",
        )}
      >
        <div
          className={cn(
            "pointer-events-auto mx-auto w-full border text-gray-900 transition-all duration-300 ease-out",
            isScrolled
              ? "max-w-[1040px] rounded-full border-slate-200/90 bg-white/95 shadow-[0_14px_38px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md"
              : "max-w-[1920px] rounded-none border-transparent border-b-gray-200/90 bg-white shadow-none",
          )}
        >
          <div
            className={cn(
              "mx-auto flex items-center justify-between transition-all duration-300 ease-out",
              isScrolled
                ? "h-[62px] px-4 sm:px-6"
                : "h-20 max-w-7xl px-4 sm:px-6 lg:px-8",
            )}
          >
            {/* Left: Exact Cowgenic header logo (LOGO1.webp) */}
            <Link
              href="/"
              onClick={closeAllMenus}
              aria-label="Cowgenic Home"
              className="inline-flex shrink-0 items-center focus-visible:rounded-md"
            >
              <Image
                src="/images/LOGO1.webp"
                alt="Cowgenic"
                width={1200}
                height={235}
                priority
                className={cn(
                  "w-auto transition-all duration-300",
                  isScrolled ? "h-7 sm:h-8" : "h-8 sm:h-9 lg:h-10",
                )}
              />
            </Link>

            {/* Right: Desktop navigation links & action buttons */}
            <nav
              aria-label="Main navigation"
              className={cn(
                "hidden items-center md:flex transition-all duration-300",
                isScrolled ? "gap-5 lg:gap-6" : "gap-7 lg:gap-8",
              )}
            >
              {/* Features dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => setFeaturesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setFeaturesOpen((prev) => !prev)}
                  aria-expanded={featuresOpen}
                  aria-haspopup="menu"
                  className={cn(
                    "inline-flex cursor-pointer items-center gap-1.5 py-2 text-[15px] font-medium transition-colors hover:text-[#24A176]",
                    isFeaturesSectionActive
                      ? "text-[#24A176]"
                      : "text-gray-800",
                  )}
                >
                  <span>{t.header.features}</span>
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-150",
                      featuresOpen || isFeaturesSectionActive
                        ? "text-[#24A176]"
                        : "text-gray-600",
                      featuresOpen && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>

                {featuresOpen ? (
                  <div
                    role="menu"
                    className={cn(
                      "absolute top-full z-50 w-[23.5rem] pt-2",
                      isRtl ? "right-0" : "left-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-black/5">
                      <div className="space-y-0.5 p-2">
                        {t.header.featureItems.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.id}
                              href={item.href}
                              role="menuitem"
                              onClick={closeAllMenus}
                              className={cn(
                                "group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors",
                                isActive
                                  ? "bg-emerald-50/90"
                                  : "hover:bg-emerald-50/70",
                              )}
                            >
                              <FeatureIconBadge
                                slug={item.id}
                                size="md"
                                className="mt-0.5 transition-transform duration-150 group-hover:scale-105"
                              />
                              <span className="min-w-0 flex-1">
                                <span
                                  className={cn(
                                    "block text-sm font-semibold transition-colors",
                                    isActive
                                      ? "text-[#24A176]"
                                      : "text-gray-900 group-hover:text-[#24A176]",
                                  )}
                                >
                                  {item.label}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                                  {item.summary}
                                </span>
                              </span>
                              <ChevronRight
                                className={cn(
                                  "mt-1 size-4 shrink-0 text-gray-400 transition-all duration-150 rtl:rotate-180",
                                  isActive
                                    ? "text-[#24A176]"
                                    : "opacity-0 group-hover:translate-x-0.5 group-hover:text-[#24A176] group-hover:opacity-100 rtl:group-hover:-translate-x-0.5",
                                )}
                                aria-hidden="true"
                              />
                            </Link>
                          );
                        })}
                      </div>

                      <div className="border-t border-gray-100 bg-slate-50/70 px-3 py-2">
                        <Link
                          href="/features"
                          role="menuitem"
                          onClick={closeAllMenus}
                          className="flex items-center justify-between rounded-lg px-2 py-1 text-xs font-semibold text-[#24A176] transition-colors hover:bg-emerald-50/90"
                        >
                          <span>{t.header.allFeaturesLabel}</span>
                          <ChevronRight
                            className="size-3.5 rtl:rotate-180"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <Link
                href="/#pricing"
                onClick={(event) => handleSectionNav(event, "pricing")}
                className="text-[15px] font-medium text-gray-800 transition-colors hover:text-[#24A176]"
              >
                {t.header.pricing}
              </Link>

              <Link
                href="/#contact"
                onClick={(event) => handleSectionNav(event, "contact")}
                className="text-[15px] font-medium text-gray-800 transition-colors hover:text-[#24A176]"
              >
                {t.header.contact}
              </Link>

              <div className="flex items-center gap-2.5">
                {/* Green rounded Order Now button */}
                <Link
                  href="/order"
                  onClick={closeAllMenus}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-[#24A176] text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-[#1D8762]",
                    isScrolled ? "h-9 px-4" : "h-10 px-5",
                  )}
                >
                  {t.header.orderNow}
                </Link>

                {/* Rounded language toggle button matching Order Now background */}
                <button
                  type="button"
                  onClick={toggleLocale}
                  aria-label={t.header.languageAriaLabel}
                  className={cn(
                    "inline-flex cursor-pointer items-center justify-center rounded-full bg-[#24A176] text-sm font-semibold text-white shadow-xs transition-all duration-300 hover:bg-[#1D8762]",
                    isScrolled ? "h-9 px-4" : "h-10 px-5",
                  )}
                >
                  {t.header.languageToggle}
                </button>
              </div>
            </nav>

            {/* Mobile / Tablet right controls */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleLocale}
                aria-label={t.header.languageAriaLabel}
                className="inline-flex h-9 cursor-pointer items-center justify-center rounded-full bg-[#24A176] px-3.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#1D8762]"
              >
                {t.header.languageToggle}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-header-nav"
                aria-label={
                  mobileMenuOpen ? t.header.closeMenu : t.header.openMenu
                }
                className={cn(
                  "inline-flex size-9 cursor-pointer items-center justify-center border border-gray-200 bg-white text-gray-800 transition-colors hover:bg-gray-50",
                  isScrolled ? "rounded-full" : "rounded-lg",
                )}
              >
                {mobileMenuOpen ? (
                  <X className="size-5" aria-hidden="true" />
                ) : (
                  <Menu className="size-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet collapsible drawer */}
        {mobileMenuOpen ? (
          <div
            id="mobile-header-nav"
            className={cn(
              "pointer-events-auto mx-auto max-h-[calc(100dvh-7.5rem)] w-full overflow-y-auto overscroll-contain bg-white px-4 pb-5 pt-3 md:hidden",
              isScrolled
                ? "mt-2 max-w-[1040px] rounded-2xl border border-gray-200/90 shadow-xl"
                : "border-t border-b border-gray-200 shadow-md",
            )}
          >
            <div className="flex flex-col space-y-1">
              <button
                type="button"
                onClick={() => setMobileFeaturesOpen((prev) => !prev)}
                aria-expanded={mobileFeaturesOpen}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-start text-[15px] font-medium hover:bg-gray-50",
                  isFeaturesSectionActive ? "text-[#24A176]" : "text-gray-800",
                )}
              >
                <span>{t.header.features}</span>
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-150",
                    isFeaturesSectionActive
                      ? "text-[#24A176]"
                      : "text-gray-600",
                    mobileFeaturesOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>

              {mobileFeaturesOpen ? (
                <div className="space-y-1 border-s-2 border-[#3BB88E]/50 ps-3 ms-3">
                  {t.header.featureItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={closeAllMenus}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-emerald-50/90 font-semibold text-[#24A176]"
                            : "font-medium text-gray-700 hover:bg-emerald-50/70 hover:text-gray-950",
                        )}
                      >
                        <FeatureIconBadge slug={item.id} size="sm" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                  <Link
                    href="/features"
                    onClick={closeAllMenus}
                    className="flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-[#24A176] hover:bg-emerald-50/70"
                  >
                    <span>{t.header.allFeaturesLabel}</span>
                    <ChevronRight
                      className="size-3.5 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              ) : null}

              <Link
                href="/#pricing"
                onClick={(event) => handleSectionNav(event, "pricing")}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#24A176]"
              >
                {t.header.pricing}
              </Link>

              <Link
                href="/#contact"
                onClick={(event) => handleSectionNav(event, "contact")}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-gray-800 hover:bg-gray-50 hover:text-[#24A176]"
              >
                {t.header.contact}
              </Link>

              <div className="pt-2">
                <Link
                  href="/order"
                  onClick={closeAllMenus}
                  className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#24A176] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1D8762]"
                >
                  {t.header.orderNow}
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </div>
  );
}

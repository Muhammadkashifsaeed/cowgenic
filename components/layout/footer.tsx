"use client";

import type { MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Truck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/providers/language-provider";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const { isRtl, t } = useLanguage();
  const pathname = usePathname();

  const handleHashNav = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1 || pathname !== "/") {
      return;
    }
    const targetId = href.slice(hashIndex + 1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${targetId}`);
    }
  };

  return (
    <footer
      dir={isRtl ? "rtl" : "ltr"}
      className="bg-[#101A2C] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 sm:pb-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* Column 1: Brand Section */}
          <div className="md:col-span-5">
            <Link
              href="/"
              aria-label="Cowgenic Home"
              className="inline-flex items-center focus-visible:rounded-md"
            >
              <Image
                src="/images/LOGO2.webp"
                alt="Cowgenic"
                width={1200}
                height={235}
                className="h-9 w-auto brightness-0 invert sm:h-10 lg:h-11"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              {t.footer.description}
            </p>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center justify-center gap-2.5 rounded-full bg-[#1EB85B] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#199E4E]"
            >
              <FaWhatsapp className="size-5 shrink-0" aria-hidden="true" />
              <span>{t.footer.whatsappCta}</span>
            </a>
          </div>

          {/* Column 2: Features */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t.footer.featuresHeading}
            </h2>
            <ul className="mt-4 space-y-3">
              {t.footer.featureLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={(event) => handleHashNav(event, item.href)}
                    className="text-sm text-slate-200 transition-colors hover:text-[#3BB88E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {t.footer.companyHeading}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/#pricing"
                  onClick={(event) => handleHashNav(event, "/#pricing")}
                  className="text-sm text-slate-200 transition-colors hover:text-[#3BB88E]"
                >
                  {t.footer.pricingPlans}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  onClick={(event) => handleHashNav(event, "/#contact")}
                  className="text-sm text-slate-200 transition-colors hover:text-[#3BB88E]"
                >
                  {t.footer.contactUs}
                </Link>
              </li>
            </ul>

            <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin
                  className="size-4 shrink-0 text-[#3BB88E]"
                  aria-hidden="true"
                />
                <span>{t.footer.headOffice}</span>
              </p>
              <p className="flex items-center gap-2">
                <Truck
                  className="size-4 shrink-0 text-[#3BB88E]"
                  aria-hidden="true"
                />
                <span>{t.footer.nationwideDelivery}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:pr-20">
          <p>{t.footer.copyright}</p>
          <Link
            href="/privacy-policy"
            className="font-medium uppercase tracking-wider text-slate-300 transition-colors hover:text-white"
          >
            {t.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
}


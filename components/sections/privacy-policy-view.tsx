"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Cpu,
  Database,
  EyeOff,
  FileText,
  Globe,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Trash2,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import {
  FadeIn,
  RevealDivider,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";
import {
  privacyPolicyData,
  type PrivacySectionIcon,
} from "@/lib/privacy-policy-data";

function SectionBadgeIcon({ icon }: { icon: PrivacySectionIcon }) {
  const iconClass = "size-5 stroke-[2]";

  switch (icon) {
    case "intro":
      return <FileText className={iconClass} aria-hidden="true" />;
    case "collection":
      return <Database className={iconClass} aria-hidden="true" />;
    case "usage":
      return <SlidersHorizontal className={iconClass} aria-hidden="true" />;
    case "security":
      return <ShieldCheck className={iconClass} aria-hidden="true" />;
    case "disclosure":
      return <EyeOff className={iconClass} aria-hidden="true" />;
    case "hardware":
      return <Cpu className={iconClass} aria-hidden="true" />;
    case "permissions":
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case "deletion":
      return <Trash2 className={iconClass} aria-hidden="true" />;
    case "rights":
      return <UserCheck className={iconClass} aria-hidden="true" />;
    case "contact":
      return <Mail className={iconClass} aria-hidden="true" />;
    case "changes":
      return <RefreshCw className={iconClass} aria-hidden="true" />;
  }
}

export function PrivacyPolicyView() {
  const { isRtl, locale } = useLanguage();
  const doc = privacyPolicyData[locale];

  return (
    <main dir={isRtl ? "rtl" : "ltr"} className="flex w-full flex-col bg-white">
      {/* Header Band */}
      <section className="w-full border-b border-slate-200/75 bg-gradient-to-b from-slate-50/80 via-white to-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn inView={false}>
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm"
            >
              <Link href="/" className="transition-colors hover:text-[#24A176]">
                {doc.breadcrumbHome}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-[#24A176]">
                {doc.breadcrumbCurrent}
              </span>
            </nav>

            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
                {doc.eyebrow}
              </span>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#24A176] sm:text-4xl lg:text-[44px]">
                {doc.title}
              </h1>

              {/* Accent Divider */}
              <RevealDivider />

              <div className="mt-5 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/75 px-4 py-1.5 text-xs font-bold text-[#1B7E5C] sm:text-sm">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  <span>{doc.lastUpdated}</span>
                </span>
              </div>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {doc.subtitle}
              </p>
            </div>

            {/* Quick Section Jump Pills */}
            <div className="mt-10 rounded-3xl border border-slate-200/90 bg-slate-50/75 p-5 sm:p-6">
              <p className="mb-3.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                {doc.quickNavLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {doc.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-xs font-semibold text-gray-800 shadow-2xs transition-colors hover:border-[#24A176]/55 hover:bg-emerald-50/60 hover:text-[#1B7E5C]"
                  >
                    <span className="font-mono text-[11px] font-bold text-[#24A176]">
                      {section.number}
                    </span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="w-full bg-slate-50/45 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-6 sm:space-y-8">
            {doc.sections.map((section) => (
              <StaggerItem key={section.id}>
                <article
                  id={section.id}
                  className="group relative scroll-mt-36 overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:border-[#24A176]/45 hover:shadow-md sm:p-8"
                >
                  {/* Top hover highlight */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
                  />

                  {/* Section Header */}
                  <div className="flex flex-wrap items-center gap-3.5 border-b border-slate-100 pb-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200/90 bg-emerald-50/80 text-[#24A176]">
                      <SectionBadgeIcon icon={section.icon} />
                    </span>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold tracking-wider text-slate-400">
                        {section.number}
                      </span>
                      <h2 className="text-xl font-bold tracking-tight text-[#24A176] sm:text-2xl">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mt-5 space-y-4">
                    {section.paragraphs?.map((para, idx) => (
                      <p
                        key={`${section.id}-p-${idx}`}
                        className="text-sm leading-relaxed text-slate-600 sm:text-base"
                      >
                        {para}
                      </p>
                    ))}

                    {section.leadText ? (
                      <p className="text-sm font-medium leading-relaxed text-gray-800 sm:text-base">
                        {section.leadText}
                      </p>
                    ) : null}

                    {/* Structured Key-Value Cards / Rows */}
                    {section.labeledItems ? (
                      <ul className="grid grid-cols-1 gap-3.5 pt-1 sm:grid-cols-2">
                        {section.labeledItems.map((item) => (
                          <li
                            key={item.label}
                            className="rounded-2xl border border-slate-200/80 bg-slate-50/75 p-4 transition-colors hover:border-[#24A176]/35 hover:bg-emerald-50/25"
                          >
                            <p className="text-sm font-bold text-gray-950">
                              {item.label}
                            </p>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                              {item.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {/* Checkmark List */}
                    {section.bullets ? (
                      <ul className="space-y-3 pt-1">
                        {section.bullets.map((bullet, idx) => (
                          <li
                            key={`${section.id}-b-${idx}`}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/25">
                              <CheckCircle2
                                className="size-3.5 stroke-[2.4]"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {/* Data Deletion Highlight Block */}
                    {section.deletionHighlight ? (
                      <div className="mt-2 rounded-2xl border border-emerald-200/90 bg-emerald-50/60 p-5">
                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-gray-900">
                          <span>{section.deletionHighlight.emailLabel}</span>
                          <a
                            href={`mailto:${section.deletionHighlight.email}?subject=Data%20Deletion%20Request`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-sm font-bold text-[#24A176] ring-1 ring-[#24A176]/30 transition-colors hover:bg-[#24A176] hover:text-white"
                          >
                            <Mail className="size-3.5" aria-hidden="true" />
                            <span dir="ltr">
                              {section.deletionHighlight.email}
                            </span>
                          </a>
                        </div>

                        <ul className="mt-4 space-y-2.5">
                          {section.deletionHighlight.steps.map((step, idx) => (
                            <li
                              key={`del-step-${idx}`}
                              className="flex items-start gap-2.5 text-sm text-gray-800"
                            >
                              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-[#24A176] ring-1 ring-[#24A176]/25">
                                <CheckCircle2
                                  className="size-3.5 stroke-[2.4]"
                                  aria-hidden="true"
                                />
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>

                        <p className="mt-4 border-t border-emerald-200/80 pt-3.5 text-sm font-semibold text-[#1B7E5C]">
                          {section.deletionHighlight.timelineNote}
                        </p>
                      </div>
                    ) : null}

                    {/* Contact Details Grid */}
                    {section.contactDetails ? (
                      <div className="mt-2 rounded-2xl border border-slate-200/85 bg-slate-50/80 p-5">
                        <p className="text-base font-bold text-gray-950">
                          {section.contactDetails.company}
                        </p>

                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="flex items-start gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#24A176]">
                              <MapPin className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {section.contactDetails.addressLabel}
                              </p>
                              <p className="mt-0.5 text-sm font-medium text-gray-900">
                                {section.contactDetails.address}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#24A176]">
                              <Phone className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {section.contactDetails.phoneLabel}
                              </p>
                              <a
                                href={section.contactDetails.phoneHref}
                                dir="ltr"
                                className="mt-0.5 inline-block text-sm font-semibold text-gray-900 transition-colors hover:text-[#24A176]"
                              >
                                {section.contactDetails.phoneDisplay}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#24A176]">
                              <Mail className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {section.contactDetails.emailLabel}
                              </p>
                              <a
                                href={`mailto:${section.contactDetails.email}`}
                                dir="ltr"
                                className="mt-0.5 inline-block break-all text-sm font-semibold text-[#24A176] hover:underline"
                              >
                                {section.contactDetails.email}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#24A176]">
                              <Mail className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {section.contactDetails.supportEmailLabel}
                              </p>
                              <a
                                href={`mailto:${section.contactDetails.supportEmail}`}
                                dir="ltr"
                                className="mt-0.5 inline-block break-all text-sm font-semibold text-[#24A176] hover:underline"
                              >
                                {section.contactDetails.supportEmail}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-3 sm:col-span-2">
                            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#24A176]">
                              <Globe className="size-4" aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                {section.contactDetails.websiteLabel}
                              </p>
                              <a
                                href={section.contactDetails.websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                className="mt-0.5 inline-block text-sm font-semibold text-[#24A176] hover:underline"
                              >
                                {section.contactDetails.websiteDisplay}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}

                    {section.closingNote ? (
                      <p className="border-t border-slate-100 pt-3 text-sm font-medium leading-relaxed text-slate-600">
                        {section.closingNote}
                      </p>
                    ) : null}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom Help Banner */}
          <FadeIn delay={0.05} className="mt-10">
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-[#24A176]/25 bg-gradient-to-br from-emerald-50/60 via-white to-slate-50/80 p-7 shadow-xs sm:flex-row sm:items-center sm:p-9">
              <div className="max-w-xl">
                <h2 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                  {doc.footerBanner.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {doc.footerBanner.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#24A176] px-6 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#1D8762]"
                >
                  <span>{doc.footerBanner.contactCta}</span>
                  <ArrowRight
                    className={isRtl ? "size-4 rotate-180" : "size-4"}
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-gray-900 transition-colors hover:border-[#24A176] hover:text-[#24A176]"
                >
                  {doc.footerBanner.homeCta}
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}


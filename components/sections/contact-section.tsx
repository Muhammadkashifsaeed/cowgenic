"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/providers/language-provider";
import { FadeIn, Input, RevealDivider, Textarea } from "@/components/ui";
import { apiClient, normalizeApiError } from "@/lib/api-client";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import type { ApiResponse } from "@/types";

interface ContactSubmissionResult {
  name: string;
  email: string;
  receivedAt: string;
}

export function ContactSection() {
  const { isRtl, t } = useLanguage();
  const contact = t.contactSection;

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    setSubmitSuccess(false);
    try {
      await apiClient.post<ApiResponse<ContactSubmissionResult>>(
        "/contact",
        values,
      );
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(normalizeApiError(error).message);
    }
  }

  return (
    <section
      id="contact"
      dir={isRtl ? "rtl" : "ltr"}
      className="w-full scroll-mt-32 border-t border-slate-200/75 bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#24A176]/25 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1B7E5C] shadow-2xs sm:text-sm">
            {contact.eyebrow}
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#24A176] sm:text-4xl lg:text-[42px]">
            {contact.heading}
          </h2>
          <RevealDivider />
          <p className="mx-auto mt-5 text-sm leading-relaxed text-slate-600 sm:text-lg">
            {contact.description}
          </p>
        </FadeIn>

        {/* Two-Column Contact Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Direct Contact Info */}
          <FadeIn delay={0.05} className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/75 p-6 shadow-xs sm:p-8">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
                  {contact.infoTitle}
                </h3>

                <ul className="mt-6 space-y-5">
                  {/* Phone */}
                  <li className="flex items-start gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-[#24A176] shadow-2xs">
                      <Phone className="size-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {contact.phoneLabel}
                      </p>
                      <a
                        href={contact.phoneHref}
                        dir="ltr"
                        className="mt-0.5 inline-block text-sm font-semibold text-gray-900 transition-colors hover:text-[#24A176] sm:text-[15px]"
                      >
                        {contact.phoneDisplay}
                      </a>
                    </div>
                  </li>

                  {/* WhatsApp */}
                  <li className="flex items-start gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-[#1EB85B] shadow-2xs">
                      <FaWhatsapp className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {contact.whatsappLabel}
                      </p>
                      <a
                        href={contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="mt-0.5 inline-block text-sm font-semibold text-gray-900 transition-colors hover:text-[#24A176] sm:text-[15px]"
                      >
                        {contact.whatsappDisplay}
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-[#24A176] shadow-2xs">
                      <Mail className="size-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {contact.emailLabel}
                      </p>
                      <a
                        href={`mailto:${contact.emailAddress}`}
                        className="mt-0.5 inline-block break-all text-sm font-semibold text-gray-900 transition-colors hover:text-[#24A176] sm:text-[15px]"
                      >
                        {contact.emailAddress}
                      </a>
                    </div>
                  </li>

                  {/* Lahore Address */}
                  <li className="flex items-start gap-3.5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-[#24A176] shadow-2xs">
                      <MapPin className="size-4.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {contact.addressLabel}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold leading-relaxed text-gray-900 sm:text-[15px]">
                        {contact.address}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 24-Hour Response Guarantee Note */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/75 px-4 py-3.5">
                <Clock
                  className="size-5 shrink-0 text-[#24A176]"
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-[#1B7E5C]">
                  {contact.responseNote}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Contact Form */}
          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="home-contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-800"
                    >
                      {contact.form.nameLabel}
                    </label>
                    <Input
                      id="home-contact-name"
                      placeholder={contact.form.namePlaceholder}
                      hasError={Boolean(errors.name)}
                      className="h-11 rounded-xl border-slate-200 bg-slate-50/70 text-gray-950 placeholder:text-slate-400 focus-visible:border-[#24A176] focus-visible:bg-white focus-visible:ring-[#24A176]"
                      {...register("name")}
                    />
                    {errors.name ? (
                      <p className="text-xs font-medium text-red-600">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="home-contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-800"
                    >
                      {contact.form.phoneLabel}
                    </label>
                    <Input
                      id="home-contact-phone"
                      type="tel"
                      dir="ltr"
                      placeholder={contact.form.phonePlaceholder}
                      hasError={Boolean(errors.phone)}
                      className="h-11 rounded-xl border-slate-200 bg-slate-50/70 text-gray-950 placeholder:text-slate-400 focus-visible:border-[#24A176] focus-visible:bg-white focus-visible:ring-[#24A176]"
                      {...register("phone")}
                    />
                    {errors.phone ? (
                      <p className="text-xs font-medium text-red-600">
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="home-contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-800"
                  >
                    {contact.form.emailLabel}
                  </label>
                  <Input
                    id="home-contact-email"
                    type="email"
                    dir="ltr"
                    placeholder={contact.form.emailPlaceholder}
                    hasError={Boolean(errors.email)}
                    className="h-11 rounded-xl border-slate-200 bg-slate-50/70 text-gray-950 placeholder:text-slate-400 focus-visible:border-[#24A176] focus-visible:bg-white focus-visible:ring-[#24A176]"
                    {...register("email")}
                  />
                  {errors.email ? (
                    <p className="text-xs font-medium text-red-600">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="home-contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-800"
                  >
                    {contact.form.messageLabel}
                  </label>
                  <Textarea
                    id="home-contact-message"
                    rows={4}
                    placeholder={contact.form.messagePlaceholder}
                    hasError={Boolean(errors.message)}
                    className="min-h-32 rounded-xl border-slate-200 bg-slate-50/70 text-gray-950 placeholder:text-slate-400 focus-visible:border-[#24A176] focus-visible:bg-white focus-visible:ring-[#24A176]"
                    {...register("message")}
                  />
                  {errors.message ? (
                    <p className="text-xs font-medium text-red-600">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                {submitError ? (
                  <p role="alert" className="text-sm font-medium text-red-600">
                    {submitError}
                  </p>
                ) : null}

                {submitSuccess ? (
                  <div
                    role="status"
                    className="flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-[#1B7E5C]"
                  >
                    <CheckCircle2
                      className="size-5 shrink-0 text-[#24A176]"
                      aria-hidden="true"
                    />
                    <span>{contact.form.successMessage}</span>
                  </div>
                ) : null}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#24A176] px-8 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D8762] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? (
                      <Loader2
                        className="size-4 animate-spin"
                        aria-hidden="true"
                      />
                    ) : (
                      <Send className="size-4" aria-hidden="true" />
                    )}
                    <span>
                      {isSubmitting
                        ? contact.form.submittingLabel
                        : contact.form.submitLabel}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}


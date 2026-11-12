import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FadeIn,
  RevealDivider,
} from "@/components/ui";
import { buildPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Order Smart Cow Collars",
  description:
    "Order Cowgenic smart cow neck collars and base stations for your dairy farm with consultation and nationwide delivery from Lahore, Pakistan.",
  canonical: "/order",
});

export default function OrderPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <FadeIn inView={false} className="space-y-3">
        <Badge variant="accent">Order Smart Collars</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-[#24A176] sm:text-4xl">
          Order Cowgenic for Your Dairy Farm
        </h1>
        <RevealDivider className="h-1 w-16 rounded-full bg-[#24A176]" />
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
          Start with a consultation for your herd size and receive nationwide
          delivery from our Lahore headquarters.
        </p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <Card className="mt-8 overflow-hidden border-slate-200/90 shadow-sm">
          <div className="h-1 w-full bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176]" />
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-950 sm:text-xl">
              Fast Order &amp; Farm Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-full bg-[#1EB85B] px-6 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#199E4E] hover:shadow-md sm:w-auto"
            >
              <FaWhatsapp className="size-5 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-gray-900 transition-colors hover:border-[#24A176] hover:text-[#24A176] sm:w-auto"
            >
              <span>Submit Inquiry Form</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#pricing"
              className="inline-flex h-11 w-full items-center justify-center rounded-full px-4 text-sm font-semibold text-[#24A176] transition-colors hover:bg-emerald-50 sm:w-auto"
            >
              View Hardware Packages
            </Link>
          </CardContent>
        </Card>
      </FadeIn>
    </main>
  );
}

import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Our Lahore Sales & Support Team",
  description:
    "Contact Cowgenic in Gulberg III, Lahore (+92 321 1044549) via phone, WhatsApp, or email for smart cow collar demos and orders across Pakistan.",
  canonical: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex w-full flex-col">
      <ContactSection />
    </main>
  );
}

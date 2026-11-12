import type { Metadata } from "next";
import { PrivacyPolicyView } from "@/components/sections/privacy-policy-view";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Cowgenic Privacy Policy (Updated January 2026): DFMS data collection, hardware sensor telemetry, Android app permissions, security & deletion rights.",
  canonical: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyView />;
}

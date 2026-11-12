import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Clock,
  HeartPulse,
  ShieldAlert,
  Target,
  Utensils,
} from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  FadeIn,
  RevealDivider,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";
import { buildPageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Smart Collar Monitoring Features",
  description:
    "Explore 6 AI dairy monitoring features: eating time, rumination, activity tracking, heat detection, exact insemination timing & theft alerts in Pakistan.",
  canonical: "/features",
  keywords: [
    ...siteConfig.keywords,
    "cow eating time monitoring",
    "rumination monitoring collar",
    "cattle estrus detection Pakistan",
  ],
});

const features = [
  {
    id: "eating-time",
    href: "/features/eating-time-monitoring",
    title: "Eating Time Monitoring",
    description:
      "Continuously tracks daily feed intake duration per cow so farm managers catch appetite drops and metabolic issues days before milk yield declines.",
    icon: Utensils,
  },
  {
    id: "rumination",
    href: "/features/rumination-time-monitoring",
    title: "Rumination Time Monitoring",
    description:
      "Monitors chewing cycles and digestive rhythm 24/7 with collar-mounted motion sensors tuned specifically for dairy breeds in Pakistan.",
    icon: Clock,
  },
  {
    id: "activity-level",
    href: "/features/activity-level-monitoring",
    title: "Activity Level Monitoring",
    description:
      "Measures resting, standing, and walking intensity to highlight lameness, comfort shifts, or herd stress in real time.",
    icon: Activity,
  },
  {
    id: "heat-detection",
    href: "/features/heat-detection-for-insemination",
    title: "Heat Detection For Insemination",
    description:
      "Detects behavioral estrus peaks automatically and sends timely alerts to maximize artificial insemination conception rates.",
    icon: HeartPulse,
  },
  {
    id: "exact-insemination-time",
    href: "/features/exact-insemination-time",
    title: "Exact Insemination Time",
    description:
      "Pinpoints the optimal breeding window based on peak activity and estrus onset curves so farms reduce missed cycles and improve conception rates.",
    icon: Target,
  },
  {
    id: "theft-alert",
    href: "/features/theft-and-boundary-alert",
    title: "Theft & Boundary Alert",
    description:
      "Sends instant real-time alerts if a collared cow leaves authorized farm zones or experiences unusual movement outside scheduled hours.",
    icon: ShieldAlert,
  },
];

export default function FeaturesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <FadeIn inView={false} className="max-w-2xl space-y-3">
        <Badge variant="accent">Smart Collar Capabilities</Badge>
        <h1 className="text-3xl font-bold tracking-tight text-[#24A176] sm:text-4xl">
          Cowgenic Monitoring Features
        </h1>
        <RevealDivider className="h-1 w-16 rounded-full bg-[#24A176]" />
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
          Purpose-built hardware and AI analytics for dairy farms across
          Pakistan.
        </p>
      </FadeIn>

      <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <StaggerItem key={feature.id}>
              <Card
                id={feature.id}
                className="group relative h-full scroll-mt-32 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#24A176]/55 hover:shadow-lg hover:shadow-[#24A176]/8"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 origin-center scale-x-0 bg-gradient-to-r from-[#24A176] via-[#3BB88E] to-[#24A176] transition-transform duration-300 group-hover:scale-x-100"
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-950">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#24A176] ring-1 ring-[#24A176]/20 transition-transform duration-200 group-hover:scale-105">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <span>{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{feature.description}</CardDescription>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#24A176] transition-colors hover:text-[#1D8762]"
                  >
                    <span>View Feature Page</span>
                    <ArrowRight
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>

      <FadeIn delay={0.1} className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/order"
          className="inline-flex h-11 items-center justify-center rounded-full bg-[#24A176] px-7 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1D8762] hover:shadow-md"
        >
          Order Now
        </Link>
        <Link
          href="/#pricing"
          className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-gray-900 transition-colors hover:border-[#24A176] hover:text-[#24A176]"
        >
          View Pricing Packages
        </Link>
      </FadeIn>
    </main>
  );
}

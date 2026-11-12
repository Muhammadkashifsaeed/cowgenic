import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import {
  FloatingWhatsappButton,
  Footer,
  Header,
  SiteIntroOverlay,
} from "@/components/layout";
import { LanguageProvider } from "@/components/providers/language-provider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-urdu",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = siteConfig.url.replace(/\/+$/, "");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#24A176",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.legalName, url: baseUrl }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "Agriculture Technology",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    alternateLocale: ["ur_PK"],
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteConfig.legalName,
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/cowgenic-cow-icon.png`,
        width: 512,
        height: 512,
      },
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.streetAddress,
        addressLocality: siteConfig.contact.city,
        addressRegion: siteConfig.contact.region,
        addressCountry: siteConfig.contact.country,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: siteConfig.contact.phoneDisplay,
          email: siteConfig.contact.email,
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: siteConfig.contact.phoneDisplay,
          email: siteConfig.contact.supportEmail,
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: ["en", "ur"],
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <LanguageProvider>
          <SiteIntroOverlay />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <FloatingWhatsappButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

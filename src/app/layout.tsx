import "@mantine/core/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TawkTo } from "@/components/ui/TawkTo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://moinfo.co.tz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Moinfo Hosting — Fast & Reliable Web Hosting in Tanzania",
    template: "%s — Moinfo Hosting",
  },
  description:
    "Premium web hosting, domain registration, email hosting, and VPS solutions for Tanzanian businesses. TCRA accredited .tz domain registrar.",
  keywords: [
    "web hosting Tanzania",
    "domain registration Tanzania",
    ".co.tz domain",
    "TCRA registrar",
    "VPS Tanzania",
    "email hosting",
    "Linux VPS Tanzania",
    "dedicated server Tanzania",
    "reseller hosting Tanzania",
    "website design Tanzania",
    "Moinfo Hosting",
    "hosting bei nafuu Tanzania",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Moinfo Hosting",
    title: "Moinfo Hosting — Fast & Reliable Web Hosting in Tanzania",
    description:
      "Premium web hosting, domain registration, email hosting, and VPS solutions for Tanzanian businesses.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Moinfo Hosting — Fast & Reliable Web Hosting in Tanzania",
    description:
      "Premium web hosting, domain registration, email hosting, and VPS solutions for Tanzanian businesses.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="icon" href="/images/logo.png" />
        {/* JSON-LD structured data - static trusted content only */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://moinfo.co.tz/#organization",
                  name: "Moinfo Hosting",
                  url: "https://moinfo.co.tz",
                  logo: "https://moinfo.co.tz/images/logo.png",
                  description:
                    "Premium web hosting, domain registration, email hosting, and VPS solutions for Tanzanian businesses.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Njuweni Hotel, 1st Floor, Room 134, Mail Moja",
                    addressLocality: "Kibaha",
                    addressCountry: "TZ",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+255-689-011-111",
                      contactType: "customer service",
                      availableLanguage: ["en", "sw"],
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+255-651-034-582",
                      contactType: "sales",
                      availableLanguage: ["en", "sw"],
                    },
                  ],
                  sameAs: [
                    "https://facebook.com/moinfotech",
                    "https://instagram.com/moinfotech",
                    "https://linkedin.com/company/moinfotech",
                    "https://twitter.com/moinfotech",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://moinfo.co.tz/#website",
                  url: "https://moinfo.co.tz",
                  name: "Moinfo Hosting",
                  publisher: {
                    "@id": "https://moinfo.co.tz/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <LanguageProvider>
            <TopBar />
            <Header />
            <main>{children}</main>
            <Footer />
            <TawkTo />
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

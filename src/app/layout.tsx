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
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

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
    "Best web hosting in Tanzania. Cheap domain registration, VPS, dedicated servers, reseller hosting, email hosting, and website design. TCRA accredited .tz domain registrar. Free SSL, 24/7 support.",
  keywords: [
    // Brand
    "Moinfo Hosting",
    "moinfo.co.tz",
    "Moinfo",
    // Web hosting
    "web hosting Tanzania",
    "best web hosting Tanzania",
    "cheap web hosting Tanzania",
    "affordable web hosting Tanzania",
    "reliable web hosting Tanzania",
    "fast web hosting Tanzania",
    "hosting bei nafuu Tanzania",
    "web hosting Dar es Salaam",
    "web hosting company Tanzania",
    "Tanzania web hosting provider",
    "hosting Tanzania",
    // Domain
    "domain registration Tanzania",
    "cheap domain Tanzania",
    "buy domain Tanzania",
    ".tz domain registration",
    ".co.tz domain",
    ".co.tz domain registration",
    ".or.tz domain",
    ".ac.tz domain",
    "TCRA accredited registrar",
    "TCRA domain registrar",
    "register .tz domain",
    "buy .co.tz domain",
    "domain name Tanzania",
    // VPS
    "VPS Tanzania",
    "VPS hosting Tanzania",
    "Linux VPS Tanzania",
    "cheap VPS Tanzania",
    "virtual private server Tanzania",
    "VPS server Dar es Salaam",
    // Dedicated
    "dedicated server Tanzania",
    "Linux dedicated server Tanzania",
    "dedicated hosting Tanzania",
    // Reseller
    "reseller hosting Tanzania",
    "Linux reseller hosting Tanzania",
    "start hosting business Tanzania",
    "WHM cPanel reseller Tanzania",
    // Email
    "email hosting Tanzania",
    "business email Tanzania",
    "professional email hosting Tanzania",
    "cheap email hosting Tanzania",
    // Website Design
    "website design Tanzania",
    "web design Tanzania",
    "ecommerce website Tanzania",
    "WordPress website Tanzania",
    "web design Dar es Salaam",
    "website design company Tanzania",
    // SSL
    "SSL certificate Tanzania",
    "free SSL Tanzania",
    // General
    "hosting services Tanzania",
    "cloud hosting Tanzania",
    "cPanel hosting Tanzania",
    "WordPress hosting Tanzania",
    "free domain Tanzania",
    "24/7 support hosting Tanzania",
    "99.9 uptime hosting Tanzania",
    // Swahili keywords
    "hosting ya tovuti Tanzania",
    "vikoa Tanzania",
    "hosting ya barua pepe",
    "tovuti bei nafuu",
    "sajili kikoa Tanzania",
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
        {/* Google Ads conversion tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-825251119" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-825251119');gtag('event','conversion',{'send_to':'AW-825251119/az8fCJyu4XoQr6rBiQM'});`,
          }}
        />
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
            <WhatsAppFloat />
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

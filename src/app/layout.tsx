import "@mantine/core/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TawkTo } from "@/components/ui/TawkTo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moinfo Hosting — Fast & Reliable Web Hosting in Tanzania",
  description:
    "Premium web hosting, domain registration, email hosting, and VPS solutions for Tanzanian businesses. TCRA accredited .tz domain registrar.",
  keywords: [
    "web hosting Tanzania",
    "domain registration Tanzania",
    ".co.tz domain",
    "TCRA registrar",
    "VPS Tanzania",
    "email hosting",
  ],
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
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <TopBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <TawkTo />
        </MantineProvider>
      </body>
    </html>
  );
}

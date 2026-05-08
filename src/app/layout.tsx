import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joscar Turf | Fresh Sod Every Day | Denver CO Delivery & Pickup",
  description: "Joscar Turf — fresh sod delivery and pickup every day in the Denver metro area. Call (720) 435-8409 or book your free estimate online.",
  keywords: ["sod Denver", "fresh sod", "sod delivery Denver", "sod pickup Denver", "Joscar Turf", "zacate fresco Denver", "sod installation Colorado"],
  openGraph: {
    title: "Joscar Turf | Fresh Sod Every Day | Denver CO",
    description: "Fresh sod delivery and pickup daily in the Denver metro area. Call (720) 435-8409.",
    url: "https://joscarturf.com",
    siteName: "Joscar Turf",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://joscarturf.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

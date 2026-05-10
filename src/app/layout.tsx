import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--serif",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1f0a",
};

export const metadata: Metadata = {
  title: "Joscar Turf | #1 Fresh Sod Denver | Kentucky Pickup & Delivery",
  description:
    "Joscar Turf — Denver's #1 fresh sod supplier. Kentucky Bluegrass & Fescue cut daily. Pickup at 5250 Sheridan Blvd, Arvada CO or delivered across Denver metro. Call (720) 435-8409.",
  keywords: [
    "sod Denver",
    "fresh sod Denver",
    "Kentucky Bluegrass Denver",
    "Kentucky Bluegrass sod Colorado",
    "sod delivery Denver",
    "sod pickup Arvada",
    "sod pickup Denver",
    "Joscar Turf",
    "Colorado sod",
    "best sod Denver",
    "sod near me Denver",
    "Fescue sod Denver",
    "fresh sod delivery Denver CO",
    "zacate fresco Denver",
    "sod installation Denver Colorado",
    "buy sod Denver",
    "sod farm Denver",
    "Kentucky Bluegrass lawn Denver",
    "cheap sod Denver",
    "sod delivery Arvada CO",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Joscar Turf | #1 Fresh Sod Denver — Kentucky Bluegrass Pickup & Delivery",
    description:
      "Fresh Kentucky Bluegrass & Fescue sod cut daily. Pickup at 5250 Sheridan Blvd Arvada or delivered across Denver metro. Call (720) 435-8409.",
    url: "https://joscarturf.com",
    siteName: "Joscar Turf",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://joscarturf.com/Website Pics/installing-fresh-sod-in-a-lush-garden-a-gardener-rolls-out-new-sod-in-a-green-landscape-during-a-sunny-afternoon-enhancing-the-beauty-of-the-yard-photo.webp",
        width: 1200,
        height: 630,
        alt: "Fresh sod installation Denver Colorado — Joscar Turf",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joscar Turf | #1 Fresh Sod Denver",
    description: "Fresh sod pickup & delivery daily. Kentucky Bluegrass & Fescue. Denver metro. (720) 435-8409.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://joscarturf.com",
    "name": "Joscar Turf",
    "image": "https://joscarturf.com/Logos/image.png",
    "description":
      "Denver's #1 source for fresh Kentucky Bluegrass and Fescue sod. Pickup and delivery available daily across the Denver metro area.",
    "url": "https://joscarturf.com",
    "telephone": ["+1-720-435-8409", "+1-720-275-6691"],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Check",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5250 Sheridan Blvd",
      "addressLocality": "Arvada",
      "addressRegion": "CO",
      "postalCode": "80002",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7925,
      "longitude": -105.0533,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "07:00",
        "closes": "19:00",
      },
    ],
    "areaServed": [
      "Denver, CO",
      "Arvada, CO",
      "Aurora, CO",
      "Lakewood, CO",
      "Westminster, CO",
      "Thornton, CO",
      "Centennial, CO",
      "Englewood, CO",
      "Littleton, CO",
      "Boulder, CO",
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fresh Sod Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kentucky Bluegrass Sod Delivery Denver",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fescue Sod Delivery Denver",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sod Pickup Arvada Colorado",
          },
        },
      ],
    },
    "sameAs": ["https://joscarturf.com"],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

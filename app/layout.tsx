import type { Metadata } from "next";
import { Playfair_Display, Caveat, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peppermill Cafe | Standale's Favorite Breakfast & Brunch Spot",
  description:
    "Peppermill Cafe in Grand Rapids, MI serves up hearty breakfasts and brunch favorites. Huge portions, friendly staff, and a warm community feel in the heart of Standale. Open Mon–Sat 6AM–2PM, Sun 7AM–2PM.",
  keywords: [
    "Peppermill Cafe",
    "breakfast Grand Rapids",
    "brunch Standale",
    "Grand Rapids breakfast",
    "best breakfast Grand Rapids",
    "Standale restaurant",
    "breakfast Lake Michigan Drive",
    "eggs benedict Grand Rapids",
    "pancakes Grand Rapids MI",
  ],
  authors: [{ name: "Peppermill Cafe" }],
  openGraph: {
    title: "Peppermill Cafe | Standale's Favorite Breakfast & Brunch",
    description:
      "Huge portions, friendly staff, and hometown flavor. Grand Rapids' best breakfast since day one. Located at 4511 Lake Michigan Dr NW.",
    type: "website",
    locale: "en_US",
    siteName: "Peppermill Cafe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peppermill Cafe | Breakfast & Brunch in Grand Rapids, MI",
    description:
      "The west side's favorite breakfast spot. Eggs Benedict, oversized pancakes, house-made corned beef hash, and more.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Peppermill Cafe",
    description:
      "Standale's favorite breakfast and brunch spot on the west side of Grand Rapids, MI.",
    url: "https://peppermill-cafe.com",
    telephone: "+16164537853",
    email: "pmc4511@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4511 Lake Michigan Dr NW",
      addressLocality: "Grand Rapids",
      addressRegion: "MI",
      postalCode: "49544",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "42.9845",
      longitude: "-85.7396",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "07:00",
        closes: "14:00",
      },
    ],
    servesCuisine: ["American", "Breakfast", "Brunch"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      reviewCount: "400",
    },
    sameAs: ["https://www.facebook.com/peppermill.cafe.gr"],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${caveat.variable} ${lato.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

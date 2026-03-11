import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Musso Family Dentistry | Family Dentist in Garland, TX",
    template: "%s | Musso Family Dentistry",
  },
  description:
    "Musso Family Dentistry in Garland, TX offers comprehensive dental care for the whole family. Services include cosmetic dentistry, dental implants, sleep apnea treatment, and more. Call (972) 278-1827.",
  keywords: [
    "dentist Garland TX",
    "family dentist Garland",
    "cosmetic dentistry Garland TX",
    "dental implants Garland",
    "sleep apnea dentist",
    "Musso Family Dentistry",
    "dentist near me",
    "family dental care",
    "teeth whitening Garland",
    "Invisalign Garland TX",
  ],
  authors: [{ name: "Musso Family Dentistry" }],
  creator: "Musso Family Dentistry",
  publisher: "Musso Family Dentistry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mussofamilydentistry.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Musso Family Dentistry | Family Dentist in Garland, TX",
    description:
      "Comprehensive dental care for the whole family in Garland, TX. Cosmetic dentistry, dental implants, sleep apnea treatment & more.",
    url: "https://mussofamilydentistry.com",
    siteName: "Musso Family Dentistry",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 180,
        height: 45,
        alt: "Musso Family Dentistry Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Musso Family Dentistry | Family Dentist in Garland, TX",
    description:
      "Comprehensive dental care for the whole family in Garland, TX. Call (972) 278-1827.",
    images: ["/logo.webp"],
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
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    // Add verification codes when available
    // google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${jakarta.variable} ${playfair.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased bg-white">
        {/* SVG Grain Filter Definition */}
        <svg className="hidden" aria-hidden="true">
          <defs>
            <filter id="grain">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>

        {/* The Grain Layer - PRD 0.05 opacity */}
        <div
          className="grain-overlay"
          style={{
            filter: "url(#grain)",
          }}
        />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}

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
  title: "Musso Family Dentistry | Legacy Meets Modern Artistry",
  description:
    "Where clinical precision meets architectural luxury. Musso Family Dentistry delivers transformative results through advanced technology and meticulous care.",
  keywords: [
    "dentistry",
    "family dentist",
    "cosmetic dentistry",
    "dental care",
    "orthodontics",
    "luxury dentistry",
  ],
  openGraph: {
    title: "Musso Family Dentistry",
    description: "Legacy Meets Modern Artistry",
    type: "website",
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

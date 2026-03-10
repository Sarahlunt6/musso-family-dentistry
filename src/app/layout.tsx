import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Musso Family Dentistry | Precision Care, Lasting Confidence",
  description:
    "Experience dentistry reimagined. Musso Family Dentistry combines clinical excellence with patient-centered care for transformative results.",
  keywords: [
    "dentistry",
    "family dentist",
    "cosmetic dentistry",
    "dental care",
    "orthodontics",
  ],
  openGraph: {
    title: "Musso Family Dentistry",
    description: "Precision Care, Lasting Confidence",
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
      className={`${lora.variable} ${jakarta.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        {/* SVG Noise Filter Definition */}
        <svg className="hidden" aria-hidden="true">
          <defs>
            <filter id="noise">
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

        {/* Global Noise Overlay */}
        <div
          className="noise-overlay"
          style={{
            filter: "url(#noise)",
          }}
        />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}

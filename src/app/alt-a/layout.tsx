import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mockup 2 - Warm Professional Design | Musso Family Dentistry",
  description:
    "Musso Family Dentistry in Garland, TX - Warm professional design mockup. Comprehensive dental care including cosmetic dentistry, dental implants, and sleep apnea treatment.",
  openGraph: {
    title: "Musso Family Dentistry | Warm Professional Design",
    description:
      "Family dentist in Garland, TX offering comprehensive dental care for all ages.",
    type: "website",
  },
};

export default function AltALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

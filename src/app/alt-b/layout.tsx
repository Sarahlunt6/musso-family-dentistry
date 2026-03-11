import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mockup 3 - Architectural Elegance | Musso Family Dentistry",
  description:
    "Musso Family Dentistry in Garland, TX - Architectural elegance design mockup. Premium dental care including cosmetic dentistry, dental implants, and sleep apnea treatment.",
  openGraph: {
    title: "Musso Family Dentistry | Architectural Elegance Design",
    description:
      "Family dentist in Garland, TX offering comprehensive dental care for all ages.",
    type: "website",
  },
};

export default function AltBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

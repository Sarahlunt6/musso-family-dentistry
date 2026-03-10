import Image from "next/image";
import Link from "next/link";

const designs = [
  {
    name: "Digital Sanctuary",
    route: "/",
    description: "Navy & green clinical precision with GSAP animations, stacking cards, and telemetry feed",
    colors: ["#1f2f5f", "#245532", "#ffffff"],
    aesthetic: "Clinical Precision meets Architectural Luxury",
  },
  {
    name: "Friendly & Approachable",
    route: "/alt-a",
    description: "Organic shapes, stacked images, marquee animations, and playful floating elements",
    colors: ["#1f2f5f", "#245532", "#FAF9F6"],
    aesthetic: "Warm, Casual, Family-Focused",
  },
  {
    name: "Bold & Dramatic",
    route: "/alt-b",
    description: "Full-bleed hero, accordion services, asymmetric layouts, and cinematic typography",
    colors: ["#1f2f5f", "#245532", "#ffffff"],
    aesthetic: "High-Contrast, Modern, Impactful",
  },
];

export default function DesignsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Image
            src="/logo.webp"
            alt="Musso Family Dentistry"
            width={200}
            height={50}
            className="h-12 w-auto mx-auto mb-8 brightness-0 invert"
          />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Homepage Designs
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Three distinct aesthetics, all professionally crafted for Musso Family Dentistry.
            Click to preview each design.
          </p>
        </div>

        {/* Design Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {designs.map((design) => (
            <Link
              key={design.name}
              href={design.route}
              className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all"
            >
              {/* Color Preview */}
              <div className="flex gap-2 mb-6">
                {design.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Content */}
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {design.name}
              </h2>
              <p className="text-sm text-white/40 mb-4">
                {design.aesthetic}
              </p>
              <p className="text-sm text-white/60">
                {design.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-sm text-white/50 group-hover:text-white transition-colors">
                <span>View Design</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-white/30 text-sm mt-16">
          All designs are fully responsive and built with Next.js 15, Tailwind CSS, and GSAP.
        </p>
      </div>
    </main>
  );
}

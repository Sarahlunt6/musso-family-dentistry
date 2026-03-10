import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ArtifactCards from "@/components/ArtifactCards";
import Philosophy from "@/components/Philosophy";
import StackingArchive from "@/components/StackingArchive";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* The Floating Island - Persistent CTA */}
      <Navbar />

      {/* Entry: Hero Impact → Immediate Brand Authority */}
      <Hero />

      {/* Education: Feature Artifacts → Technical Mastery */}
      <ArtifactCards />

      {/* Trust: Philosophy Section → Differentiates from Commodity Dentistry */}
      <Philosophy />

      {/* Process: Stacking Protocol → Patient Experience Visualization */}
      <StackingArchive />

      {/* Conversion: High-Contrast Footer + Persistent CTA */}
      <Footer />
    </main>
  );
}

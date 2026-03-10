import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import MeetTheDoctor from "@/components/MeetTheDoctor";
import ArtifactCards from "@/components/ArtifactCards";
import Philosophy from "@/components/Philosophy";
import StackingArchive from "@/components/StackingArchive";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      {/* The Floating Island - Persistent CTA */}
      <Navbar />

      {/* Entry: Hero Impact → Immediate Brand Authority */}
      <Hero />

      {/* Services: Our Specialties → Core Offerings */}
      <Specialties />

      {/* About: Meet Dr. Musso → Build Trust */}
      <MeetTheDoctor />

      {/* Education: Feature Artifacts → Technical Mastery */}
      <ArtifactCards />

      {/* Trust: Philosophy Section → Differentiates from Commodity Dentistry */}
      <Philosophy />

      {/* Process: Stacking Protocol → Patient Experience Visualization */}
      <StackingArchive />

      {/* Location: Map Section → Find Us */}
      <MapSection />

      {/* Conversion: High-Contrast Footer + Persistent CTA */}
      <Footer />
    </main>
  );
}

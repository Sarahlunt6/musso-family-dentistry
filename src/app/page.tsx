import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import MeetTheDoctor from "@/components/MeetTheDoctor";
import Philosophy from "@/components/Philosophy";
import Reviews from "@/components/Reviews";
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

      {/* Services: Our Specialties with Smile Shuffler */}
      <Specialties showSmileShuffler={true} />

      {/* About: Meet Dr. Musso → Build Trust */}
      <MeetTheDoctor />

      {/* Trust: Philosophy Section → Differentiates from Commodity Dentistry */}
      <Philosophy />

      {/* Social Proof: Patient Reviews */}
      <Reviews />

      {/* Process: Stacking Protocol → Patient Experience Visualization */}
      <StackingArchive />

      {/* Location: Map Section → Find Us */}
      <MapSection />

      {/* Conversion: High-Contrast Footer + Persistent CTA */}
      <Footer />
    </main>
  );
}

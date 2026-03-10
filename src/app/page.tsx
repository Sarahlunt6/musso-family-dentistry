import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProtocolStack from "@/components/ProtocolStack";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProtocolStack />
      <FeatureCards />
      <Footer />
    </main>
  );
}

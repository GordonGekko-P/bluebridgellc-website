import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import ServicesSection from "@/components/services-section";
import FeaturesSection from "@/components/features-section";
import EmployersSection from "@/components/employers-section";
import CompetitiveEdgeSection from "@/components/competitive-edge-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesSection />
      <EmployersSection />
      <CompetitiveEdgeSection />
      <Footer />
    </main>
  );
}

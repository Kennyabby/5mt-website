import Navbar from '../components/navbar';
import HeroSection from "../components/hero-section";
import StatsSection from "../components/stats-section";
import ManufacturingSection from "../components/manufacturing-section";
import ConstructionSection from "../components/construction-section";
import AboutSection from "../components/about-section";
import PortfolioSection from "../components/portfolio-section";
import TestimonialsSection from "../components/testimonials-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ManufacturingSection />
      <ConstructionSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

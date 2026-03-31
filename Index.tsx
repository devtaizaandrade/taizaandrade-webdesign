import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import NichesSection from "@/components/landing/NichesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <NichesSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;

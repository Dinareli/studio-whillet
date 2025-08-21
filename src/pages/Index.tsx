import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import CategoryGrid from "@/components/CategoryGrid";
import Services from "@/components/Services";
import About from "@/components/About";
import TestimonialsSection from "@/components/TestimonialsSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PromoSection />
      <CategoryGrid />
      <Services />
      <About />
      <TestimonialsSection />
      <Contact />
    </div>
  );
};

export default Index;

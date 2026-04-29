import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import HeroSection from "@/components/sections/HeroSection";
import WhyTianwaaSection from "@/components/sections/WhyTianwaaSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import GallerySection from "@/components/sections/GallerySection";
import CTABannerSection from "@/components/sections/CTABannerSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyTianwaaSection />
      <ProgramsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BlogSection />
      <GallerySection />
      <CTABannerSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}

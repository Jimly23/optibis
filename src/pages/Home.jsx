import React from "react";
import SiteHeader from "@/components/optibis/SiteHeader";
import HeroSection from "@/components/optibis/HeroSection";
import TrustBar from "@/components/optibis/TrustBar";
import PainPoints from "@/components/optibis/PainPoints";
import ThreePillars from "@/components/optibis/ThreePillars";
import ServiceCatalog from "@/components/optibis/ServiceCatalog";
import TotalSolution from "@/components/optibis/TotalSolution";
import PackagesSection from "@/components/optibis/PackagesSection";
import IndustriesSection from "@/components/optibis/IndustriesSection";
import PortfolioSection from "@/components/optibis/PortfolioSection";
import WebsiteShowcase from "@/components/optibis/WebsiteShowcase";
import GrowthTeamHighlight from "@/components/optibis/GrowthTeamHighlight";
import MarketingKitSection from "@/components/marketing-kit/MarketingKitSection";
import TestimonialsSection from "@/components/optibis/TestimonialsSection";
import ProcessTimeline from "@/components/optibis/ProcessTimeline";
import LeadMagnetSection from "@/components/optibis/LeadMagnetSection";
import FAQConsultation from "@/components/optibis/FAQConsultation";
import FinalCTA from "@/components/optibis/FinalCTA";
import SiteFooter from "@/components/optibis/SiteFooter";
import FloatingWhatsApp from "@/components/optibis/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <PainPoints />
      <ProcessTimeline />
      <ThreePillars />
      <ServiceCatalog />
      <TotalSolution />
      <PackagesSection />
      <IndustriesSection />
      <PortfolioSection />
      <WebsiteShowcase />
      <GrowthTeamHighlight />
      <MarketingKitSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FAQConsultation />
      <FinalCTA />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
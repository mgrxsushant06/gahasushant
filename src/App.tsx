import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { FounderStorySection } from './components/FounderStorySection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyWebSathi } from './components/WhyWebSathi';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { PillarsSection } from './components/PillarsSection';
import { DarkCtaSection } from './components/DarkCtaSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { InsightsSection } from './components/InsightsSection';
import { Footer } from './components/Footer';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [selectedPackageForContact, setSelectedPackageForContact] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (packageName: string, price: string) => {
    setSelectedPackageForContact(`${packageName} (${price})`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectForQuote = (projectName: string) => {
    setSelectedServiceForContact(`Website similar to: ${projectName}`);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculatorProceed = (details: string, estimatedCost: string) => {
    setSelectedPackageForContact(`Custom Calculator: ${estimatedCost}`);
    setSelectedServiceForContact(details);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#111111] font-sans antialiased overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuickQuote={() => setIsCalculatorOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuickQuote={() => setIsCalculatorOpen(true)} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. About Section */}
        <AboutSection />

        {/* 3.5. WebSathi Story & Founder */}
        <FounderStorySection onStartProject={() => handleSelectService('Web Design & WordPress Development')} />

        {/* 4. Skills & Technologies */}
        <SkillsSection />

        {/* 5. Services ("What I Do") */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Why WebSathi & Real Stats */}
        <WhyWebSathi />

        {/* 7. Selected Work / Portfolio */}
        <PortfolioSection onSelectProjectForQuote={handleSelectProjectForQuote} />

        {/* 8. Process ("How I Work") */}
        <ProcessSection />

        {/* 9. Website Packages & Pricing */}
        <PricingSection 
          onSelectPackage={handleSelectPackage}
          onOpenQuickQuote={() => setIsCalculatorOpen(true)}
        />

        {/* 10. Core Values / Pillars */}
        <PillarsSection />

        {/* 11. Dramatic Dark CTA */}
        <DarkCtaSection />

        {/* 12. Contact Form & Direct Channels */}
        <ContactSection 
          initialService={selectedServiceForContact}
          initialPackage={selectedPackageForContact}
        />

        {/* 13. FAQ Accordion */}
        <FaqSection />

        {/* 14. Insights & Guides */}
        <InsightsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Cost Calculator Modal */}
      <QuickQuoteModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onSelectOptionForContact={handleCalculatorProceed}
      />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

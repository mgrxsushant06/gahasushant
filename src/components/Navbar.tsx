import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, MessageCircle, Phone, Calculator, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuickQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuickQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection with balanced offset for mobile & desktop
      const sections = ['home', 'about', 'founder-story', 'services', 'portfolio', 'process', 'pricing', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape key press or resize to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Our Story', id: 'founder-story' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (targetId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setMobileMenuOpen(false);

    const performScroll = () => {
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const navHeight = 72;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          left: 0,
          behavior: 'smooth'
        });
      }
    };

    // Trigger immediately and with small timeout to handle DOM reflow during menu close
    performScroll();
    setTimeout(performScroll, 60);
    setTimeout(performScroll, 200);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] py-3.5 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Home Button */}
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#home"
            onClick={(e) => scrollToSection('home', e)}
            className="flex items-center gap-2.5 group focus:outline-hidden cursor-pointer"
            id="nav-brand-logo"
            title="WebSathi - Home"
            aria-label="WebSathi Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center font-extrabold text-xl shadow-xs group-hover:bg-[#2563EB] transition-colors duration-300">
              <span className="tracking-tighter">W</span>
              <span className="text-[#2563EB] group-hover:text-white transition-colors duration-300 -ml-0.5">S</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#111111]">WebSathi</span>
                <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB]"></span>
              </div>
              <span className="text-[11px] font-medium text-[#6B7280] -mt-1 tracking-wider uppercase font-mono">
                Sushant Gaha Magar
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F7F8FA] p-1.5 rounded-full border border-[#E5E7EB]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(link.id, e)}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-white text-[#111111] shadow-xs' 
                      : 'text-[#6B7280] hover:text-[#111111] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Availability Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-bold font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span>Available in Nepal</span>
            </div>

            {/* Primary Action Button */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              onClick={(e) => scrollToSection('contact', e)}
              className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-semibold hover:bg-[#2563EB] transition-colors shadow-xs flex items-center gap-2 group cursor-pointer"
              id="nav-primary-cta"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile & Tablet Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a 
              href="https://wa.me/9779769316767?text=Hi%20Sushant,%20I%20am%20interested%20in%20a%20website%20project%20for%20my%20business." 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs flex items-center justify-center hover:bg-emerald-100 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#111111] hover:bg-gray-50 flex items-center justify-center transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
              id="btn-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#111111]" /> : <Menu className="w-6 h-6 text-[#111111]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <React.Fragment key="mobile-drawer-wrapper">
            {/* Darkened backdrop overlay to close when tapping background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[68px] bg-black/25 backdrop-blur-[2px] lg:hidden -z-10"
              aria-hidden="true"
            />

            <motion.div 
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 mt-3 shadow-2xl overflow-hidden max-h-[calc(100vh-5.5rem)] overflow-y-auto"
              id="mobile-drawer-menu"
            >
            {/* Status & Availability Strip */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] mb-3 text-xs">
              <div className="flex items-center gap-2 text-[#2563EB] font-bold font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                </span>
                <span>Available for Projects</span>
              </div>
              <span className="text-[11px] text-[#6B7280] font-mono">Butwal, Nepal</span>
            </div>

            {/* Navigation Link Items */}
            <div className="flex flex-col gap-1.5 mb-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={(e) => scrollToSection(link.id, e)}
                    className={`w-full px-4 py-3 rounded-xl text-sm font-bold text-left transition-all duration-150 flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? 'bg-[#111111] text-white shadow-xs' 
                        : 'text-[#111111] hover:bg-[#F7F8FA] active:bg-gray-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white translate-x-0.5' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-[#E5E7EB] flex flex-col gap-2.5">
              {onOpenQuickQuote && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuickQuote();
                  }}
                  className="w-full py-3 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200 text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Website Cost</span>
                </button>
              )}

              <button
                type="button"
                onClick={(e) => scrollToSection('contact', e)}
                className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:bg-blue-700 text-white text-center font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Start a Project Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-3 text-xs text-[#6B7280] font-medium font-mono">
                <a href="tel:+9779769316767" className="flex items-center gap-1.5 hover:text-[#111111]">
                  <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>+977 9769316767</span>
                </a>
                <span>•</span>
                <a href="mailto:websushant07@gmail.com" className="hover:text-[#111111]">
                  websushant07@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
    </header>
  );
};

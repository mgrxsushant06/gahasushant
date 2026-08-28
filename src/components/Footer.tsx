import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUp, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  ExternalLink,
  MessageCircle,
  ShieldCheck
} from 'lucide-react';
import { GeneralMicroWebBg } from './MicroWebBackground';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-gray-800 relative pt-20 pb-12 overflow-hidden">
      {/* Micro-Web Background System */}
      <GeneralMicroWebBg variant="footer" />

      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800"
        >
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white text-[#111111] flex items-center justify-center font-extrabold text-xl shadow-md">
                <span className="tracking-tighter">W</span>
                <span className="text-[#2563EB] -ml-0.5">S</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-2xl tracking-tight text-white">WebSathi</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB]"></span>
                </div>
                <span className="text-[11px] font-medium text-gray-400 -mt-1 tracking-wider uppercase font-mono">
                  Sushant Gaha Magar
                </span>
              </div>
            </div>

            <div className="text-sm font-bold text-blue-400">
              "Modern Websites. Smart Design. Real Results."
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              WebSathi helps businesses, organizations and individuals build modern, responsive and professional websites using WordPress and modern web design practices.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/websathi01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="WebSathi Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/sushant.gaha.magar1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#2563EB] text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Sushant Personal Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/mgr_sushant1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/9779769316767"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/30 hover:bg-emerald-600 text-emerald-400 hover:text-white flex items-center justify-center transition-colors border border-emerald-500/30 shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Col 2: Company Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-mono">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Me</a></li>
              <li><a href="#founder-story" className="hover:text-blue-400 transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-blue-400 transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing Packages</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-mono">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">WordPress Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Website Design</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Elementor Layouts</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Business &amp; Corporate Websites</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">News Portals</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">E-Commerce Stores</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-mono">
              CONTACT
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>Butwal, Lumbini Province, Nepal</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <a href="mailto:websushant07@gmail.com" className="hover:text-white transition-colors">
                websushant07@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-gray-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <a href="tel:+9779769316767" className="hover:text-white transition-colors">
                +977 9769316767
              </a>
            </div>

            <div className="pt-2">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-gray-400">
                <span className="text-emerald-400 font-bold">Fast Response: </span>
                WhatsApp chat available 24/7 for urgent inquiries and consultations.
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 WebSathi. All Rights Reserved.
          </div>

          <div className="text-gray-400 font-medium">
            Designed &amp; Developed by{' '}
            <span className="text-white font-bold">Sushant Gaha Magar</span>
          </div>

          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            id="btn-footer-back-to-top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

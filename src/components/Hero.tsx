import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Zap, 
  Search, 
  Layout, 
  ShieldCheck,
  MousePointerClick
} from 'lucide-react';
import { HeroMicroWebBg } from './MicroWebBackground';

interface HeroProps {
  onOpenQuickQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickQuote }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'corporate' | 'portfolio'>('news');

  const demoScreens = {
    news: {
      title: 'Lok Samarpan News Media',
      category: 'National News & Journalism',
      tagline: 'Breaking Headlines • Real-Time Updates • Ad Placements',
      headerBg: 'bg-red-700',
      accentColor: 'text-red-600',
      badgeText: 'News Portal Edition',
      stats: '1.8s Fast Load • AdSense Ready • 100% Mobile Feed',
      previewImg: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1000&q=80'
    },
    corporate: {
      title: 'Hopeq8 General Trading',
      category: 'Enterprise B2B Corporate',
      tagline: 'Global Supply Solutions • Catalog System • Lead Funnel',
      headerBg: 'bg-slate-900',
      accentColor: 'text-blue-600',
      badgeText: 'Corporate Business',
      stats: 'B2B Lead Flow • Multi-Device • High Security',
      previewImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
    },
    portfolio: {
      title: 'Bijay Dhami Leadership',
      category: 'Public Brand & Vision',
      tagline: 'Biography • Initiatives • Press Gallery • Direct Contact',
      headerBg: 'bg-emerald-800',
      accentColor: 'text-emerald-600',
      badgeText: 'Personal Brand',
      stats: 'High-Impact Editorial • SEO Schema • Media Showcase',
      previewImg: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80'
    }
  };

  const currentDemo = demoScreens[activeTab];

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F8FA]"
    >
      {/* Micro-Web Background System */}
      <HeroMicroWebBg />

      {/* Subtle Background Accent */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-blue-100/40 blur-3xl pointer-events-none -z-10 rounded-full animate-pulse-glow" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200/20 blur-2xl pointer-events-none -z-10 rounded-full animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 shadow-xs mb-6 backdrop-blur-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#2563EB] uppercase">
              WORDPRESS DEVELOPER &amp; WEB DESIGNER FROM NEPAL
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#111111] max-w-5xl leading-[1.08] mb-6"
          >
            I BUILD{' '}
            <span className="text-[#2563EB] relative inline-block">
              MODERN WEBSITES
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
                className="absolute bottom-1 left-0 h-[3px] bg-[#2563EB]/30 rounded-full"
              />
            </span>{' '}
            THAT HELP BUSINESSES STAND OUT.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-[#6B7280] max-w-3xl font-normal leading-relaxed mb-8"
          >
            I'm <span className="font-semibold text-[#111111]">Sushant Gaha Magar</span>, a Junior WordPress Developer &amp; Web Designer helping businesses, organizations and individuals build modern, responsive and professional websites.
          </motion.p>

          {/* Call to Action Button Group */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2563EB] text-white font-bold text-base hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-cta-start-project"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border-2 border-[#E5E7EB] text-[#111111] font-bold text-base hover:bg-[#F7F8FA] hover:border-gray-300 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              id="hero-cta-view-work"
            >
              <span>View My Work</span>
              <ExternalLink className="w-4 h-4 text-[#6B7280]" />
            </motion.a>
          </motion.div>

          {/* Secondary Features Small Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-gray-600 bg-white px-4 py-2 rounded-full border border-[#E5E7EB] mb-14 shadow-xs"
          >
            <span className="flex items-center gap-1.5 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> WordPress
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> Elementor
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> Responsive Design
            </span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1.5 text-[#111111]">
              <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> SEO-Friendly
            </span>
          </motion.div>
        </div>

        {/* Premium Browser Mockup Stage */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl mx-auto"
        >
          
          {/* Floating Badge 1: WordPress & Elementor (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="hidden md:flex absolute -top-8 -left-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E5E7EB] shadow-xl animate-float-slow cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111] flex items-center gap-1">
                WordPress &amp; Elementor
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="text-[11px] text-[#6B7280]">Easy Content Updates</div>
            </div>
          </motion.div>

          {/* Floating Badge 2: 100% Mobile Responsive (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="hidden md:flex absolute -top-6 -right-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E5E7EB] shadow-xl animate-float-reverse cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">100% Mobile Responsive</div>
              <div className="text-[11px] text-[#6B7280]">Phones, Tablets &amp; Desktops</div>
            </div>
          </motion.div>

          {/* Floating Badge 3: SEO Ready & Speed (Bottom Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="hidden lg:flex absolute -bottom-6 -left-10 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E5E7EB] shadow-xl animate-float-reverse cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">95+ Performance Score</div>
              <div className="text-[11px] text-[#6B7280]">Clean Schema &amp; Fast Caching</div>
            </div>
          </motion.div>

          {/* Floating Badge 4: Nepal Standard Pricing (Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="hidden lg:flex absolute -bottom-6 -right-8 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E5E7EB] shadow-xl animate-float-slow cursor-default"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#111111]">Packages from NPR 10,000</div>
              <div className="text-[11px] text-[#6B7280]">Transparent &amp; Reliable</div>
            </div>
          </motion.div>

          {/* Browser Window Wrapper */}
          <div className="rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/10">
            
            {/* Browser Header Bar */}
            <div className="bg-[#111111] px-4 py-3.5 flex items-center justify-between border-b border-gray-800 text-white">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
                <span className="ml-2 text-xs font-medium text-gray-400 hidden sm:inline-block font-mono">
                  websathi-client-preview.local
                </span>
              </div>

              {/* Interactive Demo Switcher Tabs */}
              <div className="flex items-center bg-gray-900/90 rounded-lg p-0.5 border border-gray-800 text-xs">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer relative ${
                    activeTab === 'news'
                      ? 'bg-[#2563EB] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  News Portal
                </button>
                <button
                  onClick={() => setActiveTab('corporate')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer relative ${
                    activeTab === 'corporate'
                      ? 'bg-[#2563EB] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Corporate
                </button>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`px-3 py-1 rounded-md transition-all cursor-pointer relative ${
                    activeTab === 'portfolio'
                      ? 'bg-[#2563EB] text-white font-semibold shadow-xs'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Portfolio
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live WordPress UI</span>
              </div>
            </div>

            {/* Browser Content Stage with Cross-fade Animation */}
            <div className="relative bg-gray-900 text-white overflow-hidden aspect-[16/9] sm:aspect-[16/8]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <img 
                    src={currentDemo.previewImg} 
                    alt={currentDemo.title}
                    className="w-full h-full object-cover opacity-65"
                  />

                  {/* Gradient Overlay & UI Overlay Card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="max-w-xl"
                    >
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold mb-3 border border-white/30 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                        <span>{currentDemo.badgeText}</span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                        {currentDemo.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-2">
                        {currentDemo.tagline}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        <motion.a
                          href="#portfolio"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.97 }}
                          className="px-4 py-2 rounded-lg bg-white text-[#111111] text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
                        >
                          <span>Explore Live Projects</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </motion.a>
                        
                        <span className="text-xs text-gray-300 font-medium font-mono">
                          {currentDemo.stats}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Top Right Live Badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg border border-white/20 flex items-center gap-2 shadow-xs pointer-events-none">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Nepal &amp; International Standards</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

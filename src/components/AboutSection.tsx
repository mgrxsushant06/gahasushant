import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Code2, 
  Palette, 
  Layers, 
  Zap,
  Globe,
  Award,
  BookOpen
} from 'lucide-react';
import { AboutMicroWebBg } from './MicroWebBackground';

export const AboutSection: React.FC = () => {
  const [showFullBio, setShowFullBio] = useState(false);

  const pillars = [
    {
      num: '01',
      title: 'Web Design',
      desc: 'Modern aesthetics, clean typography, and intuitive user experiences designed to leave a lasting impression.'
    },
    {
      num: '02',
      title: 'WordPress Development',
      desc: 'Robust, flexible, and scalable architecture using WordPress and Elementor for seamless content management.'
    },
    {
      num: '03',
      title: 'UI/UX',
      desc: 'User-centric wireframes and interaction flows that guide visitors naturally toward inquiries and sales.'
    },
    {
      num: '04',
      title: 'Website Optimization',
      desc: 'Fast page loading speeds, on-page SEO setup, and rigorous mobile-first responsive performance.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Micro-Web Background System */}
      <AboutMicroWebBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
            <span>ABOUT ME</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight max-w-3xl leading-tight">
            I DON'T JUST BUILD WEBSITES.{' '}
            <span className="text-[#2563EB]">I BUILD DIGITAL PRESENCE.</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Professional Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E5E7EB] p-3 shadow-xl transition-all duration-300 hover:shadow-2xl">
              
              {/* Profile Image with Overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-900 group">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80" 
                  alt="Sushant Gaha Magar - Junior WordPress Developer & Web Designer" 
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient info strip */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-blue-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Butwal, Lumbini, Nepal</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    Sushant Gaha Magar
                  </h3>
                  <p className="text-xs text-gray-300 font-medium">
                    Junior WordPress Developer &amp; Web Designer • WebSathi
                  </p>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="mt-3 px-4 py-3 bg-[#111111] rounded-xl text-white flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold">Accepting New Projects</span>
                </div>
                <span className="text-gray-300 font-medium font-mono">Brand: WebSathi</span>
              </div>
            </div>

            {/* Floating Experience Note */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl border border-[#E5E7EB] shadow-xl max-w-[200px] hidden sm:block cursor-default"
            >
              <div className="text-2xl font-black text-[#2563EB]">25+</div>
              <div className="text-xs font-bold text-[#111111] leading-snug">Websites Built Across Nepal &amp; Abroad</div>
            </motion.div>
          </motion.div>

          {/* Right Column: Story & 4 Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            <div className="prose prose-lg text-[#6B7280] mb-8 space-y-4">
              <p className="text-lg text-[#111111] leading-relaxed font-normal">
                I'm <strong className="text-[#111111] font-bold">Sushant Gaha Magar</strong>, a Junior WordPress Developer and Web Designer from <span className="text-[#111111] font-semibold">Butwal, Nepal</span>. I specialize in creating modern, responsive and user-friendly websites using WordPress and Elementor.
              </p>
              
              <p className="text-base leading-relaxed text-[#6B7280]">
                My focus is on combining clean design, strong usability and reliable performance to create websites that represent a brand professionally and help businesses establish a stronger online presence.
              </p>

              <AnimatePresence>
                {showFullBio && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pt-2 text-sm text-[#6B7280] space-y-3 bg-[#F7F8FA] p-4 rounded-2xl border border-[#E5E7EB] overflow-hidden"
                  >
                    <p>
                      Through my brand <strong className="text-[#111111]">WebSathi</strong>, I bridge the gap between high agency prices and low-quality generic templates. Whether you are launching a high-traffic news portal in Nepal, a corporate B2B website, an e-commerce shop, or a personal leadership portfolio, I handle the complete cycle from domain &amp; hosting configuration to responsive UI design and search indexing.
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#111111]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> Fast 1-on-1 Communication
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> Reliable Post-Launch Support
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> No Hidden Fees
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB]" /> 100% Client-Owned cPanel Option
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map((pillar, idx) => (
                <motion.div 
                  key={pillar.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4, borderColor: 'rgba(37, 99, 235, 0.4)' }}
                  className="p-5 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FA] hover:bg-white hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <div className="text-xs font-bold text-[#2563EB] tracking-wider mb-1 font-mono">
                    {pillar.num}
                  </div>
                  <h4 className="text-base font-bold text-[#111111] mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowFullBio(!showFullBio)}
                className="px-6 py-3 rounded-xl border border-[#E5E7EB] text-[#111111] font-bold text-sm bg-white hover:bg-[#F7F8FA] transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
                id="btn-more-about-me"
              >
                <span>{showFullBio ? 'Show Less' : 'More About Me'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${showFullBio ? 'rotate-90' : ''}`} />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#services"
                className="px-6 py-3 rounded-xl bg-[#111111] text-white font-bold text-sm hover:bg-[#2563EB] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore My Services</span>
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

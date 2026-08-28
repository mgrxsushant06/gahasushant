import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Code2, 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Layers,
  Facebook,
  Instagram,
  User,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { FounderMicroWebBg } from './MicroWebBackground';

interface FounderStorySectionProps {
  onStartProject?: () => void;
}

export const FounderStorySection: React.FC<FounderStorySectionProps> = ({ onStartProject }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onStartProject) {
      onStartProject();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const founderHighlights = [
    {
      num: '01',
      label: 'FOUNDER',
      value: 'WebSathi',
      sub: 'Official Digital Brand'
    },
    {
      num: '02',
      label: 'FOUNDED',
      value: 'June 19, 2025',
      sub: 'Official Launch Date'
    },
    {
      num: '03',
      label: 'SPECIALIZATION',
      value: 'WordPress & Web Design',
      sub: 'Modern & Clean UI/UX'
    },
    {
      num: '04',
      label: 'BASED IN',
      value: 'Nepal',
      sub: 'Serving Clients Globally'
    }
  ];

  const timelineItems = [
    {
      date: 'JUNE 19, 2025',
      title: 'WebSathi Founded',
      description: 'WebSathi was officially founded with the vision to make professional web solutions accessible and impactful.'
    },
    {
      date: '2025',
      title: 'Initial Digital Projects',
      description: 'Initial digital projects and web development work, delivering clean WordPress and responsive web experiences.'
    },
    {
      date: 'PRESENT',
      title: 'Expanding Digital Solutions',
      description: 'Expanding WebSathi\'s services and digital portfolio — growing through creativity, technology and client-focused digital solutions.'
    }
  ];

  return (
    <section 
      id="founder-story" 
      className="py-24 bg-white relative overflow-hidden border-t border-[#E5E7EB]"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Anchor for alternate navigation targets */}
      <div id="founder" className="absolute -top-20" />
      <div id="about-websathi" className="absolute -top-20" />
      <div id="websathi-story" className="absolute -top-20" />

      {/* Decorative Micro-Web Background System */}
      <FounderMicroWebBg />

      {/* Large Decorative Watermark Typography with subtle drift */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-12 right-0 select-none pointer-events-none text-slate-100/70 font-black text-8xl sm:text-9xl lg:text-[14rem] tracking-tighter -z-0"
      >
        2025
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.5, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-24 left-0 select-none pointer-events-none text-slate-100/50 font-black text-7xl sm:text-8xl lg:text-[11rem] tracking-tighter -z-0"
      >
        JUNE 19
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* LEFT COLUMN: Founder Portrait / Profile Card (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start" 
            itemScope 
            itemType="https://schema.org/Person"
          >
            
            {/* Visual Portrait Container */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="w-full max-w-md bg-[#F7F8FA] border border-[#E5E7EB] rounded-3xl p-5 sm:p-6 shadow-md relative group transition-all duration-300 hover:border-blue-300 hover:shadow-xl"
            >
              
              {/* Founder Image / Dedicated Authentic Placeholder Area */}
              <div 
                className="w-full aspect-4/5 rounded-2xl bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#0F172A] border border-gray-700/60 p-6 flex flex-col justify-between relative overflow-hidden shadow-inner"
                role="img"
                aria-label="Sushant Gaha Magar — Founder of WebSathi"
              >
                {/* Tech Glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/25 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />
                
                {/* Top Badge in Card */}
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-medium tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    FOUNDER PROFILE
                  </span>
                  <span className="text-[11px] font-mono text-gray-400">
                    EST. 2025
                  </span>
                </div>

                {/* Center Visual Placeholder Details */}
                <div className="my-auto text-center z-10 flex flex-col items-center justify-center py-6">
                  <motion.div 
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#2563EB] to-indigo-500 p-1 shadow-lg shadow-blue-500/25 mb-4 transition-transform duration-300"
                  >
                    <div className="w-full h-full rounded-full bg-[#0B0F19] flex items-center justify-center border-2 border-white/20">
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-wider">SG</span>
                    </div>
                  </motion.div>
                  
                  <div className="text-white font-bold text-lg sm:text-xl tracking-tight mb-1" itemProp="name">
                    Sushant Gaha Magar
                  </div>
                  <div className="text-blue-400 text-xs sm:text-sm font-medium tracking-wide mb-3" itemProp="jobTitle">
                    Founder & WordPress Developer
                  </div>
                  
                  {/* Subtle placeholder indicator */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[11px] font-mono">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>[FOUNDER PROFILE IMAGE — SUSHANT GAHA MAGAR]</span>
                  </div>
                </div>

                {/* Bottom Metadata in Image Frame */}
                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400 z-10">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400" />
                    <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="addressCountry">Nepal</span>
                    </span>
                  </span>
                  <span className="font-mono text-[11px] text-gray-400">WebSathi Founder</span>
                </div>
              </div>

              {/* Founder Meta Details under Portrait */}
              <div className="mt-5 pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-base font-bold text-[#111111]">Sushant Gaha Magar</h4>
                    <p className="text-xs text-gray-500 font-medium">Founder & Web Designer / WordPress Developer</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-100">
                    Nepal
                  </span>
                </div>

                {/* Connect with Founder Area */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                    CONNECT WITH THE FOUNDER
                  </div>
                  <div className="flex items-center gap-2.5">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://www.facebook.com/sushant.gaha.magar1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with Sushant Gaha Magar on Facebook (opens in a new tab)"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#2563EB] text-[#111111] hover:text-[#2563EB] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                    >
                      <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </motion.a>
                    
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://www.instagram.com/mgr_sushant1/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with Sushant Gaha Magar on Instagram (opens in a new tab)"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#E1306C] text-[#111111] hover:text-[#E1306C] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-200 cursor-pointer"
                    >
                      <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </motion.a>
                  </div>
                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Story & Vision (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            
            {/* PART 1: THE STORY BEHIND WEBSATHI */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3.5">
                <span className="w-6 h-0.5 bg-[#2563EB]"></span>
                <span>THE STORY BEHIND WEBSATHI</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-6">
                BUILT WITH PASSION.{' '}
                <span className="text-[#2563EB]">DESIGNED FOR THE DIGITAL WORLD.</span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
                <p>
                  <strong className="font-semibold text-[#111111]" itemProp="name">WebSathi</strong> is a modern web design and development brand founded by <span className="font-semibold text-[#111111]">Sushant Gaha Magar</span> on <span className="font-semibold text-[#2563EB]">June 19, 2025</span>.
                </p>
                <p>
                  What started as a vision to make professional web solutions more accessible has grown into a digital platform focused on creating modern, responsive and user-friendly websites for businesses, organizations and individuals.
                </p>
                <p>
                  WebSathi focuses on combining clean design, practical technology and business-focused solutions to help clients build a stronger and more professional presence online.
                </p>
              </div>

              {/* Official WebSathi Social Link */}
              <div className="mt-6 pt-5 border-t border-[#E5E7EB] flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Official Brand Channel:
                </span>
                <motion.a 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.facebook.com/websathi01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit WebSathi on Facebook (opens in a new tab)"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F4FF] hover:bg-[#E0EAFF] border border-blue-200 text-[#2563EB] text-xs font-semibold transition-all duration-200 cursor-pointer"
                >
                  <Facebook className="w-3.5 h-3.5 fill-[#1877F2] text-[#1877F2]" />
                  <span>WebSathi on Facebook</span>
                  <ExternalLink className="w-3 h-3 text-[#2563EB]" />
                </motion.a>
              </div>
            </div>

            {/* PART 2: MEET THE FOUNDER */}
            <motion.div 
              whileHover={{ borderColor: 'rgba(37, 99, 235, 0.3)' }}
              className="p-6 sm:p-7 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] relative transition-all duration-200"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-2">
                <span className="w-4 h-0.5 bg-[#2563EB]"></span>
                <span>MEET THE FOUNDER</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight mb-3">
                FOUNDED BY SUSHANT GAHA MAGAR
              </h3>

              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-3">
                <strong className="font-semibold text-[#111111]">Sushant Gaha Magar</strong> is the founder of WebSathi and a Junior WordPress Developer & Web Designer from Nepal.
              </p>
              
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-3">
                With a passion for web design, WordPress development and digital creativity, he founded WebSathi with a simple goal: to help businesses and individuals create a professional and meaningful presence on the web.
              </p>
              
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                Through WebSathi, Sushant focuses on building modern, responsive and user-friendly websites while maintaining a practical, affordable and client-focused approach.
              </p>
            </motion.div>

          </motion.div>

        </div>

        {/* FOUNDER HIGHLIGHTS (4 Small Premium Cards) */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {founderHighlights.map((item, idx) => (
              <motion.div 
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, borderColor: 'rgba(37, 99, 235, 0.4)', scale: 1.02 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] transition-all duration-200 flex flex-col justify-between relative group cursor-default shadow-2xs hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#2563EB] transition-colors">
                    {item.num}
                  </span>
                  <span className="text-[11px] font-bold tracking-widest text-[#2563EB] uppercase font-mono">
                    {item.label}
                  </span>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-[#111111] tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TIMELINE ELEMENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 bg-[#F7F8FA] border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 relative shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-2">
                <span className="w-5 h-0.5 bg-[#2563EB]"></span>
                <span>JOURNEY & MILESTONES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
                THE WEBSATHI TIMELINE
              </h3>
            </div>
            <span className="text-xs font-mono text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-[#E5E7EB] self-start md:self-auto shadow-2xs">
              EST. JUNE 19, 2025 → PRESENT
            </span>
          </div>

          {/* Timeline Track */}
          <div className="relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-5 left-8 right-8 h-0.5 bg-gradient-to-r from-[#2563EB] via-blue-400 to-indigo-300 opacity-40 z-0" />
            
            {/* Timeline Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {timelineItems.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col relative pl-6 md:pl-0"
                >
                  
                  {/* Vertical connecting line for mobile */}
                  <div className="md:hidden absolute left-2 top-3 bottom-0 w-0.5 bg-blue-200" />

                  {/* Marker Dot */}
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      whileHover={{ scale: 1.4 }}
                      className="w-4 h-4 rounded-full bg-[#2563EB] border-4 border-white shadow-sm flex-shrink-0 relative -left-6 md:left-0 transition-transform" 
                    />
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-mono font-bold tracking-wide">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#111111] mb-1.5">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM SECTION CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#111827] via-[#1E293B] to-[#0F172A] text-white border border-gray-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>START YOUR DIGITAL JOURNEY</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white">
              LET'S BUILD SOMETHING DIGITAL.
            </h3>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
              Have an idea for your website? Let's turn it into a modern digital experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#portfolio"
                onClick={scrollToPortfolio}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

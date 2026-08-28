import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Headphones, 
  CheckCircle2,
  Clock,
  ThumbsUp,
  HeartHandshake
} from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Communication',
      tagline: 'Transparent & Responsive',
      desc: 'No confusing technical jargon. Direct, clear updates via WhatsApp, phone calls, or Google Meet throughout each stage of your project.',
      icon: MessageSquare,
      points: ['Daily development progress updates', 'Prompt response to revision requests', 'Clear project timelines from day one']
    },
    {
      title: 'Reliability',
      tagline: 'On-Time Project Delivery',
      desc: 'Consistent execution backed by dependable delivery schedules. We respect your business launch dates and commitments in Nepal.',
      icon: ShieldCheck,
      points: ['Honest pricing with zero hidden fees', 'Verified milestone check-ins', 'Stable, secure WordPress installations']
    },
    {
      title: 'Design Quality',
      tagline: 'Modern & Brand-Aligned',
      desc: 'Carefully tailored visual layouts with high-contrast typography, generous negative space, and mobile-friendly usability.',
      icon: Sparkles,
      points: ['Pixel-perfect mobile adaptation', 'Clean, modern editorial layouts', 'Fast-loading, optimized media assets']
    },
    {
      title: 'Support',
      tagline: 'Continuous Post-Launch Care',
      desc: 'Our relationship does not end at website launch. We provide ongoing assistance, backups, security checkups, and administrative training.',
      icon: Headphones,
      points: ['Walkthrough video tutorial for admin editing', 'Security update monitoring', 'Quick bug resolution & assistance']
    }
  ];

  return (
    <section className="py-24 bg-[#F7F8FA] border-t border-[#E5E7EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
            <span>CORE VALUES &amp; TRUST</span>
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-4">
            WORKING TO BUILD LONG-TERM CLIENT RELATIONSHIPS.
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280]">
            Building websites with high craftsmanship, honest ethics, and genuine client care across every project.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.45)' }}
                className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center mb-6 shadow-xs transition-transform hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-bold text-[#2563EB] mb-3">
                    {item.tagline}
                  </div>

                  <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#111111] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

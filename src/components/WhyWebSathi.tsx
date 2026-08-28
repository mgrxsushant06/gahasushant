import React from 'react';
import { motion } from 'motion/react';
import { whyChooseReasons, realStats } from '../data/servicesData';
import { 
  Sparkles, 
  Smartphone, 
  Flame, 
  ShieldCheck, 
  Search, 
  HeartHandshake,
  CheckCircle2,
  TrendingUp,
  Award
} from 'lucide-react';

export const WhyWebSathi: React.FC = () => {
  const getFeatureIcon = (num: string) => {
    switch (num) {
      case '01': return <Sparkles className="w-6 h-6 text-[#2563EB]" />;
      case '02': return <Smartphone className="w-6 h-6 text-indigo-600" />;
      case '03': return <Flame className="w-6 h-6 text-amber-600" />;
      case '04': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case '05': return <Search className="w-6 h-6 text-purple-600" />;
      case '06': return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      default: return <Sparkles className="w-6 h-6 text-[#2563EB]" />;
    }
  };

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
            <span>WHY WEBSATHI</span>
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-4">
            WHY CLIENTS CHOOSE TO WORK WITH ME.
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280]">
            Combining technical craftsmanship with transparent communication and realistic pricing tailored for Nepali startups, businesses, and publishers.
          </p>
        </motion.div>

        {/* 6 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyChooseReasons.map((reason, idx) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.4)', scale: 1.01 }}
              className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7F8FA] text-[#111111] group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors border border-[#E5E7EB] font-mono">
                    {reason.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {getFeatureIcon(reason.number)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#111111] tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors">
                  {reason.title}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center gap-2 text-xs font-bold text-[#111111]">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                <span>Verified Quality Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Statistics Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white border border-[#E5E7EB] p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]">
            {realStats.map((stat, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`pt-6 lg:pt-0 ${index !== 0 ? 'lg:pl-8' : ''} text-center sm:text-left`}
              >
                <div className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight mb-2 flex items-center justify-center sm:justify-start gap-1 font-mono">
                  <span>{stat.value}</span>
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
                </div>
                <div className="text-sm font-bold text-[#111111] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#6B7280] font-medium">
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

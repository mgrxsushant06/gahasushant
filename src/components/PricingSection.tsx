import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { pricingPackages, packageComparisonPoints } from '../data/packagesData';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Server, 
  Key, 
  ShieldCheck, 
  Zap, 
  HelpCircle,
  Calculator
} from 'lucide-react';
import { PricingMicroWebBg } from './MicroWebBackground';

interface PricingSectionProps {
  onSelectPackage: (packageName: string, price: string) => void;
  onOpenQuickQuote: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage, onOpenQuickQuote }) => {
  const [showMatrix, setShowMatrix] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Micro-Web Background System */}
      <PricingMicroWebBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            <span>WEBSITE PACKAGES</span>
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-4">
            PROFESSIONAL WEBSITES WITHOUT THE AGENCY-LEVEL PRICE TAG.
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280]">
            Transparent pricing designed for Nepali businesses, startups, and individuals with no hidden hosting charges or surprise fees.
          </p>
        </motion.div>

        {/* 2 Main Packages Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {pricingPackages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isRecommended
                  ? 'bg-[#111111] text-white shadow-2xl border-2 border-[#2563EB]'
                  : 'bg-[#F7F8FA] border border-[#E5E7EB] text-[#111111] shadow-md hover:shadow-xl'
              }`}
            >
              {/* Badge for Recommended Package */}
              {pkg.badge && (
                <div className="absolute -top-4 right-8">
                  <motion.span 
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-1.5 rounded-full bg-[#2563EB] text-white text-xs font-black uppercase tracking-wider shadow-md inline-flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{pkg.badge}</span>
                  </motion.span>
                </div>
              )}

              <div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2 text-[#2563EB] font-mono">
                  {pkg.packageNumber}
                </div>

                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    {pkg.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-gray-200/20">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight font-mono">
                      {pkg.price}
                    </span>
                    <span className={`text-xs font-medium ${pkg.isRecommended ? 'text-gray-400' : 'text-gray-500'}`}>
                      / {pkg.period}
                    </span>
                  </div>
                  <p className={`text-xs mt-3 leading-relaxed ${pkg.isRecommended ? 'text-gray-300' : 'text-[#6B7280]'}`}>
                    {pkg.tagline}
                  </p>
                </div>

                {/* Target Audience Note */}
                <div className={`p-4 rounded-2xl mb-6 text-xs ${
                  pkg.isRecommended ? 'bg-white/10 text-gray-200 border border-white/10' : 'bg-white text-[#111111] border border-[#E5E7EB]'
                }`}>
                  <span className="font-bold">Ideal for: </span>
                  {pkg.targetAudience}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className={`text-xs font-bold uppercase tracking-wider ${pkg.isRecommended ? 'text-gray-400' : 'text-gray-500'}`}>
                    What is Included:
                  </div>
                  {pkg.includedFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Important Hosting Condition Note */}
                {pkg.importantCondition && (
                  <div className={`p-4 rounded-2xl mb-8 text-xs font-medium border ${
                    pkg.isRecommended
                      ? 'bg-blue-500/10 border-blue-400/30 text-blue-200'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}>
                    <div className="font-bold mb-1 flex items-center gap-1.5">
                      <Key className="w-3.5 h-3.5" />
                      <span>Hosting &amp; Domain Setup:</span>
                    </div>
                    {pkg.importantCondition}
                  </div>
                )}
              </div>

              {/* Package CTA */}
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                onClick={() => onSelectPackage(pkg.name, pkg.price)}
                className={`w-full py-4 rounded-2xl text-center font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                  pkg.isRecommended
                    ? 'bg-[#2563EB] hover:bg-blue-600 text-white'
                    : 'bg-[#111111] hover:bg-[#2563EB] text-white'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Ownership Comparison Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#F7F8FA] border border-[#E5E7EB] text-center mb-8 shadow-sm"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 font-mono">
            <Server className="w-4 h-4" />
            <span>Infrastructure Recommendation</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-[#111111] mb-2">
            "Need full ownership and control? The Professional package is recommended."
          </h4>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-2xl mx-auto mb-4">
            With the Professional package, your website is hosted on your own independent cPanel account with full root ownership, enabling you to manage emails, databases, and custom domains with complete freedom.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMatrix(!showMatrix)}
              className="px-5 py-2.5 rounded-xl border border-[#E5E7EB] bg-white text-xs sm:text-sm font-bold text-[#111111] hover:bg-[#F7F8FA] transition-colors shadow-xs cursor-pointer"
            >
              {showMatrix ? 'Hide Full Feature Comparison' : 'View Full Feature Comparison Table'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenQuickQuote}
              className="px-5 py-2.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200 text-xs sm:text-sm font-bold hover:bg-blue-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Need Custom Requirements? Calculate Quote</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Comparison Matrix Table */}
        <AnimatePresence>
          {showMatrix && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#E5E7EB] shadow-xl overflow-hidden mb-8"
            >
              <div className="p-6 bg-[#111111] text-white flex items-center justify-between">
                <h4 className="text-base font-bold">Side-by-Side Package Matrix</h4>
                <span className="text-xs text-gray-400 font-mono">All prices in Nepali Rupees (NPR)</span>
              </div>

              <div className="divide-y divide-[#E5E7EB]">
                {packageComparisonPoints.map((row, idx) => (
                  <div key={idx} className="p-4 grid grid-cols-12 gap-4 items-center text-xs sm:text-sm hover:bg-gray-50/70 transition-colors">
                    <div className="col-span-6 font-semibold text-[#111111]">
                      {row.feature}
                    </div>
                    <div className="col-span-3 text-center text-[#6B7280]">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" /> : '—'
                      ) : (
                        <span className="font-medium text-[#111111]">{row.starter}</span>
                      )}
                    </div>
                    <div className="col-span-3 text-center font-bold text-[#2563EB]">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <CheckCircle2 className="w-4 h-4 text-[#2563EB] mx-auto" /> : '—'
                      ) : (
                        <span>{row.pro}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

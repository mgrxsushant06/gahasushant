import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { DarkCtaMicroWebBg } from './MicroWebBackground';

export const DarkCtaSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0B0B] text-white relative overflow-hidden border-y border-gray-800">
      {/* Micro-Web Background System */}
      <DarkCtaMicroWebBg />

      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Let's Create Something Extraordinary</span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6 max-w-4xl mx-auto"
        >
          READY TO BUILD YOUR NEXT WEBSITE?
        </motion.h2>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Have an idea, business or project that needs a professional online presence? Let's turn it into a modern website.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base backdrop-blur-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>View Portfolio</span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </motion.a>
        </motion.div>

        {/* Direct WhatsApp & Call Quick Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-6 p-3 px-6 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 shadow-md"
        >
          <a 
            href="https://wa.me/9779769316767?text=Hi%20Sushant,%20I%20would%20like%20to%20discuss%20a%20website%20project." 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp: +977 9769316767</span>
          </a>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <a href="tel:+9779769316767" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call: 9769316767</span>
          </a>
          <span className="text-gray-700 hidden sm:inline">•</span>
          <span className="text-gray-400 font-medium font-mono">Location: Butwal, Nepal</span>
        </motion.div>

      </div>
    </section>
  );
};

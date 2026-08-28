import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqList } from '../data/faqData';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { GeneralMicroWebBg } from './MicroWebBackground';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Pricing & Delivery', 'Technical', 'General', 'Support'];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = activeCategory === 'All'
    ? faqList
    : faqList.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#F7F8FA] border-t border-[#E5E7EB] relative overflow-hidden">
      {/* Micro-Web Background System */}
      <GeneralMicroWebBg variant="faq" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3">
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-4">
            CLEAR ANSWERS TO YOUR QUESTIONS.
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280]">
            Everything you need to know about website design costs, WordPress management, timelines, and hosting in Nepal.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'bg-white text-[#111111] border border-[#E5E7EB] hover:bg-[#F7F8FA]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Accordion List with AnimatePresence */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaq === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-[#2563EB] shadow-md' 
                    : 'bg-white border-[#E5E7EB] hover:border-[#2563EB]/40 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-gray-400 font-mono">
                      Q.
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#111111]">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#2563EB] text-white' : 'bg-[#F7F8FA] text-[#111111] border border-[#E5E7EB]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 text-sm text-[#6B7280] leading-relaxed border-t border-[#E5E7EB]"
                    >
                      <p className="pl-6 border-l-2 border-[#2563EB]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs"
        >
          <div className="text-xs sm:text-sm text-[#111111] font-semibold text-center sm:text-left">
            Have a question that is not listed here?
          </div>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/9779769316767?text=Hi%20Sushant,%20I%20have%20a%20question%20about%20your%20website%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp Directly</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

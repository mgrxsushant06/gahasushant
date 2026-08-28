import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { insightArticles } from '../data/insightsData';
import { InsightArticle } from '../types';
import { BookOpen, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GeneralMicroWebBg } from './MicroWebBackground';

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Micro-Web Background System */}
      <GeneralMicroWebBg variant="insights" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3">
              <span className="w-6 h-0.5 bg-[#2563EB]"></span>
              <span>INSIGHTS &amp; GUIDES</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              WEB DESIGN &amp; DIGITAL TIPS.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6B7280] max-w-md">
            Helpful guides, cost benchmarks, and practical advice on growing your business online in Nepal.
          </p>
        </motion.div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.45)' }}
              onClick={() => setSelectedArticle(article)}
              className="p-8 rounded-3xl bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white text-[#2563EB] text-xs font-bold border border-[#E5E7EB] shadow-xs">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium font-mono">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#111111] tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#2563EB]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E5E7EB]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold border border-blue-100 font-mono">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#111111] mb-4 tracking-tight leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="space-y-4 text-sm text-[#6B7280] leading-relaxed mb-8">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-100 mb-6">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  <span>Key Takeaways for Nepal Businesses</span>
                </h4>
                <div className="space-y-2">
                  {selectedArticle.keyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-blue-950">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                <span className="text-xs text-[#6B7280] font-medium font-mono">
                  Author: Sushant Gaha Magar • WebSathi
                </span>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-[#111111] text-white font-bold text-xs rounded-xl hover:bg-[#2563EB] transition-colors cursor-pointer"
                >
                  Close Article
                </motion.button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

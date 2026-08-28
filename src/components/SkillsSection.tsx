import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsList } from '../data/servicesData';
import { 
  Flame, 
  Layers, 
  Smartphone, 
  Code, 
  Terminal, 
  Box, 
  Palette, 
  Search, 
  Zap, 
  Image,
  CheckCircle2
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'CMS & Builders', 'Frontend Code', 'Design & UX', 'Optimization & SEO'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-500" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-indigo-500" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-500" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-yellow-500" />;
      case 'Box': return <Box className="w-5 h-5 text-purple-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-500" />;
      case 'Search': return <Search className="w-5 h-5 text-cyan-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-orange-500" />;
      case 'Image': return <Image className="w-5 h-5 text-teal-500" />;
      default: return <Flame className="w-5 h-5 text-blue-500" />;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skillsList
    : skillsList.filter(skill => skill.category === activeCategory);

  return (
    <section className="py-20 bg-[#F7F8FA] border-t border-[#E5E7EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase mb-3">
              <span className="w-6 h-0.5 bg-[#2563EB]"></span>
              <span>MY EXPERTISE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              TOOLS &amp; TECHNOLOGIES I WORK WITH
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-[#E5E7EB] shadow-xs">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111] hover:bg-[#F7F8FA]'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards Grid with Stagger & Layout Transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, borderColor: 'rgba(37, 99, 235, 0.5)', scale: 1.01 }}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all duration-300 group cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50/50 transition-all duration-300">
                      {getIcon(skill.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-[#6B7280]">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold border border-blue-100 font-mono">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-4 min-h-[36px]">
                  {skill.description}
                </p>

                {/* Proficiency Bar with animated width on in-view */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-[#6B7280]">Proficiency</span>
                    <span className="text-[#111111] font-mono">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioProjects } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { PortfolioMicroWebBg } from './MicroWebBackground';
import { 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Eye, 
  CheckCircle2, 
  Globe, 
  Sparkles,
  Calendar,
  Tag,
  Filter
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForQuote: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'News Portal',
    'Business',
    'Corporate',
    'Portfolio',
    'E-Commerce',
    'Other'
  ];

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Micro-Web Background System */}
      <PortfolioMicroWebBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              <span>SELECTED WORK</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight">
              PROJECTS I'VE WORKED ON.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6B7280] max-w-md">
            A curated showcase of real-world WordPress websites, news portals, and business platforms built for clients in Nepal and international markets.
          </p>
        </motion.div>

        {/* Filter Buttons Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2 mb-12 bg-[#F7F8FA] p-2 rounded-2xl border border-[#E5E7EB] w-fit shadow-xs"
        >
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </div>
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? portfolioProjects.length 
              : portfolioProjects.filter(p => p.category === cat).length;
            
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#111111] hover:bg-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-200 text-[#111111]'
                }`}>
                  {count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Portfolio Cards Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, borderColor: 'rgba(37, 99, 235, 0.45)' }}
                className="group rounded-3xl bg-[#F7F8FA] border border-[#E5E7EB] overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-default"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.category} by Sushant Gaha Magar`}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-bold border border-white/20">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111111] text-xs font-bold shadow-xs font-mono">
                        {project.year}
                      </span>
                    </div>

                    {/* Quick Action Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 backdrop-blur-[2px]">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-xl bg-white text-[#111111] text-xs font-bold hover:bg-gray-100 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#2563EB]" />
                        <span>Quick View</span>
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Site</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#2563EB] transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-xs text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Services Provided Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.services.slice(0, 4).map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#E5E7EB] text-[11px] font-semibold text-[#111111]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 py-4 bg-white border-t border-[#E5E7EB] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#111111] hover:text-[#2563EB] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Project Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Project →</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-3xl bg-[#F7F8FA] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-sm"
        >
          <div>
            <h4 className="text-lg font-bold text-[#111111] mb-1">
              Have a similar website project in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              I can build a custom news portal, corporate brand page, or business store suited to your exact specifications.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="px-6 py-3.5 rounded-xl bg-[#111111] text-white text-xs sm:text-sm font-bold hover:bg-[#2563EB] transition-colors shrink-0 flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>Request a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold border border-blue-100 font-mono">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-gray-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-2">
                {selectedProject.name}
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.metrics && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl mb-6">
                  <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                    Performance &amp; UX Outcome
                  </div>
                  <div className="text-xs text-emerald-800">
                    {selectedProject.metrics}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Services &amp; Technologies Provided
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 bg-[#2563EB] hover:bg-blue-700 text-white text-center font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  onClick={() => {
                    onSelectProjectForQuote(selectedProject.name);
                    setSelectedProject(null);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] hover:bg-gray-800 text-white text-center font-bold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Build Site Like This
                </motion.a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

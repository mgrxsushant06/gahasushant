import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { mainServices, additionalServices } from '../data/servicesData';
import { 
  LayoutGrid, 
  Palette, 
  Layers, 
  Briefcase, 
  Newspaper, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  RefreshCw,
  FileCode,
  UserCheck,
  Wrench,
  Search
} from 'lucide-react';
import { ServiceItem } from '../types';
import { ServicesMicroWebBg } from './MicroWebBackground';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-[#2563EB]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-indigo-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-purple-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-emerald-600" />;
      case 'Newspaper': return <Newspaper className="w-6 h-6 text-rose-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-amber-600" />;
      default: return <LayoutGrid className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Micro-Web Background System */}
      <ServicesMicroWebBg />

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
              <span>WHAT I DO</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight max-w-3xl leading-tight">
              WEBSITE SOLUTIONS BUILT AROUND YOUR NEEDS.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#6B7280] max-w-md">
            From regional news portals to modern corporate portfolios, every build is crafted with precision, responsiveness, and clear conversion goals.
          </p>
        </motion.div>

        {/* 6 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, borderColor: 'rgba(37, 99, 235, 0.5)' }}
              className="p-8 rounded-3xl bg-[#F7F8FA] border border-[#E5E7EB] hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-gray-400 group-hover:text-[#2563EB] transition-colors font-mono">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50/50 transition-all duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#111111] tracking-tight mb-3 group-hover:text-[#2563EB] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Key Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-medium text-[#111111]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-bold text-[#111111] hover:text-[#2563EB] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  onClick={() => onSelectService(service.title)}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E5E7EB] text-xs font-bold text-[#111111] group-hover:bg-[#2563EB] group-hover:text-white group-hover:border-[#2563EB] transition-colors shadow-xs cursor-pointer"
                >
                  Inquire Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              Additional Specialized Services
            </h3>
            <p className="text-sm text-gray-400">
              Need specific adjustments, maintenance, or targeted speed improvements? I offer tailored solutions for existing websites as well.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((addService, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all group cursor-pointer"
                onClick={() => onSelectService(addService.name)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {addService.name}
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {addService.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Service Detail Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedServiceModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-[#2563EB] tracking-widest uppercase font-mono">
                  {selectedServiceModal.number} • Service Details
                </span>
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                {selectedServiceModal.title}
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {selectedServiceModal.fullDesc}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Deliverables Included
                </h4>
                <div className="space-y-2">
                  {selectedServiceModal.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-900 mb-6">
                <span className="font-bold">Best For: </span>
                {selectedServiceModal.bestFor}
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  onClick={() => {
                    onSelectService(selectedServiceModal.title);
                    setSelectedServiceModal(null);
                  }}
                  className="flex-1 py-3 bg-[#111111] hover:bg-[#2563EB] text-white text-center font-bold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Inquire for this Service
                </motion.a>
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-5 py-3 border border-gray-300 text-gray-700 font-bold text-sm rounded-xl hover:bg-gray-50 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

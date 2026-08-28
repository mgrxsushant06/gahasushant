import React, { useState } from 'react';
import { motion } from 'motion/react';
import { processSteps } from '../data/servicesData';
import { 
  Search, 
  Compass, 
  Layout, 
  Cpu, 
  CheckCircle, 
  Rocket, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ProcessMicroWebBg } from './MicroWebBackground';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5 text-[#2563EB]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'Layout': return <Layout className="w-5 h-5 text-purple-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-amber-600" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-rose-600" />;
      default: return <Search className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#F7F8FA] border-t border-[#E5E7EB] relative overflow-hidden">
      {/* Micro-Web Background System */}
      <ProcessMicroWebBg />

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
            <span>HOW I WORK</span>
            <span className="w-6 h-0.5 bg-[#2563EB]"></span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-tight mb-4">
            FROM IDEA TO LAUNCH.
          </h2>

          <p className="text-sm sm:text-base text-[#6B7280]">
            A structured, transparent 6-step roadmap engineered to eliminate surprises and deliver your WordPress website on schedule.
          </p>
        </motion.div>

        {/* Desktop Process Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setActiveStep(idx)}
              className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
                activeStep === idx
                  ? 'bg-white border-2 border-[#2563EB] shadow-xl'
                  : 'bg-white border border-[#E5E7EB] hover:border-[#2563EB]/40 hover:shadow-md'
              }`}
            >
              {/* Active Step Indicator Dot */}
              {activeStep === idx && (
                <div className="absolute top-4 right-4">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2563EB]"></span>
                  </span>
                </div>
              )}

              <div>
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#111111] font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F8FA] border border-[#E5E7EB] flex items-center justify-center transition-transform hover:scale-110">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111111] tracking-tight mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#2563EB] mb-3">
                  {step.tagline}
                </div>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[#E5E7EB] space-y-1.5">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1 flex items-center justify-between font-mono">
                  <span>Deliverables</span>
                  <span className="text-[#111111] font-semibold">{step.duration}</span>
                </div>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-xs text-[#111111] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span className="truncate">{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step Progress Highlight Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-md flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#111111]">
                Average Timeline: 5 to 10 Working Days
              </h4>
              <p className="text-xs text-[#6B7280]">
                Fast turnarounds with daily communication and preview links throughout development.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#pricing"
            className="px-6 py-3 rounded-xl bg-[#111111] text-white text-xs sm:text-sm font-bold hover:bg-[#2563EB] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <span>View Website Packages</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

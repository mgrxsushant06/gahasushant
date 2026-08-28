import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Smartphone, 
  Search, 
  Zap, 
  ShieldCheck, 
  Layers,
  HeartHandshake
} from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { label: 'WordPress Specialist', desc: 'Custom themes & Elementor', icon: Flame, color: 'text-amber-600 bg-amber-50' },
    { label: 'Responsive Design', desc: 'Flawless on phone & desktop', icon: Smartphone, color: 'text-blue-600 bg-blue-50' },
    { label: 'SEO-Friendly', desc: 'Structured for Google search', icon: Search, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'Mobile-First', desc: 'Ultra-fast 4G loading speeds', icon: Zap, color: 'text-purple-600 bg-purple-50' },
    { label: 'Affordable Solutions', desc: 'Transparent Nepal rates', icon: ShieldCheck, color: 'text-rose-600 bg-rose-50' },
  ];

  return (
    <section className="bg-white border-y border-[#E5E7EB] py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#6B7280] uppercase">
            DESIGNING DIGITAL EXPERIENCES FOR BUSINESSES THAT WANT TO GROW.
          </p>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-[#E5E7EB] bg-[#F7F8FA] hover:bg-white hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${item.color} transition-transform group-hover:scale-110`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-[#111111] truncate">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#6B7280] truncate">
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

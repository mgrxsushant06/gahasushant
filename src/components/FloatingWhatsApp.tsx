import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed bottom-[74px] right-[16px] md:bottom-[90px] md:right-[26px] z-40 flex items-center gap-3"
    >
      {/* Floating Tooltip bubble on desktop */}
      <motion.a
        whileHover={{ scale: 1.04, x: -2 }}
        href="https://wa.me/9779769316767?text=Hi%20Sushant,%20I%20am%20interested%20in%20a%20website%20project%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gray-200/90 shadow-lg text-xs font-bold text-gray-800 hover:text-emerald-700 hover:border-emerald-300 transition-all cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span>Chat on WhatsApp</span>
      </motion.a>

      {/* Main Floating Button with subtle float & click effects */}
      <motion.a
        whileHover={{ scale: 1.12, rotate: 6 }}
        whileTap={{ scale: 0.92 }}
        href="https://wa.me/9779769316767?text=Hi%20Sushant,%20I%20am%20interested%20in%20a%20website%20project%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Sushant Gaha Magar"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/35 transition-colors cursor-pointer"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </motion.div>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScroll = 
        window.scrollY || 
        window.pageYOffset || 
        document.documentElement.scrollTop || 
        document.body.scrollTop || 
        0;

      if (currentScroll > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    window.addEventListener('resize', toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // 1. Try scrollIntoView on the home section
    const homeEl = document.getElementById('home');
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: 'smooth' });
    }

    // 2. Window smooth scroll fallback
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch {
      window.scrollTo(0, 0);
    }

    // 3. Document / Body scroll fallback
    if (document.documentElement) {
      try {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        document.documentElement.scrollTop = 0;
      }
    }
    if (document.body) {
      try {
        document.body.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        document.body.scrollTop = 0;
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-[20px] right-[20px] md:bottom-[30px] md:right-[30px] z-50 pointer-events-auto"
          id="btn-back-to-top-wrapper"
        >
          <div className="relative group">
            {/* Tooltip on Desktop */}
            <div className="hidden md:block absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#111111] text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
              Back to Top
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#111111]" />
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={scrollToTop}
              aria-label="Back to Top"
              title="Back to Top"
              className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#2563EB] hover:bg-blue-600 active:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-[#2563EB]/35 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 cursor-pointer"
              id="btn-back-to-top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300 stroke-[2.5]" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

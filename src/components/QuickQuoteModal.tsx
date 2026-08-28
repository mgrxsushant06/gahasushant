import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, CheckCircle2, ArrowRight, X, Sparkles, MessageCircle } from 'lucide-react';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOptionForContact: (details: string, estimatedCost: string) => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  onSelectOptionForContact
}) => {
  const [selectedBase, setSelectedBase] = useState<'starter' | 'pro'>('pro');
  const [websiteType, setWebsiteType] = useState<string>('Business');
  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    seo: true,
    speed: true,
    ecommerce: false,
    contentUpload: false
  });

  const basePrice = selectedBase === 'starter' ? 10000 : 20000;
  
  let addonTotal = 0;
  if (addons.ecommerce) addonTotal += 5000;
  if (addons.contentUpload) addonTotal += 2500;

  const totalPrice = basePrice + addonTotal;

  const handleProceed = () => {
    const details = `Estimated package: ${selectedBase.toUpperCase()} (${websiteType}) with add-ons: ${
      Object.entries(addons)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(', ') || 'None'
    }`;
    const costStr = `NPR ${totalPrice.toLocaleString()}`;
    onSelectOptionForContact(details, costStr);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E7EB] max-h-[90vh] overflow-y-auto"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex items-center justify-center font-bold shadow-xs">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#111111]">
                    Website Cost Calculator
                  </h3>
                  <p className="text-xs text-[#6B7280]">
                    Transparent estimate based on WebSathi standard packages
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#F7F8FA] border border-[#E5E7EB] text-[#111111] hover:bg-gray-200 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 1. Base Package Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                1. Select Base Plan
              </label>
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedBase('starter')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedBase === 'starter'
                      ? 'border-[#2563EB] bg-blue-50/40 shadow-xs'
                      : 'border-[#E5E7EB] hover:border-gray-300'
                  }`}
                >
                  <div className="text-xs font-bold text-[#6B7280] uppercase font-mono">Starter Package</div>
                  <div className="text-xl font-black text-[#111111] font-mono">NPR 10,000</div>
                  <div className="text-[11px] text-[#6B7280] mt-1">Managed Hosting Setup</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedBase('pro')}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedBase === 'pro'
                      ? 'border-[#2563EB] bg-blue-50/40 shadow-xs'
                      : 'border-[#E5E7EB] hover:border-gray-300'
                  }`}
                >
                  <div className="text-xs font-bold text-[#2563EB] uppercase flex items-center gap-1 font-mono">
                    <span>Professional</span>
                    <span className="text-[10px] bg-blue-100 px-1.5 py-0.2 rounded-full">Recommended</span>
                  </div>
                  <div className="text-xl font-black text-[#111111] font-mono">NPR 20,000</div>
                  <div className="text-[11px] text-[#6B7280] mt-1">Independent cPanel &amp; Domain</div>
                </motion.div>
              </div>
            </div>

            {/* 2. Website Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                2. Website Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Business', 'News Portal', 'Portfolio', 'E-Commerce'].map((type) => (
                  <motion.button
                    key={type}
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setWebsiteType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      websiteType === type
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'bg-[#F7F8FA] text-[#111111] border border-[#E5E7EB] hover:bg-gray-100'
                    }`}
                  >
                    {type}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* 3. Optional Features / Add-ons */}
            <div className="mb-6 space-y-2">
              <label className="block text-xs font-bold text-[#111111] uppercase tracking-wider mb-2">
                3. Included &amp; Optional Add-ons
              </label>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-xs">
                <span className="font-semibold text-[#111111]">100% Mobile Responsive &amp; Speed Caching</span>
                <span className="font-bold text-emerald-600">Included Free</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8FA] border border-[#E5E7EB] text-xs">
                <span className="font-semibold text-[#111111]">Basic SEO Meta Setup &amp; Sitemaps</span>
                <span className="font-bold text-emerald-600">Included Free</span>
              </div>

              <label className="flex items-center justify-between p-3 rounded-xl border border-[#E5E7EB] text-xs cursor-pointer hover:bg-[#F7F8FA]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addons.ecommerce}
                    onChange={(e) => setAddons({ ...addons, ecommerce: e.target.checked })}
                    className="w-4 h-4 text-[#2563EB] rounded-sm"
                  />
                  <span className="font-semibold text-[#111111]">WooCommerce Store + Payment Gateway Setup</span>
                </div>
                <span className="font-bold text-[#111111] font-mono">+NPR 5,000</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-[#E5E7EB] text-xs cursor-pointer hover:bg-[#F7F8FA]">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addons.contentUpload}
                    onChange={(e) => setAddons({ ...addons, contentUpload: e.target.checked })}
                    className="w-4 h-4 text-[#2563EB] rounded-sm"
                  />
                  <span className="font-semibold text-[#111111]">Bulk Content &amp; Article Upload Assistance</span>
                </div>
                <span className="font-bold text-[#111111] font-mono">+NPR 2,500</span>
              </label>
            </div>

            {/* Total Price Summary Box */}
            <div className="p-5 rounded-2xl bg-[#111111] text-white flex items-center justify-between mb-6 shadow-md">
              <div>
                <div className="text-xs text-gray-400 font-bold uppercase font-mono">Estimated Investment</div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  NPR {totalPrice.toLocaleString()}
                </div>
              </div>
              <div className="text-right text-[11px] text-gray-400">
                <div>No Hidden Charges</div>
                <div className="text-emerald-400 font-semibold">Includes Launch Support</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleProceed}
                className="flex-1 py-3.5 bg-[#2563EB] hover:bg-blue-600 text-white text-center font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Proceed with this Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/9779769316767?text=${encodeURIComponent(
                  `Hi Sushant, I used your website calculator. Estimated package: ${selectedBase.toUpperCase()} (${websiteType}) ~ NPR ${totalPrice.toLocaleString()}. Let's discuss!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs cursor-pointer"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

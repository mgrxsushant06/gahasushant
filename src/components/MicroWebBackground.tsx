import React from 'react';

// Common reusable micro-elements
export const MicroDotGrid: React.FC<{ className?: string; opacity?: string }> = ({ 
  className = '', 
  opacity = 'opacity-5 md:opacity-8' 
}) => (
  <svg 
    className={`absolute pointer-events-none select-none ${opacity} ${className}`} 
    width="100%" 
    height="100%" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="micro-grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="#2563EB" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#micro-grid-pattern)" />
  </svg>
);

// 1. HERO COMPOSITION
export const HeroMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Abstract Tech Dot Matrix */}
      <MicroDotGrid opacity="opacity-[0.04] md:opacity-[0.07]" />

      {/* Floating Mini Browser Window (Top Left) */}
      <div className="absolute -top-6 -left-10 md:top-12 md:left-4 lg:left-12 w-64 md:w-80 h-44 md:h-52 rounded-2xl border border-slate-400/20 bg-white/10 backdrop-blur-[1px] p-3 shadow-xs animate-micro-float-slow opacity-30 md:opacity-40 hidden sm:block">
        {/* Window Header */}
        <div className="flex items-center gap-1.5 pb-2.5 border-b border-slate-300/20 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400/50" />
          <div className="w-2 h-2 rounded-full bg-amber-400/50" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
          <div className="ml-2 w-28 h-2 rounded-full bg-slate-300/30" />
        </div>
        {/* Wireframe Hero Banner */}
        <div className="w-full h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-2.5 flex items-center px-3">
          <div className="w-16 h-2 rounded-full bg-blue-500/30" />
        </div>
        {/* Wireframe Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-slate-300/15 border border-slate-300/20 p-1.5 flex flex-col justify-between">
            <div className="w-6 h-1.5 bg-slate-400/30 rounded-full" />
            <div className="w-full h-1 bg-slate-300/30 rounded-full" />
          </div>
          <div className="h-14 rounded-lg bg-slate-300/15 border border-slate-300/20 p-1.5 flex flex-col justify-between">
            <div className="w-8 h-1.5 bg-slate-400/30 rounded-full" />
            <div className="w-full h-1 bg-slate-300/30 rounded-full" />
          </div>
          <div className="h-14 rounded-lg bg-slate-300/15 border border-slate-300/20 p-1.5 flex flex-col justify-between">
            <div className="w-5 h-1.5 bg-slate-400/30 rounded-full" />
            <div className="w-full h-1 bg-slate-300/30 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Mini Code / Dashboard Fragment (Bottom Right) */}
      <div className="absolute bottom-16 right-4 md:right-16 w-56 md:w-72 h-40 rounded-2xl border border-blue-500/20 bg-white/10 backdrop-blur-[1px] p-3 shadow-xs animate-micro-float-rev opacity-25 md:opacity-35 hidden md:block">
        <div className="flex items-center justify-between pb-2 border-b border-slate-300/20 mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/60" />
            <div className="w-16 h-1.5 rounded-full bg-slate-400/30" />
          </div>
          <div className="w-8 h-3 rounded-full bg-blue-500/20 border border-blue-500/30" />
        </div>
        {/* Code / Wireframe line dashes */}
        <div className="space-y-1.5 font-mono text-[9px] text-slate-400/50">
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 bg-blue-400/40 rounded-full" />
            <span className="w-20 h-1 bg-slate-300/30 rounded-full" />
          </div>
          <div className="flex items-center gap-2 pl-3">
            <span className="w-8 h-1 bg-emerald-400/40 rounded-full" />
            <span className="w-14 h-1 bg-slate-300/30 rounded-full" />
          </div>
          <div className="flex items-center gap-2 pl-3">
            <span className="w-12 h-1 bg-purple-400/40 rounded-full" />
            <span className="w-10 h-1 bg-slate-300/30 rounded-full" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-1 bg-blue-400/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Micro Cursor Pointer & Selection Frame */}
      <div className="absolute top-1/3 left-1/4 -translate-y-8 animate-micro-drift opacity-20 md:opacity-30 hidden lg:block">
        <div className="relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#2563EB]">
            <path d="M4 4L11 20L14 13L21 10L4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(37,99,235,0.15)" />
          </svg>
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#2563EB] animate-micro-pulse" />
        </div>
      </div>

      {/* Connecting Circuit / Node Track */}
      <svg className="absolute top-1/4 right-1/4 w-48 h-32 opacity-15 hidden xl:block" viewBox="0 0 200 120" fill="none">
        <path d="M10 60 H 90 V 20 H 180" stroke="#2563EB" strokeWidth="1" className="animate-micro-dash" />
        <circle cx="10" cy="60" r="3" fill="#2563EB" />
        <circle cx="90" cy="20" r="2.5" fill="#2563EB" />
        <circle cx="180" cy="20" r="3.5" fill="#2563EB" />
      </svg>
    </div>
  );
};

// 2. ABOUT SECTION COMPOSITION
export const AboutMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.03] md:opacity-[0.06]" />

      {/* Wireframe Layout Fragment (Left) */}
      <div className="absolute top-1/4 -left-6 md:left-6 w-52 md:w-64 h-40 rounded-2xl border border-slate-300/30 bg-white/5 p-3 shadow-xs animate-micro-float-slow opacity-20 md:opacity-30 hidden sm:block">
        <div className="flex gap-2 h-full">
          {/* Mini Sidebar */}
          <div className="w-1/4 h-full border-r border-slate-300/20 pr-1.5 space-y-2">
            <div className="w-5 h-5 rounded-md bg-blue-500/20" />
            <div className="w-full h-1 bg-slate-300/30 rounded-full" />
            <div className="w-3/4 h-1 bg-slate-300/30 rounded-full" />
            <div className="w-4/5 h-1 bg-slate-300/30 rounded-full" />
          </div>
          {/* Main Area */}
          <div className="w-3/4 space-y-2 pl-1">
            <div className="w-full h-3 rounded-sm bg-slate-300/20" />
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-12 rounded-sm bg-slate-300/15" />
              <div className="h-12 rounded-sm bg-slate-300/15" />
            </div>
          </div>
        </div>
      </div>

      {/* Mini Code Bracket & Tech Badge Outline (Right) */}
      <div className="absolute bottom-12 right-6 md:right-12 w-48 h-28 rounded-xl border border-blue-500/20 bg-blue-50/10 p-2.5 shadow-xs animate-micro-drift-rev opacity-20 md:opacity-30 hidden md:block">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[10px] font-mono text-blue-500/50 font-bold">&lt;developer /&gt;</div>
          <div className="w-2 h-2 rounded-full bg-emerald-400/40 animate-micro-pulse" />
        </div>
        <div className="space-y-1.5">
          <div className="w-full h-1 bg-slate-300/30 rounded-full" />
          <div className="w-4/5 h-1 bg-slate-300/30 rounded-full" />
          <div className="w-2/3 h-1 bg-blue-400/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

// 3. SERVICES SECTION COMPOSITION
export const ServicesMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.03] md:opacity-[0.06]" />

      {/* Floating Mini Service Card 1: E-commerce wireframe (Top Right) */}
      <div className="absolute top-8 right-4 md:right-10 w-44 md:w-52 h-36 rounded-2xl border border-slate-300/30 bg-white/10 p-2.5 shadow-xs animate-micro-float-slow opacity-25 md:opacity-35 hidden md:block">
        <div className="w-full h-14 rounded-lg bg-slate-300/20 mb-2 flex items-center justify-center">
          <div className="w-5 h-5 rounded-md border border-slate-400/30" />
        </div>
        <div className="w-3/4 h-1.5 bg-slate-400/30 rounded-full mb-1.5" />
        <div className="flex items-center justify-between">
          <div className="w-10 h-1.5 bg-[#2563EB]/40 rounded-full" />
          <div className="w-4 h-4 rounded-md bg-[#2563EB]/20" />
        </div>
      </div>

      {/* Floating Mini Service Card 2: Mobile Device Wireframe (Bottom Left) */}
      <div className="absolute bottom-10 left-4 md:left-12 w-28 md:w-32 h-44 rounded-2xl border border-slate-400/30 bg-white/10 p-2 shadow-xs animate-micro-float-rev opacity-20 md:opacity-30 hidden sm:block">
        {/* Notch */}
        <div className="w-8 h-1 bg-slate-400/40 rounded-full mx-auto mb-2" />
        <div className="w-full h-10 rounded-md bg-blue-500/10 mb-2" />
        <div className="space-y-1.5">
          <div className="w-full h-1 bg-slate-300/30 rounded-full" />
          <div className="w-4/5 h-1 bg-slate-300/30 rounded-full" />
          <div className="w-full h-6 rounded-md bg-slate-300/15" />
        </div>
      </div>
    </div>
  );
};

// 4. PORTFOLIO SECTION COMPOSITION
export const PortfolioMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.03] md:opacity-[0.06]" />

      {/* Mini Window Outline Behind Grid (Top Left) */}
      <div className="absolute top-12 left-4 md:left-8 w-56 md:w-68 h-40 rounded-2xl border border-blue-500/20 bg-white/10 p-2.5 shadow-xs animate-micro-drift opacity-20 md:opacity-30 hidden md:block">
        <div className="flex items-center gap-1 mb-2 pb-1.5 border-b border-slate-300/20">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
          <div className="ml-2 w-20 h-1.5 rounded-full bg-slate-300/30" />
        </div>
        <div className="grid grid-cols-2 gap-1.5 h-24">
          <div className="rounded-lg bg-blue-500/10 border border-blue-500/20" />
          <div className="rounded-lg bg-slate-300/15" />
        </div>
      </div>

      {/* Mini Viewport Scale Frame (Bottom Right) */}
      <div className="absolute bottom-8 right-4 md:right-8 w-48 md:w-60 h-36 rounded-2xl border border-slate-300/30 bg-white/5 p-3 shadow-xs animate-micro-float-rev opacity-20 md:opacity-30 hidden lg:block">
        <div className="flex items-center justify-between mb-2">
          <div className="w-12 h-1.5 bg-slate-400/30 rounded-full" />
          <div className="text-[9px] font-mono text-slate-400/40">100% Responsive</div>
        </div>
        <div className="w-full h-16 rounded-md bg-slate-300/15 border border-slate-300/20 mb-1.5" />
        <div className="w-1/2 h-1.5 bg-blue-500/30 rounded-full" />
      </div>
    </div>
  );
};

// 5. PROCESS SECTION COMPOSITION
export const ProcessMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.03] md:opacity-[0.05]" />

      {/* Connected Nodes Path across background */}
      <svg className="absolute top-1/3 left-0 w-full h-36 opacity-15 hidden md:block" viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none">
        <path d="M 50 60 Q 250 10, 500 60 T 950 60" stroke="#2563EB" strokeWidth="1.2" className="animate-micro-dash" />
        <circle cx="50" cy="60" r="4" fill="#2563EB" />
        <circle cx="275" cy="35" r="3.5" fill="#2563EB" />
        <circle cx="500" cy="60" r="4" fill="#2563EB" />
        <circle cx="725" cy="85" r="3.5" fill="#2563EB" />
        <circle cx="950" cy="60" r="4" fill="#2563EB" />
      </svg>

      {/* Mini Kanban / Sprint Board Wireframe (Top Right) */}
      <div className="absolute top-8 right-6 w-48 md:w-56 h-32 rounded-xl border border-slate-300/25 bg-white/5 p-2 shadow-xs animate-micro-float-slow opacity-20 md:opacity-30 hidden lg:block">
        <div className="grid grid-cols-3 gap-1.5 h-full">
          <div className="rounded-md bg-slate-300/15 p-1 space-y-1">
            <div className="w-full h-1 bg-slate-400/40 rounded-full" />
            <div className="w-full h-5 rounded-sm bg-white/40" />
            <div className="w-full h-5 rounded-sm bg-white/40" />
          </div>
          <div className="rounded-md bg-blue-500/10 p-1 space-y-1">
            <div className="w-full h-1 bg-blue-400/40 rounded-full" />
            <div className="w-full h-6 rounded-sm bg-white/40 border border-blue-400/30" />
          </div>
          <div className="rounded-md bg-emerald-500/10 p-1 space-y-1">
            <div className="w-full h-1 bg-emerald-400/40 rounded-full" />
            <div className="w-full h-5 rounded-sm bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. PRICING SECTION COMPOSITION
export const PricingMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.03] md:opacity-[0.06]" />

      {/* Mini cPanel / Server Stack Wireframe (Top Left) */}
      <div className="absolute top-10 left-4 md:left-10 w-44 md:w-52 h-36 rounded-2xl border border-slate-300/30 bg-white/5 p-2.5 shadow-xs animate-micro-drift opacity-20 md:opacity-30 hidden md:block">
        <div className="text-[9px] font-mono text-slate-400/50 mb-1.5 flex items-center justify-between">
          <span>HOSTING STACK</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-micro-pulse" />
        </div>
        <div className="space-y-1.5">
          <div className="h-6 rounded-md bg-slate-300/15 border border-slate-300/20 flex items-center justify-between px-2">
            <div className="w-10 h-1 bg-slate-400/30 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
          </div>
          <div className="h-6 rounded-md bg-slate-300/15 border border-slate-300/20 flex items-center justify-between px-2">
            <div className="w-12 h-1 bg-slate-400/30 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
          </div>
          <div className="h-6 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-between px-2">
            <div className="w-14 h-1 bg-blue-500/40 rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. DARK CTA SECTION COMPOSITION
export const DarkCtaMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Futuristic glowing cyber grid overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dark-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2563EB" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dark-cta-grid)" />
      </svg>

      {/* Subtle glowing circuit arcs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-500/20 opacity-20 animate-pulse-glow hidden md:block" />
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-400/15 opacity-15 animate-micro-float-slow hidden md:block" />
      
      {/* Mini HUD Tech Marks */}
      <div className="absolute top-6 left-6 text-[9px] font-mono text-blue-400/30 hidden sm:block">
        [SYSTEM: WEBSATHI // READY]
      </div>
      <div className="absolute bottom-6 right-6 text-[9px] font-mono text-blue-400/30 hidden sm:block">
        LATENCY: 0.0ms • SSL 256-BIT
      </div>
    </div>
  );
};

// 8. FOUNDER & COMPANY STORY SECTION COMPOSITION
export const FounderMicroWebBg: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.03] md:opacity-[0.06]" />

      {/* Floating Mini Tech Wireframe Card (Top Right) */}
      <div className="absolute top-10 right-4 md:right-12 w-52 md:w-64 h-36 rounded-2xl border border-blue-500/20 bg-white/5 p-3 shadow-xs animate-micro-float-slow opacity-20 md:opacity-30 hidden md:block">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-300/20 mb-2">
          <div className="text-[9px] font-mono text-[#2563EB]/70 font-bold">EST. JUNE 19, 2025</div>
          <div className="w-2 h-2 rounded-full bg-emerald-400/50 animate-micro-pulse" />
        </div>
        <div className="space-y-1.5">
          <div className="w-full h-1 bg-slate-400/30 rounded-full" />
          <div className="w-3/4 h-1 bg-slate-400/30 rounded-full" />
          <div className="grid grid-cols-2 gap-1 mt-2">
            <div className="h-10 rounded-sm bg-blue-500/10 border border-blue-500/20" />
            <div className="h-10 rounded-sm bg-slate-300/15" />
          </div>
        </div>
      </div>

      {/* Mini Code Line Blueprint (Bottom Left) */}
      <div className="absolute bottom-16 left-4 md:left-12 w-48 h-28 rounded-xl border border-slate-300/25 bg-white/5 p-2.5 shadow-xs animate-micro-drift opacity-15 md:opacity-25 hidden lg:block">
        <div className="text-[8px] font-mono text-slate-400/50 mb-1">&lt;websathi brand="digital-studio"&gt;</div>
        <div className="space-y-1 pl-2 font-mono text-[8px] text-slate-400/40">
          <div>founder: "Sushant Gaha Magar";</div>
          <div>mission: "Modern Web Solutions";</div>
        </div>
      </div>
    </div>
  );
};

// 9. CONTACT / FAQ / INSIGHTS / FOOTER COMPOSITIONS
export const GeneralMicroWebBg: React.FC<{ variant?: 'contact' | 'faq' | 'insights' | 'footer' }> = ({ variant = 'contact' }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <MicroDotGrid opacity="opacity-[0.025] md:opacity-[0.05]" />

      {variant === 'contact' && (
        <div className="absolute top-12 right-6 md:right-16 w-48 h-32 rounded-2xl border border-blue-500/20 bg-white/5 p-2.5 shadow-xs animate-micro-float-slow opacity-20 md:opacity-30 hidden md:block">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400/50" />
            <div className="w-16 h-1 bg-slate-400/30 rounded-full" />
          </div>
          <div className="space-y-1.5">
            <div className="w-full h-4 rounded-sm bg-slate-300/20" />
            <div className="w-full h-4 rounded-sm bg-slate-300/20" />
            <div className="w-16 h-4 rounded-sm bg-blue-500/30" />
          </div>
        </div>
      )}

      {variant === 'footer' && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-1 border-t border-slate-300/20 opacity-20 hidden md:block" />
      )}
    </div>
  );
};

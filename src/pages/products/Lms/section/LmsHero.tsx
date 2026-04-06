

import React from 'react';
import LmsHeroimg from '../../../../assets/images/products/lmshero.png';

const LmsHero: React.FC = () => {
  return (
    /* font-inter-sans applied for the whole section to match typography */
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] px-6 pt-32 pb-20 font-inter-sans overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content Alignment */}
          {/* LEFT COLUMN: Fixed Alignment to match Navbar Logo */}
          <div className="flex flex-col items-start text-left lg:-ml-12 xl:-ml-20">
            <div className="mb-10">
              {/* Badge */}
              <span className="inline-block px-3 py-1 rounded-md border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-[13px] font-medium mb-12 tracking-wide">
                Coirei LMS
              </span>
              
              {/* H1: whitespace-nowrap keeps line 1 together, -ml pushes it to align with Logo */}
              {/* H1: Exact Figma Specs Applied */}
                  <h1 className="flex flex-col text-[44px] md:text-[54px] lg:text-[60px] font-medium text-white tracking-tight leading-[68px] mb-10 font-instrument-sans">
                    <span className="whitespace-nowrap">Intelligent Learning</span>
                    
                    <span className="text-white block mt-1">Infrastructure</span>
                  </h1>

              {/* Description: Width adjusted for better visual balance */}
              <p className="max-w-[540px] text-[18px] md:text-[22px] text-zinc-400 leading-relaxed font-light">
                Coirei LMS is an AI-powered learning system that adapts, tracks, and 
                evolves with every learner — delivering personalized experiences at scale.
              </p>
            </div>

            {/* Buttons: Removed extra margins to maintain vertical line */}
           <div className="flex flex-wrap gap-[10px] mt-8">
            {/* Primary Button: 230x44px, 4px radius, 10px/16px padding */}
            <button className="w-[230px] h-[44px] px-[16px] py-[10px] bg-white text-black font-medium rounded-[4px] border border-transparent hover:bg-zinc-200 transition-all duration-300 text-[15px] flex items-center justify-center">
              Request Early Access
            </button>

            {/* Secondary Button: 230x44px, 4px radius, 1px border */}
            <button className="w-[230px] h-[44px] px-[16px] py-[10px] bg-[#111111] text-white font-medium rounded-[4px] border border-zinc-800 hover:bg-zinc-800 transition-all duration-300 text-[15px] flex items-center justify-center">
              Request Early Access
            </button>
          </div>
          </div>

          {/* Right Media Section - Aligned with the top of text */}
          <div className="relative w-full group pt-4 flex justify-end">
            <div className="relative aspect-[16/10] w-full lg:w-[110%] lg:translate-x-12 overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 shadow-2xl transition-transform duration-700">
              <img 
                src={LmsHeroimg} 
                alt="Intelligent Infrastructure"
                className="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>

        {/* Bottom Slogan Section with specific margin gap */}
        <div className="mt-[80px] w-full flex justify-center">
          <p className="text-zinc-100 text-[28px] md:text-[42px] font-medium tracking-tight text-center">
            Learn faster. Adapt smarter. Scale infinitely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LmsHero;
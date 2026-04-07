

import React from 'react';
import LmsHeroimg from '../../../../assets/images/products/lmshero.png';

const LmsHero: React.FC = () => {
  return (
    /* font-inter-sans applied for the whole section to match typography */
       <section className="mt-32 sm:mt-36 lg:mt-40 mb-10 md:mb-20 px-6 sm:px-10 md:px-15">

     
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content Alignment */}
          {/* LEFT COLUMN: Fixed Alignment to match Navbar Logo */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-10">
              {/* Badge */}
              <p className="backdrop-blur-md border border-white/20 rounded-xl p-2 max-w-fit text-base text-[#959493] mx-auto sm:mx-0 mb-8">
                Coirei LMS
              </p>
              
              {/* H1: whitespace-nowrap keeps line 1 together, -ml pushes it to align with Logo */}
              {/* H1: Exact Figma Specs Applied */}
                  <h1 className="flex flex-col text-[44px] md:text-[54px] lg:text-[60px] font-medium text-white tracking-tight leading-[68px] mb-10 font-instrument-sans">
                    <span className="whitespace-nowrap">Intelligent Learning</span>
                    
                    <span className="text-white block mt-1">Infrastructure</span>
                  </h1>

              {/* Description: Width adjusted for better visual balance */}
              <p className="max-w-[540px] text-[18px] md:text-[22px] text-zinc-400 leading-relaxed font-light">
                Coirei LMS is an AI-powered learning system that adapts, tracks, and 
                evolves with every learner  delivering personalized experiences at scale.
              </p>
            </div>

           {/* Buttons: Removed extra margins to maintain vertical line */}
            <div className="flex flex-wrap gap-[10px] mt-8">
              {/* Primary Button: 230x44px, 4px radius, 10px/16px padding */}
              <button className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer sm:text-base text-[13px]">
                Request Early Access
              </button>

              {/* Secondary Button: 230x44px, 4px radius, 1px border */}
              <button className="text-white py-2.5 px-4 bg-[#292929] rounded font-semibold border border-white/10 hover:bg-white hover:text-[#292929] transition-all duration-500 ease-out cursor-pointer sm:text-base text-[13px]">
                Explore the Platform
              </button>
            </div>
          </div>

          {/* Right Media Section - Aligned with the top of text */}
          <div className="  pt-4 flex  ">
            <div className=" w-full rounded-3xl items-center">
              <img
                src={LmsHeroimg} 
                alt="Intelligent Infrastructure"
                className="h-full w-full rounded-xl"
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
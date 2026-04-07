


import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  GraduationCap, 
  Snowflake, 
  SearchCode, 
  Trophy 
} from 'lucide-react';

const roadmapData = [
  {
    icon: <GraduationCap style={{ width: '28px', height: '23px' }} className="text-zinc-100" />,
    title: "Learn",
    desc: "Core content ingestion and interactive module delivery."
  },
  {
    icon: <Snowflake style={{ width: '28px', height: '23px' }} className="text-zinc-100" />, 
    title: "Adapt",
    desc: "Real-time AI path recalibration based on performance."
  },
  {
    icon: <SearchCode style={{ width: '28px', height: '23px' }} className="text-zinc-100" />, 
    title: "Track",
    desc: "Deep granular telemetry of engagement and retention."
  },
  {
    icon: <Trophy style={{ width: '28px', height: '23px' }} className="text-zinc-100" />, 
    title: "Improve",
    desc: "Continuous refinement of organizational learning goals."
  }
];

const LmsRoadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full  py-24 px-6 overflow-hidden mt-0 font-inter-sans"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* PROGRESS LINE: Adjusted top to match new 80px box center (40px) */}
        <div className="absolute lg:top-[40px] top-[40px] lg:left-[12.5%] lg:right-[12.5%] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[1px] lg:w-[75%] h-[calc(100%-180px)] lg:h-[1px] bg-zinc-900 z-0">
          <motion.div 
            style={{ 
              scaleX: typeof window !== 'undefined' && window.innerWidth > 1024 ? scaleProgress : 1,
              scaleY: typeof window !== 'undefined' && window.innerWidth <= 1024 ? scaleProgress : 1,
              originX: 0,
              originY: 0
            }}
            className="absolute inset-0 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
          />
        </div>

        {/* ROADMAP ITEMS */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-24 lg:gap-0">
          {roadmapData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center lg:w-1/4 group">
              
              {/* ICON BOX: 80x80, Radius 12px, Border 1px */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="w-[80px] h-[80px] rounded-[12px] bg-zinc-900 border border-zinc-800/80 flex items-center justify-center mb-8 shadow-2xl relative z-20 transition-colors duration-500"
              >
                {item.icon}
              </motion.div>

              {/* TEXT CONTENT: Width 182px, Height 76px */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="w-[182px] min-h-[76px] flex flex-col items-center"
              >
                <h3 className="text-[20px] font-medium text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[14px] text-zinc-400 leading-[1.4] font-light">
                  {item.desc}
                </p>
              </motion.div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LmsRoadmap;
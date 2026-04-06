


// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import { GraduationCap, Share2, LineChart, Activity } from 'lucide-react';

// const roadmapData = [
//   {
//     icon: <GraduationCap className="w-6 h-6 text-zinc-300" />,
//     title: "Learn",
//     desc: "Core content ingestion and interactive module delivery."
//   },
//   {
//     icon: <Share2 className="w-6 h-6 text-zinc-300" />,
//     title: "Adapt",
//     desc: "Real-time AI path recalibration based on performance."
//   },
//   {
//     icon: <LineChart className="w-6 h-6 text-zinc-300" />,
//     title: "Track",
//     desc: "Deep granular telemetry of engagement and retention."
//   },
//   {
//     icon: <Activity className="w-6 h-6 text-zinc-300" />,
//     title: "Improve",
//     desc: "Continuous refinement of organizational learning goals."
//   }
// ];

// const LmsRoadmap: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "center center"]
//   });

//   const scaleProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30
//   });

//   return (
//     /* FIX 1: Uniform Background Color (#0a0a0a) across the section. 
//        Margin and Padding adjusted for a clean transition.
//     */
//     <section 
//       ref={containerRef} 
//       className="relative w-full bg-[#0a0a0a] py-24 px-6 overflow-hidden mt-0 lg:-mt-2"
//     >
//       <div className="max-w-7xl mx-auto relative">
        
//         {/* LINE LOGIC: 
//             Desktop: lg:left-[12.5%] to lg:w-[75%] clips it between card centers.
//             Mobile: top-[56px] to h-[calc(100%-120px)] stops it exactly at the last card.
//         */}
//         <div className="absolute lg:top-[56px] top-[56px] lg:left-[12.5%] lg:right-[12.5%] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[1px] lg:w-[75%] h-[calc(100%-180px)] lg:h-[1px] bg-zinc-900 z-0">
//           <motion.div 
//             style={{ 
//               scaleX: typeof window !== 'undefined' && window.innerWidth > 1024 ? scaleProgress : 1,
//               scaleY: typeof window !== 'undefined' && window.innerWidth <= 1024 ? scaleProgress : 1,
//               originX: 0,
//               originY: 0
//             }}
//             className="absolute inset-0 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
//           />
//         </div>

//         {/* ROADMAP ITEMS */}
//         <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-24 lg:gap-0">
//           {roadmapData.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center lg:w-1/4 group">
              
//               {/* FIX 2: Removed orange border on hover. 
//                   Maintained zinc border for a professional look.
//               */}
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center mb-10 shadow-2xl transition-all duration-500 relative z-20"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-zinc-800/40 flex items-center justify-center border border-zinc-700/20">
//                   {item.icon}
//                 </div>
//               </motion.div>

//               {/* TEXT CONTENT */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 className="px-6"
//               >
//                 <h3 className="text-2xl  text-white mb-4 tracking-tight">
//                   {item.title}
//                 </h3>
//                 <p className=" text-white leading-relaxed max-w-[220px]">
//                   {item.desc}
//                 </p>
//               </motion.div>
              
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default LmsRoadmap;


// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import { 
//   GraduationCap, 
//   Network, 
//   SearchCode, 
//   Sparkles 
// } from 'lucide-react';

// const roadmapData = [
//   {
//     icon: <GraduationCap className="w-8 h-8 text-zinc-100" />,
//     title: "Learn",
//     desc: "Core content ingestion and interactive module delivery."
//   },
//   {
//     icon: <Network className="w-8 h-8 text-zinc-100" />, // Snowflake/Network pattern
//     title: "Adapt",
//     desc: "Real-time AI path recalibration based on performance."
//   },
//   {
//     icon: <SearchCode className="w-8 h-8 text-zinc-100" />, // Track/Analysis icon
//     title: "Track",
//     desc: "Deep granular telemetry of engagement and retention."
//   },
//   {
//     icon: <Sparkles className="w-8 h-8 text-zinc-100" />, // Improve/Refine icon
//     title: "Improve",
//     desc: "Continuous refinement of organizational learning goals."
//   }
// ];

// const LmsRoadmap: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "center center"]
//   });

//   const scaleProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30
//   });

//   return (
//     <section 
//       ref={containerRef} 
//       className="relative w-full bg-[#0a0a0a] py-24 px-6 overflow-hidden mt-0"
//     >
//       <div className="max-w-7xl mx-auto relative">
        
//         {/* PROGRESS LINE */}
//         <div className="absolute lg:top-[56px] top-[56px] lg:left-[12.5%] lg:right-[12.5%] left-1/2 -translate-x-1/2 lg:translate-x-0 w-[1px] lg:w-[75%] h-[calc(100%-180px)] lg:h-[1px] bg-zinc-900 z-0">
//           <motion.div 
//             style={{ 
//               scaleX: typeof window !== 'undefined' && window.innerWidth > 1024 ? scaleProgress : 1,
//               scaleY: typeof window !== 'undefined' && window.innerWidth <= 1024 ? scaleProgress : 1,
//               originX: 0,
//               originY: 0
//             }}
//             className="absolute inset-0 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.4)]"
//           />
//         </div>

//         {/* ROADMAP ITEMS */}
//         <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-24 lg:gap-0">
//           {roadmapData.map((item, index) => (
//             <div key={index} className="flex flex-col items-center text-center lg:w-1/4 group">
              
//               {/* SINGLE ICON BOX (Figma Style) */}
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="w-24 h-24 lg:w-28 lg:h-28 rounded-[2rem] bg-zinc-900/80 border border-zinc-800/80 flex items-center justify-center mb-8 shadow-2xl relative z-20 transition-colors duration-500 hover:bg-zinc-800/50"
//               >
//                 {/* No inner box, Icon is direct child */}
//                 {item.icon}
//               </motion.div>

//               {/* TEXT CONTENT */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 className="px-6"
//               >
//                 {/* h3 size 20px */}
//                 <h3 className="text-[20px] font-semibold text-white mb-3 tracking-tight">
//                   {item.title}
//                 </h3>
//                 {/* p tag size 14px white */}
//                 <p className="text-[14px] text-white/90 leading-relaxed max-w-[220px] font-light">
//                   {item.desc}
//                 </p>
//               </motion.div>
              
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default LmsRoadmap;


import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  GraduationCap, 
  Network, 
  SearchCode, 
  Sparkles 
} from 'lucide-react';

const roadmapData = [
  {
    icon: <GraduationCap style={{ width: '28px', height: '23px' }} className="text-zinc-100" />,
    title: "Learn",
    desc: "Core content ingestion and interactive module delivery."
  },
  {
    icon: <Network style={{ width: '28px', height: '23px' }} className="text-zinc-100" />, 
    title: "Adapt",
    desc: "Real-time AI path recalibration based on performance."
  },
  {
    icon: <SearchCode style={{ width: '28px', height: '23px' }} className="text-zinc-100" />, 
    title: "Track",
    desc: "Deep granular telemetry of engagement and retention."
  },
  {
    icon: <Sparkles style={{ width: '28px', height: '23px' }} className="text-zinc-100" />, 
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
      className="relative w-full bg-[#0a0a0a] py-24 px-6 overflow-hidden mt-0 font-inter-sans"
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
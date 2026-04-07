

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
// import { 
//   Target, 
//   TrendingUp, 
//   Bot, 
//   Globe, 
//   Repeat, 
//   BrainCircuit, 
//   Atom 
// } from 'lucide-react';

// // Data remains the same
// const timelineData = [
//   {
//     left: {
//       icon: <Target className="w-5 h-5 text-white" />,
//       title: "Adaptive Learning Paths",
//       description: "Personalized learning journeys that evolve in real time based on each learner's behavior."
//     },
//     right: {
//       icon: <TrendingUp className="w-5 h-5 text-white" />,
//       title: "Real Time Progress Intelligence",
//       description: "Track learner engagement, progress, and outcomes with live insights across the system."
//     }
//   },
//   {
//     left: {
//       icon: <Bot className="w-5 h-5 text-white" />,
//       title: "AI Powered Recommendations",
//       description: "Deliver the right content at the right time with intelligent suggestions for each learner."
//     },
//     right: {
//       icon: <Globe className="w-5 h-5 text-white" />,
//       title: "Scalable Learning Systems",
//       description: "Seamlessly scale learning across teams and global users without losing performance."
//     }
//   },
//   {
//     left: {
//       icon: <Repeat className="w-5 h-5 text-white" />,
//       title: "Continuous Learning Optimization",
//       description: "Improve learning outcomes through continuous feedback loops and evolving intelligence."
//     },
//     right: {
//       icon: <BrainCircuit className="w-5 h-5 text-white" />,
//       title: "Data Driven Intelligence",
//       description: "Use deep analytics and insights to refine learning strategies over time."
//     }
//   }
// ];

// const Timeline: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end end"]
//   });

//   const smoothProgress = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   const scaleY = smoothProgress;
//   const indicatorY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

//   return (
//     <section ref={containerRef} className="relative w-full bg-[#0a0a0a] py-20 lg:py-40 px-6 overflow-x-hidden">
      
//       {/* Central Spine - Hidden on very small mobile if needed, but looks good as is */}
//       <div className="absolute left-1/2 top-20 lg:top-40 bottom-20 lg:bottom-40 w-[1px] bg-zinc-900 -translate-x-1/2 z-10">
//         <motion.div 
//           style={{ scaleY, originY: 0 }} 
//           className="absolute top-0 left-0 w-full h-full bg-zinc-700"
//         />
//         <motion.div 
//           style={{ top: indicatorY }}
//           className="absolute left-1/2 -translate-x-1/2 w-[2px] h-24 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)] z-20"
//         />
//       </div>

//       <div className="max-w-7xl mx-auto relative">
//         {/* Top Atom Logo */}
//         <div className="flex justify-center mb-20 lg:mb-40 relative z-30">
//           <div className="rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,0,0,0.5)] p-10">
//             <Atom size={92} className="animate-[spin_15s_linear_infinite] text-zinc-200" />
//           </div>
//         </div>

//         {/* Rows - Gap adjusted for mobile */}
//         <div className="space-y-16 lg:space-y-32">
//           {timelineData.map((pair, index) => (
//             <TimelineRow key={index} pair={pair} progress={smoothProgress} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const TimelineRow = ({ pair, progress, index }: { pair: any, progress: any, index: number }) => {
//   const startTrigger = index * 0.25;
//   const endTrigger = Math.min(startTrigger + 0.3, 1);
  
//   // Animation offsets
//   const leftX = useTransform(progress, [startTrigger, endTrigger], [50, 0]);
//   const rightX = useTransform(progress, [startTrigger, endTrigger], [-50, 0]);
//   const opacity = useTransform(progress, [startTrigger, endTrigger], [0, 1]);

//   return (
//     /* flex-col on mobile, flex-row on desktop */
//     <div className="flex flex-col lg:flex-row items-center w-full gap-12 lg:gap-0">
      
//       {/* Left Card Container */}
//       <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
//         <motion.div 
//           style={{ x: leftX, opacity }} 
//           className="w-full flex justify-center lg:justify-end lg:pr-20"
//         >
//           <Card item={pair.left} side="left" />
//         </motion.div>
//       </div>

//       {/* Central line spacing only for desktop */}
//       <div className="hidden lg:block w-[1px]" />

//       {/* Right Card Container */}
//       <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
//         <motion.div 
//           style={{ x: rightX, opacity }} 
//           className="w-full flex justify-center lg:justify-start lg:pl-20"
//         >
//           <Card item={pair.right} side="right" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const Card = ({ item, side }: { item: any, side: 'left' | 'right' }) => {
//   const tiltAngle = side === 'left' ? -10 : 10;
  
//   return (
//     <motion.div 
//       className="w-full max-w-[340px] md:max-w-[400px] lg:max-w-[440px] px-4 lg:px-0"
//       whileHover={{ scale: 1.02 }}
//     >
//       <div 
//         style={{ perspective: "1000px" }}
//         className="relative group"
//       >
//         <motion.div 
//           initial={{ rotateZ: 0 }}
//           whileInView={{ 
//             rotateZ: tiltAngle, 
//             rotateX: 5, 
//             rotateY: side === 'left' ? 8 : -8 
//           }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           /* CHANGE: Added 'flex flex-col items-center text-center' to center everything */
//           className="flex flex-col items-center text-center p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-zinc-800/60 bg-zinc-900/50 backdrop-blur-xl shadow-2xl hover:border-zinc-600/50"
//         >
//           {/* Icon Container: Already flex, so items-center handles the icon positioning */}
//           <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-zinc-800/80 flex items-center justify-center mb-6 lg:mb-8 border border-zinc-700/30">
//             {item.icon}
//           </div>

//           {/* Title: Centered via 'text-center' on parent */}
//           <h4 className="text-xl lg:text-2xl font-semibold text-zinc-100 mb-3 lg:mb-4 tracking-tight text-balance">
//             {item.title}
//           </h4>

//           {/* Description: Centered via 'text-center' on parent */}
//           <p className="text-[14px] lg:text-[15px] text-zinc-500 leading-relaxed font-normal">
//             {item.description}
//           </p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };
// export default Timeline;

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Target, 
  ChartNoAxesCombined, 
  Bot, 
  Globe, 
  Repeat, 
  BrainCircuit, 
  Atom 
} from 'lucide-react';

const timelineData = [
  {
    left: {
      icon: <Target className="w-[44px] h-[44px] text-white" />,
      title: "Adaptive Learning Paths",
      description: "Personalized learning journeys that evolve in real time based on each learner's behavior."
    },
    right: {
      icon: <ChartNoAxesCombined className="w-[44px] h-[44px] text-white" />,
      title: "Real Time Progress Intelligence",
      description: "Track learner engagement, progress, and outcomes with live insights across the system."
    }
  },
  {
    left: {
      icon: <Bot className="w-[44px] h-[44px] text-white" />,
      title: "AI Powered Recommendations",
      description: "Deliver the right content at the right time with intelligent suggestions for each learner."
    },
    right: {
      icon: <Globe className="w-[44px] h-[44px] text-white" />,
      title: "Scalable Learning Systems",
      description: "Seamlessly scale learning across teams and global users without losing performance."
    }
  },
  {
    left: {
      icon: <Repeat className="w-[44px] h-[44px] text-white" />,
      title: "Continuous Learning Optimization",
      description: "Improve learning outcomes through continuous feedback loops and evolving intelligence."
    },
    right: {
      icon: <BrainCircuit className="w-[44px] h-[44px] text-white" />,
      title: "Data Driven Intelligence",
      description: "Use deep analytics and insights to refine learning strategies over time."
    }
  }
];

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scaleY = smoothProgress;
  const indicatorY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-20 lg:py-40 px-6 overflow-x-hidden font-inter-sans">
      
      <div className="absolute left-1/2 top-20 lg:top-40 bottom-20 lg:bottom-40 w-[1px] bg-zinc-900 -translate-x-1/2 z-10">
        <motion.div 
          style={{ scaleY, originY: 0 }} 
          className="absolute top-0 left-0 w-full h-full bg-zinc-700"
        />
        <motion.div 
          style={{ top: indicatorY }}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-24 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.6)] z-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Atom - Animation and Size preserved as per existing code */}
        <div className="flex justify-center mb-20 lg:mb-40 relative z-30">
          <div className="rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shadow-[0_0_40px_rgba(0,0,0,0.5)] p-10">
            <Atom size={92} className="animate-[spin_15s_linear_infinite] text-zinc-200" />
          </div>
        </div>

        <div className="space-y-16 lg:space-y-32">
          {timelineData.map((pair, index) => (
            <TimelineRow key={index} pair={pair} progress={smoothProgress} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ pair, progress, index }: { pair: any, progress: any, index: number }) => {
  const startTrigger = index * 0.25;
  const endTrigger = Math.min(startTrigger + 0.3, 1);
  
  const leftX = useTransform(progress, [startTrigger, endTrigger], [50, 0]);
  const rightX = useTransform(progress, [startTrigger, endTrigger], [-50, 0]);
  const opacity = useTransform(progress, [startTrigger, endTrigger], [0, 1]);

  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-12 lg:gap-0">
      {/* Left Card Container - Padding from center line: 78px */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <motion.div 
          style={{ x: leftX, opacity }} 
          className="w-full flex justify-center lg:justify-end lg:pr-[78px]"
        >
          <Card item={pair.left} side="left" />
        </motion.div>
      </div>

      <div className="hidden lg:block w-[1px]" />

      {/* Right Card Container - Padding from center line: 78px */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <motion.div 
          style={{ x: rightX, opacity }} 
          className="w-full flex justify-center lg:justify-start lg:pl-[78px]"
        >
          <Card item={pair.right} side="right" />
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ item, side }: { item: any, side: 'left' | 'right' }) => {
  const tiltAngle = side === 'left' ? -10 : 10;
  
  return (
    <motion.div 
      /* Card Size: 510x310, Radius: 20px, Padding: 24px */
      className="w-full max-w-[510px] min-h-[310px] flex"
      whileHover={{ scale: 1.02 }}
    >
      <div 
        style={{ perspective: "1000px" }}
        className="relative w-full h-full group"
      >
        <motion.div 
          initial={{ rotateZ: 0 }}
          whileInView={{ 
            rotateZ: tiltAngle, 
            rotateX: 5, 
            rotateY: side === 'left' ? 8 : -8 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center p-[24px] w-full h-full rounded-[20px] border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl shadow-2xl transition-all"
        >
          {/* Icon Frame: 80x80 Circular */}
          <div className="w-[80px] h-[80px] rounded-full bg-zinc-800 flex items-center justify-center mb-8 border border-zinc-700/30">
            {/* Icon Size: 44x44 set in data/props */}
            {item.icon}
          </div>

          {/* Heading: 24px Medium */}
          <h4 className="text-[24px] font-medium text-zinc-100 mb-4 tracking-tight leading-tight font-instrument-sans">
            {item.title}
          </h4>

          {/* Paragraph: 18px Medium */}
          <p className="text-[18px] font-medium text-zinc-500 leading-relaxed max-w-[420px]">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;
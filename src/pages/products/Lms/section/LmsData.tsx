// import React from 'react';
// import { motion } from 'framer-motion';
// import { ShieldCheck } from 'lucide-react';

// const LmsData: React.FC = () => {
//   return (
//     /* Background consistency maintain panna #0a0a0a use panniruken.
//        LmsRoadmap-kum idhukkum ulla gap-ku py-24 and mt-0 settings. */
//     <section className="relative w-full bg-[#0a0a0a] py-24 lg:py-32 px-6 overflow-hidden">
//       <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
//         {/* SHIELD ICON WITH PULSE EFFECT */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="relative mb-12"
//         >
//           {/* Subtle Glow behind the icon */}
//           <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
          
//           <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative z-10 shadow-2xl">
//             <ShieldCheck className="w-8 h-8 lg:w-10 lg:h-10 text-zinc-400" />
//           </div>
//         </motion.div>

//         {/* MAIN HEADING */}
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
//         >
//           Your data stays yours. Always.
//         </motion.h2>

//         {/* DESCRIPTION TEXT */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="max-w-2xl"
//         >
//           <p className="text-base lg:text-lg text-zinc-500 leading-relaxed font-normal">
//             We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your 
//             organization. Your training data is never used to train models for other clients, and all 
//             learning telemetry is encrypted at rest and in transit.
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default LmsData;

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const LmsData: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-24 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* SHIELD ICON - Figma Specs: 64x64, 12px Radius, 10% White Bg, 20% White Border */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-8"
        >
          <div className="w-[64px] h-[64px] rounded-[12px] bg-white/10 border border-white/20 flex items-center justify-center relative z-10 shadow-2xl">
            <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* MAIN HEADING - Figma Specs: Instrument Sans, 48px, 400 Weight, -1.2px Spacing */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className=" text-[48px] leading-[48px] font-normal text-white mb-6 tracking-[-1.2px]"
        >
          Your data stays yours. Always.
        </motion.h2>

        {/* DESCRIPTION TEXT - Figma Specs: Inter, 18px, 29.25px Line Height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-[881px]"
        >
          <p className=" text-[18px] leading-[29.25px] text-white font-normal">
            We believe in complete data sovereignty. Coirei LMS provides a dedicated environment for your 
            organization. Your training data is never used to train models for other clients, and all 
            learning telemetry is encrypted at rest and in transit.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default LmsData;
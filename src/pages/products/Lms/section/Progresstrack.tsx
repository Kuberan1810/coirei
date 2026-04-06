

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stickyContent = [
    {
        title: "Real-time progress tracking",
        description: "Instantly monitor learner activity, engagement, and performance in real time  with complete visibility into how every learner is progressing across the system.",
        image: "https://images.unsplash.com/photo-1518734549841-b417d28c22aa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Deep Learning insights",
        description: "Understand learning patterns, strengths, and knowledge gaps through deep, data driven analytics that reveal how users learn and where they need improvement.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
        title: "Improve outcomes continuosly",
        description: "Keep learners aligned and continuously improving with instant feedback, adaptive guidance, and intelligent learning adjustments at every step.",
        image: "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

function ProgressTrack() {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!containerRef.current) return;

            // Track progress purely based on natural scroll to flawlessly map active text
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top", 
                end: "bottom bottom", 
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    let index = Math.floor(progress * stickyContent.length);
                    if (index >= stickyContent.length) index = stickyContent.length - 1;
                    if (index < 0) index = 0;
                    
                    setActiveSection(index);
                }
            });

        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#161616] text-white relative">
           <div className="mt-[60px] ml-[49px] flex items-center justify-center w-[262px] h-[39px] rounded-[5px] border border-zinc-800 bg-zinc-900/30 px-[16px] py-[10px] gap-[10px]">
                    <span className="text-zinc-400 text-[14px] font-medium tracking-wide">
                        Learning that evolves you
                    </span>

                    {/* 2. Heading: Spec 849x136, Center aligned, size 60, lh 68, mt-60 */}
              
                </div>
                  <h2 className="mt-[60px] ml-[380px]  max-w-[849px] text-[44px] md:text-[60px] font-medium text-center leading-[68px] text-white font-instrument-sans tracking-tight">
                    Track learner progress without <br /> losing context
                </h2>


                
            <div className="max-w-[1400px] ml-[49px] w-full mx-auto flex flex-col md:flex-row items-start px-6 md:px-12 relative">
             


                
                {/* Left Side: Real Scrolling Text Blocks */}
                <div className="w-full md:w-5/12 flex flex-col">
                    {stickyContent.map((item, index) => {
                        const isActive = activeSection === index;
                        return (
                            <div 
                                key={index} 
                                // h-screen forces each item to occupy a full viewport height for normal scrolling
                                className={`h-screen flex flex-col justify-center transition-all duration-700 ease-out ${
                                    isActive 
                                    ? "opacity-100 scale-100" 
                                    : "opacity-30 scale-[0.9] blur-[2px]"
                                }`}
                            >
                                <h3 className="text-[32px] md:text-[46px] font-semibold mb-6 tracking-tight leading-tight">
                                    <span className="text-[#F67300] block mb-2 text-[24px]">0{index + 1}.</span> 
                                    {item.title}
                                </h3>
                                <p className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side: Sticky CSS Image Viewer */}
                <div className="hidden md:block w-full md:w-7/12 sticky top-0 h-screen">
                    <div className="h-full w-full flex items-center justify-center pl-12">
                        {/* Image Canvas Container */}
                        <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/5 bg-[#292929]!">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={activeSection}
                                    src={stickyContent[activeSection].image}
                                    alt={stickyContent[activeSection].title}
                                    initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Professional Glass Overlay border */}
                            <div className="absolute inset-0 border border-white/10 rounded-[32px] pointer-events-none z-20"></div>
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ProgressTrack;


// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const stickyContent = [
//     {
//         title: "Real-time progress tracking",
//         description: "Instantly monitor learner activity, engagement, and performance in real time with complete visibility into how every learner is progressing across the system.",
//         image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//     },
//     {
//         title: "Deep Learning insights",
//         description: "Understand learning patterns, strengths, and knowledge gaps through deep, data driven analytics that reveal how users learn and where they need improvement.",
//         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//     },
//     {
//         title: "Improve outcomes continuously",
//         description: "Keep learners aligned and continuously improving with instant feedback, adaptive guidance, and intelligent learning adjustments at every step.",
//         image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//     }
// ];

// function ProgressTrack() {
//     const [activeSection, setActiveSection] = useState(0);
//     const containerRef = useRef<HTMLElement>(null);

//     useEffect(() => {
//         let ctx = gsap.context(() => {
//             if (!containerRef.current) return;
//             ScrollTrigger.create({
//                 trigger: containerRef.current,
//                 start: "top top", 
//                 end: "bottom bottom", 
//                 scrub: true,
//                 onUpdate: (self) => {
//                     const progress = self.progress;
//                     let index = Math.floor(progress * stickyContent.length);
//                     if (index >= stickyContent.length) index = stickyContent.length - 1;
//                     if (index < 0) index = 0;
//                     setActiveSection(index);
//                 }
//             });
//         }, containerRef);
//         return () => ctx.revert();
//     }, []);

//     return (
//         /* Section Root: Adjusted bg color and pt-24 for separation */
//         <section ref={containerRef} className="bg-[#0a0a0a] text-white relative pt-24 font-inter-sans overflow-hidden">
            
//             <div className="max-w-7xl mx-auto flex flex-col items-center">
                
//                 {/* 1. Pill Badge: Spec 262x39, Radius 5, mt-100 (100px from WhyLms) */}
//                 <div className="mt-[100px] flex items-center justify-center w-[262px] h-[39px] rounded-[5px] border border-zinc-800 bg-zinc-900/30 px-[16px] py-[10px] gap-[10px]">
//                     <span className="text-zinc-400 text-[14px] font-medium tracking-wide">
//                         Learning that evolves you
//                     </span>
//                 </div>

//                 {/* 2. Heading: Spec 849x136, Center aligned, size 60, lh 68, mt-60 */}
//                 <h2 className="mt-[60px] max-w-[849px] text-[44px] md:text-[60px] font-medium text-center leading-[68px] text-white font-instrument-sans tracking-tight">
//                     Track learner progress without <br /> losing context
//                 </h2>

//                 {/* 3. Main Content Container: Aligned with previous sections (lg:-ml-12) */}
//                 <div className="w-full mt-[100px] flex flex-col md:flex-row items-start relative px-6 md:px-0 lg:-ml-12 xl:-ml-20">
                    
//                     {/* Left Side: Text Blocks */}
//                     <div className="w-full md:w-5/12 flex flex-col">
//                         {stickyContent.map((item, index) => {
//                             const isActive = activeSection === index;
//                             return (
//                                 <div 
//                                     key={index} 
//                                     className={`h-screen flex flex-col justify-center transition-all duration-700 ease-out ${
//                                         isActive ? "opacity-100" : "opacity-20 blur-[1px]"
//                                     }`}
//                                 >
//                                     <h3 className="text-[36px] md:text-[48px] font-semibold mb-6 tracking-tight leading-[1.1] font-instrument-sans">
//                                         <span className="text-[#F67300] block mb-2 text-[20px] font-medium">0{index + 1}.</span> 
//                                         {item.title}
//                                     </h3>
//                                     <p className="max-w-[420px] text-[18px] md:text-[20px] text-zinc-400 leading-relaxed font-light">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* Right Side: Sticky Image Viewer - Reduced padding to stay closer to center */}
//                     <div className="hidden md:block w-full md:w-7/12 sticky top-0 h-screen">
//                         <div className="h-full w-full flex items-center justify-end pr-4">
//                             <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/50">
//                                 <AnimatePresence mode="popLayout">
//                                     <motion.img
//                                         key={activeSection}
//                                         src={stickyContent[activeSection].image}
//                                         alt={stickyContent[activeSection].title}
//                                         initial={{ opacity: 0, scale: 1.02 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         exit={{ opacity: 0, scale: 0.98 }}
//                                         transition={{ duration: 0.5, ease: "easeOut" }}
//                                         className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
//                                     />
//                                 </AnimatePresence>
//                                 <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-20"></div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ProgressTrack;
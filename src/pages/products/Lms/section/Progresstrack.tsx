

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lmstrackerimgone from "../../../../assets/images/products/lmstrackerone.png"
// import Lmsdeeplearn from "../../../../assets/images/products/lmsdeeplearning.png"
// import Lmsinsights from  "../../../../assets/images/products/lmsinsights.png"

// gsap.registerPlugin(ScrollTrigger);

// const stickyContent = [
//     {
//         title: "Real-time progress tracking",
//         description: "Instantly monitor learner activity, engagement, and performance in real time  with complete visibility into how every learner is progressing across the system.",
//         image: Lmstrackerimgone,
//     },
//     {
//         title: "Deep Learning insights",
//         description: "Understand learning patterns, strengths, and knowledge gaps through deep, data driven analytics that reveal how users learn and where they need improvement.",
//         image: Lmsdeeplearn,
//     },
//     {
//         title: "Improve outcomes continuosly",
//         description: "Keep learners aligned and continuously improving with instant feedback, adaptive guidance, and intelligent learning adjustments at every step.",
//         image: Lmsinsights,
//     }
// ];

// function ProgressTrack() {
//     const [activeSection, setActiveSection] = useState(0);
//     const containerRef = useRef<HTMLElement>(null);

//     useEffect(() => {
//         let ctx = gsap.context(() => {
//             if (!containerRef.current) return;

//             // Track progress purely based on natural scroll to flawlessly map active text
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
//         <section ref={containerRef} className="text-white relative ">
//            <div className="flex flex-col justify-center items-center text-center">
//                     <span className="text-zinc-400 text-[14px] font-medium tracking-wide backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base text-[#959493] mb-5">
//                         Learning that evolves you
//                     </span>

//                     {/* 2. Heading: Spec 849x136, Center aligned, size 60, lh 68, mt-60 */}
              
//                 </div>
//                   <h2 className=" mx-w-[849px] mx-h-auto text-[44px] md:text-[60px] font-medium text-center leading-[68px] text-white ">
//                     Track learner progress without <br /> losing context
//                 </h2>


                
//             <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start px-6 md:px-12 relative justify-between">
             


                
//                 {/* Left Side: Real Scrolling Text Blocks */}
//                 <div className="w-full md:w-5/12 flex flex-col">
//                     {stickyContent.map((item, index) => {
//                         const isActive = activeSection === index;
//                         return (
//                             <div 
//                                 key={index} 
//                                 // h-screen forces each item to occupy a full viewport height for normal scrolling
//                                 className={`h-screen flex flex-col justify-center transition-all duration-700 ease-out ${
//                                     isActive 
//                                     ? "opacity-100 scale-100" 
//                                     : "opacity-30 scale-[0.9] blur-[2px]"
//                                 }`}
//                             >
//                                 <h3 className="text-[32px] md:text-[46px] font-semibold mb-6 tracking-tight leading-tight">
                                    
//                                     {item.title}
//                                 </h3>
//                                 <p className="text-[18px] md:text-[20px] text-[#A1A1AA] leading-relaxed">
//                                     {item.description}
//                                 </p>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Right Side: Sticky CSS Image Viewer */}
//                 <div className="hidden md:block w-full md:w-7/12 sticky top-0 h-screen">
//                     <div className="h-full w-full flex items-center justify-center pl-12">
//                         {/* Image Canvas Container */}
//                         <div className="relative w-full aspect-[4/3]  ">
//                             <AnimatePresence mode="popLayout">
//                                 <motion.img
//                                     key={activeSection}
//                                     src={stickyContent[activeSection].image}
//                                     alt={stickyContent[activeSection].title}
//                                     initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
//                                     animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                                     exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
//                                     transition={{ duration: 0.6, ease: "easeOut" }}
//                                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//                                 />
//                             </AnimatePresence>

                        
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default ProgressTrack;


import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lmstrackerimgone from "../../../../assets/images/products/lmstrackerone.png"
import Lmsdeeplearn from "../../../../assets/images/products/lmsdeeplearning.png"
import Lmsinsights from  "../../../../assets/images/products/lmsinsights.png"

gsap.registerPlugin(ScrollTrigger);

const stickyContent = [
    {
        title: "Real-time progress tracking",
        description: "Instantly monitor learner activity, engagement, and performance in real time with complete visibility into how every learner is progressing across the system.",
        image: Lmstrackerimgone,
    },
    {
        title: "Deep Learning insights",
        description: "Understand learning patterns, strengths, and knowledge gaps through deep, data driven analytics that reveal how users learn and where they need improvement.",
        image: Lmsdeeplearn,
    },
    {
        title: "Improve outcomes continuosly",
        description: "Keep learners aligned and continuously improving with instant feedback, adaptive guidance, and intelligent learning adjustments at every step.",
        image: Lmsinsights,
    }
];

function ProgressTrack() {
    const [activeSection, setActiveSection] = useState(0);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!containerRef.current) return;

            // Desktop-la mattum dhaan active section tracking venum (Sticky effect)
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
        <section ref={containerRef} className="text-white relative py-10">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center text-center px-6">
                <span className="text-zinc-400 text-[14px] font-medium tracking-wide backdrop-blur-md border border-white/20 rounded-xl py-2 px-4 max-w-fit text-sm sm:text-base mb-5">
                    Learning that evolves you
                </span>
                <h2 className="max-w-[849px] text-[36px] md:text-[60px] font-medium text-center leading-[1.2] md:leading-[68px] text-white mb-10 md:mb-20">
                    Track learner progress without <br className="hidden md:block" /> losing context
                </h2>
            </div>

            {/* Content Container */}
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start px-6 md:px-12 relative">
                
                {/* Left Side: Scrolling Text Blocks */}
                <div className="w-full md:w-5/12 flex flex-col">
                    {stickyContent.map((item, index) => {
                        const isActive = activeSection === index;
                        return (
                            <div 
                                key={index} 
                                // Desktop-la h-screen venum sticky-ku, mobile-la dynamic height (py-12)
                                className={`min-h-fit md:h-screen flex flex-col justify-center py-12 md:py-0 transition-all duration-700 ease-out ${
                                    isActive 
                                    ? "md:opacity-100 md:scale-100" 
                                    : "md:opacity-30 md:scale-[0.9] md:blur-[2px]"
                                }`}
                            >
                                {/* Mobile-la Image Title-ku mela stacked-ah varum */}
                                <div className="block md:hidden w-full mb-8">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-auto rounded-2xl border border-white/10 shadow-lg"
                                    />
                                </div>

                                <h3 className="text-[28px] md:text-[46px] font-semibold mb-6 tracking-tight leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] md:text-[20px] text-[#A1A1AA] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Right Side: Sticky Image Viewer (Desktop Only) */}
                <div className="hidden md:block w-full md:w-7/12 sticky top-0 h-screen">
                    <div className="h-full w-full flex items-center justify-center pl-12">
                        <div className="relative w-full aspect-[4/3]">
                            <AnimatePresence mode="popLayout">
                                <motion.img
                                    key={activeSection}
                                    src={stickyContent[activeSection].image}
                                    alt={stickyContent[activeSection].title}
                                    initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl"
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgressTrack;
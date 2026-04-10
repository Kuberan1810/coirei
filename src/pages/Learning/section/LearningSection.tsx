
// import { BookOpen, Layers, Zap, Users, BarChart2, ShieldCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const capabilities = [
//   {
//     icon: <BookOpen size={22} />,
//     title: "Guided Tutorials",
//     desc: "Step-by-step walkthroughs from fundamentals to advanced concepts.",
//   },
//   {
//     icon: <Zap size={22} />,
//     title: "Hands-on Examples",
//     desc: "Real execution scenarios that reflect how things work in practice.",
//   },
//   {
//     icon: <Layers size={22} />,
//     title: "Structured Paths",
//     desc: "Topics organized progressively so you always know what to learn next.",
//   },
//   {
//     icon: <Users size={22} />,
//     title: "Team & Individual",
//     desc: "Resources tailored for solo developers and engineering teams alike.",
//   },
//   {
//     icon: <BarChart2 size={22} />,
//     title: "Progress Tracking",
//     desc: "Personalized learning paths based on what you've completed.",
//   },
//   {
//     icon: <ShieldCheck size={22} />,
//     title: "Always Up-to-date",
//     desc: "Continuously updated to reflect real-world platform behavior.",
//   },
// ];

// const sections = [
//   {
//     title: "How Learning Works",
//     content:
//       "Learning on Coirei follows a step-by-step approach. Topics are organized from fundamentals to advanced concepts, with clear explanations, examples, and best practices. You can learn at your own pace while building practical knowledge you can immediately apply.",
//   },
//   {
//     title: "Learning Assistance",
//     content:
//       "Coirei offers contextual learning assistance across documentation, tutorials, and examples to help you understand concepts faster. It helps by explaining intent, breaking down workflows, and highlighting important execution details so you can focus on understanding rather than memorization. Examples and guidance are designed to be safe and educational, learning support never performs actions on your behalf.",
//   },
//   {
//     title: "Learning Model",
//     content:
//       "Coirei follows a learner-first approach. Our focus is on building practical skills through real examples rather than passive reading. Learning resources are designed to be accessible, actionable, and continuously improved.",
//   },
//   {
//     title: "Open & Verifiable Learning",
//     content:
//       "Coirei believes effective learning is built on clarity and transparency. All content is clearly explained, continuously reviewed, and aligned with real platform behavior, so you always learn what's true, not what's outdated.",
//   },
// ];

// const LearningSection = () => {

//   const navigate = useNavigate();
//   return (
//     <section className="text-white pt-24 sm:pt-28 md:pt-32 pb-0">

//       {/* ── Hero ── */}
//       <div className="main-container">
//         <div
//           data-ns-animate
//           data-offset="100"
//           className="max-w-3xl mx-auto text-center mb-20 px-4"
//         >
//           <span className="inline-block mb-5 text-xs font-semibold uppercase tracking-widest text-white/40 border border-white/10 px-4 py-1.5 rounded-full">
//             Learning Hub
//           </span>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#E3E3E0] leading-tight mb-6">
//             Learn and grow with Coirei
//           </h1>
//           <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
//             At Coirei, we provide structured learning resources to help you understand execution workflows, pipelines, and AI-assisted development. Learn through practical guides built for real-world usage.
//           </p>
//         </div>

//         {/* ── Quote banner ── */}
//         <div
//           data-ns-animate
//           data-offset="60"
//           className="border-t border-b border-white/10 py-12 mb-20 px-4"
//         >
//           <p className="text-xl md:text-2xl font-medium text-[#E3E3E0] text-center max-w-4xl mx-auto leading-relaxed">
//             "Our learning approach is built on{" "}
//             <span className="text-white/50">clarity</span>,{" "}
//             <span className="text-white/50">practice</span>, and{" "}
//             <span className="text-white/50">real-world usage</span>."
//           </p>
//         </div>

//         {/* ── Capabilities grid ── */}
//         <div
//           data-ns-animate
//           data-offset="100"
//           className="mb-24 px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#E3E3E0] mb-2">
//             Learning Capabilities
//           </h2>
//           <p className="text-white/50 text-lg mb-10 ">
//             Everything you need to develop practical skills, at your own pace.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {capabilities.map((cap, i) => (
//               <div
//                 key={i}
//                 data-ns-animate
//                 data-delay={0.1 * i}
//                 data-offset="40"
//                 className="group rounded-2xl p-6 bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-500"
//               >
//                 <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/70 mb-5 group-hover:text-white transition-colors duration-300">
//                   {cap.icon}
//                 </div>
//                 <h2 className="text-lg font-semibold text-[#E3E3E0] mb-2">
//                   {cap.title}
//                 </h2>
//                 <p className="text-base text-white/50 leading-relaxed">{cap.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── Getting started highlight ── */}
//         <div
//           data-ns-animate
//           data-offset="80"
//           className="mb-24 px-4"
//         >
//           <div className="rounded-2xl border border-white/10 bg-white/4 p-8 md:py-15 flex flex-col md:flex-row md:items-center gap-8">
//             <div className="flex-1">
//               <h2 className="text-2xl md:text-3xl font-semibold text-[#E3E3E0] mb-3">
//                 Getting Started
//               </h2>
//               <p className="text-white/60 text-base leading-relaxed mb-5">
//                 You can begin learning on Coirei immediately without signing in.
//                 Creating an account also unlocks:
//               </p>
//               <ul className="space-y-2">
//                 {[
//                   "Saving progress across devices",
//                   "Access to personalized learning paths",
//                   "Recommendations based on your interests",
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-start gap-3 text-white/60 text-[15px]">
//                     <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <button
//               onClick={() => navigate("/contact-sales")}
//               className="bg-white text-[#3E3E3E] rounded-lg py-2.5 px-5 font-medium hover:bg-[#3E3E3E] hover:text-white transition-all duration-300 cursor-pointer"
//             >
//               Get started
//             </button>


//           </div>
//         </div>

//         {/* ── Editorial sections ── */}
//         <div className="max-w-7xl mx-auto px-4 pb-24">
//           <div className="flex flex-col gap-14">
//             {sections.map((sec, i) => (
//               <div
//                 key={i}
//                 data-ns-animate
//                 data-offset="60"
//                 className="border-t border-white/10 pt-10"
//               >
//                 <h2 className="text-xl md:text-2xl font-semibold text-[#E3E3E0] mb-4">
//                   {sec.title}
//                 </h2>
//                 <p className="text-white/60 text-[15px] md:text-base leading-[1.9]">
//                   {sec.content}
//                 </p>
//               </div>
//             ))}

//             {/* Contact entry */}
//             <div
//               data-ns-animate
//               data-offset="60"
//               className="border-t border-white/10 pt-10"
//             >
//               <h2 className="text-xl md:text-2xl font-semibold text-[#E3E3E0] mb-4">
//                 Contact the Coirei Team
//               </h2>
//               <p className="text-white/60 text-[15px] md:text-base leading-[1.9]">
//                 For questions about learning resources, privacy, data handling, or
//                 governance, reach us at{" "}
//                 <a
//                   href="mailto:info@coirei.com"
//                   className="text-white/80  hover:text-white hover:underline transition-colors hover:underline-offset-4 hover:underline-thickness-2 duration-300"
//                 >
//                   info@coirei.com
//                 </a>
//                 . You may also review our Privacy Policy, Terms of Service, and Trust
//                 documentation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   ); 
// };

// export default LearningSection;


import { Notebook } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import Img from "../../../assets/images/Learning/img1.jpg";
import Img2 from "../../../assets/images/Learning/img2.png";
import Img3 from "../../../assets/images/Learning/img3.png";
import Img4 from "../../../assets/images/Learning/img4.jpg";
import Img5 from "../../../assets/images/Learning/img5.jpg";

const Steps = [
  {
    num: "01",
    title: "Industry Experts",
    desc: "Gain insights and mentorship from experienced professionals.",
  },
  {
    num: "02",
    title: "Training Institutes",
    desc: "Gain insights and mentorship from experienced professionals",
  },
  {
    num: "03",
    title: "Enterprises & Startups",
    desc: "Gain insights and mentorship from experienced professionals.",
  },
  {
    num: "04",
    title: "Skill Development Organizations",
    desc: "Gain insights and mentorship from experienced professionals.",
  },
];

const existingPartners = {
  title: "Our Existing Partners",
  desc: "We are proud to collaborate with organizations that support practical, industry-focused learning experiences.",
  logos: [Img2, Img3] as string[],
};

const partnerWithUs = {
  title: "Partner With Us",
  desc: "We welcome organizations and individuals to collaborate with Coirei in multiple ways",
  cards: [
    { num: "01", title: "Course Creation & Training Delivery", desc: "Design and deliver industry-relevant courses." },
    { num: "02", title: "Corporate Training Programs", desc: "Upskill teams with customized training solutions." },
    { num: "03", title: "Job Placement & Hiring", desc: "Bridge learners with real-world job opportunities." },
    { num: "04", title: "Content & Curriculum Design", desc: "Build structured and scalable learning content." },
  ],
};

const LearningSection = () => {

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"]
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineWidth = useTransform(smoothProgress, [0.3, 0.8], ["0%", "100%"]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest < 0.42) setActiveIndex(0);
    else if (latest < 0.55) setActiveIndex(1);
    else if (latest < 0.68) setActiveIndex(2);
    else setActiveIndex(3);
  });


  return (
    <section className="instrument-sans text-white pt-24 sm:pt-28 md:pt-32 pb-0">

      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-24 px-4">
        <h1
          data-ns-animate
          data-direction="up"
          data-offset="80"
          data-duration="2"
          className="text-[28px] sm:text-4xl md:text-[50px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] leading-tight mb-4"
        >
          Master Workflows, Pipelines & AI-<br className="hidden md:block" /> Assisted Development
        </h1>
        <p
          data-ns-animate
          data-delay="0.08"
          data-offset="60"
          data-duration="2"
          className="text-base sm:text-xl md:text-[30px] text-white leading-relaxed">
          Coirei delivers practical learning to master <br className="hidden sm:block" /> workflows and build career-ready skills.
        </p>
      </div>

      {/* ── Collaborate Section ── */}
      <div className="px-6 md:px-10 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            data-ns-animate
            data-direction="left"
            data-offset="80"
            data-duration="2"
          >
            <h2 className="text-[30px] sm:text-[40px] md:text-[55px] font-normal text-[#E3E3E0] leading-tight mb-5">
              Collaborate with <span className="text-[#F18D37]">Coirei</span>
            </h2>
            <p className="text-[#B5B4B2] text-base sm:text-[20px] md:text-[25px] leading-relaxed mb-10 max-w-md">
              We partner with organizations to deliver practical, outcome-driven learning that equips learners with real-world skills and career-ready expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-20 lg:mb-0">
              <div className="border border-white/20 rounded-lg p-3">
                <p className="text-white/50 text-sm sm:text-base md:text-[20px] mb-1">Powered by</p>
                <p className="text-sm sm:text-base md:text-[20px] font-medium text-[#E3E3E0]">Real-world use cases</p>
              </div>
              <div className="border border-white/20 rounded-lg p-3">
                <p className="text-white/50 text-sm sm:text-base md:text-[20px] mb-1">Driven by</p>
                <p className="text-sm sm:text-base md:text-[20px] font-medium text-[#E3E3E0]">Industry standards</p>
              </div>
            </div>
          </div>

          <div
            data-ns-animate
            data-direction="right"
            data-offset="100"
            data-duration="2"
          >
            <div className="rounded-2xl bg-[#1c1c1c]">
              <img
                src={Img}
                alt="Team collaboration"
                className="w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[540px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div ref={timelineRef} className="relative mt-8">
        <div className="sticky top-[100px] p-4 sm:p-8 md:p-14">
          <h3
            data-ns-animate
            data-direction="up"
            data-offset="80"
            data-duration="2"
            className="text-[26px] sm:text-[36px] md:text-[50px] font-normal text-[#E3E3E0] mb-2"
          >
            Our Collaboration Network
          </h3>
          <p
            data-ns-animate
            data-delay="0.08"
            data-offset="60"
            data-duration="2"
            className="text-[#B5B4B2] font-instrumental-Sans text-base sm:text-[20px] md:text-[25px] leading-relaxed max-w-3xl mb-12 sm:mb-16 md:mb-20"
          >
            We actively partner with a diverse ecosystem to bridge the gap between academic learning and industry requirements.
          </p>

          <div className="relative">
            <div className="absolute top-[30px] sm:top-[40px] md:top-[50px] left-[30px] sm:left-[38px] md:left-[64px] right-[30px] sm:right-[38px] md:right-[64px] h-[2px] bg-white/20 -translate-y-1/2 z-0">
              <motion.div
                className="h-full bg-[#F18D37] origin-left"
                style={{ width: lineWidth }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex flex-row justify-between gap-1 sm:gap-0">
              {Steps.map((step, idx) => {
                const isActive = activeIndex >= idx;
                return (
                  <div key={idx} className="flex flex-col items-center relative z-10 w-[60px] sm:w-[76px] md:w-32">

                    <div className="relative mb-3 sm:mb-4">
                      <div className={`absolute -top-1 sm:-top-3 -right-2 sm:-right-3 w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center text-[8px] sm:text-[9px] md:text-[11px] font-bold border-2 transition-all duration-100 z-20
                           ${isActive
                          ? "bg-[#F18D37] text-black border-white"
                          : "bg-[#E3E3E0] text-black border-black"
                        }`}>
                        {step.num}
                      </div>

                      <div className={`w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 relative z-10 ${isActive
                        ? "bg-[#F18D37]"
                        : "bg-[#E3E3E0]"
                        }`}>
                        <Notebook className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 ${isActive ? "text-black" : "text-[#1c1c1c]"}`} />
                      </div>
                    </div>
                    <p className="text-center text-[11px] sm:text-sm md:text-base leading-tight font-medium text-[#E3E3E0]">
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 sm:mt-8 md:mt-12 min-h-[100px] bg-[#1c1c1c]/0">
            <div>
              <h4 className="text-[22px] sm:text-[30px] md:text-[40px] font-semibold text-[#E3E3E0] mb-2 transition-all">
                {Steps[activeIndex].title}:
              </h4>
              <p className="text-[#B5B4B2] text-base sm:text-[22px] md:text-[30px] max-w-3xl transition-all">
                {Steps[activeIndex].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        style={{
          opacity: useTransform(smoothProgress, [0.85, 0.90], [0, 1]),
          y: useTransform(smoothProgress, [0.85, 0.90], [15, 0])
        }}
      >
        <div className="px-6 md:px-10 lg:px-15 mb-24 text-center">
          <h3
            data-ns-animate
            data-direction="up"
            data-offset="60"
            data-duration="2"
            className="text-[26px] sm:text-[36px] md:text-[50px] font-normal text-[#E3E3E0] mb-4"
          >
            {existingPartners.title}
          </h3>
          <p
            data-ns-animate
            data-delay="0.08"
            data-offset="60"
            data-duration="2"
            className="text-[#B5B4B2] text-base sm:text-[20px] md:text-[25px] mx-auto mb-12"
          >
            {existingPartners.desc}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {existingPartners.logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Partner logo"
                className="h-[35px] sm:h-[45px] md:h-[50px] w-[200px] sm:w-[250px] md:w-[300px] object-contain"
                data-ns-animate
                data-delay={0.1 * i}
                data-offset="40"
              />
            ))}
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-15 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="rounded-2xl overflow-hidden"
              data-ns-animate
              data-direction="left"
              data-offset="100"
              data-duration="2"
            >
              <img
                src={Img4}
                alt="Partner with us"
                className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[660px] object-cover rounded-[15px]"
              />
            </div>

            <div
              data-ns-animate
              data-direction="right"
              data-offset="100"
              data-duration="2"
            >
              <h4 className="text-[26px] sm:text-[36px] md:text-[50px] font-normal text-[#E3E3E0] mb-4">
                {partnerWithUs.title}
              </h4>
              <p className="text-[#B5B4B2] text-base sm:text-[20px] md:text-[25px] mb-8 max-w-md">
                {partnerWithUs.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partnerWithUs.cards.map((card, i) => (
                  <div
                    key={i}
                    className="group w-full h-auto min-h-[140px] md:min-h-[210px]
                            rounded-[10px] p-[15px] bg-white/4 border border-white/8 
                            transition-all duration-500 ease-out cursor-default hover:-translate-y-2"
                    data-ns-animate
                    data-delay={0.1 * i}
                    data-offset="40"
                    data-duration="2"
                  >
                    <p className="text-white text-base md:text-[20px] font-medium mb-3 md:mb-[60px] transition-colors duration-500 ">{card.num}</p>
                    <h5 className="text-[#E3E3E0] text-base md:text-[20px] font-semibold mb-2 transition-colors duration-500">
                      {card.title}
                    </h5>
                    <p className="text-white/50 text-sm md:text-[16px] font-medium leading-relaxed transition-colors duration-500">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-15 mb-4">
          <div className="rounded-2xl border border-[#444444] bg-[#2A2A2A] px-5 sm:pl-8 md:pl-[87px] sm:pr-5 py-5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
            <div
              data-ns-animate
              data-direction="left"
              data-offset="80"
              data-duration="2"
              className="w-full md:w-1/2 py-8 md:py-0"
            >
              <h3 className="text-[28px] sm:text-[38px] md:text-[50px] font-normal text-[#E3E3E0] mb-4 sm:mb-6 md:mb-8">
                Apply for Collaboration
              </h3>
              <p className="text-xl sm:text-[24px] md:text-[30px] font-medium text-white mb-2">
                Interested in partnering with <span className="text-[#F18D37]">Coirei?</span>
              </p>
              <p className="text-[#B5B4B2] text-sm sm:text-base md:text-[20px] leading-relaxed mb-6 sm:mb-8 max-w-[340px]">
                Share your details and proposal to explore collaboration opportunities.
              </p>

              <button className="bg-white text-[#111111] font-semibold text-sm sm:text-[16px] py-2.5 sm:py-3 px-4 sm:px-5 rounded-md hover:bg-gray-200 transition-colors">
                contact our team to get started
              </button>
            </div>

            <div
              data-ns-animate
              data-direction="right"
              data-offset="100"
              data-duration="2"
              className="w-full md:w-1/2 flex justify-end h-full p-4"
            >
              <img
                src={Img5}
                alt="Contract signing handshake"
                className="w-full h-[200px] sm:h-[250px] md:h-[450px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>

      </motion.div>
    </section >
  );
};

export default LearningSection;

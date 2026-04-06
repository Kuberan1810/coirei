
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


import { BookOpen, Layers, Zap, Users, BarChart2, ShieldCheck, Notebook } from "lucide-react";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
    offset: ["start 25%", "end 70%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveIndex(0);
    else if (latest < 0.5) setActiveIndex(1);
    else if (latest < 0.75) setActiveIndex(2);
    else setActiveIndex(3);
  });

  return (
    <section className="instrument-sans text-white pt-24 sm:pt-28 md:pt-32 pb-0">
      {/* ── Hero ── */}
      <div className="main-container">
        <div
          data-ns-animate
          data-offset="100"
          className="max-w-4xl mx-auto text-center mb-24 px-4"
        >
          <h1 className="text-[32px] sm:text-4xl md:text-[50px] font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-[#999999] leading-tight mb-4">
            Master Workflows, Pipelines & AI-<br className="hidden md:block" /> Assisted Development
          </h1>
          <p className="text-base md:text-xl text-white leading-relaxed max-w-lg mx-auto">
            Coirei delivers practical learning to master workflows and build career-ready skills.
          </p>
        </div>

        {/* ── Collaborate Section ── */}
        <div className="px-6 md:px-10 lg:px-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div data-ns-animate data-offset="80">
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-normal text-[#E3E3E0] leading-tight mb-5">
                Collaborate with <span className="text-[#F18D37]">Coirei</span>
              </h2>
              <p className="text-[#B5B4B2] text-base leading-relaxed mb-10 max-w-md">
                We partner with organizations to deliver practical, outcome-driven learning that equips learners with real-world skills and career-ready expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 mb-20 lg:mb-0">
                <div className="border border-white/20 rounded-lg p-3">
                  <p className="text-white/50 text-xs mb-1">Powered by</p>
                  <p className="text-sm font-medium text-[#E3E3E0]">Real-world use cases</p>
                </div>
                <div className="border border-white/20 rounded-lg p-3">
                  <p className="text-white/50 text-xs mb-1">Driven by</p>
                  <p className="text-sm font-medium text-[#E3E3E0]">Industry standards</p>
                </div>
              </div>
            </div>

            <div data-ns-animate data-direction="right" data-offset="100" data-duration="1.1">
              <div className="rounded-2xl bg-[#1c1c1c]">
                <img
                  src={Img}
                  alt="Team collaboration"
                  className="w-[680px] h-[440px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="mt-8">
          <div className="sticky">
            <div className="p-4 sm:p-8 md:p-14">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#E3E3E0] mb-4">
                Our Collaboration Network
              </h3>
              <p className="text-[#B5B4B2] font-instrumental-sans text-base md:text-lg leading-relaxed max-w-3xl mb-24">
                We actively partner with a diverse ecosystem to bridge the gap between academic learning and industry requirements.
              </p>

              <div className="relative">
                <div className="absolute top-6 sm:top-8 left-[38px] sm:left-16 right-[38px] sm:right-16 h-[2px] bg-white/20 -translate-y-1/2 rounded-full overflow-hidden">
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
                      <div key={idx} className="flex flex-col items-center relative z-10 w-[76px] sm:w-32">

                        <div className="relative mb-3 sm:mb-4 pt-2 sm:pt-0">
                          <div className={`absolute -top-1 sm:-top-3 -right-2 sm:-right-3 w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[9px] sm:text-[11px] font-bold border-2 transition-all duration-100 z-20
                           ${isActive
                              ? "bg-[#F18D37] text-black border-black"
                              : "bg-[#E3E3E0] text-black border-black"
                            }`}>
                            {step.num}
                          </div>

                          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 relative z-10 ${isActive
                            ? "bg-[#F18D37]"
                            : "bg-[#E3E3E0]"
                            }`}>
                            <Notebook className={`w-5 h-5 sm:w-8 sm:h-8 ${isActive ? "text-black" : "text-[#1c1c1c]"}`} />
                          </div>
                        </div>
                        <p className="text-center text-[10px] leading-tight sm:text-sm md:text-base font-medium text-[#E3E3E0]">
                          {step.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 min-h-[100px] bg-[#1c1c1c]/0">
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-[#E3E3E0] mb-2 transition-all">
                    {Steps[activeIndex].title}:
                  </h4>
                  <p className="text-[#B5B4B2] text-base md:text-lg max-w-3xl transition-all">
                    {Steps[activeIndex].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          data-ns-animate
          data-offset="60"
          className="px-6 md:px-10 lg:px-15 mb-24 text-center"
        >
          <h3 className="text-3xl sm:text-4xl md:text-[52px] font-normal text-[#E3E3E0] mb-4">
            {existingPartners.title}
          </h3>
          <p className="text-[#B5B4B2] text-base max-w-xl mx-auto mb-12">
            {existingPartners.desc}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {existingPartners.logos.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Partner logo"
                className="h-10 md:h-14 object-contain"
                data-ns-animate
                data-delay={0.15 * i}
                data-offset="20"
              />
            ))}
          </div>
        </div>

        {/* ── Partner With Us ── */}
        <div className="px-6 md:px-10 lg:px-15 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="rounded-2xl overflow-hidden"
              data-ns-animate
              data-direction="left"
              data-offset="100"
            >
              <img
                src={Img4}
                alt="Partner with us"
                className="w-full h-[520px] object-cover rounded-2xl"
              />
            </div>

            <div
              data-ns-animate
              data-direction="right"
              data-offset="100"
            >
              <h4 className="text-3xl sm:text-4xl font-normal text-[#E3E3E0] mb-4">
                {partnerWithUs.title}
              </h4>
              <p className="text-[#B5B4B2] text-base mb-8 max-w-md">
                {partnerWithUs.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partnerWithUs.cards.map((card, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl p-5 mb-3 bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-500 cursor-default hover:scale-[1.02]"
                    data-ns-animate
                    data-delay={0.15 + i * 0.1}
                    data-offset="24"
                  >
                    <p className="text-white text-sm font-medium mb-3">{card.num}</p>
                    <h5 className="text-[#E3E3E0] text-medium font-semibold mb-2">
                      {card.title}
                    </h5>
                    <p className="text-white/50 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Apply for Collaboration ── */}
        <div className="px-6 md:px-10 lg:px-15 mb-28">
          <div
            className="rounded-2xl border border-[#444444] bg-[#2A2A2A] pl-8 md:pl-[87px] pr-5 py-5 flex flex-col md:flex-row items-center justify-between gap-10"
            data-ns-animate
            data-offset="60"
          >
            <div className="w-full md:w-1/2 py-8 md:py-0">
              <h3 className="text-[36px]  sm:text-[42px]  md:text-[50px] font-normal text-[#E3E3E0] mb-8">
                Apply for Collaboration
              </h3>
              <p className="text-[30px]  font-medium text-white mb-2">
                Interested in partnering with <span className="text-[#F18D37]">Coirei?</span>
              </p>
              <p className="text-[#B5B4B2] text-[13px] md:text-[20px] leading-relaxed mb-8 max-w-[340px]">
                Share your details and proposal to explore collaboration opportunities.
              </p>

              <button className="bg-white text-[#111111] font-semibold text-[16px] uppercase tracking-wide py-3 px-5 rounded-md hover:bg-gray-200 transition-colors">
                contact our team to get started
              </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-end h-full p-4">
              <img
                src={Img5}
                alt="Contract signing handshake"
                className="w-[540px] h-[250px] md:h-[450px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;

import { BookOpen, Layers, Zap, Users, BarChart2, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const capabilities = [
  {
    icon: <BookOpen size={22} />,
    title: "Guided Tutorials",
    desc: "Step-by-step walkthroughs from fundamentals to advanced concepts.",
  },
  {
    icon: <Zap size={22} />,
    title: "Hands-on Examples",
    desc: "Real execution scenarios that reflect how things work in practice.",
  },
  {
    icon: <Layers size={22} />,
    title: "Structured Paths",
    desc: "Topics organized progressively so you always know what to learn next.",
  },
  {
    icon: <Users size={22} />,
    title: "Team & Individual",
    desc: "Resources tailored for solo developers and engineering teams alike.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Progress Tracking",
    desc: "Personalized learning paths based on what you've completed.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Always Up-to-date",
    desc: "Continuously updated to reflect real-world platform behavior.",
  },
];

const sections = [
  {
    title: "How Learning Works",
    content:
      "Learning on Coirei follows a step-by-step approach. Topics are organized from fundamentals to advanced concepts, with clear explanations, examples, and best practices. You can learn at your own pace while building practical knowledge you can immediately apply.",
  },
  {
    title: "Learning Assistance",
    content:
      "Coirei offers contextual learning assistance across documentation, tutorials, and examples to help you understand concepts faster. It helps by explaining intent, breaking down workflows, and highlighting important execution details so you can focus on understanding rather than memorization. Examples and guidance are designed to be safe and educational, learning support never performs actions on your behalf.",
  },
  {
    title: "Learning Model",
    content:
      "Coirei follows a learner-first approach. Our focus is on building practical skills through real examples rather than passive reading. Learning resources are designed to be accessible, actionable, and continuously improved.",
  },
  {
    title: "Open & Verifiable Learning",
    content:
      "Coirei believes effective learning is built on clarity and transparency. All content is clearly explained, continuously reviewed, and aligned with real platform behavior, so you always learn what's true, not what's outdated.",
  },
];

const LearningSection = () => {

  const navigate = useNavigate();
  return (
    <section className="text-white pt-24 sm:pt-28 md:pt-32 pb-0">

      {/* ── Hero ── */}
      <div className="main-container">
        <div className="max-w-3xl mx-auto text-center mb-20 px-4">
          <span className="inline-block mb-5 text-xs font-semibold uppercase tracking-widest text-white/40 border border-white/10 px-4 py-1.5 rounded-full">
            Learning Hub
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#E3E3E0] leading-tight mb-6">
            Learn and grow with Coirei
          </h1>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            At Coirei, we provide structured learning resources to help you understand execution workflows, pipelines, and AI-assisted development. Learn through practical guides built for real-world usage.
          </p>
        </div>

        {/* ── Quote banner ── */}
        <div className="border-t border-b border-white/10 py-12 mb-20 px-4">
          <p className="text-xl md:text-2xl font-medium text-[#E3E3E0] text-center max-w-4xl mx-auto leading-relaxed">
            "Our learning approach is built on{" "}
            <span className="text-white/50">clarity</span>,{" "}
            <span className="text-white/50">practice</span>, and{" "}
            <span className="text-white/50">real-world usage</span>."
          </p>

          {/* <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl mx-auto mt-6 text-center">
            Coirei learning resources are designed to help you understand concepts through hands-on examples and guided explanations. Every topic focuses on how things work in practice, helping you build confidence as you learn. We believe effective learning should be transparent, structured, and directly applicable to real projects.
          </p> */}
        </div>

        {/* ── Capabilities grid ── */}
        <div className="mb-24 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E3E3E0] mb-2">
            Learning Capabilities
          </h2>
          <p className="text-white/50 text-lg mb-10 ">
            Everything you need to develop practical skills, at your own pace.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="group rounded-2xl p-6 bg-white/4 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/70 mb-5 group-hover:text-white transition-colors duration-300">
                  {cap.icon}
                </div>
                <h2 className="text-lg font-semibold text-[#E3E3E0] mb-2">
                  {cap.title}
                </h2>
                <p className="text-base text-white/50 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Getting started highlight ── */}
        <div className="mb-24 px-4">
          <div className="rounded-2xl border border-white/10 bg-white/4 p-8 md:py-15 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#E3E3E0] mb-3">
                Getting Started
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-5">
                You can begin learning on Coirei immediately without signing in.
                Creating an account also unlocks:
              </p>
              <ul className="space-y-2">
                {[
                  "Saving progress across devices",
                  "Access to personalized learning paths",
                  "Recommendations based on your interests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-[15px]">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => navigate("/contact-sales")}
              className="bg-white text-[#3E3E3E] rounded-lg py-2.5 px-5 font-medium hover:bg-[#3E3E3E] hover:text-white transition-all duration-300 cursor-pointer"
            >
              Get started
            </button>


          </div>
        </div>

        {/* ── Editorial sections ── */}
        <div className="max-w-3xl mx-auto px-4 pb-24">
          <div className="flex flex-col gap-14">
            {sections.map((sec, i) => (
              <div key={i} className="border-t border-white/10 pt-10">
                <h2 className="text-xl md:text-2xl font-semibold text-[#E3E3E0] mb-4">
                  {sec.title}
                </h2>
                <p className="text-white/60 text-[15px] md:text-base leading-[1.9]">
                  {sec.content}
                </p>
              </div>
            ))}

            {/* Contact entry */}
            <div className="border-t border-white/10 pt-10">
              <h2 className="text-xl md:text-2xl font-semibold text-[#E3E3E0] mb-4">
                Contact the Coirei Team
              </h2>
              <p className="text-white/60 text-[15px] md:text-base leading-[1.9]">
                For questions about learning resources, privacy, data handling, or
                governance, reach us at{" "}
                <a
                  href="mailto:info@coirei.com"
                  className="text-white/80  hover:text-white hover:underline transition-colors hover:underline-offset-4 hover:underline-thickness-2 duration-300"
                >
                  info@coirei.com
                </a>
                . You may also review our Privacy Policy, Terms of Service, and Trust
                documentation.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default LearningSection;

import {
  EarthLock,
  CircleGauge,
  Users,
BadgeCheck,
  ClipboardList,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: EarthLock,
    title: "Identity & Access Control",
    desc: "Granular permissions across humans and agents, enforced directly at execution time.",
  },
  {
    icon: CircleGauge,
    title: "Execution Insights",
    desc: "Real-time visibility into what’s running, what’s blocked, and what’s completed without manual reporting.",
  },
  {
    icon: Users,
    title: "Collaboration Without Noise",
    desc: "No endless chats.Execution itself becomes the source of truth.",
  },
  {
    icon: ClipboardList,
    title: "Decision Traceability",
    desc: "Every decision is logged, explainable, and reviewable by human or AI.",
  },
  {
    icon: Eye,
    title: "State Awareness",
    desc: "Agents understand system state, dependencies, and outcomes before acting.",
  },
  {
    icon: BadgeCheck,
    title: "Secure by Default",
    desc: "Security and compliance are embedded directly into the execution flow.",
  },
];

const FeaturesGlass = () => {
  return (
    <section className="text-white">

      {/* HEADER */}
      <div className="py-20 px-6 text-center">
        <span
          className="inline-flex items-center justify-center
          text-xl text-white py-2.5 px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10"
        >
          How it Works
        </span>

        <h2 className="mx-auto leading-18 text-[#E3E3E0] text-[32px] font-normal md:text-[60px]  text-center mb-5">
          Execute Smarter with an All-in-One Platform
        </h2>

        <p className="text-white/50 font-light text-xl">
          Insight, action, and validation flow together without handoffs or tool hopping.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="py-5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                border border-white/15
                shadow-[0_8px_32px_rgba(0,0,0,0.6)] "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                    bg-white/10 backdrop-blur-md
                    border border-white/20"
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="font-semibold text-xl text-white">
                    {item.title}
                  </h3>
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-white/15 mb-4 " />

                {/* DESCRIPTION */}
                <p className="text-xl text-white/80  leading-relaxed mb-10">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FeaturesGlass;

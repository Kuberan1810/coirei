import component1 from "../../../assets/images/features/component1.svg"
import component2 from "../../../assets/images/features/component2.jpeg"
import component3 from "../../../assets/images/features/component3.jpeg"
import component4 from "../../../assets/images/features/component4.jpeg"


const FeatureCategories = () => {

  const features = [
    {
      title: "Language Understanding",
      description:
        "Extract intent, meaning, and sentiment from human language turning unstructured text into valuable data.",
      size: "large",
      position: "top",
      source: component1
    },
    {
      title: "AI Workflow Automation",
      description:
        "Automate repetitive tasks, approvals, and data processing with intelligent, trigger-based flows. Extract intent, meaning, and sentiment from human language—turning unstructured text into valuable data.",
      size: "wide",
      position: "bottom",
      source: component2
    },
    {
      title: "Your AI Command Center",
      description:
        "Seamlessly navigate between a diverse array of generative AI modules—from code generation to creative design—all integrated within a single, powerful workspace designed to accelerate your project from concept to completion.",
      size: "wide",
      position: "bottom",
      source: component3
    },
    {
      title: "Unified Security",
      description:
        "Fortify your entire digital ecosystem with a comprehensive, centralized security platform that seamlessly protects across all your applications.",
      size: "small",
      position: "bottom",
      source: component4
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`
              group relative rounded-2xl p-8 overflow-hidden
              bg-[#292929]/30
              backdrop-blur-xl
              border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              hover:border-white/20
              transition-all duration-300
              hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]
              ${item.size === "large" ? "md:row-span-1" : ""}
              ${item.size === "wide" ? "md:col-span-2" : ""}
            `}
          >
            {/* Animated Border Trace */}
            <div className="border-trace" />

            {/* Liquid Glass Effect - Multiple Layers */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-gray-400/5 via-transparent to-gray-300/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Inner Glass Border */}
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            {item.position === "top" ? (
              <img src={item.source} alt="component1" className='mb-[50px] relative z-10' />
            ) : null}

            <h3 className="relative z-10 text-xl font-semibold text-white/90">
              {item.title}
            </h3>

            <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-400 max-w-xl">
              {item.description}
            </p>

            <button className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300">
              Get Started
              <span className="text-lg transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            {item.position === "bottom" ? (
              <img src={item.source} alt="" className='mt-[50px] relative z-10' />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCategories
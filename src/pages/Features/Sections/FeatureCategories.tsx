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
              relative rounded-2xl p-8
              bg-gradient-to-b from-[#0b1220] to-[#05080f]
              border border-white/5
              shadow-lg
              ${item.size === "large" ? "md:row-span-1" : ""}
              ${item.size === "wide" ? "md:col-span-2" : ""}
            `}
          >
            {/* Decorative Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
            {item.position == "top" ? <img src={item.source} alt="component1" className='mb-[50px]' /> : ""}
            <h3 className="relative z-10 text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="relative z-10 mt-4 text-sm leading-relaxed text-gray-400 max-w-xl">
              {item.description}
            </p>

            <button className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition">
              Get Started
              <span className="text-lg">→</span>
            </button>
            {item.position == "bottom" ? <img src={item.source} alt="" className='mt[50px]' /> : ""}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCategories
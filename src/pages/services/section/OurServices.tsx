import { useState } from "react";
import {
  Smartphone,
  Globe,
  ShieldCheck,
  BarChart,
  Cpu,
  Cloud,
  Settings,
  Database,
  Code,
  Layers,
  Rocket,
  Monitor,
} from "lucide-react";

const services = [
  {
    title: "Company Website (Full Build)",
    icon: Smartphone,
    desc: "We build high-performance websites that represent your brand with clarity and speed custom pages, smart forms etc. ",
  },
  {
    title: "Custom CRM Lite",
    icon: Globe,
    desc: "A lightweight CRM tailored for growing teams. Track leads, manage customers, automate follow-ups, monitor pipelines, and centralize all your data.",
  },
  {
    title: "AI Chatbot + Knowledge Base",
    icon: ShieldCheck,
    desc: "A smart chatbot that never sleeps. It answers customer questions, handles support tasks, captures leads.",
  },
  {
    title: "Business Process Automation",
    icon: BarChart,
    desc: "Turn slow manual work into fast automated workflows from approvals and ticketing to reporting and document management.",
  },
  {
    title: "E-Commerce Store Development",
    icon: Cpu,
    desc: "Launch a clean and powerful online store with easy product management,secure checkout, order tracking, and integrated payments.",
  },
  {
    title: "Dashboard & Analytics Setup",
    icon: Cloud,
    desc: "We build powerful, real-time dashboards that give you complete visibility into your business.",
  },
  {
    title: "ERP Module Deployment",
    icon: Settings,
    desc: "Start with the part of your business that needs the most structure Inventory, HR, Sales, or Finance we deploy a focused ERP module. ",
  },
  {
    title: "Document AI",
    icon: Database,
    desc: "Using intelligent OCR, layout-aware parsing, Torstan-level extraction strategies, ITS-based semantic understanding, and deep NLP models.",
  },
  {
    title: "AI Product Development",
    icon: Code,
    desc: "Custom AI algorithms and predictive models end-to-end AI product lifecycle, from ideation to deployment.",
  },
  {
    title: "Predictive Analytics & Forecasting",
    icon: Layers,
    desc: "Make informed business decisions before the market shifts our predictive analytics tools help you foresee patterns, manage risks.",
  },
  {
    title: "AI Integration & Customization",
    icon: Rocket,
    desc: "AI integration for ERP, CRM, and SaaS. Automatic invoce creation from CRM deals, scalable, secure cloud or hyrid deploment.",
  },
  {
    title: "AI Strategy & Advisory",
    icon: Monitor,
    desc: "Turn AI potential into a sustainable business advantage our advisory services help organizations craft long-term AI strategies.",
  },
];

const OurServices = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="text-white mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">
      <div className="">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>

            <p className="text-[16px] sm:text-lg md:text-xl lg:text-2xl  text-white  inline-flex items-center justify-center
           py-2.5 px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10">Our Services</p>
            
            <h2 className="text-[40px] md:text-4xl max-sm:text-[28px] font-medium leading-tight">
              Services We Provide to{" "}
              <span className="block text-orange-500">Elevate Your Business</span>
            </h2>
          </div>  


        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visibleServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="
                  rounded-2xl p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition-all
                "
              >
                {/* ICON */}
                <div
                  className="
                    w-11 h-11 mb-4 rounded-lg
                    flex items-center justify-center
                    bg-white/10 backdrop-blur
                    border border-white/20
                  "
                >
                  <Icon size={22} className="text-white-400" />
                </div>

                <h3 className="text-lg md:text-xl  font-bold mb-5">
                  {service.title}
                </h3>

                <p className=" text-base lg:text-lg text-white/70 font-medium leading-relaxed mb-5">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* VIEW ALL BUTTON */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full bg-white/10 border border-white/20
            hover:bg-white hover:text-black transition-all"
          >
            {showAll ? "Hide Services" : "View All Services"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurServices;

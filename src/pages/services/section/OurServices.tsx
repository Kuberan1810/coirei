
import {
  Smartphone,
  Globe,
  BotMessageSquare,
  BarChart,
  LayoutDashboard,
  PenTool,
} from "lucide-react";

const services = [
  {
    title: "Web & Platform Development",
    icon: Smartphone,
    desc: "Custom websites and web platforms built for scale, performance, and security, with analytics and automation embedded from day one.",
  },
  {
    title: "Custom Business Applications (CRM / ERP / Portals)",
    icon: Globe,
    desc: "Tailored CRM, ERP, and internal systems designed around your workflows, not generic templates, with intelligent reporting and automation.",
  },
  {
    title: "AI Chatbots & Virtual Assistants",
    icon: BotMessageSquare,
    desc: "Intelligent chatbots for customer support, sales, HR, and operations, integrated with your data, tools, and business logic.",
  },
  {
    title: "Process Automation & System Integration",
    icon: BarChart,
    desc: "Automation of repetitive tasks and seamless integration across tools, databases, and platforms to reduce manual effort and errors",
  },
  {
    title: "Data, Dashboards & Business Intelligence",
    icon: LayoutDashboard,
    desc: "Real-time dashboards and decision systems that turn operational data into clear insights for faster and better decisions.",
  },
  {
    title: "UI/UX, Branding & Product Design",
    icon: PenTool,
    desc: "User-focused UI/UX, product interfaces, and visual design that improve usability, adoption, and trust across digital products.",
  }
];

const OurServices = () => {
  
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
          {services.map((service, index) => {
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
        
    

      </div>
    </section>
  );
};

export default OurServices;

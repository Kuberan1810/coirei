import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Utensils, ShoppingBag, GraduationCap, Laptop, HeartPulse, Building2, Code } from "lucide-react";

const industries = [
    { name: "Software", icon: <Code size={20} /> },
    { name: "Food", icon: <Utensils size={20} /> },
    { name: "E-Commerce", icon: <ShoppingBag size={20} /> },
    { name: "Education", icon: <GraduationCap size={20} /> },
    { name: "Healthcare", icon: <HeartPulse size={20} /> },
    { name: "Real Estate", icon: <Building2 size={20} /> },
    { name: "SaaS", icon: <Laptop size={20} /> },
];

const faqs = [
    {
        question: "How do you deliver your AI services?",
        answer: "We provide customized AI solutions tailored to your business needs, delivered via a secure cloud platform or on-premises integration."
    },
    {
        question: "Is my data secure with Coirei?",
        answer: "Yes, we prioritize data privacy and security. Our systems are built with industry-standard encryption and we comply with major security protocols."
    },
    {
        question: "Can I integrate Coirei with my existing tools?",
        answer: "Absolutely. Our AI solutions are designed to be flexible and can integrate with most modern software stacks and APIs without complex coding."
    }
];

const IndustriesServing = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <section className="py-20 overflow-hidden bg-[#161616]">
            
            {/* Header Section */}
            <div className="flex flex-col items-center text-center px-6 mb-16">
                <div 
                    data-ns-animate
                    className="flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 text-white/80 text-[14px] mb-8"
                >
                    <HelpCircle size={14} className="text-[#F67300]" />
                    FAQ
                </div>
                
                <h2 
                    data-ns-animate
                    className="text-[32px] sm:text-[42px] md:text-[60px] font-medium text-[#E3E3E0] leading-[1.13] md:leading-[68px] mb-8 max-w-4xl tracking-tight text-center"
                >
                    Industries we are serving with AI
                </h2>
                
                <p 
                    data-ns-animate
                    className="text-[#FFFFFF] text-[16px] sm:text-[20px] max-w-[908px] font-normal leading-relaxed md:leading-[32.5px] text-center"
                >
                    Connect your tools, track user behavior everywhere, and trigger intelligent follow-ups across all channels without writing a single line of code.
                </p>
            </div>

            {/* Industries Train (Marquee) */}
            <div className="relative flex overflow-hidden py-10">
                <div className="animate-marquee flex whitespace-nowrap gap-[25px] items-center">
                    {[...industries, ...industries].map((item, index) => (
                        <div 
                            key={index}
                            className="flex items-center gap-[25px] px-[20px] py-[15px] bg-[#1E1E1E] border-[0.5px] border-white/50 rounded-[12px] w-[420px] h-[110px] shrink-0"
                        >
                            <div className="w-14 h-14 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
                                {item.icon}
                            </div>
                            <span className="text-white text-[24px] font-medium tracking-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-6 mt-24 flex flex-col gap-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index}
                        data-ns-animate
                        data-delay={0.1 * index}
                        className={`group border rounded-2xl transition-all duration-300 ${
                            openFaq === index ? 'border-white/20 bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'
                        }`}
                    >
                        <button 
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
                        >
                            <span className="text-white text-[18px] sm:text-[22px] font-medium pr-8">
                                {faq.question}
                            </span>
                            {openFaq === index ? (
                                <ChevronUp className="text-white/70 shrink-0" />
                            ) : (
                                <ChevronDown className="text-white/70 shrink-0" />
                            )}
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            openFaq === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="p-8 pt-0 text-[#B5B4B2] text-[16px] sm:text-[18px] font-light leading-relaxed border-t border-white/5">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default IndustriesServing;

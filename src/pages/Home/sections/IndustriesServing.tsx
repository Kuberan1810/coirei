
import { Utensils, ShoppingBag, GraduationCap, Code } from "lucide-react";

const industries = [
    { name: "IT / Industries", icon: <Code size={20} /> },
    { name: "Food", icon: <Utensils size={20} /> },
    { name: "E-Commerce", icon: <ShoppingBag size={20} /> },
    { name: "Education", icon: <GraduationCap size={20} /> },



];

const IndustriesServing = () => {

    return (
        <section className="py-20 overflow-hidden bg-[#161616]">
            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-8 gap-4">
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-r from-[#161616] to-white" />
                <div
                    data-ns-animate
                    data-offset="80"

                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[16px] whitespace-nowrap shrink-0">
                    AI Solutions Across Industries
                </div>
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-l from-[#161616] to-white" />
            </div>
            {/* Header Section */}
            <div className="flex flex-col items-center text-center px-6 mb-16">

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
                            className="flex items-center gap-[25px] px-[20px] py-[15px] bg-[#1E1E1E] border-[0.5px] border-white/15 rounded-[12px] w-[420px] h-[110px] shrink-0 cursor-pointer transition-transform hover:scale-[1.02]"
                        >
                            <div className="w-14 h-14 rounded-[26px] bg-white/5 border border-white/15 flex items-center justify-center text-white/70">
                                {item.icon}
                            </div>
                            <span className="text-white text-[24px] font-medium tracking-tight">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
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


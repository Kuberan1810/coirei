import { BarChart2, Cpu } from "lucide-react";
import {Teacher} from "iconsax-react"
import { Link } from "react-router-dom";

const products = [
    {
        icon: <Cpu size={18} className="text-white/80" />,
        title: "Execa",
        description: "A unified execution platform for the entire software development lifecycle , plan, build, test, secure, deploy, and collaborate seamlessly.",
        to: "/products/execa",
    },
    {
        icon: <BarChart2 size={18} className="text-white/80" />,
        title: "Follei",
        description: "An AI-powered follow-up agent that automates lead capture, engagement, and workflows, helping you never miss opportunities and improve conversions.",
        to: "/products/follei",
    },
    {
        icon: <Teacher size={18} color="currentColor" className="text-white/80" />,
        title: "Coirei LMS",
        description: "Coirei LMS is a scalable learning management system built to create, manage, and track educational content efficiently.",
        to: "/products/Coireilms",
    },
];

function OurProducts() {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 pt-15 pb-16  md:pt-6 md:pb-20">
            {/* Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-12 gap-4">
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] w-full max-w-[342px] bg-linear-to-r from-[#161616] to-white"
                ></div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="px-5 py-1.5 border border-white/10 rounded-md bg-transparent text-white text-[14px] whitespace-nowrap"
                >
                    Our Products
                </div>
                <div
                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] w-full max-w-[342px] bg-linear-to-l from-[#161616] to-white"
                ></div>
            </div>

            {/* Centered heading */}
            <div className="text-center max-w-3xl mx-auto mb-6">
                <h2
                    data-ns-animate
                    data-offset="80"
                    className="text-[32px] sm:text-[40px] md:text-[48px] font-medium tracking-tight leading-[1.2] mb-6"
                >
                    <span className="text-[#F67300]">Execa, Follei </span>{" "}
             
                    <span className="text-white"> & Coirei LMS</span>
                </h2>
                <p
                    data-ns-animate
                    data-delay="0.1"
                    data-offset="80"
                    className="text-[#B5B4B2] text-[16px] sm:text-[18px] leading-relaxed"
                >
                   Build, launch, and scale intelligent digital products designed for real-world performance and growth.
                </p>
            </div>

            {/* Products */}
            <div className="flex flex-wrap justify-center gap-[30px] mt-16">
                {products.map((product, index) => {
                    const CardWrapper = product.to ? Link : "div";
                    const wrapperProps = product.to ? { to: product.to } : {};
                    return (
                        <CardWrapper
                            key={index}
                            {...(wrapperProps as any)}
                            data-ns-animate
                            data-delay={`${index * 0.1}`}
                            data-offset="80"
                            className="relative w-[440px] h-[360px]  rounded-[20px] overflow-hidden cursor-pointer group bg-[#29292980] border border-white/15 hover:bg-[#323232] hover:border-white/25 transition-all duration-500 no-underline "
                            style={{
                                boxShadow: "0 -20px 40px -20px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                            }}
                        >

                            {/* Card content */}
                            <div className="relative z-10 flex flex-col h-full p-[28px]">
                                {/* Icon */}
                                <div
                                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                                    style={{
                                        background: "rgba(255,255,255,0.07)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <div className="text-white/80">{product.icon}</div>
                                </div>

                                {/* Text pushed to bottom */}
                                <div className="mt-auto flex flex-col gap-[10px]">
                                    <h3 className="text-white font-bold tracking-tight text-[26px] mb-5 group-hover:text-orange-400 duration-300" >
                                        {product.title}
                                    </h3>
                                    <p className="text-white/70 text-[15px] md:text-[20px] leading-[1.65] font-light group-hover:text-white/80">
                                        {product.description}
                                    </p>
                                </div>


                            </div>
                        </CardWrapper>
                    );
                })}
            </div>
        </section>
    );
}

export default OurProducts; 
import { useEffect, useRef } from "react";
import { Wrench, BarChart2, Lightbulb } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        icon: <Lightbulb size={18} className="text-white/80" />,

        title: "Industry-Leading Solutions",
        description: "Delivering top-tier digital products built with precision and modern technology.",

        index: "01",
    },
    {
        icon: <BarChart2 size={18} className="text-white/80" />,

        title: "AI-Driven Innovation",
        description: "Smart AI-powered systems to automate processes and drive business efficiency.",
        index: "02",
    },
    {
        icon: <Wrench size={18} className="text-white/80" />,

        title: "Cost effective",
        description: "High-quality, scalable solutions designed to fit your business budget and goals.",

        index: "03",
    },
];

function WhyChooseUs() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const cards = cardsRef.current;
        if (!wrapper || cards.length < 3) return;

        if (window.innerWidth < 640) return;

        gsap.set(cards[0], { x: "0%", y: "0%", scale: 1, zIndex: 10, opacity: 1 });
        gsap.set(cards[1], { x: "0%", y: "80%", scale: 0.96, zIndex: 11, opacity: 0 });
        gsap.set(cards[2], { x: "0%", y: "160%", scale: 0.92, zIndex: 12, opacity: 0 });

        const spreadX = window.innerWidth < 1024 ? "-300px" : "-460px";
        const spreadXRight = window.innerWidth < 1024 ? "300px" : "460px";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top -50px", // Pin it a bit below the top, accounting for fixed navbars
                end: "+=1200",
                pin: true,
                scrub: 1.2,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Phase 1 — stack cards 1 and 2 into view behind card 0
        tl.to(cards[1], { y: "6%", scale: 0.98, opacity: 1, duration: 0.3, ease: "power2.out" }, 0);
        tl.to(cards[2], { y: "12%", scale: 0.96, opacity: 1, duration: 0.3, ease: "power2.out" }, 0.1);

        // Phase 2 — fan all three cards out
        tl.to(cards[0], { x: spreadX, y: "0%", scale: 1, duration: 0.5, ease: "power2.out" }, "+=0.05")
            .to(cards[1], { x: "0%", y: "0%", scale: 1, duration: 0.5, ease: "power2.out" }, "<")
            .to(cards[2], { x: spreadXRight, y: "0%", scale: 1, duration: 0.5, ease: "power2.out" }, "<");

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (

        <>

        <div ref={wrapperRef}>
            {/* Header */}
            <section className="mx-6 sm:mx-10 md:mx-15 pt-12 md:pt-16 pb-20 md:pb-6">
                <div className="flex items-center justify-center w-full mx-auto mb-10 gap-4">
                    <div
                        data-ns-animate
                        data-offset="80"
                        className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white"
                    ></div>
                    <div
                        data-ns-animate
                        data-offset="80"
                        className="px-5 py-1.5 border border-white/10 rounded-md bg-transparent text-white text-[14px] whitespace-nowrap shrink-0"
                    >

                        Why Choose Coirei?

                    </div>
                    <div
                        data-ns-animate
                        data-offset="80"
                        className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white"
                    ></div>
                </div>



            </section>
            <div className="flex flex-col items-center text-center gap-6">

                    <h2
                        data-ns-animate
                        data-offset="80"
                        className="text-[32px] sm:text-[40px] md:text-[48px] font-medium tracking-tight leading-[1.2]"
                    >
                        <span className="text-[#F67300]">A Smart Approach to Building </span>{" "}
                        <br />

                        <span className="text-white">AI-Driven Digital Products</span>

                  

                    </h2>
                    <p
                        data-ns-animate
                        data-delay="0.1"
                        data-offset="80"
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl"
                    >
                        We focus on innovation, scalability, and real-world impact, helping you build smarter solutions and grow your business with confidence.
                    </p>
                </div>



            {/* Mobile — vertical stack, no animation */}
            <div className="flex sm:hidden flex-col gap-6 mx-6 md:pb-16  ">
                {reasons.map((reason, index) => (
                    <div
                        key={index}

                        className="group rounded-2xl border border-white/15 bg-[#292929] px-5 py-5 flex flex-col justify-between shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] w-full min-h-[280px] hover:bg-[#323232] hover:border-white/25 transition-all duration-500"
                    >
                        <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300">
                            {reason.icon}
                        </div>
                        <div className="mt-auto pt-8">
                            <h3 className="text-white font-semibold tracking-wide text-[20px] mb-3">{reason.title}</h3>
                            <p className="text-[#a1a1aa] text-[16px] leading-relaxed">{reason.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tablet+ — pinned GSAP animation */}
            <div
                data-ns-animate
                data-offset="80"
                className="relative w-full overflow-visible hidden sm:block"

                style={{ height: "50vh", minHeight: "400px" }}

            >
                <div className="absolute inset-0 flex items-center justify-center overflow-visible">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}

                            ref={(el) => { if (el) cardsRef.current[index] = el; }}
                            className="absolute rounded-[20px] border border-white/15 bg-[#292929] px-[20px] py-[20px] flex flex-col justify-between shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] w-[85vw] sm:w-[380px] md:w-[440px] h-[320px] sm:h-[360px] group hover:bg-[#323232] hover:border-white/25  transition-colors duration-300 glass"
                        >
                            <div className="w-[56px] h-[56px] rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300">
                                {reason.icon}
                            </div>
                            <div className="mt-auto pt-8">
                                <h3 className="text-white font-semibold tracking-wide text-[20px] mb-3">{reason.title}</h3>
                                <p className="text-[#a1a1aa] text-[16px] leading-relaxed">{reason.description}</p>
                            </div>

                            

                        </div>
                    ))}
                </div>
            </div>
        </div>

    </>

    );
}

export default WhyChooseUs;
import { Lightbulb, PenTool, BarChart2, Wrench } from "lucide-react";

const services = [
    {
        number: "Service - 1",
        icon: <Lightbulb size={18} className="text-white/80" />,
        title: "Web & Platform Development",
        description:
            "We offer professional web and platform development services to build fast, secure, and scalable digital solutions. From business websites to complex SaaS platforms, our development approach ensures performance, responsiveness, and future scalability.",
    },
    {
        number: "Service - 2",
        icon: <PenTool size={18} className="text-white/80" />,
        title: "Custom Business Applications (CRM / ERP / Portals)",
        description:
            "Streamline your business operations with custom-built CRM, ERP systems, and web portals tailored to your workflow. We develop scalable business applications that improve productivity, automate processes, and centralize your data efficiently.",
    },
    {
        number: "Service - 3",
        icon: <BarChart2 size={18} className="text-white/80" />,
        title: "AI Chatbots & Virtual Assistants",
        description:
            "Enhance customer engagement with intelligent AI chatbots and virtual assistants. Our solutions provide real-time support, automate conversations, and improve user experience across websites, apps, and messaging platforms.",
    },
    {
        number: "Service - 4",
        icon: <Lightbulb size={18} className="text-white/80" />,
        title: "Process Automation & System Integration",
        description:
            "Reduce manual work and increase efficiency with advanced process automation and system integration services. We connect your tools, automate workflows, and ensure seamless data flow across your business systems.",
    },
    {
        number: "Service - 5",
        icon: <Wrench size={18} className="text-white/80" />,
        title: "Data, Dashboards & Business Intelligence",
        description:
            "Make smarter decisions with real-time data dashboards and business intelligence solutions. We transform raw data into meaningful insights using interactive dashboards, reports, and analytics tools tailored to your business needs.",
    },
    {
        number: "Service - 6",
        icon: <BarChart2 size={18} className="text-white/80" />,
        title: "UI/UX, Branding & Product Design",
        description:
            "Create impactful digital experiences with our UI/UX design, branding, and product design services. We focus on user-centered design, modern interfaces, and strong brand identity to enhance engagement and conversion.",
    },
];

// Your navbar height in px   adjust if yours differs
const NAVBAR_HEIGHT = 72;

// Gap between navbar bottom and the topmost stacked card
const NAV_CLEARANCE = 24;

// How much each successive card peeks above the one below it
const CARD_STACK_OFFSET = 70;

// Derived: where the first card pins (and where the left panel pins to match)
const FIRST_CARD_TOP = NAVBAR_HEIGHT + NAV_CLEARANCE;

function WhatWeDo() {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-20">

            {/* Section Badge */}
            <div className="flex items-center justify-center w-full mx-auto mb-16 gap-4">
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-r from-[#161616] to-white" />
                <div
                    data-ns-animate
                    data-offset="80"

                    className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[16px] whitespace-nowrap shrink-0">
                    What We Do
                </div>
                <div

                    data-ns-animate
                    data-offset="80"
                    className="h-[1.5px] flex-1 bg-gradient-to-l from-[#161616] to-white" />
            </div>

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                {/*
                    LEFT PANEL
                    ─────────
                    Sticky at the same `top` as the first card so it aligns visually.
                    It naturally unpins and scrolls away once the flex-row parent ends
                    (i.e. once the right column   which drives the parent height   runs out).

                    The right column has NO extra padding-bottom, so the section ends
                    immediately after the last card finishes stacking. This means the
                    left panel gets dragged upward together with the section   exactly
                    the "left goes up as right goes up" behaviour you want.
                */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    className="w-full lg:w-[40%]"
                    style={{
                        position: "sticky",
                        top: `${FIRST_CARD_TOP}px`,
                        alignSelf: "flex-start",
                    }}
                >
                    <h2
                        data-ns-animate
                        data-direction="up"
                        data-offset="80"
                        className="text-[32px] sm:text-[40px] md:text-[46px] font-medium leading-[1.2] mb-6"
                    >
                        <span className="text-[#F67300]">Turn Ideas into Scalable </span><br />
                        <span className="text-white">Digital Solutions</span>
                    </h2>
                    <p
                        data-ns-animate
                        data-delay="0.1"
                        data-offset="80"
                        className="text-[#B5B4B2] text-[16px] sm:text-[18px] leading-relaxed max-w-lg xl:max-w-xl"
                    >
                        Build, launch, and scale your digital products faster with our end-to-end development services. We transform ideas into reliable, scalable, and real-world business solutions.
                    </p>
                </div>

                {/*
                    RIGHT   Stacking Cards
                    ──────────────────────
                    Each card is sticky with a progressively larger `top`, so cards
                    pile up below the navbar as you scroll down.

                    NO pb-* on this column   removing the bottom padding lets the
                    section end right after the last card, which in turn causes the
                    sticky left panel to unpin and scroll away naturally.
                */}
                <div
                    data-ns-animate
                    data-delay="0.2"
                    data-offset="80"
                    className="w-full lg:w-[60%] flex flex-col gap-16 lg:items-end"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                                sticky
                                bg-[#292929]
                                border border-white/15
                                rounded-2xl
                                hover:bg-[#323232]
                                hover:border-white/25
                                hover:-translate-y-1.5
                                transition-all duration-700
                                p-[20px] sm:p-[30px]
                                w-full lg:w-[561px] 
                                flex flex-col justify-between group
                            "
                            style={{
                                top: `${FIRST_CARD_TOP + index * CARD_STACK_OFFSET}px`,
                                zIndex: index + 1,
                            }}
                        >
                            {/* Top row: icon + badge */}
                            <div className="flex items-start justify-between">
                                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white transition-colors duration-300 mb-5">
                                    {service.icon}
                                </div>
                                <span className="text-[12px] text-white/50 border border-white/15 rounded-full px-4 py-1.5 bg-white/[0.08] font-medium tracking-wide">
                                    {service.number}
                                </span>
                            </div>

                            <div className="space-y-[15px]">
                                <h3 className="text-white font-medium text-[20px] sm:text-[21px] tracking-tight">
                                    {service.title}
                                </h3>
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                                <p className="text-[#B5B4B2] text-[14px] sm:text-[15px] leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhatWeDo;
import coireihome from "../../../assets/images/homepage/coireihome.png";

function AboutUs() {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-10 sm:py-15">
            <div className="flex flex-col lg:flex-row items-center  gap-12 lg:gap-14">

                {/* LEFT VISUAL (Team Image) */}
                <div
                    data-ns-animate
                    data-direction="up"
                    data-offset="80"
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:mt-6"
                >
                    <img 
                        src={coireihome} 
                        alt="Coirei Team" 
                        className="w-full h-auto object-cover shrink-0 rounded-xl" 
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">

                    {/* Badge / Pill */}
                    <div className="flex items-center w-full mb-8">
                        <div 
                               data-ns-animate
                            data-offset="80"
                            className="h-[1.5px] flex-1 bg-linear-to-r from-[#161616] to-white"
                        ></div>
                        <div 
                            data-ns-animate
                            data-offset="80"
                            className="px-8 py-2 border border-white/10 rounded-xl bg-transparent text-white text-[16px] mx-4"
                        >
                            About us
                        </div>
                        <div 
                         data-ns-animate
                            data-offset="80"
                            className="h-[1.5px] flex-1 bg-linear-to-l from-[#161616] to-white"
                        ></div>
                    </div>

                    {/* Title */}
                    <h2
                        data-ns-animate
                        data-offset="80"
                        className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] text-[#E3E3E0] font-medium leading-[1.2] max-w-2xl"
                    >
                        <span className="text-[#F67300]">Building Technology</span> That <br className="hidden lg:block" />
                        Drives Real Business Growth
                    </h2>

                    {/* Paragraphs */}
                    <div className="mt-8 space-y-2.5 text-[#B5B4B2] text-[16px] md:text-[18px] max-w-lg font-light leading-relaxed">
                        <p data-ns-animate data-delay="0.1" data-offset="80">
                            At Coirei, we specialize in delivering scalable digital solutions that solve real-world business challenges.
                        </p>
                        <p data-ns-animate data-delay="0.2" data-offset="80">
                            From web platforms to AI-powered systems, we combine innovation, strategy, and technology to help businesses grow efficiently.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutUs;
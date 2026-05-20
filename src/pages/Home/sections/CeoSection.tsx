import Ceo from "../../../assets/images/homepage/Ceo-img.png";

export const CeoSection = () => {
    return (
        <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-15 py-8 sm:py-14 md:py-20">
            <div>

                {/* BADGE */}
                <div
                    data-ns-animate
                    data-offset="80"
                    data-direction="up"
                    className="mb-6 sm:mb-8 md:mb-10"
                >

                    <h2 className="inline-flex items-center justify-center px-6 h-[52px] rounded-full border border-white/10 text-white text-lg bg-white/[0.02] backdrop-blur-xl mb-10">

                        What our CEO said
                    </h2>
                </div>


                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-start md:items-center">


                    {/* IMAGE */}
                    <div
                        data-ns-animate
                        data-delay="0.1"
                        data-offset="80"
                        data-direction="up"

                        className="w-full md:w-auto space-y-2 text-center"

                    >
                        <img
                            src={Ceo}
                            alt="CEO"
                            className="w-[140px] sm:w-[180px] md:w-40 xl:w-full max-w-sm rounded-xl"
                        />

                        <p className="text-white font-medium text-[17px] whitespace-nowrap">Naveen kumar S</p>

                    </div>

                    {/* QUOTE */}
                    <div>
                        <p
                            data-ns-animate
                            data-delay="0.2"
                            data-offset="80"
                            data-direction="up"
                            className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] font-normal text-[#E3E3E0] max-w-264 leading-snug sm:leading-snug"
                        >
                            "The future isn't about better AI suggestions.
                        </p>
                        <p
                            data-ns-animate
                            data-delay="0.3"
                            data-offset="80"
                            data-direction="up"

                            className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] font-normal text-[#E3E3E0] leading-snug sm:leading-snug"

                        >
                            It's about systems that can execute, verify, and adapt on their own without losing trust."
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
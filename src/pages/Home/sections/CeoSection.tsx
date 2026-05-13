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
                    <h2 className="inline-block text-[14px] sm:text-[16px] md:text-[18px] lg:text-2xl text-white py-2 px-5 sm:px-8 md:px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full">
                        What our CEO said
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 items-start md:items-end">

                    {/* IMAGE */}
                    <div
                        data-ns-animate
                        data-delay="0.1"
                        data-offset="80"
                        data-direction="up"
                        className="w-full md:w-auto"
                    >
                        <img
                            src={Ceo}
                            alt="CEO"
                            className="w-[140px] sm:w-[180px] md:w-40 xl:w-full max-w-sm rounded-xl"
                        />
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
                            className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] font-normal text-[#E3E3E0] max-w-264 leading-snug sm:leading-snug"
                        >
                            It's about systems that can execute, verify, and adapt on their own without losing trust."
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};
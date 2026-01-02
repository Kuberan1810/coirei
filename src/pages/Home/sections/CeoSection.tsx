import Ceo from "../../../assets/images/homepage/Ceo-img.png";

export const CeoSection = () => {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-16 sm:py-20">
            <div>

                <div className="mb-8 sm:mb-10">
                    <span className="inline-block text-[16px] sm:text-[18px] md:text-2xl text-white py-2 px-6 sm:px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full">
                        What our CEO said
                    </span>
                </div>

                <div className="flex flex-col  md:flex-row gap-8 md:gap-10 items-start md:items-end">

                    <div className="w-full md:w-auto">
                        <img src={Ceo} alt="CEO" className=" md:w-40 xl:w-full max-w-sm  rounded-xl" />
                    </div>

                    <div>
                        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-normal text-[#E3E3E0] max-w-264 leading-tight sm:leading-snug ">
                            “The future isn’t about better AI suggestions.
                        </p>
                        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-normal text-[#E3E3E0] max-w-264 leading-tight sm:leading-snug ">
                            It’s about systems that can execute, verify, and adapt on their own without losing trust.”
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

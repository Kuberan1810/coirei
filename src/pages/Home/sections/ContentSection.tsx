import React from "react";

const ContentSection = () => {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-16 sm:py-20">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-10">

                {/* LEFT */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-6xl text-[#E3E3E0] max-w-110 leading-tight">
                        Your execution data stays yours. Always.
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-1/2">
                    <p className="text-[18px] sm:text-[20px] md:text-2xl text-white max-w-152 mb-6 sm:mb-8 font-medium">
                        Agents operate only within permissions you define.
                    </p>

                    <p className="text-[18px] sm:text-[20px] md:text-2xl text-white max-w-152 mb-6 sm:mb-7.5 font-medium">
                        No training on your data. Ever. Control over analytics and telemetry.
                        BYO-LLM and zero-data-retention modes available for enterprise.
                    </p>

                    <button className="text-base sm:text-lg px-4 py-2.5 text-[#FFF9F9] bg-[#292929] rounded font-medium">
                        Learn more about data and privacy
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ContentSection;

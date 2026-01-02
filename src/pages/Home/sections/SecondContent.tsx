import React from "react";

const SecondContent = () => {
    return (
        <section className="mx-6 sm:mx-10 md:mx-15 py-16 sm:py-20">
            <div className="flex flex-col gap-10 sm:gap-15">

                {/* HEADING */}
                <div>
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-6xl text-white max-w-4xl leading-tight">
                        <span className="text-[#FF8800]">Private and Secure</span>
                        <br />
                        Transparency and control at every touchpoint.
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-7.5">

                   
                    <div className="w-full md:w-1/2">
                        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] text-white mb-2.5">
                            Complete Control
                        </h3>
                        <p className="max-w-md font-normal text-[16px] sm:text-[18px] md:text-xl text-white leading-relaxed">
                            Control exactly how much autonomy agents have, from approving
                            every step to allowing full autonomy. Configurable at the
                            individual and enterprise level.
                        </p>
                    </div>

                    
                    <div className="w-full md:w-1/2">
                        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] text-white mb-2.5">
                            Your data, secure and private
                        </h3>
                        <p className="max-w-md font-normal text-[16px] sm:text-[18px] md:text-xl text-white leading-relaxed">
                            Your code, workflows, and execution history are never used to
                            train external models. You control data retention, analytics
                            and telemetry (one-click disable), model access and routing.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SecondContent;

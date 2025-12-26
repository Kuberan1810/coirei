import React from "react";
import Integration from "../../../assets/images/Features/integration-icon.svg"
import CoireiLogo from "../../../assets/images/Features/coirei-cirlce-logo.png"
import RightLine from "../../../assets/images/Features/right-line.svg"
import LeftLine from "../../../assets/images/Features/left-line.svg"
import DownLine from "../../../assets/images/Features/down-line.svg"
import HosueIocn from "../../../assets/images/Features/house-icon.svg"
import CircleIcon from "../../../assets/images/Features/circle-icon.svg"
import CubeIocn from "../../../assets/images/Features/cube-icon.svg"
import HalftCircleIocn from "../../../assets/images/Features/halfcircle-icon.svg"
import CloudIocn from "../../../assets/images/Features/cloud-icon.svg"
import IconN from "../../../assets/images/Features/icon-N.svg"
import IconB from "../../../assets/images/Features/icon-B.svg"
import Icon3 from "../../../assets/images/Features/icon-3.svg"

const IntegrationsSection: React.FC = () => {
    return (
        <>
            <section className="mx-auto py-20 px-4">
                {/* Top Section */}
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center mb-20">
                        <div className="flex justify-center gap-2.5 text-2xl text-white py-2.5 px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10 ">
                            <img src={Integration} loading="lazy" alt="icon of link" />
                            <div className="text-lg">Integrations</div>
                        </div>

                        <div>
                            <h2 className="leading-none text-[#E3E3E0] text-[30px] font-normal md:text-[60px] max-w-2xl text-center">
                                Seamless integrations, zero friction
                            </h2>
                        </div>
                    </div>

                    {/* Integration Content Block */}
                    <div className="flex justify-center items-start w-full max-w-[960px] h-[302px] mt-8 relative mx-auto">
                        {/* LEFT LOGOS */}
                        <div className="text-center w-full h-[186px] relative">
                            <img
                                src={LeftLine}
                                loading="lazy"
                                alt=""
                                className="w-full h-full object-contain object-[100%_50%]"
                            />

                            <div className="absolute -top-[15%] left-0 bg-gradient-to-b bg-[#29292920] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                <img src={HalftCircleIocn} loading="lazy" alt="Integration Logo"/>
                            </div>

                            <div className="absolute top-[35%] left-[28%] bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                <img src={CircleIcon} loading="lazy" alt="Integration Logo" />
                            </div>

                            <div className="absolute -bottom-[15%] left-0 bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                <img src={HosueIocn} loading="lazy" alt="Integration Logo" />
                            </div>
                        </div>

                        {/* CENTER LOGOS */}
                        <div className="flex flex-col justify-center items-center pt-[29px]">
                            <div className="rounded-full flex justify-center items-center w-[130px] h-[130px] relative">
                                {/* STATIC LOGO */}
                                <div className="bg-[#161616] rounded-full z-[5] w-[80px] h-[80px] relative flex items-center justify-center overflow-hidden">
                                    <img
                                        src={CoireiLogo}
                                        loading="lazy"
                                        alt="Tasker Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* ANIMATED CIRCLES */}
                                <div className="absolute inset-0 border-[3px] border-[#bababa] rounded-full pointer-events-none animate-ring1" />
                                <div className="absolute inset-0 border-[3px] border-[#bababa] rounded-full pointer-events-none animate-ring2" />
                            </div>

                            <img
                                src={DownLine}
                                loading="lazy"
                                alt=""
                                className="w-[189px] h-[104px] absolute bottom-[40px]"
                            />

                            <div className="flex justify-between items-center w-full max-w-[189px] mx-auto absolute bottom-0 left-0 right-0">
                                <div className="relative -left-[10%] bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                    <img src={IconN} loading="lazy" alt="Integration Logo" />
                                </div>

                                <div className="relative -right-[10%] bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                    <img src={CloudIocn} loading="lazy" alt="Integration Logo" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT LOGOS */}
                        <div className="text-center w-full h-[186px] relative">
                            <img
                                src={RightLine}
                                loading="lazy"
                                alt=""
                                className="w-full h-full object-contain object-[0%_50%]"
                            />

                            <div className="absolute -top-[15%] right-0 bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                <img src={CubeIocn} loading="lazy" alt="Integration Logo" />
                            </div>

                            <div className="absolute top-[35%] right-[28%] bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                <img src={Icon3} loading="lazy" alt="Integration Logo" />
                            </div>

                            <div className="absolute -bottom-[15%] right-0 bg-gradient-to-b from-[#f5f5f5] via-[#d4d4d4] to-[#e5e5e5] border border-[#d4d4d4] rounded-full flex justify-center items-center w-[60px] h-[60px] p-2.5 shadow-[inset_0_-2px_1px_rgba(255,255,255,0.4)]">
                                <img src={IconB} loading="lazy" alt="Integration Logo" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="flex flex-col justify-center items-center gap-4 mt-12">
                    <div className="text-[#bababa] text-center leading-[1.5em]">
                        <p>Plug Tasklyn into your workflow in just a click.</p>
                        <p>No messy setups, no dev time needed—just instant productivity.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntegrationsSection;
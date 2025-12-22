import React from "react";
import Integration from "../../../assets/images/Features/integration-icon.svg"
import CoireiLogo from "../../../assets/images/Features//coirei-cirlce-logo.png"

const IntegrationsSection: React.FC = () => {
    return (
        <>
            <section className="integration-content-wrapper mx-35 py-20">
                {/* Top Section */}
                <div className="main-container">
                    <div className="flex flex-col items-center justify-center mb-20">
                        <div className="flex justify-center gap-2.5 text-2xl text-white py-2.5 px-10  bg-[#7B7B7B]/10 backdrop-blur-3xl  border border-white/20  w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10" >
                            <img src={Integration}  loading="lazy"   alt="icon of link" className=""
                            />
                            <div className="text-lg ">Integrations</div>
                        </div>

                        <div className="" >

                            <h2 className="leading-none text-[#E3E3E0] text-[30px]  font-small md:text-[60px] max-w-2xl text-center">
                                Seamless integrations, zero friction
                            </h2>
                        </div>
                    </div>


                    <div className="integration-content-block"
                    >
                        {/* LEFT LOGOS */}
                        <div className="integration-logos-wrapper">
                            <img
                                src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a3fc2efb83364ee531a3ad_Union%20(1).svg"
                                loading="lazy"
                                alt=""
                                className="integration-content-bg _01"
                            />

                            <div className="integration-logo-block left-top">
                                <img
                                    src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a407255bc6261aa3e4ed12_ae85591eb6af82af202550354ed49b23_Logomark.svg"
                                    loading="lazy"
                                    alt="Integration Logo"
                                />
                            </div>

                            <div className="integration-logo-block left-middle">
                                <img
                                    src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a40823b9bd59766ec4a716_integration-icon-5.svg"
                                    loading="lazy"
                                    alt="Integration Logo"
                                />
                            </div>

                            <div className="integration-logo-block left-bottom">
                                <img
                                    src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a40823ecc9cee981b73f0d_integration-icon-7.svg"
                                    loading="lazy"
                                    alt="Integration Logo"
                                />
                            </div>
                        </div>

                        {/* CENTER LOGOS */}
                        <div className="integration-center-logos-wrapper">
                            <div className="integration-center-logo-block">
                                {/* STATIC LOGO */}
                                <div className="integraction-center-logo bg-[#161616] rounded-full">
                                    <img
                                        src={CoireiLogo}
                                        loading="lazy"
                                        alt="Tasker Logo"
                                    />
                                </div>

                                {/* ANIMATED CIRCLES */}
                                <div className="integration-center-animation-block _01 circle-ring animate-ring1 " />
                                <div className="integration-center-animation-block _02 circle-ring animate-ring2" />
                            </div>



                            <img
                                src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a3fc2ee7afd33db8c1edb1_Union%20(2).svg"
                                loading="lazy"
                                alt=""
                                className="integration-content-bg-v2"
                            />

                            <div className="integration-center-logos-block">
                                <div className="integration-logo-block bottom-left">
                                    <img
                                        src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a40824e7f94af9aa27847c_integration-icon-3.svg"
                                        loading="lazy"
                                        alt="Integration Logo"
                                    />
                                </div>

                                <div className="integration-logo-block bottom-right">
                                    <img
                                        src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a4082409c05673f4605ea5_integration-icon-2.svg"
                                        loading="lazy"
                                        alt="Integration Logo"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT LOGOS */}
                        <div className="integration-logos-wrapper">
                            <img
                                src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a3fc2e8e927e98b0240249_Union.svg"
                                loading="lazy"
                                alt=""
                                className="integration-content-bg"
                            />

                            <div className="integration-logo-block right-top">
                                <img
                                    src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a408239fab4ba170fbde2f_integration-icon-6.svg"
                                    loading="lazy"
                                    alt="Integration Logo"
                                />
                            </div>

                            <div className="integration-logo-block right-bottom">
                                <img
                                    src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a408246e2460d0f54caceb_integration-icon-8.svg"
                                    loading="lazy"
                                    alt="Integration Logo"
                                />
                            </div>

                            <div className="integration-logo-block right-middle">
                                <img
                                    src="https://cdn.prod.website-files.com/68a2a7fda7681f6518b88f0b/68a40824963163b242195c4a_integration-icon-4.svg"
                                    loading="lazy"
                                    alt="Integration Logo"
                                />
                            </div>
                        </div>
                    </div>

                </div>


                {/* Bottom CTA */}
                <div className="integration-bottom-block"

                >
                    <div className="integration-bottom-description-block">
                        <p>Plug Tasklyn into your workflow in just a click.</p>
                        <p>
                            No messy setups, no dev time neededjust instant productivity.
                        </p>
                    </div>


                </div>
            </section>
        </>
    );
};

export default IntegrationsSection;

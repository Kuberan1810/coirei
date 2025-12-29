import company1 from "../../../../assets/images/contact/cta-banner.png"

const ContentSection = () => {
    return (
        <section className="mt-30 mx-15">
            <div className="w-[100%] flex flex-col justify-center items-center mb-38">
                <div className=" flex flex-row justify-center items-center mb-10">
                    <span className="w-[439px] hidden md:block h-px w-40 bg-gradient-to-r from-[#161616] via-[#FFFFFF] to-[#FFFFFF]" />
                    <h2 className="text-white text-4xl md:text-7xl font-light tracking-wide px-8">
                        Our Ethos
                    </h2>
                    <span className=" w-[439px] hidden md:block h-px w-40 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#161616]" />
                </div>
                <div className="mx-60">
                    <div >
                        <p className="text-white/80 text-lg mb-5  text-justify">Coirei began with the vision of re-imagining one of the fundamental
                            devtools – the terminal – to make it more usable and powerful for
                            all developers.</p>

                        <p className="text-white/80 text-lg mb-5 text-justify">  Our mission: to empower developers to ship better software
                            more quickly, freeing them to focus on their work's creative and
                            rewarding aspects.</p>
                        <p className="text-white/80 text-lg mb-5 text-justify">
                            As AI has advanced, Warp has evolved beyond its terminal
                            roots into a powerful agentic development environment – a workbench
                            for dispatching agents to code, deploy, and debug production
                            software.</p>

                        <p className="text-white/80 text-lg mb-5 text-justify"> We believe that soon developers will be “tech leads” for
                            groups of agents; rather than opening a code editor to write code or
                            a terminal to write commands, they will open Warp and prompt their
                            computer to build features, fix bugs, and diagnose production
                            issues.</p>

                        <p className="text-white/80 text-lg mb-5 text-justify">  In this future, AI doesn’t replace developers, it gives them
                            superpowers. It works alongside them, and together human + AI ship
                            better software together.
                        </p>
                        <p className="text-white/80 text-lg mb-5 text-justify">If you’re excited about building this future, come join us</p>
                    </div>
                </div>
            </div>
            <div className="pt-20 border-white border-t">
                <div className="flex mb-20">
                    <div className="leftcontent w-[50%] mt-20">
                        <h3 className="text-[40px] text-white/80 font-normal mb-2">Join us</h3>
                        <p className="text-white/60 max-w-2xl text-xl">
                            We are a company run by developers, building a core product for
                            all developers. We're also product-first engineers, which means we
                            are constantly focusing on the user-experience.
                        </p>
                    </div>
                    <div className="w-[50%] h-125 rightcontent bg-[#D9D9D9] rounded-md">

                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContentSection;
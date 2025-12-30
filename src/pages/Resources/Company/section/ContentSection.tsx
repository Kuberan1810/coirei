import JoinUs from "../../../../assets/images/Resourses/company/join-us.png"


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
                        <p className="text-[20px] text-white/80 text-lg mb-5  text-justify">Coirei exists to solve a fundamental problem
                            in software development: execution is fragmented.
                        </p>

                        <p className="text-[20px] text-white/80 text-lg mb-5 text-justify">  Today, planning, coding, testing, deployment,
                            collaboration, and governance live in separate systems. Context is lost, coordination slows teams down,
                            and visibility disappears as projects scale.
                        </p>

                        <p className="text-[20px] text-white/80 text-lg mb-5 text-justify"> As AI has advanced, Warp has evolved beyond its terminal
                            roots into a powerful agentic development environment a workbench
                            for dispatching agents to code, deploy, and debug production
                            software.
                        </p>

                        <p className="text-[20px] text-white/80 text-lg mb-5 text-justify"> Coirei is a unified execution system where software development
                            runs continuously. Code is written in shared cloud workspaces with
                            automatic validation and background pipelines.
                        </p>

                        <p className="text-[20px] text-white/80 text-lg mb-5 text-justify">  AI in Coirei is execution-aware and human-governed.
                            It understands intent, coordinates workflows, detects risks, and generates insights.
                            All critical decisions and irreversible actions require human approval.
                        </p>

                        <p className="text-[20px] text-white/80 text-lg mb-5 text-justify">We believe the future of software development is agent-assisted,
                            not agent-controlled. Developers become directors of execution, guiding intelligent systems that build, test, deploy,
                            and operate software with clarity, safety, and accountability.
                        </p>

                        <p className="text-[20px] text-white/80 text-lg mb-5 text-justify">Coirei is designed to scale from small teams to large
                            organizations without increasing execution complexity, delivering speed without sacrificing control.
                        </p>

                    </div>
                </div>
            </div>
            <div className="pt-20 border-white border-t">
                <div className="flex mb-20">
                    <div className="leftcontent w-[50%] mt-20">
                        <h3 className="text-[40px] text-white/80 font-normal mb-2">Join us</h3>
                        <p className="text-white max-w-2xl text-xl">
                            We are building foundational infrastructure for how modern software
                            will be executed. At Coirei, we are product-first engineers focused
                            on correctness, reliability, and real-world scale.
                        </p>
                    </div>
                    < div className="">
                        <img src={JoinUs} alt="Join us " className="rounded-md" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContentSection;
import imageFile from "../../..//assets/images/homepage/sampleimage.png"

function ProblemSection() {
    return (
        <>
            <section className="problem-section my-20">
                <div className="w-[80%]">
                    <div className="top-section flex flex-col items-center mb-22">
                        <p className="backdrop-blur-md border border-white/20 rounded-xl p-2 max-w-fit text-base text-[#959493] mb-2.5">
                            Why Orca AI Exist?
                        </p>
                        <h2 className="leading-none text-[#E3E3E0] text-[30px]  font-small md:text-[60px] max-w-5xl text-center">
                            Teams build great software but execution gets slowed down
                        </h2>
                    </div>
                    <div className="bottom-section h-[70%]">
                        <div className="content w-[50%]">
                            <h3 className="text-[#E3E3E0] text-[48px]  mb-5">
                                What teams are <br /> missing?
                            </h3>
                            <ul className="list-disc pl-6">
                                <li className="text-[#B5B4B2] text-[24px] mb-1.5">
                                    A single place where work actually moves forward
                                </li>
                                <li className="text-[#B5B4B2] text-[24px] mb-1.5">
                                    Real collaboration, not scattered conversations
                                </li>
                                <li className="text-[#B5B4B2] text-[24px] mb-7.5">
                                    Visibility tied to execution, not status reports
                                </li>
                            </ul>
                            <div className="inline-flex items-center rounded-md bg-[#2b2b2b] px-3 py-1 text-[14px] text-gray-300">
                                The Result is
                                <span className="mx-1 text-orange-400 font-medium tracking-wider">
                                    <span className="relative top-px">b</span>
                                    <span className="relative -top-px">r</span>
                                    <span className="relative top-0.5">o</span>
                                    <span className="relative -top-px">k</span>
                                    <span className="relative top-px">e</span>
                                    <span className="relative -top-0.5">n</span>
                                </span>
                                flow.
                            </div>
                        </div>
                        <div className="image w-142.5 h-107.5">
                            <img className="w-full h-full" src={imageFile} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProblemSection;

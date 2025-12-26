import Lottie from "lottie-react";
import waterfallAnimation from "../../../assets/js/cta-animation-waterfall.json";


function Hero() {

    return (
        <section className="md:mb-80 mb-25 mt-50 ">
            <div className="main-container">
                <div className="flex items-center justify-between gap-12">

                    {/* LEFT CONTENT */}
                    <div>
                        <p className="backdrop-blur-md border border-white/20 rounded-xl p-2 max-w-fit text-base text-[#959493] mb-2.5">
                            Orca AI
                        </p>

                        <h1 className="text-[#E3E3E0] text-6xl font-medium w-92 mb-5">
                            Execution, Reimagined.
                        </h1>

                        <p className="text-[#B5B4B2] text-xl w-2xl mb-7.5">
                            The AI-native execution platform where software teams plan, build, collaborate, test, deploy, and document software inside one intelligent execution system.
                        </p>
                        <div className="flex gap-4">

                            <button className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer">
                            Request Early Access</button>


                            <button className="text-white py-2.5 px-4 bg-[#292929] rounded font-semibold border border-white/10 hover:bg-white hover:text-[#292929] transition-all duration-500 ease-out cursor-pointer">Explore the Platform</button>
                        </div>


                    </div>

                    {/* RIGHT LOTTIE */}
                    <div className="cta-image max-w-7xl">
                        <Lottie
                            animationData={waterfallAnimation}
                            autoplay={true}
                            loop={true}


                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;

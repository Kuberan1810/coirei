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
                            AI - native execution
                        </h1>

                        <p className="text-[#B5B4B2] text-xl w-2xl mb-7.5">
                            Build, collaborate, test, deploy, and document software inside one intelligent execution system.
                        </p>

                        <button className="text-[#252525] p-2.5 bg-[#FAF9F6] rounded font-semibold
                               hover:bg-[#1E1E1E] hover:text-white
                               transition-all duration-500 ease-out cursor-pointer">
                            Request Early Access
                        </button>
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

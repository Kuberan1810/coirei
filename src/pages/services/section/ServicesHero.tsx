import bg_img_1 from "../../../assets/images/services/service-banner.jpg";
import bg_img_2 from "../../../assets/images/services/hero_img_2.png"

const ServicesHero = () => {
    return (
        <>
            <section className=" ">
                <div className="relative w-full  rounded-sm overflow-hidden pt-50">
                    {/* Background Image */}
                    <img
                        src={bg_img_1}
                        alt="Hero Background"
                        className="absolute inset-0 w-full h-full object-cover  object-bottom"
                    />

                    {/* Right Code Overlay */}
                    <div className="absolute inset-y-0 right-0 w-[40%]  flex items-center justify-end">

                        <img src={bg_img_2} alt="" className="relative object-contain" />

                    </div>

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className="relative z-10 py-20 flex items-center px-14">
                        <div className="max-w-xl">
                            <h1 className="text-white text-5xl leading-tight">
                                Where Creativity Meets <br />
                                Cutting - Edge Technology
                            </h1>

                            <p className="mt-7 text-white/60 text-2xl leading-8 w-140">
                                Talk to our team about advanced capabilities, team collaboration
                                features, and enterprise-scale execution support.
                            </p>

                            <button className="mt-7 px-6 py-2 rounded-3xl border border-white/30 text-white text-xl  hover:bg-white/90 hover:text-black transition backdrop-blur-3xl shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]">
                                Explore more
                            </button>
                            

                            

                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesHero;
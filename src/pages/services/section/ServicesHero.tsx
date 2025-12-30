import bg_img_1 from "../../../assets/images/services/hero_img.jpg";
import bg_img_2 from "../../../assets/images/services/hero_img_2.png"

const ServicesHero = () => {
  return (
    <>
      <section className="mb-40 mt-50 ">
        <div className="relative w-full max-w-[1280px] mx-auto mt-8 rounded-sm overflow-hidden">
          {/* Background Image */}
          <img
            src={bg_img_1}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover  object-bottom"
          />

          {/* Right Code Overlay */}
          <div className="absolute inset-y-0 right-0 w-[40%]  flex items-center justify-end">
            
              <img src={bg_img_2} alt="" className="relative object-contain"/>
            
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 h-[410px] flex items-center px-14">
            <div className="max-w-xl">
              <h1 className="text-white text-4xl leading-tight">
                Where Creativity Meets <br />
                Cutting - Edge Technology
              </h1>

              <p className="mt-7 text-[#E3E2DF] text-sm leading-relaxed w-[350px]">
                Talk to our team about advanced capabilities, team collaboration
                features, and enterprise-scale execution support.
              </p>

              <button className="mt-7 px-6 py-2 rounded-full border border-white/30 text-white text-xl  hover:bg-white hover:text-black transition">
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

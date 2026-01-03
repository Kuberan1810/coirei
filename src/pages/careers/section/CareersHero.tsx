import image1 from "../../../assets/images/Careers/img_1.avif";
import image2 from "../../../assets/images/Careers/img_2.avif";

const CareersHero = () => {
  return (
    <section className="text-white mx-6 sm:mx-10 md:mx-15 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto">
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mb-10">
          {/* LEFT BIG TEXT */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight max-w-3xl text-center lg:text-left">
            Build the future of <br />
            agent-assisted software execution
          </h1>

          {/* RIGHT SMALL TEXT */}
          <div className="max-w-md text-center lg:text-left">
            <p className="text-white/70 mb-6">
              At Coirei, we build systems that connect planning, code,
              pipelines, and AI into one execution fabric. Join us in shaping
              how teams build and ship software at scale.
            </p>

            {/* BUTTON (UPDATED HOVER ONLY) */}
            <button className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold hover:bg-[#1E1E1E] hover:text-white transition-all duration-500 ease-out cursor-pointer">
              See open roles
            </button>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IMAGE 1 */}
          <div className="overflow-hidden">
            <img
              src={image1}
              className="rounded-xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover grayscale"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="overflow-hidden">
            <img
              src={image2}
              alt="Team meeting"
              className="rounded-xl w-full h-64 sm:h-72 md:h-80 lg:h-[420px] object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;

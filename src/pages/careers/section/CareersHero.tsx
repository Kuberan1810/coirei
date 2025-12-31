import React from "react";
import image1 from "../../../assets/images/Careers/img_1.avif"
import image2 from "../../../assets/images/Careers/img_2.avif"

const CareersHero = () => {
  return (
    <section className=" text-white px-8 pt-50 pb-20">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">

          {/* LEFT BIG TEXT */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl">
            Build the future of <br />
            agent-assisted software execution
          </h1>

          {/* RIGHT SMALL TEXT */}
          <div className="max-w-sm">
            <p className="text-gray-400 mb-6">
              At Coirei, we build systems that connect planning, code, pipelines, and AI into one execution fabric.
              Join us in shaping how teams build and ship software at scale.
            </p>

            {/* BUTTON (UPDATED HOVER ONLY) */}
            <button
              className="
                text-[#252525] py-2.5 px-3.75 bg-[#FAF9F6] 
                rounded font-semibold
                hover:bg-[#1E1E1E] hover:text-white
                transition-all duration-500 ease-out cursor-pointer"
            >
              See open roles
            </button>
          </div>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* IMAGE 1 */}
          <div className="overflow-hidden">
            <img
              src={image1}
              className="rounded-xl w-full h-[500px] object-cover grayscale"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="overflow-hidden">
            <img
              src={image2}
              alt="Team meeting"
              className="rounded-xl w-full h-[420px] object-cover grayscale"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareersHero;

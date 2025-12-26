import React from "react";
import { Check } from "lucide-react";

/* Reusable Check Icon – correct size & position */
const CheckIcon = () => (
  <div className="flex items-start pt-1.5 shrink-0">
    <div className="w-5 h-5 rounded-full bg-[#E5E5E5] flex items-center justify-center">
      <Check size={12} strokeWidth={2.5} className="text-black" />
    </div>
  </div>
);

const CareersWorkFlow = () => {
  return (
    <section className=" text-white px-8 py-14">
      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-[64px] font-medium">How we work</h2>

            <p className="text-[#CECBCB] text-[18px] mb-12 max-w-xl">
              Our team is keenly conscious of how best to work with each other.
              <br />
              <span className="text-white font-semibold underline cursor-pointer">
                Check out our How We Work guide.
              </span>
            </p>

            {/* Product-first */}
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Product-first</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  Focus on user experience and make engineering choices based on
                  building the best product for developers.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            {/* Be pragmatic */}
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Be pragmatic</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  Make decisions based on reason and pragmatism — not hierarchy.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            {/* Run by developers */}
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">
                  Run by developers
                </h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We use the product as we build it and solve our problems as we build.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="pt-24">
            <div className="flex justify-end mb-12">
              <button className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold
                                 hover:bg-[#1E1E1E] hover:text-white
                                 transition-all duration-500 ease-out">
                See open roles
              </button>
            </div>

            {/* Diversity */}
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Diversity</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We will ultimately build the best product and business if the
                  team includes people from a wide range of backgrounds.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            {/* Remote-first */}
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Remote-first</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We are a distributed, remote-first team with optional office
                  spaces in New York City and San Francisco. We emphasize
                  asynchronous communication and are big on written communication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <img
            src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
            alt="Team working"
            className="rounded-xl object-cover h-[450px] w-full grayscale"
          />
          <img
            src="https://img.freepik.com/free-photo/group-happy-freelance-workers-talking-having-fun-lunch-break-office_637285-2588.jpg"
            alt="Team lunch"
            className="rounded-xl object-cover h-[300px] w-full grayscale"
          />
          <img
            src="https://cdn.prod.website-files.com/5f8b3f92189560cd389cf2b3/653fd4a07eef416340f5a140_company-outing-ideas-teamland.com.jpg"
            alt="Team outing"
            className="rounded-xl object-cover h-[400px] w-full grayscale"
          />
          <img
            src="https://img.freepik.com/free-photo/young-happy-businesswoman-using-desktop-pc-while-working-office_637285-5143.jpg"
            alt="Office work"
            className="rounded-xl object-cover h-[260px] w-full grayscale"
          />
        </div>

        {/* BOTTOM LINE */}
        <div className="h-px w-full bg-white/20 mt-24" />

      </div>
    </section>
  );
};

export default CareersWorkFlow;

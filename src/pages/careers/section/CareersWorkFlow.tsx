import React from "react";
import { Check } from "lucide-react";
import workflow_img from "../../../assets/images/Careers/workflow_img.avif"
import Workflow_img_2 from "../../../assets/images/Careers/workflow_img2.avif";
import workflow_img_3 from "../../../assets/images/Careers/workflow_img3.avif"
import workflow_img_4 from "../../../assets/images/Careers/workflow_img4.avif"

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
              We’re deliberate about how we build, both our product and our team.
              Our principles are designed to support clarity, ownership, and long-term impact.
              <br />
              {/* <span className="text-white font-semibold underline cursor-pointer">
                Check out our How We Work guide.
              </span> */}
            </p>

            {/* Product-first */}
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Product-led by execution</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We make decisions based on how they improve real execution for users, not just features or trends.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            {/* Be pragmatic */}
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Pragmatic by default</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We prioritize clear reasoning, practical outcomes, and simplicity over hierarchy or process for its own sake.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            {/* Run by developers */}
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">
                  Built by practitioners
                </h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We build and use Coirei ourselves, learning directly from real workflows as we improve the platform.
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
                <h4 className="text-[24px] font-medium mb-2">Inclusive by design</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We believe strong systems are built by teams with diverse backgrounds, perspectives, and experiences.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            {/* Remote-first */}
            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h4 className="text-[24px] font-medium mb-2">Distributed & focused</h4>
                <p className="text-gray-200 text-[18px] leading-relaxed">
                  We are a remote-first team that values asynchronous communication, deep work, and thoughtful written context.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-8 h-[630px]">
          <img
            src={workflow_img}
            alt="Team working"
            className="self-start rounded-xl object-cover h-[387px] w-full grayscale"
          />
          <img
            src={Workflow_img_2}
            alt="Team lunch"
            className="self-end rounded-xl object-cover h-[200px] w-full grayscale mb-35"
          />
          <img
            src={workflow_img_3}
            alt="Team outing"
            className="rounded-xl object-cover h-[200px] w-full grayscale mt-30"
          />
          <img
            src={workflow_img_4}
            alt="Office work"
            className="self-end rounded-xl object-cover h-[387px] w-full grayscale"
          />
        </div>

        {/* BOTTOM LINE */}
        <div className="h-px w-full bg-white/20 mt-24" />

      </div>
    </section>
  );
};

export default CareersWorkFlow;

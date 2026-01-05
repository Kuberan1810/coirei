import { Check } from "lucide-react";
import workflow_img from "../../../assets/images/Careers/workflow_img.avif";
import Workflow_img_2 from "../../../assets/images/Careers/workflow_img2.avif";
import workflow_img_3 from "../../../assets/images/Careers/workflow_img3.avif";
import workflow_img_4 from "../../../assets/images/Careers/workflow_img4.avif";

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
    <section className="text-white mx-6 sm:mx-10 md:mx-15 py-10 sm:py-12 md:py-14">
      <div>


        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-medium">
            How we work
          </h2>

          <p className="text-[#CECBCB] text-sm sm:text-base lg:text-[18px] mb-8 sm:mb-10 lg:mb-12 max-w-xl">
            We’re deliberate about how we build, both our product and our team.
            Our principles are designed to support clarity, ownership, and long-term impact.
          </p>

          <div className="flex justify-start lg:justify-end mb-8 sm:mb-10 lg:mb-12">
            <button
              className="text-[#252525] py-2 sm:py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold
                hover:bg-[#1E1E1E] hover:text-white transition-all duration-500 ease-out"
            >
              See open roles
            </button>
          </div>
        </div>

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-20 lg:mb-24">


          {/* MIDDLE COLUMN */}
          <div>
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-lg sm:text-xl lg:text-[24px] font-medium mb-2">
                  Product-led by execution
                </h4>
                <p className="text-gray-200 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  We make decisions based on how they improve real execution for users, not just features or trends.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-lg sm:text-xl lg:text-[24px] font-medium mb-2">
                  Pragmatic by default
                </h4>
                <p className="text-gray-200 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  We prioritize clear reasoning, practical outcomes, and simplicity over hierarchy or process for its own sake.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h4 className="text-lg sm:text-xl lg:text-[24px] font-medium mb-2">
                  Built by practitioners
                </h4>
                <p className="text-gray-200 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  We build and use Coirei ourselves, learning directly from real workflows as we improve the platform.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:pt-24">
            <div className="flex gap-4 mb-8">
              <CheckIcon />
              <div>
                <h4 className="text-lg sm:text-xl lg:text-[24px] font-medium mb-2">
                  Inclusive by design
                </h4>
                <p className="text-gray-200 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  We believe strong systems are built by teams with diverse backgrounds, perspectives, and experiences.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/20 mb-8" />

            <div className="flex gap-4">
              <CheckIcon />
              <div>
                <h4 className="text-lg sm:text-xl lg:text-[24px] font-medium mb-2">
                  Distributed & focused
                </h4>
                <p className="text-gray-200 text-sm sm:text-base lg:text-[18px] leading-relaxed">
                  We are a remote-first team that values asynchronous communication, deep work, and thoughtful written context.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* IMAGES – 2x2 FROM MOBILE, OLD LG POSITION SAFE */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_2fr] gap-6 sm:gap-8 h-auto lg:h-[630px]">

          {/* IMAGE 1 */}
          <img
            src={workflow_img}
            className="self-start rounded-xl object-cover w-full grayscale h-auto lg:h-[387px]"
          />

          {/* IMAGE 2 */}
          <img
            src={Workflow_img_2}
            className="self-end rounded-xl object-cover w-full grayscale mt-0 mb:mb-35 h-auto lg:h-[200px]"
          />

          {/* IMAGE 3 */}
          <img
            src={workflow_img_3}
            className="rounded-xl object-cover w-full grayscale mt-0 md:mt-30 h-auto lg:h-[200px]"
          />

          {/* IMAGE 4 */}
          <img
            src={workflow_img_4}
            className="self-end rounded-xl object-cover w-full grayscale h-auto lg:h-[387px]"
          />

        </div>



        {/* BOTTOM LINE */}
        <div className="h-px w-full bg-white/20 mt-16 sm:mt-20 lg:mt-24" />

      </div>
    </section>
  );
};

export default CareersWorkFlow;

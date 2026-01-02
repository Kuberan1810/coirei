import { Terminal, Rocket, Puzzle } from "lucide-react";

const CareerFeature = () => {
  return (
    <section className=" text-white py-0 mx-15">
      <div className="">

        {/* TOP HORIZONTAL LINE */}
        <div className="h-px w-full bg-white/20 mb-24" />

        {/* HEADING */}
        <h2 className="text-[#ffffff] text-[64px] text-center text-4xl font-medium mb-15">
          At Coirei, you’ll get to:
        </h2>

        {/* CONTENT GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3">

          {/* COLUMN 1 */}
          <div className="flex flex-col items-left text-left px-16">
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6">
              <Terminal size={22} className="text-white" />
            </div>

            <p className="text-medium text-white/70 max-w-xs leading-relaxed">
              Work on core infrastructure that defines how modern software is planned, built, and shipped.
            </p>
          </div>

          {/* VERTICAL DIVIDER 1 */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/20" />

          {/* COLUMN 2 */}
          <div className="flex flex-col items-left text-left px-16">
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6">
              <Rocket size={22} className="text-white" />
            </div>

            <p className="text-medium text-white/70 max-w-xs leading-relaxed">
              Contribute directly to a growing platform where your work shapes the product used by real teams.
            </p>
          </div>

          {/* VERTICAL DIVIDER 2 */}
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/20" />

          {/* COLUMN 3 */}
          <div className="flex flex-col items-left text-left px-16">
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-6">
              <Puzzle size={22} className="text-white" />
            </div>

            <p className="text-medium text-white/70 max-w-xs leading-relaxed">
              Be part of a thoughtful, inclusive team that values ownership, clarity, and long-term thinking.
            </p>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL LINE */}
        <div className="h-px w-full bg-white/20 mt-24" />

      </div>
    </section>
  );
};

export default CareerFeature;

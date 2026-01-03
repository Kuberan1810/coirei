import { Terminal, Rocket, Puzzle } from "lucide-react";

const CareerFeature = () => {
  return (
    <section className="text-white py-12 mx-6 sm:mx-10 md:mx-15">
      <div className="max-w-6xl mx-auto">
        {/* TOP HORIZONTAL LINE */}
        <div className="h-px w-full bg-white/20 mb-12" />

        {/* HEADING */}
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center font-medium mb-8">
          At Coirei, you’ll get to:
        </h2>

        {/* CONTENT GRID */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* COLUMN 1 */}
          <div className="flex flex-col items-start text-left px-4 md:px-8">
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4">
              <Terminal size={22} className="text-white" />
            </div>

            <p className="text-white/70 max-w-full md:max-w-xs leading-relaxed">
              Work on core infrastructure that defines how modern software is
              planned, built, and shipped.
            </p>
          </div>

          {/* VERTICAL DIVIDER 1 */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/20" />

          {/* COLUMN 2 */}
          <div className="flex flex-col items-start text-left px-4 md:px-8">
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4">
              <Rocket size={22} className="text-white" />
            </div>

            <p className="text-white/70 max-w-full md:max-w-xs leading-relaxed">
              Contribute directly to a growing platform where your work shapes
              the product used by real teams.
            </p>
          </div>

          {/* VERTICAL DIVIDER 2 */}
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/20" />

          {/* COLUMN 3 */}
          <div className="flex flex-col items-start text-left px-4 md:px-8">
            <div className="w-12 h-12 rounded-lg bg-[#1a1a1a] flex items-center justify-center mb-4">
              <Puzzle size={22} className="text-white" />
            </div>

            <p className="text-white/70 max-w-full md:max-w-xs leading-relaxed">
              Be part of a thoughtful, inclusive team that values ownership,
              clarity, and long-term thinking.
            </p>
          </div>
        </div>

        {/* BOTTOM HORIZONTAL LINE */}
        <div className="h-px w-full bg-white/20 mt-12" />
      </div>
    </section>
  );
};

export default CareerFeature;

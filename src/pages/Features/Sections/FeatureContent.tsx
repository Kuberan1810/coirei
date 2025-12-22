import React from "react";
import images from "../../../assets/images/homepage/Ceo-img.png"

const WorksFlow: React.FC = () => {
  return (
    <section className=" mx-35 py-20 flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Monitor
          </h1>

          <div className="flex items-center gap-4">
            <img
              src={images}
              alt="graph"
              className="w-24 h-16 object-cover rounded"
            />
            <h1 className="text-4xl md:text-5xl font-semibold">
              Analyze, and
            </h1>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Secure Your Application
          </h1>

          <h1 className="text-4xl md:text-5xl font-semibold">
            Real-Time
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold">
          </h1>

          <div className="flex items-center gap-4">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Powered by AI
            </h1>

            <img
              src={images}
              alt="ai"
              className="w-20 h-20 object-cover rounded"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold">

          </h1>
        </div>

      </div>
    </section>
  );
};

export default WorksFlow;

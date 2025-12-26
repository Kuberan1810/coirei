import React from "react";

const CareersHero = () => {
  return (
    <section className=" text-white px-8 py-40">
      <div className="max-w-7xl mx-auto">

        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">

          {/* LEFT BIG TEXT */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-3xl">
            Make the command line
            <br />
            more usable, humane, and
            <br />
            powerful for everyone.
          </h1>

          {/* RIGHT SMALL TEXT */}
          <div className="max-w-sm">
            <p className="text-gray-400 mb-6">
              We’re a team of product-first developers reinventing a tool that we
              use every day, and we’re looking for more teammates. Join us!
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
              src="https://media.istockphoto.com/id/1277142237/photo/tourist-with-backpack-at-mountain-lake-background.jpg?s=612x612&w=0&k=20&c=soEVfApNuSchY2kQmCSNHMDBDbPHXfi0uvl8bahAUuQ="
              alt="Team outdoor"
              className="rounded-xl w-full h-[500px] object-cover grayscale"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1947499362/photo/happy-group-of-business-people-discussing-strategy-during-team-meeting-at-the-office-desk.jpg?s=612x612&w=0&k=20&c=UXPrlQx09d8EP4_kTdAa-vC2LxD_ppY1tiG7eTPGVbE="
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

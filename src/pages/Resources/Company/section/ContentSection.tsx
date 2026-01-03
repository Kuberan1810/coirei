import JoinUs from "../../../../assets/images/Resourses/company/join-us.png";

const ContentSection = () => {
  return (
    <section className="mt-8 px-6 sm:px-10 md:px-15">
      <div className="w-full flex flex-col justify-center items-center max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center mb-8 gap-6">
          <span className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#161616] via-white to-white" />
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-light tracking-wide px-2 text-center">
            Our Ethos
          </h2>
          <span className="hidden md:block flex-1 h-px bg-gradient-to-r from-white via-white to-[#161616]" />
        </div>

        <div className="w-full max-w-4xl">
          <div>
            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              Coirei exists to solve a fundamental problem in software
              development: execution is fragmented.
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              Today, planning, coding, testing, deployment, collaboration, and
              governance live in separate systems. Context is lost, coordination
              slows teams down, and visibility disappears as projects scale.
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              As AI has advanced, Warp has evolved beyond its terminal roots
              into a powerful agentic development environment — a workbench for
              dispatching agents to code, deploy, and debug production software.
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              Coirei is a unified execution system where software development
              runs continuously. Code is written in shared cloud workspaces with
              automatic validation and background pipelines.
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              AI in Coirei is execution-aware and human-governed. It understands
              intent, coordinates workflows, detects risks, and generates
              insights. All critical decisions and irreversible actions require
              human approval.
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              We believe the future of software development is agent-assisted,
              not agent-controlled. Developers become directors of execution,
              guiding intelligent systems that build, test, deploy, and operate
              software with clarity, safety, and accountability.
            </p>

            <p className="text-white/80 text-base sm:text-lg mb-5 text-left">
              Coirei is designed to scale from small teams to large
              organizations without increasing execution complexity, delivering
              speed without sacrificing control.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10 border-white border-t mt-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 py-8 max-w-6xl mx-auto px-6 sm:px-0">
          <div className="w-full lg:w-1/2 mt-2">
            <h3 className="text-2xl md:text-4xl text-white/80 font-normal mb-4">
              Join us
            </h3>
            <p className="text-white max-w-2xl text-base md:text-lg">
              We are building foundational infrastructure for how modern
              software will be executed. At Coirei, we are product-first
              engineers focused on correctness, reliability, and real-world
              scale.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src={JoinUs}
              alt="Join us"
              className="rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

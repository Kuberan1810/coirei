

const CTASection = () => {
  return (
    <section className="mx-15 py-20">
      <div className="">
        <div className="relative overflow-hidden rounded-3xl  bg-[#7B7B7B]/10 backdrop-blur-3xl  border border-white/20  w-full shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]  ">
          {/* Main Content Container */}
          <div className="relative z-10 p-12 md:p-20">
            {/* Content Wrapper */}
            <div className="max-w-3xl">
              {/* Tag */}
              <div className="inline-block mb-6">
                <div className="px-4 py-1 bg-black/0 backdrop-blur-3xl  border border-white/20  w-full shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full ">
                  <span className="text-sm font-medium text-white">Try it now</span>
                </div>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                Ready to Execute Smarter?
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg   text-[#d4d4d3] mb-8 leading-relaxed font-normal">
                Start building and shipping software in a unified execution environment.Whether you’re a
                startup or an enterprise, ORCA keeps execution fast, visible, and controlled
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#footer"
                  className="inline-block text-white/90 px-5 py-3 bg-[#7B7B7B]/0 backdrop-blur-3xl  border border-white/20   shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] font-medium text-base rounded-lg"
                >
                  Get started
                </a>
                <a href="#footer"
                  className="inline-block text-white/90 px-5 py-3 bg-[#7B7B7B]/0 backdrop-blur-3xl  border border-white/20   shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] font-medium text-base rounded-lg"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>

          {/* Illustration Image - Floating Icons */}
          <div className="absolute top-0 right-0  h-full pointer-events-none">
            <img
              src="https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68c2e24929cdeec56539717c_illustration-cta.svg"
              loading="lazy"
              alt=""
              className="max-w-110 h-full object-contain opacity-80"
            />
          </div>

          {/* Background Gradient Image */}
          <div className="absolute inset-0 -z-10">
            <img
              src="https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68b992249e86e93016c426b7_gradient-cta.avif"
              loading="lazy"
              alt=""
              srcSet="
                https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68b992249e86e93016c426b7_gradient-cta-p-500.avif 500w,
                https://cdn.prod.website-files.com/68b83d93cc699c177ab8f60a/68b992249e86e93016c426b7_gradient-cta.avif 962w
              "
              className="w-full h-full object-cover rounded-3xl opacity-25"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
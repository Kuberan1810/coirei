import React from "react";
import { MessageCircle, Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactHero = () => {
  const navigate = useNavigate();
  return (
    <section className="text-white px-8 py-24 pt-40 pb-20'">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-[65px] font-medium mb-20">
          Contact
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* LEFT CARD */}
          <div className="relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-[305px] w-px bg-white/20" />

            {/* Icon */}
            <div className="backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-fit text-base text-[#959493] mb-2.5">
              <MessageCircle size={20} className="text-[#22C55E]" />
            </div>

            <h3 className="text-[50px] font-medium mb-3">
              Contact Sales
            </h3>

            <p className="text-[#FAF9F6B3] text-[18px] max-w-md mb-6">
              Discuss your enterprise requirements, explore personalized
              pricing options, or request a demo.
            </p>

            <button
              onClick={() => navigate("/contact-sales")}
              className="text-[#252525] py-2.5 px-4 bg-[#FAF9F6] rounded font-semibold border border-transparent hover:bg-[#1E1E1E] hover:text-white hover:border-white/10 transition-all duration-500 ease-out cursor-pointer"
            >
              Let’s chat
            </button>

          </div>

          {/* RIGHT CARD */}
          <div className="relative pl-12">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-px bg-white/20" />

            {/* Icon */}
            <div className="vbackdrop-blur-md border border-white/20 rounded-xl p-4 max-w-fit text-base text-[#959493] mb-2.5">
              <Hand size={20} className="text-[#22C55E]" />
            </div>

            <h3 className="text-[50px] font-medium mb-3">
              Get in touch
            </h3>

            <p className="text-[#FAF9F6B3] text-[18px] max-w-md mb-6">
              Found a bug? <span className="text-[#ffffff] underline cursor-pointer">File a GitHub issue</span> and
              the Warp team will review it right away.
            </p>

            <div className="space-y-4 text-[18px]">
              <p className="text-[#FAF9F6B3] max-w-md mb-6" >
                For subscribers technical issues:<br />
                <span className="text-[#ffffff] underline">support@coirei.dev</span>
              </p>

              <p className="text-[#FAF9F6B3] max-w-md mb-6">
                For subscribers billing issues:<br />
                <span className="text-[#ffffff] underline">billing@coirei.dev</span>
              </p>

              <p className="text-[#FAF9F6B3] max-w-md mb-6">
                For security concerns:<br />
                <span className="text-[#ffffff] underline">security@coirei.dev</span>
              </p>

              <p className="text-[#FAF9F6B3] max-w-md mb-6">
                For questions about privacy:<br />
                <span className="text-[#ffffff] underline">privacy@coirei.dev</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;

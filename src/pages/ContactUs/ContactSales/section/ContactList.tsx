import React, { useState } from "react";
import RequestDemoForm from "./RequestDemoForm";

const ContactList = () => {
  const [showRequestDemo, setShowRequestDemo] = useState(false);

  return (
    <section className="pt-50 pb-20 mx-15">
      <div className="flex justify-between flex-wrap gap-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl text-white/80 mb-2">
            Contact Sales
          </h2>

          <p className="text-lg text-white/70 mb-3">
            We’re always here to help you build better software. Let us know what kind of question you have and we’ll route to you the right place.
          </p>

          <p className="text-lg text-white/70">
            If you’re looking for detailed documentation regarding a specific feature, check out our docs.
          </p>
        </div>

        <div className="flex-1">
          <div className="pb-8">
            <p className="text-white/80 text-2xl">
              How can we help?
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {!showRequestDemo ? (
              <>
                <div
                  onClick={() => setShowRequestDemo(true)}
                  className="group bg-[#1e1e1e] px-8 py-10 rounded-lg space-y-3
                  hover:bg-[#29292950] cursor-pointer transition-all duration-300 "
                >
                  <h4 className="text-2xl text-white/80 group-hover:text-white/50 transition">
                    Request a Demo
                  </h4>

                  <p className="text-lg text-white/70  group-hover:text-white/40 transition">
                    Talk with our team and see Warp in action for your use case.
                  </p>
                </div>

                <Card
                  title="Upgrade my plan"
                  desc="Connect with Sales to explore advanced plans and team features."
                />

                <Card
                  title="Help with Billing"
                  desc="Get support with invoices, payments, or subscription updates."
                />

                <Card
                  title="Report a bug"
                  desc="Found a bug? File a GitHub issue and the team will review it."
                />

                <div>
                  <h4 className="text-white/80 text-2xl mb-2.5">
                    Other questions:
                  </h4>

                  <div className="flex gap-6 flex-wrap">
                    <a className="text-white/60 underline text-lg hover:text-white/80 transition cursor-pointer">
                      Technical Issue
                    </a>
                    <a className="text-white/60 underline text-lg hover:text-white/80 transition cursor-pointer">
                      Questions about privacy
                    </a>
                    <a className="text-white/60 underline text-lg hover:text-white/80 transition cursor-pointer">
                      Security concerns
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <RequestDemoForm onBack={() => setShowRequestDemo(false)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactList;

const Card = ({ title, desc }: { title: string; desc: string }) => (
  <div
    className="group bg-[#1e1e1e] px-8 py-10 rounded-lg space-y-3
    hover:bg-[#29292950] cursor-pointer transition-all duration-300"
  >
    <h4 className="text-2xl text-white/80 group-hover:text-white/50 transition">
      {title}
    </h4>

    <p className="text-lg text-white/70  group-hover:text-white/40 transition">
      {desc}
    </p>
  </div>
);

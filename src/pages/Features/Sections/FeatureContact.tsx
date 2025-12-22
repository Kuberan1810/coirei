import React, { useState, type FormEvent } from "react";

const FeatureContact: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="mx-35 py-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2.5">
            Contact Us Now
          </h2>
          <p className="text-white/80 text-base">
            Automation you can build, adapt, and grow
          </p>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-120"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-700 bg-[##1a1b25] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-[#FF8800] focus:ring-2 focus:ring-[#FF8800]/20"
          />

          <button
            type="submit"
            className="rounded-lg bg-[#FF8800] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#FF8800]/80 cursor-pointer"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeatureContact;

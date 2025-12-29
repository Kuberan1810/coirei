import {
  Fingerprint,
  Briefcase,
  BarChart3,
  Users,
  Brain,
  Newspaper,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Biometric Security",
    desc: "Login seamlessly with fingerprint authentication, ensuring only you access your trading dashboard. This extra layer of security protects your account from unauthorized access, giving you peace of mind that your assets and personal data are always safe.",
  },
  {
    icon: Briefcase,
    title: "Smart Portfolio",
    desc: "Monitor all your assets in one dashboard, track detailed gains and losses, and view real-time allocation insights to optimize and balance your portfolio strategy. With this centralized overview, you can make informed decisions and manage your investments with confidence and efficiency.",
  },
  {
    icon: BarChart3,
    title: "Market Match",
    desc: "Track your performance against live market trends with flexible time filters, giving you a clear view of growth and opportunities in real time. This feature helps you identify strengths and weaknesses in your portfolio, empowering smarter investment choices based on market dynamics.",
  },
  {
    icon: Users,
    title: "Social Trading",
    desc: "Follow top traders, copy strategies, or share insights with the global trading community. By connecting with experienced traders, you gain access to valuable strategies and real-time advice, helping you enhance your own trading performance while staying engaged with the community.",
  },
  {
    icon: Brain,
    title: "AI Trade Signals",
    desc: "Receive instant AI-driven buy and sell alerts to stay ahead of market shifts. These smart signals automatically analyze trends, providing timely guidance to help you seize profitable opportunities and reduce financial risks without hours of market monitoring.",
  },
  {
    icon: Newspaper,
    title: "News & Insights",
    desc: "Stay updated with breaking financial news and in-depth analysis, all integrated into your trading dashboard. This ensures you never miss critical market developments, helping you make informed decisions quickly and maintain an edge in your investment strategies.",
  },
];

const FeaturesGlass = () => {
  return (
    <section className="text-white">

      {/* HEADER */}
      <div className="py-20 px-6 text-center">
        <span
          className="inline-flex items-center justify-center
          text-2xl text-white py-2.5 px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10"
        >
          How it Works
        </span>

        <h2 className="mx-auto leading-18 text-[#E3E3E0] text-[30px] font-normal md:text-[60px] max-w-2xl text-center mb-5">
          Trade Smarter with All-in-One Features
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          From insights to execution everything flows smarter
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="py-5 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                border border-white/15
                shadow-[0_8px_32px_rgba(0,0,0,0.6)] "
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                    bg-white/10 backdrop-blur-md
                    border border-white/20"
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="font-semibold text-xl text-white/90">
                    {item.title}
                  </h3>
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-white/15 mb-4 " />

                {/* DESCRIPTION */}
                <p className="text-base text-white/70  leading-relaxed mb-10">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FeaturesGlass;

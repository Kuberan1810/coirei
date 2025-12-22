
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

const FeaturesOrange = () => {
  return (
    <section className="bg-black text-white">

      {/* ===== HEADER SECTION ===== */}
      <div
        className="py-10 px-6 text-center"
        
      >
        <span
          className="inline-flex items-center justify-center
          px-4 py-1.5 mb-2
          text-sm font-medium
          rounded-full
          bg-white/5 backdrop-blur-md
          border border-white/20"
        >
          How it Works
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Trade Smarter with All-in-One Features
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          From insights to execution — everything flows smarter.
        </p>
      </div>

      {/* ===== FEATURES GRID ===== */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6
                bg-linear-to-b from-[#1a0f05] via-[#0f0a06] to-black
                border border-[#ff8c2a]/30
                shadow-[inset_0_0_40px_rgba(255,140,42,0.08)]"
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center
                    bg-linear-to-br from-[#ffb066] via-[#ff8c2a] to-[#d96600]
                    shadow-[0_0_18px_rgba(255,140,42,0.8)]"
                  >
                    <Icon size={25} className="text-black" />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-[#ff8c2a]/40 to-transparent mb-4" />

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-300 leading-relaxed mb-10">
                  {item.desc}
                </p>

                {/* BOTTOM DOT UI */}
                <div className="absolute bottom-4 left-6 right-6 opacity-40">
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 72 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1 h-1 rounded-full bg-[#ff8c2a]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default FeaturesOrange;

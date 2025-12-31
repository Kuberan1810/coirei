import { useState, type JSX, lazy, Suspense } from "react";
import { CardSim } from "lucide-react";


/* ---------------- LAZY IMPORTS ---------------- */

const CollaborateFeature = lazy(() => import("./Animation/ColabrationCard"));
const OrchestrationCard = lazy(() => import("./Animation/OrchestrationCard"));
const Traceability = lazy(() => import("./Animation/Traceability"));
const Intelligence = lazy(() => import("./Animation/IntelligenceCard"));

/* ---------------- TYPES ---------------- */

interface TabContent {
    id: string;
    label: string;
    image: JSX.Element;
    badge: string;
    title: string;
    description: string | string[];
}

/* ---------------- COMPONENT ---------------- */

export default function FeaturesSection(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>("colabration");

    const tabs: TabContent[] = [
        {
            id: "colabration",
            label: "Colabration",
            image: <CollaborateFeature />,
            badge: "IN-FLOW TEAMS",
            title: "Collaboration Without Context Switching",
            description:
                "ORCA AI embeds collaboration directly into the execution flow. Instead of juggling chats, meetings, and repos, teams work together with shared context.",
        },
        {
            id: "orchestration",
            label: "Orchestration",
            image: <OrchestrationCard />,
            badge: "AUTO-COORDINATED EXECUTION",
            title: "From Intent to Deployment, Orchestrated.",
            description: [
                "Task → code → deploy automation",
                "AI-managed execution workflows",
                "Meaningful, change-aware commits",
                "CI/CD pipelines with execution context",
            ],
        },
        {
            id: "traceability",
            label: "Traceability",
            image: <Traceability />,
            badge: "UNBROKEN CONTEXT",
            title: "Software That Understands",
            description:
                "It analyzes intent, impact, and relationships across the system, not just lines of code, helping teams prevent conflicts, detect risks early, and make better decisions.",
        },
        {
            id: "intelligence",
            label: "Intelligence",
            image: <Intelligence />,
            badge: "SEMANTIC AWARENESS",
            title: "Execution That Never Lose Memory",
            description:
                "Every task, discussion, decision, code change, and deployment is automatically linked into a living execution graph.",
        },
    ];

    const activeContent = tabs.find((tab) => tab.id === activeTab)!;

    return (
        <section className="min-h-screen text-white py-20">
            <div className="max-w-6xl mx-auto px-20">

                {/* ---------- Heading ---------- */}
                <p className="text-2xl md:text-3xl text-center mb-16 font-normal leading-tight max-w-3xl mx-auto">
                    ORCA AI unifies the entire software execution lifecycle into a single
                    AI-native platform.
                </p>

                {/* ---------- Tabs ---------- */}
                <div className="flex justify-center mb-12">
                    <div className="flex p-2.5 rounded-full bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-10 py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${activeTab === tab.id
                                        ? "bg-white/0 text-white backdrop-blur-3xl shadow-[inset_-1px_1px_2px_#ffffff10]"
                                        : "text-white/70 hover:bg-white/5 hover:text-white hover:shadow-[inset_-1px_1px_2px_#ffffff10]"
                                    }`}
                            >
                                <div className="flex gap-1 items-center">
                                    <CardSim size={16} strokeWidth={2} />
                                    <span className="text-base font-normal">
                                        {tab.label}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ---------- Content ---------- */}
                <div className="bg-[#1E1E1E] rounded-[20px] px-13 pt-5">
                    <div className="grid md:grid-cols-2 gap-8 items-center">

                        {/* ---------- LEFT (ANIMATION) ---------- */}
                        <div className="relative">
                            <div className="bg-linear-to-br from-white/70 to-gray-600 rounded-3xl px-8 pt-15 shadow-2xl">
                                <div className="relative w-full rounded-t-4xl overflow-hidden  ">

                                    {/* 🔥 Lazy animation render */}
                                    <Suspense
                                        fallback={
                                            <div className="w-full h-75 flex items-center justify-center text-white/40 text-sm">
                                                Loading animation...
                                            </div>
                                        }
                                    >
                                        <div className="w-full h-full flex items-center justify-center">
                                            {activeContent.image}
                                        </div>
                                    </Suspense>

                                </div>
                            </div>
                        </div>

                        {/* ---------- RIGHT (TEXT) ---------- */}
                        <div className="space-y-2.5">
                            <span className="inline-block mb-5 px-2.5 py-1.5 bg-[#FFF7A5] text-black rounded-full text-sm font-medium uppercase tracking-wide">
                                {activeContent.badge}
                            </span>

                            <h2 className="text-4xl text-[#FFF8F8] font-normal">
                                {activeContent.title}
                            </h2>

                            {Array.isArray(activeContent.description) ? (
                                <ul className="space-y-2 text-[#ECEBEB] text-sm font-normal py-2">
                                    {activeContent.description.map((point, index) => (
                                        <li key={index}>• {point}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-[#ECEBEB] text-sm font-normal leading-relaxed max-w-[350px]">
                                    {activeContent.description}
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

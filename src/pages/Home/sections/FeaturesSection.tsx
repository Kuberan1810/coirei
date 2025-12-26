import { useState, type JSX } from 'react';
import { CardSim } from 'lucide-react';
import Colab from '../../../assets/videos/homepage/colabration.mp4';

interface TabContent {
    id: string;
    label: string;
    image: string;
    badge: string;
    title: string;
    description: string | string[];
}

export default function FeaturesSection(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>('colabration');

    const tabs: TabContent[] = [
        {
            id: 'colabration',
            label: 'Colabration',
            image: Colab,
            badge: 'IN-FLOW TEAMS',
            title: 'Collaboration Without Context Switching',
            description:
                'ORCA AI embeds collaboration directly into the execution flow. Instead of juggling chats, meetings, and repos, teams work together with shared context.',
        },
        {
            id: 'orchestration',
            label: 'Orchestration',
            image:
                'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=700&fit=crop',
            badge: 'AUTO-COORDINATED EXECUTION',
            title: 'From Intent to Deployment, Orchestrated.',
            description: [
                'Task → code → deploy automation',
                'AI-managed execution workflows',
                'Meaningful, change-aware commits',
                'CI/CD pipelines with execution context',
            ],
        },
        {
            id: 'traceability',
            label: 'Traceability',
            image:
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=700&fit=crop',
            badge: 'UNBROKEN CONTEXT',
            title: 'Software That Understands',
            description:
                'It analyzes intent, impact, and relationships across the system, not just lines of code, helping teams prevent conflicts, detect risks early, and make better decisions.',
        },
        {
            id: 'intelligence',
            label: 'Intelligence',
            image:
                'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=700&fit=crop',
            badge: 'SEMANTIC AWARENESS',
            title: 'Execution That Never Lose Memory',
            description:
                'Every task, discussion, decision, code change, and deployment is automatically linked into a living execution graph.',
        },
    ];

    const activeContent = tabs.find((tab) => tab.id === activeTab)!;

    return (
        <div className="min-h-screen text-white py-20">
            <div className="max-w-6xl mx-auto px-20">
                {/* Heading */}
                <p className="text-2xl md:text-3xl text-center mb-16 font-normal leading-tight w-3xl mx-auto">
                    ORCA AI unifies the entire software execution lifecycle into a
                    single AI-native platform.
                </p>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex justify-between p-2.5 rounded-full bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-full shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-10 py-3 rounded-full text-sm font-medium transition-all duration-200
                                    ${activeTab === tab.id
                                        ? 'bg-white/0 text-white backdrop-blur-3xl shadow-[inset_-1px_1px_2px_#ffffff10]'
                                        : 'text-white/70 hover:bg-white/5 hover:text-white hover:shadow-[inset_-1px_1px_2px_#ffffff10]'
                                    }`}
                            >
                                <div className="flex gap-1 items-center">
                                    <CardSim size={16} strokeWidth={2} />
                                    <p className="text-base font-normal">
                                        {tab.label}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="bg-[#1E1E1E] rounded-[20px] px-13 pt-5">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left */}
                        <div className="relative">
                            <div className="bg-linear-to-br from-teal-600 to-rose-900 rounded-3xl px-8 pt-15 shadow-2xl">
                                <div className="relative w-full h-full rounded-t-2xl overflow-hidden">
                                    {activeContent.image.endsWith('.mp4') ? (
                                        <video
                                            key={activeContent.id}
                                            src={activeContent.image}
                                            className="w-full h-full object-cover transition-opacity duration-500"
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={activeContent.image}
                                            alt={activeContent.title}
                                            className="w-full h-full object-cover transition-opacity duration-500"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-[#FF8800]/25 mix-blend-color pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="space-y-2.5">
                            <div className="inline-block mb-5 px-2.5 py-1.5 bg-[#FFF7A5] text-black rounded-full text-sm font-medium uppercase tracking-wide">
                                {activeContent.badge}
                            </div>

                            <h2 className="text-4xl text-[#FFF8F8] font-normal ">
                                {activeContent.title}
                            </h2>

                            {/* Description */}
                            {Array.isArray(activeContent.description) ? (
                                <ul className="  space-y-2 text-[#ECEBEB] text-sm font-normal  list-none py-2">
                                    {activeContent.description.map(
                                        (point, index) => (
                                            <li key={index}>{point}</li>
                                        )
                                    )}
                                </ul>
                            ) : (
                                <p className="text-[#ECEBEB] text-sm font-normal leading-relaxed max-w-87.5">
                                    {activeContent.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

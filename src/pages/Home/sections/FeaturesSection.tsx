import { useState, type JSX } from 'react';
import { CardSim } from 'lucide-react';
interface TabContent {
    id: string;
    label: string;
    image: string;
    badge: string;
    title: string;
    description: string;
}

export default function FeaturesSection(): JSX.Element {
    const [activeTab, setActiveTab] = useState<string>('client-portal-1');

    const tabs: TabContent[] = [
        {
            id: 'client-portal-1',
            label: 'Client Portal',
            image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=700&fit=crop',
            badge: 'Team Control',
            title: 'Built for growing teams',
            description: 'Easily onboard new members, assign roles, and manage access. Keep your organization structured and scalable from day one.'
        },
        {
            id: 'kpi-tracking',
            label: 'KPI tracking',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=700&fit=crop',
            badge: 'Performance',
            title: 'Track what matters',
            description: 'Monitor key performance indicators in real-time. Get actionable insights to drive growth and make data-driven decisions.'
        },
        {
            id: 'client-portal-2',
            label: 'Client Portal',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=700&fit=crop',
            badge: 'Analytics',
            title: 'Deep insights at a glance',
            description: 'Comprehensive dashboards that give you complete visibility into your operations. Stay informed and ahead of the curve.'
        },
        {
            id: 'client-portal-3',
            label: 'Client Portal',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=700&fit=crop',
            badge: 'Collaboration',
            title: 'Work together seamlessly',
            description: 'Enable your entire team to collaborate effectively. Share updates, assign tasks, and keep everyone on the same page.'
        }
    ];

    const activeContent = tabs.find(tab => tab.id === activeTab)!;

    return (
        <div className="min-h-screen text-white py-20">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto px-20 ">
                <p className="text-2xl md:text-3xl  text-center mb-16 font-normal leading-tight w-4xl mx-auto">
                    Grovia gives your team everything it needs to stay aligned, track performance, and scale with confidence,all in one place
                </p>

                {/* Tab Navigation */}

                <div className="flex justify-center mb-12  ">
                    <div className="flex justify-between p-2.5 rounded-full
                bg-[#7B7B7B]/10 backdrop-blur-3xl
                border border-white/20
                 w-full shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] ">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-10 py-3 rounded-full text-sm font-medium
                        transition-all duration-200
                        ${activeTab === tab.id
                                        ? 'bg-white/0 text-white  backdrop-blur-3xl shadow-[inset_-1px_1px_2px_#ffffff10]'
                                        : 'text-white/70 hover:bg-white/5 hover:text-white hover:shadow-[inset_-1px_1px_2px_#ffffff10]'
                                    }`}
                            >  <div className='flex gap-1 items-center'>
                                    <span>{<CardSim size={16} strokeWidth={2} />}</span> <p className='text-base font-normal'>{tab.label}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                </div>

                {/* Content Section */}
                <div className='bg-[#1E1E1E] rounded-[20px] px-13  pt-5'>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left - Image with transition */}
                        <div className="relative">
                            <div className="bg-linear-to-br from-teal-600 to-rose-900 rounded-3xl px-8 pt-15 shadow-2xl">

                                <img
                                    key={activeContent.id}
                                    src={activeContent.image}
                                    alt={activeContent.title}
                                    className="w-full h-93.75 rounded-t-2xl shadow-xl object-cover transition-opacity duration-500"
                                />
                            </div>
                        </div>

                        {/* Right - Feature Description with transition */}
                        <div className="space-y-2.5">
                            <div
                                key={`badge-${activeContent.id}`}
                                className="inline-block mb-5 px-2.5 py-1.5 bg-[#FFF7A5] text-black rounded-full text-sm font-medium uppercase tracking-wide transition-all duration-500"
                            >
                                {activeContent.badge}
                            </div>

                            <h2
                                key={`title-${activeContent.id}`}
                                className="text-4xl text-[#FFF8F8] font-normal transition-all duration-500"
                            >
                                {activeContent.title}
                            </h2>

                            <p
                                key={`desc-${activeContent.id}`}
                                className="text-[#ECEBEB] text-sm font-normal leading-relaxed transition-all max-w-87.5 duration-500"
                            >
                                {activeContent.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
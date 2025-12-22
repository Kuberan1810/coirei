import { useState, type JSX } from 'react';
import HeroSection from '../../../component/HeroSection';
import TabNavigation from '../../../component/TabNavigation';
import ImagePreview from '../../../component/ImagePreview';
import FeatureDescription from '../../../component/FeatureDescription';
import type { TabContent } from '../../../types/types';

export default function GroviaLanding(): JSX.Element {
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
        <div className="min-h-screen bg-zinc-900 text-white">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <HeroSection />

                <TabNavigation
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ImagePreview
                        image={activeContent.image}
                        alt={activeContent.title}
                        id={activeContent.id}
                    />

                    <FeatureDescription
                        badge={activeContent.badge}
                        title={activeContent.title}
                        description={activeContent.description}
                        id={activeContent.id}
                    />
                </div>
            </div>
        </div>
    );
}
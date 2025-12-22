import { type JSX } from 'react';

interface TabNavigationProps {
    tabs: Array<{ id: string; label: string }>;
    activeTab: string;
    onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps): JSX.Element {
    return (
        <div className="flex justify-center mb-12">
            <div className="inline-flex bg-zinc-800 rounded-full p-1.5 gap-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`px-6 py-2.5 rounded-full text-sm transition-all ${activeTab === tab.id
                                ? 'bg-zinc-700 text-white'
                                : 'text-zinc-400 hover:text-white'
                            }`}
                    >
                        📄 {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
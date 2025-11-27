import React, { useState } from 'react';
import { User, Calendar, Tag, FileText, MessageSquare, Users } from 'lucide-react';

const StorySection = ({ campaign }) => {
    const [activeTab, setActiveTab] = useState('story');

    const tabs = [
        { id: 'story', label: 'Story', icon: FileText },
        { id: 'updates', label: 'Updates', icon: MessageSquare },
        { id: 'backers', label: 'Backers', icon: Users },
    ];

    return (
        <div className="space-y-8">
            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-white/5 aspect-video relative group shadow-2xl">
                <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/20 flex items-center gap-1 backdrop-blur-md">
                            <Tag className="w-3 h-3" />
                            {campaign.category || 'Technology'}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-xs font-bold border border-white/10 flex items-center gap-1 backdrop-blur-md">
                            <Calendar className="w-3 h-3" />
                            {campaign.deadline} Days Left
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">{campaign.title}</h1>
                </div>
            </div>

            {/* Creator Row */}
            <div className="flex items-center justify-between border-b border-white/5 pb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                            <User className="w-6 h-6 text-violet-400" />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400 font-medium">Created by</p>
                        <p className="text-white font-mono font-semibold">{campaign.owner}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    {/* Social links could go here */}
                </div>
            </div>

            {/* Tabs */}
            <div>
                <div className="flex gap-8 border-b border-white/5 mb-8">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                  pb-4 flex items-center gap-2 text-sm font-medium transition-all relative
                  ${activeTab === tab.id ? 'text-violet-400' : 'text-slate-400 hover:text-slate-200'}
                `}
                            >
                                <Icon className="w-4 h-4" />
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-500 rounded-t-full" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="min-h-[300px]">
                    {activeTab === 'story' && (
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-slate-300 leading-relaxed">
                                {campaign.description}
                            </p>
                            <p className="text-slate-300 leading-relaxed mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h3 className="text-white mt-8 mb-4">Why we are building this</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    )}
                    {activeTab === 'updates' && (
                        <div className="text-center py-12 text-slate-500">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>No updates yet. Check back soon!</p>
                        </div>
                    )}
                    {activeTab === 'backers' && (
                        <div className="text-center py-12 text-slate-500">
                            <Users className="w-12 h-12 mx-auto mb-4 opacity-20" />
                            <p>Be the first to back this project!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StorySection;

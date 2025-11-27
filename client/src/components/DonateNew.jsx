import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import FundingDock from './donate/FundingDock';
import { User, Calendar, Tag } from 'lucide-react';

const DonateNew = () => {
    const { id } = useParams();
    const [isFunding, setIsFunding] = useState(false);
    const [campaign, setCampaign] = useState(null);

    useEffect(() => {
        // Mock fetch campaign details
        setTimeout(() => {
            setCampaign({
                id,
                title: "The Future of Clean Energy",
                description: "We are building a decentralized energy grid that allows anyone to generate and trade solar power. This project aims to reduce carbon footprint by 50% in urban areas through smart-grid technology.",
                image: "https://picsum.photos/seed/energy/1200/600",
                owner: "0x1234...5678",
                raised: "4.20",
                target: "10.0",
                deadline: "15",
                category: "Technology"
            });
        }, 500);
    }, [id]);

    const handleDonate = async (amount) => {
        setIsFunding(true);
        // Mock contract interaction
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(`Donated ${amount} ETH to campaign ${id}`);
            // Update local state to show progress
            setCampaign(prev => ({
                ...prev,
                raised: (parseFloat(prev.raised) + parseFloat(amount)).toFixed(2)
            }));
        } catch (error) {
            console.error("Donation failed:", error);
        } finally {
            setIsFunding(false);
        }
    };

    if (!campaign) return <div className="min-h-screen bg-slate-950" />;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero Image */}
                        <div className="rounded-2xl overflow-hidden border border-white/5 aspect-video relative group">
                            <img
                                src={campaign.image}
                                alt={campaign.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/20 flex items-center gap-1">
                                        <Tag className="w-3 h-3" />
                                        {campaign.category}
                                    </span>
                                </div>
                                <h1 className="text-4xl font-bold text-white mb-2">{campaign.title}</h1>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex items-center gap-6 text-sm text-slate-400 border-b border-white/5 pb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                    <User className="w-4 h-4" />
                                </div>
                                <span>By <span className="text-white font-medium">{campaign.owner}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{campaign.deadline} Days Left</span>
                            </div>
                        </div>

                        {/* Story */}
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-2xl font-bold text-white mb-4">The Story</h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {campaign.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar (Funding Dock) */}
                    <div className="lg:col-span-1">
                        <FundingDock
                            raised={campaign.raised}
                            target={campaign.target}
                            onDonate={handleDonate}
                            isFunding={isFunding}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DonateNew;

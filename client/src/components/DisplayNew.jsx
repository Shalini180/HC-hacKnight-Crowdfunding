import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import CampaignCard from './display/CampaignCard';
import { Loader2 } from 'lucide-react';

const DisplayNew = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        // Mock fetch campaigns
        const fetchCampaigns = () => {
            setTimeout(() => {
                const mockData = Array(6).fill(null).map((_, i) => ({
                    id: i,
                    title: `Future Tech Project #${i + 1}`,
                    image: `https://picsum.photos/seed/${i + 1}/800/450`,
                    owner: "0x1234...5678",
                    raised: (Math.random() * 5).toFixed(2),
                    target: "10.0",
                    deadline: Math.floor(Math.random() * 30) + 1
                }));
                setCampaigns(mockData);
                setIsLoading(false);
            }, 1500);
        };

        fetchCampaigns();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Explore Campaigns</h1>
                    <p className="text-slate-400">Discover and support innovative projects</p>
                </div>

                {isLoading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {campaigns.map((campaign) => (
                            <CampaignCard
                                key={campaign.id}
                                {...campaign}
                                onClick={() => navigate(`/campaign/${campaign.id}`)}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default DisplayNew;

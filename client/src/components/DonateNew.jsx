import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import FundingDock from './donate/FundingDock';
import StorySection from './donate/StorySection';
import { Loader2 } from 'lucide-react';

// Mock hook until we have the real one
const useCrowdfunding = (id) => {
    // In real app, this would fetch from contract
    return {
        donate: async (amount) => {
            console.log(`Donating ${amount} to ${id}`);
            return new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
}

const DonateNew = () => {
    const { id } = useParams();
    const [isFunding, setIsFunding] = useState(false);
    const [campaign, setCampaign] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Use our mock hook (or real one if available)
    const { donate } = useCrowdfunding(id);

    useEffect(() => {
        // Mock fetch campaign details
        const fetchCampaign = async () => {
            setIsLoading(true);
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 800));

                setCampaign({
                    id,
                    title: "The Future of Clean Energy",
                    description: "We are building a decentralized energy grid that allows anyone to generate and trade solar power. This project aims to reduce carbon footprint by 50% in urban areas through smart-grid technology.",
                    image: "https://picsum.photos/seed/energy/1200/600",
                    owner: "0x71C...9A23",
                    raised: "4.20",
                    target: "10.0",
                    deadline: "15",
                    category: "Technology"
                });
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCampaign();
    }, [id]);

    const handleDonate = async (amount) => {
        setIsFunding(true);
        try {
            await donate(amount);

            // Optimistic update
            setCampaign(prev => ({
                ...prev,
                raised: (parseFloat(prev.raised) + parseFloat(amount)).toFixed(2)
            }));

            // Show success toast (mock)
            console.log("Donation successful!");

        } catch (error) {
            console.error("Donation failed:", error);
            alert("Transaction failed. Please try again.");
        } finally {
            setIsFunding(false);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-violet-500 animate-spin" />
            </div>
        );
    }

    if (!campaign) return <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">Campaign not found</div>;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-violet-500/30">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Content - Story & Details */}
                    <div className="lg:col-span-2">
                        <StorySection campaign={campaign} />
                    </div>

                    {/* Right Sidebar - Funding Dock */}
                    <div className="lg:col-span-1 relative">
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

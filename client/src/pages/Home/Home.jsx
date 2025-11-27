import React from 'react'
import Hero from '../components/Hero'
import CampaignCard from '../components/CampaignCard'

const Home = () => {
    // Mock campaign data - replace with actual data from blockchain/API
    const mockCampaigns = [
        {
            id: 1,
            title: "Innovative DeFi Protocol",
            description: "Building the next generation of decentralized finance tools for everyone.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
            raised: 45000,
            goal: 100000,
            daysLeft: 15,
            backers: 234
        },
        {
            id: 2,
            title: "NFT Marketplace for Artists",
            description: "Empowering digital artists with a decentralized platform to showcase and sell their work.",
            image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop",
            raised: 78000,
            goal: 120000,
            daysLeft: 8,
            backers: 456
        },
        {
            id: 3,
            title: "Green Energy DAO",
            description: "Community-driven renewable energy projects powered by blockchain technology.",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
            raised: 92000,
            goal: 150000,
            daysLeft: 22,
            backers: 789
        },
        {
            id: 4,
            title: "Web3 Education Platform",
            description: "Making blockchain education accessible to everyone through interactive courses.",
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
            raised: 34000,
            goal: 80000,
            daysLeft: 30,
            backers: 156
        },
        {
            id: 5,
            title: "Decentralized Social Network",
            description: "Building a censorship-resistant social platform owned by its users.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
            raised: 125000,
            goal: 200000,
            daysLeft: 12,
            backers: 1023
        },
        {
            id: 6,
            title: "GameFi Metaverse",
            description: "Creating an immersive play-to-earn gaming experience in the metaverse.",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop",
            raised: 56000,
            goal: 100000,
            daysLeft: 18,
            backers: 345
        }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Featured Campaigns Section */}
            <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Featured Campaigns
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Discover innovative projects seeking funding from the community
                        </p>
                    </div>

                    {/* Campaign Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockCampaigns.map((campaign) => (
                            <CampaignCard key={campaign.id} campaign={campaign} />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold transition-all duration-200">
                            View All Campaigns
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

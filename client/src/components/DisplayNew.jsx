import React, { useState } from 'react';
import FilterBar from './display/FilterBar';
import CampaignGrid from './display/CampaignGrid';

const mockCampaigns = [
    { id: 1, title: "Cyberpunk City", category: "Art", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", raised: "120 ETH" },
    { id: 2, title: "Quantum Network", category: "Tech", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2680&auto=format&fit=crop", raised: "450 ETH" },
    { id: 3, title: "Mars Colony", category: "Science", image: "https://images.unsplash.com/photo-1614728853913-1e22ba0e9897?q=80&w=2670&auto=format&fit=crop", raised: "1.2k ETH" },
    { id: 4, title: "DeFi Protocol", category: "Crypto", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop", raised: "89 ETH" },
    { id: 5, title: "Digital Renaissance", category: "Art", image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=2564&auto=format&fit=crop", raised: "230 ETH" },
    { id: 6, title: "Green Energy Grid", category: "Tech", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop", raised: "67 ETH" },
];

const DisplayNew = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCampaigns = mockCampaigns.filter(c =>
        (activeCategory === "All" || c.category === activeCategory) &&
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white">
            <FilterBar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <CampaignGrid campaigns={filteredCampaigns} />
        </div>
    );
};

export default DisplayNew;

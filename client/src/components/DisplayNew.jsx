import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Tag } from 'lucide-react';

const categories = ["All", "Tech", "Art", "Crypto", "Science", "Community"];

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
            {/* Floating Search Header */}
            <div className="sticky top-0 z-50 p-6 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent pb-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
                    <div className="relative w-full md:w-96 group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-purple-500 transition-colors">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search campaigns..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:bg-white/10 transition-all backdrop-blur-md"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                                        : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Immersive Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredCampaigns.map((campaign) => (
                            <motion.div
                                layout
                                key={campaign.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-slate-900"
                            >
                                {/* Background Image */}
                                <img
                                    src={campaign.image}
                                    alt={campaign.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-xs font-medium text-purple-300 border border-white/10">
                                            {campaign.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors">
                                        {campaign.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4 border-t border-white/10 pt-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-slate-400 uppercase tracking-wider">Raised</span>
                                            <span className="text-lg font-bold text-white">{campaign.raised}</span>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple-500 hover:text-white">
                                            <Tag size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-3xl transition-colors duration-300 pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCampaigns.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-slate-700">No signals found in this sector.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DisplayNew;

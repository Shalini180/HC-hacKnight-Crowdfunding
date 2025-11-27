import React from 'react';
import { Search } from 'lucide-react';

const categories = ["All", "Tech", "Art", "Crypto", "Science", "Community"];

const FilterBar = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
    return (
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
    );
};

export default FilterBar;

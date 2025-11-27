import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const CampaignCard = ({ campaign }) => {
    return (
        <motion.div
            layout
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
    );
};

export default CampaignCard;

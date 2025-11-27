import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CampaignCard from './CampaignCard';

const CampaignGrid = ({ campaigns }) => {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {campaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {campaigns.length === 0 && (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-bold text-slate-700">No signals found in this sector.</h3>
                </div>
            )}
        </div>
    );
};

export default CampaignGrid;

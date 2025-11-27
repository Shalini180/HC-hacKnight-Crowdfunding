import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Rocket } from 'lucide-react';

const mockCampaigns = [
    { id: 1, title: "Eco-Friendly Ocean Cleanup", creator: "0x12...45A", raised: "45.5 ETH", goal: "100 ETH", status: "Active" },
    { id: 2, title: "NextGen VR Education", creator: "0x89...B21", raised: "12.2 ETH", goal: "50 ETH", status: "Active" },
    { id: 3, title: "Sustainable Urban Farming", creator: "0xCC...909", raised: "98.0 ETH", goal: "100 ETH", status: "Success" },
    { id: 4, title: "Decentralized Internet", creator: "0x55...123", raised: "5.0 ETH", goal: "200 ETH", status: "Active" },
];

const CampaignTable = () => {
    return (
        <div className="rounded-3xl border border-white/10 bg-black/20 backdrop-blur-md overflow-hidden">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Campaigns</h2>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1">
                    View All <ChevronRight size={16} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-slate-400 text-sm uppercase tracking-wider">
                        <tr>
                            <th className="p-6 font-medium">Campaign</th>
                            <th className="p-6 font-medium">Creator</th>
                            <th className="p-6 font-medium">Raised</th>
                            <th className="p-6 font-medium">Status</th>
                            <th className="p-6 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {mockCampaigns.map((campaign, index) => (
                            <motion.tr
                                key={campaign.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="hover:bg-white/5 transition-colors group"
                            >
                                <td className="p-6 font-medium text-white group-hover:text-purple-400 transition-colors">
                                    {campaign.title}
                                </td>
                                <td className="p-6 text-slate-400 font-mono text-sm">{campaign.creator}</td>
                                <td className="p-6">
                                    <div className="flex flex-col">
                                        <span className="text-white font-medium">{campaign.raised}</span>
                                        <span className="text-xs text-slate-500">of {campaign.goal}</span>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${campaign.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'
                                        }`}>
                                        {campaign.status}
                                    </span>
                                </td>
                                <td className="p-6">
                                    <button className="text-slate-400 hover:text-white transition-colors">
                                        Details
                                    </button>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {mockCampaigns.length === 0 && (
                <div className="p-12 flex flex-col items-center justify-center text-center">
                    <div className="w-48 h-48 bg-purple-500/10 rounded-full flex items-center justify-center mb-6">
                        <Rocket size={64} className="text-purple-500 opacity-50" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">No Campaigns Found</h3>
                    <p className="text-slate-400 mt-2 max-w-md">
                        It looks quiet out here. Be the first to launch a mission to the moon!
                    </p>
                </div>
            )}
        </div>
    );
};

export default CampaignTable;

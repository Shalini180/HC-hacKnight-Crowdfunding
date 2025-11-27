import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Wallet, Activity, Rocket, TrendingUp, Users, ChevronRight } from 'lucide-react';

const mockChartData = [
    { value: 400 }, { value: 300 }, { value: 600 }, { value: 800 }, { value: 500 }, { value: 900 }, { value: 1000 }
];

const mockCampaigns = [
    { id: 1, title: "Eco-Friendly Ocean Cleanup", creator: "0x12...45A", raised: "45.5 ETH", goal: "100 ETH", status: "Active" },
    { id: 2, title: "NextGen VR Education", creator: "0x89...B21", raised: "12.2 ETH", goal: "50 ETH", status: "Active" },
    { id: 3, title: "Sustainable Urban Farming", creator: "0xCC...909", raised: "98.0 ETH", goal: "100 ETH", status: "Success" },
    { id: 4, title: "Decentralized Internet", creator: "0x55...123", raised: "5.0 ETH", goal: "200 ETH", status: "Active" },
];

const GlassCard = ({ title, value, icon: Icon, trend }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                <Icon size={24} />
            </div>
            <span className={`text-sm font-medium ${trend >= 0 ? 'text-green-400' : 'text-red-400'} flex items-center gap-1`}>
                {trend > 0 ? '+' : ''}{trend}% <TrendingUp size={14} />
            </span>
        </div>
        <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>

        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockChartData}>
                    <Line type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
);

const DashboardNew = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8 relative overflow-hidden">
            {/* Background Mesh Gradient */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 hover:animate-pulse cursor-default">
                            Mission Control
                        </h1>
                        <p className="text-slate-400 mt-2">Welcome back, Commander.</p>
                    </div>
                    <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all font-semibold shadow-lg shadow-purple-500/20 flex items-center gap-2">
                        <Rocket size={20} /> Launch Campaign
                    </button>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <GlassCard title="Total Donated" value="1,240 ETH" icon={Activity} trend={12} />
                    <GlassCard title="Active Campaigns" value="84" icon={Rocket} trend={5} />
                    <GlassCard title="Wallet Balance" value="42.5 ETH" icon={Wallet} trend={-2} />
                </div>

                {/* Main Table */}
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
            </div>
        </div>
    );
};

export default DashboardNew;

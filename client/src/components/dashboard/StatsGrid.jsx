import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Wallet, Activity, Rocket, TrendingUp } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const mockChartData = [
    { value: 400 }, { value: 300 }, { value: 600 }, { value: 800 }, { value: 500 }, { value: 900 }, { value: 1000 }
];

const StatCard = ({ title, value, icon: Icon, trend }) => (
    <GlassCard hoverEffect className="p-6">
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
    </GlassCard>
);

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Donated" value="1,240 ETH" icon={Activity} trend={12} />
            <StatCard title="Active Campaigns" value="84" icon={Rocket} trend={5} />
            <StatCard title="Wallet Balance" value="42.5 ETH" icon={Wallet} trend={-2} />
        </div>
    );
};

export default StatsGrid;

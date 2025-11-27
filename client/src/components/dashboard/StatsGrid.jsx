import React from 'react';
import { TrendingUp, Activity, Users } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, color }) => (
    <div className="glass p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 text-sm font-medium">{title}</h3>
            <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-400 group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5" />
            </div>
        </div>
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            {value}
        </div>
    </div>
);

const StatsGrid = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
                title="Total Raised"
                value={`${stats.totalRaised} ETH`}
                icon={TrendingUp}
                color="violet"
            />
            <StatsCard
                title="Active Campaigns"
                value={stats.campaignsCount}
                icon={Activity}
                color="indigo"
            />
            <StatsCard
                title="Total Backers"
                value={stats.backerCount}
                icon={Users}
                color="blue"
            />
        </div>
    );
};

export default StatsGrid;

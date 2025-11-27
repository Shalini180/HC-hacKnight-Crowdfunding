import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import StatsGrid from './dashboard/StatsGrid';

const DashboardNew = () => {
    const [stats, setStats] = useState({
        totalRaised: '0',
        campaignsCount: 0,
        backerCount: 0
    });

    useEffect(() => {
        // Mock data fetch
        const fetchStats = () => {
            setTimeout(() => {
                setStats({
                    totalRaised: '1,234',
                    campaignsCount: 12,
                    backerCount: 856
                });
            }, 1000);
        };

        fetchStats();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-violet-500/30">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                    <p className="text-slate-400">Overview of your crowdfunding activities</p>
                </div>

                <StatsGrid stats={stats} />

                <div className="glass rounded-xl p-6 border border-white/5 min-h-[400px]">
                    <h2 className="text-xl font-semibold mb-6">My Campaigns</h2>
                    <div className="flex items-center justify-center h-64 text-slate-500 border-2 border-dashed border-slate-800 rounded-lg">
                        <p>No campaigns found. Create one to get started!</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardNew;

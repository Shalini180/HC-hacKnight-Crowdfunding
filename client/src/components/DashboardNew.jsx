import React from 'react';
import { Rocket } from 'lucide-react';
import PageHeader from './ui/PageHeader';
import GradientButton from './ui/GradientButton';
import StatsGrid from './dashboard/StatsGrid';
import CampaignTable from './dashboard/CampaignTable';

const DashboardNew = () => {
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
                    <PageHeader title="Mission Control" subtitle="Welcome back, Commander." />
                    <GradientButton icon={Rocket}>Launch Campaign</GradientButton>
                </div>

                {/* Stats Row */}
                <StatsGrid />

                {/* Main Table */}
                <CampaignTable />
            </div>
        </div>
    );
};

export default DashboardNew;

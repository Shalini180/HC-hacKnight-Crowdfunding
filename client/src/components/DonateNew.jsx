import React from 'react';
import StorySection from './donate/StorySection';
import FundingDock from './donate/FundingDock';

const DonateNew = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col md:flex-row">
            <StorySection />
            <FundingDock />
        </div>
    );
};

export default DonateNew;

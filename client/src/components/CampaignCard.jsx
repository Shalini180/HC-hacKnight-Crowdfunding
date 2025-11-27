import React from 'react'
import { Calendar, Target, TrendingUp } from 'lucide-react'

const CampaignCard = ({ campaign }) => {
    // Mock data for demonstration
    const {
        title = "Innovative DeFi Protocol",
        description = "Building the next generation of decentralized finance tools for everyone.",
        image = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
        raised = 45000,
        goal = 100000,
        daysLeft = 15,
        backers = 234
    } = campaign || {}

    const progress = (raised / goal) * 100

    return (
        <div className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-slate-800">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass-dark text-xs font-medium text-white">
                    {daysLeft} days left
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-300">
                            ${raised.toLocaleString()} raised
                        </span>
                        <span className="text-xs text-slate-500">
                            {progress.toFixed(0)}%
                        </span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                    </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-slate-400">
                        <Target className="w-4 h-4" />
                        <span>${goal.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>{backers} backers</span>
                    </div>
                </div>

                {/* Action Button */}
                <button className="mt-4 w-full py-2.5 rounded-lg bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-slate-200 hover:text-white font-medium transition-all duration-200">
                    View Campaign
                </button>
            </div>
        </div>
    )
}

export default CampaignCard

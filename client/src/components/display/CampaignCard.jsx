import React from 'react';
import { Clock, Target, User } from 'lucide-react';

const CampaignCard = ({ title, image, owner, raised, target, deadline, onClick }) => {
    const progress = Math.min((parseFloat(raised) / parseFloat(target)) * 100, 100);

    return (
        <div
            onClick={onClick}
            className="group bg-slate-900 rounded-xl border border-white/5 overflow-hidden hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
        >
            {/* Image Container */}
            <div className="aspect-video w-full overflow-hidden relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
                        <User className="w-3 h-3 text-slate-400" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono truncate max-w-[150px]">
                        {owner}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-violet-400 transition-colors">
                    {title}
                </h3>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        <span>{target} ETH</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{deadline} days left</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-violet-400">{raised} ETH Raised</span>
                        <span className="text-slate-500">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;

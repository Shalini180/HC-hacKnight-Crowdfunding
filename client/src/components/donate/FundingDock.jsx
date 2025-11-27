import React, { useState } from 'react';
import { Loader2, Zap } from 'lucide-react';

const FundingDock = ({ raised, target, onDonate, isFunding }) => {
    const [amount, setAmount] = useState('');
    const progress = Math.min((parseFloat(raised) / parseFloat(target)) * 100, 100);

    const handleDonate = () => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;
        onDonate(amount);
    };

    return (
        <div className="sticky top-24 glass p-6 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-6">Support this Project</h3>

            {/* Progress Section */}
            <div className="mb-8 space-y-2">
                <div className="flex justify-between items-baseline">
                    <span className="text-3xl font-bold text-white">{raised} <span className="text-lg text-slate-400 font-normal">ETH</span></span>
                    <span className="text-slate-400">of {target} ETH goal</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-500 relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                    <span>{Math.round(progress)}% Funded</span>
                    <span>124 Backers</span>
                </div>
            </div>

            {/* Input Section */}
            <div className="space-y-4">
                <div className="relative">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-4 text-xl font-bold focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">ETH</span>
                </div>

                <button
                    onClick={handleDonate}
                    disabled={isFunding || !amount}
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                    {isFunding ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <Zap className="w-5 h-5 group-hover:fill-white transition-colors" />
                            <span>Fund Now</span>
                        </>
                    )}
                </button>

                <p className="text-xs text-center text-slate-500">
                    Transaction secured by Ethereum Sepolia Network
                </p>
            </div>
        </div>
    );
};

export default FundingDock;

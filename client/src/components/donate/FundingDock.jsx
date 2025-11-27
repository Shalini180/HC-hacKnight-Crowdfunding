import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';
import useCrowdfunding from '../../hooks/useCrowdfunding';

const FundingDock = () => {
    const { id } = useParams();
    const { donate } = useCrowdfunding();
    const [amount, setAmount] = useState('');
    const [isFunding, setIsFunding] = useState(false);

    const handleFund = async () => {
        if (!amount) return;
        setIsFunding(true);
        try {
            await donate(id, amount);
            alert("🎉 Funding Successful! Thank you for your contribution.");
            setAmount('');
        } catch (error) {
            alert("Funding failed: " + error.message);
        } finally {
            setIsFunding(false);
        }
    };

    return (
        <div className="w-full md:w-1/3 bg-[#13131a] border-l border-white/5 p-8 md:p-12 flex flex-col justify-center relative">
            <div className="sticky top-12">
                <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-slate-400 font-medium">Raised so far</span>
                        <span className="text-2xl font-bold text-white">450 ETH</span>
                    </div>
                    <div className="w-full h-3 bg-black/50 rounded-full overflow-hidden mb-2">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '65%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mb-8">
                        <span>65% Funded</span>
                        <span>Goal: 700 ETH</span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-3">Enter Amount (ETH)</label>
                            <div className="relative">
                                <input
                                    type="number"
                                    placeholder="0.0"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-2xl py-6 pl-6 pr-20 text-4xl font-bold text-white placeholder:text-slate-700 focus:outline-none focus:border-purple-500 transition-colors"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 font-medium">ETH</span>
                            </div>
                        </div>

                        <button
                            onClick={handleFund}
                            disabled={isFunding}
                            className="w-full py-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg shadow-lg shadow-purple-500/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isFunding ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Fund this Project <Heart className="fill-white" size={20} />
                                </>
                            )}
                        </button>

                        <p className="text-center text-xs text-slate-500">
                            Gas fees apply. Powered by Ethereum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundingDock;

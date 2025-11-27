import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, Zap, Heart } from 'lucide-react';

const DonateNew = () => {
    const [amount, setAmount] = useState('');
    const [isFunding, setIsFunding] = useState(false);

    const handleFund = () => {
        setIsFunding(true);
        // Simulate funding process
        setTimeout(() => {
            setIsFunding(false);
            alert("🎉 Funding Successful! (Confetti Explosion Placeholder)");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col md:flex-row">
            {/* Left: Campaign Story */}
            <div className="w-full md:w-2/3 p-8 md:p-16 overflow-y-auto">
                <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Campaigns
                </button>

                <div className="max-w-3xl">
                    <span className="text-purple-500 font-semibold tracking-wider uppercase text-sm">Technology</span>
                    <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                        NextGen Quantum <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Internet Protocol</span>
                    </h1>

                    <div className="flex items-center gap-6 mb-12 text-sm">
                        <div className="flex items-center gap-2 text-slate-300">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                            By <span className="text-white font-medium">Dr. Sarah Connors</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                            <ShieldCheck size={16} /> Verified Project
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <p className="lead text-xl text-slate-200">
                            We are building the foundation for a decentralized, censorship-resistant quantum network that connects humanity at the speed of light.
                        </p>
                        <p>
                            Traditional internet infrastructure is centralized, fragile, and prone to surveillance. Our protocol leverages quantum entanglement to create unhackable communication channels.
                        </p>
                        <div className="my-8 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                <Zap className="text-yellow-400" /> Why this matters
                            </h3>
                            <p className="m-0 text-sm">
                                Quantum supremacy is approaching. Without a decentralized quantum layer, the future of digital privacy is at risk. Your contribution helps us secure the open web.
                            </p>
                        </div>
                        <p>
                            Join us in this revolution. Every ETH contributed goes directly to hardware acquisition and open-source research.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right: Funding Dock */}
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
        </div>
    );
};

export default DonateNew;

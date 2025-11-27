import React, { useState } from 'react';
import { Loader2, Check, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FundingDock = ({ raised, target, onDonate, isFunding }) => {
    const [amount, setAmount] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const progress = Math.min((parseFloat(raised) / parseFloat(target)) * 100, 100);

    const handleDonate = async () => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) return;
        await onDonate(amount);
        if (!isFunding) {
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
        }
    };

    return (
        <div className="sticky top-24 backdrop-blur-xl bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

            <h3 className="text-xl font-bold mb-8 text-slate-200">Support this Project</h3>

            {/* Progress Section */}
            <div className="mb-10 space-y-3">
                <div className="flex justify-between items-baseline">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        {raised} <span className="text-lg text-slate-500 font-normal">ETH</span>
                    </span>
                    <span className="text-slate-400 font-medium">of {target} ETH goal</span>
                </div>

                <div className="h-4 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
                    >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                </div>

                <div className="flex justify-between text-sm text-slate-500 font-medium">
                    <span>{Math.round(progress)}% Funded</span>
                    <span>124 Backers</span>
                </div>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
                <div className="relative group">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-transparent border-b-2 border-slate-700 px-2 py-4 text-5xl font-bold text-white placeholder-slate-800 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-600 text-xl font-bold group-focus-within:text-violet-500 transition-colors">ETH</span>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDonate}
                    disabled={isFunding || !amount}
                    className="w-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-bold py-5 rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg relative overflow-hidden"
                >
                    <AnimatePresence mode='wait'>
                        {isFunding ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                            >
                                <Loader2 className="w-6 h-6 animate-spin" />
                                <span>Processing...</span>
                            </motion.div>
                        ) : isSuccess ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex items-center gap-2"
                            >
                                <Check className="w-6 h-6" />
                                <span>Funded!</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-center gap-2"
                            >
                                <Zap className="w-6 h-6 fill-white/20" />
                                <span>Fund This Project</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>

                <p className="text-xs text-center text-slate-500 font-medium">
                    Transaction secured by Ethereum Sepolia Network
                </p>
            </div>
        </div>
    );
};

export default FundingDock;

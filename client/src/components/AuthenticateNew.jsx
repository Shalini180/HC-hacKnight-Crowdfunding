import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const AuthenticateNew = () => {
    const [isConnecting, setIsConnecting] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const handleConnect = () => {
        setIsConnecting(true);
        // Simulate connection delay
        setTimeout(() => {
            setIsConnecting(false);
            setIsConnected(true);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050507] text-white flex items-center justify-center relative overflow-hidden">
            {/* Space Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                {/* Stars would go here with CSS */}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md p-1"
            >
                {/* Glass Modal */}
                <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Decorative Top Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/30 transform rotate-3">
                            <Shield size={32} className="text-white" />
                        </div>
                        <h1 className="text-3xl font-bold mb-2">Welcome to the Portal</h1>
                        <p className="text-slate-400">Connect your wallet to access the future of funding.</p>
                    </div>

                    <div className="space-y-4">
                        {!isConnected ? (
                            <button
                                onClick={handleConnect}
                                disabled={isConnecting}
                                className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-3 relative overflow-hidden group"
                            >
                                {isConnecting ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                        className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full"
                                    />
                                ) : (
                                    <>
                                        <Wallet size={20} /> Connect Wallet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full py-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 font-bold text-lg flex items-center justify-center gap-2"
                            >
                                <CheckCircle size={20} /> Wallet Connected
                            </motion.div>
                        )}

                        <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors">
                            Read Documentation
                        </button>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/5">
                        <div className="flex items-center justify-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-slate-700" />
                                ))}
                            </div>
                            <p className="text-sm text-slate-500">
                                <span className="text-white font-bold">10k+</span> Users Trust Us
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AuthenticateNew;

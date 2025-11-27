import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, Loader2, CheckCircle } from 'lucide-react';

const WalletConnectButton = ({ status, onClick }) => {
    const isConnecting = status === 'connecting';
    const isConnected = status === 'connected';

    if (isConnected) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full py-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-400 font-bold text-lg flex items-center justify-center gap-2"
            >
                <CheckCircle size={20} /> Connected
            </motion.div>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            disabled={isConnecting}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg shadow-lg shadow-purple-500/25 flex items-center justify-center gap-3 relative overflow-hidden group transition-all"
        >
            {isConnecting ? (
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                >
                    <Loader2 size={24} />
                </motion.div>
            ) : (
                <>
                    <Wallet size={20} /> Connect Wallet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
            )}
        </motion.button>
    );
};

export default WalletConnectButton;

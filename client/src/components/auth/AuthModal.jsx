import React from 'react';
import { motion } from 'framer-motion';

const AuthModal = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md p-1"
        >
            {/* Pulsing Gradient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 rounded-full blur-[80px] animate-pulse -z-10" />

            {/* Glass Modal */}
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
                {children}
            </div>
        </motion.div>
    );
};

export default AuthModal;

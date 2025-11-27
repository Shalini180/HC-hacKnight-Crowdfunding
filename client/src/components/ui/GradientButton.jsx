import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const GradientButton = ({ children, onClick, variant = 'primary', className, icon: Icon, disabled, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-xl font-semibold shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-purple-600 hover:bg-purple-500 shadow-purple-500/20 text-white",
        secondary: "bg-white/10 hover:bg-white/20 border border-white/10 text-white",
        gradient: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            disabled={disabled}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {Icon && <Icon size={20} />}
            {children}
        </motion.button>
    );
};

export default GradientButton;

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const GlassCard = ({ children, className, hoverEffect = false, ...props }) => {
    const baseStyles = "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl";

    const Component = hoverEffect ? motion.div : 'div';
    const motionProps = hoverEffect ? { whileHover: { y: -5 } } : {};

    return (
        <Component
            className={twMerge(baseStyles, className)}
            {...motionProps}
            {...props}
        >
            {children}
        </Component>
    );
};

export default GlassCard;

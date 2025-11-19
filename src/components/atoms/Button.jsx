import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    onClick,
    disabled = false,
    type = 'button',
    icon: Icon
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-lg shadow-primary/25",
        secondary: "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus:ring-slate-200",
        ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 shadow-lg shadow-red-500/25",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base",
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            type={type}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon size={18} className="mr-2" />}
            {children}
        </motion.button>
    );
};

export default Button;

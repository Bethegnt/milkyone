import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, icon: Icon, trend, color = "blue" }) => {
    const colorStyles = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
    };

    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
        >
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${colorStyles[color]}`}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                        {trend > 0 ? '+' : ''}{trend}%
                    </span>
                )}
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{value}</h3>
            <p className="text-sm text-slate-500">{title}</p>
        </motion.div>
    );
};

export default StatCard;

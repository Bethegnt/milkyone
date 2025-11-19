import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AdminStatCard = ({ title, value, delta, icon: Icon, color = 'blue' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = typeof value === 'number' ? value : parseFloat(value.toString().replace(/[^0-9.-]+/g, ""));
        if (isNaN(end)) {
            setCount(value);
            return;
        }

        const duration = 1000;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(value); // Set to original value to preserve formatting
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [value]);

    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-900">{count}</h3>
                </div>
                {Icon && (
                    <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                        <Icon size={24} />
                    </div>
                )}
            </div>
            {delta && (
                <div className="flex items-center gap-2 text-sm">
                    <span className={delta.includes('+') ? 'text-green-600 font-medium' : 'text-red-500 font-medium'}>
                        {delta}
                    </span>
                    <span className="text-slate-400">vs last month</span>
                </div>
            )}
        </motion.div>
    );
};

export default AdminStatCard;

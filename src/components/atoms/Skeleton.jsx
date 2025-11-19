import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Skeleton = ({ className, ...props }) => {
    return (
        <div
            className={twMerge(clsx("animate-pulse rounded-md bg-slate-200/80", className))}
            {...props}
        />
    );
};

export { Skeleton };

'use client';

import React from 'react';
import { useMagneticEffect } from '@/hooks/useMagneticEffect';
import { cn } from '@/lib/utils';

interface MagneticTextProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export const MagneticText = ({
    children,
    className,
    strength = 40
}: MagneticTextProps) => {
    const ref = useMagneticEffect(strength);

    return (
        <div
            ref={ref}
            className={cn(
                'transition-transform duration-200 ease-out',
                className
            )}
        >
            {children}
        </div>
    );
};
import React from 'react'

//Utils
import { cn } from '@/lib/utils';

//Type
import type { ContainerProps } from '@/types';

const Container = ({
    className,
    children,
    justifyContent = 'start',
    alignItems = 'start'
}: ContainerProps) => {
    return (
        <div className={cn(
            `
                flex
                w-full
                justify-${justifyContent}
                align-${alignItems}
            `,
            className,
            justifyContent,
            alignItems
        )}>
            {children}
        </div>
    )
}

export default Container;
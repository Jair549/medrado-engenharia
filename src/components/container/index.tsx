import React from 'react'

//Type
import type { ContainerProps } from '@/types';

const Container = ({ className, children }: ContainerProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Container
import React from 'react';

//Utils
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

//Types
import type { ButtonProps } from "@/types";

//Icons
import icons from "@/assets/svg";
import Link from 'next/link';

const buttonVariants = cva(
    `flex items-center justify-center rounded-md`,
    {
        variants: {
            variant: {
                primary: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                success: 'bg-success text-white hover:bg-success/90',
                danger: 'bg-danger text-white hover:bg-danger/90',
                warning: 'bg-warning text-white hover:bg-warning/90',
                info: 'bg-info text-white hover:bg-info/90',
                light: 'bg-light text-dark hover:bg-light/90',
                dark: 'bg-dark text-white hover:bg-dark/90'
            },
            size: {
                small: 'px-2 py-1 text-sm',
                md: 'px-4 py-2 text-md',
                large: 'px-6 py-3 text-lg'
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'md'
        }
    }
)

const Button = ({ children, className, type, icon, href }: ButtonProps) => {
    return (
        type == 'link' ? (
            <Link href={href!} className={cn(
                `
                    flex
                    px-4
                `,
                className
            )}>
                {icon && icons[icon]}
                {children}
            </Link>
        ) : (
            <button
                className={cn(
                    `
                        flex
                        px-4
                    `,
                    className
                )}
                type={type}
            >
                {icon && icons[icon]}
                {children}
            </button>
        )
    );
}

export default Button;
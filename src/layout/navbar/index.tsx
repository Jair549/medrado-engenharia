import React from 'react';
import Image from 'next/image';

//Types
import type { NavbarProps } from '@/types';

//Utils
import { cn } from '@/lib/utils';
import Link from 'next/link';

//image
import Logo from '@/assets/images/logo.png';

const Navbar = ({ className }: NavbarProps) => {
    return (
        <nav 
            className={cn(
                `
                    flex
                    items-center
                    justify-between
                    px-5
                    py-3.75
                    bg-primary
                    w-full
                `,
                className 
            )}
        >
            <Link className="" href="/">
                <Image src={Logo} alt="Logo" className="h-8 w-8" />
            </Link>
        </nav>
    )
}

export default Navbar;
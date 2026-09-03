import React from 'react';
import Image from 'next/image';

//Types
import type { NavbarProps } from '@/types';

//Utils
import { cn } from '@/lib/utils';
import Link from 'next/link';

//image
import Logo from '@/assets/images/logo.png';
import { Button, Container } from '@/components';
import { cva } from 'class-variance-authority';

const LinkVariants = cva(
    `
        flex
        items-center
        justify-center
        gap-5
        border-b-3
        border-transparent
        hover:border-b-secondary
        duration-300
    `
);

const Navbar = ({ className }: NavbarProps) => {

    const navLink = [
        {
            name: 'Principal',
            href: '/',
        },
        {
            name: 'Sobre',
            href: '/about',
        },
        {
            name: 'Portfólio',
            href: '/portfolio',
        },
        {
            name: 'Contato',
            href: '/contact',
        }
    ];

    return (
        <nav 
            className={cn(
                `
                    flex
                    items-center
                    justify-between
                    px-5
                    bg-primary
                `,
                className 
            )}
        >
            <Container alignItems="center" justifyContent="between">
                <Link className="py-[15px]" href="/">
                    <Image src={Logo} alt="Logo" className="h-auto w-full max-w-[100px]" />
                </Link>
                <div className={cn(
                    `
                        flex
                        align-center
                        justify-center
                        gap-5
                    `
                )}>
                    {navLink.map((link) => (
                        <Link key={link.href} href={link.href} className={LinkVariants()}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <Button icon="whatsapp" href="#">Fale conosco</Button>
            </Container>
        </nav>
    )
}

export default Navbar;
'use client'

import { useState } from "react";
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Logo from '@/public/images/devRosLogo.svg'
import { HambergerMenu, CloseCircle } from "iconsax-react"; 

const Header = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { href: '/', label: 'Domů' },
        { href: '/front-end', label: 'Front-end skills' },
        { href: '/back-end', label: 'Back-end skills' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Kontakt' },
    ];
    return (
        <nav className="px-4 lg:px-[60px] pt-5 lg:pt-[46px] pb-5 lg:pb-[61px] flex flex-col lg:flex-row  lg:justify-between lg:items-center">
            <div className="flex justify-between items-center w-full lg:w-auto">
                <Image
                src={Logo}
                width={177}
                height={55}
                alt="logo"
                />
                <button
                className="lg:hidden text-white"
                onClick={toggleMobileMenu}
                >
                {isMobileMenuOpen ? <CloseCircle size={32} color="#FFFFFF" /> : <HambergerMenu size={32} color="#FFFFFF" />} {/* Toggle icon */}
                </button>
            </div>
            {/* <div className=" hidden sm:block">
                <ul className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-10  gap-y-6 sm:gap-y-0 justify-self-end">
                    <li className="text-white font-bold text-[18px] leading-[35px]"><Link  href='/'>Domů</Link></li>
                    <li className="text-[#FFFFFF80] text-[18px] leading-[35px]"><Link href='/frontend'>Front-end skills</Link></li>
                    <li className="text-[#FFFFFF80] text-[18px] leading-[35px]"><Link href='/back-end'>Back-end skills</Link></li>
                    <li className="text-[#FFFFFF80] text-[18px] leading-[35px]"><Link href='/portforlio'>Portfolio </Link></li>
                    <li className="text-[#FFFFFF80] text-[18px] leading-[35px]"><Link href='/contact'>Kontakt </Link></li>
                </ul>
            </div> */}
            <div className={`lg:flex ${isMobileMenuOpen ? 'flex mt-4' : 'hidden'} flex-col lg:flex-row lg:items-center gap-10 gap-y-6 lg:gap-y-0 justify-self-end w-full lg:w-auto`}>
                <ul className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-10 gap-y-6 lg:gap-y-0">
                {navItems.map(item => (
                    <li
                    key={item.href}
                    className={`text-[18px] leading-[35px] ${pathname === item.href ? 'font-bold text-white' : 'text-[#FFFFFF80]'}`}
                    >
                    <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    )
}

export default Header
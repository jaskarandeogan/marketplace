"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SearchBar from '../SearchBar';
import Wallet from "@/app/components/Wallet";
import Dropdowns from "@/app/components/shared/Dropdown";
import ProfileView from "@/app/components/Profile";
import { FaRegUserCircle } from "react-icons/fa";
import { RiHomeSmile2Fill, RiShoppingBag2Fill } from "react-icons/ri";
import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Experimental or new feature usage
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Fragment } from "react";

const Header = ({ handleProfileClick }) => {
    const pathname = usePathname(); // Directly returns the pathname
    const [activeMenu, setActiveMenu] = useState('Home');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const menus = [
        {
            name: 'Home',
            link: '/',
            Icon: () => <RiHomeSmile2Fill />
        },
        { name: 'Market', link: '/dashboard', Icon: () => <RiShoppingBag2Fill /> },
    ];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleActiveMenu = () => {
        const activeMenu = menus.find(menu => menu.link === pathname)?.name || 'Home';
        setActiveMenu(activeMenu);
    };

    // Update active menu on pathname change
    useEffect(() => {
        handleActiveMenu();
    }, [handleActiveMenu, pathname]);  // Depend directly on pathname

    return (
        <header className='h-[64px] bg-lighter-background flex justify-between items-center'>
            <div className='min-w-96 flex items-center'>
                <Image
                    src="/market-place-logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className='my-4 mx-5'
                />
                <span className='h-8 border-r border-2 border-border mx-5'></span>
                <nav className='flex gap-4'>
                    {menus.map((menu, index) => (
                        <Link key={index} href={menu.link}>
                            <li className={`group h-16 text-white flex gap-2 font-semibold items-center border-b-2 border-b-primary ${activeMenu === menu.name ? 'border-b-2 border-b-primary' : 'border-b-transparent'} hover:text-text-color transition-all`}>
                                <menu.Icon
                                    className={`h-8 w-8 ${activeMenu === menu.name ? 'text-text-color' : 'text-white'} transition-all`}
                                />
                                <span className='text-white group-hover:text-text-color transition-all'>{menu.name}</span>
                            </li>
                        </Link>
                    ))}
                </nav>
            </div>
            {activeMenu == "Market" && <div className='min-w-96'>
                <SearchBar />
            </div>}
            <div className='mx-5 flex justify-end gap-4 items-center min-w-96'>
                <Wallet />
                <span className='h-8 border-r border-2 border-border'></span>
                <Dropdowns Icon={FaRegUserCircle}
                    translate="translate-x-16 md:translate-x-0"
                >
                    <ProfileView />
                </Dropdowns>
            </div>
        </header>
    );
}

export default Header;

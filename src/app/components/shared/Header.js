import React from 'react'
import Image from 'next/image'
import SearchBar from '../SearchBar'
import Wallet from "@/app/components/Wallet"
import { FaRegUserCircle } from "react-icons/fa";


const Header = ({
    handleProfileClick
}) => {
    const menus = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Market',
            link: '/market'
        },
        {
            name: 'Setting',
            link: '/setting'
        }]



    return (
        <header className='h-[64px] bg-lighter-background flex justify-between items-center'>
            <div className='min-w-96'>
                <Image
                    src="/market-place-logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className='my-4 mx-5'
                />
            </div>
            <div className='min-w-96'>
                <SearchBar />
            </div>
            <div className='mx-5 flex justify-end gap-4 items-center min-w-96'>
                <Wallet />
                <span className='h-8 border-r border-2 border-border'></span>
                <button onClick={handleProfileClick} className='rounded-full transition-all'>
                    <FaRegUserCircle className='h-10 w-10 text-white hover:text-text-color transition-all' />
                </button>
            </div>

        </header>
    )
}

export default Header
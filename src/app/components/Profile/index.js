"use client"

import { useState } from "react";

const ProfileView = ({ user = () => { },
    handleSignOut = () => { }
}) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    return (
        <div className="min-w-40">
            {isUserLoggedIn && <ul className='flex flex-col gap-2 px-4 py-4'>
                <li className='text-white font-semibold cursor-pointer hover:text-text-color transition-all'>Profile</li>
                <li className='text-white font-semibold cursor-pointer hover:text-text-color transition-all'>Settings</li>
                <li className='text-white font-semibold cursor-pointer hover:text-text-color transition-all'>Logout</li>
            </ul>}
            {!isUserLoggedIn && <ul className='flex flex-col gap-2 px-4 py-4'>
                <li className='text-white font-semibold cursor-pointer hover:text-text-color transition-all'>Login</li>
                <li className='text-white font-semibold cursor-pointer hover:text-text-color transition-all'>Register</li>
            </ul>}
        </div>
    )
}

export default ProfileView
"use client"

import React from 'react'
import DisclosurePanel from '../shared/DisclosurePanel'
import { TbReload } from "react-icons/tb";


const index = () => {

    const handleClearAll = () => {
        console.log('Clear All')
    }

    return (
        <div className='flex flex-col w-full p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-md font-semibold text-white'>Filter</h2>
                <button onClick={handleClearAll} className='h-10 w-10 rounded-md flex justify-center items-center hover:brightness-110'>
                    <TbReload className='h-6 w-6 text-white' />
                </button>
            </div>
            <hr className='my-2 border-[1.5px] border-border' />
            <DisclosurePanel />
            <hr className='my-2 border-[1.5px] border-border' />
            <DisclosurePanel />
            <hr className='my-2 border-[1.5px] border-border' />
            <DisclosurePanel />
        </div>
    )
}

export default index
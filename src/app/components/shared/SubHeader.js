"use client"

import React, { useState } from 'react'
import { FaFire } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import Dropdowns from './Dropdown';
import { CgSortAz } from "react-icons/cg";

const SubHeader = () => {
    const dealsData = [
        {
            name: "Popular",
            Icon: <FaFire className='h-5 w-5' />,
        },
        {
            name: 'Good Deals',
            Icon: <RiDiscountPercentLine className='h-5 w-5' />,
        },
    ]

    const ItemCategory = [
        {
            name: "All",
        },
        {
            name: "Bundles",
        },
        {
            name: "Sets",
        },
        {
            name: "Guns",
        },
        {
            name: "Knives",
        },
        {
            name: "Pets",
        },
        {
            name: "Misc",
        }
    ]

    const sortOptions = [
        {
            name: "High to Low",
            isActive: false
        },
        {
            name: "Low to High",
            isActive: false
        },
        {
            name: "Newest",
            isActive: false
        },
        {
            name: "Oldest",
            isActive: false
        }]

    const [selectedCategory, setSelectedCategory] = useState('');
    const [sort, setSort] = useState({
        name: "High to Low",
        isActive: true
    })

    const handleSort = (sort) => {
        setSort(sort)
        sortOptions.forEach(option => {
            option.isActive = false
        })
    }

    const handleSelectedOption = (category) => {
        setSelectedCategory(category)
    }

    return (
        <div className='flex-1 h-full flex justify-between items-center'>
            <div className='flex items-center px-3 py-2'>
                <ul className='flex gap-2 items-center'>
                    {dealsData.map((deal, index) => (
                        <li key={index} className={`font-semibold cursor-pointer text-text-color hover:text-white transition-all flex items-center gap-2 py-[6px] px-2 ${deal.name == selectedCategory.name && 'text-white'}`} onClick={
                            () => handleSelectedOption(deal)
                        }>

                            {deal.Icon}
                            <span>{deal.name}</span>
                        </li>
                    ))}
                </ul>
                <span className='h-8 border-r border-2 border-border mx-5'></span>
                <ul className='flex gap-2 items-center'>
                    {ItemCategory.map((category, index) => (
                        <li key={index} className={`py-[6px] px-2 font-semibold cursor-pointer text-text-color hover:text-white transition-all ${category.name == selectedCategory.name && 'text-white'}`} onClick={() => handleSelectedOption(category)
                        }>{category.name}</li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center gap-2 px-5'>
                <CgSortAz className='h-6 w-6 text-text-color' />
                <label className='text-text-color font-semibold'>Sort By:</label>
                <Dropdowns
                    text={sort.name}
                >
                    <div className='min-w-40 min-h-28 bg-light-background'>
                        <ul className='flex flex-col gap-2 px-4 py-4 transition-all'>
                            {sortOptions.map((option, index) => (
                                <li key={index} onClick={() => handleSort(option)} className={`text-white font-semibold cursor-pointer hover:text-text-color transition-all ${option.isActive ? 'text-text-color' : ''}`}>{option.name}</li>
                            ))}
                        </ul>
                    </div>
                </Dropdowns>
            </div>
        </div>
    )
}

export default SubHeader
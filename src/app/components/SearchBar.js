import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className='flex gap-2 bg-dark-background h-10 items-center p-3 rounded-md min-w-96'>
            <label htmlFor='searchBar'>
                 <IoSearch className='text-text-color h-5 w-5' />
            </label>
            <input id='searchBar' type="text" placeholder="Search for items" className='text-text-color font-medium bg-dark-background outline-none w-full' />
        </div>
    )
}

export default SearchBar
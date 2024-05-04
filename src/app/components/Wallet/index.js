import React from 'react'
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";


const index = ({
    amount = 2046.34,
    currency = 'USD',
    handleAddMoney,
}) => {
    return (
        <div className='bg-grey p-[2px] rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex ml-3 mr-8 items-center gap-1'>
                    <span className='text-primary text-md font-semibold'>$</span>
                    <h3 className='text-text-color text-md font-semibold'>{amount} </h3>
                </div>
                <div className='flex items-center'>
                    <button onClick={handleAddMoney} className='flex-1 h-10 w-10 bg-primary rounded-md flex justify-center items-center hover:brightness-110'>
                        <MdOutlineAddCircleOutline className='h-6 w-6 text-white' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
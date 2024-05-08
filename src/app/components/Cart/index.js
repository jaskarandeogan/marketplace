import React from 'react'
import { IoMdCart } from "react-icons/io";
import { TbPercentage } from "react-icons/tb";
import { Input } from '@headlessui/react'

const Cart = () => {

    const cartItems = []

    return (
        <section className='relative px-5 my-5 flex flex-col justify-between '>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-1'>
                    <IoMdCart className='h-6 w-6 text-primary' />
                    <span className='text-white font-medium'>Cart</span>
                </div>
                <button className='text-white font-medium'>Clear All</button>
            </div>

            <div className='h-[300px] flex items-center'>
                {
                    cartItems.length == 0 && <div className='w-full h-full flex items-center justify-center'>
                        <h4 className='text-text-color text-base'>Your cart is empty</h4>
                    </div>
                }
            </div>

            <div className='w-full mt-10'>
                <h4 className='flex items-center gap-1'>
                    <TbPercentage className='h-6 w-6 text-primary' />
                    <span className='text-white font-medium'>Discount</span>
                </h4>
                <div className='bg-grey p-3 mt-4 rounded-lg label-bg-gradient'>
                    <h4 className='text-white font-medium text-sm'>Promo Code</h4>
                    <Input
                        type="text"
                        placeholder="Enter Promo Code"
                        className='text-text-color mt-2 border-[2px] rounded-md text-sm px-2 py-1 border-border bg-white-5 outline-none w-full'
                    />
                </div>
                <div className='bg-grey p-3 mt-4 rounded-lg label-bg-gradient'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-white font-medium text-sm'>Buy 1 Get 2 Free</h4>
                        <button className='text-text-color text-xs'>View Eligible Items</button>
                    </div>
                </div>
                <hr className='my-4 border-[1.5px] border-border' />
                <div className='mt-4 rounded-lg'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-text-color font-medium text-xs'>Total price</h4>
                        <span className='text-base'>
                            <span className='text-white font-medium'>$</span>
                            <span className='text-white font-medium'>1452.43</span>
                        </span>
                    </div>
                    <button className='text-black bg-primary w-full text-base py-3 rounded-lg font-semibold mt-4 hover:brightness-110 transition-all'>Buy</button>
                </div>
            </div>
        </section>
    )
}

export default Cart
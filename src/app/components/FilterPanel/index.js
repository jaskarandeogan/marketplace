"use client"

import { useState } from 'react'
import DisclosurePane from '../shared/DisclosurePanel'
import { TbReload } from "react-icons/tb";
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa6";
import { SiNintendoswitch } from "react-icons/si";
import DeliveryPlatform from '@/app/components/FilterPanel/DeliveryPlatform';
import RarityPanel from '@/app/components/FilterPanel/Rarity';
import Paints from '@/app/components/FilterPanel/Paints';
import ItemType from '@/app/components/FilterPanel/ItemType';

const FilterPanel = () => {
    const [animationKey, setAnimationKey] = useState(0);

    const handleClearAll = () => {
        setAnimationKey(prevKey => prevKey + 1);
    }

    const deliveryPlatform = [
        {
            name: 'Windows',
            value: 'windows',
            Icon: FaWindows
        },
        {
            name: 'Playstation',
            value: 'playstation',
            Icon: FaPlaystation
        },
        {
            name: 'Xbox',
            value: 'xbox',
            Icon: FaXbox
        },
        {
            name: 'Nintendo',
            value: 'nintendo',
            Icon: SiNintendoswitch
        }
    ];

    const [selectedDeliveryPlatform, setSelectedDeliveryPlatform] = useState(
        {
            name: 'Windows',
            value: 'windows',
            Icon: FaWindows
        },
    )

    const handleSelectDeliveryPlatform = (platform) => {
        setSelectedDeliveryPlatform(platform);
    }

    return (
        <div className='flex flex-col w-full px-5 my-5'>
            <DeliveryPlatform deliveryPlatform={deliveryPlatform} handleSelectDeliveryPlatform={handleSelectDeliveryPlatform} selectedDeliveryPlatform={selectedDeliveryPlatform} />
            <div className='flex justify-between items-center mt-5'>
                <h2 className='text-md font-semibold text-white'>Filter</h2>
                <button onClick={handleClearAll} className='h-10 w-10 rounded-md flex justify-center items-center hover:brightness-110 rotate-360 transition-all' key={animationKey}>
                    <TbReload className='h-6 w-6 text-white' />
                </button>
            </div>
            <DisclosurePane
                ButtonContent="Paints"
                PanelContent={Paints}
            />
            <DisclosurePane
                ButtonContent="Rarity"
                PanelContent={RarityPanel}
            />
            
            <DisclosurePane 
                ButtonContent="Item Type" 
                PanelContent={ItemType}
            />
        </div>
    )
}

export default FilterPanel
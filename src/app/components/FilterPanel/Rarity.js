import { useState } from 'react'
import { Checkbox, Field, Label } from '@headlessui/react'
import classNames from 'classnames'

const RarityPanel = () => {
    const rareItems = [
        {
            name: 'Limited',
            value: 'limited',
            numberOfItems: 10
        },
        {
            name: 'Uncommon',
            value: 'uncommon',
            numberOfItems: 20
        },
        {
            name: 'Rare',
            value: 'rare',
            numberOfItems: 30
        },
        {
            name: 'Epic',
            value: 'epic',
            numberOfItems: 40
        },
        {
            name: 'Legendary',
            value: 'legendary',
            numberOfItems: 24
        },
        {
            name: 'Mythic',
            value: 'mythic',
            numberOfItems: 10
        },
        {
            name: 'Premium',
            value: 'premium',
            numberOfItems: 10
        }
    ]

    const [selectedRarity, setSelectedRarity] = useState([])

    const handleSelectRarity = (rarity) => {
        setSelectedRarity(prevRarity => {
            if (prevRarity.includes(rarity)) {
                return prevRarity.filter(item => item !== rarity)
            } else {
                return [...prevRarity, rarity]
            }
        })
    }



    return (<div className='flex flex-col gap-2'>{
        rareItems.map((item, index) => (
            <Field key={index} as="div" className="flex items-center justify-between w-full">
                <div className='flex gap-2 items-center'>
                    <Field
                        as={Checkbox}
                        name={item.value}
                        className={classNames("h-5 w-5 border-2  rounded-sm focus:ring-0 focus:outline-none cursor-pointer transition-all border-border",
                            selectedRarity.includes(item.value) ? "bg-primary" : "bg-dark-background "
                        )}
                        checked={selectedRarity.includes(item.value)}
                        onChange={() => handleSelectRarity(item.value)}
                    />
                    <Label as="span" className="ml-2 text-sm font-medium text-text-color cursor-pointer hover:text-white transition-all"
                        onClick={() => handleSelectRarity(item.value)}
                    >{item.name}</Label>
                </div>
                <span className="ml-2 text-sm text-text-color">{item.numberOfItems}</span>
            </Field>
        ))
    }
    </div>
    )
}

export default RarityPanel
import React, { useState } from 'react'
import { ItemCategory } from '@/app/data/items'
import { Checkbox, Field, Label } from '@headlessui/react'
import classNames from 'classnames'

const ItemType = () => {


    const [selectedItems, setSelectedItems] = useState([])

    const handleSelectItem = (item) => {
        setSelectedItems(prevItems => {
            if (prevItems.includes(item)) {
                return prevItems.filter(selectedItem => selectedItem !== item)
            } else {
                return [...prevItems, item]
            }
        })
    }

    return (
        <div className='flex flex-col gap-2'>
            {
                ItemCategory.map((item, index) => (
                    <Field key={index} as="div" className="flex items-center">
                        <Checkbox
                            as={Checkbox}
                            name={item.name}
                            checked={selectedItems.includes(item.name)}
                            onChange={() => handleSelectItem(item.name)}
                            className={classNames("h-5 w-5 border-2  rounded-sm focus:ring-0 focus:outline-none cursor-pointer transition-all border-border",
                            selectedItems.includes(item.name) ? "bg-primary" : "bg-dark-background "
                        )}
                        />
                        <Label as="span" className="ml-2 text-sm font-medium text-text-color cursor-pointer hover:text-white transition-all">{item.name}</Label>
                    </Field>
                ))
            }
        </div>
    )
}

export default ItemType
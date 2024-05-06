import React from 'react'
import classNames from 'classnames';

const DeliveryPlatforms = ({
    deliveryPlatform = [],
    handleSelectDeliveryPlatform = () => { },
    selectedDeliveryPlatform = {}
}) => {
    return (
        <div className='flex flex-col my-5'>
            <h2 className='text-sm font-semibold text-white'>Delivery Platform</h2>
            <div className='grid grid-flow-row grid-cols-2 gap-2 mt-4'>
                {
                    deliveryPlatform?.map((platform, index) => (
                        <button key={index} className={classNames('rounded-md font-medium bg-grey flex gap-2 py-2 justify-center items-center hover:brightness-110 transition-all text-text-color w-full',
                            selectedDeliveryPlatform?.value === platform.value && 'bg-primary text-white'
                        )}
                            onClick={() => handleSelectDeliveryPlatform(platform)}
                        >
                            <platform.Icon className='h-6 w-6' />
                            {platform.name}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default DeliveryPlatforms
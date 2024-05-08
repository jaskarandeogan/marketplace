import React from 'react'
import classNames from 'classnames'

const Paints = () => {
    const colors = [{
        name: 'default',
        primary: 'rgba(0, 0, 0, 0.0)',
        secondary: 'rgba(0, 0, 0, 0.0)',
    },
    {
        name: 'Forest green',
        primary: '#045B02',
        secondary: '#08B605',
    },
    {
        name: 'Burnt Sieenna',
        primary: '#5B2600',
        secondary: '#B74C00',
    },
    {
        name: 'Black',
        primary: '#1A1A1A',
        secondary: '#000000',
    },
    {
        name: 'Crimson',
        primary: '#760201',
        secondary: '#EC0301',
    },
    {
        name: 'Titanium white',
        primary: '#7F7F7F',
        secondary: '#FFFFFF',
    },
    {
        name: 'Orange',
        primary: '#7F4C00',
        secondary: '#FF9900',
    },
    {
        name: 'Purple',
        primary: '#50017F',
        secondary: '#A102FE',
    }]

    return (
        <div>
            <div className='grid grid-cols-8 gap-2 '>
                {
                    colors.map((color, index) => (
                        <div key={index} className={'flex flex-col gap-2 relative w-fit'}>
                            <div className={classNames('group-paint hover:scale-110 cursor-pointer transition-all h-6 w-6 rounded-lg clip-sqaure z-10', color.name == "default" && "border-2 border-border")} style={{ background: color.primary }}></div>
                            <div className={classNames('group-paint hover:scale-110 cursor-pointer transition-all h-6 w-6 rounded-lg absolute left-0', color.name == "default" && "border-2 border-border")} style={{ background: color.secondary }}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Paints
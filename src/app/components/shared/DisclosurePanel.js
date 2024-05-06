"use client"

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const DisclosurePanel = ({
    PanelContent = 'If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.',
    ButtonContent = 'What is your refund policy?'
}) => {
    return (<Disclosure>
        {({ open }) => (
            <>
                <Disclosure.Button className="transition-all flex w-full justify-between py-2 text-left text-sm font-medium text-text-color hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-border">
                    <span>{ButtonContent}</span>
                    <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-text-color`}
                    />
                </Disclosure.Button>
                <Disclosure.Panel className="pb-2 pt-4 text-sm text-text-color">
                    {PanelContent}
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>)
}

export default DisclosurePanel

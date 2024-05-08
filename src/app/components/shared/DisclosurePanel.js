"use client"

import { Disclosure, DisclosurePanel, DisclosureButton, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const DisclosurePane = ({
    PanelContent = () => <div>Panel Content</div>,
    ButtonContent = 'What is your refund policy?'
}) => {
    return (<Disclosure

    >
        {({ open }) => (
            <div className='transition-all duration-200'>
                <DisclosureButton className="transition-all flex w-full justify-between py-2 text-left text-sm font-medium text-text-color hover:text-white">
                    <span>{ButtonContent}</span>
                    <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-text-color transition-all`}
                    />
                </DisclosureButton>
                <Transition
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="duration-200 ease-out"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-6"
                >
                    <DisclosurePanel className="pb-2 pt-4 text-sm text-text-color">
                        <PanelContent />
                    </DisclosurePanel>
                </Transition>
                <hr className='my-2 border-[1.5px] border-border' />
            </div>
        )}
    </Disclosure>)
}

export default DisclosurePane

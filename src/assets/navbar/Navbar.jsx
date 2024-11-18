import React, { useEffect, useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../cart/CartContext'
import { toast } from 'react-toastify'
import { ShowonLogin, ShowonLogout } from '../extrafile/hiddenlinks'

const Navbar = () => {
    const redirect = useNavigate()
    const [username, setUsername] = useState('')
    const navigation = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Products', to: '/products' },
        { name: 'Contact Us', to: '/contect' },
    ]
    const cartcon = useCart()
    const handleDelete = () => {
        sessionStorage.removeItem('myproject')
        toast.success("Logout Successfully")
        redirect('/')
    }

    useEffect(() => {
        if (sessionStorage.getItem('myproject') != null) {
            let obj = JSON.parse(sessionStorage.getItem('myproject'))
            setUsername(obj.username)
        }
        else setUsername('Guest')
    }, [sessionStorage.getItem('myproject')])

    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img alt="Your Company" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" className="h-8 w-auto" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <NavLink key={item.name} to={item.to} className={({ isActive }) =>
                                            isActive ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                        }>
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            {/* Profile dropdown */}
                            <ShowonLogout>
                                <NavLink to="/login" type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    Login
                                </NavLink>
                            </ShowonLogout>
                            <ShowonLogin>
                                <Link to="/cart"
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <ShoppingCartIcon aria-hidden="true" className="h-8 w-8" />
                                    <span className='bg-red-600 text-white px-2 rounded-full absolute -top-1 -right-3 mr-2 inline-flex items-center justify-center text-xs'>{cartcon.cartItems.length}</span>
                                </Link>
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <Link className="h-8 w-8 rounded-full"><UserCircleIcon className='text-white'></UserCircleIcon></Link>
                                            <span className='text-white mt-1'>{username}</span>
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                            >
                                                Your Profile
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                            >
                                                Settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <button type='button'
                                                onClick={handleDelete} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none">
                                                Sign out
                                            </button>
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </ShowonLogin>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? "bg - gray - 900 text-white block rounded-md px-3 py-2 text-base font-medium" : "text - gray - 300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                                }>
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure >
        </>
    )
}

export default Navbar

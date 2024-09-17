import React, { useState } from 'react'
import Image from 'next/image';
import Button from '@components/atoms/buttons/index';
import MenuTag from '@components/atoms/menuTag/index';
import { Icon } from '@iconify/react';

const menu = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Contact',
        url: '/contact',
    },
    {
        title: 'Blog',
        url: '/blog',
    },
    {
        title: 'Careers',
        url: '/careers',
    }
]

const NavBar = () => {
    return (
        <nav className='w-screen shadow-xl flex flex-row justify-around h-20'>
            <div className='h-full flex items-center justify-center'>
                <Image src='/logos/logo.png' alt='Logo' width={140} height={20} />
            </div>
            <div>
                <ul className='flex flex-row justify-between w-full'>
                    {menu.map((el) => (
                        <li key={el.title} className='h-20 mx-3'>
                            <MenuTag title={el.title} url={el.url} />
                        </li>
                    ))
                    }
                </ul>
            </div>
            <div className='h-full flex items-center justify-center'>
                <Button />
            </div>
        </nav>
    );
};

const NavBarMobile = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='w-screen shadow-xl flex flex-row justify-around h-16 relative'>
            <div className='flex flex-row justify-between mx-5 items-center w-full'>
                <div>
                    <Image src='/logos/logo.png' alt='Logo' width={140} height={20} />
                </div>
                <div onClick={() => setOpen(!open)}>
                    <Icon className='h-10 w-10 text-tertiary'
                        icon={`${open ? 'mingcute:close-fill' : 'mingcute:menu-fill'}`} />
                </div>
            </div>

            <div className={`w-screen flex justify-center items-center inset-x-0 top-24 ${
                open ? 'absolute' : 'hidden'
            }`}
            >
                <div className='bg-white w-4/5 shadow-xl rounded-md py-5'>
                    <ul className='flex flex-col justify-between w-full'>
                        {menu.map((el) => (
                            <li key={el.title} className='h-20 mx-3'>
                                <MenuTag title={el.title} url={el.url} />
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export { NavBar, NavBarMobile } 

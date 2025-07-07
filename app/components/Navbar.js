"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
    const [SideMenu, setSideMenu] = useState(false)
    const showSideMenu = () => {
        setSideMenu((prev) => (!prev))
    }
    return (
        <div>
            <nav className='flex md:gap-12 justify-between border-r-black border bg-white items-center w-[90vw] rounded-full p-3.5 pl-10 md:top-11 top-5 right-[4vw] fixed mx-auto'>
                <div className="logo "><Link href={'/'} ><span className="font-bold text-3xl"> BitTree</span></Link></div>
                <div className="sidebar md:hidden pr-2"><button onClick={showSideMenu}><img src="/sidebar.png" alt="sidebar" /></button></div>
                <div className=" justify-between w-full items-center  hidden md:flex">
                    <ul className='flex text-[rgb(56,60,72)] font-medium'>
                        <Link href='/' className='hover:bg-[rgb(239,240,236)] py-2.5 px-3 rounded-md'><li>Products</li></Link>
                        <Link href='/' className='hover:bg-[rgb(239,240,236)] py-2.5 px-3 rounded-md'><li>Templates</li></Link>
                        <Link href='/' className='hover:bg-[rgb(239,240,236)] py-2.5 px-3 rounded-md'><li>Marketplace</li></Link>
                        <Link href='/' className='hover:bg-[rgb(239,240,236)] py-2.5 px-3 rounded-md'><li>Learn</li></Link>
                        <Link href='/' className='hover:bg-[rgb(239,240,236)] py-2.5 px-3 rounded-md'><li>Pricing</li></Link>

                    </ul>
                    <div className="buttons flex gap-2">
                        <Link href='/login' ><button className='cursor-pointer py-3.5 px-5.5 font-medium bg-[rgb(239,240,236)] rounded-md'>Log in</button></Link>
                        <Link href='/signup' ><button className='cursor-pointer py-3.5 px-5.5 font-medium bg-[rgb(30,35,48)] rounded-full text-white'>Sign up free</button></Link>
                    </div>
                </div>
            </nav>

            {SideMenu && (
                <div className="fixed top-0 right-0 h-full w-64 bg-white text-black z-40 shadow-lg flex flex-col ">
                    <button className="self-end text-2xl p-4" onClick={showSideMenu}>
                        ×
                    </button>
                    <nav className="mt-6 text-xl space-y-4 font-bold flex flex-col">
                        <Link href='/' className='px-4' onClick={showSideMenu} > Products </Link>
                        <div className="h-[1px] bg-gray-500 mx-auto z-50 w-[100%]"></div>
                        <Link href='/' className='px-4' onClick={showSideMenu} > Templates </Link>
                        <div className="h-[1px] bg-gray-500 mx-auto z-50 w-[100%]"></div>
                        <Link href='/' className='px-4' onClick={showSideMenu} > Marketplace </Link>
                        <div className="h-[1px] bg-gray-500 mx-auto z-50 w-[100%]"></div>
                        <Link href='/' className='px-4' onClick={showSideMenu} > Learn </Link>
                        <div className="h-[1px] bg-gray-500 mx-auto z-50 w-[100%]"></div>
                        <Link href='/' className='px-4' onClick={showSideMenu} > Pricing </Link>
                    </nav>
                </div>
            )}
        </div >
    )
}

export default Navbar

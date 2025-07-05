import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav className='flex gap-12 border-r-black border bg-white items-center w-[90vw] rounded-full p-3.5 pl-10 top-13 right-[4vw] fixed mx-auto'>
                <div className="logo "><Link href={'/'} ><span className="font-bold text-3xl"> BitTree</span></Link></div>
            <div className="flex justify-between w-full items-center ">
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
        </div >
    )
}

export default Navbar

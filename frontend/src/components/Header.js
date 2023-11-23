import React from 'react'
import { IoMdLogIn } from 'react-icons/io';


const Header = () => {
    return(
        <div className='h-[4rem] bg-black w-screen text-white flex items-center'>
            <div className='w-full xl:max-w-[1250px] px-6'>
                <ul className='hidden w-full lg:flex items-center justify-start space-x-4'>
                    <li className='cursor-pointer font-medium hover:text-green-300'>HOME</li>
                    <li className='cursor-pointer font-medium hover:text-green-300'>ARTICLES</li>
                    <li className='cursor-pointer font-medium hover:text-green-300'>ABOUT US</li>
                </ul>

                <IoMdLogIn size={28} className='lg:hidden'/>
            </div>
        </div>
    )
}
export default Header
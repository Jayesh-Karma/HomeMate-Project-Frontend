import React from 'react';
import { Link, Links } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center border border-gray-200'>
        <div
        className='flex justify-between items-center w-[90%]'>

            <div className='p-2'>
                <img 
                src="/HOME_MATE-removebg-preview.png" alt="None" 
                className=' w-48 h-13'
                />
            </div>
            <div className=''>
                <ul  className='flex items-center gap-4 cursor-pointer'>
                    <li className='hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100'><Link to={'/'}>Home</Link></li>
                    <li className='hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100'><Link to={"/service"}> Services </Link></li>
                    <li className='hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100'><Link to={"/about"}>About</Link></li>
                    <li className='hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100'>Team</li>
                    <li>Profile</li>
                </ul>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar

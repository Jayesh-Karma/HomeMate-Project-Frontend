import React from 'react'
import { BsPhone } from 'react-icons/bs';
import { FaLocationArrow, FaLocationPin, FaLocationPinLock, FaRegMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='w-[90%] h-72 flex justify-between items-center'> 

    <div className='flex flex-col justify-start items-start'>
      <div className='flex flex-col items-start h-30'>
          <img src="./Logo/HOME_MATE-removebg-preview.png" className=' w-52 h-15' alt="" />
          <p className=' text-white'>One Stop Platform For All Home Services</p>
      </div>
      <div className='flex flex-col items-start text-white'>
          <p className='flex items-center gap-4'> <FaLocationPinLock/>  Indore</p>
          <p className='flex items-center gap-4'> <FaRegMessage/> homemate.services@gmail.com</p>
          <p className='flex items-center gap-4'> <BsPhone/> +1800 854-36-80</p>
      </div>
    </div>

    <div className='pr-50 text-white'>
      <p className='font-bold pb-4'>Company</p>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Services</li>
          <li>Reviews</li>
          <li>Contact Us</li>
        </ul>
    </div>
    </div>
  )
}

export default Footer;

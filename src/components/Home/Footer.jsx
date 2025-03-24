import React from 'react'
import { BsPhone } from 'react-icons/bs';
import { FaLocationArrow, FaLocationPin, FaLocationPinLock, FaRegMessage } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full p-5 max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-between items-start text-white py-6 gap-6">
    {/* Left Section */}
    <div className="flex flex-col items-start gap-4">
      {/* Logo & Tagline */}
      <div className="flex flex-col items-start">
        <img
          src="/HOME_MATE-removebg-preview.png"
          className="w-40 sm:w-52"
          alt="Home Mate Logo"
        />
        <p className="text-sm sm:text-base">One Stop Platform For All Home Services</p>
      </div>
  
      {/* Contact Details */}
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <p className="flex items-center gap-2">
          <FaLocationPinLock /> Indore
        </p>
        <p className="flex items-center gap-2">
          <FaRegMessage /> homemate.services@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <BsPhone /> +1800 854-36-80
        </p>
      </div>
    </div>
  
    {/* Right Section */}
    <div className="text-white">
      <p className="font-bold pb-2 sm:pb-4 text-lg">Company</p>
      <ul className="text-sm sm:text-base space-y-2">
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Careers</li>
        <li className='hover:font-bold cursor-pointer'>Services</li>
        <li className='hover:font-bold cursor-pointer'>Reviews</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
    </div>
  </div>
  
  )
}

export default Footer;

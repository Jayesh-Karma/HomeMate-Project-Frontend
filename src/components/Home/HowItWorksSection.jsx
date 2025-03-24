import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaCircleArrowRight } from 'react-icons/fa6'
import HowItWorksSectionCards from './HowItWorksSectionCards'

const HowItWorksSection = () => {
  return (
    <div className='w-[90%] max-w-screen-xl mx-auto'>
         <div className='flex flex-col border-gray-500 p-1 px-4 rounded-2xl font-bold text-xl'>
           <p className=' text-4xl'>How It Works </p>
           <p className=' text-[#7C00FE] text-xl'>Get Start With 3 Easy Steps</p>
        </div>
    
    <div>
        <HowItWorksSectionCards />
    </div>
      
    </div>
  )
}

export default HowItWorksSection

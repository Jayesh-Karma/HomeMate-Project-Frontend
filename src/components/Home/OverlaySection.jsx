import React from 'react'
import { BsCupHot } from "react-icons/bs";


const OverlaySection = ({outerclass}) => {
  return (
    <div className={`bg-[#F9E400] ${outerclass} font-sans flex justify-between items-center w-[40%] p-10 rounded-[50px]`}>
      <div className='flex justify-center items-center flex-col'>
            <div><BsCupHot /></div>
            <div className=' font-bold text-xl'><p>190+</p></div>
            <div>Service Providers</div>
      </div>
      <div className='flex justify-center items-center flex-col'>
            <div><BsCupHot /></div>
            <div className=' font-bold text-xl'><p>120+</p></div>
            <div>Site Visits</div>
      </div>
      <div className='flex justify-center items-center flex-col'>
            <div><BsCupHot /></div>
            <div className=' font-bold text-xl'><p>100+</p></div>
            <div>Home Visits</div>
      </div>
    </div>
  )
}

export default OverlaySection

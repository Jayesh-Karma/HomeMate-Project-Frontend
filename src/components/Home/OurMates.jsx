import React from 'react'
import MateCards from './MateCards'

const OurMates = () => {
  return (
    <div className='w-[90%] max-w-screen-xl mx-auto'>
       <div className='border flex gap-4 items-center border-gray-500 p-1 px-4 rounded-2xl font-bold text-xl'>
           <div className='bg-[#7C00FE] text-xl inline text-[#7C00FE] rounded-2xl'>--</div> 
           <p>Our Mates </p>
        </div>

        <div className='mt-4'>
            <MateCards />
        </div>

    </div>
  )
}

export default OurMates

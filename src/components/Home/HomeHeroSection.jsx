import React from 'react'
import ExploreServiceButton from './ExploreServiceButton'

const HomeHeroSection = () => {
    const images = [
         "./images/4121826 1.png",
         "./images/4140834 1.png",
        "./images/7833902 1.png",
        "./images/man-working-home-improvement-construction-site-is-painting-walls-house-bright-col_1244682-1274 1.png",
        "./images/plumber-man-with-mobile-phone-bathroom-vector-illustration-cartoon-style_1308175-227808 1.png",
        "./images/429694-PEW7BM-287 1.png" 
    ]
  return (
    <div className= 'w-full h-full bg-[#7C00FE] flex flex-col justify-center items-center'>
        <div className='w-[90%] py-30  flex justify-between items-center'>
            
            <div className=' font-extrabold text-7xl/25 line'>
                <h1 className='text-[#FEC3C7]' >BUILD.</h1>
                <h1 className='text-[#9AD7F3]'>RENOVATE.</h1>
                <h1 className='text-white'>GO AHEAD !!!!</h1>
                <ExploreServiceButton />
            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
                <div className=' flex justify-center items-center gap-4'>
                    <div className=' rounded-[50px] overflow-hidden'>
                    <img src={images[0]} alt="" srcset="" />
                    </div>

                    <img src={images[1]} alt="" srcset="" />
                    <img src={images[4]} alt="" srcset="" />
                </div>
                <div className=' flex justify-center items-center gap-4'>
                    <img src={images[2]} alt="" srcset="" />
                    <img src={images[3]} alt="" srcset="" />
                    <img src={images[5]} alt="" srcset="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHeroSection

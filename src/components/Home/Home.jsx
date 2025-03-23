import React from 'react'
import Navbar from '../Extras/Navbar'
import HomeHeroSection from './HomeHeroSection'
import OverlaySection from './OverlaySection'
import AllServiceSection from './All Services/AllServiceSection'
import PopularServices from './PopularServices'
import OurMates from './OurMates'
import HowItWorksSection from './HowItWorksSection'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      
      <div className='w-full'>
      {/* <Navbar /> */}
      </div>
        
      
      <div className='w-full'>
        <HomeHeroSection />
      </div>


      <div className='w-full flex items-center justify-center relative'>
      <OverlaySection outerclass={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}/>
      </div>

      <div className='w-full flex items-center justify-center mt-35'>
        <AllServiceSection />
      </div>


      <div className='w-full flex items-center justify-center my-10'>
        <PopularServices />
      </div>


      <div className='w-full flex items-center justify-center mt-10'>
        <OurMates />
      </div>

      <div className='w-full flex items-center justify-center mt-10'>
        <HowItWorksSection />
      </div>


      <div className='w-full flex items-center justify-center mt-10 bg-[#7C00FE]'>
        <Footer />
      </div>

      <div className='w-full flex items-center justify-center bg-[#FFE700]'>
        <div className='w-[90%] p-5 flex flex-col items-center justify-center'>
            <p className='text-black font-semibold'>All Rights Reserved HomeMate@2025</p>
            <p className=' text-gray-800 text-xs'>Made with Love By Jayesh & Roshan ❤️</p>
        </div>

      </div>
    </div>
  )
}

export default Home

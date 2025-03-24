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
    <div>

    <div className="w-full  overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 box-border">
  
  {/* Navbar Section */}
  <div className="w-full">
    <Navbar />
  </div>
  
  {/* Hero Section */}
  <div className="w-full ">
    <HomeHeroSection />
  </div>

  {/* Overlay Section */}
  <div className="w-full hidden md:flex md:items-center md:justify-center md:relative">
    <OverlaySection outerclass="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  </div>

  {/* Services Section */}
  <div className="w-full flex items-center justify-center pt-12 sm:mt-24" id='service'>
    <AllServiceSection />
  </div>

  {/* Popular Services Section */}
  <div className="w-full flex items-center justify-center mt-10 sm:my-16">
    <PopularServices />
  </div>

  {/* Our Mates Section */}
  <div className="w-full flex items-center justify-center mt-10 sm:mt-16">
    <OurMates />
  </div>

  {/* How It Works Section */}
  <div className="w-full flex items-center justify-center my-10 sm:mt-16">
    <HowItWorksSection />
  </div>

</div>
  {/* Footer Section */}
  <div className="w-full flex items-center justify-center mt-10 bg-[#7C00FE] py-5">
    <Footer />
  </div>

  {/* Copyright Section */}
  <div className="w-full flex items-center justify-center bg-[#FFE700] py-5">
    <div className="w-[90%] max-w-screen-xl text-center p-5 flex flex-col items-center justify-center">
      <p className="text-black font-semibold">All Rights Reserved HomeMate@2025</p>
      <p className="text-gray-800 text-xs">Made with Love By Jayesh & Roshan ❤️</p>
    </div>
  </div>

    </div>
)
}

export default Home

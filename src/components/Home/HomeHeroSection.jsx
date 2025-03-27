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
    <div className="w-full rounded-b-4xl md:rounded-b-full h-full bg-[#7C00FE] flex flex-col justify-center items-center py-16 sm:py-24 lg:py-32">
  
  <div className="w-[90%] max-w-screen-xl flex flex-col lg:flex-row justify-between items-center gap-10">

    {/* Text Section */}
    <div className="text-center lg:text-left font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight">
      <h1 className="text-[#FEC3C7]">BUILD.</h1>
      <h1 className="text-[#9AD7F3]">RENOVATE.</h1>
      <h1 className="text-white">GO AHEAD !!!!</h1>
      
      <div className="mt-6">
        {/* <ExploreServiceButton /> */}
      </div>
    </div>

    {/* Image Section */}
    <div className="md:flex md:flex-col  md:justify-center md:items-center gap-4 hidden">
      
      {/* First Row */}
      <div className=" md:flex md:items-center gap-6">
        <div className="rounded-[50px] overflow-hidden">
          <img src={images[0]} alt="image 1" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-md"/>
        </div>
        <img src={images[1]} alt="image 2" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-md"/>
        <img src={images[4]} alt="image 3" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-md"/>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        <img src={images[2]} alt="image 4" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-md"/>
        <img src={images[3]} alt="image 5" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-md"/>
        <img src={images[5]} alt="image 6" className="w-20 sm:w-24 md:w-32 lg:w-40 h-auto rounded-md"/>
      </div>

    </div>
  </div>

</div>
  )
}

export default HomeHeroSection

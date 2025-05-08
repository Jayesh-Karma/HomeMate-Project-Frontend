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
    <div className="w-full   rounded-b-4xl bg-[#7C00FE] flex flex-col justify-center items-center py-30  lg:py-32">
      <div className="w-[90%] max-w-screen-xl flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* Text Section */}
        <div className="text-center lg:text-left font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight">
          <h1 className="text-[#FEC3C7] animate-fadeInUp">BUILD.</h1>
          <h1 className="text-[#9AD7F3] animate-fadeInUp delay-150">RENOVATE.</h1>
          <h1 className="text-white animate-fadeInUp delay-300">GO AHEAD!!!</h1>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-white hover:bg-transparent hover:border-2 hover:border-white hover:text-white   text-[#7C00FE] text-xl font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-103">
              Explore Services
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden md:flex flex-col justify-center items-center gap-6">
          
          {/* First Row */}
          <div className="flex items-center gap-6">
            {images.slice(0, 3).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <img src={img} alt={`Image ${idx + 1}`} className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto rounded-lg"/>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex justify-center items-center gap-6">
            {images.slice(3, 6).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                <img src={img} alt={`Image ${idx + 4}`} className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto rounded-lg"/>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>  )
}

export default HomeHeroSection

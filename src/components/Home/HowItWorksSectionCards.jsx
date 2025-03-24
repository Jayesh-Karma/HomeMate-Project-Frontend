import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const HowItWorksSectionCards = () => {
    const data = [
        {
            id:1, 
            heading:"Select Your Services ", 
            desc:"Go to Services Section and choose which service you want and click on the service",
            arrowTrue:true
        },
        {
            id:2, 
            heading:"Select  your Service Expert", 
            desc:"Select From which service expert you want the service by verifying their previous work and all.",
            arrowTrue:true
        },
        {
            id:3, 
            heading:"Submit Your Details and Go 🚀", 
            desc:"Submit Some of your details for contact and the service provider will reach you.",
            arrowTrue:false
        }
    ]
  return (
    <div className="flex flex-wrap justify-center lg:justify-evenly items-center gap-6 mt-5 px-4">
    {data.map((d, index) => (
      <div
        key={index}
        className="group transition-all ease-in-out duration-700"
      >
        <div className="group-hover:scale-105 group-hover:bg-[#7C00FE] duration-500 h-auto max-w-[90vw] sm:max-w-[380px] bg-white rounded-2xl shadow-lg p-6 text-left border border-gray-200">
          {/* Step Number */}
          <div className="text-purple-600 text-4xl sm:text-6xl font-bold group-hover:text-white">
            {d.id}
          </div>
  
          {/* Title */}
          <div className="flex justify-between items-center">
            <h2 className="text-black font-semibold mt-2 group-hover:text-white text-lg sm:text-xl">
              {d.heading}
            </h2>
  
            {d.arrowTrue && (
              <div className="mt-2 bg-purple-600 group-hover:bg-white group-hover:text-[#7C00FE] text-white w-8 h-8 flex items-center justify-center rounded-full">
                <BsArrowRight />
              </div>
            )}
          </div>
          <hr className="my-2 border-gray-300" />
  
          {/* Description */}
          <p className="text-gray-600 text-sm group-hover:text-gray-300">
            {d.desc}
          </p>
  
          {/* Link */}
          <div className="py-5">
            <a
              href="#"
              className="text-purple-600 group-hover:text-white group-hover:font-bold font-semibold mt-2 inline-block underline"
            >
              Go To Services
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  )
}

export default HowItWorksSectionCards

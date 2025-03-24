import React from 'react'
import { IoIosTimer } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const AllServiceSection = () => {
    const services = [
        {id:4, title:"Builder", image:"./images/icons/Builder.png", code:"#FFBC99"},
        {id:3, title:"Carpenter", image:"./images/icons/Carpenter.png", code:"#B1E5FC"},
        {id:1, title:"Plumber", image:"./images/icons/plumber.png", code:"#CABDFF"},
        {id:2, title:"Electrician", image:"./images/icons/eleectrician.png", code:"#B5EBCD"},
        {id:5, title:"Painter", image:"./images/icons/painter.png", code:"#FC8EAC"},
    ]

    const navigate = useNavigate();
  return (
    // <div className='w-[90%] h-80'>
    //     <div className='border flex gap-4 items-center border-gray-500 p-1 px-4 rounded-2xl font-bold text-xl'>
    //        <div className='bg-[#7C00FE] text-xl inline text-[#7C00FE] rounded-2xl'>--</div> 
    //        <p>All Services </p>
    //     </div>

    //     <div className='flex flex-wrap justify-evenly gap-2 my-10 w-full'>
    //         {
    //             services.map(service => (
    //                 <div key={service.id} onClick={()=>{ navigate(`/service-providers-by-service/${service.title.toLowerCase()}`) }} 
    //                 className='gap-4 items-center border-gray-500 p-1 px-4 rounded-2xl flex flex-col justify-center'>
                        
    //                     <div className={`flex justify-center items-center content-center rounded-full border overflow-hidden`}>
    //                     <img src={service.image}  alt={"None"} 
    //                     className={`w-35 h-35 p-8`} style={{ backgroundColor: service.code}}/>
    //                     </div>

    //                     <p className=' font-semibold'>{service.title}</p>
    //                 </div>
    //             ))
    //         }

    //                 <div  className='gap-4 items-center border-gray-500 p-1 px-4 rounded-2xl flex flex-col justify-center'>       
    //                     <div className={`flex justify-center items-center content-center rounded-full border overflow-hidden w-35 h-35 p-8 text-[100px]`}>
    //                     <IoIosTimer />
    //                     </div>

    //                     <p className=' font-semibold'>Coming Soon</p>
    //                 </div>
    //     </div>
    // </div>
    <div className="w-[90%] max-w-screen-xl mx-auto h-auto mt-3">
  
  {/* Heading Section */}
  <div className="border flex gap-4 items-center border-gray-500 p-2 px-4 rounded-2xl font-bold text-lg sm:text-xl">
    <div className="bg-[#7C00FE] text-lg sm:text-xl inline text-[#7C00FE] rounded-2xl">--</div> 
    <p>All Services</p>
  </div>

  {/* Services List */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-10 w-full">
    {
      services.map(service => (
        <div key={service.id} 
          onClick={() => { navigate(`/service-providers-by-service/${service.title.toLowerCase()}`) }} 
          className="border border-gray-300 p-4 rounded-2xl flex flex-col justify-center items-center cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          
          {/* Service Image */}
          <div className="flex justify-center items-center rounded-full border overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 p-4" style={{ backgroundColor: service.code }}>
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>

          {/* Service Title */}
          <p className="font-semibold text-center text-sm sm:text-base">{service.title}</p>
        </div>
      ))
    }

    {/* Coming Soon Placeholder */}
    <div className="border border-gray-300 p-4 rounded-2xl flex flex-col justify-center items-center lg:hidden cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <div className="flex justify-center items-center rounded-full border overflow-hidden w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 p-4 text-[60px] sm:text-[80px] lg:text-[100px]">
        <IoIosTimer />
      </div>
      <p className="font-semibold text-center text-sm sm:text-base">Coming Soon</p>
    </div>
  </div>

</div>

  )
}

export default AllServiceSection

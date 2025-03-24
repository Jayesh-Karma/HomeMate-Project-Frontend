import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ExploreServiceButton = () =>{

    return(
        
        <div className=' text-lg md:text-xl text-black font-semibold'>
        <button className='flex items-center gap-3 bg-[#f9e400] py-2 px-4 rounded-4xl hover:bg-yellow-400 hover:scale-105 duration-100 transition-all ease-in-out'>
            One Stop Home Solution <span className=''><FaArrowRightLong /></span>
        </button>
        </div>
    )
}

export default ExploreServiceButton;
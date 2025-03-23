import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ExploreServiceButton = () =>{

    return(
        
        <div className='my-5'>
        <button className='flex gap-5 items-center bg-[#F9E400] font-medium text-xl py-2 px-4 rounded-4xl hover:bg-[#f9e400ea] transition-all ease-in-out'>
            Explore Services <span className=''><FaArrowRightLong /></span>
        </button>
        </div>
    )
}

export default ExploreServiceButton;
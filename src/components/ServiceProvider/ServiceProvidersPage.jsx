import React, { useEffect, useState } from 'react'
import Navbar from '../Extras/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/apiService';
import { getServiceProvidersByService } from '../../services/service providers data/serviceProviderService';


import { BadgeCheck } from "lucide-react";
const ServiceProvidersPage = () => {

    const [ users, setUsers ] = useState();
    const {service} = useParams();
    const navigate = useNavigate();
    // console.log(service);

    useEffect(()=>{

        async function getService(){
            try {
                const users = await getServiceProvidersByService(service);
                console.log(users)
                setUsers(users.users);
            } catch (error) {
                console.log(error.message);    
            }
        }

        getService();
    }, [])
    console.log(users)
    return (
    
    <div className="w-full  overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 box-border">

    <div className='w-full'>
        <Navbar />
    </div>

    <div className=' mt-10 w-full flex justify-center items-center'>
      <div className=' w-[90%]'>
      
        {/* Hero section of service provider page  */}
        {/* <img src="/images/carpenter.png" alt="" /> */}

        <div className='flex flex-col shadow-gray-500 shadow-2xs bg-[#7C00FE] border-gray-300 border p-2 px-4 rounded-4xl font-bold text-xl  items-center'>
           <p className=' text-2xl md:text-3xl lg:text-4xl font-extrabold text-white'>OUR MATES </p>
           <p className=' text-sm md:text-2xl lg:text-3xl text-gray-200 font-semibold'>Available <span className='text-[#FFE700]'>{service.toLocaleUpperCase()}S</span> on our platform</p>
        </div>

        <ul className=' botton-0 mt-5 text-xs border border-gray-400 rounded-3xl text-gray-500  font-light list-disc p-6 '>
            <li>You can hire any service provider by checking there profile and previous work</li>
            <li>All Service Providers are verified and Registered</li>
            <li>You just have to select service provider, then they will call you directly</li>
        </ul>
            
        <div className='flex items-center flex-wrap gap-5'>
            {
                users?.map((user, index) => { return (
                    <div key={index} className="group hover:bg-[#7C00FE] bg-white mt-10  rounded-2xl shadow-lg p-6 w-72 text-center flex flex-col items-center border border-gray-200  text-black hover:scale-105 transition-all hover:shadow-2xl hover:shadow-gray-600">
                        {/* Profile Image */}
                        <img
                            src={user.profileImgUrl}
                            alt={user.name}
                            className="w-24 h-24 rounded-full border-4 border-[#7C00FE] group-hover:border-white shadow-md"
                        />

                        {/* Name + Verified Badge */}
                        <div className="mt-4 flex items-center gap-1">
                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-white">{user.name}</h2>
                            {user.isVerified && <BadgeCheck className="text-[#7C00FE] group-hover:text-white w-5 h-5" />}
                        </div>

                        {/* City */}
                        <p className=" text-lg font-semibold text-gray-800 group-hover:text-white">{user.city}</p>

                        {/* Role */}
                        <p className="text-md font-semibold text-gray-700  group-hover:text-yellow-400 group-hover:text-semibold mt-2">
                            {user.role.toUpperCase()}
                        </p>

                        {/* Work */}
                        <p className="text-sm text-gray-600 mt-1">{user.noOfProjects}+ Projects | {user.yearsoFExperience}+ Years</p>

                        {/* Button */}
                        <button 
                        onClick={() => navigate(`/service-provider-details/${user._id}`) }
                        className=" cursor-pointer mt-4 bg-[#7C00FE] group-hover:bg-white group-hover:text-[#7C00FE] group-hover:font-bold group-hover:border-gray-300 group-hover:shadow-2xl group-hover:border text-white px-4 py-2 rounded-lg transition">
                            View Profile
                        </button>
                        </div>
                )}
                )
            }
        </div>
      </div>
        

    </div>
    </div>
  )
}

export default ServiceProvidersPage

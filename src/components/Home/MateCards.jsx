import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa'
import { getAllServiceProviders } from '../../services/service providers data/serviceProviderService';
import { FaLocationPin, FaLocationPinLock } from 'react-icons/fa6';

const MateCards = () => {
    const [serviceProvider, setServiceProvider] = useState([]);
    let users;
    useEffect(() => {
        async function getData() {
            const matesData = await getAllServiceProviders();
            setServiceProvider(matesData.users);
        }
        getData();
    }, []);

    console.log(serviceProvider)
    return (
        <div className=' mb-5 flex flex-wrap bg-gray-200 rounded-4xl p-6 overflow-x-auto'>
            {
                serviceProvider.map((profile, index) =>

                    <div className="group  w-52 mx-auto  bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-all ease-in duration-200">
                        {/* Profile Image */}
                        <div className="relative w-24  mx-auto mb-4">
                            <img
                                src={profile.img} // Replace with actual image URL
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 shadow"
                            />
                            <div className="absolute bottom-1 right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center">
                                <FaRegCheckCircle />
                            </div>
                        </div>

                        {/* Name */}
                        <h2 className="text-xl font-semibold">{profile.name}</h2>


                        <p className="text-gray-500 text-sm">(150+ Reviews)</p>

                        {/* Role */}
                        <p className="text-[#7C00FE] font-semibold text-lg mt-2">{profile.service}</p>
                        <p className="text-gray-500 text-sm">50+ Projects</p>

                        {/* Location */}
                        <div className="flex items-center justify-center text-gray-600 mt-2">
                            <FaLocationPinLock /> <p className="ml-1">{profile.city}</p>
                        </div>

                        {/* Profile Button */}
                        <button className="mt-4 bg-[#7C00FE] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-purple-400 hover:scale-105">
                            See Profile
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default MateCards

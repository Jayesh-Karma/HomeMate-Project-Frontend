import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa'
import { getAllServiceProviders } from '../../services/service providers data/serviceProviderService';
import { FaLocationPin, FaLocationPinLock } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

    // console.log(serviceProvider)
    return (
        <div className=' mb-5 flex flex-wrap gap-10 bg-gray-200 rounded-4xl p-6 overflow-x-auto'>
             <Swiper
            spaceBetween={10}
            // slidesPerView={1}
            loop={true}
            position="center"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
            768: { // For screens >= 768px
            slidesPerView: 5, 
            slidesPerGroup: 1,
            centeredSlides: false, 
            }
        }}
          >
            {serviceProvider?.map((service, idx) => (
              <SwiperSlide key={idx}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}

const ServiceCard = ({ service }) => {
    console.log(service)
    return (
        <div className="group  w-60 mx-auto  bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-all ease-in duration-200 overflow-hidden my-8">
        {/* Profile Image */}
        <div className="relative w-24  mx-auto mb-4">
            <img
                src={service?.img} // Replace with actual image URL
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-300 shadow"
            />
            <div className="absolute bottom-1 right-1 bg-white text-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                <FaRegCheckCircle />
            </div>
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold">{service?.name}</h2>


        <p className="text-gray-500 text-sm">(150+ Reviews)</p>

        {/* Role */}
        <p className="text-[#7C00FE] font-semibold text-lg mt-2">{service?.role.toUpperCase()}</p>
        <p className="text-gray-500 text-sm">50+ Projects</p>

        {/* Location */}
        <div className="flex items-center justify-center text-gray-600 mt-2">
            <FaLocationPinLock /> <p className="ml-1">{service?.city}</p>
        </div>

        {/* Profile Button */}
        <button 
        onClick={() => {window.location.href = `/service-provider-details/${service?._id}`}}
        className="mt-4 bg-[#7C00FE] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-purple-400 hover:scale-105">
            See Profile
        </button>
    </div>
    );
}

export default MateCards

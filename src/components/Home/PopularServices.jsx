import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PopularServices = () => {
  const services = [
    {
      id: 1,
      name: "Furniture Assembly",
      description: "Our experts can help you assemble any kind of furniture, from beds to tables, making your life easier and your home more organized.",
      img:"./cardImages/Furniture Assembly.jpg"
    },
      {
        id: 2,
        name: "Interior Designing",
        description: "Transform your home with our professional interior design services, offering personalized solutions to match your style and needs.",
        img:"./cardImages/Interior Design.jpg"
      },
      {
        id: 3,
        name: "Home Renovation",
        description: "Whether it's a kitchen remodel or a complete home renovation, we provide high-quality craftsmanship to give your home a fresh new look.",
        img:"./cardImages/Renovation.jpg"
      },
      {
        id: 4,
        name: "Carpentry",
        description: "From custom furniture to home repairs, our skilled carpenters provide precise woodwork for all your home improvement needs.",
        img:"./cardImages/Carpentry.jpg"
      },
      {
        id: 5,
        name: "Construction",
        description: "We handle all types of construction projects, from residential buildings to commercial spaces, ensuring quality and timely completion.",
        img:"./cardImages/Construction.jpg"
      },
      {
        id: 6,
        name: "Electrical Services",
        description: "Our certified electricians offer reliable electrical installations, repairs, and maintenance for your home or business.",
        img:"./cardImages/Electricity.jpg"
      },
      {
        id: 7,
        name: "Plumbing Services",
        description: "From leaky faucets to full-scale plumbing installations, our experts provide comprehensive plumbing services to ensure your home runs smoothly.",
        img:"./cardImages/Plumbing.jpg"
      },
      {
        id: 8,
        name: "Painting Services",
        description: "Transform your space with our professional painting services, offering high-quality work that lasts and brings color to your home.",
        img:"./cardImages/Painting.jpg"
      }
    ];
  return (
    <div className="w-[90%] max-w-screen-xl mx-auto">
      {/* Heading Section */}
      <div className="border flex gap-4 items-center border-gray-500 p-2 px-4 rounded-2xl font-bold text-lg sm:text-xl">
        <div className="bg-[#7C00FE] text-lg sm:text-xl inline text-[#7C00FE] rounded-2xl">--</div>
        <p>Popular Services</p>
      </div>

      {/* ✅ Responsive Grid / Carousel */}
      <div className="mt-10">
        {/* 🟢 Show Carousel on Small Screens */}
        <div className="block sm:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.2} // Adjusts width
            loop={true}
            position="center"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🟢 Show Grid on Larger Screens */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* 🟣 Optimized Service Card Component */
const ServiceCard = ({ service }) => {
  return (
    <div className="group flex flex-col gap-4 items-center border border-gray-300 p-4 rounded-3xl bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-100 mb-8">
      {/* Image Section */}
      <div className="flex rounded-3xl justify-center items-center w-full h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover rounded-3xl transition-all duration-100 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Service Name */}
      <div className="text-lg sm:text-xl font-semibold text-gray-800 text-center">{service.name}</div>

      {/* Service Description */}
      <div className="text-sm text-center text-gray-500">{service.description}</div>
    </div>
  );
};


export default PopularServices

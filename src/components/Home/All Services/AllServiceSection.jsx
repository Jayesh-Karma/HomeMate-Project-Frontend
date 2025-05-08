import React from "react";
import { IoIosTimer } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AllServiceSection = () => {
  const services = [
    { id: 4, title: "Builder", image: "/images/icons/Builder.png", code: "#FFBC99" },
    { id: 3, title: "Carpenter", image: "/images/icons/Carpenter.png", code: "#B1E5FC" },
    { id: 1, title: "Plumber", image: "/images/icons/plumber.png", code: "#CABDFF" },
    { id: 2, title: "Electrician", image: "/images/icons/eleectrician.png", code: "#B5EBCD" },
    { id: 5, title: "Painter", image: "/images/icons/painter.png", code: "#FC8EAC" },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-12">
      {/* Heading Section */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-6 w-1 bg-[#7C00FE] rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Our Services</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/service-providers-by-service/${service.title.toLowerCase()}`)}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer"
          >
            {/* Service Image */}
            <div
              className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full shadow-md"
              style={{ backgroundColor: service.code }}
            >
              <img src={service.image} alt={service.title} className="w-16 sm:w-20 md:w-24" />
            </div>

            {/* Service Title */}
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-700">{service.title}</h3>
          </div>
        ))}

        {/* "Coming Soon" Placeholder
        <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 text-5xl sm:text-6xl lg:text-7xl">
            <IoIosTimer />
          </div>
          <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-500">Coming Soon</h3>
        </div> */}
      </div>
    </div>
  );
};

export default AllServiceSection;

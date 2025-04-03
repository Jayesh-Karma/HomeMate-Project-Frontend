import React, { useEffect, useState } from "react";
import Navbar from "../Extras/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceProvidersByService } from "../../services/service providers data/serviceProviderService";
import { Loader } from "lucide-react";
import ServiceProviderCards from "./ServiceProviderCards";


const ServiceProvidersPage = () => {
  const [users, setUsers] = useState([]); // Ensuring users is always an array
  const [loader, setLoader] = useState(false);

  const { service } = useParams();
  const currentService = service;

  useEffect(() => {
    const fetchServiceProviders = async () => {
      setLoader(true);
      try {
        const response = await getServiceProvidersByService(service);
        setUsers(response.users || []); // Handling undefined or empty responses
      } catch (error) {
        console.error("Error fetching providers:", error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchServiceProviders();
  }, [service]); // Adding service as a dependency

  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center px-4 bg-gray-200 sm:px-6 lg:px-8">
      <Navbar />
      {loader ? (
        <div className="flex justify-center items-center min-h-screen">
          <Loader className="animate-spin text-gray-500" size={40} />
        </div>
      ) : (
        <div className="w-full min-h-screen bg-gray-200">
          <HeroSection title="Our Service Providers" />
          <div className="containermx-auto p-6 flex flex-col md:flex-row gap-6">
            <FilterSection />
            <ProviderList users={users} />
          </div>
        </div>
      )}
    </div>
  );
};

const HeroSection = ({ title }) => (
  <div className="relative w-full h-64 bg-[url('/cardImages/Carpentry.jpg')] bg-cover bg-top flex items-end p-10 rounded-b-4xl justify-center text-white text-4xl font-bold">
    <h1>{title}</h1>
  </div>
);

import Select from "react-select";

const services = [
  { value: "builder", label: "Builder" },
  { value: "carpenter", label: "Carpenter" },
  { value: "electrician", label: "Electrician" },
  { value: "painter", label: "Paint" },
  { value: "plumber", label: "Plumber" },
];

const FilterSection = () => {
  const {service} = useParams();
  const navigate = useNavigate();
  console.log(service);
  const [selectedService, setSelectedService] = useState(service);

  const handleChange = (selectedOption) => {
    setSelectedService(selectedOption);
    navigate(`/service-providers-by-service/${selectedOption.value}`);
  };

  return (
    <div className="w-full md:w-1/4 bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Filter by Service</h2>
      <Select
        options={services}
        value={selectedService}
        onChange={handleChange}
        placeholder="Select a service..."
        isSearchable
      />
    </div>
  );
};


// ✅ Provider List (Handles Empty State)
const ProviderList = ({ users }) => (
  <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {users.length > 0 ? (
      users.map((provider, idx) => <ServiceProviderCards key={idx} service={provider} />)
    ) : (
      <p className="col-span-full text-center text-gray-500">No providers available</p>
    )}
  </div>
);

export default ServiceProvidersPage;

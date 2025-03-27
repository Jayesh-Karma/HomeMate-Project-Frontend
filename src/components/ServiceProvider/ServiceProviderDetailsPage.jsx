import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getServiceProviderAccountDetails, getServiceProviderById } from '../../services/service providers data/serviceProviderService';
import Navbar from '../Extras/Navbar';
import Loader from '../Extras/Loader';
import PostGrid from '../PostComponent/PostGrid';
import Footer from '../Home/Footer';
// import { getServiceProviderDetails } from '../../services/serviceProviderService';

const ServiceProviderDetailsPage = () => {
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const id = params.serviceProviderId;

  useEffect(() => {
    const data = async() =>{
      const response = await getServiceProviderById(id);
      console.log(response);
      if(response.success){
        setProvider(response.userDetails);
        setLoading(false);
      }
      else{
        setError(response.message);
        toast.error("Error in getting data");
        setLoading(false);
      }
    }
    data();
  }, []);

  if (loading) return ( <Loader /> );
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className='w-full'>

    <div className="w-full  overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 box-border">
    
    <div className='w-full'>
    <Navbar />
    </div>

    <div className="container mx-auto p-6 md:p-12">
    
      <div className="bg-white shadow-lg shadow-[#7C00FE] rounded-lg p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={provider?.profileImgUrl}
            alt={provider?.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-200"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold font-[poppins]">{provider?.name}</h1>
            <p className=" text-lg text-green-500">{provider?.role?.toUpperCase()}</p>
            <p className="text-gray-500">📍 {provider?.city}</p>
            <p className="text-gray-500">📞 {provider?.phone}</p>
            <p className="text-gray-500">✉️ {provider?.email}</p>
            <p className="text-gray-700 mt-3 font-medium">
              Experience: {provider?.yearsoFExperience} years
            </p>
            <p className="text-gray-700">Completed Projects: {provider?.noOfProjects}</p>
            <button
            className='mt-3 bg-[#7C00FE] text-white px-4 py-2 rounded-md hover:bg-[#7C00FE]/80 hover:scale-105 cursor-pointer'
            >
              Hire Now
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8">Work Showcase</h2>
       {
       provider?.workProof.length === 0? (
        <p className="text-center text-gray-500 m-5 border border-gray-400 rounded-xl p-5">No work proofs available 🥲</p>
       ):
        <PostGrid posts={provider?.workProof} />
       
       }
    </div>


    </div>
    <div className="w-full flex items-center justify-center mt-10 bg-[#7C00FE] py-5">
    <Footer />
  </div>

  {/* Copyright Section */}
  <div className="w-full flex items-center justify-center bg-[#FFE700] py-5">
    <div className="w-[90%] max-w-screen-xl text-center p-5 flex flex-col items-center justify-center">
      <p className="text-black font-semibold">All Rights Reserved HomeMate@2025</p>
      <p className="text-gray-800 text-xs">Made with Love By Jayesh & Roshan ❤️</p>
    </div>
  </div>
    </div>
  );
};


export default ServiceProviderDetailsPage;
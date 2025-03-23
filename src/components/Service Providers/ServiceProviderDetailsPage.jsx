import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getServiceProviderDetails } from '../../services/service providers data/serviceProviderService';
import { toast } from 'react-toastify';
import { CheckCircle, XCircle } from 'lucide-react';

const ServiceProviderDetailsPage = () => {
    const {serviceProviderId} = useParams();
    const [ user, setUser ] = useState({});  
    // console.log(serviceProviderId);
    
    async function getServiceProvider(serviceProviderId) {
        const respose = await getServiceProviderDetails(serviceProviderId);
        if(respose != null){
            setUser(respose.posts);
            toast.success('Service Provider Details fetched successfully');
        }
        else{
            toast.error('Failed to fetch Service Provider Details');
        }
    }
    
    useEffect(()=>{
        getServiceProvider(serviceProviderId);
    },[])

    console.log(user);
    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
        <div className="bg-white shadow-xl rounded-lg w-[90%] md:w-[50%] p-6 border-2 border-purple-700">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <img
              src={user.profileImgUrl}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 shadow-lg"
            />
            <h2 className="mt-4 text-2xl font-bold text-purple-700">{user.name}</h2>
            <p className="text-gray-600">{user.city}</p>
          </div>
  
          {/* Role & Experience */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Role: <span className="text-purple-700">{user.role}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Service: <span className="text-purple-700">{user.serviceDetails}</span>
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Experience:{" "}
              <span className="text-yellow-500">{user.yearsoFExperience} years</span>
            </p>
          </div>
  
          {/* Verified Status */}
          <div className="mt-4 flex justify-center items-center gap-2">
            {user.isVerified ? (
              <span className="flex items-center text-green-500 font-semibold">
                <CheckCircle className="w-5 h-5 mr-1" />
                Verified
              </span>
            ) : (
              <span className="flex items-center text-red-500 font-semibold">
                <XCircle className="w-5 h-5 mr-1" />
                Not Verified
              </span>
            )}
          </div>
  
          {/* Contact Info */}
          <div className="mt-6 bg-purple-700 text-white rounded-lg p-4 text-center">
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Projects Completed: {user.noOfProjects}</p>
          </div>
        </div>
      </div>
  )
}

export default ServiceProviderDetailsPage

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getServiceProviderById } from '../../services/service providers data/serviceProviderService';
import Navbar from '../Extras/Navbar';
import Loader from '../Extras/Loader';
import PostGrid from '../PostComponent/PostGrid';
import Footer from '../Home/Footer';
import HireModal from './HireModal';

const ServiceProviderDetailsPage = () => {
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [serviceProvider, setServiceProvider] = useState(false);
  const navigate = useNavigate()
  const [hiringModal, setHiringModal] = useState(false);
  const { serviceProviderId: id } = useParams();

  useEffect(() => {
    // Check if serviceProvider exists in localStorage
    const isServiceProvider = localStorage.getItem('serviceProvider') !== null;
    setServiceProvider(isServiceProvider);

    const fetchServiceProviderDetails = async () => {
      try {
        const response = await getServiceProviderById(id);
        console.log(response);
        if (response.success) {
          setProvider(response.userDetails);
        } else {
          throw new Error(response.message || 'Failed to fetch provider details');
        }
      } catch (err) {
        console.error(err.message);
        setError(err.message);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceProviderDetails();
  }, [id]);


  const handleHiring = (e) =>{
    e.preventDefault();
    setHiringModal(true);
  }

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="w-full">
    {
      hiringModal && <HireModal  setHireModal={setHiringModal} provider={provider}/>
    }

    <div className=''>
      <span className='cursor-pointer' onClick={()=> navigate("/") }>Home </span> / <span className='cursor-pointer' onClick={()=> navigate("/#service")}>Service Providers</span>
    
    </div>
      
      <div className="w-full overflow-x-hidden flex flex-col items-center justify-center box-border">
        <div className="container w-full mx-auto p-6 md:p-12">
          <div className="bg-white shadow-lg shadow-[#7C00FE] rounded-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <img
                src={provider?.profileImgUrl}
                alt={provider?.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-200"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold font-[poppins]">{provider?.name}</h1>
                <p className="text-lg text-green-500">{provider?.role?.toUpperCase()}</p>
                <p className="text-gray-500">📍 {provider?.city}</p>
                <p className="text-gray-500">📞 {provider?.phone}</p>
                <p className="text-gray-500">✉️ {provider?.email}</p>
                <p className="text-gray-700 mt-3 font-medium">
                  Experience: {provider?.yearsoFExperience} years
                </p>
                <p className="text-gray-700">Completed Projects: {provider?.noOfProjects}</p>

                {!serviceProvider && (
                  <button
                    onClick={handleHiring}
                    className="mt-3 w-full bg-[#7C00FE] text-white px-4 py-2 rounded-md hover:bg-[#7C00FE]/80 hover:scale-105 cursor-pointer"
                  >
                    Hire Now
                  </button>
                )}
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">Work Showcase</h2>

          {provider?.workProof.length === 0 ? (
            <p className="text-center text-gray-500 m-5 border border-gray-400 rounded-xl p-5">
              No work proofs available 🥲
            </p>
          ) : (
            <PostGrid posts={provider?.workProof} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDetailsPage;

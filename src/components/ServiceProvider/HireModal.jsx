import { Cross, LoaderPinwheel, X } from 'lucide-react'
import React, { useState } from 'react'
import { hireServiceProvider } from '../../services/userService'
import { toast } from 'react-toastify'

const HireModal = ({
    setHireModal,
    provider,
}) => {
    const [loading, setLoading] = useState(false);
    const [serviceData, setServiceData] = useState({
        service:"",
        location:"",
        description:""
    })

    const handleChanges = (e) =>{
        setServiceData({
            ...serviceData,
            [e.target.name]: e.target.value
        })
    }

    const onHire = async(e) =>{
        e.preventDefault();
        
        const isAuthenticated = !!localStorage.getItem('token'); // adjust for your setup
        if (!isAuthenticated) {
          navigate('/login-user', { state: { from: location } });
          return;
        }

        setLoading(true);
        const hiringData = {
            serviceProviderId: provider._id,
            typeOfService: serviceData.service,
            location: serviceData.location,
            date: new Date().toDateString(),
            time: new Date().toTimeString(),
            workDescription: serviceData.description,
        }

        console.log("hiringData",hiringData);

        try {
            const response = await hireServiceProvider(hiringData);
            console.log(response);
            toast.success(response.message);
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
            setHireModal(false);
        }
    };


  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm">
  <div className="bg-white w-full max-w-3xl mx-4 md:mx-auto p-6 rounded-xl shadow-2xl animate-fadeIn space-y-6">
    {/* Header */}
    <div className="flex justify-between items-start border-b pb-4">
      <div>
        <h1 className="text-2xl font-bold font-[Poppins] text-gray-800">Hiring Service Provider</h1>
        <p className="text-sm text-gray-600 mt-1">
          Fill the small details <span className="text-gray-500">(Make sure your contact information is correct)</span>
        </p>
      </div>
      <button
        onClick={() => setHireModal(false)}
        className="text-gray-500 hover:text-red-500 transition"
      >
        <X className="w-6 h-6" />
      </button>
    </div>

    {/* Form */}
    <form className="space-y-5">
      <div className="flex flex-col">
        <label htmlFor="service" className="mb-1 font-medium text-gray-700">
          Type of Service <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          id="service"
          value={serviceData.service}
          onChange={handleChanges}
          className="border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="" disabled>Select Type of Service</option>
          <option value="builder">Builder</option>
          <option value="carpenter">Carpenter</option>
          <option value="electrician">Electrician</option>
          <option value="painter">Painter</option>
          <option value="plumber">Plumber</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="location" className="mb-1 font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Enter your address or city"
          value={serviceData.location}
          onChange={handleChanges}
          className="border border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="mb-1 font-medium text-gray-700">
          Work Overview
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter your work overview"
          value={serviceData.description}
          onChange={handleChanges}
          rows={4}
          className="border border-gray-300 p-3 rounded-lg text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        onClick={onHire}
        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 
        <span className='flex justify-center'>
          <LoaderPinwheel className="w-6 h-6 animate-spin" />
          <span className="sr-only">Hiring...</span>
        </span> : "Hire"}
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default HireModal

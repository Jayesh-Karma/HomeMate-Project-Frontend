import React, { useEffect, useState } from 'react'
import { getUserDetails } from '../../services/userService';
import toast from 'react-hot-toast';
import { Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerProfile = () => {
    const [loading, setLoading] = useState(true);
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchCustomer= async() =>{
            try {
                setLoading(true);
                const response = await getUserDetails();
                console.log(response);
                setUserDetails(response.userData);
            } catch (error) {  
                console.error(error.message);
                toast.error(error.message);
                
            }
            finally{
                setLoading(false);
            }
        }
        fetchCustomer();
    },[])

    const logoutHandler = () => {
        localStorage.removeItem('token');
        if(localStorage.getItem('user')){localStorage.removeItem('user');}
        else if(localStorage.getItem('serviceProvider')){localStorage.removeItem('serviceProvider');}
        toast.success('Logged Out Successfully');
        navigate('/login');
      };
      
      
      if (loading) {
        return <Loader />;
      }
    

  return (
    <div className="min-h-screen  bg-gray-300 px-4 md:px-10 lg:px-20 py-10">

    <div className=' flex justify-between items-center p-2'>
        <p><span className='cursor-pointer' onClick={()=> navigate("/")}>Home </span>/<span>Profile</span></p>
        <span className='cursor-pointer hover:text-red-500' onClick={logoutHandler}>Logout</span>
    </div>
    {/* Profile Section */}
    <div className=" max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
   
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-900">{userDetails?.name}</h2>
          <p className="text-gray-500 "> {userDetails?.location}</p>
          <p className="text-gray-500 "> {userDetails?.email}</p>
          <p className="text-gray-500 "> {userDetails?.phone}</p>
        </div>
      </div>
    </div>
     

    

    </div>
  )
}

export default CustomerProfile

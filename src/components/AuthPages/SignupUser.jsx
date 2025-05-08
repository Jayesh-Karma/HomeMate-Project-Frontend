import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../services/userService';
import { Loader } from 'lucide-react';


const cities = [
    "Mumbai", "Delhi", "Bangalore", "Indore", "Jaipur", "Hyderabad", "Chennai"
  ];

const SignupUser = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const  [passwordVisible, setPasswordVisible] = useState(false);
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) =>{
        setSignupData({...signupData, [e.target.name]: e.target.value });
    }

    const handlePasswordVisibility = () =>{
        setPasswordVisible(!passwordVisible);
    }

    const handleSubmit = async(e) =>{
        setLoading(true);
        e.preventDefault();
        try {
            if(signupData.password != signupData.confirmPassword){
                toast.error("Password and confirm password does not match");
                return;
            }
            
            const response = await signupUser(signupData);
            console.log(response);
            
            toast.success(response.message);
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("token", response.token);
            navigate("/");    
            window.location.reload();
            
            } catch (error) {
                toast.error(error.message);
                
            }
            finally{
                setLoading(false);
            }
    }
    return (

    <div className='w-full flex justify-center items-center'>
        
    <img 
    className='absolute top-0 -z-50 opacity-70 w-full min-h-screen bg-cover bg-center bg-no-repeat '
    src="/images/auth/LoginBackground.png" alt="Background" />


    <div className='w-[50%] bg-white p-5 rounded-2xl gap-4 my-10'>

    <div className='w-full flex justify-center items-center '>
   

    <div className='w-[90%] bg-white p-5 rounded-2xl'>

        <div className='mb-5'>
            <h1 className=' font-[poppins] text-2xl'>Create an account as User</h1>
            <p className=' text-gray-400'>Already have an account? <span className='text-[#7C00FE] underline' onClick={() => navigate("/login-user")}>Login</span></p>
        </div>
        <form >
            {/* Form Input */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" onChange={handleChange} value={signupData.name} id="name" name="name" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>

            {/* email */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" onChange={handleChange} value={signupData.email} name="email" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>

            {/* phone */}

            <div className="mb-4"> 
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" onChange={handleChange} value={signupData.phone} name="phone" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>

               {/* City */}
                  {/* City Dropdown */}
        <div className='mb-4'>
        <label className="block text-sm font-medium text-gray-700"
          >City</label>
          <select name="location" 
            className="w-full border-gray-300 border-2 p-2 rounded-md" onChange={handleChange} value={signupData.location}>
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

     
        <div className='grid grid-cols-2 gap-4'>

            {/* password */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input onChange={handleChange} value={signupData.password} type={passwordVisible ? "text" : "password"} id="password" name="password" 
                className={`border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500 `} />
            </div>

            {/* confirm password */}
            <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input type={passwordVisible ? "text" : "password"} id="confirmPassword" 
                value={signupData.confirmPassword} onChange={handleChange}
                name="confirmPassword" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>
        </div>

        {/* show password button */}
        <p>Use 8 or more character with a mix of letters, number & symbols</p>
        <div className="mb-4 flex items-center gap-1 text-gray-500 text-sm">
            <label htmlFor="showPass">Show Passoword</label>
            <input type="checkbox" value={passwordVisible} onChange={handlePasswordVisibility} id='showPass' />       
        </div>


        <div>
            <button 
            className='p-3 w-full transition-all duration-100 rounded-2xl bg-[#7C00FE] text-white hover:font-semibold hover:scale-105'
            onClick={handleSubmit}
            >
                {loading ? <Loader className='animate-spin' /> : "Sign Up"}
            </button>
        </div>
        </form>


    </div>
    </div>
    </div>
  
</div>
    )
}

export default SignupUser

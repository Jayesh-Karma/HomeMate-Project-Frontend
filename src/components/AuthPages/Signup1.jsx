import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup1 = ({nextStep,handleChange, signupData, setCPassword, cPassword }) => {
const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
   

        <div className='w-[90%] bg-white p-5 rounded-2xl'>

            <div className='mb-5'>
                <h1 className=' font-[poppins] text-2xl'>Create an account as Service Provider </h1>
                <p className=' text-gray-400'>Already have an account? <span className='text-[#7C00FE] underline' onClick={()=> navigate("/login")}>Login</span></p>
            </div>
            <div  className=''>
                {/* Form Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" value={signupData.name} onChange={handleChange} id="name" name="name" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>

                {/* email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" value={signupData.email} onChange={handleChange} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>

                {/* phone */}

                <div className="mb-4"> 
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" id="phone" name="phone" value={signupData.phone} onChange={handleChange} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>


                {/*  city */}
                <div className='grid grid-cols-2'>


                <div className="mb-4">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                    <input type="text" id="city" name="city" value={signupData.city} onChange={handleChange} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                    <input type="text" id="state" name="state" value={signupData.state} onChange={handleChange} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>

                </div>
          

            <div>

                {/* password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" value={signupData.password} onChange={handleChange} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>

                {/* confirm password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={cPassword} onChange={(e)=> setCPassword(e.target.value)} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
                </div>
            </div>

            {/* show password button */}
            <p>Use 8 or more character with a mix of letters, number & symbols</p>
            <div className="mb-4 flex items-center gap-1 text-gray-500 text-sm">
                <label htmlFor="showPass">Show Passoword</label>
                <input type="checkbox" id='showPass' />       
            </div>


            <div>
                <button 
                className='p-3 rounded-2xl bg-[#7C00FE] text-white hover:font-semibold hover:scale-105'
                onClick={nextStep}
                >
                    Next Page
                </button>
            </div>
            </div>


        </div>
      
    </div>
  )
}

export default Signup1;

import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='w-full flex justify-center items-center'>
              
              <img 
                  className='absolute -z-50 opacity-70 bg-cover bg-center bg-no-repeat h-[100vh] w-full '
                  src="/images/auth/LoginBackground.png" alt="Background" />
          
          <div className='w-[90%] min-h-screen'>
      
              <div className='w-full lg:w-[30vw] min-h-[400px] flex justify-center items-center'>
                  <div className="w-full sm:w-[90%] md:w-[50%] lg:w-[30vw] bg-white p-6 md:p-10 shadow-2xl rounded-2xl flex flex-col gap-10">

                      <h1 className="text-2xl md:text-3xl text-black font-medium font-[Poppins]">
                          Choose Your Login Type
                      </h1>
                     <div className='flex justify-between items-center gap-3 flex-col'>
                        <button
                        className='border border-gray-400 w-full rounded-2xl p-2  bg-yellow-300  hover:border-yellow-300  hover:scale-103 transition-all duration-150 hover:shadow-2xl '
                        onClick={() => navigate("/login-user")}
                        >As a User</button>
                        
                        <button
                            className='border border-gray-400 w-full rounded-2xl p-2  bg-[#7C00FE] text-white hover:border-[#7C00FE]  hover:scale-103 transition-all duration-150 hover:shadow-2xl '
                           onClick={() => navigate("/login-service")}
                        >As a Service Provider</button>
                     </div>
                  </div>
              </div>
      
         
          </div>
          </div>
        
    </div>
  )
}

export default AuthPage

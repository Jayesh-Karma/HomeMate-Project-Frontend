import React, { useState } from 'react'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/userService';
import toast from 'react-hot-toast';
import { ArrowLeftSquare, Loader } from 'lucide-react';

const LoginUser = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const from = location.state?.from?.pathname || '/';
    
    const [ loginData, setLoginData ] = useState({
        email: '',
        password: ''
    });

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    const handleLoginData = (event) => {
        setLoginData({...loginData, [event.target.name]: event.target.value });
    }

    const loginHandler = async(event) => {
        setLoading(true);
        event.preventDefault();
        try {
            const login = await loginUser(loginData);
            console.log(login);
                localStorage.setItem("user", JSON.stringify(login.userData));
                localStorage.setItem("token", login.token);
                toast.success("Login Successful");
                navigate(from, { replace: true });
                window.location.reload();
            
        } catch (error) {
            console.log(error);
            toast.error("Error in login try again later");
            navigate("/login-user");
        }
        finally{
            setLoading(false);
        }

    }
    
  return (
    <div>
          <div className='w-full flex justify-center items-center'>
                
                <img 
                    className='absolute -z-50 opacity-70 bg-cover bg-center bg-no-repeat h-[100vh] w-full '
                    src="/images/auth/LoginBackground.png" alt="Background" />
            
            <div className='w-[90%] min-h-screen'>
        
                <div className='w-full lg:w-[30vw] min-h-[550px] flex justify-center items-center'>
                    <div className="w-full sm:w-[90%] md:w-[50%] lg:w-[30vw] bg-white p-6 md:p-10 shadow-2xl rounded-2xl">
                        <div>
                        <div className="text-2xl md:text-3xl text-black font-medium font-[Poppins] flex items-center gap-3">
                            <span className=" text-xs text-gray-500 cursor-pointer hover:text-[#7C00FE]" onClick={() => navigate(-1)}><ArrowLeftSquare /> </span>
                            Login as a User
                        </div>
                        
                        </div>
                        <form className='mt-8 flex flex-col gap-5'>
                            <div>
                                <label className='block text-sm text-[#7C00FE]'>Email</label>
                                <input 
                                    type='email' 
                                    name='email'
                                    onChange={handleLoginData}
                                    className='mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-purple-600' 
                                    placeholder='Enter your email' />
                            </div>
        
                            <div>
                                <div className='flex items-center justify-between'>
                                <label htmlFor="" className=' text-[#7C00FE]'>Password</label>
                                <p className=' text-[#7C00FE] cursor-pointer'>{ passwordVisible ? <RxEyeOpen onClick={handlePasswordVisibility}/> : <RxEyeClosed onClick={handlePasswordVisibility}/>}</p>
                                </div>
                                <input type={passwordVisible ?   'text':'password'}
                                name='password'
                                onChange={handleLoginData}
                                className='mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-purple-600'
                                placeholder='Enter your password'
                                />
                            </div>
        
                            <div className=' flex flex-col gap-2'>
                                <button
                                className='text-white cursor-pointer  bg-[#7C00FE] rounded-4xl w-full p-3 font-bold '
                                type='submit'
                                onClick={loginHandler}
                                >
                                    {loading ? <Loader className='animate-spin' /> : "Login"}
                                </button>
        
                                <div>
                                    <p className=' text-xs text-gray-500'>Need Help?</p>
                                    <p>Don't have an account? 
                                        <a className=' text-[#7C00FE]' onClick={() => navigate("/signup-user")}>Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        
           
            </div>
            </div>
          
    </div>
  )
}

export default LoginUser

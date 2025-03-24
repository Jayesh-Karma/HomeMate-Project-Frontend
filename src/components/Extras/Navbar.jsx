import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CgProfile } from 'react-icons/cg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Links, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState("");
    const navigate = useNavigate();
  
    const [isLogin, setLogin] = useState(false);
  
    const logoutHandler = () => {
      try {
        const status = localStorage.removeItem("token");
        console.log(status);
        setLogin(false);
        setIsOpen(false);
        toast.success("Logged Out Successfully");
        navigate("/login");
      } catch (error) {
        toast.error("Problem in logout");
        navigate("/");
      }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setLogin(true);
            setToken(token);
        } else {
            setLogin(false);
        }
    }, []);

    return (
      <>
        {/* Navbar for Large Screens */}
        <div className="flex items-center justify-center border border-gray-200 px-4 py-2">
          <div className="flex justify-between items-center w-[90%]">
            {/* Logo */}
            <div className="">
              <img 
                src="/HOME_MATE-removebg-preview.png" 
                alt="Logo" 
                className="w-36 h-10 md:w-52 md:h-15"
              />
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden md:block"> 
              <ul className="flex items-center gap-6 cursor-pointer">
                <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
                  <Link to="/#service">Services</Link>
                </li>
                <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
                  Team
                </li>
                <li>
                    {
                        isLogin ? 
                        <CgProfile className='text-3xl bg-black rounded-full text-yellow-300 hover:bg-white hover:text-[#7C00FE] transition-all duration-150 ease-in-out' /> : 
                        <button 
                        onClick={() => location.href = "/login"}
                        className=' bg-yellow-300  text-black hover:bg-yellow-400 hover:scale-105 duration-100 transition-all ease-in-out p-2 px-4 border border-gray-500 rounded-xl'>
                            Login
                        </button>    
                    }
                </li>
              </ul>
            </div>
  
            {/* Hamburger Menu for Small Screens */}
            <div className="md:hidden ">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu (Opens from Bottom) */}
        <div
          className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transform ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } transition-transform duration-300 ease-in-out p-4 md:hidden border-t-1 border-gray-400 rounded-t-2xl`}
        >
          <ul className="flex flex-col items-center gap-4 cursor-pointer">
            <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
              <Link to="/#service" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
              Team
            </li>
            {
                isLogin ? 
                <>
                <li>View Profile</li> 
                <li>Edit Profile</li> 
                <li>Settings</li> 
                <li onClick={logoutHandler}>Logout</li> 
                </>
                : <li onClick={() => location.href = "/login"}>Login</li>

            }
          </ul>
        </div>
      </>
    )
}

export default Navbar

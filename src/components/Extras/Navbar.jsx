import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();

  // Handle Logout
  const logoutHandler = () => {
    try {
      localStorage.removeItem("token");
      setLogin(false);
      setIsOpen(false);
      toast.success("Logged Out Successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Problem in logout");
      navigate("/");
    }
  };

  // Check Login Status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(!!token);
  }, []);

  return (
    <>
      {/* Navbar for Large Screens */}
      <nav className="absolute top-0 z-50 w-[90%] border-b flex items-center bg-white mt-5 justify-center border border-gray-200 px-4 py-2 rounded-4xl shadow-sm">
        <div className="flex justify-between items-center w-[90%]">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img
              src="/HOME_MATE-removebg-preview.png"
              alt="Logo"
              className="w-36 h-10 md:w-52 md:h-15"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 cursor-pointer">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/#service">Services</NavItem>
            <NavItem to="/about">About</NavItem>
            {isLogin ? (
              <CgProfile
                onClick={() => navigate("/user-profile")}
                className="text-3xl bg-black rounded-full text-yellow-300 hover:bg-white hover:text-[#7C00FE] transition-all duration-150 ease-in-out cursor-pointer"
              />
            ) : (
              <AuthButton />
            )}
          </ul>

          {/* Hamburger Menu for Small Screens */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} isLogin={isLogin} logoutHandler={logoutHandler} />
    </>
  );
};

// Reusable Navigation Item Component
const NavItem = ({ to, children }) => (
  <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">
    <Link to={to}>{children}</Link>
  </li>
);

// Authentication Button
const AuthButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="bg-yellow-300 text-black hover:bg-yellow-400 hover:scale-105 duration-100 transition-all ease-in-out p-2 px-4 border border-gray-500 rounded-xl"
    >
      Login
    </button>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, setIsOpen, isLogin, logoutHandler }) => (
  <div
    className={`fixed bottom-0 left-0 w-full bg-white shadow-lg transform ${
      isOpen ? "translate-y-0" : "translate-y-full"
    } transition-transform duration-300 ease-in-out p-4 md:hidden border-t border-gray-400 rounded-t-2xl`}
  >
    <ul className="flex flex-col items-center gap-4 cursor-pointer">
      <NavItem to="/" onClick={() => setIsOpen(false)}>Home</NavItem>
      <NavItem to="/#service" onClick={() => setIsOpen(false)}>Services</NavItem>
      <NavItem to="/about" onClick={() => setIsOpen(false)}>About</NavItem>
      <li className="hover:font-semibold hover:text-[#7C00FE] transition-all ease-in-out duration-100">Team</li>

      {isLogin ? (
        <>
          <li>View Profile</li>
          <li>Edit Profile</li>
          <li>Settings</li>
          <li onClick={logoutHandler} className="cursor-pointer">Logout</li>
        </>
      ) : (
        <li onClick={() => navigate("/login")} className="cursor-pointer">Login</li>
      )}
    </ul>
  </div>
);

export default Navbar;

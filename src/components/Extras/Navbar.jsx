import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLogin(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // You can adjust this value
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoutHandler = () => {
    try {
      localStorage.removeItem("token");
      setLogin(false);
      setIsOpen(false);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Problem during logout");
      navigate("/");
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm py-2" : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/HOME_MATE-removebg-preview.png"
              alt="Logo"
              className={`transition-all duration-300 ${
                isScrolled ? "w-28 md:w-40" : "w-36 md:w-48"
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/#service">Services</NavItem>
            <NavItem to="/about">About</NavItem>

            {isLogin ? (
              <li
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              >
                <CgProfile className="text-3xl text-yellow-400 hover:text-purple-600 transition" />
              </li>
            ) : (
              <AuthButton />
            )}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isLogin={isLogin}
          logoutHandler={logoutHandler}
        />
      </nav>
    </>
  );
};

const NavItem = ({ to, children }) => (
  <li className="hover:font-semibold hover:text-purple-600 transition">
    <Link to={to}>{children}</Link>
  </li>
);

const AuthButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="bg-yellow-300 text-black px-4 py-1.5 rounded-md hover:bg-yellow-400 transition"
    >
      Login
    </button>
  );
};

const MobileMenu = ({ isOpen, setIsOpen, isLogin, logoutHandler }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`absolute top-0 left-0 w-full bg-white md:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-13" : "-translate-y-full"
      }`}
    >
     <ul className="flex flex-col items-center gap-4 py-4">
        <li onClick={() => setIsOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="/#service">Services</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link to="/about">About</Link>
        </li>
            <>
              <li onClick={logoutHandler}>Logout</li>
        {isLogin ? (
          <li onClick={() => { setIsOpen(false); navigate("/profile"); }}>
            <CgProfile className="text-3xl text-yellow-400 hover:text-purple-600 transition" />
          </li>
        
        ) : (
          <li onClick={() => { setIsOpen(false); navigate("/login"); }}>Login</li>
        )}
        </>
      </ul>
    </div>
  );
};

export default Navbar;

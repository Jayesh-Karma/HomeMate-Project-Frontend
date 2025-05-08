import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Navbar from './components/Extras/Navbar';
import Home from './components/Home/Home.jsx';
import About from './components/About/About';
import Login from './components/AuthPages/Login';
import Signup from './components/AuthPages/Signup.jsx';
import ServiceProvidersPage from './components/ServiceProvider/ServiceProvidersPage';
import ServiceProviderDetailsPage from './components/ServiceProvider/ServiceProviderDetailsPage';
import UserProfile from './components/ProfileComponent/UserProfile.jsx';
import Error from './components/Extras/Error.jsx';

import './App.css';
import Footer from './components/Home/Footer.jsx';
import AuthPage from './components/AuthPages/AuthPage.jsx';
import LoginUser from './components/AuthPages/LoginUser.jsx';
import SignupUser from './components/AuthPages/SignupUser.jsx';
import CustomerProfile from './components/ProfileComponent/CustomerProfile.jsx';
import Profile from './components/ProfileComponent/Profile.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className=" px-4 md:px-8 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/login-user" element={<LoginUser />} />
          <Route path="/login-service" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-user" element={<SignupUser />} />
          <Route
            path="/service-providers-by-service/:service"
            element={<ServiceProvidersPage />}
          />
          <Route
            path="/service-provider-details/:serviceProviderId"
            element={<ServiceProviderDetailsPage />}
          />
          <Route path="/profile" element={ <Profile />} />

          <Route
            path="/user-profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/customer-profile"
            element={
              <PrivateRoute>
                <CustomerProfile />
              </PrivateRoute>
            }
          />
         
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <footer className="w-full bg-[#7C00FE] py-5">
        <Footer />
      </footer>

      <div className="w-full bg-[#FFE700] py-5 text-center">
        <p className="text-black font-semibold">All Rights Reserved HomeMate@2025</p>
        <p className="text-gray-800 text-xs">Made with Love By Jayesh & Roshan ❤️</p>
      </div>
    </>
  );
}

// Private Route Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

export default App;

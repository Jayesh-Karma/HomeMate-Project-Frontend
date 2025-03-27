import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import "./App.css";
import About from './components/About/About';
import Navbar from './components/Extras/Navbar';
import Login from './components/AuthPages/Login';
import ServiceProvidersPage from './components/ServiceProvider/ServiceProvidersPage';
import ServiceProviderDetailsPage from './components/ServiceProvider/ServiceProviderDetailsPage';
import Signup from './components/AuthPages/Signup.jsx';
import Error from './components/Extras/Error.jsx';
import UserProfile from './components/ProfileComponent/UserProfile.jsx';

function App() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove #
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const [token, setToken ] = useState(localStorage.getItem('token'));

  return (
    <>
    <div>
      {/* <Navbar /> */}
    </div>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
 


        <Route path="/service-providers-by-service/:service" element={<ServiceProvidersPage/>} />
        <Route path="/service-provider-details/:serviceProviderId" element={ <ServiceProviderDetailsPage />} />
      
        <Route path="/user-profile" element={<UserProfile />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App

import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import "./App.css";
import About from './components/About/About';
import Navbar from './components/Extras/Navbar';
import Login from './components/AuthPages/Login';
import ServiceProvidersPage from './components/ServiceProvider/ServiceProvidersPage';
import ServiceProviderDetailsPage from './components/ServiceProvider/ServiceProviderDetailsPage';

function App() {

  return (
    <>
    <div>
      <Navbar />
    </div>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login />} />


        <Route path="/service-providers-by-service/:service" element={<ServiceProvidersPage/>} />
        <Route path="/service-provider-details/:serviceProviderId" element={ <ServiceProviderDetailsPage />} />
      </Routes>
    </>
  )
}

export default App

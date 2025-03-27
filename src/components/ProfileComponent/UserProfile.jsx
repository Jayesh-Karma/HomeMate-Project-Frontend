import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { FaEdit, FaPlusCircle, FaTh } from "react-icons/fa";
import { getServiceProviderAccountDetails } from '../../services/service providers data/serviceProviderService';
import Loader from '../Extras/Loader';
import Navbar from '../Extras/Navbar';
import PostModal from '../PostComponent/PostModal';
import { LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

const UserProfile = () => {
    const { serviceProviderId } = useParams();
    const [serviceProvider, setServiceProvider] = useState(null);
    const [activeTab, setActiveTab] = useState("posts");
    const [selectedPost, setSelectedPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      const fetchServiceProvider = async () => {
        try {
          const response = await getServiceProviderAccountDetails();
          console.log(response);
          setServiceProvider(response.userDetails);
        } catch (error) {
          console.error("Error fetching service provider:", error);
        }
      };
      fetchServiceProvider();
    }, [serviceProviderId]);
  
    if (!serviceProvider) {
      return <Loader />;
    }

    const logoutHandler = () => {
      try {
        const status = localStorage.removeItem("token");
        console.log(status);
    
        toast.success("Logged Out Successfully");
        navigate("/login");
      } catch (error) {
        toast.error("Problem in logout");
        navigate("/");
      }
    }

  
    return (
        <div className="w-full flex justify-center items-center">

        <div className=' w-[90%]'>
        {/* Top Navigation */}
        <div className='w-full'>
            <Navbar />
        </div>
          {/* <h1 className="text-2xl font-bold text-gray-900 mb-5 font-[poppins] mt-3">Service Provider Profile</h1> */}
      <div className="max-w-4xl mx-auto p-5">
        {/* Profile Section */}
        <div className="bg-white shadow-md shadow-[#7C00FE] rounded-lg p-5 flex items-center gap-5">
          <img
            src={serviceProvider?.profileImgUrl}
            alt={serviceProvider?.name}
            className="w-20 h-20 rounded-full border-2"
          />
          <div>
            <h2 className="text-xl font-semibold">{serviceProvider?.name}</h2>
            <p className="text-gray-500">{serviceProvider?.role.toUpperCase()} - {serviceProvider?.city}</p>
            <p className="text-gray-600">{serviceProvider?.serviceDetails}</p>
          </div>
        </div>
  
        {/* Menu Tabs */}
        <div className="flex justify-around mt-5 bg-gray-100 p-3 rounded-lg">
          <button 
            className={`flex items-center gap-2 px-3 py-2 rounded ${activeTab === "edit" ? "bg-blue-500 text-white" : "text-gray-700"}`} 
            onClick={() => setActiveTab("edit")}
          >
            <FaEdit /> Edit Profile
          </button>
          <button 
            className={`flex items-center gap-2 px-3 py-2 rounded ${activeTab === "upload" ? "bg-blue-500 text-white" : "text-gray-700"}`} 
            onClick={() => setActiveTab("upload")}
          >
            <FaPlusCircle /> Upload Post
          </button>
          <button 
            className={`flex items-center gap-2 px-3 py-2 rounded ${activeTab === "posts" ? "bg-blue-500 text-white" : "text-gray-700"}`} 
            onClick={() => setActiveTab("posts")}
          >
            <FaTh /> Posts
          </button>
          <button 
            className={`flex items-center gap-2 px-3 py-2 rounded ${activeTab === "posts" ? "bg-blue-500 text-white" : "text-gray-700"}`} 
            onClick={logoutHandler}
          >
            <LogOut /> Logout
          </button>
        </div>
  
        {/* Dynamic Content */}
        <div className="mt-5">
          {activeTab === "edit" && <EditProfile />}
          {activeTab === "upload" && <UploadPost />}
          {activeTab === "posts" && <PostGrid posts={serviceProvider.workProof} setSelectedPost={setSelectedPost} setIsOpen={setIsOpen} />}
        </div>
  
        {/* Modal for Single Post */}
        <PostModal isOpen={isOpen} setIsOpen={setIsOpen} post={selectedPost} />
        </div>
      </div>
      </div>
    );
}

const EditProfile = () => (
    <div className="p-5 bg-white shadow-md rounded-md">Edit Profile Feature Coming Soon!</div>
  );
  
  // Dummy Upload Post Component
  const UploadPost = () => (
    <div className="p-5 bg-white shadow-md rounded-md">Upload Post Feature Coming Soon!</div>
  );
  
  // Posts Grid Component
  const PostGrid = ({ posts, setSelectedPost, setIsOpen }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded-md overflow-hidden cursor-pointer" onClick={() => { setSelectedPost(post); setIsOpen(true); }}>
          <img src={post.url} alt={post.caption} className="w-full h-40 object-cover" />
          <div className="p-3">
            <h3 className="font-semibold">{post.caption}</h3>
            <p className="text-sm text-gray-500">₹{post.priceFrom} - ₹{post.priceUpto}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
export default UserProfile

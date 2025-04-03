import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEdit, FaPlusCircle, FaTh } from 'react-icons/fa';
import { LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import { getServiceProviderAccountDetails } from '../../services/service providers data/serviceProviderService';
import Loader from '../Extras/Loader';
import Navbar from '../Extras/Navbar';
import PostModal from '../PostComponent/PostModal';

const UserProfile = () => {
  const { serviceProviderId } = useParams();
  const navigate = useNavigate();

  const [serviceProvider, setServiceProvider] = useState(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchServiceProvider = async () => {
      try {
        const response = await getServiceProviderAccountDetails();
        setServiceProvider(response.userDetails);
      } catch (error) {
        console.error('Error fetching service provider:', error);
      }
    };
    fetchServiceProvider();
  }, [serviceProviderId]);

  if (!serviceProvider) {
    return <Loader />;
  }

  const logoutHandler = () => {
    localStorage.removeItem('token');
    toast.success('Logged Out Successfully');
    navigate('/login');
  };

  return (
    <div className=' bg-red-700'>

    <div className="min-h-screen  bg-gray-300 px-4 md:px-10 lg:px-20 py-10">
      {/* Navbar */}
      <Navbar />

      {/* Profile Section */}
      <div className="mt-20 max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={serviceProvider?.profileImgUrl}
            alt={serviceProvider?.name}
            className="w-28 h-28 rounded-full border-4 border-indigo-500 shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900">{serviceProvider?.name}</h2>
            <p className="text-gray-500 font-medium mt-1">{serviceProvider?.role.toUpperCase()} - {serviceProvider?.city}</p>
            <p className="text-gray-700 mt-2">{serviceProvider?.serviceDetails}</p>
          </div>
        </div>
      </div>

      {/* Menu Tabs */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between bg-white shadow-md rounded-lg p-4 mt-5">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            activeTab === 'edit' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('edit')}
        >
          <FaEdit /> Edit Profile
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            activeTab === 'upload' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('upload')}
        >
          <FaPlusCircle /> Upload Post
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            activeTab === 'posts' ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveTab('posts')}
        >
          <FaTh /> Posts
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={logoutHandler}
        >
          <LogOut /> Logout
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="max-w-5xl mx-auto mt-6">
        {activeTab === 'edit' && <EditProfile />}
        {activeTab === 'upload' && <UploadPost />}
        {activeTab === 'posts' && (
          <PostGrid posts={serviceProvider.workProof} setSelectedPost={setSelectedPost} setIsOpen={setIsOpen} />
        )}
      </div>

      {/* Modal for Single Post */}
      <PostModal isOpen={isOpen} setIsOpen={setIsOpen} post={selectedPost} />
    </div>
    </div>
  );
};

// Edit Profile Placeholder
const EditProfile = () => (
  <div className="p-6 bg-white shadow-md rounded-md text-center text-gray-600">Edit Profile Feature Coming Soon!</div>
);

// Upload Post Placeholder
const UploadPost = () => (
  <div className="p-6 bg-white shadow-md rounded-md text-center text-gray-600">Upload Post Feature Coming Soon!</div>
);

// Post Grid with Improved UI
const PostGrid = ({ posts, setSelectedPost, setIsOpen }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {posts.map((post) => (
      <div
        key={post._id}
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        onClick={() => {
          setSelectedPost(post);
          setIsOpen(true);
        }}
      >
        <img src={post.url} alt={post.caption} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-gray-800">{post.caption}</h3>
          <p className="text-sm text-gray-500">₹{post.priceFrom} - ₹{post.priceUpto}</p>
        </div>
      </div>
    ))}
  </div>
);

export default UserProfile;

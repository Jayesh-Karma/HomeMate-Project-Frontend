import React, { useState } from 'react';
import { uploadPost } from '../../services/service providers data/serviceProviderService';
import toast from 'react-hot-toast';

// Top of your component
const cityList = [
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad",
  "Chennai", "Kolkata", "Pune", "Indore", "Jaipur", "Surat",
  "Lucknow", "Nagpur", "Bhopal", "Patna", "Chandigarh"
];

const UploadPost = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadData, setUploadData] = useState({
    post:null,
    serviceType: "",
    caption: "",
    location: "",
    priceFrom: "",
    priceUpto: ""
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };
  
  const handleChanges = (e) =>{
    setUploadData({...uploadData, [e.target.name]: e.target.value});

  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("service_type", uploadData.serviceType);
    formdata.append("caption", uploadData.caption);
    formdata.append("location", uploadData.location);
    formdata.append("priceFrom", uploadData.priceFrom);
    formdata.append("priceUpto", uploadData.priceUpto);
    formdata.append("post", image);

    const postData = formdata;
    try {
      const res = await uploadPost(postData);
      console.log(res);
      toast.success("Post uploaded successfully");

      setUploadData({
        serviceType: "",
        caption: "",
        location: "",
        priceFrom: "",
        priceUpto: ""
      });

      setImage(null);
      setPreview(null);


    } catch (error) {
      console.error(error);
      toast.error("Failed to upload post");
    }
  };

  return (
    <div className="w-full mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Upload a Service Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Image Upload */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full border border-gray-300 p-2 rounded-md"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-40 h-40 object-cover rounded-md"
            />
          )}
        </div>

        {/* Service Type */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Service Type</label>
          <select className="w-full p-2 border border-gray-300 rounded-md" name="serviceType" onChange={handleChanges} value={uploadData.serviceType} required>
            <option value="">Select a service</option>
            <option value="painting">Painting</option>
            <option value="electronics">Electrics</option>
            <option value="builder">Builder</option>
            <option value="carpentery">Carpentery</option>
            <option value="plumbing">Plumbing</option>
          </select>
        </div>

        {/* Caption */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Caption</label>
          <textarea
            rows="3"
            name="caption"
            value={uploadData.caption}
            onChange={handleChanges}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Write something about your service..."
            required
          ></textarea>
        </div>

                {/* Location */}
                {/* Location Dropdown */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Location</label>
          <select
            value={uploadData.location}
            onChange={handleChanges}
            name="location"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select your city</option>
            {cityList.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block font-medium text-gray-700 mb-2">Price From</label>
            <input
              name="priceFrom"
              value={uploadData.priceFrom}
              onChange={handleChanges}
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="₹ Min"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-gray-700 mb-2">Price Upto</label>
            <input
              type="number"
              name="priceUpto"
              value={uploadData.priceUpto}
              onChange={handleChanges}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="₹ Max"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Upload Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPost;

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

// Sample service types and locations – replace with actual data or API fetch
const serviceTypes = ["Plumber", "Painter", "Carpenter", "Electrician", "Builder"];
const locations = ["Indore", "Bhopal", "Mumbai", "Delhi", "Pune"];

const EditPost = ({ postData, onUpdate }) => {
  const [form, setForm] = useState({
    image: null,
    preview: postData?.url || "",
    serviceType: postData?.serviceType || "",
    caption: postData?.caption || "",
    location: postData?.location || "",
    priceFrom: postData?.priceFrom || "",
    priceUpto: postData?.priceUpto || ""
  });

  useEffect(() => {
    // Sync with postData if it changes
    if (postData) {
      setForm({
        image: null,
        preview: postData.url,
        serviceType: postData.serviceType,
        caption: postData.caption,
        location: postData.location,
        priceFrom: postData.priceFrom,
        priceUpto: postData.priceUpto
      });
    }
  }, [postData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: file,
        preview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.caption || !form.serviceType || !form.location || !form.priceFrom || !form.priceUpto) {
      toast.error("Please fill all fields.");
      return;
    }

    const updatedData = new FormData();
    updatedData.append("serviceType", form.serviceType);
    updatedData.append("caption", form.caption);
    updatedData.append("location", form.location);
    updatedData.append("priceFrom", form.priceFrom);
    updatedData.append("priceUpto", form.priceUpto);

    if (form.image) {
      updatedData.append("image", form.image); // Only add image if changed
    }

    onUpdate(updatedData); // Call the API handler passed as prop
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Edit Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Preview & Upload */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {form.preview && (
            <img src={form.preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg shadow" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm"
          />
        </div>

        {/* Service Type */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Service Type</label>
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="">Select service</option>
            {serviceTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Caption */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Caption</label>
          <input
            type="text"
            name="caption"
            value={form.caption}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Location</label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
            required
          >
            <option value="">Select city</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Price From (₹)</label>
            <input
              type="number"
              name="priceFrom"
              value={form.priceFrom}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-1">Price Upto (₹)</label>
            <input
              type="number"
              name="priceUpto"
              value={form.priceUpto}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-md shadow"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;

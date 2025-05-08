import React, { useState } from "react";
import { editProfile } from "../../services/service providers data/serviceProviderService";
import toast from "react-hot-toast";

const roles = [
  "builder",
  "carpenter",
  "painter",
  "electrician",
  "plumber",
  "interior designer",
  "ac mechanic",
  "gardener",
  "tiler",
];

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Indore", "Jaipur", "Hyderabad", "Chennai"
];

const EditProfile = ({ userData }) => {
  const [form, setForm] = useState({
    profileImg: null,
    name: userData?.name || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    city: userData?.city || "",
    role: userData?.role || "",
    serviceDetails: userData?.serviceDetails || "",
    yearsoFExperience: userData?.yearsoFExperience || 2,
    noOfProjects: userData?.noOfProjects || 10,
    bio: userData?.bio || "",
  });

  const [preview, setPreview] = useState(userData?.profileImgUrl || "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, profileImg: file });
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await editProfile(form);
      console.log(response);
      toast.success("Edit successful");

      setForm({
        profileImg: null,
        name: "",
        email: "",
        phone: "",
        city: "",
        role: "",
        serviceDetails: "",
        yearsoFExperience: 2,
        noOfProjects: 10,
        bio: "",
      })
    } catch (error) {
      console.error(error)
      toast.error("Edit Failed, server error")
    }
  };

  return (
    <div className="max-full mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Profile Image */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Profile Image</label>
          <input type="file" onChange={handleImageChange} className="p-3 bg-[#F1F1F1] rounded-xl"/>
          {preview && (
            <img src={preview} alt="Preview" className="mt-3 w-28 h-28 rounded-full object-cover" />
          )}
        </div>

        {/* Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"  />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md"  />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"  />
        </div>

        {/* City Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium">City</label>
          <select name="city" value={form.city} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md" >
            <option value="">Select city</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Role Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium">Role</label>
          <select name="role" value={form.role} onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md" >
            <option value="">Select role</option>
            {roles.map((role) => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Service Details */}
        <div>
          <label className="block mb-1 text-sm font-medium">Service Details</label>
          <textarea name="serviceDetails" value={form.serviceDetails} onChange={handleChange}
            rows={3} className="w-full border border-gray-300 p-2 rounded-md" />
        </div>

        {/* Experience and Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Years of Experience</label>
            <input type="number" name="yearsoFExperience" value={form.yearsoFExperience} onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Number of Projects</label>
            <input type="number" name="noOfProjects" value={form.noOfProjects} onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-md" />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1 text-sm font-medium">Bio</label>
          <textarea name="bio" value={form.bio} onChange={handleChange}
            rows={3} className="w-full border border-gray-300 p-2 rounded-md" />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

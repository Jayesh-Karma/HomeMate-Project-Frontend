import React from 'react'
import { FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'
import Navbar from '../Extras/Navbar'
import Footer from '../Home/Footer'

const About = () => {


  return (
  
    <div>

  <div className="w-full  overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 box-border">
  

    <section className="max-w-4xl mx-auto px-5 py-10 text-center">
    {/* Header */}
    <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
    <p className="text-gray-600 mt-2">At HomeMate, we believe in the power of seamless service connections. In today’s fast-paced world, finding reliable service providers can be a challenging task. Whether it's home repairs, beauty services, event planning, or professional consultations, customers deserve a hassle-free experience. That’s where we come in!

Our platform is built with a customer-first approach, ensuring that users can easily browse through a wide range of services, view real customer ratings, and hire the best professionals with just a few clicks. We connect skilled service providers with people in need, bridging the gap between expertise and demand.</p>

    {/* Cards Section */}
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <FaUsers className="text-blue-500 text-4xl" />
        <h3 className="font-semibold text-lg mt-3">Our Community</h3>
        <p className="text-gray-600 text-sm mt-2">
          We connect service providers with customers efficiently.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <FaLightbulb className="text-yellow-500 text-4xl" />
        <h3 className="font-semibold text-lg mt-3">Our Vision</h3>
        <p className="text-gray-600 text-sm mt-2">
          Simplifying service bookings with technology.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
        <FaRocket className="text-red-500 text-4xl" />
        <h3 className="font-semibold text-lg mt-3">Our Mission</h3>
        <p className="text-gray-600 text-sm mt-2">
          Making quality services accessible to everyone.
        </p>
      </div>
    </div>
  </section>
    </div>

    </div>
  )
}

export default About

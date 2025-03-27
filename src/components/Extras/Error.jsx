import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-6xl font-bold text-blue-500"
        >
            404
        </motion.h1>
        <p className="text-lg text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" 
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
        >
            Go Back Home
        </Link>
    </div>
  )
}

export default Error

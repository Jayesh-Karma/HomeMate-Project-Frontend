import React from 'react'
import { motion } from "framer-motion";


const Loader = () => {
  return (
    
         <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="ml-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  )
}

export default Loader

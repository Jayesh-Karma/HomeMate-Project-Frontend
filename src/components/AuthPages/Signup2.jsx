import React from 'react'

const Signup2 = ({nextStep, prevStep, signupData, handleChanges }) => {
  return (
    <div>
      Second page for signup

      <h1 className=' font-[poppins] text-4xl'>Working under construction 🚧 </h1>


      <div>
        <button
        onClick={prevStep}
        className='cursor-pointer p-2 bg-[#7C00FE] text-white rounded-2xl hover:scale-105 hover:bg-purple-500 transition-all duration-150'
        >
        Prev</button>
      </div>
    </div>
  )
}

export default Signup2

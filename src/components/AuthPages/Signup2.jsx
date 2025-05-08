import { MoveLeft, TicketSlash } from 'lucide-react'
import React from 'react'

const Signup2 = ({nextStep, prevStep, signupData, handleChanges, file, setFile, handleSubmit }) => {

  // profileImg, role, yearsOfExperience, noOfProjects, serviceDetails, bio, 

  console.log(signupData)
  return (
    <div className='flex flex-col items-center'> 

    <div className='w-[90%] bg-white p-5'>
      <h1 className=' font-[poppins] text-2xl'>Creating Account</h1>
      <p className=' text-gray-400 '>Just a Few More Details</p>
    </div>

    <div className='flex flex-col gap-4 w-[90%] bg-white p-5 rounded-2xl'>

    <div className=''>
      {
        file && (
          <div className='w-20 h-20 mb-5 rounded-full overflow-hidden'>
            <img src={URL.createObjectURL(file)} alt="profile" />
          </div>
        )
      }
      <input type="file" name='file' onChange={(e) => setFile(e.target.files[0])} className='border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500' />

    </div>

    <div>
      <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
   
      <select
        id="role"
        name="role"
        value={signupData.role}
        onChange={handleChanges}
        className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="" disabled>Select Role</option>
        <option value="builder">Builder</option>
        <option value="carpenter">Carpenter</option>
        <option value="painter">Painter</option>
        <option value="electrician">Electrician</option>
        <option value="plumber">Plumber</option>
      </select>
    </div>

    <div>
      <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">Years of Experience </label>
      <input 
        type="number" 
        defaultValue={2} 
        name="yearsOfExperience" 
        value={signupData.yearsOfExperience} 
        onChange={handleChanges} 
        id="yearsOfExperience" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
    </div>

    <div>
      <label htmlFor="noOfProjects" className="block text-sm font-medium text-gray-700">Number of Projects</label>
      <input type="number" name="noOfProjects" id="noOfProjects" value={signupData.noOfProjects} onChange={handleChanges} className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" placeholder="Number of Projects" />
    </div>


    <div>
      <label htmlFor="serviceDetails" className="block text-sm font-medium text-gray-700">Service Details</label>
      <input type="text" name="serviceDetails" value={signupData.serviceDetails} onChange={handleChanges} id="serviceDetails" className="border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
    </div>

    <div>
      <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
      <textarea name="bio" id="bio" value={signupData.bio} onChange={handleChanges} className='border-gray-300 border-2 rounded-md w-full p-2 focus:outline-none focus:ring-purple-500 focus:border-purple-500' rows="4" cols="50" placeholder="Bio"/>
    </div>

      <div className='w-full flex justify-between items-center'>
        <button
        onClick={prevStep}
        className='cursor-pointer p-2 bg-gray-400 text-white rounded-2xl hover:scale-105 hover:bg-purple-500 transition-all duration-150 flex items-center gap-2'
        >
        <MoveLeft className='w-4 h-4' /> Prev
        </button>
 

        <button
        onClick={handleSubmit}
        className='cursor-pointer px-5 py-2 bg-[#7C00FE] text-white rounded-2xl hover:scale-105 hover:bg-purple-500 transition-all duration-150 flex items-center gap-2'
        >
          Submit 
        </button>
      </div>
    </div>
    </div>


  )
}

export default Signup2

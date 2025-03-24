import React, { useState } from 'react'
import Signup1 from './Signup1';
import Signup2 from './Signup2';

const Signup = () => {
    const [step, setStep] = useState(0);

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        verifyEmail:'',
        phone: '',
        role:'',
        currentAddress: '',
        city: '',
        state: '',
        noOfProjects: '',
        yearsoFExperience: '',
        serviceDetails:'',
        bio:'',
        password: '',

    });

    const nextStep = () => setStep(step+1);
    const prevStep = () => setStep(step-1);

    const handleChanges = (e) => {
        setSignupData({...signupData, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        console.log('Final form data' + signupData);
    }
  return (
    <div className='w-full flex justify-center items-center'>
        
        <img 
        className='absolute top-0 -z-50 opacity-70 w-full min-h-screen bg-cover bg-center bg-no-repeat '
        src="/images/auth/LoginBackground.png" alt="Background" />


        <div className='w-[50%] bg-white p-5 rounded-2xl gap-4 mt-10'>
            {
                step === 0 && 
                <Signup1 signupData={signupData} nextStep={nextStep} handleChange={handleChanges} />
            }
            {
                step === 1 &&
                <Signup2 signupData={signupData} nextStep={nextStep} handleChange={handleChanges} prevStep={prevStep} />    
            }
        </div>
        
        
    </div>
  )
}

export default Signup

import React, { useState } from 'react'

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
    <div>
      
    </div>
  )
}

export default Signup

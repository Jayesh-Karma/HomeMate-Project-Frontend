import React, { useState } from 'react'
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import { signupServiceProvider } from '../../services/service providers data/serviceProviderService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [step, setStep] = useState(0);
    const [cPassword, setCPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        phone: '',
        role:'',
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
        const { name, value } = e.target;
        setSignupData((prev) => ({
            ...prev,
            [name]: value
        }));
};
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('name', signupData.name);
            formData.append('email', signupData.email);
            formData.append('phone', signupData.phone);
            formData.append('role', signupData.role);
            formData.append('city', signupData.city);
            formData.append('state', signupData.state);
            formData.append('noOfProjects', signupData.noOfProjects);
            formData.append('yearsoFExperience', signupData.yearsoFExperience);
            formData.append('serviceDetails', signupData.serviceDetails);
            formData.append('bio', signupData.bio);
            formData.append('password', signupData.password);
            formData.append('cPassword', cPassword);
            formData.append('profile', file);
            const res = await signupServiceProvider(formData);
            console.log(res);
            toast.success(res.message);
            navigate('/');
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        }
        finally {
            setLoading(false);
        }
    }
  return (
    <div className='w-full flex justify-center items-center my-10'>
        
        <img 
        className='absolute top-0 -z-50 opacity-70 w-full min-h-screen bg-cover bg-center bg-no-repeat '
        src="/images/auth/LoginBackground.png" alt="Background" />


        <div className='w-[50%] bg-white p-5 rounded-2xl gap-4 mt-10'>
            {
                step === 0 && 
                <Signup1 signupData={signupData} cPassword={cPassword} setCPassword={setCPassword} nextStep={nextStep} handleChange={handleChanges} />
            }
            {
                step === 1 &&
                <Signup2 signupData={signupData} handleSubmit={handleSubmit} file={file} setFile={setFile} nextStep={nextStep} handleChanges={handleChanges} prevStep={prevStep} />    
            }
        </div>
        
        
    </div>
  )
}

export default Signup

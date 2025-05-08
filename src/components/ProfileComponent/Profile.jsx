import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('user')){
            console.log('user');
            navigate('/customer-profile');    
        }
        else if(localStorage.getItem('serviceProvider')){
            navigate('/user-profile');
        }
    }, [])

}

export default Profile

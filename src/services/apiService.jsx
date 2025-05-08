// making api functin
import axios from "axios";

const baseURL = import.meta.env.VITE_BASEURL
export const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    
    },
    withCredentials: true,  // for cookies
})
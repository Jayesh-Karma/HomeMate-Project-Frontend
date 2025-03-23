// import { toast } from "toastx";
import { api } from "../apiService"


// login service provider
export const loginProvider = async(email, password) => {
    try {
        const users = await api.post('/service/login', { email, password });
        console.log(users.data);
        return users.data;
    } catch (error) {
        return null;
    }
}

export const getAllServiceProviders = async()=>{
    try {
        const users = await api.get("/search/get_all_service_providers");
        return users.data;
    } catch (error) {
        console.log(error.message);  // toast.error(error.message);  // show error in toast
        return null;   
    }
}


export const getServiceProvidersByService = async(service)=>{
    try {
        const users = await api.get(`/search/get_serviceproviders_by_service/${service}`);
        console.log(users.data)
        return users.data;
    } catch (error) {
        return null;
    }
}

//  get all details of service provider
export const getServiceProviderDetails = async(serviceProviderId) =>{
    try {
        const user = await api.get(`/search/service_provider_account_details/${serviceProviderId}`);
        return user.data;
    } catch (error) {
        console.log(error.message);  // toast.error(error.message);  // show error in toast
        return null;   
    }
}
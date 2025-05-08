// import { toast } from "toastx";
import { api } from "../apiService"


// login service provider
export const loginProvider = async(email, password) => {
    try {
        const users = await api.post('/service/login', { email, password });
        console.log(users.data);
        return users.data;
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to login");
    }
}

export const signupServiceProvider = async(signupData) => {
    try {
        const signup = await api.post('/service/register', signupData);
        console.log(signup);
        return signup.data;
    } catch (error) {
        console.error(error);
        return new Error(error);
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
        console.log(users)
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

//  get all details about service provider account
export const getServiceProviderAccountDetails = async () => {
    try {
      const response = await api.get('/service/details');
      return response.data;  // only return data
    } catch (error) {
      throw new Error(error?.response?.data?.message || "Failed to fetch service provider details");
    }
  };


//  get details of a service provider
 export const getServiceProviderById = async(serviceProviderId) =>{
    try {
        const user = await api.get(`/search/get_service_provider_details/${serviceProviderId}`);
        console.log(user);
        return user.data;
    } catch (error) {
        console.log(error.message);  // toast.error(error.message);  // show error in toast
        return null;   
    }
}


export const editProfile = async(data) => {
    try {
        const edits = await api.put(`/service/edit`, data);
        console.log(edits);
        return edits.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const uploadPost = async(data) => {
        const post = await api.post(`/service/upload_post`, data);
        return post.data;
}


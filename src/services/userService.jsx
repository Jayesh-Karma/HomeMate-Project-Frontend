import { api } from "./apiService";

export const loginUser = async(data) => {
    try {
        const user = await api.post(`/customer/customer-login`, data);
        console.log(user);
        return user.data;
        
    } catch (error) {
        console.log(error);
        throw new Error(error?.response?.data?.message || "Failed to login");
    }
}

export const signupUser = async(data) =>{
    const user = await api.post("/customer/customer-signup", data);
    return user.data;
}

export const getUserDetails = async() => {
    try {
        const user = await api.get(`/customer/customer-details`);
        return user.data;
    } catch (error) {
        console.log(error);
        return new Error(error);
    }
}

export const hireServiceProvider = async(data) => {
    try {
        const user = await api.post(`/customer/hire-service`, data);
        return user.data;
    } catch (error) {
        console.log(error);
        return new Error(error);
    }
}
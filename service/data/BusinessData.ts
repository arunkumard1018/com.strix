import { handleAxiosError } from "@/components/errors/customErrors";
import { axiosClient, CustomAxiosResponse, Response } from "@/lib/AxiosClient";
import { BusinessFormData } from "@/lib/schemas";
import axios from "axios";



export const fetchBusinessList = async () => {
    try {
        console.log("Fetching Business List")
        const response : CustomAxiosResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/business`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            return (response.data)
        } else {
            console.error('failed to fetch user details');
            return [];
        }
    } catch (error) {
        console.error('Error during fetching me:', error);
        return []
    }
}

export const createBusiness = async (payload: BusinessFormData) : Promise<Response> => {
    try {
        const response : CustomAxiosResponse = await axiosClient.post(`/business`,payload);
        return{
            data: response.data,
            status: response.status,
            message: "success"
        }
    } catch (error) {
        throw handleAxiosError(error);
    }
};

export const updateBusiness = async (payload: BusinessFormData, id: number) => {
    try {
        const response : CustomAxiosResponse = await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/business/${id}`,
            payload,
            { withCredentials: true }
        );
        if (response.status === 204) {
            return { message: "success", data: response.data };
        }
    } catch (error: any) {
        if (error.response?.status === 400) {
            return { message: "validation-error", errors: error.response.data };
        } else if (error.response?.status === 500) {
            return { message: "server-error" };
        }
        return { message: "error", error };
    }
};


export const getBusiness = async (businessId: number) => {
    console.log("Getting Business for", businessId)
    try {
        const response: CustomAxiosResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/business/${businessId}`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        return null;
    }
}


export const deleteBusiness = async (businessId: number) => {
    console.log("Deleting business with id", businessId);
    try {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/business/${businessId}`,
            { withCredentials: true }
        );
        if (response.status === 200) {
            return true;
        }
        return false;

    } catch (error) {
        return false;
    }
}

export const updateActiveBusiness = async (businessId: number) => {
    console.log("Deleting business with id", businessId);

    try {
        const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/business/active/${businessId}`,
            {}, 
            { withCredentials: true }
        );
        if (response.status === 200) {
            return true;
        }
        return false;

    } catch (error) {
        return false;
    }
}
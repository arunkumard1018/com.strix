import { handleAxiosError } from "@/components/errors/customErrors";
import { axiosClient, CustomAxiosResponse, Response } from "@/lib/AxiosClient";
import { UserData } from "@/store/slices/userSlice";



export const fetchMe = async (): Promise<Response<UserData>> => {

    try {
        const response: CustomAxiosResponse<UserData> = await axiosClient.get(`/me`);
        return {
            data: response.data,
            status: response.status,
            message: "success"
        };
    } catch (error) {
        throw handleAxiosError(error);
    }
};




import axios, { AxiosResponse } from "axios";
import { ResponseCode } from "./enums";
import { Business, UserData } from "@/store/slices/userSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});


export interface CustomAxiosResponse<T = UserData | Business | any > extends AxiosResponse<T> {
    data: T;
}

export interface Response<T = UserData | Business | any > {
    data: T;
    status: number | ResponseCode | any ;
    message: string;
}

import { Response } from "@/lib/AxiosClient";
import { ResponseCode } from "@/lib/enums";


export interface ApiResponseError{
    response: Response;
}

export class AxiosServerError extends Error implements ApiResponseError {
    response: Response;
    constructor(response: Response) {
        super(response.message);
        this.response = response
    }
}

export class AxiosResponseError extends Error implements ApiResponseError {
    response: Response;

    constructor(response: Response) {
        super(response.message);
        this.response = response
    }
}

/**
 * Handles Axios errors and throws custom errors based on the type of error.
 * @param error The error object caught in the Axios request.
 * @returns Never. Throws a custom error based on the error type.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleAxiosError = (error : any): never => {

    if (error.response) {
        // Handle server response errors (4xx, 5xx)
        throw new AxiosResponseError({
            data: error.response.data,
            status: error.response.status,
            message: error.message
        });

    } else {
        // Handle network-related errors
        throw new AxiosServerError({
            data: "Server Offline",
            status: error.code || ResponseCode.UN_KNOWN,
            message: error.message
        });
    }
};
/* eslint-enable @typescript-eslint/no-explicit-any */
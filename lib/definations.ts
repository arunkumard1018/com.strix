


export type FormErrors = {
    [key: string]: string; // Key is the field name, value is the error message
};


export type UserInfo = {
    name: string,
    email: string,
    password: string,
    city: string,
    state: string,
    zip: number | undefined,
    isAggreedThePolicy: boolean,
    businessName: string,
    businessType: string,
}


export interface Business {
    name: string;
    id: number;
    businessType: string;
    stateCode: number;
    businessLogo: string;
    hsn: number;
    gstin: string;
}

// Define the shape of your business form data if not already defined
export interface BusinessData {
    id: string;
    name: string;
    businessType: string;
    address: string;
    city: string;
    state: string;
    gstin: string;
    zip: string;
    stateCode: string;
    hsn: string;
    invoicePrefix: string;
    businessLogo: string;
}
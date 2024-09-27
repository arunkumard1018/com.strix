import { z } from "zod";

// Registeration Form schema
export const Regschema = z.object({
    name: z.string().min(1, "Name required"),
    email: z.string().email("Invalid email address").min(1, "Email required"),
    password: z.string().min(6, "Password must be at least 6 characters long").min(1, "Password required"),
    city: z.string().min(1, "City required"),
    state: z.string().min(1, "State required"),
    zip: z.string().min(6, "Invalid Zip code"),
    isAggreedThePolicy: z.boolean().refine(val => val === true, "You must agree to the policy"),
    businessName: z.string().min(1, "Business Name required"),
    businessType: z.string().min(1, "Business required"),
});

// Login Form Schema
export const loginSchema = z.object({
    email: z.string().email("Invalid email address"), // Validate email format
    password: z.string().min(6, "Password must be at least 6 characters"), // Ensure minimum password length
});


// Business Form Schema
export const BusinessFormSchema = z.object({
    id: z.string(),
    name: z.string()
        .min(3, { message: "Business name must be at least 3 characters.", }),
    businessType: z.string({ required_error: "Please select a Business Category.", }).
        min(3, { message: "Please select a Business Category.", }),
    address: z.string({ required_error: "Adress required for Invoicing" })
        .min(5, { message: "Address Required" }),
    city: z.string().min(3, { message: "City Required" }),
    zip: z.string().min(0, "Zip Code Required").length(6, "Inavlid Zip Code"),
    state: z.string().min(3, { message: "Select The State" }),
    gstin: z.string(),
    stateCode: z.string(),

    hsn: z.string(),
        // .length(5, { message: "HSN must be exactly 5 characters" })
        // .regex(/^\d+$/, { message: "HSN must be a number" })
        // .optional(),
        // .transform((val) => Number(val)), // Convert to a number if needed
    invoicePrefix: z.string(),
    businessLogo: z.string().default("/img/primary-image-dark.jpg")
})

export type BusinessFormData = z.infer<typeof BusinessFormSchema>;
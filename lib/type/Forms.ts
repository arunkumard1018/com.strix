// Define error type
export type FormErrors = {
  [key: string]: string; // Key is the field name, value is the error message
};

export type RegForm = {
  name: string,
  email: string,
  password: string,
  city: string,
  state: string,
  zip: number|undefined,
  isAggreedThePolicy: boolean,
  businessName:string,
  businessType: string,
}


// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

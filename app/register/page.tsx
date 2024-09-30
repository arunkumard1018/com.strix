"use client";
import { AppLogo } from "@/components/custom/elements";
import { InternalServerError } from "@/components/errors/errors";
import FooterComponent from "@/components/home-page/FooterComponent";
import NavBar from "@/components/home-page/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BUSINESS_TYPE, INDIAN_STATES } from "@/config/FormConfig";
import { FormErrors, UserInfo } from "@/lib/definations";
import { Regschema } from "@/lib/schemas";
import { registerUser } from "@/service/AuthService";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

const initialFormData = {
  name: '',
  email: '',
  password: '',
  city: '',
  state: '',
  zip: undefined,
  isAggreedThePolicy: false,
  businessName: '',
  businessType: '',
}

export default function RegistrationForm() {

  const [formData, setFormData] = useState<UserInfo>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});

  const [serverError, setServerError] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false)
  const [formState, setFormState] = useState('idle'); // Track form submission state
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Set form state to loading when submission starts
    setFormState('loading');
    try {
      Regschema.parse(formData);
      setErrors({});
      const response = await registerUser(formData);
      if (response.status === 201) {
        setRegSuccess(true);
        setFormData(initialFormData)
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
      else setServerError(true)
    }
    catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          const err: FormErrors = {
            email: error.message
          }
          setErrors(err);
          // need to handle Data Validation Error
        } else {
          setServerError(true);
        }

      } else if (error instanceof z.ZodError) {

        const errorMessages: FormErrors = error.errors.reduce((acc: FormErrors, error) => {
          const path = error.path[0] as string; // Ensure path is a string
          acc[path] = error.message;
          return acc;
        }, {});

        setErrors(errorMessages);

      } else {
        setServerError(true)
      }
    } finally {
      setFormState('idle'); // Reset form state after submission
    }
  };

  if (serverError) {
    return <InternalServerError message="unable to Register now Try After SomeTimes" reset={() => setServerError(false)} />
  }

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center mt-5 px-2 py-20"
        style={{ backgroundImage: "url('/img/dashboard/dashboard-2.jpg')" }}
      >
        <NavBar />
        <Card className="mx-auto md:w-[35vw]">

          <CardHeader>
            <CardTitle className="text-xl">
              <Link href="/"><AppLogo /></Link>
            </CardTitle>
            {regSuccess &&
              <div className="text-green-600 text-center">
                <p className="font-medium text-xl">Registration Successful!</p>
                <p>Please login to continue...</p>
              </div>
            }
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">

              <div className="grid gap-2">
                <Label htmlFor="name" className="flex justify-between" >Full Name{errors.name && <p className="text-red-500 mx-2">{errors.name}*</p>}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'border-red-500' : ''}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="flex justify-between">Email {errors.email && <p className="text-red-500 mx-2">{errors.email}*</p>} </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="flex justify-between">Password{errors.password && <p className="text-red-500">{errors.password}*</p>}</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'border-red-500' : ''}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="businessName" className="flex justify-between" >Business Name{errors.name && <p className="text-red-500 mx-2">{errors.businessName}*</p>}</Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="business Name"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className={errors.businessName ? 'border-red-500' : ''}
                />
              </div>

              <div className="grid gap-2">
                <div className="grid gap-3">
                  <Label htmlFor="businessType" className="flex justify-between">Business Type{errors.businessType && <p className="text-red-500">{errors.businessType}*</p>}</Label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors ${errors.businessType ? 'border-red-500' : ''}`}
                  >
                    <option value="" disabled >Select Business Type</option>
                    {BUSINESS_TYPE.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <div className="grid gap-3">
                  <Label htmlFor="state" className="flex justify-between">State{errors.state && <p className="text-red-500">{errors.state}*</p>}</Label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors ${errors.state ? 'border-red-500' : ''}`}
                  >
                    <option value="" disabled >Select State</option>
                    {INDIAN_STATES.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city" className="flex justify-between">City{errors.city && <p className="text-red-500">{errors.city}*</p>}</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={errors.city ? 'border-red-500' : ''}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="zip" className="flex justify-between">Zip {errors.zip && <p className="text-red-500">{errors.zip}*</p>}</Label>
                  <Input
                    id="zip"
                    placeholder="Zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className={errors.zip ? 'border-red-500' : ''}
                  />
                </div>
              </div>


              <div className="flex items-center space-x-2">
                <input
                  id="policy"
                  type="checkbox"
                  name="isAggreedThePolicy"
                  checked={formData.isAggreedThePolicy}
                  onChange={handleInputChange}
                  className={errors.isAggreedThePolicy ? 'border-red-500' : ''}
                />
                <Label
                  htmlFor="policy"
                  className="text-xs font-medium leading-none"
                >
                  I agree to the <Link href="#" className="text-blue-500">Terms of Service and Privacy Policy</Link>.
                </Label>
              </div>
              {errors.isAggreedThePolicy && <p className="text-red-500 text-xs">{errors.isAggreedThePolicy}</p>}

              <Button type="submit" className="w-full" disabled={formState === 'loading'}>
                {formState === 'loading' ? 'Submitting...' : 'Create an account'}
              </Button>

              <Button variant="outline" className="w-full">
                <Image src="/img/social/google.png" alt="" className="w" width={20} height={20} />
                <span className="mx-2">SigunUp with Google</span>
              </Button>
              <Button variant="outline" className="w-full">
                <Image src="/img/social/apple.png" alt="" className="w" width={20} height={20} />
                <span className="mx-2">SignUp with Apple</span>
              </Button>

              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <FooterComponent className="px-2 md:px-36" />
    </div>
  );
}

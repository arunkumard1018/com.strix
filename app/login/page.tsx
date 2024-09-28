'use client'

import { AppLogo } from "@/components/custom/elements"
import { InternalServerError } from "@/components/errors/errors"
import FooterComponent from "@/components/home-page/FooterComponent"
import NavBar from "@/components/home-page/NavBar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema } from "@/lib/schemas"
import { authenticate } from "@/service/AuthService"
import { AxiosError } from "axios"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function LoginForm() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [serverError, setServerError] = useState(false)
  const [loading, setLoading] = useState(false);


  const handleSubmit = async () => {

    const formData = { email, password };
    const validationResult = loginSchema.safeParse(formData);


    if (!validationResult.success) {
      // If validation fails, show the error message
      const errors = validationResult.error.formErrors.fieldErrors;
      setFieldErrors({
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    try {
      setLoading(true)
      const response = await authenticate(email, password);
      // on Authentication Successfull
      if (response.status === 200) router.push('/dashboard');

    } catch (error) {

      if (error instanceof AxiosError) {
        //Invalid Credentials
        if (error.response?.status === 401) setError(true)

        //Internal Server Error
        else setServerError(true);

      } else {
        setError(true)
      }

    } finally {
      setLoading(false);
    }
  };

  if (serverError) {
    return <InternalServerError message="unable to Login at this time" reset={() => setServerError(false)} />
  }


  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center mt-5"
        style={{ backgroundImage: "url('/img/dashboard/dashboard-2.jpg')" }}
      >
        <NavBar />
        <Card className="mx-auto lg:w-[30vw] lg:h-[70vh]">
          <CardHeader>
            <CardTitle className="text-2xl mx-auto max-w-sm backdrop-blur-md bg-white/10">
              <Link href="/"><AppLogo /></Link>
            </CardTitle>

            {!error && <CardDescription className="text-center">Enter your Credentials to login to your account</CardDescription>}
            {error && <div className="text-center text-red-500">Invalid Credentials Please Check!</div>}
          </CardHeader>

          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="flex justify-between items-center">Email {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.email}*</p>}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldErrors.email ? 'border-red-500' : ''}
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={fieldErrors.password ? 'border-red-500' : ''}
                />
                {fieldErrors.email && <p className="text-red-500 text-sm">{fieldErrors.password}*</p>}
              </div>

              <Button type="submit" className="w-full" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>

              <Button variant="outline" className="w-full">
                <Image src="/img/social/google.png" alt="" className="w" width={20} height={20} />
                <span className="mx-2">Login with Google</span>
              </Button>
              <Button variant="outline" className="w-full">
                <Image src="/img/social/apple.png" alt="" className="w" width={20} height={20} />
                <span className="mx-2">Login with Apple</span>
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <FooterComponent className="px-2 md:px-36 " />
    </>
  )
}



'use client'
import Link from "next/link"

import { AppLogo } from "@/components/custom/elements"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState(false)
  const router = useRouter();

  const handleSubmit = async () => {

    try {
      // Sending login request to the Spring Boot backend using Axios
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authenticate`,
        { username: email, password: password },
        { withCredentials: true } // This ensures the HTTP-only cookie is stored
      );

      if (response.status === 200) {
        router.push('/dashboard');
      } else {
        seterror(true);
        console.error('Login failed');
      }
    } catch (error) {
      seterror(true)
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="mt-20">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            <Link href="/"><AppLogo /></Link>
          </CardTitle>
          {!error && <CardDescription>Enter your email below to login to your account</CardDescription>}
          {error && <div className="text-center text-red-500">Invalid Credentials Please Check!</div>}

        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
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
  )
}

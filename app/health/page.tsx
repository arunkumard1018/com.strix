"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Building2 } from 'lucide-react'
import React from 'react'
import { Form, useForm } from 'react-hook-form'
import { z } from 'zod'

function page() {
    const { toast } = useToast()
    return (
        <div className='mt-24 flex flex-col items-center justify-center space-y-4'>
            <div className='text-4xl text-center font-medium text-green-500'>App Working Fine Check with Components</div>
            <p className='text-center text-red-400'>{process.env.END_API_URL}</p>
            <Button
                variant="outline"
                className='w-[10vw]'
                onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                Show Toast
            </Button>
        </div>
    )
}

export default page


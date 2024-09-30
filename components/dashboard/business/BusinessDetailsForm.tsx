"use client"
import { AxiosResponseError, AxiosServerError } from '@/components/errors/customErrors'
import { SelectInput, TextInput } from '@/components/forms/FormFields'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from '@/components/ui/form'
import { BUSINESS_CATEGORY } from '@/config/DashboardConfig'
import { INDIAN_STATES } from '@/config/FormConfig'
import { useToast } from '@/hooks/use-toast'
import { ResponseCode } from '@/lib/enums'
import { BusinessFormData, BusinessFormSchema } from '@/lib/schemas'
import { createBusiness } from '@/service/data/BusinessData'
import { addBusiness } from '@/store/slices/userSlice'
import { zodResolver } from "@hookform/resolvers/zod"
import { Building2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { z } from "zod"

export function BusinessDetailsForm({ defaultValues }: { defaultValues: BusinessFormData }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    const { toast } = useToast();

    const form = useForm<z.infer<typeof BusinessFormSchema>>({
        resolver: zodResolver(BusinessFormSchema),
        defaultValues,
    })

    async function onSubmit(data: z.infer<typeof BusinessFormSchema>) {
        setLoading(true);

        // Create business
        try {
            const response = await createBusiness(data);
            if (response.status === ResponseCode.CREATED || response.status === ResponseCode.SUCCESS) {
                toast({
                    variant: "success",
                    title: `Business ${response.data.name} Created Successfully !`,
                    duration: 3000,
                });
                dispatch(addBusiness(response.data));
                router.push("/dashboard/business");
            }
            if (response.status === ResponseCode.SUCCESS) {
                toast({
                    variant: "success",
                    title: `Business ${response.data.name} Updated Successfully !`,
                    duration: 3000,
                });
                router.push("/dashboard/business");
            }
        } catch (error) {
            if (error instanceof AxiosResponseError) {
                toast({
                    variant: "destructive",
                    title: `Failed to Update Busisness ${data.name} !`,
                    description: error.response.data.details,
                    duration: 3000,
                });
            } else if (error instanceof AxiosServerError) {
                toast({
                    variant: "destructive",
                    title: `Failed to Update Business ${data.name} !`,
                    description: error.message,
                    duration: 3000,
                });
            } else if(error instanceof Error) {
                toast({
                    variant: "destructive",
                    title: `Unable to Update Business ${data.name} !`,
                    description: error?.message,
                    duration: 3000,
                });
            }
        }
        setLoading(false);
    }


    // Check for form state errors after submission
    useEffect(() => {
        console.log("Form Errors: ", form.formState.errors); // Log form errors
    }, [form.formState.errors]);

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" px-2  space-y-6">
                    <Card>
                        <CardHeader className='flex-row items-center space-x-4 rounded-md border p-4'>
                            <Building2 />
                            <div className="flex-1 space-y-1">
                                <CardTitle className="text-lg font-medium leading-none">Business Details</CardTitle>
                                <CardDescription className='text-sm text-muted-foreground'>The Below Details will be Used to Create Invoice.</CardDescription>
                            </div>
                        </CardHeader>

                        <CardContent className="grid gap-4">

                            <TextInput name="name" label="Business Name" placeholder="Enter business name" form={form} />
                            <SelectInput
                                name="businessType"
                                label="Business Category"
                                placeholder="Select a category"
                                options={BUSINESS_CATEGORY}
                                form={form}
                            />
                            <div className='space-y-4'>
                                <TextInput name="address" label="Address" placeholder="#23/4 " form={form} />

                                <div className=' md:flex w-full justify-between md:space-x-4' >
                                    <SelectInput className='md:w-[35%]' name="state" label="State" placeholder="Select a State" options={INDIAN_STATES} form={form} />
                                    <div className='flex space-x-2'>
                                        <TextInput name="city" label="city" placeholder="city" form={form} />
                                        <TextInput name="zip" label="zip" placeholder="zip" form={form} />
                                    </div>
                                </div>
                            </div>
                            <TextInput name="invoicePrefix" label="Prefix To Generate Invoice" placeholder="INV-NO " form={form} />
                            <div className='md:flex justify-between space-x-2'>
                                <TextInput name="gstin" label="GSTIN" placeholder="AYXGSTIN" form={form} />
                                <TextInput name="hsn" label="HSN" placeholder="22" form={form} />
                                <TextInput name="stateCode" label="statecode" placeholder="22" form={form} />
                            </div>

                            <Button type="submit" disabled={loading}  >
                                {loading ? 'Updating Details...' : 'Save'}
                            </Button>
                        </CardContent>
                    </Card>

                </form>
            </Form>
        </div>
    )

}

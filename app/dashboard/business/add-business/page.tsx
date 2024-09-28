"use client"
import { BusinessDetailsForm } from "@/components/dashboard/business/BusinessDetailsForm"
import { BreadcrumbWithCustomSeparator } from "@/components/dashboard/layout/BreadCrumbLink"

export default function page() {
    
    
    const defaultValues = {
        id: "",
        name: "",
        businessType: "",
        address: "",
        city: "",
        state: "",
        gstin: "",
        zip: "",
        stateCode: " ",
        hsn: "",
        invoicePrefix: "",
        businessLogo: "/img/bentalgrid/img-1.jpg",
    }

    const crumbPath = [
        { path: "/dashboard/business", title: "Business" },
        { path: "/dashboard/", title: "Add-Business" },

    ]
    return (
        <div className='flex flex-col my-4'>
            <BreadcrumbWithCustomSeparator data={crumbPath} />
            <div className="flex items-end justify-center mt-4"><BusinessDetailsForm defaultValues={defaultValues} /></div>
        </div>
    )
}

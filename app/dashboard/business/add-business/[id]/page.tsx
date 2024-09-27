"use client"
import { BusinessDetailsForm } from '@/components/dashboard/business/BusinessDetailsForm'
import { PageError } from '@/components/errors/errors'
import { TableSkeleton } from '@/components/skeltons/TableSkelton'
import { BusinessFormData } from '@/lib/schemas'
import { getBusiness } from '@/service/data/BusinessData'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


function page() {
    const parms = useParams()
    const [business, setbusiness] = useState<BusinessFormData>()
    const [serverError, setServerError] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter();


    useEffect(() => {
        const loadBusiness = async () => {
            const resp = await getBusiness(Number(parms.id))
            if (resp === null) {
                setServerError(true)
                return;
            }
            setLoading(false);
            setbusiness({ ...resp, ...resp.address })
        }
        loadBusiness();
    }, [])

    if (business === undefined) {
        return <TableSkeleton />
    }

    const defaultValues: BusinessFormData = {
        id: String(business.id) || "",
        name: business.name || "",
        businessType: business.businessType || "",
        address: business.address || "",
        city: business.city || "",
        state: business.state || "",
        gstin: business.gstin || "",
        zip: String(business.zip) || "",
        stateCode: String(business.stateCode) || "",
        hsn: String(business.hsn) || "",
        invoicePrefix: business.invoicePrefix || "",
        businessLogo: business.businessLogo || "/img/primary-image-dark.jpg",
    };

    return (
        <div>
            {serverError && <PageError errorName='500 Internal Server Error' message='Unable to get Business Details' reset={() => router.push(`${parms.id}`)} />}
            {loading ? <TableSkeleton /> :
                <div className='flex items-center justify-center my-4'><BusinessDetailsForm defaultValues={defaultValues} /></div>}
        </div>
    )
}

export default page
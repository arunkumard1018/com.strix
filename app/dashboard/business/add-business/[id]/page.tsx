"use client"
import { BusinessDetailsForm } from '@/components/dashboard/business/BusinessDetailsForm'
import { PageError } from '@/components/errors/errors'
import { TableSkeleton } from '@/components/skeltons/TableSkelton'
import { BusinessFormData } from '@/lib/schemas'
import { getBusiness } from '@/service/data/BusinessData'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


function Page() {
    const params = useParams()
    const [business, setbusiness] = useState<BusinessFormData>()
    const [serverError, setServerError] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(() => {
        const loadBusiness = async () => {
            const resp = await getBusiness(Number(params.id))
            if (resp === null) {
                setServerError(true)
                return;
            }
            setLoading(false);
            setbusiness({ ...resp, ...resp.address })
        }
        loadBusiness();
    }, [params.id])

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
        businessLogo: business.businessLogo || "/img/bentalgrid/img-1.jpg",
    };

    return (
        <div>
            {serverError && <PageError errorName='500 Internal Server Error' message='Unable to get Business Details' reset={() => router.push(`${params.id}`)} />}
            {loading ? <TableSkeleton /> :
                <div className='flex items-center justify-center my-4'><BusinessDetailsForm defaultValues={defaultValues} /></div>}
        </div>
    )
}

export default Page
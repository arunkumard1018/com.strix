'use client'
import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

export function BreadcrumbWithCustomSeparator({ data }: { data: { path: string, title: string }[] }) {
    return (
        <Breadcrumb className="px-2">
            <BreadcrumbList className="">
                {data.map((item, index) => (
                    <div key={item.path} className="flex items-center font-medium">
                        <BreadcrumbItem key={index} className="hover:underline hover:bg-primary-foreground px-2 rounded-md">
                            <Link href={item.path}>{item.title}</Link>
                        </BreadcrumbItem>
                        {index !== data.length - 1 && <BreadcrumbSeparator />}
                    </div>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

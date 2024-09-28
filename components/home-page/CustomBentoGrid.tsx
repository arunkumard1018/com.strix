import React from 'react'
import {BellIcon,CalendarIcon,FileTextIcon,GlobeIcon,InputIcon,} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from 'next/image';
import { cn } from '@/lib/utils';


const features = [
    {
        Icon: FileTextIcon,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/img/bentalgrid/img-1.jpg"  alt='img' fill className='absolute -right-20 -top-20 opacity-20 object-cover'/>,
        className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
    },
    {
        Icon: InputIcon,
        name: "Full text search",
        description: "Search through all your files in one place.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/img/bentalgrid/img-2.jpg"  alt='img' fill className='absolute -right-20 -top-20 opacity-10 object-cover'/>,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: GlobeIcon,
        name: "Multilingual",
        description: "Supports 100+ languages and counting.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/img/bentalgrid/img-4.jpg"  alt='img' fill  className='absolute -right-20 -top-20 opacity-10 object-cover'/>,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    // {
    //     Icon: CalendarIcon,
    //     name: "Calendar",
    //     description: "Use the calendar to filter your files by date.",
    //     href: "/",
    //     cta: "Learn more",
    //     background: <Image src="/img/primary-image-dark.jpg"  alt='img' fill className='absolute -right-20 -top-20 opacity-10 object-cover'/>,
    //     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-1",
    // },
    {
        Icon: BellIcon,
        name: "Notifications",
        description:
            "Get notified when someone shares a file or mentions you in a comment.",
        href: "/",
        cta: "Learn more",
        background: <Image src="/img/bentalgrid/img-3.jpg"  alt='img' fill className='absolute -right-20 -top-20 opacity-10 object-cover'/>,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
];


export async function CustomBentoGrid({className}:{className?:string}) {
    return (
        <BentoGrid className={cn("lg:grid-rows-2",className)}>
            {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    );
}


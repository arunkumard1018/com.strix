"use client"
import { HERO_PAGE_CONTENT } from "@/config/HeroPageConfig";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CustomButton } from "../custom/elements";



export function Features({ className }: { className?: string }) {
    return (
        <div>
            <section className={cn("bg-white", className)}>
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold capitalize">{HERO_PAGE_CONTENT.featuresHeading.title}</h1>
                    <p className="text-gray-600 mt-2 capitalize">{HERO_PAGE_CONTENT.featuresHeading.description}</p>
                    <CustomButton className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 font-medium">
                        Try Strix Invoice for FREE
                    </CustomButton>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {HERO_PAGE_CONTENT.features.map((item, index) => (
                        <FeatureCard
                            key={index * 5}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export function DashboardFeatures() {
    return (
        <>
            <div className='p-6 space-y-2' >
                <h2 className='text font-bold text-black text-center text-xl  md:text-3xl capitalize'>{HERO_PAGE_CONTENT.secondaryHeroContent.mainText}</h2>
                <p className='text-sm text-center capitalize'>{HERO_PAGE_CONTENT.secondaryHeroContent.description}</p>
            </div>
            {/* Card Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {HERO_PAGE_CONTENT.secondaryCardDetails.map((card, index) => (
                    <DeatisCard icon={card.icon}
                        key={index * 5}
                        title={card.title}
                        description={card.description}
                        className='p-6 rounded-lg shadow-none border-b bg-white' />
                ))}
            </div>

        </>
    )
}

export function DashboardImage({ className }: { className?: string }) {
    return (
        <div className="mt-5">
            <div className={cn("hidden md:flex items-center justify-center", className)}>
                <div className="w-full">
                    <div className="hidden md:flex items-center justify-center">
                        <div className="relative md:w-2/3 md:h-[65vh] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            <Image src="/img/dashboard/dashboard-1.png" alt="" fill className="object-fill" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center md:hidden">
                <div className="relative  w-full h-[35vh]">
                    <Image src="/img/dashboard/mobile-dashboard-1.png" alt="" fill className="object-fill" />
                </div>
            </div>
        </div>
    )
}


function DeatisCard({ icon, title, description, className }:
    { icon: string, title: string, description: string, className?: string }) {
    return (
        <div>
            <div className={cn("bg-gray-100 p-6 rounded-lg shadow-md", className)} >
                <div className='flex space-x-4 items-center'>
                    <div className="text-4xl mb-4">{icon}</div>
                    <h3 className="text-xl font-semibold mb-2 capitalize">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    )
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="bg-muted/20 p-6 rounded-lg text-center">
            <Image src={icon} alt="" className="mx-auto w-12 h-12 mb-4" width={100} height={100} />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
}

"use client"
import { HERO_PAGE_CONTENT } from "@/config/HeroPageConfig";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { Check } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export function FeaturesImage() {
    return (
        <div className="py-8 md:py-12 px-10 lg:px-24 flex flex-col lg:flex-row items-center justify-around rounded-lg space-y-1 lg:space-y-0 lg:space-x-16">

            {/* Left side: Image and customization preview */}
            <div className="relative">
                {/* Background image  */}
                <MotionxInView>
                    <div className="relative w-full max-w-xs mx-auto">
                        <Image
                            src={HERO_PAGE_CONTENT.FeatureImage.imagePath}
                            alt="Invoice preview"
                            width={350}
                            height={350}
                            priority={true}
                            className="rounded-lg" />
                    </div>
                </MotionxInView>
            </div>

            {/* Image Description */}
            <div className="md:text-left max-w-lg mb-10 md:mb-0 text-center space-y-4">
                <h1 className="text-xl sm:text-3xl font-bold mb-4 capitalize text-left sm:text-left">{HERO_PAGE_CONTENT.FeatureImage.title}</h1>
                <p className="mb-6 text-justify text-xs md:text-sm capitalize" >{HERO_PAGE_CONTENT.FeatureImage.description}</p>

                {HERO_PAGE_CONTENT.FeatureImage.tagliens.map((item, index) => (
                    <div key={index * 5} className="flex mb-2 text-xs md:text-sm capitalize" >
                        <span className="bg-teal-500 rounded-full h-4 w-4 sm:h-6 sm:w-6 flex items-center justify-center mr-3">
                            <Check className="size-3 sm:size-5 text-white" />
                        </span>
                        {item}
                    </div>
                ))}

                <CustomButton className="mb-8 md:mb-0 mt-8  bg-orange-500 hover:bg-orange-600 text-white font-semibold md:py- px-8 rounded-full">Learn More</CustomButton>
            </div>
        </div>
    );
}

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
                    <CustomDeatisCard icon={card.icon}
                        key={index * 5}
                        title={card.title}
                        description={card.description}
                        className='p-6 rounded-lg shadow-none border-b bg-white' />
                ))}
            </div>

        </>
    )
}

function CustomDeatisCard({ icon, title, description, className }:
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

function CustomButton({ children, className }:
    { children: ReactNode, className?: string }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <div className={cn("text-black p-2 bg-gray-400 rounded-sm", className)}>{children}</div>
        </motion.button>
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

function MotionxInView({ children, x = -100, duration = 0.5 }:
    { children: ReactNode, x?: number, duration?: number }) {
    return (
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: x }}
            transition={{ duration: duration }}

        >{children}</motion.div>
    )
}

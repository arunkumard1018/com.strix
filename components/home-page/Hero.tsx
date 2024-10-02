"use client"
import ShinyButton from "@/components/magicui/shiny-button";
import WordRotate from "@/components/magicui/word-rotate";
import { HERO_PAGE_CONTENT } from "@/config/HeroPageConfig";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { CustomButton } from "../custom/elements";
import { MotionxInView } from "../custom/Motions";



export function HeroText({ className }: { className?: string }) {
    return (
        <div className={cn("pt-28 md:pt-36 flex-col items-center justify-center space-y-4", className)}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-center md:flex items-center justify-center">
                Create&nbsp;
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
                    Invoice&nbsp;</span>
                <div className="flex justify-center items-center">
                    <div className="relative"><WordRotate
                        className="text-5xl md:text-7xl font-extrabold inline-block w-[6ch] text-center"
                        words={["Manage", "Get Paid"]} />
                    </div>
                </div>
            </h1>
            <p className="text-center text-xl text-muted-foreground capitalize">Free Invoice Software to create Invoices in Seconds</p>
            <div className="flex justify-center items-center space-x-4">
                <ShinyButton text="Get Started Now" className="rounded-full bg-black text-foreground px-3 sm:px-6" textClassName="text-white" />
                <ShinyButton text="Explore Demo" className="rounded-full" />
            </div>
        </div>
    )
}

export function SecondaryHeroSection() {
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



import ShinyButton from "@/components/magicui/shiny-button";
import WordRotate from "@/components/magicui/word-rotate";
import Image from "next/image";





export function HeroText() {
    return (
        <div className="mt-20 md:mt-24 flex-col items-center justify-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center md:flex items-center justify-center">
                Create
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
                    Invoice.</span>
                <div className="flex justify-center items-center">
                    <div className="relative"><WordRotate
                        className="text-5xl md:text-7xl font-extrabold inline-block w-[6ch] text-center"
                        words={["Manage", "Get Paid"]} />
                    </div>
                </div>
            </h1>
            <p className="text-center text-xl text-muted-foreground">Free Invoice Software to create Invoices in Seconds</p>
            <div className="flex justify-center items-center space-x-4">
                <ShinyButton text="Get Started Now" className="rounded-full bg-black text-foreground px-3 sm:px-6" textClassName="text-white" />
                <ShinyButton text="Explore Demo" className="rounded-full" />
            </div>
        </div>
    )
}

export function HeroImage() {
    return (
        <div className="mt-20">
            <div className="hidden md:flex items-center justify-center border">
                <div className="relative md:w-full md:h-[90vh] pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                    <Image src="/img/primary-image.jpg" alt="" fill objectFit="fit" />
                </div>
            </div>
            <div className="flex items-center justify-center md:hidden">
                <div className="relative  w-[80vw] h-[70vh]">
                    <Image src="/img/primary-image-mob.jpg" alt="" fill objectFit="fit" />
                </div>
            </div>
        </div>
    )
}



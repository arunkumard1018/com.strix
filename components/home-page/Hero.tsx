import ShinyButton from "@/components/magicui/shiny-button";
import WordRotate from "@/components/magicui/word-rotate";
import { cn } from "@/lib/utils";
import Image from "next/image";





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



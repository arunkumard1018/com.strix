import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';
import { AlignJustify, LogInIcon, Package2 } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from 'framer-motion';


function AppLogo({ className }: { className?: string }) {
    return (
        <div className={cn("flex space-x-1 items-center justify-center", className)}>
            <div className='w-[40px] h-[40px] relative z-10'><Image src="/icons/nav-logo.jpg" alt='' fill sizes='w-40px h-40px' quality={100} /></div>
            <div className='hidden md:block w-[100px] h-[45px] relative'><Image src="/icons/nav-logo-text-black.png" alt='' fill sizes='w-100px h-45px' quality={100} /></div>
            <div className='md:hidden flex flex-col p-0 m-0 justify-center text-left'>
                <span className='p-0 m-0 leading-snug font-bold'>Strix</span>
                <span className='p-0 m-0 text-3xl leading-[20px] font-extrabold'>Invoice</span>
            </div>
        </div>
    )
}

export function NavList({ className, LinkClassName, list }: { className?: string, LinkClassName?: string, list: string[] }) {
    return (
        <div className={cn(className)}>
            {list.map((item) => (
                <Link href="/" className={cn(LinkClassName)} key={item}>{item}</Link>
            ))}
        </div>
    )
}

export function SheetComponent({ side = "right" }:
    { side?: 'left' | 'right' | 'bottom' | 'top' }) {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <AlignJustify className="md:hidden size-7" />
            </SheetTrigger>

            <SheetContent side={side} className="m-0 p-0 px-4 py-4">

                <nav className="grid text-lg font-medium">
                    <Link href="#" className="">
                        <SheetTitle className="flex flex-row">
                            <Package2 className="h-6 w-6" />
                            <span className="text-xl" >StrixInvoice</span>
                        </SheetTitle>
                    </Link>
                    <SheetDescription />
                    <NavList className="flex flex-col space-y-3 pt-10 text-xl" list={["All Features", "Pricing", "Invoicing", "Product", "Blog"]} />

                    <div className="pt-2 ">
                        <Link href="/login" className="flex items-center py-1  ">
                            Login<LogInIcon className="size-4 mt-1 ml-1" />
                        </Link>
                    </div>
                </nav>

            </SheetContent>

        </Sheet>
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

export { AppLogo, CustomButton };


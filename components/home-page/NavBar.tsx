"use client"
import { AppLogo, NavList, SheetComponent } from "@/components/custom/elements";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
    const pathname = usePathname();
    return (
        <nav className="h-16 bg-white flex justify-between items-center shadow-sm px-2 md:px-36 fixed top-0 w-full z-50">
            <Link href="/"><AppLogo className="" /></Link>
            <div className="hidden md:block">
                <NavList className="space-x-6 mt-2 text-lg "
                    list={["Pricing", "Invoicing", "Product", "Blog"]}
                    LinkClassName="hover:bg-muted py-2 px-4 rounded rounded-md" />
            </div>
            <div className="flex justify-between items-center space-x-4 mt-2">
                {pathname !== "/login" &&
                    <Link href="/login">
                        <Button className="p-4  hidden md:flex items-center justify-between bg-muted/45" variant={"ghost"}>
                            Login<LogInIcon className="size-4 ml-1 " />
                        </Button>
                    </Link>}

                {pathname !== "/register" &&
                    <Link href="/register"><Button className=" md:p-4 " variant={"default"}>Register</Button></Link>}
                
                <SheetComponent side="left" />
            </div>
        </nav>
    )
}

export default NavBar
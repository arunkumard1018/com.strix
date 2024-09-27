import { AppLogo, NavList, SheetComponent } from "@/components/custom/elements";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NavBar() {
    return (
        <nav className="h-12 flex justify-between items-center my-2">
            <div><AppLogo className="" /></div>
            <div className="hidden md:block"><NavList className="space-x-6 mt-2 text-lg  "
                LinkClassName="hover:bg-muted py-2 px-4 rounded-full" /></div>
            <div className="flex justify-between items-center space-x-4 mt-2">
                <Link href="/login"><Button className="p-4 rounded-full hidden md:flex" variant={"ghost"}>Login</Button></Link>
                <Link href="/register"><Button className="p-4 rounded-full" variant={"default"}>Register</Button></Link>
                {/* <AlignJustify className="md:hidden" /> */}
                <SheetComponent />
            </div>
        </nav>
    )
}

export default NavBar
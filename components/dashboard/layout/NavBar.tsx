'use client'
import { BusinessSelect } from "@/components/custom/BusinessSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/providers/ThemeSelect"
import { setActiveBusiness } from "@/store/slices/userSlice"
import { RootState } from "@/store/store"
import { Menu, Package2, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DashboardLinks from "./DashboardLinks"
import { UserMenu } from "./elements"
import { updateActiveBusiness } from "@/service/data/BusinessData"
import { useToast } from "@/hooks/use-toast"


function NavBar({ className }: { className?: string }) {

    const dispatch = useDispatch();
    const userData = useSelector((state: RootState) => state.user);
    const {toast} = useToast();

    const [sheetOpen, setsheetOpen] = useState(false)
    function closeSheet() {
        setsheetOpen(!sheetOpen);
    }

    const handleBusinessChange = async (id: string) => {
        const response = await updateActiveBusiness(parseInt(id));
        if (response) {
            dispatch(setActiveBusiness(parseInt(id)));
            const updatedBusiness = userData.businesses.find(business => business.id === parseInt(id));
            toast({
                variant: "success",
                title: "Business Updated Successfully !",
                description:`Active Business Changed to ${updatedBusiness?.name}` ,
                duration: 4000,
            });
        }else{
            toast({
                variant: "destructive",
                title: "Failed to Update the Business",
                duration: 4000,
            });
        }
        console.log("Update Business to ", id);
    }

    return (
        <>
            <div className="fixed z-50">
                <header className={cn(" flex items-center border-b bg-muted/100 space-x-2 px-2 md:px-0", className)}>
                    <Sheet open={sheetOpen} onOpenChange={setsheetOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid  text-lg font-medium">
                                <Link href="#"
                                    className="flex items-center  text-lg font-semibold mb-4">
                                    <SheetTitle className="flex items-center space-x-3">
                                        <Package2 className="h-6 w-6" />
                                        <span className="text-3xl" >StrixInvoice</span>
                                    </SheetTitle>
                                </Link>
                                <SheetDescription />
                                <DashboardLinks navClassName="px-0 py-4 " LinkClassName="px-2 py-2 text-lg" onLinkClick={closeSheet} />
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex flex-row space-x-8">

                        <BusinessSelect label="Select Business"
                            className="w-[180px] md:w-[250px] border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
                            Placeholder={userData.activeBusiness?.name}
                            onChange={handleBusinessChange}
                            business={userData.businesses} />

                        <form className="w-full hidden sm:block">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 outline-none border-none"
                                />
                            </div>
                        </form>

                    </div>

                    <ModeToggle />
                    <UserMenu />
                </header>
            </div>

            <form className="w-full px-2 sm:hidden mt-16">
                <div className="relative shadow-sm rounded-md">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3
                        rounded-md"
                    />
                </div>
            </form>
        </>
    )
}





export default NavBar


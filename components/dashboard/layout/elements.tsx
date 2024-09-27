import { logoff } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { clearUser } from "@/store/slices/userSlice"
import { RootState } from "@/store/store"
import { CircleUser } from "lucide-react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const UserMenu = () => {
    const activeUser = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    
    function doLogout(){
        logoff();
        dispatch(clearUser())
    }
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <Link href="#"><DropdownMenuLabel>{activeUser.name}</DropdownMenuLabel></Link>
                <DropdownMenuSeparator />
                <Link href="#"><DropdownMenuItem>Profile</DropdownMenuItem></Link>
                <Link href="#"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                <Link href="#"><DropdownMenuItem>Support</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={doLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export {UserMenu}
"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { MoreHorizontal } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ConfirmationDialog } from "./ConfirmationDialog"
import { useRouter } from "next/navigation"

export function ActionsDropDownRow({ id, name, path, itemName, deleteFunction, revalidator }:
    {
        id: number | string, name: string, path: string, itemName?: string,
        deleteFunction: (id: number) => Promise<boolean>,
        revalidator: () => void
    }) {

    const [isDialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility
    const { toast } = useToast()
    const route = useRouter();


    const handleDelete = async () => {

        console.log(`Deleting business with id: ${id}`);
        const resp = await deleteFunction(Number(id));
        if (resp) {
            toast({
                variant: "success",
                title: `${name} ${itemName} Delted Successfuly.`,
                duration: 2000,
            })
            revalidator();
            route.refresh();
            
        } else {
            toast({
                variant: "destructive",
                title: `Unable to Delete ${name} ${itemName}.`,
                duration: 2000,
            })
        }
        setDialogOpen(false);
    };

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(String(id))}>
                        Copy {name} ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link href={`${path}/add-business/${id}`}>
                        <DropdownMenuItem>Update {name}</DropdownMenuItem>
                    </Link>

                    <DropdownMenuItem onClick={() => setDialogOpen(true)}>Delete {name}</DropdownMenuItem> {/* Open Dialog */}
                </DropdownMenuContent>
            </DropdownMenu>


            {/* Alert Dialog for Deletion */}
            <ConfirmationDialog
                open={isDialogOpen}
                onOpenChange={setDialogOpen}
                title={`Delete ${itemName}?`}
                description={`Are you sure you want to delete ${name}? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                onConfirm={handleDelete} // Pass delete logic
            />

        </div>
    )
}





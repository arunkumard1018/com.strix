"use client"

import { ActionsDropDownRow } from "@/components/reusable-table/ActionDropDownRow"
import { Business } from "@/lib/definations"
import { deleteBusiness } from "@/service/data/BusinessData"
import { resetBusiness } from "@/store/slices/businessSlice"
import { resetBusinessList } from "@/store/slices/userSlice"
import { ColumnDef, Row } from "@tanstack/react-table"
import { ChevronsUpDown } from "lucide-react"
import Image from "next/image"
import { useDispatch } from "react-redux"

export const Businesscolumns: ColumnDef<Business>[] = [

    {
        id: "businessLogo",
        accessorKey: "businessLogo",
        header: "Logo",
        cell: ({ row }) => (
            <div className="relative size-14">
                <Image
                    alt="logo"
                    fill
                    className="aspect-square rounded-md object-contain"
                    // height="64"
                    src={row.getValue("businessLogo")}
                // width="64"
                />
            </div>
        ),

    },


    {
        id: "name",
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <div className="flex items-center justify-start cursor-pointer capitalize" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >
                    Business Name
                    <ChevronsUpDown className="h-4 w-4" />
                </div>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },


    {
        id: "businessType",
        accessorKey: "businessType",
        header: "Business Type",
        cell: ({ row }) => (
            <div className="capitalize table-cell">{row.getValue("businessType")}</div>
        ),
    },

    {
        id: "gstin",
        accessorKey: "gstin",
        header: "GSTIN",
        cell: ({ row }) => (
            <div className="capitalize table-cell">{row.getValue("gstin")}</div>
        ),
    },

    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => <BusinessActionsCell row={row} />
    },
]

const BusinessActionsCell = ({ row }: { row: Row<Business> }) => {
    const dispatch = useDispatch();
    const business = row.original;

    return (
        <ActionsDropDownRow
            deleteFunction={deleteBusiness}
            revalidator={() => {
                dispatch(resetBusiness());
                dispatch(resetBusinessList());
            }}
            id={business.id}
            itemName={business.name}
            name="Business"
            path="/dashboard/business"
        />
    );
}

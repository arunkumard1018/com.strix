"use client"

import { ActionsDropDownRow } from "@/components/reusable-table/ActionDropDownRow"
import { useToast } from "@/hooks/use-toast"
import { Business } from "@/lib/definations"
import { deleteBusiness, fetchBusinessList } from "@/service/data/BusinessData"
import { resetBusiness } from "@/store/slices/businessSlice"
import { resetBusinessList } from "@/store/slices/userSlice"
import { RootState } from "@/store/store"
import { ColumnDef } from "@tanstack/react-table"
import { ChevronsUpDown } from "lucide-react"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"

export const Businesscolumns: ColumnDef<Business>[] = [

    {
        id: "businessLogo",
        accessorKey: "businessLogo",
        header: "Logo",
        cell: ({ row }) => (
            <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src={row.getValue("businessLogo")}
                width="64"
            />
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
        cell: ({ row }) => {
            const business = row.original
            const dispatch = useDispatch();

            return (
                <ActionsDropDownRow
                    deleteFunction={deleteBusiness}

                    revalidator={() => {
                        dispatch(resetBusiness())
                        dispatch(resetBusinessList())
                    }}
                    id={business.id}
                    itemName={business.name}
                    name="Business"
                    path="/dashboard/business" />
            )
        },
    },
]



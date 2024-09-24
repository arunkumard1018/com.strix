"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Business } from "@/store/slices/userSlice";
import { Skeleton } from "../ui/skeleton";

type SelectProps = {
    className?: string,
    Placeholder?: string,
    label: string,
    business: Business[],
    onChange : (id:string) => void;
}

export function BusinessSelect({ className, Placeholder, label, business, onChange }: SelectProps) {
    return (
        <Select onValueChange={(value) => onChange(value)} >
            <SelectTrigger className={cn("w-[180px]", className)} >
                {Placeholder ? <SelectValue placeholder={Placeholder} /> : <Skeleton className="h-6 w-[100px]" />}
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {business.map((item) => (
                        <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

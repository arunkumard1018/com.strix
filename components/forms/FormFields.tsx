import { Input } from "@/components/ui/input"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { UseFormReturn } from "react-hook-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { BusinessFormData } from "@/lib/schemas"

interface TextInputProps {
    name: keyof BusinessFormData;
    label: string
    placeholder?: string
    description?: string
    form: UseFormReturn<BusinessFormData>
}

export const TextInput: React.FC<TextInputProps> = ({ name, label, placeholder, description, form }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-2">
                    <FormLabel className="text-sm">{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} value={field.value ?? ''} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

interface NumberInputProps {
    name: keyof BusinessFormData;
    label: string
    placeholder?: string
    description?: string
    form: UseFormReturn<BusinessFormData>
}

export const NumberInput : React.FC<NumberInputProps> = ({ name, label, placeholder, description, form }) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-2">
                    <FormLabel className="text-sm">{label}</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder={placeholder} {...field} value={field.value} />
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}


interface SelectInputProps {
    name: keyof BusinessFormData;
    label: string
    placeholder?: string
    options: string[]
    form: UseFormReturn<BusinessFormData>
    className?:string
}
export const SelectInput: React.FC<SelectInputProps> = ({ name, label, placeholder, options, form ,className}) => {
    return (
        <FormField 
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem className={cn("w-full",className)}>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={typeof field.value === 'string' ? field.value : undefined}>
                            <SelectTrigger>
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

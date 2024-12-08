"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { cuisines } from "@/constants/index";
import Form from "next/form"

export function CuisineForm({ setCuisine }: {setCuisine: (cuisine: string) => void}) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? cuisines.find((cuisine) => cuisine.value === value)?.label
                        : "Select cuisine..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search cuisine..." />
                    <CommandList>
                        <CommandEmpty>No cuisine found.</CommandEmpty>
                        <CommandGroup>
                            {cuisines.map((cuisine) => (
                             
                                        <CommandItem
                                            key={cuisine.value}
                                            value={cuisine.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue);
                                                setCuisine(cuisine.value)
                                                setOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === cuisine.value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {cuisine.label}
                                        </CommandItem>
                                   
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

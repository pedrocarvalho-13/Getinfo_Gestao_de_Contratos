import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { CommandInput, CommandList, CommandEmpty, CommandItem } from "cmdk";
import { ChevronDown, Command } from "lucide-react";
import { useState } from "react";
import { FieldValues, Path, Control, Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { InputType } from "@/types/inputTypes";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type SelectOption = {
    label: string;
    value: string;
};

type InputProps<T extends FieldValues> = {
    label?: string;
    type?: InputType;
    name?: Path<T>;
    placeholder?: string;
    control?: Control<T>; // agora opcional
    select?: boolean;
    options?: SelectOption[];
    value?: string; // Novo
    onChange?: (value: string) => void; // Novo
    readOnly?: boolean
    maxLength?: number
};

export const InputComponent = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    type = "text",
    select,
    options = [],
    value,
    onChange,
    readOnly,
    maxLength
}: InputProps<T>) => {
    const [open, setOpen] = useState(false);

    const renderInput = (val?: string, onChangeFunc?: (value: string) => void) => {
        return select ? (
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="flex items-end w-full justify-between">
                        {options.find(opt => opt.value === val)?.label || placeholder}
                        <ChevronDown className="ml-2 h-4  opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput placeholder={placeholder} />
                        <CommandList>
                            <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={() => {
                                        onChangeFunc?.(option.value)
                                        setOpen(false);
                                    }}
                                >
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        ) : (
            <Input
                id={name}
                value={val}
                onChange={(e) => onChangeFunc?.(e.target.value)}
                placeholder={placeholder}
                type={type}
                readOnly={readOnly}
                maxLength={maxLength}
                className="w-full"
            />
        );
    };

    return (
        <div className="grid w-full items-center gap-1.5">
            {label && <Label htmlFor={name}>{label}</Label>}
            {control && name
                ? (
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => renderInput(field.value, field.onChange)}
                    />
                )
                : renderInput(value, onChange)}
        </div>
    );
};






// "use client"
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { InputType } from "@/types/inputTypes";
// import { Control, Controller, FieldValues, Path } from "react-hook-form";

// import { cn } from "@/lib/utils";
// import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
// import { CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "cmdk";
// import { ChevronsUpDown, Command, Check, ChevronDown } from "lucide-react";
// import { Button } from "../ui/button";
// import React, { useState } from "react"

// type SelectOption = {
//     label: string;
//     value: string;
// };

// type InputProps<T extends FieldValues> = {
//     label?: string;
//     type?: InputType;
//     name: Path<T>;
//     placeholder?: string;
//     control: Control<T>;
//     select?: boolean;
//     options?: SelectOption[]; // usado quando for select
// };

// export const InputComponent = <T extends FieldValues>({
//     name,
//     label,
//     placeholder,
//     control,
//     type,
//     select,
//     options = [],
// }: InputProps<T>) => {
//     const [open, setOpen] = useState(false)
//     // const [selected, setSelected] = useState("")
//     return (

//         <div className="grid w-full items-center gap-1.5">
//             {label && <Label htmlFor={name}>{label}</Label>}

//             <Controller
//                 name={name}
//                 control={control}
//                 render={({ field }) =>
//                     select ? (
//                         // <Select onValueChange={field.onChange} defaultValue={field.value}>

//                         //     <SelectTrigger className="w-full">
//                         //         <SelectValue placeholder={placeholder} />
//                         //     </SelectTrigger>
//                         //     <SelectContent>
//                         //         {options.map((option) => (
//                         //             <SelectItem key={option.value} value={option.value}>
//                         //                 {option.label}
//                         //             </SelectItem>
//                         //         ))}
//                         //     </SelectContent>
//                         // </Select>

//                         <Popover open={open} onOpenChange={setOpen}>
//                             <PopoverTrigger asChild>
//                                 <Button variant="outline" className="flex items-end w-full justify-between">
//                                     {
//                                         options.find(opt => opt.value === field.value)?.label || placeholder
//                                     }
//                                     <ChevronDown className="ml-2 h-4  opacity-50" />
//                                 </Button>
//                             </PopoverTrigger>
//                             <PopoverContent className="w-full p-0">
//                                 <Command>
//                                     <CommandInput placeholder={placeholder} />
//                                     <CommandList>
//                                         <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
//                                         {options.map((option) => (
//                                             <CommandItem
//                                                 key={option.value}
//                                                 value={option.value}
//                                                 onSelect={() => {
//                                                     // setSelected(option.label)
//                                                     field.onChange(option.value)
//                                                     setOpen(false)
//                                                 }}
//                                             >
//                                                 {option.label}
//                                             </CommandItem>
//                                         ))}
//                                     </CommandList>
//                                 </Command>
//                             </PopoverContent>
//                         </Popover>

//                     ) : (
//                         <Input
//                             {...field}
//                             id={name}
//                             placeholder={placeholder}
//                             type={type}
//                             className="w-full"
//                         />
//                     )
//                 }
//             />
//         </div>
//     );
// };

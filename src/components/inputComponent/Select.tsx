'use client';

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select"; // Caminho do ShadCN, não o Radix direto
import { Controller, Control, FieldValues, Path } from "react-hook-form";

type SelectProps<T extends FieldValues> = {
    label?: string;
    name: Path<T>;
    placeholder?: string;
    control?: Control<T>;
    value?: string; // Novo
    onChange?: (value: string) => void; // Novo
    options: { label: string; value: number }[];
};

export function SelectInput<T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    options,
}: SelectProps<T>) {
    return (
        <div className="grid w-full items-start gap-1.5">
            {label && <label className="text-sm font-medium">{label}</label>}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Select 
                        onValueChange={(value) => field.onChange(Number(value))} 
                        defaultValue={field.value?.toString()}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {options.map((option) => (
                                    <SelectItem key={option.value} value={option.value.toString()}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                )}
            />
        </div>
    );
}
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@radix-ui/react-select";
// import { FieldValues, Path, Control, Controller } from "react-hook-form";

// type SelectProps<T extends FieldValues> = {
//     label?: string;
//     name?: Path<T>;
//     placeholder?: string;
//     control?: Control<T>; // Agora opcional
//     options: { label: string; value: string }[];
//     value?: string; // Novo
//     onChange?: (value: string) => void; // Novo
// };

// export function SelectInput<T extends FieldValues>({
//     name,
//     label,
//     placeholder,
//     control,
//     options,
//     value,
//     onChange,
// }: SelectProps<T>) {
//     const renderSelect = (val?: string, onChangeFunc?: (value: string) => void) => (
//         // <Select onValueChange={onChangeFunc} defaultValue={val}>
//         //     <SelectTrigger className="w-full">
//         //         <SelectValue placeholder={placeholder} />
//         //     </SelectTrigger>
//         //     <SelectContent>
//         //         <SelectGroup>
//         //             {options.map((option) => (
//         //                 <SelectItem key={option.value} value={option.value}>
//         //                     {option.label}
//         //                 </SelectItem>
//         //             ))}
//         //         </SelectGroup>
//         //     </SelectContent>
//         // </Select>

//             <Select onValueChange={onChangeFunc} defaultValue={val}>
//                 <SelectTrigger className="w-full">
//                     <SelectValue placeholder={placeholder} />
//                 </SelectTrigger>
//                 <SelectContent>
//                     <SelectGroup>
//                         {options.map((option) => (
//                             <SelectItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </SelectItem>
//                         ))}
//                     </SelectGroup>
//                 </SelectContent>
//             </Select>
//     );

//     return (
//         <div className="grid w-full items-start gap-1.5">
//             {label && <label className="text-sm font-medium">{label}</label>}
//             {control && name
//                 ? (
//                     <Controller
//                         name={name}
//                         control={control}
//                         render={({ field }) => renderSelect(field.value, field.onChange)}
//                     />
//                 )
//                 : renderSelect(value, onChange)}
//         </div>
//     );
// }

'use client';

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

type Option = { label: string; value: number | string };

type SelectProps<T extends FieldValues> = {
    label?: string;
    name?: Path<T>; // Agora opcional
    placeholder?: string;
    control?: Control<T>; // Agora opcional
    options: Option[];
    value?: string | number;
    onChange?: (value: string) => void;
};

export function SelectInput<T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    options,
    value,
    onChange,
}: SelectProps<T>) {
    const renderSelect = (val?: string, onChangeFunc?: (value: string) => void) => (
        <Select onValueChange={onChangeFunc} defaultValue={val?.toString()}>
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
    );

    return (
        <div className="grid w-full items-start gap-1.5">
            {label && <label className="text-sm font-medium">{label}</label>}
            {control && name ? (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) =>
                        renderSelect(field.value?.toString(), (val) => field.onChange(Number(val)))
                    }
                />
            ) : (
                renderSelect(value?.toString(), onChange)
            )}
        </div>
    );
}

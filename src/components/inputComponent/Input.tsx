import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputType } from "@/types/inputTypes";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Option = {
    label: string;
    value: string;
};

type InputProps<T extends FieldValues> = {
    label?: string;
    type?: InputType;
    name: Path<T>;
    placeholder?: string;
    control?: Control<T>;
    select?: boolean;
    options?: Option[]; // usado quando for select
};

export const InputComponent = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    type,
    select,
    options = [],
}: InputProps<T>) => {
    return (
        <div className="grid w-full items-center gap-1.5">
            {label && <Label htmlFor={name}>{label}</Label>}

            <Controller
                name={name}
                control={control}
                render={({ field }) =>
                    select ? (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {options.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    ) : (
                        <Input
                            {...field}
                            id={name}
                            placeholder={placeholder}
                            type={type}
                            className="w-full"
                        />
                    )
                }
            />
        </div>
    );
};

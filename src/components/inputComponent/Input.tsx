import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputType } from "@/types/inputTypes"
import { Control, Controller, FieldValues, Path } from "react-hook-form"

type InputProps<T extends FieldValues> = {
    label?: string
    type: InputType
    name: Path<T>
    placeholder: string
    control: Control<T>
}

export const InputComponent = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    type,
}: InputProps<T>) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            {label && <Label htmlFor={name}>{label}</Label>}

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        id={name}
                        placeholder={placeholder}
                        type={type}
                    />
                )}
            />
        </div>
    )
}

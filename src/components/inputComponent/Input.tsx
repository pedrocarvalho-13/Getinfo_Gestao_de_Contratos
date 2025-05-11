import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { InputType } from "@/types/inputTypes"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import InputMask from "react-input-mask-next"
import { ReactElement, InputHTMLAttributes } from "react"

type InputProps<T extends FieldValues> = {
    label?: string
    type: InputType
    name: Path<T>
    placeholder: string
    control: Control<T>
    mask?: string
}

export const InputComponent = <T extends FieldValues>({
    name,
    label,
    placeholder,
    control,
    mask,
    type,
}: InputProps<T>) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            {label && <Label htmlFor={name}>{label}</Label>}

            <Controller
                name={name}
                control={control}
                render={({ field }) => {
                    if (mask) {
                        return (
                            <InputMask
                                mask={mask}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                ref={field.ref}
                            >
                                {(inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                                    // Aqui, garantimos que o inputProps é do tipo correto e o retorno é um ReactNode
                                    <Input
                                        {...inputProps}
                                        id={name}
                                        placeholder={placeholder}
                                        type={type}
                                    />
                                )}
                            </InputMask>
                        )
                    }

                    return (
                        <Input
                            {...field}
                            id={name}
                            placeholder={placeholder}
                            type={type}
                        />
                    )
                }}
            />
        </div>
    )
}

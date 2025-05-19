import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InputComponent } from "./Input"
import { Plus } from "lucide-react"
import { colaboratorFormData } from "@/types/colaboratorFormData"
import { InputType } from "@/types/inputTypes"
import { Label } from "@/components/ui/label";

import { Control, Controller, FieldValues, Path } from "react-hook-form";


interface ColaboradorStepProps {
    label: string,
    name: string,
    type: InputType
    placeholder: string,
    control: Control<colaboratorFormData>
    readOnly?: boolean;
}

export function CheckInputComponent({ label, name, type, placeholder, control, readOnly }: ColaboradorStepProps) {
    return (
        <div className="grid w-full max-w-sm items-center h-full">
            {label && <Label htmlFor={name}>{label}</Label>}
            <div className="flex items-center justify-start">

                <Controller
                    name="situacao"
                    control={control}
                    defaultValue={false} // isso é importante!
                    render={({ field: { onChange, onBlur, name, ref, value } }) => (
                        <div className="flex items-center gap-2 ml-2">
                            <input
                                type="checkbox"
                                checked={!!value} // Isso já basta
                                onChange={(e) => onChange(e.target.checked)}
                                className="w-4 h-4"
                                id="situacao"
                                name={name}
                                ref={ref}
                                onBlur={onBlur}
                                readOnly={readOnly}
                            />
                            <label htmlFor="situacao">Marque se o colaborador está ativo</label>
                        </div>
                    )}
                />
            </div>
        </div>
    )
}
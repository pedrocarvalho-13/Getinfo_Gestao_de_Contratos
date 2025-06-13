import { Button } from "@/components/ui/button"
import { InputComponent } from "./Input"
import { Control } from "react-hook-form"
import { Plus } from "lucide-react"
import { colaboratorFormData } from "@/types/colaboratorFormData"
import { InputType } from "@/types/inputTypes"

interface ColaboradorStepProps {
    label: string,
    name: string,
    type: InputType,
    placeholder: string,
    control: Control<colaboratorFormData>;
}

export function InputAddComponent({ label, name, type, placeholder, control }: ColaboradorStepProps) {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="" className="bg-gray-">{label}</label>
            <div className="flex gap-1 items-center justify-center">

                <InputComponent type={type} name={name} placeholder={placeholder} control={control} />
                <Button type="button" className="px-4 py-5 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]">
                    <Plus />
                </Button>
            </div>
        </div>
    )
}
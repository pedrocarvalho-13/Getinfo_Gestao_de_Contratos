import { InputComponent } from "@/components/inputComponent/Input";
import { InputAddComponent } from "@/components/inputComponent/InputAdd";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { formDataProps } from "@/types/formPropsType";
import { Control, ErrorOption, FieldArray, FieldArrayPath, FieldError, FieldErrors, FieldName, FieldValues, FormState, InternalFieldName, ReadFormState, RegisterOptions, SubmitErrorHandler, SubmitHandler, UseFormRegisterReturn } from "react-hook-form";

interface AdressCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function ColaboradoresContractStep({ control }: AdressCompanyStepProps) {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Colaboradores</h2>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* CEP */}
                <InputAddComponent control={control} label={"Digite o CPF do Colaborador"} name={"cpfColaborador"} type={"text"} placeholder={"000.000.000-00"} />
            </div>
        </div>
    )
}
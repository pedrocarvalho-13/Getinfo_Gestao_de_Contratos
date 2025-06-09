import { CheckInputComponent } from "@/components/inputComponent/CheckBoxInput";
import { InputComponent } from "@/components/inputComponent/Input";
import { colaboratorFormData } from "@/types/colaboratorFormData";
// import { EmpresaFormData } from "@/types/EmpresaFormData";
import { Control } from "react-hook-form";
// import { formDataProps } from "@/types/formPropsType";

interface DataAgregadoStepProps {
    control: Control<colaboratorFormData>;
}

export default function DataAgregadoViewStep({ control }: DataAgregadoStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos do Colaborador</h2>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 w-full">
                        <div className="w-[16vw]">

                            {/* CNPJ */}
                            <InputComponent
                                label="CPF"
                                type={"text"}
                                name={"cpf"}
                                placeholder={"00.000.000/0000-00"}
                                control={control}
                                mask="___.___.___-__"
                                readOnly={true}
                                />
                        </div>

                        {/* Razão Social */}
                        <InputComponent
                            label="Nome do Colaborador"
                            type={"text"}
                            name={"nome"}
                            placeholder={"Nome Completo"}
                            control={control}
                            readOnly={true}
                            />
                    </div>
                    <div className="grid grid-cols-2 gap-2">

                        {/* Nome Fantasia */}
                        <InputComponent
                            label="Cargo"
                            type={"text"}
                            name={"cargo"}
                            placeholder={"Técnico Nível II"}
                            control={control}
                            readOnly={true}
                            />

                        <div>
                            <CheckInputComponent 
                            label={"Situação"} 
                            name={"colaboradores.situacao"} 
                            type={"checkbox"} 
                            placeholder={""} 
                            readOnly={true}
                            control={control}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
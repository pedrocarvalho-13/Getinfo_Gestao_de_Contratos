import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { Control } from "react-hook-form";
// import { formDataProps } from "@/types/formPropsType";

interface DataCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function DataAgregadoStep({ control }: DataCompanyStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos do Contrato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* CNPJ */}
                    <InputComponent
                        label="CPF"
                        type={"text"}
                        name={"cpf"}
                        placeholder={"00.000.000/0000-00"}
                        control={control}
                    />

                    {/* Razão Social */}
                    <InputComponent
                        label="Nome do Colaborador"
                        type={"text"}
                        name={"nomeColaborador"}
                        placeholder={"Nome Completo"}
                        control={control}
                    />

                    {/* Nome Fantasia */}
                    <InputComponent
                        label="Cargo"
                        type={"text"}
                        name={"cargoColaborador"}
                        placeholder={"Técnico Nível II"}
                        control={control}
                    />

                    {/* Inscrição Estadual */}
                    <InputComponent
                        label="Situação"
                        type={"text"}
                        name={"statusColaborador"}
                        placeholder={"Ativou ou Inativo"}
                        control={control}
                    />
                </div>
            </div>
        </div>
    )
}
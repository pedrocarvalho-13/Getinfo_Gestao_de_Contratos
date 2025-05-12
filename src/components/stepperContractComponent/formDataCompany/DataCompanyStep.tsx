import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { Control } from "react-hook-form";
// import { formDataProps } from "@/types/formPropsType";

interface DataCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function DataContractStep({ control }: DataCompanyStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos do Contrato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* CNPJ */}
                    <InputComponent
                        label="CNPJ"
                        type={"text"}
                        name={"cnpj"}
                        placeholder={"00.000.000/0000-00"}
                        control={control}
                    />

                    {/* Razão Social */}
                    <InputComponent
                        label="Nome da Empresa"
                        type={"text"}
                        name={"nomeEmpresa"}
                        placeholder={"Digite o nome da empresa"}
                        control={control}
                    />

                    {/* Nome Fantasia */}
                    <InputComponent
                        label="Responsável pelo Contrato"
                        type={"text"}
                        name={"responsavelContrato"}
                        placeholder={"Nome Completo"}
                        control={control}
                    />

                    {/* Inscrição Estadual */}
                    <InputComponent
                        label="Data de Início"
                        type={"date"}
                        name={"dataInicio"}
                        placeholder={"000000000"}
                        control={control}
                    />

                    {/* Inscrição Municipal */}
                    <InputComponent
                        label="Data Final"
                        type={"date"}
                        name={"dataFinal"}
                        placeholder={"000000000"}
                        control={control}
                    />

                    {/* Data de Fundação */}
                    <InputComponent label="Tipo de Contrato" select={true} name={"Tipo de Contrato"} placeholder="-.-" control={control} />
                </div>
            </div>
        </div>
    )
}
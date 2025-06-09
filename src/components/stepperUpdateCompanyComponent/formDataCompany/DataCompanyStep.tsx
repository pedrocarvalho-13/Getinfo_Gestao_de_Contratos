import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { EmpresaFormData } from "@/types/EmpresaFormData";
import { Control } from "react-hook-form";
// import { formDataProps } from "@/types/formPropsType";

interface DataCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function DataCompanyStep({ control }: DataCompanyStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos da Empresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* CNPJ */}
                    <InputComponent
                        label="CNPJ"
                        type={"text"}
                        name={"cnpj"}
                        placeholder={"00.000.000/0000-00"}
                        control={control}
                        maxLength={14}
                        mask="__.___.___/____-__"
                    />

                    {/* Razão Social */}
                    <InputComponent
                        label="Razão Social"
                        type={"text"}
                        name={"razaoSocial"}
                        placeholder={"Digite a razão social da empresa"}
                        control={control}
                    />

                    {/* Nome Fantasia */}
                    <InputComponent
                        label="Nome Fantasia"
                        type={"text"}
                        name={"nomeFantasia"}
                        placeholder={"Digite o nome fantasia da empresa"}
                        control={control}
                    />

                    {/* Inscrição Estadual */}
                    <InputComponent
                        label="Inscrição Estadual"
                        type={"text"}
                        name={"inscricaoEstadual"}
                        placeholder={"000000000"}
                        control={control}
                    />

                    {/* Inscrição Municipal */}
                    <InputComponent
                        label="Inscrição Municipal"
                        type={"text"}
                        name={"inscricaoMunicipal"}
                        placeholder={"000000000"}
                        control={control}
                    />

                    {/* Data de Fundação */}
                    <InputComponent
                        label="Data de Fundação"
                        type={"date"}
                        name={"dataFundacao"}
                        control={control}
                    />

                    <SelectInput
                        name={"tipoEmpresa"}
                        label="Tipo de Empresa"
                        placeholder={"Selecione um tipo"}
                        control={control}
                        options={[
                            { label: "Público", value: 0 },
                            { label: "Privado", value: 1 },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}
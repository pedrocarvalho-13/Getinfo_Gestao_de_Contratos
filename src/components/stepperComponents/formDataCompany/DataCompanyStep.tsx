import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
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
                        placeholder={"000000000"}
                        control={control}
                    />
                </div>
            </div>
        </div>
    )
}
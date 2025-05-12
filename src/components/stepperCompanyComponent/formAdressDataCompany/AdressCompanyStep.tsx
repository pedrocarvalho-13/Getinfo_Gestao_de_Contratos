import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { formDataProps } from "@/types/formPropsType";
import { Control } from "react-hook-form";

interface AdressCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function AddressCompanyStep({ control }: AdressCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Endereço da Empresa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* CEP */}
                <InputComponent
                    label="CEP"
                    type={"text"}
                    name={"cep"}
                    placeholder={"49000-00"}
                    control={control}
                />


                {/* Rua */}
                <InputComponent
                    label="Rua"
                    type={"text"}
                    name={"rua"}
                    placeholder={"Av. Presidente Tancredo Neves"}
                    control={control}
                />

                {/* Numero */}
                <InputComponent
                    label="Número"
                    type={"text"}
                    name={"numeroDaCasa"}
                    placeholder={"0000"}
                    control={control}
                />

                {/* Bairro */}
                <InputComponent
                    label="Bairro"
                    type={"text"}
                    name={"bairro"}
                    placeholder={"São José"}
                    control={control}
                />


                {/* Cidade */}
                <InputComponent
                    label="Cidade"
                    type={"text"}
                    name={"cidade"}
                    placeholder={"Aracaju"}
                    control={control}
                />

                {/* Estado */}
                <InputComponent
                    label="Estado"
                    type={"text"}
                    name={"estado"}
                    placeholder={"Sergipe"}
                    control={control}
                />
            </div>
        </div>
    )
}
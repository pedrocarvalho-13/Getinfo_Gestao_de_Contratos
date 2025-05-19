import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EmpresaFormData";
import { Control } from "react-hook-form";

interface ContactCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function ContactViewCompanyStep({ control }: ContactCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informações para Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Telefone Celular */}
                <InputComponent
                    label="Telefone Celular"
                    type={"text"}
                    name={"telefone"}
                    placeholder={"(99) 99999-9999"}
                    control={control}
                    readOnly={true}
                    />

                {/* Telefone Fixo */}
                <InputComponent
                    label="Telefone Fixo"
                    type={"text"}
                    name={"telefoneFixo"}
                    placeholder={"(99) 99999-9999"}
                    control={control}
                    readOnly={true}
                    />

                {/* Email Corporativo */}
                <InputComponent
                    label="Email Corporativo"
                    type={"text"}
                    name={"emailCorporativo"}
                    placeholder={"exemplo@gmail.com"}
                    control={control}
                    readOnly={true}
                    />
                {/* Website */}
                <InputComponent
                    label="Website"
                    type={"text"}
                    name={"site"}
                    placeholder={"https://www.empresa.com.br"}
                    control={control}
                    readOnly={true}
                />
            </div>
        </div>
    )
}
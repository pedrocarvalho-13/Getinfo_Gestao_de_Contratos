import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EmpresaFormData";
import { formBankProps } from "@/types/formPropsType";
import { Control } from "react-hook-form";

interface LegalCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function LegalViewCompanyStep({ control }: LegalCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informações do Responsável Legal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CPF */}
                <InputComponent
                    label="CPF"
                    type={"text"}
                    name={"responsavelLegalCpf"}
                    placeholder={"000.000.000-00"}
                    control={control}
                    mask="___.___.___-__"
                    readOnly={true}
                    />

                {/* Nome Completo */}
                <InputComponent
                    label="Nome Completo"
                    type={"text"}
                    name={"responsavelLegalNome"}
                    placeholder={"Nome do responsável legal"}
                    control={control}
                    readOnly={true}
                    />

                {/* Telefone Celular */}
                <InputComponent
                    label="Telefone Celular"
                    type={"text"}
                    name={"telefoneLegal"}
                    placeholder={"(99) 99999-9999"}
                    control={control}
                    mask="(__) _____-____"
                    readOnly={true}
                    />

                {/* Email Legal */}
                <InputComponent
                    label="Email Legal"
                    type={"text"}
                    name={"responsavelLegalEmail"}
                    placeholder={"exemplo@gmail.com"}
                    control={control}
                    readOnly={true}
                />

            </div>
        </div>
    )
}

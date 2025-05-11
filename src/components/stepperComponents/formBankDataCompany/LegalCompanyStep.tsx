import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { formBankProps } from "@/types/formPropsType";
import { Control } from "react-hook-form";

interface LegalCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function LegalCompanyStep({ control }: LegalCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informações Bancárias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CPF */}
                <InputComponent
                    label="CPF"
                    type={"text"}
                    name={"cpfLegal"}
                    placeholder={"000.000.000-00"}
                    mask={"000.000.000-00"}
                    control={control}
                />

                {/* Nome Completo */}
                <InputComponent
                    label="Nome Completo"
                    type={"text"}
                    name={"nomeResponsavelLegal"}
                    placeholder={"Nome do responsável legal"}
                    control={control}
                />

                {/* Telefone Celular */}
                <InputComponent
                    label="Telefone Celular"
                    type={"text"}
                    name={"telefone"}
                    placeholder={"(99) 99999-9999"}
                    mask={"(99) 99999-9999"}
                    control={control}
                />

                {/* Email Legal */}
                <InputComponent
                    label="Email Legal"
                    type={"text"}
                    name={"emailLegal"}
                    placeholder={"exemplo@gmail.com"}
                    control={control}
                />

            </div>
        </div>
    )
}

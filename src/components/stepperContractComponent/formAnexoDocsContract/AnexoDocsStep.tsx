import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { formBankProps } from "@/types/formPropsType";
import { Control } from "react-hook-form";

interface LegalCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function AnexoDocsStepStep({ control }: LegalCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Documentos Anexados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CPF */}
                <input type="file" name="" id="" className="border-1"/>

            </div>
        </div>
    )
}

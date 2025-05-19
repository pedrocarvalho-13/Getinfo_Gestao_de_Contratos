import { InputComponent } from "@/components/inputComponent/Input";
import Style from "@/Styles/style.module.css"
import { ContractFormData } from "@/types/contractFormData";
import { Control } from "react-hook-form";

interface LegalCompanyStepProps {
    control: Control<ContractFormData>;
}

export default function AnexoDocsStepStep({ control }: LegalCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Documentos Anexados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CPF */}
                {/* <input type="file" name="" id="" className="border-1"/> */}
                <input type="file" placeholder="Anexe um arquivo" className={`${Style.fileInput} block placeholder-gray-500 curso-pointer border border-gray-200`}/>
            </div>
        </div>
    )
}

import { InputComponent } from "@/components/inputComponent/Input";
import { InputAddComponent } from "@/components/inputComponent/InputAdd";
import { Textarea } from "@/components/ui/textarea";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { Control } from "react-hook-form";

interface ContactCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function ContactEntregaveisStep({ control }: ContactCompanyStepProps) {
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Entregáveis</h2>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* CEP */}
                {/* <InputAddComponent control={control} label={"Adicionar Entregaveis"} name={"entregaveis"} type={"text"} placeholder={"Descreva o Entregável"} /> */}
                <InputComponent control={control} label={"Título do Entregável"} name={"entregaveis"} type={"text"} placeholder={"Descreva o Entregável"} />
                <InputComponent control={control} label={"Data de Entrega"} name={"entregaveis"} type={"date"} placeholder={"Descreva o Entregável"} />
                <InputComponent control={control} label={"Responsável pelo Entregável"} name={"entregaveis"} type={"text"} placeholder={"Descreva o Entregável"} />
                <div className="w-full">
                    <label htmlFor="" className="font-medium text-sm">Descreva o Entregável</label>
                    <Textarea className=" flex w-full" />
                </div>
            </div>

        </div>
    )
}
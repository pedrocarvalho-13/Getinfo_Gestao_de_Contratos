import { SelectInput } from "@/components/inputComponent/Select";
import { InputComponent } from "@/components/inputComponent/Input";
import { AditivoFormData } from "@/types/aditivoFormData";
import { Control } from "react-hook-form";

interface DataAditivoStepProps {
    control: Control<AditivoFormData>;
}

export default function DataAditivoStep({ control }: DataAditivoStepProps) {
    const tiposAditivo = [
        { nome: "Prazo", idTipo: "Prazo" },
        { nome: "Valor", idTipo: "Valor" },
        { nome: "Escopo", idTipo: "Escopo" },
        { nome: "Outros", idTipo: "Outros" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados do Aditivo Contratual</h2>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <SelectInput
                            name="tipoAditivo"
                            label="Tipo de Aditivo"
                            placeholder="Selecione o tipo"
                            options={tiposAditivo.map((tipo) => ({
                                label: tipo.nome,
                                value: tipo.idTipo
                            }))}
                            control={control}
                        />
                        
                        <InputComponent
                            label="Data de Vigência"
                            type="date"
                            name="dataVigencia"
                            placeholder=""
                            control={control}
                        />
                    </div>

                    <InputComponent
                        label="Descrição"
                        type="text"
                        name="descricao"
                        placeholder="Descreva as alterações do aditivo"
                        control={control}
                    />

                    <InputComponent
                        label="Justificativa"
                        type="text"
                        name="justificativa"
                        placeholder="Justifique a necessidade do aditivo"
                        control={control}
                    />

                    <InputComponent
                        label="Documento (Base64)"
                        type="text"
                        name="documentoBase64"
                        placeholder="Cole aqui o documento em Base64 (opcional)"
                        control={control}
                    />
                </div>
            </div>
        </div>
    );
}
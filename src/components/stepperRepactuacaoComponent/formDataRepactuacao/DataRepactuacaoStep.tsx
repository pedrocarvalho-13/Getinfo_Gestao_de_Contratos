import { InputComponent } from "@/components/inputComponent/Input";
import { RepactuacaoFormData } from "@/types/repactuacaoFormData";
import { Control } from "react-hook-form";

interface DataRepactuacaoStepProps {
    control: Control<RepactuacaoFormData>;
}

export default function DataRepactuacaoStep({ control }: DataRepactuacaoStepProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados da Repactuação Contratual</h2>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <InputComponent
                            label="Nome da Repactuação"
                            type="text"
                            name="nome"
                            placeholder="Digite o nome da repactuação"
                            control={control}
                        />
                        
                        <InputComponent
                            label="Nova data de Repactuação"
                            type="date"
                            name="dtFimContrato"
                            placeholder=""
                            control={control}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <InputComponent
                            label="Descrição"
                            type="text"
                            name="descricao"
                            placeholder="Descreva os detalhes da repactuação"
                            control={control}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
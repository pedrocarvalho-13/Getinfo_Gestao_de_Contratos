"use client";
import { Control, useFieldArray } from "react-hook-form";
import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { Trash, Plus } from "lucide-react";
import { ContractFormData } from "@/types/contractFormData";

interface Props {
    control: Control<ContractFormData>;
    index: number;
    colaborators: { id: number; nome: string; cargo: string }[];
}

export function ResponsaveisFieldArray({ control, index, colaborators }: Props) {
    const {
        fields: responsaveis,
        append,
        remove,
    } = useFieldArray({
        control,
        name: `entregaveis.${index}.responsaveis`,
    });

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Responsáveis pelo Entregável</h3>

            {responsaveis.map((resp, rIndex) => (
                <div key={resp.id} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
                    <SelectInput
                        name={`entregaveis.${index}.responsaveis.${rIndex}.id`}
                        label="Nome do Agregado"
                        placeholder="Selecione um agregado"
                        control={control}
                        options={colaborators.map((c) => ({
                            label: c.nome,
                            value: c.id,
                        }))}
                    />

                    <InputComponent
                        name={`entregaveis.${index}.responsaveis.${rIndex}.funcaoContrato`}
                        label="Função"
                        type="text"
                        placeholder="Informe a função"
                        control={control}
                    />

                    <button
                        type="button"
                        onClick={() => remove(rIndex)}
                        className="text-red-500 underline hover:text-red-700 mb-3"
                    >
                        <Trash size={18} />
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={() => append({ id: "", funcaoContrato: "" })}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                <Plus className="inline-block mr-1" size={16} /> Adicionar Responsável
            </button>
        </div>
    );
}

"use client";

import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { ContractFormDataUpdate } from "@/types/contractFormDataUpdate";
import axios from "axios";
import { LoaderCircle, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, useFieldArray } from "react-hook-form";

interface ColaboradoresContractProps {
    control: Control<ContractFormDataUpdate>;
    idContrato: string;
}

interface Colaborador {
    id: number;
    nome: string;
    funcaoContrato: string;
}

export default function ColaboradoresContractStep({ control, idContrato }: ColaboradoresContractProps) {
    const [colaboratorsList, setColaboratorsList] = useState<Colaborador[]>([]);
    const [allColaborators, setAllColaborators] = useState<Colaborador[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const { fields, append, remove, replace } = useFieldArray({
        control,
        name: "colaboradores",
    });

    useEffect(() => {
        let isMounted = true;

        axios.get(`https://gestaocontratual.onrender.com/colaboradores/por-contrato/${idContrato}`)
            .then((response) => {
                if (isMounted) {
                    const agregados = response.data.map((colab: Colaborador) => ({
                        id: colab.id,
                        funcaoContrato: colab.funcaoContrato || "",
                    }));

                    replace(agregados);
                    setColaboratorsList(response.data);
                }
            })
            .catch((error) => {
                console.error("Erro ao buscar agregados:", error);
            });

        return () => {
            isMounted = false;
        };
    }, [idContrato, replace]);

    useEffect(() => {
        axios.get("https://gestaocontratual.onrender.com/colaboradores")
            .then((response) => {
                setAllColaborators(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar todos os colaboradores:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <LoaderCircle className="text-[#03a796] m-auto animate-spin size-10" />;
    console.log(colaboratorsList)
    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Agregados</h2>

            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 items-center justify-between"
                >
                    <SelectInput
                        name={`colaboradores.${index}.id`}
                        label="Nome do Agregado"
                        placeholder="Selecione um agregado"
                        control={control}
                        options={allColaborators.map(c => ({
                            label: c.nome,
                            value: c.id,
                        }))}
                    />

                    <InputComponent
                        name={`colaboradores.${index}.funcaoContrato`}
                        label="Função"
                        type="text"
                        placeholder="Informe a função do agregado no contrato"
                        control={control}
                    />

                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500 underline hover:text-red-700 mt-4"
                        aria-label="Remover agregado"
                    >
                        <Trash />
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={() => append({ id: 0, funcaoContrato: "" })}
                className="mt-4 px-4 py-2 bg-[#5fe0d5] text-black rounded hover:bg-[#68c0ba] focus:bg-[#5fe0d5] transition"
            >
                Adicionar Novo Agregado
            </button>
        </div>
    );
}

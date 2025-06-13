import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { SelectInputS } from "@/components/inputComponent/SelectString";
import { Textarea } from "@/components/ui/textarea";
import { ContractFormData } from "@/types/contractFormData";
import axios from "axios";
import {  Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

interface ContactCompanyStepProps {
    control: Control<ContractFormData>;
}

interface Colaborator {
    id: number;
    nome: string;
    cargo: string;
}

export default function ContractEntregaveisStep({ control }: ContactCompanyStepProps) {
    const [colaborators, setColaborators] = useState<Colaborator[]>([]);

    const { fields, append, remove } = useFieldArray({
        control,
        name: "entregaveis",
    });

    useEffect(() => {
        axios.get("https://gestaocontratual.onrender.com/colaboradores")
            .then((response) => {
                setColaborators(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar colaboradores:", error);
            });
    }, []);

    return (
        <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">Entregáveis</h2>
            {fields.map((field, index) => (
                <div key = {index} className="grid w-full grid-cols-1 md:grid-cols-2  lg:flex lg:flex-col gap-2 items-center justify-between py-4">

                    <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 w-full">
                        <InputComponent
                            control={control}
                            label={"Título do Entregável"}
                            name={`entregaveis.${index}.nome`}
                            type={"text"}
                            placeholder={"Desenvolver Página de Login"}
                        />
                        <div className="flex gap-2">

                            <InputComponent
                                control={control}
                                label={"Data de Início"}
                                name={`entregaveis.${index}.dtInicio`}
                                type={"date"}
                            />
                            <InputComponent
                                control={control}
                                label={"Data de Entrega"}
                                name={`entregaveis.${index}.dtFim`}
                                type={"date"}
                            />
                        </div>

                        <SelectInputS
                            name={`entregaveis.${index}.Status`}
                            label="Status do Entregável"
                            placeholder={"A fazer | Fazendo | Feito"}
                            control={control}
                            options={[
                                { label: "A fazer", value: "A_FAZER" },
                                { label: "Fazendo", value: "FAZENDO" },
                                { label: "Feito", value: "FEITO" },
                            ]}
                        />
                        <div className="flex gap-2">

                            <SelectInput
                                name={`entregaveis.${index}.colaboradores.0.id`}
                                label="Responsável pelo Entregável"
                                placeholder="Selecione um agregado"
                                control={control}
                                options={colaborators.map(c => ({
                                    label: c.nome,
                                    value: c.id,
                                }))}
                            />
                            <InputComponent
                                control={control}
                                label={"Função"}
                                name={`entregaveis.${index}.colaboradores.0.funcaoEntregavel`}
                                placeholder="Digite a função"
                                type={"text"}
                            />
                        </div>

                    </div>


                    <div className="flex flex-col w-full">
                        <label htmlFor="" className="font-medium text-sm">Descreva o Entregável</label>
                        <Controller
                            control={control}
                            name={`entregaveis.${index}.descricao`}
                            render={({ field }) => (
                                <Textarea
                                    rows={10}
                                    className="flex w-[68vw] h-[16vh]"
                                    {...field}
                                />
                            )}
                        />
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-500 underline hover:text-red-700 mt-2"
                        >
                            <Trash />
                        </button>
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={() => append({ nome: "", dtInicio: "", dtFim: "", Status: "", descricao: "", colaboradores: [{ id: 0, funcaoEntregavel: "" }] })}
                className="mt-4 px-4 py-2 bg-[#5fe0d5] text-black rounded hover:bg-[#68c0ba] focus:bg-[#5fe0d5] transition"
            >
                Adicionar Novo Entregável
            </button>

        </div>
    )
}
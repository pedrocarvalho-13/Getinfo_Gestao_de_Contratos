import { InputComponent } from "@/components/inputComponent/Input";
import { InputAddComponent } from "@/components/inputComponent/InputAdd";
import { SelectInput } from "@/components/inputComponent/Select";
import { SelectInputS } from "@/components/inputComponent/SelectString";
import { Textarea } from "@/components/ui/textarea";
import { ContractFormData } from "@/types/contractFormData";
import axios from "axios";
import { Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

interface ContactCompanyStepProps {
    control: Control<ContractFormData>;
    idContrato: string;
}

interface Colaborador {
    id: number;
    cpf: string;
    nome: string;
    cargo: string;
    situacao: boolean;
    funcaocontrato: string;
}

interface Entregavel {
    id: number;
    nome: string;
    dtFim: string;
    status: string;
    colaborador: Colaborador[];
}

export default function ContractViewEntregaveisStep({ control, idContrato }: ContactCompanyStepProps) {
    const [entregavel, setEntregavel] = useState<Entregavel[]>([]);

    const { fields, append, remove } = useFieldArray({
        control,
        name: "entregaveis",
    });

    useEffect(() => {
        axios.get(`https://gestaocontratual.onrender.com/entregaveis/contrato/${idContrato}`)
            .then((response) => {
                setEntregavel(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar entregavel:", error);
            });
    }, []);

    const listaTeste = [
        {
            titulo: "Task 01",
            dueTo: "10/10/2025",
            responsavel: "Pedro",
        },
        {
            titulo: "Task 01",
            dueTo: "10/10/2025",
            responsavel: "Pedro",
        },
        {
            titulo: "Task 01",
            dueTo: "10/10/2025",
            responsavel: "Pedro",
        },
    ]
    return (
        <div className="flex h-fit w-full gap-2 items-start justify-between">
            <div className="flex flex-col h-full w-full items-start justify-start gap-1">
                <label className="flex font-bold bg-gray-200 rounded-t-md h-[5vh] w-full text-center  items-center justify-center">A fazer</label>
                <ul className="flex flex-col w-full text-sm rounded-b-md gap-2 bg-gray-200 p-1 items-center justify-center">
                    {
                        entregavel.filter(task => task.status === "A_FAZER").length === 0 ? (
                            <p>Sem tasks para fazer</p>
                        ) : (
                            entregavel
                                .filter(task => task.status === "A_FAZER")
                                .map((task) => (
                                    <li key={task.id} className="flex flex-col w-full bg-gray-50 rounded-md p-2 shadow-2xl">
                                        <div className="flex items-center justify-between">
                                            <p>{task.nome}</p>
                                            <p>{task.dtFim}</p>
                                        </div>
                                        <p>{task.colaborador[0]?.cpf}</p>                                    </li>
                                ))
                        )
                    }
                </ul>
            </div>
            <div className="flex flex-col h-fit w-full items-center justify-start gap-1">
                <label className="flex font-bold bg-gray-200 rounded-t-md h-[5vh] w-full text-center  items-center justify-center">Fazendo</label>
                <ul className="flex flex-col w-full text-sm rounded-md gap-2 bg-gray-200 p-1 items-center justify-center">
                    {
                        entregavel.filter(task => task.status === "FAZENDO").length === 0 ? (
                            <p>Sem tasks para fazer</p>
                        ) : (
                            entregavel
                                .filter(task => task.status === "FAZENDO")
                                .map((task) => (
                                    <li key={task.id} className="flex flex-col w-full bg-gray-50 rounded-md p-2 shadow-2xl">
                                        <div className="flex items-center justify-between">
                                            <p>{task.nome}</p>
                                            <p>{task.dtFim}</p>
                                        </div>
                                        <p>{task.colaborador[0]?.cpf}</p>
                                    </li>
                                ))
                            )
                    }
                </ul>
            </div>
            <div className="flex flex-col h-fit w-full items-center justify-start gap-1">
                <label className="flex font-bold bg-gray-200 rounded-t-md h-[5vh] w-full text-center  items-center justify-center">Feito</label>
                <ul className="flex flex-col w-full text-sm rounded-md gap-2 bg-gray-200 p-1 items-center justify-center">
                    {
                        entregavel.filter(task => task.status === "FEITO").length === 0 ? (
                            <p>Sem tasks para fazer</p>
                        ) : (
                            entregavel
                                .filter(task => task.status === "FEITO")
                                .map((task) => (
                                    <li key={task.id} className="flex flex-col w-full bg-gray-50 rounded-md p-2 shadow-2xl">
                                        <div className="flex items-center justify-between">
                                            <p>{task.nome}</p>
                                            <p>{task.dtFim}</p>
                                        </div>
                                        <p>{task.colaborador[0]?.cpf}</p>
                                    </li>
                                ))
                        )
                    }
                </ul>
            </div>


        </div>
        // <div className="w-full">
        //     <h2 className="text-2xl font-bold mb-6">Entregáveis</h2>
        //     {fields.map((field, index) => (
        //         <div key = {index} className="grid w-full grid-cols-1 md:grid-cols-2  lg:flex lg:flex-col gap-2 items-center justify-between py-4">

        //             <div className="flex flex-col gap-2 lg:grid lg:grid-cols-2 w-full">
        //                 <InputComponent
        //                     control={control}
        //                     label={"Título do Entregável"}
        //                     name={`entregaveis.${index}.nome`}
        //                     type={"text"}
        //                     placeholder={"Desenvolver Página de Login"}
        //                 />
        //                 <div className="flex gap-2">

        //                     <InputComponent
        //                         control={control}
        //                         label={"Data de Início"}
        //                         name={`entregaveis.${index}.dtInicio`}
        //                         type={"date"}
        //                     />
        //                     <InputComponent
        //                         control={control}
        //                         label={"Data de Entrega"}
        //                         name={`entregaveis.${index}.dtFim`}
        //                         type={"date"}
        //                     />
        //                 </div>

        //                 <SelectInputS
        //                     name={`entregaveis.${index}.Status`}
        //                     label="Status do Entregável"
        //                     placeholder={"A fazer | Fazendo | Feito"}
        //                     control={control}
        //                     options={[
        //                         { label: "A fazer", value: "A_FAZER" },
        //                         { label: "Fazendo", value: "FAZENDO" },
        //                         { label: "Feito", value: "FEITO" },
        //                     ]}
        //                 />
        //                 <div className="flex gap-2">

        //                     <SelectInput
        //                         name={`entregaveis.${index}.colaboradores.0.id`}
        //                         label="Responsável pelo Entregável"
        //                         placeholder="Selecione um agregado"
        //                         control={control}
        //                         options={colaborators.map(c => ({
        //                             label: c.nome,
        //                             value: c.id,
        //                         }))}
        //                     />
        //                     <InputComponent
        //                         control={control}
        //                         label={"Função"}
        //                         name={`entregaveis.${index}.colaboradores.0.funcaoEntregavel`}
        //                         placeholder="Digite a função"
        //                         type={"text"}
        //                     />
        //                 </div>

        //             </div>


        //             <div className="flex flex-col w-full">
        //                 <label htmlFor="" className="font-medium text-sm">Descreva o Entregável</label>
        //                 <Controller
        //                     control={control}
        //                     name={`entregaveis.${index}.descricao`}
        //                     render={({ field }) => (
        //                         <Textarea
        //                             rows={10}
        //                             className="flex w-[68vw] h-[16vh]"
        //                             {...field}
        //                         />
        //                     )}
        //                 />
        //                 <button
        //                     type="button"
        //                     onClick={() => remove(index)}
        //                     className="text-red-500 underline hover:text-red-700 mt-2"
        //                 >
        //                     <Trash />
        //                 </button>
        //             </div>
        //         </div>
        //     ))}
        //     <button
        //         type="button"
        //         onClick={() => append({ nome: "", dtInicio: "", dtFim: "", Status: "", descricao: "", colaboradores: [{ id: 0, funcaoEntregavel: "" }] })}
        //         className="mt-4 px-4 py-2 bg-[#5fe0d5] text-black rounded hover:bg-[#68c0ba] focus:bg-[#5fe0d5] transition"
        //     >
        //         Adicionar Entregável
        //     </button>

        // </div>
    )
}
"use client";

// import { InputComponent } from "@/components/inputComponent/Input";
// import { InputAddComponent } from "@/components/inputComponent/InputAdd";
// import { SelectInput } from "@/components/inputComponent/Select";
// import { SelectInputS } from "@/components/inputComponent/SelectString";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Textarea } from "@/components/ui/textarea";
import { ContractFormData } from "@/types/contractFormData";
// import { Popover } from "@radix-ui/react-popover";
import axios from "axios";
// import { Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Control } from "react-hook-form";

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
    dtInicio: string;
    dtFim: string;
    status: string;
    descricao: string;
    colaborador: Colaborador[];
}

export default function ContractViewEntregaveisStep({ idContrato }: ContactCompanyStepProps) {
    const [entregavel, setEntregavel] = useState<Entregavel[]>([]);

    // const { fields, append, remove } = useFieldArray({
    //     control,
    //     name: "entregaveis",
    // });

    useEffect(() => {
        axios.get(`https://gestaocontratual.onrender.com/entregaveis/contrato/${idContrato}`)
            .then((response) => {
                setEntregavel(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar entregavel:", error);
            });
    }, [idContrato]); // Adicione idContrato como dependência

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
                                    // Linha 68: Adicionando key ao Popover
                                    <Popover key={task.id}>
                                        <PopoverTrigger className="flex w-full items-center justify-start cursor-pointer">
                                            {/* O li não precisa de key pois já está dentro de um componente com key */}
                                            <li className="flex flex-col w-full items-center justify-between gap-2 bg-gray-50 rounded-md p-2 shadow-2xl">
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <p>{task.nome}</p>
                                                    <p>{task.dtFim}</p>
                                                </div>
                                                <p className="w-full text-start">{task.colaborador[0]?.nome}</p>
                                            </li>
                                        </PopoverTrigger>
                                        <PopoverContent side="top" className="flex flex-col h-fit w-fit bg-gray-300 ml-[15vw]">
                                            <div className="flex flex-col gap-4 ">
                                                <div className="flex w-full gap-2 items-center justify-between">
                                                    <div className="flex flex-col bg-gray-100 w-[30vw] rounded-md p-2">
                                                        <p className="font-bold ">Título do Entregável:</p>
                                                        <p className="">{task.nome}</p>
                                                    </div>
                                                    <div className="flex w-fit gap-2 text-center items-center justify-between">
                                                        <div className="flex flex-col w-[16vw] bg-gray-100  rounded-md p-2">
                                                            <p className="font-bold">Inicio Desejado</p>
                                                            <p>{task.dtInicio}</p>
                                                        </div>
                                                        <div className="flex flex-col bg-gray-100 w-[16vw] rounded-md p-2">
                                                            <p className="font-bold">Término Desejado</p>
                                                            <p>{task.dtFim}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                    <p className="font-bold">Executor Previsto:</p>
                                                    <p className="w-full text-start">{task.colaborador[0]?.nome}</p>
                                                </div>
                                                <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                    <p className="font-bold">Descrição da entrega:</p>
                                                    <p>{task.descricao}</p>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
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
                                    // Linha 122: Adicionando key ao Popover
                                    <Popover key={task.id}>
                                        <PopoverTrigger className="flex w-full items-center justify-start cursor-pointer">
                                            {/* O li não precisa de key */}
                                            <li className="flex flex-col w-full items-center justify-between gap-2 bg-gray-50 rounded-md p-2 shadow-2xl">
                                                <div className="flex w-full items-start justify-between gap-2">
                                                    <p className="w-[14vw] text-start">{task.nome}</p>
                                                    <p>{task.dtFim}</p>
                                                </div>
                                                <p className="w-full text-start">{task.colaborador[0]?.nome}</p>
                                            </li>
                                        </PopoverTrigger>
                                        <PopoverContent className="flex flex-col h-fit w-fit bg-gray-300">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex w-full gap-2 items-center justify-between">
                                                    <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                        <p className="font-bold">Título do Entregável:</p>
                                                        <p className="">{task.nome}</p>
                                                    </div>
                                                    <div className="flex w-fit gap-2 text-center items-center justify-between">
                                                        <div className="flex flex-col w-[20vw] bg-gray-100  rounded-md p-2">
                                                            <p className="font-bold">Inicio Desejado</p>
                                                            <p>{task.dtInicio}</p>
                                                        </div>
                                                        <div className="flex flex-col bg-gray-100 w-[20vw] rounded-md p-2">
                                                            <p className="font-bold">Término Desejado</p>
                                                            <p>{task.dtFim}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                    <p className="font-bold">Executor Previsto:</p>
                                                    <p>{task.colaborador[0]?.nome}</p>
                                                </div>
                                                <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                    <p className="font-bold">Descrição da entrega:</p>
                                                    <p>{task.descricao}</p>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
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
                                    // Linha 176: Adicionando key ao Popover
                                    <Popover key={task.id}>
                                        <PopoverTrigger className="flex w-full items-center justify-start cursor-pointer">
                                            {/* O li não precisa de key */}
                                            <li className="flex flex-col w-full items-center justify-between gap-2 bg-gray-50 rounded-md p-2 shadow-2xl">
                                                <div className="flex w-full items-center justify-between gap-2">
                                                    <p>{task.nome}</p>
                                                    <p>{task.dtFim}</p>
                                                </div>
                                                <p className="text-start w-full">{task.colaborador[0]?.nome}</p>
                                            </li>
                                        </PopoverTrigger>
                                        <PopoverContent className="flex flex-col h-fit w-fit bg-gray-300 mr-[15vw]">
                                            <div className="flex flex-col gap-4">
                                                <div className="flex w-full gap-2 items-center justify-between">
                                                    <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                        <p className="font-bold">Título do Entregável:</p>
                                                        <p className="">{task.nome}</p>
                                                    </div>
                                                    <div className="flex w-fit gap-2 text-center items-center justify-between">
                                                        <div className="flex flex-col w-[20vw] bg-gray-100  rounded-md p-2">
                                                            <p className="font-bold">Inicio Desejado</p>
                                                            <p>{task.dtInicio}</p>
                                                        </div>
                                                        <div className="flex flex-col bg-gray-100 w-[20vw] rounded-md p-2">
                                                            <p className="font-bold">Término Desejado</p>
                                                            <p>{task.dtFim}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                    <p className="font-bold">Executor Previsto:</p>
                                                    <p>{task.colaborador[0]?.nome}</p>
                                                </div>
                                                <div className="flex flex-col bg-gray-100 w-full rounded-md p-2">
                                                    <p className="font-bold">Descrição da entrega:</p>
                                                    <p>{task.descricao}</p>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                ))
                        )
                    }
                </ul>
            </div>
        </div>
    );
}
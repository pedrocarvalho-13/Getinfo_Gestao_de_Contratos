"use client";

import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { ContractFormData } from "@/types/contractFormData";
import axios from "axios";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, useFieldArray } from "react-hook-form";

interface ColaboradoresContractProps {
    control: Control<ContractFormData>;
    idContrato: string
}

interface Colaborator {
    id: number;
    nome: string;
    funcaoContrato: string;
    cargo: string;
}

export default function ColaboradoresContractStep({ control, idContrato }: ColaboradoresContractProps) {
    const [colaborators, setColaborators] = useState<Colaborator[]>([]);

    // Hook para array de campos
    const { fields, append, remove } = useFieldArray({
        control,
        name: "colaboradores",
    });

    // Busca os colaboradores
    useEffect(() => {
        let isMounted = true;


        axios.get(`https://gestaocontratual.onrender.com/colaboradores/por-contrato/${idContrato}`)
        .then((response) => {
            if (isMounted) {
                setColaborators(response.data);
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar colaboradores:", error);
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h1 className="py-6 text-xl font-bold">Agregados</h1>
        <div className="grid grid-cols-2 w-full ml-4 ">
            {colaborators.map((col) => (
                <div className="flex gap-4 w-[34vw] mb-4 h-fit border items-center  rounded-lg p-4 shadow hover:shadow-lg cursor-pointer">
                        
                    <div className="flex flex-col">
                        <p className="font-bold">Nome</p>
                        <p>{col.nome}</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold">Função</p>
                        <p>{col.funcaoContrato}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
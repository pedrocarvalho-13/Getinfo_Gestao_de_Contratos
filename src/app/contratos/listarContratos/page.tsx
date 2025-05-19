'use client'

import { DataTable } from "@/components/dataTable"// import { Payment, columns } from "@/components/payments/columns"
import TitleSection from "@/components/TitleSection/TitleSection"
// import { contractList } from "@/data/contracts"
import { contract } from "@/types/contractType"
import { ColumnDef } from "@tanstack/react-table"

import React, { useEffect, useState } from "react";
import axios from "axios";

interface ContractWithId extends contract {
    idContrato: number;
}

export default function ListarContratos() {
    // "pending" | "processing" | "success" | "failed"
    const [contracts, setContracts] = useState<ContractWithId[]>([]); // Use a nova interface
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const res = await axios.get("https://gestaocontratual.onrender.com/contratos/contratos");
                const contratosComId = res.data.map((contrato: any) => ({
                    ...contrato,
                    idContrato: contrato.idContrato,
                }));
                setContracts(contratosComId);
            } catch (err) {
                console.error("Erro ao buscar dados da API:", err);
            } finally {
                setCarregando(false);
            }
        };
        fetchContracts();
    }, []);

    const handleDelete = async (id: number) => {
        setCarregando(true)
        try {
            await axios.delete(`https://gestaocontratual.onrender.com/contratos/${id}`);
            setContracts((prev) => prev.filter((contrato) => contrato.idContrato !== id));
        } catch (err) {
            console.error("Erro ao deletar contrato:", err);
            alert("Erro ao deletar contrato.");

        } finally {
            setCarregando(false)
        }
    };


    const ColunaContratos: ColumnDef<ContractWithId>[] = [
        {
            header: "N° Contrato",
            accessorKey: "numContrato",
        },
        {
            header: "Nome Empresa",
            accessorKey: "contratante.nomeFantasia",
        },
        {
            header: "Tipo",
            accessorKey: "tipoContrato",
        },
        {
            header: "Início do Contrato",
            accessorKey: "dtInicio",
        },
        {
            header: "Fim do Contrato",
            accessorKey: "dtFim",
        },
        {
            header: "Status",
            accessorKey: "status",
            // cell: ({ row }) => 
            //     row.original.status === 1 ? "Ativo" :
            //     row.original.status === 2 ? "Inativo" :
            //     "Desconhecido"  
        },
    ]

    return (
        <section>
            <TitleSection title={""} />
            <section className="flex flex-col  item-center justify-center m-auto w-full">
                <DataTable columns={ColunaContratos} data={contracts} link={"cadastrarContratos"} onDelete={handleDelete} contentLink={"Cadastrar Contratos"}></DataTable>
            </section>
        </section>
    )
}
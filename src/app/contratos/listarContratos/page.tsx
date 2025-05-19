'use client'

import { DataTable } from "@/components/dataTable"// import { Payment, columns } from "@/components/payments/columns"
import TitleSection from "@/components/TitleSection/TitleSection"
import { contractList } from "@/data/contracts"
import { contract } from "@/types/contractType"
import { ColumnDef } from "@tanstack/react-table"

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListarContratos() {
    // "pending" | "processing" | "success" | "failed"
    const [contracts, setContracts] = useState([]);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        axios
            .get("https://gestaocontratual.onrender.com/contratos/contratos")
            .then((res) => {
                setContracts(res.data);
                setCarregando(false);
            })
            .catch((err) => {
                console.error("Erro ao buscar dados da API:", err);
                setCarregando(false);
            });
    }, []);

    const ColunaContratos: ColumnDef<contract>[] = [
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
            <DataTable columns={ColunaContratos} data={contracts} link={"cadastrarContratos"} contentLink={"Cadastrar Contratos"}></DataTable>
        </section>
    </section>
)
}
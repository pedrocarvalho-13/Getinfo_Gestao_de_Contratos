'use client'

import { DataTable } from "@/components/dataTable"// import { Payment, columns } from "@/components/payments/columns"
import TitleSection from "@/components/TitleSection/TitleSection"

import { ColumnDef } from "@tanstack/react-table"

import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { colaboratorFormData } from "@/types/colaboratorFormData"
import { LoaderCircle } from "lucide-react"


export default function ListarContratos() {
    // "pending" | "processing" | "success" | "failed"
    const [colaboradores, setColaboradores] = useState([]);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        axios
            .get("https://gestaocontratual.onrender.com/colaboradores")
            .then((res) => {
                setColaboradores(res.data);
                setCarregando(false);
            })
            .catch((err) => {
                console.error("Erro ao buscar dados da API:", err);
                setCarregando(false);
            });
    }, []);

    const ColunaColaboradores: ColumnDef<colaboratorFormData>[] = [
        {
            header: "Nome",
            accessorKey: "nome",
        },

        {
            header: "Cargo",
            accessorKey: "cargo",
        },
        {
            header: "Situação",
            accessorKey: "situacao",
            cell: ({ row }) => (row.original.situacao ? "Ativo" : "Inativo")
        },

    ]

    return (
        <section>
            <TitleSection title={""} />
            <section className="flex flex-col  item-center justify-center m-auto w-full">
                <Suspense fallback={<LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" />}>

                    <DataTable columns={ColunaColaboradores} data={colaboradores} link={"cadastrarColaboradores"} contentLink={"Cadastrar Colaboradores"} entityBasePath="/colaboradores"></DataTable>
                </Suspense>
            </section>
        </section>
    )
}
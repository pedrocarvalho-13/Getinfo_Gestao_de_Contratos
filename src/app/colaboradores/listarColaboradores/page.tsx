'use client'

import { DataTable } from "@/components/dataTable"// import { Payment, columns } from "@/components/payments/columns"
import TitleSection from "@/components/TitleSection/TitleSection"

import { ColumnDef } from "@tanstack/react-table"

import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { colaboratorFormData } from "@/types/colaboratorFormData"
import { LoaderCircle } from "lucide-react"

interface ColaboradoresWithId extends colaboratorFormData {
    id: number;
}

export default function ListarContratos() {
    const [colaboradores, setColaboradores] = useState<ColaboradoresWithId[]>([]); // Use a nova interface

    // "pending" | "processing" | "success" | "failed"
    // const [colaboradores, setColaboradores] = useState([]);
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

    const handleDelete = async (id: number) => {
        setCarregando(true)
        try {
            await axios.delete(`https://gestaocontratual.onrender.com/colaboradores/${id}`);
            setColaboradores((prev) => prev.filter((colaboradores) => colaboradores.id !== id));
        } catch (err) {
            console.error("Erro ao deletar colaborador:", err);
            alert("Erro ao deletar colaborador.");

        } finally {
            setCarregando(false)
        }
    };

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

                    <DataTable columns={ColunaColaboradores} data={colaboradores} onDelete={handleDelete} link={"cadastrarColaboradores"} contentLink={"Cadastrar Colaboradores"} entityBasePath="/colaboradores"></DataTable>
                </Suspense>
            </section>
        </section>
    )
}
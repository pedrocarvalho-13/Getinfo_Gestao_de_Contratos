'use client'

import { DataTable } from "@/components/dataTable/DataTable"
import TitleSection from "@/components/TitleSection/TitleSection"
// import { companyList } from "@/data/companie"
import { company } from "@/types/companyType"
// import { contract } from "@/types/contractType"
// import { company } from "@/types/companyType"
import { ColumnDef } from "@tanstack/react-table"

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { EmpresaFormData } from "@/types/EmpresaFormData"

interface ContratantesWithId extends company {
    idContratante: number;
}



export default function ListarEmpresas() {

    const [companies, setCompanies] = useState<ContratantesWithId[]>([]);
    const [carregando, setCarregando] = useState(true);
    useEffect(() => {
        axios
            .get("https://gestaocontratual.onrender.com/contratantes")
            .then((res) => {
                setCompanies(res.data);
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
            await axios.delete(`https://gestaocontratual.onrender.com/contratantes/${id}`);
            setCompanies((prev) => prev.filter((contratantes) => contratantes.idContratante !== id));
        } catch (err) {
            console.error("Erro ao deletar colaborador:", err);
            alert("Erro ao deletar colaborador.");

        } finally {
            setCarregando(false)
        }
    };
    const ColunaCompanies: ColumnDef<company>[] = [
        {
            header: "Nome Empresa",
            accessorKey: "nomeFantasia",
        },
        {
            header: "CNPJ",
            accessorKey: "cnpj",
        },
        {
            header: "Telefone Legal",
            accessorKey: "responsavelLegalTelefone",
        },
        {
            header: "Responsável Legal",
            accessorKey: "responsavelLegalNome",
        },
        // {
        //     header: "Contratos ativos",
        //     accessorKey: "contratos_ativos",
        // },

    ]

    return (
        <section>
            <TitleSection title={"Gestão de Empresas"} />
            <section className="flex flex-col item-center justify-center m-auto w-full">
                {/* <h1 className="text-6xl font-bold">Listar Contrato</h1> */}
                <DataTable columns={ColunaCompanies} data={companies} onDelete={handleDelete} link={"cadastrarEmpresa"} contentLink={"Nova Empresa"} entityBasePath="/empresas"></DataTable>
            </section>
        </section>
    )
}

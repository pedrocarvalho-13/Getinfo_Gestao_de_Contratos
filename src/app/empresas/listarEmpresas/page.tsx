'use client'

import { DataTable } from "@/components/dataTable"
import TitleSection from "@/components/TitleSection/TitleSection"
import { companyList } from "@/data/companie"
import { company } from "@/types/companyType"
// import { contract } from "@/types/contractType"
// import { company } from "@/types/companyType"
import { ColumnDef } from "@tanstack/react-table"

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ListarEmpresas() {

        const [companies, setCompanies] = useState([]);
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

        const ColunaCompanies: ColumnDef<company>[] = [
            {
                header: "Nome Empresa",
                accessorKey: "nomeFantasia",
            },
            {
                header: "CNPJ",
                accessorKey: "cnpj",
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
                    <DataTable columns={ColunaCompanies} data={companies} link={"cadastrarEmpresa"} contentLink={"Cadastrar Empresas"} entityBasePath="/contratantes"></DataTable>
                </section>
            </section>
        )
    }

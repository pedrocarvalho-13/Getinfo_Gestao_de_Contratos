'use client'

import { DataTable } from "@/components/dataTable/DataTable"
import TitleSection from "@/components/TitleSection/TitleSection"
import { contract } from "@/types/contractType" // Certifique-se que o caminho está correto
import { ColumnDef } from "@tanstack/react-table"
import { BaseTableData } from "@/types/common" // Importe BaseTableData
import React, { useEffect, useState } from "react"
import axios from "axios"

// ---
// Alteração Chave 1: Faça ContractWithId estender BaseTableData
// Isso garante que o TypeScript saiba que ContractWithId possui as propriedades de ID necessárias
// que a DataTable espera para o tratamento de ações.
interface ContractWithId extends contract, BaseTableData {
    idContrato: number; // Mantenha esta propriedade, pois é a que você usa para o ID
    // Se 'id' for o nome do ID primário no BaseTableData, você pode precisar mapeá-lo
    // ou garantir que 'idContrato' seja tratado como o ID principal.
    // Ex: id?: number; // Se o ID primário for 'id' e não 'idContrato' na sua API
}

export default function ListarContratos() {
    const [contracts, setContracts] = useState<ContractWithId[]>([]);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const res = await axios.get("https://gestaocontratual.onrender.com/contratos/contratos");
                // Ao receber os dados da API, você pode precisar mapeá-los para ContractWithId
                // Se a API retornar 'id' ou 'idContrato' no mesmo campo, não precisa de mapeamento complexo.
                // Mas se a API retornar 'id' e você usa 'idContrato' no front, faça um mapeamento.
                const data: ContractWithId[] = res.data.map((item: any) => ({
                    ...item,
                    idContrato: item.id || item.idContrato, // Garante que idContrato seja preenchido
                    // Se 'contratante' for um objeto aninhado, o TypeScript vai entender
                    // baseado na sua interface 'contract'.
                }));
                setContracts(data);
            } catch (err) {
                console.error("Erro ao buscar dados da API:", err);
            }
        };
        fetchContracts();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`https://gestaocontratual.onrender.com/contratos/${id}`);
            setContracts((prev) => prev.filter((contrato) => contrato.idContrato !== id));
        } catch (err) {
            console.error("Erro ao deletar contrato:", err);
            alert("Erro ao deletar contrato.");
        }
    };

    const ColunaContratos: ColumnDef<ContractWithId>[] = [
        {
            header: "N° Contrato",
            accessorKey: "numContrato",
        },
        {
            header: "Nome Empresa",
            accessorKey: "contratante.nomeFantasia", // Certifique-se que 'contratante' é um objeto e tem 'nomeFantasia' em 'contract'
        },
        {
            header: "Tipo",
            accessorKey: "tipoContrato",
        },
        {
            header: "Início do Contrato",
            accessorKey: "dtInicio",
            cell: ({ row }) => {
                const data = row.original.dtInicio;
                return new Date(data).toLocaleDateString('pt-BR');
            }
        },
        {
            header: "Fim do Contrato",
            accessorKey: "dtFim",
            cell: ({ row }) => {
                // ---
                // Alteração Chave 2: Corrija o acesso à data para "Fim do Contrato"
                // Você estava usando dtInicio aqui, corrigi para dtFim.
                const dataFim = row.original.dtFim;
                return new Date(dataFim).toLocaleDateString('pt-BR');
            }
        },
        {
            header: "Status",
            accessorKey: "status",
            // Se o status for um número e você quiser exibir "Ativo", "Inativo", etc.,
            // você pode usar o `cell` aqui. Por exemplo:
            // cell: ({ row }) => {
            //     const statusValue = row.original.status;
            //     return statusValue === 1 ? "Ativo" : statusValue === 2 ? "Inativo" : "Desconhecido";
            // }
        },
    ];

    return (
        <section>
            <TitleSection title={""} />
            <section className="flex flex-col item-center justify-center m-auto w-full">
                {/* O componente DataTable agora recebe o tipo ContractWithId corretamente */}
                <DataTable
                    columns={ColunaContratos}
                    data={contracts}
                    link={"cadastrarContratos"}
                    onDelete={handleDelete}
                    contentLink={"Novo Contrato"}
                    entityBasePath="/contratos"
                />
            </section>
        </section>
    );
}
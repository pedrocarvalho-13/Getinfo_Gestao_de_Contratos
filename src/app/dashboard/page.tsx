import { BarChartComponent } from "@/components/columnChart/BarChartComponent";
import DashCard from "@/components/dashCard/KPIsCard";
import { DataTableDashBoard } from "@/components/dataTableDashboard/DataTableDash";
import { RadarChartComponent } from "@/components/RadarChart/RadarChartComponent";
import { contractList } from "@/data/contracts";
import { contract, RawContractData } from "@/types/contractType";
import { ColumnDef } from "@tanstack/react-table";
import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";

// Adicione a nova interface para os dados brutos da lista de contratos
// export interface RawContractData {
//     nm_contrato: string;
//     nome_empresa: string;
//     cnpj: string;
//     tipo_contrato: string;
//     status: string;
//     dt_inicio_contrato: string;
//     dt_final_contrato: string;
//     // Se houver mais campos no objeto original que não estão no 'contract' final,
//     // eles devem ser listados aqui também.
// }


const dataCards = [
    {
        label: "Contratos Ativos",
        value: "012"
    },
    {
        label: "Contratos Vencidos",
        value: "008"
    },
    {
        label: "Próximos a Vencer",
        value: "005"
    },
    {
        label: "Entregáveis",
        value: "Entregues: 15 | Pendentes: 004"
    },
]

const ColunaContratos: ColumnDef<contract>[] = [
    {
        header: "N° Contrato",
        accessorKey: "numContrato",
    },
    {
        header: "Nome Empresa",
        accessorKey: "nomeFantasia",
    },
    {
        header: "CNPJ",
        accessorKey: "cnpj",
    },
    {
        header: "Tipo",
        accessorKey: "tipoContrato",
    },
    {
        header: "Status",
        accessorKey: "status",
    },
    {
        header: "Início do Contrato",
        accessorKey: "dtInicio",
    },
    {
        header: "Fim do Contrato",
        accessorKey: "dtFim",
    },
]

export default function Dashboard() {
    // Linha 62: `c` agora está tipado como `RawContractData`
    const contratosAdaptados: contract[] = contractList.contracts.map((c: RawContractData) => ({
        numContrato: c.nm_contrato,
        nomeFantasia: c.nome_empresa,
        cnpj: c.cnpj,
        tipoContrato: c.tipo_contrato,
        status: c.status,
        dtInicio: c.dt_inicio_contrato,
        dtFim: c.dt_final_contrato,
    }));

    return (
        <section className="flex flex-col h-full w-full px-4 pt-1.5 gap-2 bg-gray-200">
            <Suspense fallback={<LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" />}>
                <div className="grid gap-2 w-full text-bold items-center justify-between grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
                    {dataCards.map((data) => (
                        <DashCard key={data.label} label={data.label} value={data.value} />
                    ))}
                </div>

                <div className="flex flex-row w-full h-[48vh] gap-2 items-center justify-between">
                    <BarChartComponent />
                    <RadarChartComponent />
                </div>

                <div className="flex items-center justify-center h-fit">
                    <DataTableDashBoard
                        columns={ColunaContratos}
                        data={contratosAdaptados}
                        link={"anexarContratos"}
                        contentLink={"Anexar Contratos"}
                    />
                </div>
            </Suspense>
        </section>
    )
}
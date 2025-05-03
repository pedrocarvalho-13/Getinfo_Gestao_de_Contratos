import { BarChartComponent } from "@/components/columnChart";
import DashCard from "@/components/dashCard";
import { DataTableDashBoard } from "@/components/dataTableDashboard";
import { PieChartComponent } from "@/components/pieChart";
import { contractList } from "@/data/contracts";
import { contract } from "@/types/contractType";
import { ColumnDef } from "@tanstack/react-table";
import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";


const dataCards = [
    {
        label: "Contratos Públicos",
        value: 12
    },
    {
        label: "Contratos Privados",
        value: 8
    },
    {
        label: "Entregáveis Concluidos",
        value: 5
    },
    {
        label: "Entregáveis Pendentes",
        value: 15
    },
]

const ColunaContratos: ColumnDef<contract>[] = [
    {
        header: "N° Contrato",
        accessorKey: "nm_contrato",
    },
    {
        header: "Nome Empresa",
        accessorKey: "nome_empresa",
    },
    {
        header: "CNPJ",
        accessorKey: "cnpj",
    },
    {
        header: "Status",
        accessorKey: "status",
    },
    {
        header: "Início do Contrato",
        accessorKey: "dt_inicio_contrato",
    },
    {
        header: "Fim do Contrato",
        accessorKey: "dt_final_contrato",
    },
]

export default function Dashboard() {
    return (
        <section className="flex flex-col h-full w-full px-4 pt-1.5 gap-2 bg-gray-200">
            <Suspense fallback={<LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" />}>
                {/* <LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" /> */}
                <div className="grid  gap-2 w-full text-bold items-center justify-between grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
                    {dataCards.map((data) => (
                        <DashCard key={data.label} label={data.label} value={data.value} />
                    ))}
                </div>
                <div className="flex flex-row w-full h-[48vh] gap-2 items-center justify-between ">
                    <BarChartComponent />
                    <PieChartComponent />
                    {/* <div className="flex flex-col h-full gap-2">
                    <PieChartComponent />
                    </div> */}
                </div>
                <div className="flex items-center justify-center h-fit ">
                    <DataTableDashBoard columns={ColunaContratos} data={contractList.contracts} link={"anexarContratos"} contentLink={"Anexar Contratos"}></DataTableDashBoard>

                </div>
            </Suspense>
        </section>
    )
}
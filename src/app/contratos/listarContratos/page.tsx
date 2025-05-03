import { DataTable } from "@/components/dataTable"
import TitleSection from "@/components/TitleSection"
// import { Payment, columns } from "@/components/payments/columns"
import { contractList } from "@/data/contracts"
import { contract } from "@/types/contractType"
import { ColumnDef } from "@tanstack/react-table"


export default function ListarContratos() {
    // "pending" | "processing" | "success" | "failed"


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

    return (
        <section>
            <TitleSection/>
            <section className="flex flex-col  item-center justify-center m-auto w-full">
                <DataTable columns={ColunaContratos} data={contractList.contracts} link={"anexarContratos"} contentLink={"Anexar Contratos"}></DataTable>
            </section>
        </section>
    )
}
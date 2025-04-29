import { DataTable } from "@/components/dataTable"
// import { Payment, columns } from "@/components/payments/columns"
import { contractList } from "@/data/contracts"
import { contract } from "@/types/contractType"
import { ColumnDef } from "@tanstack/react-table"


export default function ListarContratos() {
// "pending" | "processing" | "success" | "failed"


const ColunaContratos: ColumnDef<contract>[] = [
    {
        header: "Nome Empresa",
        accessorKey: "nome_empresa",
    },
    {
        header: "Fim do Contrato",
        accessorKey: "dt_final_contrato",
    },
]
    
    return (
        <section className="flex item-center justify-center m-auto w-full">
            {/* <h1 className="text-6xl font-bold">Listar Contrato</h1> */}
            <DataTable columns={ColunaContratos} data={contractList.contracts} link={"anexarContratos"} contentLink={"Anexar Contratos"}></DataTable>
        </section>
    )
}
import { DataTable } from "@/components/dataTable"
import { companyList } from "@/data/companie"
import { company } from "@/types/companyType"
// import { contract } from "@/types/contractType"
// import { company } from "@/types/companyType"
import { ColumnDef } from "@tanstack/react-table"

export default function ListarEmpresas() {
    
    const ColunaCompanies: ColumnDef<company>[] = [
        {
            header: "Nome Empresa",
            accessorKey: "nome_empresa",
        },
        {
            header: "Contratos",
            accessorKey: "nm_contratos",
        },
        
    ]
    
    return (
        <section className="flex item-center justify-center m-auto w-full">
            {/* <h1 className="text-6xl font-bold">Listar Contrato</h1> */}
            <DataTable columns={ColunaCompanies} data={companyList.companies} link={"cadastrarEmpresa"} contentLink={"Cadastrar Empresas"}></DataTable>
        </section>
    )
}
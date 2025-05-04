import { DataTable } from "@/components/dataTable"
import TitleSection from "@/components/TitleSection"
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
            header: "CNPJ",
            accessorKey: "cnpj",
        },
        {
            header: "Contratos ativos",
            accessorKey: "contratos_ativos",
        },

    ]

    return (
        <section>
            <TitleSection title={"Gestão de Empresas"}/>
            <section className="flex flex-col item-center justify-center m-auto w-full">
                {/* <h1 className="text-6xl font-bold">Listar Contrato</h1> */}
                <DataTable columns={ColunaCompanies} data={companyList.companies} link={"cadastrarEmpresa"} contentLink={"Cadastrar Empresas"}></DataTable>
            </section>
        </section>
    )
}
// app/empresas/[id]/page.tsx
import EmpresasViewForm from "@/components/stepperviewEmpresas/StepperViewEmpresas";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function EmpresaDetalhes({ params }: PageProps) {
    const { id } = await params;

    return <EmpresasViewForm params={{ idContratante: id }} />;
}


// // app/empresas/[id]/page.tsx
// import EmpresasViewForm from "@/components/stepperviewEmpresas/StepperViewEmpresas";

// export default async function EmpresaDetalhes({ params }: { params: { id: string } }) {
//     // const { id } = params;
//     return (
//         <EmpresasViewForm params={{ idContratante: params.id }} />
//     )

// }

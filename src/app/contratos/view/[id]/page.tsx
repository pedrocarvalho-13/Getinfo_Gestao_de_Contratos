// app/contratos/view/[id]/page.tsx

import EmpresasViewForm from "@/components/stepperviewContratos/StepperViewContratos";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ContratoDetalhes({ params }: PageProps) {
    const { id } = await params;

    return <EmpresasViewForm params={{ idContrato: id }} />;
}


// import EmpresasViewForm from "@/components/stepperviewContratos/StepperViewContratos";

// export default async function ContratoDetalhes({ params }: { params: { id: string } }) {
//         return (
//             <EmpresasViewForm params={{ idContrato: params.id }}/>
//         )

// }
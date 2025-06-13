// app/contratos/[id]/page.tsx

import ContractUpdateForm from "@/components/stepperUpdateContractComponent/Stepper";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ContratoDetalhes({ params }: PageProps) {
    const { id } = await params;

    return <ContractUpdateForm params={{ idContrato: id }} />;
}


// import ContractUpdateForm from "@/components/stepperUpdateContractComponent/Stepper";


// export default async function ContratoDetalhes({ params }: { params: { id: string } }) {
//         return (
//             <ContractUpdateForm params={{ idContrato: params.id }}/>
//         )

// }
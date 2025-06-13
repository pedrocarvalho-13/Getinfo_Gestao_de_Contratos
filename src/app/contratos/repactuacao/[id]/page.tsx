// app/repactuacoes/[id]/page.tsx

import RepactuacaoRegistrationForm from "@/components/stepperRepactuacaoComponent/Stepper";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function RepactuacaoContrato({ params }: PageProps) {
    const { id } = await params;

    return <RepactuacaoRegistrationForm idContrato={id} />;
}


// import RepactuacaoRegistrationForm from "@/components/stepperRepactuacaoComponent/Stepper";

// export default async function RepactuacaoContrato({ params }: { params: { id: string } }) {
//     return (
//         <RepactuacaoRegistrationForm idContrato={params.id} />
//     );
// }
// app/empresas/[id]/page.tsx

import EmpresaUpdateForm from "@/components/stepperUpdateCompanyComponent/Stepper";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function EmpresaUpdate({ params }: PageProps) {
    const { id } = await params;

    return <EmpresaUpdateForm params={{ idContratante: id }} />;
}


// import EmpresaUpdateForm from "@/components/stepperUpdateCompanyComponent/Stepper";

// // app/empresas/[id]/page.tsx
// export default async function EmpresaUpdate({ params }: { params: { id: string } }) {
//     // const { id } = params;
//     return (
//         <EmpresaUpdateForm params={{ idContratante: params.id }} />
//     )

// }

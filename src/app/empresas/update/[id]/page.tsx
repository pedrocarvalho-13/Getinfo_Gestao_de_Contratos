import EmpresaUpdateForm from "@/components/stepperUpdateCompanyComponent/Stepper";

// app/empresas/[id]/page.tsx
export default async function EmpresaUpdate({ params }: { params: { id: string } }) {
    // const { id } = params;
    return (
        <EmpresaUpdateForm params={{ idContratante: params.id }} />
    )

}

// app/empresas/[id]/page.tsx
import AgregadosViewForm from "@/components/stepperviewColaboradores/StepperViewColaboradores";

export default async function ColaboradoresDetalhes({ params }: { params: { id: string } }) {
        return (
            <AgregadosViewForm params={{ id: params.id }}/>
        )

}

// app/empresas/[id]/page.tsx

import AgregadosUpdateForm from "@/components/stepperUpdateAgregadoComponent/Stepper";


export default async function ColaboradoresUpdate({ params }: { params: { id: string } }) {
        return (
            <AgregadosUpdateForm params={{ id: params.id }}/>
        )

}

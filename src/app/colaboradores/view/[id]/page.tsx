// app/empresas/[id]/page.tsx
import AgregadosViewForm from "@/components/stepperviewColaboradores/StepperViewColaboradores";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ColaboradoresDetalhes(props: PageProps) {
    const { id } = await props.params;
    return <AgregadosViewForm params={{ id }} />;
}

// export default async function ColaboradoresDetalhes({ params }: { params: { id: string } }) {
//         return (
//             <AgregadosViewForm params={{ id: params.id }}/>
//         )

// }

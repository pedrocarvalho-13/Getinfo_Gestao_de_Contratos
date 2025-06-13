import AgregadosUpdateForm from "@/components/stepperUpdateAgregadoComponent/Stepper";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function ColaboradoresUpdate(props: PageProps) {
    const { id } = await props.params;
    return <AgregadosUpdateForm params={{ id }} />;
}
// export default async function ColaboradoresUpdate({ params }: { params: { id: string } }) {
//         return (
//             <AgregadosUpdateForm params={{ id: params.id }}/>
//         )

// }

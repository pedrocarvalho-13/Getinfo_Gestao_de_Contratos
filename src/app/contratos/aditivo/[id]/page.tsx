// import AditivoRegistrationForm from "@/components/stepperAditivoComponent/Stepper";

// export default async function AditivoContrato({ params }: { params: { id: string } }) {
//     return (
//         <AditivoRegistrationForm idContrato={params.id} />
//     );
// }


import AditivoRegistrationForm from "@/components/stepperAditivoComponent/Stepper";

type PageProps = {
    params: Promise<{ id: string }>;
};

export default async function AditivoContrato(props: PageProps) {
    const { id } = await props.params;

    return <AditivoRegistrationForm idContrato={id} />;
}
import AditivoRegistrationForm from "@/components/stepperAditivoComponent/Stepper";

export default async function AditivoContrato({ params }: { params: { id: string } }) {
    return (
        <AditivoRegistrationForm idContrato={params.id} />
    );
}
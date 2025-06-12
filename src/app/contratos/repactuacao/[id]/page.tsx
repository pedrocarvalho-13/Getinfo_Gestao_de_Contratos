import RepactuacaoRegistrationForm from "@/components/stepperRepactuacaoComponent/Stepper";

export default async function RepactuacaoContrato({ params }: { params: { id: string } }) {
    return (
        <RepactuacaoRegistrationForm idContrato={params.id} />
    );
}
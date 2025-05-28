import EmpresasViewForm from "@/components/stepperviewContratos/StepperViewContratos";

export default async function ContratoDetalhes({ params }: { params: { id: string } }) {
        return (
            <EmpresasViewForm params={{ idContrato: params.id }}/>
        )

}
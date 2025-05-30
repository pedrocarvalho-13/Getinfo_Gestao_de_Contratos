import ContractUpdateForm from "@/components/stepperUpdateContractComponent/Stepper";


export default async function ContratoDetalhes({ params }: { params: { id: string } }) {
        return (
            <ContractUpdateForm params={{ idContrato: params.id }}/>
        )

}
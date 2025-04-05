import DashCard from "@/components/dashCard";


const dataCards = [
    {
        label: "Contratos Públicos",
        value: 12
    },
    {
        label: "Contratos Privados",
        value: 8
    },
    {
        label: "Total de Contratos",
        value: 20
    },
    {
        label: "Entregáveis Concluidos",
        value: 5
    },
    {
        label: "Entregáveis Pendentes",
        value: 15
    },
]

export default function Dashboard() {
    return (
        <section className="flex flex-col h-full  w-full p-4">

            <div className="flex flex-row mt-4 mx-4 gap-4 text-bold items-center justify-between">
                {dataCards.map((data) => (
                <DashCard label={data.label} value={data.value} />

                )) }
            </div>
        </section>
    )
}
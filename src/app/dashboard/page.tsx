import { BarChartComponent } from "@/components/columnChart";
import DashCard from "@/components/dashCard";
import { PieChartComponent } from "@/components/pieChart";
import { LoaderCircle } from "lucide-react";
import { Suspense } from "react";


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
            <Suspense fallback={<LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" />}>
                {/* <LoaderCircle className="text-[#72F2E5] m-auto animate-spin size-15" /> */}
                <div className="grid mt-4  gap-4 w-full text-bold items-center justify-between grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] ">
                    {dataCards.map((data) => (
                        <DashCard label={data.label} value={data.value} />
                    ))}
                </div>
                <div className="flex flex-row w-full py-2 items-center justify-between ">
                    <BarChartComponent />
                    <PieChartComponent />
                </div>
            </Suspense>
        </section>
    )
}
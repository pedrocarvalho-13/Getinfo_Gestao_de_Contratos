"use client"

// import { TrendingUp } from "lucide-react"
import {PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { browser: "Norte", visitors: 37},
    { browser: "Nordeste", visitors: 45,},
    { browser: "Sudeste", visitors: 22,},
    { browser: "Sul", visitors: 24,},
    { browser: "C-Ost", visitors: 20,},

]

const chartConfig = {
    chrome: {
        label: "Fechados",
        color: "#0BE9D2",
    },
    safari: {
        label: "Pendentes",
        color: "#72F2E5",
    },
} satisfies ChartConfig

export function PieChartComponent() {
    return (
        <Card className="flex flex-col w-[20vw] h-full">
            <CardHeader className="">
                <CardTitle className="text-center text-xl">Contratos por Região</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-[16vw] h-[30vh]"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="browser" />
                        <PolarGrid />
                        <Radar
                            dataKey="visitors"
                            fill="#72F2E5"
                            fillOpacity={0.6}
                            dot={{
                                r: 4,
                                fillOpacity: 1,
                            }}
                        />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

{/* <PieChart className=" " >
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent />}
                        />
                        <Pie

                            data={chartData}
                            dataKey="visitors"
                            labelLine={true}
                            innerRadius={10}
                            // outerRadius={10}
                            label={({ payload, ...props }) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x - 5}
                                        y={props.y + 8}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill="hsla(var(--foreground))"
                                        fontSize={10}
                                    >
                                        {payload.visitors}
                                    </text>
                                )
                            }}
                            nameKey="browser"
                        />
                    </PieChart> */}
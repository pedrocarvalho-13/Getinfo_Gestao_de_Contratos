"use client"

// import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { browser: "Fechados", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "Pendentes", visitors: 200, fill: "var(--color-safari)" },

]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
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
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle className="text-center text-3xl">Contratos</CardTitle>
                <CardDescription className="text-center text-sm">Fechados Aberto</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0  ">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-[24vw] h-[30vh]"
                >
                    <PieChart className=" h-[40vh]" >
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        {/* <Pie
                            // className="w-[20vw]"
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={40}

                        /> */}
                        <Pie

                            data={chartData}
                            dataKey="visitors"
                            labelLine={true}
                            innerRadius={30}
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
                                        fontSize={8}
                                    >
                                        {payload.visitors}
                                    </text>
                                )
                            }}
                            nameKey="browser"
                        />
                        <ChartLegend
                            content={<ChartLegendContent nameKey="browser" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center pt-10"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">

            </CardFooter>
        </Card>
    )
}

"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
const chartData = [
    { month: "January", contratos: 186 },
    { month: "February", contratos: 305 },
    { month: "March", contratos: 237 },
    { month: "April", contratos: 73 },
    { month: "May", contratos: 209 },
    { month: "June", contratos: 214 },
]

const chartConfig = {
    contratos: {
        label: "Contratos",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function BarChartComponent() {
    return (
        <Card className="w-full h-full">
            <CardHeader>
                <CardTitle className="text-center text-xl">Contratos cadastos ao decorrer do ano</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent className=" w-full h-[26vh]">
                <ChartContainer config={chartConfig} className="w-full h-full">
                    <BarChart accessibilityLayer data={chartData} >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Bar dataKey="contratos" fill="#72F2E5" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                
            </CardFooter>
        </Card>
    )
}

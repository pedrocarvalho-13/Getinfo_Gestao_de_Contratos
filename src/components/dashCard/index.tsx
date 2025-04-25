interface cardProps {
    label: string,
    value: number,
}

export default function DashCard({label, value} :cardProps) {
    return (
        <div className="flex flex-col rounded-sm shadow-xs py-6 px-4 gap-sm bg-white w-full text-sm h-[12vh]">
            <label className="font-bold">{label}</label>
            <p>00{value}</p>
        </div>
    )
}
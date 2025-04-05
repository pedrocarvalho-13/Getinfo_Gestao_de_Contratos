interface cardProps {
    label: string,
    value: number,
}

export default function DashCard({label, value} :cardProps) {
    return (
        <div className="flex flex-col rounded-sm shadow-xl py-6 px-4 gap-sm bg-white w-fit">
            <label className="font-bold">{label}</label>
            <p>00{value}</p>
        </div>
    )
}
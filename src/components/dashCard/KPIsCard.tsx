interface cardProps {
    label: string,
    value: string,
}

export default function DashCard({label, value} :cardProps) {
    return (
        <div className="flex flex-col rounded-sm shadow-sm border py-4 px-2 gap-sm bg-white w-full text-sm h-[12vh]">
            <label className="font-bold">{label}</label>
            <p>{value}</p>
        </div>
    )
}
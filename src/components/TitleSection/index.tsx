interface titleProps {
    title: String
}

export default function TitleSection({ title }:titleProps) {
    return (
        <div className="flex flex-row p-4 w-full h-fit text-xl font-bold items-center justify-between ">
            <h1>{title ? title : "Gestão de Contratos"}</h1>
            <h1>Usuário X</h1>
        </div>
    )
}
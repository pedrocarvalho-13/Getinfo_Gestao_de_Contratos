import Style from "@/Styles/formContract.module.css"

export default function FormContract() {
    return (
        <form action="" className="flex flex-col">
            <label htmlFor="" className="font-bold">CNPJ</label>
            <div className="flex gap-2">
                <input type="text" placeholder="Verifique se o CNPJ já está cadastrado" className={`w-[22vw] border-1 border-black rounded-xs ${Style.input}`} />
                <input type="submit" value="Verificar" className="rounded-md bg-[#72F2E5] py-1 px-4" />
            </div>
        </form>
    )
}
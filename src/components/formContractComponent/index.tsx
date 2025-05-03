import Style from "@/Styles/formContract.module.css"
import { Search } from "lucide-react"

export default function FormContract() {
    return (
        <form action="" className="flex flex-col">
            <label htmlFor="" className="font-bold">CNPJ</label>
            <div className="flex gap-2">
                <input type="text" placeholder="Verifique se o CNPJ já está cadastrado" className={`w-[22vw] border-1 border-black rounded-xs bg-white ${Style.input}`} />
                {/* <input type="submit" value="Verificar" className="rounded-md bg-[#72F2E5] py-1 px-4" /> */}
                <button type="submit" className="rounded-md bg-[#72F2E5] py-1 px-4">
                    <Search/>
                </button>
            </div>
        </form>
    )
}
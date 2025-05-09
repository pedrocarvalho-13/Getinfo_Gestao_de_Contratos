import Style from "@/Styles/formContract.module.css"
import { Search } from "lucide-react"

interface FormContractProps {
    onVerifyCNPJ: () => void;
}

export default function FormContract({ onVerifyCNPJ }: FormContractProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onVerifyCNPJ();
    };

    // return (
    //     <form onSubmit={handleSubmit} className="flex flex-col">
    //         <label htmlFor="cnpj" className="font-bold">CNPJ</label>
    //         <div className="flex gap-2">
    //             <input
    //                 id="cnpj"
    //                 type="text"
    //                 placeholder="Verifique se o CNPJ já está cadastrado"
    //                 className={`w-[22vw] border-1 border-black rounded-xs bg-white ${Style.input}`}
    //             />
    //             <button type="submit" className="rounded-md bg-[#72F2E5] py-1 px-4">
    //                 <Search />
    //             </button>
    //         </div>
    //     </form>
    // )
    return (
        <form action="" className="flex flex-col">
            <label className="font-bold">CNPJ</label>
            <div className="flex gap-2">
                <input type="text" placeholder="Verifique se o CNPJ já está cadastrado" className="w-[22vw] border-1 border-black rounded-xs bg-white" />
                <button type="button" onClick={onVerifyCNPJ} className="rounded-md bg-[#72F2E5] py-1 px-4">
                    <Search />
                </button>
            </div>
        </form>
    )
}


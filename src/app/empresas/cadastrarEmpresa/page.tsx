import FormContract from "@/components/formContractComponent";
import TitleSection from "@/components/TitleSection";

export default function CadastrarEmpresa() {
    return (
        <section className="h-full ">

            <TitleSection />
            <div className="flex flex-col p-4 item-start justify-start w-full bg-gray-50 rounded-tl-xl h-full">
                {/* <h1 className="text-6xl font-bold">Cadastrar Empresas</h1> */}
                <FormContract />
            </div>
        </section >
    )
}
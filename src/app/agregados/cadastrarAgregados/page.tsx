// import FormContract from "@/components/formContractComponent";
import AgregadosRegistrationForm from "@/components/stepperAgregadoComponent/Stepper";
import TitleSection from "@/components/TitleSection/TitleSection";

export default function AnexarContratos() {
    return (
        <section className="h-full ">

            <TitleSection title={""} />
            <div className="flex flex-col item-center justify-start  w-full h-full p-4 bg-gray-50 rounded-tl-xl">
                {/* <h1 className="text-6xl font-bold m-auto">Em desenvolvimento</h1> */}
                <div className="flex flex-col item-center justify-start w-full h-full p-4 bg-gray-50 rounded-tl-xl">
                    <AgregadosRegistrationForm />
                </div>
            </div>
        </section>
    )
}
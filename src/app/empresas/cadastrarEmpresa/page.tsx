"use client"
import { useState } from "react"
import FormContract from "@/components/formContractComponent";
import CompanyRegistrationForm from "@/components/stepperCompanyComponent/Stepper";
import TitleSection from "@/components/TitleSection/TitleSection";

export default function CadastrarEmpresa() {
    const [showForm, setShowForm] = useState(false);

    const handleVerifyCNPJ = () => {
        setShowForm(true);
    }

    return (
        <section className="h-full">
            <TitleSection title="Gestão de Empresas" />
            <div className="flex flex-col item-center justify-start w-full h-full p-4 bg-gray-50 rounded-tl-xl">
                <CompanyRegistrationForm />

            </div>
        </section>
    )
}

"use client"

import { useState } from "react"
import { CheckIcon, User, Building2, Landmark } from "lucide-react"
import CompanyDataStep from "./formDataCompany"
import LegalGuardianStep from "./formLegalDataCompany"
import BankInfoStep from "./formBankDataCompany"
import { formDataProps } from "@/types/formPropsType"
import { AllFormData, FormData, FormDataBankCompany, FormDataLegalCompany, initialFormData } from "@/types/formDataType"
import { company } from "@/types/companyType"

interface StepperProps {
    currentStep: number;
}

interface CompanyRegistrationFormProps {
    onCancel: () => void;
}
// Update the component to remove contract info and update steps
export default function CompanyRegistrationForm({onCancel}:CompanyRegistrationFormProps) {
    const [currentStep, setCurrentStep] = useState<number>(1)
    // const [formData, setFormData] = useState<Partial<FormData | FormDataBankCompany | FormDataLegalCompany>>({})
    // const [formData, setFormData] = useState<any>()
    // const [formData, setFormData] = useState<FormData>({
    //     cnpj: "",
    //     razaoSocial: "",
    //     nomeFantasia: "",
    //     inscricaoEstadual: "",
    //     inscricaoMunicipal: "",
    //     dataFundacao: "",
    //     cep: "",
    //     numero: "",
    //     estado: "",
    //     cidade: "",
    //     bairro: "",
    //     rua: "",
    //     telefoneCorporativo: "",
    //     telefoneFixo: "",
    //     emailCorporativo: "",
    //     webSite: ""
    // });
    const [formData, setFormData] = useState<AllFormData>(initialFormData);

    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSelectChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 3))
    }

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1))
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Here you would typically send the data to your backend
        alert("Formulário enviado com sucesso!")
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <Stepper currentStep={currentStep} />

                    <form onSubmit={handleSubmit} className="mt-8">
                        {currentStep === 1 && (
                            <CompanyDataStep
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleSelectChange={handleSelectChange}
                            />
                        )}

                        {currentStep === 2 && <LegalGuardianStep formData={formData} handleInputChange={handleInputChange} />}

                        {currentStep === 3 && (
                            <BankInfoStep
                                formData={formData}
                                handleInputChange={handleInputChange}
                                handleSelectChange={handleSelectChange}
                            />
                        )}

                        <div className="flex justify-between mt-8">
                            {currentStep > 1 ? (
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                    onClick={prevStep}
                                >
                                    Anterior
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                    onClick={onCancel}
                                >
                                    Cancelar
                                </button>
                            )}

                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                    onClick={nextStep}
                                >
                                    Próximo
                                </button>
                            ) : (
                                <button type="submit" className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]">
                                    Salvar
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

function Stepper({ currentStep }: StepperProps) {
    return (
        <ol className="flex items-center justify-between w-full">
            <li
                className={`flex w-full items-center ${currentStep >= 1 ? "text-[#5fe0d5]" : "text-gray-500"} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${currentStep >= 1 ? "after:border-[#5fe0d5]/30" : "after:border-gray-100 dark:after:border-gray-700"}`}
            >
                <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${currentStep >= 1 ? "bg-[#5fe0d5]/20" : "bg-gray-100 dark:bg-gray-700"}`}
                >
                    {currentStep > 1 ? <CheckIcon className="w-5 h-5" /> : <Building2 className="w-5 h-5" />}
                </span>
            </li>

            <li
                className={`flex w-full items-center ${currentStep >= 2 ? "text-[#5fe0d5]" : "text-gray-500"} after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${currentStep >= 2 ? "after:border-[#5fe0d5]/30" : "after:border-gray-100 dark:after:border-gray-700"}`}
            >
                <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${currentStep >= 2 ? "bg-[#5fe0d5]/20" : "bg-gray-100 dark:bg-gray-700"}`}
                >
                    {currentStep > 2 ? <CheckIcon className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </span>
            </li>

            <li className={`flex items-center ${currentStep >= 3 ? "text-[#5fe0d5]" : "text-gray-500"}`}>
                <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${currentStep >= 3 ? "bg-[#5fe0d5]/20" : "bg-gray-100 dark:bg-gray-700"}`}
                >
                    <Landmark className="w-5 h-5" />
                </span>
            </li>
        </ol>
    )
}






"use client"

import { useState } from "react"
import { BookUp, CheckIcon, ClipboardMinus, FileStack, Users } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"

import { EmpresaFormData } from "@/types/EnmpresaFormData"
// import { defaultValues } from "@/utils/formDefaults"

import Link from "next/link"
import ColaboradoresContractStep from "./formColaboradoresContract/ColaboradoresContractStep"
import AnexoDocsStep from "./formAnexoDocsContract/AnexoDocsStep"
import DataContractStep from "./formDataCompany/DataCompanyStep"
import ContactEntregaveisStep from "./formEntregaveisContract/ContactEntregaveisStep"



interface StepperProps {
    currentStep: number;
}


export default function ContractRegistrationForm() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const { control, handleSubmit, trigger } = useForm<EmpresaFormData>({
        defaultValues: {
            empresa: {
                cnpj: "",
                razaoSocial: "",
                nomeFantasia: "",
                inscricaoEstadual: "",
                inscricaoMunicipal: "",
                emailCorporativo: "",
                site: "",
                dataFundacao: "",
                telefone: "",
                cep: "",
                bairro: "",
                numeroDaCasa: "",
                rua: "",
                estado: "",
                banco: "",
                agencia: "",
            }
        }
    });

    const nextStep = async () => {
        const isValid = await trigger(); // Valida os campos atuais antes de avançar
        if (!isValid) return;

        setCurrentStep((prev) => Math.min(prev + 1, 5));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const onSubmit: SubmitHandler<EmpresaFormData> = (data) => {
        console.log("Formulário enviado:", data);
        alert("Formulário enviado com sucesso!");
        window.location.reload();
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <Stepper currentStep={currentStep} />

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        {currentStep === 1 && (
                            <DataContractStep control={control} />
                        )}
                        {currentStep === 2 && (
                            <ColaboradoresContractStep control={control} />
                        )}
                        {currentStep === 3 && (
                            <ContactEntregaveisStep control={control} />
                        )}
                        {currentStep === 4 && (
                            <AnexoDocsStep control={control} />
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

                                <Link href={"/"} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300" >Cancelar</Link>
                            )}

                            {currentStep < 4 ? (
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                    onClick={nextStep}
                                >
                                    Próximo
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                    // onClick={onSubmit}
                                >
                                    Salvar
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Stepper({ currentStep }: StepperProps) {
    return (
        <ol className="flex items-center justify-between w-full">
            {[ClipboardMinus, Users, BookUp, FileStack].map((Icon, index) => {
                const step = index + 1;
                const active = currentStep >= step;
                const done = currentStep > step;

                if (step !== 4) {
                    return (
                        <li
                            key={step}
                            className={`flex w-full items-center ${active ? "text-[#5fe0d5]" : "text-gray-500"
                                } after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${active
                                    ? "after:border-[#5fe0d5]/30"
                                    : "after:border-gray-100 dark:after:border-gray-700"
                                }`}
                        >
                            <span
                                className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${active ? "bg-[#5fe0d5]/20" : "bg-gray-100 dark:bg-gray-700"
                                    }`}
                            >
                                {done ? (
                                    <CheckIcon className="w-5 h-5" />
                                ) : (
                                    <Icon className="w-5 h-5" />
                                )}
                            </span>
                        </li>
                    );
                } else {
                    return (
                        <li
                            key={step}
                            className={`flex items-center ${active ? "text-[#5fe0d5]" : "text-gray-500"
                                }`}
                        >
                            <span
                                className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${active ? "bg-[#5fe0d5]/20" : "bg-gray-100 dark:bg-gray-700"
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                            </span>
                        </li>
                    );
                }
            })}
        </ol>
    );
}
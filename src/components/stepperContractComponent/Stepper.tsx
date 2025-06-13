"use client"

import { CheckIcon, ClipboardMinus, Files, LayoutListIcon, User } from "lucide-react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import ColaboradoresContractStep from "./formColaboradoresContract/ColaboradoresContractStep"
import AnexoDocsStep from "./formAnexoDocsContract/AnexoDocsStep"
import DataContractStep from "./formDataCompany/DataCompanyStep"
import ContractEntregaveisStep from "./formEntregaveisContract/ContactEntregaveisStep"
import { ContractFormData } from "@/types/contractFormData"
import { useState } from "react";
import ModalForm from "../modalForm/ModalForm"


interface StepperProps {
    currentStep: number;
}


export default function ContractRegistrationForm() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalHref, setModalHref] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { control, handleSubmit, trigger } = useForm<ContractFormData>({
        defaultValues: {
            responsavel: "",
            numContrato: 0,
            idStatus: 0,
            tipoServico: "",
            entregaveis: [
                {
                    nome: "",
                    dtInicio: "",
                    dtFim: "",
                    Status: "",
                    descricao: "",
                    colaboradores: [
                        {
                            id: 0,
                            funcaoEntregavel: ""
                        }
                    ]
                }
            ],
            dtInicio: "",
            idContratante: 0,
            colaboradores: [
                {
                    id: 0,
                    funcaoContrato: ""
                }
            ],
            dtFim: ""
        }
    });

    const nextStep = async () => {
        const isValid = await trigger();
        if (!isValid) return;

        setCurrentStep((prev) => Math.min(prev + 1, 5));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const onSubmit = async (data: ContractFormData) => {
        setIsSubmitting(true);

        try {
            const formData = new FormData();

            const contratoBlob = new Blob([JSON.stringify(data)], {
                type: "application/json",
            });
            formData.append("contrato", contratoBlob);

            if (data.documentos && data.documentos.length > 0) {
                for (const file of data.documentos) {
                    formData.append("documentos", file);
                }
            }

            const response = await fetch("https://gestaocontratual.onrender.com/contratos/criarContrato", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Erro ao cadastrar contrato: ${response.status} - ${text}`);
            }

            const responseText = await response.text();
            console.log("Contrato cadastrado com sucesso:", responseText);
            setModalMessage("Contrato cadastrado com sucesso!");
            setModalHref("listarContratos");
            setShowModal(true);

        } catch (error: unknown) {
            console.error("Erro ao cadastrar contrato:", error);

            let errorMessage = "Ocorreu um erro desconhecido ao cadastrar o contrato.";

            if (error instanceof Error) {
                // Se o erro é uma instância de Error, ele definitivamente tem 'message'
                errorMessage = `Erro: ${error.message}`;
            } else if (typeof error === 'string') {
                // Se o erro for uma string
                errorMessage = `Erro: ${error}`;
            } else if (typeof error === 'object' && error !== null && 'message' in error) {
                // Se o erro for um objeto e possui a propriedade 'message'
                // O TypeScript agora sabe que 'error' é um objeto com 'message'.
                // Podemos criar um tipo auxiliar para ajudar o TS aqui.
                const errWithMessage = error as { message: string }; // Refina o tipo para um objeto com 'message'
                errorMessage = `Erro: ${errWithMessage.message}`;
            }

            setModalMessage(errorMessage);
            setModalHref("listarContratos");
            setShowModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };




    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <Stepper currentStep={currentStep} />
                    {/* ✅ ModalForm sendo renderizado condicionalmente */}
                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center  z-50">

                            <ModalForm
                                menssagem={modalMessage}
                                href={modalHref}
                                onClose={() => setShowModal(false)}
                            />
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        {currentStep === 1 && (
                            <div>
                                <DataContractStep control={control} />
                                <div className="my-8 flex items-center justify-between">

                                    <Link
                                        href={"listarContratos"}
                                        className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                    >
                                        Sair
                                    </Link>
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                        onClick={nextStep}
                                    >
                                        Próximo
                                    </button>
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>

                                <ColaboradoresContractStep control={control} />
                                <div className="my-8 flex items-center justify-between">
                                    <div className="flex w-fit gap-2">

                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                            onClick={prevStep}
                                        >
                                            Anterior
                                        </button>
                                        <Link
                                            href={"listarContratos"}
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                        >
                                            Sair
                                        </Link>
                                    </div>
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                        onClick={nextStep}
                                    >
                                        Próximo
                                    </button>
                                </div>
                            </div>
                        )}
                        {currentStep === 3 && (
                            <div>
                                <ContractEntregaveisStep control={control} />
                                <div className="my-8 flex items-center justify-between">
                                    <div className="flex w-fit gap-2">
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                            onClick={prevStep}
                                        >
                                            Anterior
                                        </button>
                                        <Link
                                            href={"listarContratos"}
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                        >
                                            Sair
                                        </Link>
                                    </div>
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                        onClick={nextStep}
                                    >
                                        Próximo
                                    </button>
                                </div>
                            </div>
                        )}
                        {currentStep === 4 && (
                            <div>

                                <AnexoDocsStep control={control} />
                                <div className="my-8 flex items-center justify-between">

                                    <div className="flex w-fit gap-2">
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-gray-300"
                                            onClick={prevStep}
                                        >
                                            Anterior
                                        </button>
                                        <Link
                                            href={"listarContratos"}
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-gray-300"
                                        >
                                            Sair
                                        </Link>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-4 py-2 rounded-md ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#5fe0d5] hover:bg-[#4bc0b5]"} text-black`}
                                    >
                                        Salvar
                                    </button>
                                    {/* <button
                                        type="button"
                                        onClick={handleSubmit((data) => console.log("Dados:", data))}
                                    >
                                        Ver dados
                                    </button> */}
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

function Stepper({ currentStep }: StepperProps) {
    return (
        <ol className="flex items-center justify-between w-full">
            {[ClipboardMinus, User, LayoutListIcon, Files].map((Icon, index) => {
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
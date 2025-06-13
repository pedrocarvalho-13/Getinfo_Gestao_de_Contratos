"use client"

import { BookUp, CheckIcon, ClipboardMinus, FileStack, LoaderCircle, Users } from "lucide-react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import ColaboradoresContractStep from "./formColaboradoresContract/ColaboradoresContractStep"
import AnexoDocsStep from "./formAnexoDocsContract/AnexoDocsStep"
import DataContractStep from "./formDataCompany/DataCompanyStep"
import ContractEntregaveisStep from "./formEntregaveisContract/ContactEntregaveisStep"
import { ContractFormDataUpdate } from "@/types/contractFormDataUpdate"

import axios from "axios";
import { useEffect, useState } from "react";

import ModalForm from "../modalForm/ModalForm"


interface StepperProps {
    currentStep: number;
}


export default function ContractUpdateForm({ params }: { params: { idContrato: string } }) {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [contrato, setContrato] = useState<ContractFormDataUpdate | null>(null);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalHref, setModalHref] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { control, reset, handleSubmit, trigger } = useForm<ContractFormDataUpdate>({
        shouldUnregister: false,
        defaultValues: {
            responsavel: "",
            numContrato: 0,
            status: "",
            tipoServico: "",
            entregaveis: [], 
            dtInicio: "",
            idContratante: 0,
            colaboradores: [],
            dtFim: ""
        }
    });

    const nextStep = async () => {
        const isValid = await trigger();
        if (isValid && currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    useEffect(() => {
        const fetchEmpresa = async () => {
            const res = await axios.get(`https://gestaocontratual.onrender.com/contratos/${params.idContrato}`);
            setContrato(res.data);
            
            const dataToReset = {
                ...res.data,
                status: String(res.data.status || "Ativo"),
                entregaveis: res.data.entregaveis && res.data.entregaveis.length > 0 
                    ? res.data.entregaveis 
                    : [{ 
                        nome: "", 
                        dtInicio: "", 
                        dtFim: "", 
                        Status: "", 
                        descricao: "", 
                        colaboradores: [{ id: 0, funcaoEntregavel: "" }] 
                    }],
                colaboradores: res.data.colaboradores && res.data.colaboradores.length > 0
                    ? res.data.colaboradores
                    : [{ id: 0, funcaoContrato: "" }]
            };
            
            reset(dataToReset);
        };

        fetchEmpresa();
    }, [params.idContrato, reset]);

    if (!contrato) return <LoaderCircle className="text-[#03a796] m-auto animate-spin size-15" />;  


    const onSubmit = async (data: ContractFormDataUpdate) => {
        if (!data.status || data.status.trim() === "") {
            alert("Por favor, selecione um status para o contrato.");
            setIsSubmitting(false);
            return;
        }
        
        const cleanedData = {
            ...data,
            status: String(data.status).trim()
        };
        
        setIsSubmitting(true);

        try {

            const formData = new FormData();

            const contratoBlob = new Blob([JSON.stringify(cleanedData)], {
                type: "application/json",
            });
            formData.append("contrato", contratoBlob);

            if (data.documentos && data.documentos.length > 0) {
                for (const file of data.documentos) {
                    formData.append("documentos", file);
                }
            }

            const response = await fetch(`https://gestaocontratual.onrender.com/contratos/atualizarContrato/${params.idContrato}`, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Erro ao atualizar contrato: ${response.status} - ${text}`);
            }

            const responseText = await response.text();
            console.log("Contrato atualizado com sucesso:", responseText);
            setModalMessage("Contrato atualizado com sucesso!");
            setModalHref("../listarContratos");
            setShowModal(true);

        } catch (error: unknown) {
            console.error("Erro ao atualizar contrato:", error);
            setModalMessage("Erro ao atualizar contrato");
            setModalHref("../listarContratos");
            setShowModal(true);
        } finally {
            setIsSubmitting(false)
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
                                        href={"../listarContratos"}
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

                                <ColaboradoresContractStep control={control} idContrato={params.idContrato} />
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
                                            href={"../listarContratos"}
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
                                            href={"../listarContratos"}
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
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                            onClick={prevStep}
                                        >
                                            Anterior
                                        </button>
                                        <Link
                                            href={"../listarContratos"}
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
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
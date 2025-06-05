"use client"

import { CheckIcon, ClipboardMinus, LoaderCircle, MapPin, Phone, Scale } from "lucide-react"
import { useForm } from "react-hook-form"

// import { EmpresaFormData } from "@/types/EmpresaFormData"
// import { defaultValues } from "@/utils/formDefaults"

// import Link from "next/link"


import axios from "axios";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { ContractFormData } from "@/types/contractFormData";
import DataViewContractStep from "./formViewDataCompany/DataViewCompanyStep";
import ColaboradoresViewContractStep from "./formViewColaboradoresContract/ColaboradoresViewContractStep";
import ContractViewEntregaveisStep from "./formViewEntregaveisContract/ContactViewEntregaveisStep";
import AnexoViewDocsStep from "./formViewAnexoDocsContract/AnexoViewDocsStep";
import Link from "next/link";

interface StepperProps {
    currentStep: number;
}
// interface EmpresasViewFormProps {
//     id: string;
// }


export default function EmpresasViewForm({ params }: { params: { idContrato: string } }) {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const [contrato, setContrato] = useState<ContractFormData | null>(null);

    const { control, reset, trigger } = useForm<ContractFormData>({
        defaultValues: {
            responsavel: "",
            numContrato: 0,
            postos: [
                {
                    nome: "",
                    descricao: ""
                }
            ],
            idStatus: 0,
            tipoServico: "",
            tipoContrato: "",
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
        const isValid = await trigger(); // Valida os campos atuais antes de avançar
        if (!isValid) return;

        setCurrentStep((prev) => Math.min(prev + 1, 5));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    useEffect(() => {
        const fetchEmpresa = async () => {
            const res = await axios.get(`https://gestaocontratual.onrender.com/contratos/${params.idContrato}`);
            setContrato(res.data);
            reset(res.data); // ← Aqui você injeta os valores nos inputs via react-hook-form
        };

        fetchEmpresa();
    }, [params.idContrato, reset]);

    if (!contrato) return <LoaderCircle className="text-[#03a796] m-auto animate-spin size-15" />;


    const router = useRouter();


    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <Stepper currentStep={currentStep} />

                    <form className="mt-8">
                        {currentStep === 1 && (
                            <div>

                                <DataViewContractStep control={control} />
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
                                <ColaboradoresViewContractStep control={control} idContrato={params.idContrato} />
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
                            <div >
                                <ContractViewEntregaveisStep control={control} idContrato={params.idContrato} />
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
                            <div >
                                <AnexoViewDocsStep control={control} idContrato={params.idContrato} />
                                <div className="my-8 flex items-center justify-between">
                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                        onClick={prevStep}
                                    >
                                        Anterior
                                    </button>
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
            {[ClipboardMinus, MapPin, Phone, Scale].map((Icon, index) => {
                const step = index + 1;
                const active = currentStep >= step;
                const done = currentStep > step;

                if (step !== 4) {
                    return (
                        <li
                            key={step}
                            className={`flex w-full items-center ${active ? "text-[#05b7a5]" : "text-gray-500"
                                } after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${active
                                    ? "after:border-[#5fe0d5]/30"
                                    : "after:border-gray-100 dark:after:border-gray-700"
                                }`}
                        >
                            <span
                                className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${active ? "bg-[#5fe0d5]/15" : "bg-gray-100 dark:bg-gray-700"
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
                            className={`flex items-center ${active ? "text-[#05b7a5]" : "text-gray-500"
                                }`}
                        >
                            <span
                                className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${active ? "bg-[#5fe0d5]/15" : "bg-gray-100 dark:bg-gray-700"
                                    }`}
                            >
                                <Scale className="w-5 h-5" />
                            </span>
                        </li>
                    );
                }
            })}
        </ol>
    );
}
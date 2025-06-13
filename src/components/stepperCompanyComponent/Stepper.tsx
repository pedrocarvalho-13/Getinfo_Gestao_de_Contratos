"use client"

import { CheckIcon, ClipboardMinus, MapPin, Phone, Scale } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"

import { EmpresaFormData } from "@/types/EmpresaFormData"
// import { defaultValues } from "@/utils/formDefaults"

import DataCompanyStep from "./formDataCompany/DataCompanyStep"
import AdressCompanyStep from "./formAdressDataCompany/AdressCompanyStep"
import ContactCompanyStep from "./formContactDataCompany/ContactCompanyStep"
import LegalCompanyStep from "./formLegalDataCompany/LegalCompanyStep"
import Link from "next/link"

import axios from "axios";
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

    const { control, handleSubmit, trigger } = useForm<EmpresaFormData>({
        defaultValues: {
            cnpj: "",
            razaoSocial: "",
            nomeFantasia: "",
            inscricaoEstadual: "",
            inscricaoMunicipal: "",
            emailCorporativo: "",
            site: "",
            dataFundacao: "",
            telefone: "",
            telefoneFixo: "",
            cep: "",
            bairro: "",
            numeroDaCasa: "",
            rua: "",
            estado: "",
            tipoEmpresa: 0,
            cidade: "",
            cpfLegal: "",
            responsavelLegalCpf: "",
            responsavelLegalNome: "",
            responsavelLegalEmail: "",
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

    const onSubmit: SubmitHandler<EmpresaFormData> = async (data) => {
        setIsSubmitting(true);

        try {
            const response = await axios.post("https://gestaocontratual.onrender.com/contratantes", data);
            console.log("Empresa cadastrada com sucesso:", response.data);
            // alert("Empresa cadastrada com sucesso!");
            setModalMessage("Empresa cadastrada com sucesso!");
            setModalHref("listarEmpresas");
            setShowModal(true);
        } catch (error) {
            console.error("Erro ao cadastrar empresa:", error);
            // alert("Erro ao cadastrar empresa.");
            setModalMessage("Erro ao cadastrar empresa");
            setModalHref("listarEmpresas");
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

                                <DataCompanyStep control={control} />
                                <div className="my-8 flex items-center justify-between">

                                    <Link
                                        href={"listarEmpresas"}
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
                                <AdressCompanyStep control={control} />
                                <div className="my-8 flex items-center justify-between" >

                                    <div className="flex w-fit gap-2">
                                        <button
                                            type="button"
                                            className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                            onClick={prevStep}
                                        >
                                            Anterior
                                        </button>
                                        <Link
                                            href={"listarEmpresas"}
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
                                <ContactCompanyStep control={control} />
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
                                            href={"listarEmpresas"}
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
                                <LegalCompanyStep control={control} />
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
                                            href={"listarEmpresas"}
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
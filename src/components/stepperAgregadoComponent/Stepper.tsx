"use client";

import { Users } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import DataAgregadoStep from "./formDataCompany/DataAgregadoStep";

import axios from "axios";
import { useState } from "react";
import { colaboratorFormData } from "@/types/colaboratorFormData";
import Link from "next/link";
import ModalForm from "../modalForm/ModalForm";

interface StepperProps {
    currentStep: number;
}

export default function AgregadosRegistrationForm() {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalHref, setModalHref] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const { control, handleSubmit } = useForm<colaboratorFormData>({
        defaultValues: {
            cpf: "",
            nome: "",
            cargo: "",
            situacao: true,
        },
    });

    // const nextStep = async () => {
    //     const isValid = await trigger();
    //     if (!isValid) return;
    //     setCurrentStep((prev) => Math.min(prev + 1, 5));
    // };

    // const prevStep = () => {
    //     setCurrentStep((prev) => Math.max(prev - 1, 1));
    // };

    const onSubmit: SubmitHandler<colaboratorFormData> = async (data) => {
        console.log(data);

        setIsSubmitting(true);
        try {
            const response = await axios.post(
                "https://gestaocontratual.onrender.com/colaboradores",
                data
            );
            console.log("Colaborador cadastrado com sucesso:", response.data);
            setModalMessage("Colaborador cadastrado com sucesso!");
            setModalHref("listarColaboradores");
            setShowModal(true);
        } catch (error) {
            console.error("Erro ao cadastrar colaborador:", error);
            setModalMessage("Erro ao cadastrar colaborador");
            setModalHref("listarColaboradores");
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
                                <DataAgregadoStep control={control} />
                                <div className="my-8 flex items-center justify-between">
                                    <Link
                                        href={"listarColaboradores"}
                                        className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                    >
                                        Sair
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-4 py-2 rounded-md ${ isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#5fe0d5] hover:bg-[#4bc0b5]"} text-black`}>
                                    Salvar
                                </button>
                            </div>
                            </div>
                        )}
            </form>
        </div>
            </div >

        </div >
    );
}

function Stepper({ currentStep }: StepperProps) {
    return (
        <ol className="flex items-center justify-between w-full">
            {[Users].map((Icon, index) => {
                const step = index + 1;
                const active = currentStep >= step;

                return (
                    <li
                        key={step}
                        className={`flex m-auto items-center ${active ? "text-[#05b7a5]" : "text-gray-500"
                            }`}
                    >
                        <span
                            className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${active ? "bg-[#5fe0d5]/15" : "bg-gray-100 dark:bg-gray-700"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                        </span>
                    </li>
                );
            })}
        </ol>
    );
}

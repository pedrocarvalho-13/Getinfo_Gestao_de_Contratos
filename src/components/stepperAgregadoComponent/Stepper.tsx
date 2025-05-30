"use client"

import { Users } from "lucide-react"
import { useForm, SubmitHandler } from "react-hook-form"

// import { EmpresaFormData } from "@/types/EmpresaFormData"
// import { defaultValues } from "@/utils/formDefaults"

// import Link from "next/link"
import DataAgregadoStep from "./formDataCompany/DataAgregadoStep"

import axios from "axios";
import { useState } from "react";
import { colaboratorFormData } from "@/types/colaboratorFormData"
import router from "next/router";


interface StepperProps {
    currentStep: number;
}


export default function AgregadosRegistrationForm() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    const { control, handleSubmit, trigger } = useForm<colaboratorFormData>({
        defaultValues: {
            cpf: "",
            nome: "",
            cargo: "",
            situacao: false,
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

    const onSubmit: SubmitHandler<colaboratorFormData> = async (data) => {
        console.log(data)
        try {
            const response = await axios.post("https://gestaocontratual.onrender.com/colaboradores", data);
            console.log("Colaborador cadastrado com sucesso:", response.data);
            alert("Colaborador cadastrado com sucesso!");
        } catch (error) {
            console.log(data)
            console.error("Erro ao cadastrar colaborador:", error);
            alert("Erro ao cadastrar colaborador.");
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <Stepper currentStep={currentStep} />

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        {currentStep === 1 && (
                            <div>

                                <DataAgregadoStep control={control} />
                                <div className="my-8 flex items-center justify-between">

                                    <button
                                        type="button"
                                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                        onClick={() => router.push(`/colaboradores/listarColaboradores`)}
                                    >
                                        Voltar
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-[#5fe0d5] text-black rounded-md hover:bg-[#4bc0b5]"
                                    >
                                        Salvar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleSubmit((data) => console.log("Dados:", data))}
                                    >
                                        Ver dados
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
            {[Users].map((Icon, index) => {
                const step = index + 1;
                const active = currentStep >= step;
                const done = currentStep > step;

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
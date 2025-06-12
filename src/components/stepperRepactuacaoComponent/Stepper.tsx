"use client";

import { Calculator } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import DataRepactuacaoStep from "./formDataRepactuacao/DataRepactuacaoStep";
import axios from "axios";
import { useState } from "react";
import { RepactuacaoFormData } from "@/types/repactuacaoFormData";
import Link from "next/link";
import ModalForm from "../modalForm/ModalForm";

interface RepactuacaoFormProps {
    idContrato: string;
}

export default function RepactuacaoRegistrationForm({ idContrato }: RepactuacaoFormProps) {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalHref, setModalHref] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { control, handleSubmit, trigger } = useForm<RepactuacaoFormData>({
        defaultValues: {
            idContrato: parseInt(idContrato),
            tipoRepactuacao: "",
            valorAnterior: 0,
            valorNovo: 0,
            percentualReajuste: 0,
            dataVigencia: "",
            dataRepactuacao: "",
            justificativa: "",
            status: "Pendente",
        },
    });

    const onSubmit: SubmitHandler<RepactuacaoFormData> = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post(
                `https://gestaocontratual.onrender.com/contratos/${idContrato}/repactuacoes`,
                data
            );
            setModalMessage("Repactuação cadastrada com sucesso!");
            setModalHref("/contratos/listarContratos");
            setShowModal(true);
        } catch (error) {
            console.error("Erro ao cadastrar repactuação:", error);
            setModalMessage("Erro ao cadastrar repactuação");
            setModalHref("/contratos/listarContratos");
            setShowModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md">
                <div className="p-6">
                    <div className="flex items-center justify-center mb-6">
                        <Calculator className="w-8 h-8 text-[#05b7a5] mr-2" />
                        <h1 className="text-2xl font-bold">Nova Repactuação Contratual</h1>
                    </div>

                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <ModalForm
                                menssagem={modalMessage}
                                href={modalHref}
                                onClose={() => setShowModal(false)}
                            />
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <DataRepactuacaoStep control={control} />
                        <div className="my-8 flex items-center justify-between">
                            <Link
                                href="/contratos/listarContratos"
                                className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                            >
                                Cancelar
                            </Link>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-4 py-2 rounded-md ${
                                    isSubmitting
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[#5fe0d5] hover:bg-[#4bc0b5]"
                                } text-black`}
                            >
                                {isSubmitting ? "Salvando..." : "Salvar Repactuação"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
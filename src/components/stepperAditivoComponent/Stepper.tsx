"use client";

import { FileText } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import DataAditivoStep from "./formDataAditivo/DataAditivoStep";
import axios from "axios";
import { useState } from "react";
import { AditivoFormData } from "@/types/aditivoFormData";
import Link from "next/link";
import ModalForm from "../modalForm/ModalForm";

interface AditivoFormProps {
    idContrato: string;
    isEdit?: boolean;
    aditivoData?: AditivoFormData;
}

export default function AditivoRegistrationForm({ idContrato, isEdit = false, aditivoData }: AditivoFormProps) {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalHref, setModalHref] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { control, handleSubmit, trigger } = useForm<AditivoFormData>({
        defaultValues: {
            idContrato: parseInt(idContrato),
            tipoAditivo: aditivoData?.tipoAditivo || "",
            descricao: aditivoData?.descricao || "",
            justificativa: aditivoData?.justificativa || "",
            dataVigencia: aditivoData?.dataVigencia || "",
            documentoBase64: aditivoData?.documentoBase64 || "",
        },
    });

    const onSubmit: SubmitHandler<AditivoFormData> = async (data) => {
        setIsSubmitting(true);
        try {
            let response;
            
            if (isEdit && aditivoData?.id) {
                response = await axios.put(
                    `/aditivos/${aditivoData.id}`,
                    {
                        idContrato: data.idContrato,
                        documentoBase64: data.documentoBase64,
                        descricao: data.descricao,
                        dataVigencia: data.dataVigencia,
                        justificativa: data.justificativa,
                        tipoAditivo: data.tipoAditivo
                    }
                );
                setModalMessage("Aditivo atualizado com sucesso!");
            } else {
                response = await axios.post(
                    `/aditivos`,
                    {
                        idContrato: data.idContrato,
                        documentoBase64: data.documentoBase64,
                        descricao: data.descricao,
                        dataVigencia: data.dataVigencia,
                        justificativa: data.justificativa,
                        tipoAditivo: data.tipoAditivo
                    }
                );
                setModalMessage("Aditivo cadastrado com sucesso!");
            }
            
            setModalHref("/contratos/listarContratos");
            setShowModal(true);
        } catch (error) {
            console.error("Erro ao processar aditivo:", error);
            setModalMessage(isEdit ? "Erro ao atualizar aditivo" : "Erro ao cadastrar aditivo");
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
                    <div className="flex items-center gap-2 mb-6">
                        <FileText className="size-6" />
                        <h1 className="text-2xl font-bold">
                            {isEdit ? "Editar Aditivo" : "Cadastrar Aditivo"}
                        </h1>
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
                        <DataAditivoStep control={control} />
                        
                        <div className="my-8 flex items-center justify-between">
                            <Link href="/contratos/listarContratos">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5]"
                                >
                                    Cancelar
                                </button>
                            </Link>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 bg-[#5fe0d5] text-gray-800 rounded-md hover:bg-[#4bc0b5] disabled:opacity-50"
                            >
                                {isSubmitting ? "Processando..." : (isEdit ? "Atualizar" : "Cadastrar")}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
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

    const { control, handleSubmit } = useForm<AditivoFormData>({
        defaultValues: {
            idContrato: parseInt(idContrato),
            tipoAditivo: aditivoData?.tipoAditivo ?? undefined, 
            descricao: aditivoData?.descricao || "",
            justificativa: aditivoData?.justificativa || "",
            dataVigencia: aditivoData?.dataVigencia || "",
            documentoBase64: aditivoData?.documentoBase64 || "",
        },
    });

    const onSubmit: SubmitHandler<AditivoFormData> = async (data) => {
        setIsSubmitting(true);
        try {
            const payload = {
                ...data,
                dataVigencia: new Date(data.dataVigencia).toISOString(),
                documentoBase64: "JVBERi0xLjQKJeLjz9MKNCAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgNSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFsgNiAwIFIgXQovQ291bnQgMQovTWVkaWFCb3ggWzAgMCA1OTUuMjggODQxLjg5XQo+PgplbmRvYmoKNiAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDUgMCBSCi9SZXNvdXJjZXMgPDwKPj4KL01lZGlhQm94IFswIDAgNTk1LjI4IDg0MS44OV0KL0NvbnRlbnRzIDcgMCBSCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9MZW5ndGggMTEzCj4+CnN0cmVhbQpCBiAwIDAgMTAwIDcwMCBUZAogL0YxIDI0IFRECiBUZXN0ZSBBZGl0aXZvClQgRVQKZW5kc3RyZWFtCmVuZG9iagoyIDAgb2JqCjw8Ci9TdWJ0eXBlIC9UeXBlMQovVHlwZSAvRm9udAovTmFtZSAvRjEKL0Jhc2VGb250IC9UaW1lcy1Sb21hbgovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwovRmlyc3RDaGFyIDMyCj4+CmVuZG9iagoxIDAgb2JqCjw8Ci9UeXBlIC9Gb250RGVzY3JpcHRvcgovRm9udE5hbWUgL0YxCi9GbGFncyA0Ci9Gb250QkJveCBbLTIwMCAtMjAwIDgwMCA4MDBdCi9JdGFsaWNBbmdsZSAwCi9Bc2NlbnQgODAwCi9EZXNjZW50IC0yMDAKL0NhcEhlaWdodCA3MDAKL1N0ZW1WIDQwCj4+CmVuZG9iagp4cmVmCjAgOQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMDkgMDAwMDAgbiAKMDAwMDAwMDA4OCAwMDAwMCBuIAowMDAwMDAwMTcwIDAwMDAwIG4gCjAwMDAwMDAyNTkgMDAwMDAgbiAKMDAwMDAwMDQzNiAwMDAwMCBuIAowMDAwMDAwNTcwIDAwMDAwIG4gCjAwMDAwMDA3NTYgMDAwMDAgbiAKMDAwMDAwMDk3MiAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDkKL1Jvb3QgNCAwIFIKL0luZm8gOCAwIFIKL0lEIFs8ZTIzM2Y1ZjA5NDA2ZWE3NTQ1NzU4ZTBiNzdlZmFkYzg5Pl0KPj4Kc3RhcnR4cmVmCjExMDgKJSVFT0YK"
            };

            const response = await axios.post(
                `https://gestaocontratual.onrender.com/aditivos`,
                payload
            );
            console.log(response)
            setModalMessage("Aditivo cadastrado com sucesso!");
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
                            <button
                                type="button"
                                onClick={handleSubmit((data) => console.log("Dados:", data))}
                            >
                                Ver dados
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
'use client'

import { InputComponent } from "@/components/inputComponent/Input";
import { ContractFormData } from "@/types/contractFormData";
import { Control, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";


interface DataContractStepProps {
    control: Control<ContractFormData>;
}

interface Contratante {
    idContratante: number;
    cnpj: string;
    nomeFantasia: string;
    tipoEmpresa: number;
}




export default function DataViewContractStep({ control }: DataContractStepProps) {

    const contratanteData = useWatch({
        control,
        name: "contratante"
    });

    const statusContrato = useWatch({
        control,
        name: "status" 
    });

    const [displayedTipoContrato, setDisplayedTipoContrato] = useState<string>("")

    useEffect(() => {
        console.log("Dados do Contratante (via useWatch):", contratanteData);
        if (contratanteData) {
            console.log("Tipo da Empresa (contratanteData.tipoEmpresa):", contratanteData.tipoEmpresa);
        }
        if (contratanteData) {
            if (contratanteData.tipoEmpresa === 0) {
                setDisplayedTipoContrato("Público");
            } else if (contratanteData.tipoEmpresa === 1) {
                setDisplayedTipoContrato("Privado");
            } else {
                setDisplayedTipoContrato(""); 
            }
        } else {
            setDisplayedTipoContrato("");
        }
        console.log(displayedTipoContrato)
    }, [contratanteData]);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos do Contrato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <InputComponent
                        name={"contratante.nomeFantasia"} 
                        label="Nome da Empresa"
                        placeholder={"Informe o nome da empresa"}
                        control={control}
                        readOnly={true}
                    />

                    <InputComponent
                        name={"responsavel"}
                        label="Responsável pelo Contrato"
                        placeholder={"Nome Completo"}
                        control={control}
                        readOnly={true}
                    />

                    <InputComponent
                        label="Data de Início"
                        type={"date"}
                        name={"dtInicio"}
                        placeholder={"000000000"}
                        control={control}
                        readOnly={true}
                    />

                    <InputComponent
                        label="Data Final"
                        type={"date"}
                        name={"dtFim"}
                        placeholder={"000000000"}
                        control={control}
                        readOnly={true}
                    />

                    <InputComponent
                        name={"tipoContratoCalculado"} 
                        label="Tipo do Contrato"
                        readOnly={true}
                        value={displayedTipoContrato} 
                    />

                    <InputComponent
                        label="Tipo de Serviço"
                        type={"text"}
                        name={"tipoServico"}
                        placeholder={"Desenvolvimento de Software"}
                        control={control}
                        readOnly={true}
                    />

                    <InputComponent
                        name={"status"}
                        label="Status do Contrato"
                        placeholder={"Ativo"}
                        control={control}
                        readOnly={true}
                    />
                </div>
            </div>
        </div>
    )
}
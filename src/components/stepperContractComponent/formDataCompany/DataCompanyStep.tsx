'use client'

import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { ContractFormData } from "@/types/contractFormData";
import { Control } from "react-hook-form";

import axios from "axios";
import { useState, useEffect } from "react";
import { SelectInputS } from "@/components/inputComponent/SelectString";

// import { formDataProps } from "@/types/formPropsType";

interface DataContractStepProps {
    control: Control<ContractFormData>;
}

interface Contratante {
    idContratante: number;
    cnpj: string;
    nomeFantasia: string;
}

interface Colaborator {
    id: number;
    nome: string;
    cargo: string;
}

interface Status {
    idStatus: number;
    nome: string;
    descricao: string;
}


export default function DataContractStep({ control }: DataContractStepProps) {

    const [contratantes, setContratantes] = useState<Contratante[]>([]);
    const [colaborators, setColaborators] = useState<Colaborator[]>([]);
    const [status, setStatus] = useState<Status[]>([]);


    useEffect(() => {
        axios.get("https://gestaocontratual.onrender.com/contratantes") // <-- Altere a URL para sua rota real
            .then((response) => {
                setContratantes(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar contratantes:", error);
            });
    }, []);

    useEffect(() => {
        axios.get("https://gestaocontratual.onrender.com/colaboradores") // <-- Altere a URL para sua rota real
            .then((response) => {
                setColaborators(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar colaboradores:", error);
            });
    }, []);

    useEffect(() => {
        axios.get("https://gestaocontratual.onrender.com/statusContrato/listarStatus") // <-- Altere a URL para sua rota real
            .then((response) => {
                setStatus(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar status:", error);
            });
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos do Contrato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* CNPJ */}
                    {/* <InputComponent
                        label="CNPJ"
                        type={"text"}
                        name={"cnpj"}
                        placeholder={"00.000.000/0000-00"}
                        control={control}
                    /> */}

                    {/* <SelectInput
                        name={"cnpj"}
                        label="CNPJ"
                        placeholder={"00.000.000/0000-00"}
                        control={control}
                        options={contratantes.map(c => ({ label: c.cnpj, value: c.cnpj }))}
                    /> */}

                    {/* Razão Social */}
                    <SelectInput
                        name={"idContratante"}
                        label="Nome da Empresa"
                        placeholder={"Informe o nome da empresa"}
                        control={control}
                        options={contratantes.map(c => ({ label: c.nomeFantasia, value: c.idContratante }))}
                    />

                    <SelectInputS
                        name={"responsavel"}
                        label="Responsável pelo Contrato"
                        placeholder={"Nome Completo"}
                        control={control}
                        options={colaborators.map(c => ({ label: c.nome, value: c.id.toString(), key: c.id }))}
                    />

                    {/* <SelectInput
                        name={"responsavelContrato"}
                        label="Responsável pelo Contrato"
                        placeholder={"Nome Completo"}
                        control={control}
                        options={colaborators.map(c => ({ label: c.nome, value: c.id.toString() }))}
                    /> */}

                    {/* Nome Fantasia */}
                    {/* <InputComponent
                        label="Responsável pelo Contrato"
                        type={"text"}
                        name={"responsavelContrato"}
                        placeholder={"Nome Completo"}
                        control={control}
                    /> */}

                    {/* Inscrição Estadual */}
                    <InputComponent
                        label="Data de Início"
                        type={"date"}
                        name={"dtInicio"}
                        placeholder={"000000000"}
                        control={control}
                    />

                    {/* Inscrição Municipal */}
                    <InputComponent
                        label="Data Final"
                        type={"date"}
                        name={"dtFim"}
                        placeholder={"000000000"}
                        control={control}
                    />


                    <SelectInput
                        name={"tipoContrato"}
                        label="Tipo do Contrato"
                        placeholder={"Selecione um tipo"}
                        control={control}
                        options={[
                            { label: "Público", value: 0 },
                            { label: "Privado", value: 1 },
                        ]}
                    />

                    <InputComponent
                        label="Tipo de Serviço"
                        type={"text"}
                        name={"tipoServico"}
                        placeholder={"Desenvolvimento de Software"}
                        control={control}
                    />

                    <SelectInput
                        name={"idStatus"}
                        label="Status do Contrato"
                        placeholder={"Ativo"}
                        control={control}
                        options={status.map(c => ({ label: c.nome.toLocaleUpperCase(), value: c.idStatus}))}
                    />
                    {/* Data de Fundação */}
                    {/* <InputComponent label="Tipo de Contrato" select={true} name={"Tipo de Contrato"} placeholder="-.-" control={control} /> */}
                    {/* <InputComponent
                        label="Tipo de Contrato "
                        name={"tipoContrato"}
                        control={control}
                        select={true}
                        placeholder="Seleciione um tipo"
                        options={[
                            { label: "Desenvolvimento de Software", value: "desenvolvimento" },
                            { label: "Infraestrutura", value: "infraestrutura" },
                        ]}
                    /> */}
                </div>
            </div>
        </div>
    )
}
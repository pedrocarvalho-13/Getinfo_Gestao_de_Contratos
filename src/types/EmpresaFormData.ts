import { FieldValues } from "react-hook-form";

export type EmpresaFormData = FieldValues & {
        idContratante?: number; // pode ser opcional se for gerado pelo backend
        cnpj: string;
        razaoSocial: string;
        nomeFantasia: string;
        inscricaoEstadual: string;
        inscricaoMunicipal: string;
        emailCorporativo: string;
        site: string;
        dataFundacao: string; // formato recebido da API é string (ex: "2025-05-03")
        telefone: string;
        telefoneFixo: string;
        cep: string;
        bairro: string;
        numeroDaCasa: string;
        rua: string;
        cidade: string;
        estado: string;
        banco: string;
        agencia: string;
        cpfLegal: string;
        responsavelLegalCpf: string;
        responsavelLegalNome: string;
        responsavelLegalTelefone: string;
        responsavelLegalEmail: string
};
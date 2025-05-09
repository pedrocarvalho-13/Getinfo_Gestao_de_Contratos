export type FormData = {

    // dados da empresa

    cnpj: string;
    razaoSocial: string;
    nomeFantasia: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    dataFundacao: string;

    // dados para contato

    cep: string;
    numero: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    telefoneCorporativo: string;
    telefoneFixo: string;
    emailCorporativo: string;
    webSite: string;
}
export type FormDataLegalCompany = {
    // responsavel legal

    nomeCompleto: string;
    cpf: string;
    rg: string;
    telefoneResponsavelLegal: string;
    emailResponsavelLegal: string;
}
export type FormDataBankCompany = {
    // Informações Bancarias

    banco: string;
    agencia: string;
    conta:string;
    contaTipo: string;
}

export type AllFormData = FormData & FormDataLegalCompany & FormDataBankCompany;

export const initialFormData: AllFormData = {
    // FormData
    cnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
    inscricaoEstadual: "",
    inscricaoMunicipal: "",
    dataFundacao: "",
    cep: "",
    numero: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    telefoneCorporativo: "",
    telefoneFixo: "",
    emailCorporativo: "",
    webSite: "",

    // FormDataLegalCompany
    nomeCompleto: "",
    cpf: "",
    rg: "",
    telefoneResponsavelLegal: "",
    emailResponsavelLegal: "",

    // FormDataBankCompany
    banco: "",
    agencia: "",
    conta: "",
    contaTipo: "",
};

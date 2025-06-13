export type contract = {
    numContrato: string,
    nomeFantasia: string,
    dtInicio: string,
    dtFim: string,
    status: string
    // nm_contratos: string,
    // edit_contract: String
}

export interface RawContractData {
    nm_contrato: string;
    nome_empresa: string;
    cnpj: string;
    tipo_contrato: string;
    status: string;
    dt_inicio_contrato: string;
    dt_final_contrato: string;
    // Adicione quaisquer outras propriedades que existam nos objetos brutos da sua lista
}
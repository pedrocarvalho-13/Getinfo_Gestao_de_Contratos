import { FieldValues } from "react-hook-form";

export type ContractFormDataUpdate = FieldValues & {
    responsavel: string,
    numContrato: number,
    status: string,
    tipoServico: string,
    entregaveis: {
        nome: string,
        dtInicio: string,
        dtFim: string,
        Status: string,
        descricao: string,
        colaboradores: {
            id: number,
            funcaoEntregavel: string
        }[]
    }[], 
    dtInicio: string,
    idContratante: number,
    colaboradores: {
        id: number,
        funcaoContrato: string
    }[], 
    dtFim: string,
    documentos?: File[];
}

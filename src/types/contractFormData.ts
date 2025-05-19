import { FieldValues } from "react-hook-form";

export type ContractFormData = FieldValues & {
    
        responsavel: string,
        numContrato: number,
            postos: [
                {
                    nome: string,
                    descricao: string
                }
            ],
        idStatus: number,
        tipoServico: string,
        tipoContrato: string,
        entregaveis: [
            {
                // idContrato: number,
                nome: string,
                dtInicio: string,
                dtFim: string,
                Status: string,
                descricao: string,
                colaboradores: [
                    {
                        id: number,
                        funcaoEntregavel: string
                    }
                ]
            }
        ],
        dtInicio: string,
        idContratante: number,
        colaboradores: [
            {
                id: number,
                funcaoContrato: string
            }
        ],
        dtFim: string,
        documentos?: File[];
}

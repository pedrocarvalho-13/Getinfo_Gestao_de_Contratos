export type TipoAditivo = 1 | 2 | 3 | 4;

export interface AditivoFormData {
    idContrato: number;
    tipoAditivo: TipoAditivo;
    descricao: string;
    justificativa: string;
    dataVigencia: string;
    documentoBase64: string;
}
// export interface AditivoFormData {
//     id?: number;
//     idContrato: number;
//     documentoBase64?: string;
//     descricao: string;
//     dataVigencia: string;
//     justificativa: string;
//     tipoAditivo: string;

// }
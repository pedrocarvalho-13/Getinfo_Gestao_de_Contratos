import { FieldValues } from "react-hook-form";

export type AditivoFormData = FieldValues & {
    id?: number;
    idContrato: number;
    documentoBase64?: string;
    descricao: string;
    dataVigencia: string; 
    justificativa: string;
    tipoAditivo: string;

}
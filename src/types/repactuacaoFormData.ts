import { FieldValues } from "react-hook-form";

export type RepactuacaoFormData = FieldValues & {
    id?: number;
    idContrato: number;
    dtFimContrato: string;
    nome: string;
    descricao: string;
}
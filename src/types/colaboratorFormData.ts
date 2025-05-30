import { FieldValues } from "react-hook-form"

export type colaboratorFormData =  FieldValues & {
        id?: number,
        cpf: string,
        nome: string,
        cargo: string,
        situacao: boolean,
}
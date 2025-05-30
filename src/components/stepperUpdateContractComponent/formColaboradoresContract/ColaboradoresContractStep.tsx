"use client";

import { InputComponent } from "@/components/inputComponent/Input";
import { SelectInput } from "@/components/inputComponent/Select";
import { ContractFormData } from "@/types/contractFormData";
import axios from "axios";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { Control, useFieldArray } from "react-hook-form";

interface ColaboradoresContractProps {
    control: Control<ContractFormData>;
}

interface Colaborator {
    id: number;
    nome: string;
    cargo: string;
}

export default function ColaboradoresContractStep({ control }: ColaboradoresContractProps) {
    const [colaborators, setColaborators] = useState<Colaborator[]>([]);

    // Hook para array de campos
    const { fields, append, remove } = useFieldArray({
        control,
        name: "colaboradores",
    });

    // Busca os colaboradores
    useEffect(() => {
        let isMounted = true;


        axios.get("https://gestaocontratual.onrender.com/colaboradores")
        .then((response) => {
            if (isMounted) {
                setColaborators(response.data);
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar colaboradores:", error);
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Agregados</h2>

        {fields.map((field, index) => (
            <div
            key={field.id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 items-center justify-between"
            >
            <SelectInput
                name={`colaboradores.${index}.id`}
                label="Nome do Agregado"
                placeholder="Selecione um agregado"
                control={control}
                options={colaborators.map(c => ({
                label: c.nome,
                value: c.id,
                }))}
            />

            <InputComponent
                name={`colaboradores.${index}.funcaoContrato`}
                label="Função"
                type="text"
                placeholder="Informe a função do agregado no contrato"
                control={control}
            />

            <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 underline hover:text-red-700 mt-4"
                aria-label="Remover agregado"
            >
                <Trash/>
                {/* Remover */}
            </button>
            </div>
        ))}

        <button
            type="button"
            onClick={() => append({id: colaborators[0]?.id ?? 0, funcaoContrato: "" })}
            className="mt-4 px-4 py-2 bg-[#5fe0d5] text-black rounded hover:bg-[#68c0ba] focus:bg-[#5fe0d5] transition"
        >
            Adicionar Agregado
        </button>
        </div>
    );
}


// "use client"

// import { InputComponent } from "@/components/inputComponent/Input";
// import { SelectInput } from "@/components/inputComponent/Select";
// // import { InputAddComponent } from "@/components/inputComponent/InputAdd";
// import { ContractFormData } from "@/types/contractFormData";
// import axios from "axios";
// import { useState, useEffect } from "react";
// // import { formDataProps } from "@/types/formPropsType";
// import { Control } from "react-hook-form";

// interface ColaboradoresContractProps {
//     control: Control<ContractFormData>;
// }

// interface Colaborator {
//     id: number;
//     nome: string;
//     cargo: string;
// }

// interface Agregado {
//     id: string;
//     funcaoContrato: string;
// }

// export default function ColaboradoresContractStep({ control }: ColaboradoresContractProps) {

//     const [colaborators, setColaborators] = useState<Colaborator[]>([]);
//     const [agregado, setAgregado] = useState<Agregado>({ id: "", funcaoContrato: "" });
//     const [agregadosAdicionados, setAgregadosAdicionados] = useState<Agregado[]>([]);

//     useEffect(() => {
//         axios.get("https://gestaocontratual.onrender.com/colaboradores") // <-- Altere a URL para sua rota real
//             .then((response) => {
//                 setColaborators(response.data);
//             })
//             .catch((error) => {
//                 console.error("Erro ao buscar colaboradores:", error);
//             });
//     }, []);

//     function handleAddAgregado() {
//         if (!agregado.id || !agregado.funcaoContrato) {
//             alert("Preencha todos os campos antes de adicionar.");
//             return;
//         }

//         setAgregadosAdicionados((prev) => [...prev, agregado]);
//         setAgregado({ id: "", funcaoContrato: "" }); // limpa campos
//     }

//     return (
//         <div className="w-full">
//             <h2 className="text-2xl font-bold mb-6">Agregados</h2>
//             <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

//                 <SelectInput
//                     name={"colaboradores.id"}
//                     label="Nome do Agregado"
//                     placeholder={"Selecione um agregado"}
//                     control={control}
//                     options={colaborators.map(c => ({ label: c.nome, value: c.id.toString() }))}
//                 />


//                 <InputComponent
//                     label="Função"
//                     type={"text"}
//                     name={"colaboradores.funcaoContrato"}
//                     placeholder={"Informe a função do agregado no contrato"}
//                     control={control}
//                     />

//                     {/* <SelectInput
//                         name={"colaboradores.funcaoContrato"}
//                         label="Função"
//                         placeholder={"Selecione uma função"}
//                         control={control}
//                         options={colaborators.map(c => ({ label: c.cargo, value: c.id.toString() }))}
//                     /> */}
                

//                 {/* <InputComponent
//                     label="Nome do Colaborador "
//                     name={"colaboradored.id"}
//                     control={control}
//                     select={true}
//                     options={colaborators.map(c => ({ label: c.nome, value: c.id.toString() }))}
//                 /> */}
//                 {/* CEP */}
//                 {/* <InputAddComponent control={control} label={"Digite o CPF do Colaborador"} name={"cpfColaborador"} type={"text"} placeholder={"000.000.000-00"} /> */}
//             </div>
//         </div>
//     )
// }
"use client";

import { InputComponent } from "@/components/inputComponent/Input";
import { Textarea } from "@/components/ui/textarea";
import { ContractFormData } from "@/types/contractFormData";
import { Control, Controller, useFieldArray } from "react-hook-form";

interface ColaboradoresContractProps {
    control: Control<ContractFormData>;
}


export default function PostosContractStep({ control }: ColaboradoresContractProps) {
    // Hook para array de campos
    const { fields, append } = useFieldArray({
        control,
        name: "postos",
    });

    return (
        <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Postos de Trabalho</h2>

        {fields.map((field, index) => (
            <div
            key={field.id}
            className="grid grid-cols-1 gap-4 mb-4 items-center justify-between"
            >

            <InputComponent
                name={`postos.${index}.nome`}
                label="Postos de Trabalho"
                type="text"
                placeholder="Digite um posto"
                control={control}
            />
                <div className="flex flex-col w-full gap-1">
                        <label className="font-medium text-sm">Descreva o Posto</label>
                        <Controller
                            control={control}
                            name={`postos.${index}.descricao`}
                            render={({ field }) => (
                                <Textarea
                                    rows={6}
                                    className="w-full"
                                    placeholder="Descreva o posto"
                                    {...field}
                                />
                            )}
                        />
                    </div>
            </div>
        ))}

        <button
            type="button"
            onClick={() => append({ nome: "", descricao: "" })}
            className="mt-4 px-4 py-2 bg-[#5fe0d5] text-black rounded hover:bg-[#68c0ba] focus:bg-[#5fe0d5] transition"
        >
            Adicionar Posto
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
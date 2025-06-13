import { Control } from "react-hook-form";
import { ContractFormData } from "@/types/contractFormData";
import axios from "axios";
import { useState, useEffect } from "react";

interface AnexoDocsStepProps {
  control: Control<ContractFormData>;
  idContrato: string
}

interface docs {
  idDocumento: string,
  nome: string,
  url: string
}


export default function AnexoViewDocsStep({ idContrato }: AnexoDocsStepProps) {

  const [documentos, setDocumento] = useState<docs[]>([]);

  // const { fields, append, remove } = useFieldArray({
  //   control,
  //   name: "entregaveis",
  // });

  useEffect(() => {
    axios.get(`https://gestaocontratual.onrender.com/documentos/${idContrato}`)
      .then((response) => {
        setDocumento(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar documento:", error);
      });
  }, []);

  const abrirDocumento = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col gap-4">

      <h1 className="text-lg font-bold">Anexos do Contrato</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {documentos.map(doc => (
          <div
            key={doc.idDocumento}
            className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
            onClick={() => abrirDocumento(doc.url)}
          >
            <h2 className="text-md font-bold overflow-hidden">{doc.nome}</h2>

          </div>
        ))}
      </div>
    </div>
  );
}

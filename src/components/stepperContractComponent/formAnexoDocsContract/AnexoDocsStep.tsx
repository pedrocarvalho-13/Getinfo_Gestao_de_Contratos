import { Control, Controller } from "react-hook-form";
import { ContractFormData } from "@/types/contractFormData";
import Style from "@/Styles/style.module.css";

interface AnexoDocsStepProps {
  control: Control<ContractFormData>;
}

export default function AnexoDocsStep({ control }: AnexoDocsStepProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Documentos Anexados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          control={control}
          name="documentos"
          render={({ field: { onChange, ref } }) => (
            <input
              type="file"
              multiple
              ref={ref}
              onChange={(e) => {
                if (e.target.files) {
                  onChange(Array.from(e.target.files)); // envia como File[]
                }
              }}
              className={`${Style.fileInput} block placeholder-gray-500 cursor-pointer border border-gray-200`}
            />
          )}
        />
      </div>
    </div>
  );
}

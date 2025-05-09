import { formLegalProps } from "@/types/formPropsType";

export default function LegalGuardianStep({ formData, handleInputChange }:formLegalProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informações do Responsável Legal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <label htmlFor="nomeLegal" className="text-sm font-medium block">
                        Nome Completo
                    </label>
                    <input
                        id="nomeLegal"
                        name="nomeCompleto"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Nome completo do responsável"
                        value={formData.nomeCompleto}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="cpfLegal" className="text-sm font-medium block">
                        CPF
                    </label>
                    <input
                        id="cpfLegal"
                        name="cpf"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="123.456.789-00"
                        value={formData.cpf}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="rgLegal" className="text-sm font-medium block">
                        RG
                    </label>
                    <input
                        id="rgLegal"
                        name="rg"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="12.345.678-9 "
                        value={formData.rg}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="telefoneLegal" className="text-sm font-medium block">
                        Telefone
                    </label>
                    <input
                        id="telefoneLegal"
                        name="telefoneResponsavelLegal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="(79) 91234-5678"
                        value={formData.telefoneResponsavelLegal}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="emailLegal" className="text-sm font-medium block">
                        Email
                    </label>
                    <input
                        id="emailLegal"
                        name="emailResponsavelLegal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="exemplo@email.com"
                        type="email"
                        value={formData.emailResponsavelLegal}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    )
}
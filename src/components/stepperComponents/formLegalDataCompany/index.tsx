import { formLegalProps } from "@/types/formPropsType";

export default function LegalGuardianStep({ formData, handleInputChange }:formLegalProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informações do Responsável Legal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="nomeLegal" className="text-sm font-medium block">
                        Nome Completo
                    </label>
                    <input
                        id="nomeLegal"
                        name="nomeLegal"
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
                        name="cpfLegal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="CPF do responsável"
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
                        name="rgLegal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="RG do responsável"
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
                        name="telefoneLegal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Telefone do responsável"
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
                        name="emailLegal"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Email do responsável"
                        type="email"
                        value={formData.emailReponsavelLegal}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    )
}
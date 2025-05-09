import { formBankProps } from "@/types/formPropsType";


export default function BankInfoStep({ formData, handleInputChange, handleSelectChange }:formBankProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Informações Bancárias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="banco" className="text-sm font-medium block">
                        Banco
                    </label>
                    <input
                        id="banco"
                        name="banco"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Banco do Brasil"
                        value={formData.banco}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="agencia" className="text-sm font-medium block">
                        Agência
                    </label>
                    <input
                        id="agencia"
                        name="agencia"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="1234-5"
                        value={formData.agencia}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="conta" className="text-sm font-medium block">
                        Conta
                    </label>
                    <input
                        id="conta"
                        name="conta"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Número da conta"
                        value={formData.conta}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="contaTipo" className="text-sm font-medium block">
                        Tipo de Conta
                    </label>
                    <select
                        id="contaTipo"
                        name="contaTipo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={formData.contaTipo}
                        onChange={handleSelectChange}
                    >
                        <option value="">--</option>
                        <option value="corrente">Conta Corrente</option>
                        <option value="poupanca">Conta Poupança</option>
                        <option value="salario">Conta Salário</option>
                        <option value="investimento">Conta Investimento</option>
                    </select>
                </div>

                {/* <div className="space-y-2">
                    <label htmlFor="pix" className="text-sm font-medium block">
                        Chave PIX
                    </label>
                    <input
                        id="pix"
                        name="pix"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Chave PIX"
                        value={formData.pix}
                        onChange={handleInputChange}
                    />
                </div> */}
            </div>
        </div>
    )
}

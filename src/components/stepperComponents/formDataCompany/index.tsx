import { formDataProps } from "@/types/formPropsType";


export default function CompanyDataStep({ formData, handleInputChange, handleSelectChange }:formDataProps) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-6">Dados Básicos da Empresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="cnpj" className="text-sm font-medium block">
                            CNPJ
                        </label>
                        <input
                            id="cnpj"
                            name="cnpj"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite o CNPJ da empresa"
                            value={formData.cnpj}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="razaoSocial" className="text-sm font-medium block">
                            Razão Social
                        </label>
                        <input
                            id="razaoSocial"
                            name="razaoSocial"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite a razão social da empresa"
                            value={formData.razaoSocial}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="nomeFantasia" className="text-sm font-medium block">
                            Nome Fantasia
                        </label>
                        <input
                            id="nomeFantasia"
                            name="nomeFantasia"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite o nome fantasia da empresa"
                            value={formData.nomeFantasia}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="inscricaoEstadual" className="text-sm font-medium block">
                            Inscrição Estadual
                        </label>
                        <input
                            id="inscricaoEstadual"
                            name="inscricaoEstadual"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite a inscrição estadual da empresa"
                            value={formData.inscricaoEstadual}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="inscricaoMunicipal" className="text-sm font-medium block">
                            Inscrição Municipal
                        </label>
                        <input
                            id="inscricaoMunicipal"
                            name="inscricaoMunicipal"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite a inscrição mun. da empresa"
                            value={formData.inscricaoMunicipal}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="dataFundacao" className="text-sm font-medium block">
                            Data de Fundação
                        </label>
                        <input
                            id="dataFundacao"
                            name="dataFundacao"
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={formData.dataFundacao}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="cep" className="text-sm font-medium block">
                            CEP
                        </label>
                        <input
                            id="cep"
                            name="cep"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite o CEP da empresa"
                            value={formData.cep}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="numero" className="text-sm font-medium block">
                            Número
                        </label>
                        <input
                            id="numero"
                            name="numero"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite o número"
                            value={formData.numero}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="estado" className="text-sm font-medium block">
                            Estado
                        </label>
                        <select
                            id="estado"
                            name="estado"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={formData.estado}
                            onChange={handleSelectChange}
                        >
                            <option value="">Estado</option>
                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="PR">Paraná</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="BA">Bahia</option>
                            <option value="DF">Distrito Federal</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="cidade" className="text-sm font-medium block">
                            Cidade
                        </label>
                        <select
                            id="cidade"
                            name="cidade"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={formData.cidade}
                            onChange={handleSelectChange}
                        >
                            <option value="">Cidade</option>
                            <option value="sao-paulo">São Paulo</option>
                            <option value="rio-de-janeiro">Rio de Janeiro</option>
                            <option value="belo-horizonte">Belo Horizonte</option>
                            <option value="porto-alegre">Porto Alegre</option>
                            <option value="curitiba">Curitiba</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="bairro" className="text-sm font-medium block">
                            Bairro
                        </label>
                        <input
                            id="bairro"
                            name="bairro"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Bairro"
                            value={formData.bairro}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="rua" className="text-sm font-medium block">
                            Rua
                        </label>
                        <input
                            id="rua"
                            name="rua"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite o nome da rua"
                            value={formData.rua}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="telefone" className="text-sm font-medium block">
                            Telefone
                        </label>
                        <input
                            id="telefone"
                            name="telefone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="(99) 99999-9999"
                            value={formData.telefoneCorporativo}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="telefoneFijo" className="text-sm font-medium block">
                            Telefone Fixo
                        </label>
                        <input
                            id="telefoneFijo"
                            name="telefoneFijo"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Telefone Fixo"
                            value={formData.telefoneFixo}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="emailCorporativo" className="text-sm font-medium block">
                            Email Corporativo
                        </label>
                        <input
                            id="emailCorporativo"
                            name="emailCorporativo"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="exemplo@email.com"
                            type="email"
                            value={formData.emailCorporativo}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="website" className="text-sm font-medium block">
                            Website
                        </label>
                        <input
                            id="website"
                            name="website"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            placeholder="Digite o nome do site da empresa"
                            value={formData.webSite}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* <div className="space-y-2">
                        <label htmlFor="dataInicio" className="text-sm font-medium block">
                            Data de Início
                        </label>
                        <input
                            id="dataInicio"
                            name="dataInicio"
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={formData.dataInicio}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="dataTermino" className="text-sm font-medium block">
                            Data de Término
                        </label>
                        <input
                            id="dataTermino"
                            name="dataTermino"
                            type="date"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={formData.dataTermino}
                            onChange={handleInputChange}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
import { InputComponent } from "@/components/inputComponent/Input";
import { EmpresaFormData } from "@/types/EnmpresaFormData";
import { formDataProps } from "@/types/formPropsType";
import { Control } from "react-hook-form";

interface AdressCompanyStepProps {
    control: Control<EmpresaFormData>;
}

export default function AddressCompanyStep({ control }: AdressCompanyStepProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Endereço da Empresa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {/* CEP */}
                <InputComponent
                    label="CEP"
                    type={"text"}
                    name={"cep"}
                    placeholder={"49000-00"}
                    mask={"99999-00"}
                    control={control}
                />


                {/* Rua */}
                <InputComponent
                    label="Rua"
                    type={"text"}
                    name={"rua"}
                    placeholder={"Av. Presidente Tancredo Neves"}
                    control={control}
                />

                {/* Numero */}
                <InputComponent
                    label="Número"
                    type={"text"}
                    name={"numeroDaCasa"}
                    placeholder={"0000"}
                    control={control}
                />

                {/* Bairro */}
                <InputComponent
                    label="Bairro"
                    type={"text"}
                    name={"bairro"}
                    placeholder={"São José"}
                    control={control}
                />


                {/* Cidade */}
                <InputComponent
                    label="Cidade"
                    type={"text"}
                    name={"cidade"}
                    placeholder={"Aracaju"}
                    control={control}
                />

                {/* Estado */}
                <InputComponent
                    label="Estado"
                    type={"text"}
                    name={"estado"}
                    placeholder={"Sergipe"}
                    control={control}
                />

                {/* <div className="space-y-2">
                    <label htmlFor="cep" className="text-sm font-medium block">
                        CEP
                    </label>
                    <input
                        id="cep"
                        name="cep"
                        placeholder="49000-000"
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
                        placeholder="0000"
                        value={formData.numero}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="estado" className="text-sm font-medium block">
                        Estado
                    </label>
                    <input
                        id="numero"
                        name="numero"
                        placeholder="0000"
                        value={formData.numero}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="cidade" className="text-sm font-medium block">
                        Cidade
                    </label>
                    <input
                        id="numero"
                        name="numero"
                        placeholder="0000"
                        value={formData.numero}
                        onChange={handleInputChange}
                    />
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
                </div> */}











                {/* 
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
                    <label htmlFor="telefoneFixo" className="text-sm font-medium block">
                        Telefone Fixo
                    </label>
                    <input
                        id="telefoneFixo"
                        name="telefoneFixo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="(11) 2345-6789"
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
                        name="webSite"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="https://www.empresa.com.br"
                        value={formData.webSite}
                        onChange={handleInputChange}
                    />
                </div> */}


                {/* acaba aqui */}

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
    )
}
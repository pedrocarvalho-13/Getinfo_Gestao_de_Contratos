// import { FormData, FormDataBankCompany, FormDataLegalCompany } from "./formDataType";
import { AllFormData } from "./formDataType";

export type formDataProps = {
    formData: AllFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export type formLegalProps = {
    formData: AllFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    // handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}

export type formBankProps = {
    formData: AllFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; 
}
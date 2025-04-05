import { services } from "./connection";
import api from "./api";

export default class Status {
     listaStatus = async () =>  {
        try {
            let res = await api.get(`${services.status.listaStatus}`)
            console.log(res.data);
            return res;
        } catch (error) {
            return error.message;
        }
    }
}
import axios from "axios";

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    baseURL: 'https://gestaocontratual.onrender.com/'
})

export const services = {

    status:{
        listaStatus: "status/listarStatus"
    }
}

export default api;
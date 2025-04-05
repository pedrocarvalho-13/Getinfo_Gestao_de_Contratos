import Status from "@/services/statusService"
import { useEffect } from "react";


async function fetchContratos() {
    try {
        const status = new Status();
        await status.listaStatus().then((response) => console.log(response))
    } catch (error) {
        console.error('Erro ao buscar contratos:', error);
    }
}

// useEffect(() => {


//     fetchContratos();
// }, []);

export default function Teste() {
    return (
        <>
            <h1>Ola mundo</h1>
            <input onClick={() => fetchContratos()} type="submit" />

            {fetchContratos()}            
        </>
    );
}
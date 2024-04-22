
import type { PageServerLoad, Actions } from './$types';
const api_url = import.meta.env.VITE_API_BASE_URL;


export const load = (async ({ cookies }) => {
    const token = cookies.get('token')
    let clientes;
    let months;
    if(token) {
        months = await getMonths(token);
        clientes = await getRelatorioCliente(token, months[0]);
    } 
    if(!clientes)
        return {};



    return {clientes: clientes,months: months}
}) satisfies PageServerLoad;



/*const getRelatorioCliente = async (token: string) => {
    const response = await fetch(`${api_url}/ListaDeClientes`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        
    }); 

    const responseData = await response.json()

    return responseData;
}; */

const getMonths = async (token: string) => {
    const response = await fetch(`${api_url}/ListaDeClientes/GetAllMonths`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    

    const responseData = await response.json()

    return responseData;
};

const getRelatorioCliente = async (token: string, parametro: string) => {
    const queryString = new URLSearchParams({
        date: parametro
    }).toString();

    const url = `${api_url}/ListaDeClientes/GetByMonth?${queryString}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const responseData = await response.json() 
    
    return responseData;
}; 
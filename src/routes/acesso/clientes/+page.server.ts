import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {

    const token = cookies.get('token')
    let clientes;

    if(token) {

        clientes = await getCooperativas(token)
        // console.log(cooperativas)
    }
        
    if(!clientes)
        return {};

    return {clientes: clientes}
}) satisfies PageServerLoad;


const getCooperativas = async (token: string) => {

    const api_url = import.meta.env.VITE_API_BASE_URL
    console.log(token)
    const response = await fetch(`${api_url}/Cooperativa`, {
        method: 'GET', // or any other method
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json', // assuming JSON content type
        },
        credentials: 'include', // Include cookies in the request if needed
    });

    // console.log(await response.text())
    const responseData = await response.json()
    
    return responseData;
};


import type { PageServerLoad, Actions } from './$types';

interface DataObject {
    razaosocial: string;
    cnpj: string;
    mesreferente: string;
    medicalLicencasAtivas: number;
    cooperadosAtivos: number;
    faturado: number;
    recebido: number;
    glosado: number;
    recebidoGlosa: number;
    quantidadeGlosa: number;
    versao: string;
    dataDeEnvio: string;
    folhaFechada: number;
    nomeFantasia: string;
    id: number;
  }
  
  interface AggregatedData {
    quantidadeGlosa: number;
    licencasAtivas: number;
    recebido: number;
    faturado: number;
    glosado: number;
    distinctCNPJCount: number;
  }

const api_url = import.meta.env.VITE_API_BASE_URL
let clientes2: DataObject[]

let aggregatedData: AggregatedData[];

export const load = (async ({ cookies, locals }) => {
    const token = cookies.get('token')
    let clientes;
    if(token) {
        clientes = await getCooperativas(token);
        clientes2 = await getListaDeClientes(token)
        //console.log(clientes2)
        aggregatedData = GetAggregateData(clientes2);
    }
    if(!clientes)
        return {};

    return {clientes: clientes, aggregatedData: aggregatedData}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
        const token = cookies.get('token')
        if(!token) return;
		const data = await request.formData();
        const nomeFantasia = data.get('nomeFantasia');
        const razaoSocial = data.get('razaoSocial');
        const cnpj = data.get('cnpj');

        const res = await fetch(`${api_url}/Cooperativa`,             {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', // assuming JSON content type
            },
            body: JSON.stringify({ nomeFantasia: nomeFantasia, razaoSocial: razaoSocial, cnpj: cnpj?.toString().replace(/[^\d]/g, ''), }),
            credentials: 'include',
        })
	},
} satisfies Actions;


const getCooperativas = async (token: string) => {
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

const getListaDeClientes = async (token: string) => {
    const response = await fetch(`${api_url}/ListaDeClientes`, {
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


function GetAggregateData(data: DataObject[]): AggregatedData[] {
    const aggregatedData: { [key: string]: AggregatedData } = {};
  
    data.forEach(obj => {
      const monthYear = obj.mesreferente.slice(0, 7);
  
      if (!aggregatedData[monthYear]) {
        aggregatedData[monthYear] = {
          quantidadeGlosa: 0,
          licencasAtivas: 0,
          recebido: 0,
          faturado: 0,
          glosado: 0,
          distinctCNPJCount: 0
        };
      }
  
      aggregatedData[monthYear].quantidadeGlosa += obj.quantidadeGlosa;
      aggregatedData[monthYear].licencasAtivas += obj.medicalLicencasAtivas;
      aggregatedData[monthYear].recebido += obj.recebido;
      aggregatedData[monthYear].faturado += obj.faturado;
      aggregatedData[monthYear].glosado += obj.glosado;
  
      aggregatedData[monthYear].distinctCNPJCount++;
    });
  
    return Object.values(aggregatedData);
  }
  

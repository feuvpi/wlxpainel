import type { PageServerLoad } from './$types';
import type { AggregatedData } from '$lib/interfaces/AggregatedData';
import type { ListaDeCliente } from '$lib/interfaces/ListaDeCliente';
import aggregatedStore from '$lib/stores/Aggregated';


let aggregatedData: { [monthYear: string]: AggregatedData } = {};

// let aggregatedData: AggregatedData[];

export const load = (async ({ cookies, locals }) => {
  const token = cookies.get('token')
  let clientes;
  if(token) {
      clientes = await getCooperativas(token);
      let clientes2: ListaDeCliente[];
      clientes2 = await getListaDeClientes(token)
      //console.log(clientes2)
      aggregatedData = GetAggregateData(clientes2);
      // aggregatedStore.update((aggregatedData) => {
      //   return [aggregatedData]
      // })
  }
  // if(!clientes)
  //     return {};
  // console.log(aggregatedData)
  return {aggregatedData: aggregatedData}
}) satisfies PageServerLoad;



function updatedAggregatedStore(data: any) {
  aggregatedStore.update((data) => {
    return [data];
  });
}

const api_url = import.meta.env.VITE_API_BASE_URL
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

function GetAggregateData(data: ListaDeCliente[]): { [key: string]: AggregatedData } {
  const aggregatedData: { [key: string]: AggregatedData } = {};

  data.forEach(obj => {
    const monthYear = obj.mesreferente.slice(0, 7);

    if (!aggregatedData[monthYear]) {
      aggregatedData[monthYear] = {
        mesAno: monthYear,
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

    aggregatedData[monthYear].distinctCNPJCount += 1;
  });

  return aggregatedData;
}


// function GetAggregateData(data: ListaDeCliente[]): AggregatedData[] {
//   const aggregatedData: { [key: string]: AggregatedData } = {};

//   data.forEach(obj => {
//     const monthYear = obj.mesreferente.slice(0, 7);

//     if (!aggregatedData[monthYear]) {
//       aggregatedData[monthYear] = {
//         mesAno: monthYear,
//         quantidadeGlosa: 0,
//         licencasAtivas: 0,
//         recebido: 0,
//         faturado: 0,
//         glosado: 0,
//         distinctCNPJCount: 0
//       };
//     }

//     aggregatedData[monthYear].quantidadeGlosa += obj.quantidadeGlosa;
//     aggregatedData[monthYear].licencasAtivas += obj.medicalLicencasAtivas;
//     aggregatedData[monthYear].recebido += obj.recebido;
//     aggregatedData[monthYear].faturado += obj.faturado;
//     aggregatedData[monthYear].glosado += obj.glosado;

//     aggregatedData[monthYear].distinctCNPJCount++;
//   });

//   return Object.values(aggregatedData);
// }
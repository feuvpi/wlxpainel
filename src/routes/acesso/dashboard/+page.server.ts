import type { PageServerLoad } from './$types';
import type { AggregatedData } from '$lib/interfaces/AggregatedData';
import type { ListaDeCliente } from '$lib/interfaces/ListaDeCliente';
import aggregatedStore from '$lib/stores/Aggregated';

// let aggregatedData: { [monthYear: string]: AggregatedData } = {};
let aggregatedData: AggregatedData[];


export const load = (async ({ cookies, locals }) => {
  const token = cookies.get('token')
  let clientes;
  if(token) {
      clientes = await getCooperativas(token);
      let clientes2: ListaDeCliente[];
      clientes2 = await getListaDeClientes(token)
      aggregatedData = GetAggregateData(clientes2);
      console.log(clientes2)
  }
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

  const responseData = await response.json()
  return responseData;
};

function GetAggregateData(data: ListaDeCliente[]): AggregatedData[] {
  const aggregatedDataArray: AggregatedData[] = [];

  data.forEach(obj => {
    const monthYear = obj.mesreferente.slice(0, 7);
    let aggregatedData = aggregatedDataArray.find(item => item.mesAno === monthYear);

    if (!aggregatedData) {
      aggregatedData = {
        mesAno: monthYear,
        quantidadeGlosa: 0,
        licencasAtivas: 0,
        cooperadosAtivos: 0,
        recebido: 0,
        faturado: 0,
        glosado: 0,
        distinctCNPJCount: 0
      };
      aggregatedDataArray.push(aggregatedData);
    }

    aggregatedData.quantidadeGlosa += obj.quantidadeGlosa;
    aggregatedData.licencasAtivas += obj.medicalLicencasAtivas;
    aggregatedData.cooperadosAtivos += obj.cooperadosAtivos;
    aggregatedData.recebido += obj.recebido;
    aggregatedData.faturado += obj.faturado;
    aggregatedData.glosado += obj.glosado;
    aggregatedData.distinctCNPJCount++;

  });

    // Sort the array by mesAno in descending order
    aggregatedDataArray.sort((a, b) => {
      if (a.mesAno < b.mesAno) return 1;
      if (a.mesAno > b.mesAno) return -1;
      return 0;
    });

  return aggregatedDataArray;
}

// function GetAggregateData(data: ListaDeCliente[]): { [key: string]: AggregatedData } {
//   const aggregatedData: { [key: string]: AggregatedData } = {};
//   data.forEach(obj => {
//     const monthYear = obj.mesreferente.slice(0, 7);

//     if (!aggregatedData[monthYear]) {
//       aggregatedData[monthYear] = {
//         mesAno: monthYear,
//         quantidadeGlosa: 0,
//         licencasAtivas: 0,
//         cooperadosAtivos: 0,
//         recebido: 0,
//         faturado: 0,
//         glosado: 0,
//         distinctCNPJCount: 0
//       };
//     }

//     aggregatedData[monthYear].quantidadeGlosa += obj.quantidadeGlosa;
//     aggregatedData[monthYear].licencasAtivas += obj.medicalLicencasAtivas;
//     aggregatedData[monthYear].recebido += obj.recebido;
//     aggregatedData[monthYear].cooperadosAtivos += obj.cooperadosAtivos;
//     aggregatedData[monthYear].faturado += obj.faturado;
//     aggregatedData[monthYear].glosado += obj.glosado;
//     aggregatedData[monthYear].distinctCNPJCount += 1;
//   });

//   return aggregatedData;
// }


// function GetAggregateData(data: ListaDeCliente[]): AggregatedData[] {
//   const aggregatedData: { [key: string]: AggregatedData } = {};

//   data.forEach(obj => {
//     const monthYear = obj.mesreferente.slice(0, 7);

//     if (!aggregatedData[monthYear]) {
//       aggregatedData[monthYear] = {
//         mesAno: monthYear,
//         quantidadeGlosa: 0,
//         licencasAtivas: 0,
//         cooperadosAtivos: 0,
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
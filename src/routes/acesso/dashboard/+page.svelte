<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import * as Card from "$lib/components/ui/card/index";
  import aggregatedStore from '$lib/stores/Aggregated';
	import * as Table from '$lib/components/ui/table';
  import Chart from 'chart.js/auto'

  const data2 = [
    { year: 2018, count: 10 },
    { year: 2019, count: 20 },
    { year: 2020, count: 15 },
    { year: 2021, count: 25 },
    { year: 2022, count: 22 },
    { year: 2023, count: 30 },
    { year: 2024, count: 28 },
  ];

  function createChart(type: any, elementId: any, label: any, chartLabel: any, data: any) {
    const acquisitionsElement = document.getElementById(elementId);
    if (!acquisitionsElement) {
      console.error('Element with id "Faturado" not found');
      return;
    }

    new Chart(
      acquisitionsElement as HTMLCanvasElement, // Assert that acquisitionsElement is HTMLCanvasElement
      {
        type: type,
        data: {
          // labels: data2.map(row => row.year),
          labels: chartLabel,
          // labels: data.aggregatedData.map(row => row.),
          datasets: [
            {
              label: label,
              // data: data2.map(row => row.count)
              data: data
            }
          ]
        }
      }
    );
  }
    
    export let data: PageData;
      aggregatedStore.update(() => {
        return [data.aggregatedData]
      })
    
    let aggregatedData: any; // Declare a variable to hold the data from the store

    // Subscribe to changes in the aggregatedStore
    $: {
        const unsubscribe = aggregatedStore.subscribe(value => {

            aggregatedData = value;
        });

        // Clean up the subscription when the component is destroyed
        onMount(() => unsubscribe());
    }

    // First, clone the array to avoid mutating the original data
const sortedData = [...data.aggregatedData];

// Sort the array based on the mesAno property in ascending order
sortedData.sort((a, b) => {
    // Assuming mesAno is in the format 'YYYY-MM', you can directly compare strings
    return a.mesAno.localeCompare(b.mesAno);
});

// Now, map the sortedData array

function rearrangeAndFilterData(aggregatedData: any): any {
    // Clone the array to avoid mutating the original data
    const sortedData = [...aggregatedData];

    // Sort the array based on the mesAno property in ascending order
    sortedData.sort((a, b) => {
        return a.mesAno.localeCompare(b.mesAno);
    });

    // Filter the sorted array to take out entries where faturado is not > 0
    const filteredData = sortedData.filter(row => row.faturado > 0);

    // Return the rearrangedData array
    return filteredData;
}

const rearrangedData = rearrangeAndFilterData(data.aggregatedData)

console.log(sortedData)

    onMount(() => {
    createChart('line', 'Faturado', 'Faturado por Clientes / Mês', rearrangedData.map(row => row.mesAno), rearrangedData.map(row => row.faturado));
    createChart('bar', 'CooperadosPorMes', 'Cooperados Ativos x Mês', rearrangedData.map(row => row.mesAno), rearrangedData.map(row => row.cooperadosAtivos));

    // createChart('pie', 'ClientesEstados', 'Divisão de Clientes Por Estados', data.aggregatedData.map(row => row.faturado));
    createChart('pie', 'LicencasPorClientes', 'Numero de Licenças por Clientes', rearrangedData.map(row => row.cnpj), rearrangedData.map(row => row.licencasAtivas));
});


  
    // const clientes = data.clientes;
    let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
  "";

  function formatCurrency(value: number | bigint) {
    if (!value && value !== 0) return '-'; // Handle null, undefined, or empty values
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }


  </script>


<div class="sticky top-0 z-1">
    <h1 class="font-bold my-4 text-4xl font-mono text-left mx-12">Visão Geral</h1>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-12 my-4">
      <Card.Root class="transform hover:scale-105 transition duration-300">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Clientes Totais</Card.Title>
          <!-- <DollarSign class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content class="shadow-sm">
            <div class="text-2xl font-bold">{data.aggregatedData ? data.aggregatedData[0].distinctCNPJCount : '-'}</div>
          <p class="text-xs text-muted-foreground">Referente a {data.aggregatedData[0].mesAno}</p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="transform hover:scale-105 transition duration-300">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Licenças Ativas</Card.Title>
          <!-- <Users class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content class="shadow-sm">
            <div class="text-2xl font-bold">{data.aggregatedData ? data.aggregatedData[0].licencasAtivas : '-'}</div>
          <p class="text-xs text-muted-foreground">{`${(data.aggregatedData[0].licencasAtivas - data.aggregatedData[1].licencasAtivas) >= 0 ? '+' : ''}${data.aggregatedData[0].licencasAtivas - data.aggregatedData[1].licencasAtivas}`} em relação ao ultimo mês.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="transform hover:scale-105 transition duration-300">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Cooperados Ativos</Card.Title>
          <!-- <CreditCard class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content class="shadow-sm">
            <div class="text-2xl font-bold">{data.aggregatedData ? data.aggregatedData[0].cooperadosAtivos : '-'}</div>
          <p class="text-xs text-muted-foreground">{data.aggregatedData[0].cooperadosAtivos - data.aggregatedData[1].cooperadosAtivos} em relação ao ultimo mês.</p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="transform hover:scale-105 transition duration-300">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Faturado Total</Card.Title>
          <!-- <Activity class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content class="shadow-sm">
          <div class="text-2xl font-bold">{formatCurrency(data.aggregatedData ? data.aggregatedData[0].faturado : 0)}</div>
          <p class="text-xs text-muted-foreground">{formatCurrency((data.aggregatedData[0].faturado ? data.aggregatedData[0].faturado : 0) - (data.aggregatedData[1].faturado ? data.aggregatedData[1].faturado : 0))} em relação ao ultimo periodo.</p>
        </Card.Content>
      </Card.Root>
    </div>




    <div class="flex flex-row mx-12 mb-4">
      <div class="w-1/2 pr-4">

        <div class="transform hover:scale-105 transition duration-300 overflow-x-auto h-full shadow-md border-blue-200 bg-white">
          <Table.Root class="border-2 text-xs shadow-md bg-white h-max">
            <Table.Caption>Lista de Logs recentes.</Table.Caption>
            <Table.Header class="text-xs">
              <Table.Row>
                <Table.Head class="text-center">Data</Table.Head>
                <Table.Head class="text-center">Cliente</Table.Head>
                <Table.Head class="text-center">Usuário</Table.Head>
                <Table.Head class="w-[700px]">Mensagem</Table.Head>
                <Table.Head class="">Aplicação</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body class="text-xs h-max">
              <Table.Row class="text-xs">
                <Table.Cell class="text-xs">10/04/2024</Table.Cell>
                <Table.Cell class="text-xs">Cooperativa X</Table.Cell>
                <Table.Cell class="text-xs">Usuario X</Table.Cell>
                <Table.Cell class="text-xs">Erro ao executar instrução sql. Inner Message - Tempo Limite de Execução Expirado.  O período de tempo limite terminou antes da conclusão da operação ou o servidor não está respondendo.</Table.Cell>
                <Table.Cell class="text-xs">Medical Desktop</Table.Cell>
              </Table.Row>
              <!-- Add more rows here if needed -->
              
            </Table.Body>
          </Table.Root>
        </div>
      </div>
      <div class="w-1/2 pl-4">
        <!-- Your other component goes here -->
        <div style=""><canvas class="transform hover:scale-105 transition duration-300 border-2 bg-white w-full border-blue-200 p-2 shadow-md" id="Faturado"></canvas></div>
      </div>
    </div>



    <div class="flex flex-row mx-12">

      <div class="w-1/2 pr-4">
        <div class="transform hover:scale-105 transition duration-300 overflow-x-auto h-fit border-blue-200 bg-white mb-4 p-2">
          <div style=""><canvas class="h-fit border-2 bg-white w-full border-blue-200 p-2 shadow-md" id="CooperadosPorMes"></canvas></div>
        </div>
      </div>



      <div class="w-1/4 pl-4">
        <!-- Your other component goes here -->
        <div style=""><canvas class="transform hover:scale-105 transition duration-300 border-2 bg-white w-full border-blue-200 p-2 shadow-md" id="ClientesEstados"></canvas></div>
      </div>

      <div class="w-1/4 pl-4">
        <!-- Your other component goes here -->
        <div style=""><canvas class="transform hover:scale-105 transition duration-300 border-2 bg-white w-full border-blue-200 p-2 shadow-md" id="LicencasPorClientes"></canvas></div>
      </div>
    </div>


  </div>
  

<script lang="ts">
    let titulo = "Weblynx";
    import type { PageData } from './$types';
    import * as Table from "$lib/components/ui/table/index.js";


    export let data: PageData;
    const clientes = data.clientes;
    const months = data.months;
</script>
<div>
    <div class="bg-white pt-10 w-9/12 m-auto">
        <h1 class=" text-slate-800 text-center text-4xl mb-10">Relatório</h1>

        <Table.Root>
            
            <Table.Header>
              <Table.Row>
                <Table.Head class="w-[100px]">Clientes</Table.Head>
                <Table.Head>Data de Envio</Table.Head>
                <Table.Head>Mês referente</Table.Head>
                <Table.Head class="text-right">Licencas Ativas</Table.Head>
                <Table.Head class="text-right">Cooperados Ativos</Table.Head>
                <Table.Head class="text-right">Qtd WhatsApp Primeiro Envio</Table.Head>
                <Table.Head class="text-right">Qtd WhatsApp Demais Envio</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {#each clientes as cliente, i (i)}
                <Table.Row>
                  <Table.Cell class="font-medium">{cliente.nomeFantasia}</Table.Cell>
                  <Table.Cell>{cliente.dataDeEnvio}</Table.Cell>
                  <Table.Cell>{cliente.mesreferente}</Table.Cell>
                  <Table.Cell class="text-right">{cliente.medicalLicencasAtivas}</Table.Cell>
                  <Table.Cell class="text-right">{cliente.cooperadosAtivos}</Table.Cell>
                  <Table.Cell class="text-right">{cliente.qtdWhatsAppPrimeiroEnvio}</Table.Cell>
                  <Table.Cell class="text-right">{cliente.qtdWhatsAppDemaisEnvio}</Table.Cell>
                </Table.Row>
                {/each}
            </Table.Body>
          </Table.Root>
    </div>
</div>
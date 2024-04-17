<script>
// @ts-nocheck
import * as Table from "$lib/components/ui/table";
import Delete from "carbon-icons-svelte/lib/Delete.svelte";
import Drawer from "$lib/components/Drawer.svelte"

export let clientes;
export let cliente2;

     function handleEdit(cliente){
      cliente2 = cliente
     }

     function handleDelete(){
      // delete logic
     }


</script>


  <Table.Root class="w-fit self-center border-2 scroll-table overflow-hidden " >
    <Table.Caption>Lista de Clientes</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-3/5 text-center">Cliente</Table.Head>
        <Table.Head class="w-1/6 text-center">CNPJ</Table.Head>
        <Table.Head class="w-2/6 text-center">Status</Table.Head>
        <Table.Head class="w-2/8 text-center">Editar</Table.Head>
        <Table.Head class="w-3/8 text-center">Deletar</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {#each clientes as cliente}
      <Table.Row>
        <Table.Cell class="font-medium text-center">{cliente.nomeFantasia}</Table.Cell>
        <Table.Cell class="text-center">{cliente.cnpj}</Table.Cell>
        <Table.Cell class="text-center">{cliente.removido ? 'Inativo' : 'Ativo'}</Table.Cell>
        <Table.Cell class="flex justify-center items-center" on:click={() => handleEdit(cliente)}><Drawer {cliente}/></Table.Cell>
        <Table.Cell class=" justify-center items-center" on:click={handleDelete}><Delete size={16}/>
        </Table.Cell>
      </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>



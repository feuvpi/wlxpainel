<script>
// @ts-nocheck
    import * as Table from "$lib/components/ui/table";
    import Delete from "carbon-icons-svelte/lib/Delete.svelte";
    import Edit from "carbon-icons-svelte/lib/Edit.svelte";
    import { Button } from "$lib/components/ui/button/index.ts";
    import Drawer from "$lib/components/Drawer.svelte"
    import * as Card from "$lib/components/ui/card/index.ts";


    export let clientes;
     console.log(clientes)

     export let cliente2;

     function handleEdit(cliente){
      console.log("Entrei")
      cliente2 = cliente
     }

     function handleDelete(){
      // delete logic
     }


</script>
<!-- <div class="overflow-hidden min-w-full pl-2 mt-4 ml-8"> -->
  <!-- <Button class="bg-slate-400">Adicionar</Button> -->

  <Table.Root class="w-fit px-8 self-center border-red-500 scroll-table" >
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

<!-- </div> -->



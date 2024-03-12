<script>
// @ts-nocheck

    import * as Table from "$lib/components/ui/table";

    import Delete from "carbon-icons-svelte/lib/Delete.svelte";

    import Edit from "carbon-icons-svelte/lib/Edit.svelte";

     export let clientes;
     console.log(clientes)


</script>
<div class="overflow-hidden min-w-full pl-2">
  <Table.Root class="ml-8 pl-4 max-w-6xl">
    <Table.Caption>A list of your recent invoices.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-1/4 text-center">Cliente</Table.Head>
        <Table.Head class="w-1/8 text-center">CNPJ</Table.Head>
        <Table.Head class="w-1/8 text-center">Status</Table.Head>
        <Table.Head class="w-1/8 text-center">Editar</Table.Head>
        <Table.Head class="w-1/8 text-center">Deletar</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {#each clientes as cliente}
      <Table.Row>
        <Table.Cell class="font-medium text-center">{cliente.nomeFantasia}</Table.Cell>
        <Table.Cell class="text-center">{cliente.cnpj}</Table.Cell>
        <Table.Cell class="text-center">{cliente.removido ? 'Inativo' : 'Ativo'}</Table.Cell>
        <Table.Cell class="flex justify-center items-center"><Edit size={16}/></Table.Cell>
        <Table.Cell class=" justify-center items-center"><Delete size={16}/></Table.Cell>
      </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>

</div>

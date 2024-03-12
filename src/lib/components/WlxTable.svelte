<script>
// @ts-nocheck

    import * as Table from "$lib/components/ui/table";

     export let clientes;
     console.log(clientes)

</script>
<div>
  <Table.Root>
    <Table.Caption>A list of your recent invoices.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">Cliente</Table.Head>
        <Table.Head>CNPJ</Table.Head>
        <Table.Head class="">Status</Table.Head>
        <Table.Head class="">Editar</Table.Head>
        <Table.Head class="">Deletar</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {#each clientes as cliente}
      <Table.Row>
        <Table.Cell class="font-medium">{cliente.nomeFantasia}</Table.Cell>
        <Table.Cell>{cliente.cnpj}</Table.Cell>
        <Table.Cell>{cliente.cnpj}</Table.Cell>
        <Table.Cell class="">{cliente.removido}</Table.Cell>
      </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>

</div>

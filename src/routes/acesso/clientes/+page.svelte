<script lang="ts">
  import type { PageData } from './$types';
  import WlxTable from "$lib/components/WlxTable.svelte";    
  import { mediaQuery } from "svelte-legos";
	import { onMount } from 'svelte';
  import ControlBar from '$lib/components/ControlBar.svelte';
	import * as Card from "$lib/components/ui/card/index";
  export let data: PageData;

  const clientes = data.clientes;
  let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
"";
</script>


<div class="sticky top-0 bg-white z-1">
  <h1 class="font-bold my-8 text-4xl font-mono text-left mx-12">Lista de Clientes</h1>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-12 my-4">
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <Card.Title class="text-sm font-medium">Clientes Totais</Card.Title>
        <!-- <DollarSign class="h-4 w-4 text-muted-foreground" /> -->
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">$45,231.89</div>
        <p class="text-xs text-muted-foreground">+20.1% from last month</p>
      </Card.Content>
    </Card.Root>
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <Card.Title class="text-sm font-medium">Clientes Ativos</Card.Title>
        <!-- <Users class="h-4 w-4 text-muted-foreground" /> -->
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">+2350</div>
        <p class="text-xs text-muted-foreground">+180.1% from last month</p>
      </Card.Content>
    </Card.Root>
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <Card.Title class="text-sm font-medium">Licenças Ativas</Card.Title>
        <!-- <CreditCard class="h-4 w-4 text-muted-foreground" /> -->
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">+12,234</div>
        <p class="text-xs text-muted-foreground">+19% from last month</p>
      </Card.Content>
    </Card.Root>
    <Card.Root>
      <Card.Header
        class="flex flex-row items-center justify-between space-y-0 pb-2"
      >
        <Card.Title class="text-sm font-medium">Numero de Cooperados</Card.Title>
        <!-- <Activity class="h-4 w-4 text-muted-foreground" /> -->
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">+573</div>
        <p class="text-xs text-muted-foreground">+201 since last hour</p>
      </Card.Content>
    </Card.Root>
  </div>
  <ControlBar {p}/>
</div>

<div class="overflow-hidden flex-grid min-w-full px-10 border-indigo-400 mt-4 justify-center" >



<!-- component -->
<div class="overflow-hidden flex-grid min-w-full px-10 border-indigo-400 mt-4 justify-center">
  <!-- Your scrolling component goes here -->
  <!-- Assuming this is where your scrolling component goes -->
  <WlxTable bind:cliente2={p} {clientes}></WlxTable>
</div>


</div>








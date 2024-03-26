<script lang="ts">
  import type { PageData } from './$types';
  import WlxTable from "$lib/components/WlxTable.svelte";    
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import * as Drawer from "$lib/components/ui/drawer/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Checkbox } from "$lib/components/ui/checkbox/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { mediaQuery } from "svelte-legos";
	import { onMount } from 'svelte';

   // Function to handle scroll behavior
  //  function handleScroll() {
  //   const title = document.querySelector('.scroll-title');
  //   const table = document.querySelector('.scroll-table');

  //   // Calculate the offset for docking the title
  //   const offset = table!.getBoundingClientRect().top;

  //   // If the table scrolls out of view, dock the title
  //   if (offset <= 0) {
  //     title!.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'bg-white', 'shadow-md');
  //   } else {
  //     title!.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'bg-white', 'shadow-md');
  //   }
  // }

  import ControlBar from '$lib/components/ControlBar.svelte';
	import * as Card from "$lib/components/ui/card/index";

  export let data: PageData;
  let open = false;
  let checked = false;
  const clientes = data.clientes;
  const isDesktop = mediaQuery("(min-width: 768px)");
  let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
  let clientId = ""
  $: nomeFantasia = p ? p.nomeFantasia : "";
  $: razaoSocial = p ? p.razaoSocial : "";
  $: cnpj = p ? p.cnpj : "";

</script>
<div class="sticky top-0 bg-white z-50">
  <h1 class="font-bold my-8 text-4xl font-mono text-left px-4">Lista de Clientes</h1>
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







